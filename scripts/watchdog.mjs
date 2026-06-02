import fs from "node:fs/promises";

const siteUrl = (process.env.SITE_URL || "https://dependency-risk-digest.vercel.app").replace(/\/$/, "");
const maxGeneratedAgeHours = Number(process.env.MAX_GENERATED_AGE_HOURS || 48);
const failureReportPath = process.env.WATCHDOG_FAILURE_PATH || "watchdog-failure.md";
const resultPath = process.env.WATCHDOG_RESULT_PATH || "watchdog-result.json";

const htmlRoutes = [
  { path: "/weekly", expectedText: "Latest Weekly Digest", name: "weekly page" },
  { path: "/packages", expectedText: "Frontend npm Package Risk Directory", name: "package directory" },
  { path: "/category/core-frameworks", expectedText: "Frameworks and Core UI", name: "frameworks category page" },
  { path: "/advertise", expectedText: "Advertise on Dependency Risk Digest", name: "advertising page" },
  { path: "/package/react", expectedText: "Latest release-risk page", name: "react package page" },
  { path: "/methodology", expectedText: "How Dependency Risk Digest Evaluates Frontend npm Updates", name: "methodology page" },
];
const feedRoute = "/feed.xml";

const failures = [];
const timestamps = [];

const weeklyHtml = await fetchRoute("/weekly", "weekly page");
const assetPath = findScriptAsset(weeklyHtml.body);
const appBundle = assetPath ? await fetchRoute(assetPath, "application bundle") : null;
if (!assetPath) {
  addFailure("application bundle", "Could not find the Vite JavaScript asset in /weekly HTML.", "Open the latest Vercel deployment and inspect the generated index.html script tag.");
}

if (appBundle) {
  collectTimestamps(appBundle.body, "application bundle");
}

for (const route of htmlRoutes) {
  const response = route.path === "/weekly" ? weeklyHtml : await fetchRoute(route.path, route.name);
  checkNonBlank(route.name, response.body, 300, `Open ${siteUrl}${route.path} in a browser and check whether Vercel is serving index.html.`);
  if (appBundle && !appBundle.body.includes(route.expectedText)) {
    addFailure(route.name, `Expected rendered text marker missing from application bundle: ${route.expectedText}`, `Run npm run refresh locally and inspect the route ${route.path}.`);
  }
}

const sitemap = await fetchRoute("/sitemap.xml", "sitemap");
checkNonBlank("sitemap", sitemap.body, 1000, "Run npm run generate:seo locally and inspect public/sitemap.xml.");
for (const expectedPath of ["/weekly", "/packages", "/category/core-frameworks", "/advertise", "/package/react"]) {
  if (!sitemap.body.includes(`${siteUrl}${expectedPath}`)) {
    addFailure("sitemap", `Missing ${expectedPath} from sitemap.xml.`, "Run npm run refresh and verify data/sitemap-paths.json includes the route.");
  }
}
if (!/\/weekly\/\d{4}-w\d{2}/.test(sitemap.body)) {
  addFailure("sitemap", "No historical weekly archive route found in sitemap.xml.", "Check data/weekly-history.json and the buildSeoRoutes weekly archive loop.");
}
collectTimestamps(sitemap.body, "sitemap");

const robots = await fetchRoute("/robots.txt", "robots.txt");
checkNonBlank("robots.txt", robots.body, 20, "Run npm run generate:seo locally and inspect public/robots.txt.");
if (!robots.body.includes(`Sitemap: ${siteUrl}/sitemap.xml`)) {
  addFailure("robots.txt", "robots.txt does not point to the production sitemap.", "Run npm run generate:seo and confirm SITE_URL is set correctly.");
}

const feed = await fetchRoute(feedRoute, "rss feed");
checkNonBlank("rss feed", feed.body, 500, "Run npm run generate:seo locally and inspect public/feed.xml.");
if (!feed.body.includes("<rss") || !feed.body.includes("<channel>") || !feed.body.includes("Dependency Risk Digest")) {
  addFailure("rss feed", "feed.xml does not look like a valid Dependency Risk Digest RSS feed.", "Run npm run generate:seo locally and inspect public/feed.xml.");
}
collectTimestamps(feed.body, "rss feed");

const newestTimestamp = timestamps
  .map((item) => ({ ...item, date: new Date(item.value) }))
  .filter((item) => Number.isFinite(item.date.getTime()))
  .sort((a, b) => b.date.getTime() - a.date.getTime())[0];

if (!newestTimestamp) {
  addFailure("generated timestamp", "No generated ISO timestamp found in the live bundle or sitemap.", "Inspect src/generatedDigest.ts and public/sitemap.xml from the latest deployment.");
} else {
  const ageHours = (Date.now() - newestTimestamp.date.getTime()) / 3_600_000;
  if (ageHours > maxGeneratedAgeHours) {
    addFailure(
      "generated timestamp",
      `Generated timestamp is stale: ${newestTimestamp.value} from ${newestTimestamp.source}, age ${ageHours.toFixed(1)} hours exceeds ${maxGeneratedAgeHours} hours.`,
      "Open GitHub Actions, run Refresh Dependency Digest manually, then check whether Vercel redeployed from main.",
    );
  }
}

const result = {
  checkedAt: new Date().toISOString(),
  siteUrl,
  maxGeneratedAgeHours,
  newestGeneratedTimestamp: newestTimestamp?.value ?? null,
  failures,
};

await fs.writeFile(resultPath, `${JSON.stringify(result, null, 2)}\n`);

if (failures.length > 0) {
  await fs.writeFile(failureReportPath, buildFailureReport(result));
  console.error(`${failures.length} watchdog check(s) failed. See ${failureReportPath}.`);
  process.exit(1);
}

console.log(`Watchdog checks passed for ${siteUrl}. Newest generated timestamp: ${newestTimestamp.value}.`);

async function fetchRoute(routePath, name) {
  const url = routePath.startsWith("http") ? routePath : `${siteUrl}${routePath}`;
  try {
    const response = await fetch(url, {
      headers: {
        "Cache-Control": "no-cache",
        "User-Agent": "dependency-risk-digest-watchdog",
      },
    });
    const body = await response.text();
    if (!response.ok) {
      addFailure(name, `${url} returned HTTP ${response.status}.`, `Open ${url} and inspect the Vercel deployment status.`);
    }
    return { body, status: response.status, url };
  } catch (error) {
    addFailure(name, `${url} could not be reached: ${error instanceof Error ? error.message : String(error)}.`, "Check whether the production Vercel deployment is reachable and DNS is resolving.");
    return { body: "", status: 0, url };
  }
}

function findScriptAsset(html) {
  const match = html.match(/<script[^>]+src="([^"]+\.js)"/);
  if (!match) return "";
  return match[1].startsWith("http") ? match[1] : `${siteUrl}${match[1]}`;
}

function checkNonBlank(name, body, minLength, nextStep) {
  if (body.trim().length < minLength) {
    addFailure(name, `${name} response is blank or too small (${body.trim().length} characters).`, nextStep);
  }
}

function collectTimestamps(text, source) {
  const matches = text.match(/20\d{2}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/g) ?? [];
  for (const value of matches) {
    timestamps.push({ value, source });
  }
}

function addFailure(check, reason, nextStep) {
  failures.push({ check, reason, nextStep });
}

function buildFailureReport(result) {
  const rows = result.failures
    .map((failure, index) => {
      return [
        `## ${index + 1}. ${failure.check}`,
        "",
        `Failure: ${failure.reason}`,
        "",
        `Suggested next diagnostic step: ${failure.nextStep}`,
      ].join("\n");
    })
    .join("\n\n");

  return [
    "# Dependency Risk Digest needs attention",
    "",
    `Checked at: ${result.checkedAt}`,
    `Site: ${result.siteUrl}`,
    `Newest generated timestamp: ${result.newestGeneratedTimestamp ?? "not found"}`,
    `Allowed generated age: ${result.maxGeneratedAgeHours} hours`,
    "",
    rows,
    "",
  ].join("\n");
}
