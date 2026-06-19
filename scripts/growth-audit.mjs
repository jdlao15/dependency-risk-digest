import fs from "node:fs/promises";

const siteUrl = (process.env.SITE_URL || "https://dependency-risk-digest.vercel.app").replace(/\/$/, "");
const reportPath = process.env.GROWTH_AUDIT_REPORT_PATH || "growth-audit-report.md";
const resultPath = process.env.GROWTH_AUDIT_RESULT_PATH || "growth-audit-result.json";
const maxGeneratedAgeHours = Number(process.env.MAX_GENERATED_AGE_HOURS || 48);
const indexNowKey = process.env.INDEXNOW_KEY || "24522ec422af67f4cf6e75ac7f458df6";

const requiredRoutes = [
  "/weekly",
  "/packages",
  "/methodology",
  "/risk/security",
  "/risk/breaking",
  "/risk/review",
  "/package/react",
  "/category/core-frameworks",
];

const importantMetadataRoutes = [
  "/weekly",
  "/packages",
  "/methodology",
  "/risk/security",
  "/risk/breaking",
  "/risk/review",
  "/package/react",
];

const checks = [];
const warnings = [];
const failures = [];
const routeMetadata = [];
let currentCheck = null;
const searchIntentTerms = {
  "/weekly": ["frontend npm", "dependency risk", "security"],
  "/packages": ["npm", "package", "risk"],
  "/methodology": ["npm", "risk", "osv"],
  "/risk/security": ["security", "osv", "cve"],
  "/risk/breaking": ["breaking", "npm", "release"],
  "/risk/review": ["review", "npm", "update"],
  "/package/react": ["react", "npm", "risk"],
};

const weeklyHtml = await fetchText("/weekly", "weekly route");
const scriptAsset = findScriptAsset(weeklyHtml.body);
const appBundle = scriptAsset ? await fetchText(scriptAsset, "application bundle") : { body: "", status: 0 };
const sitemap = await fetchText("/sitemap.xml", "sitemap");
const robots = await fetchText("/robots.txt", "robots.txt");
const feed = await fetchText("/feed.xml", "rss feed");
const indexNowKeyFile = await fetchText(`/${indexNowKey}.txt`, "IndexNow key file");

check("Vercel Web Analytics tracker", () => {
  if (!scriptAsset) {
    fail("No application JavaScript asset was found in /weekly HTML.");
    return;
  }
  if (!appBundle.body.includes("/_vercel/insights")) {
    fail("The production JavaScript bundle does not include the Vercel Web Analytics endpoint.");
    return;
  }
  pass("Production bundle contains the Vercel Web Analytics endpoint.");
});

check("robots.txt discovery", () => {
  if (!robots.ok) fail(`robots.txt returned HTTP ${robots.status}.`);
  if (!robots.body.includes("User-agent: *")) fail("robots.txt does not include User-agent: *.");
  if (!robots.body.includes("Allow: /")) fail("robots.txt does not allow root crawling.");
  if (!robots.body.includes(`Sitemap: ${siteUrl}/sitemap.xml`)) {
    fail("robots.txt does not link to the production sitemap.");
  }
  if (currentCheck.failures.length === 0) pass("robots.txt allows crawling and points to sitemap.xml.");
});

const sitemapUrls = parseSitemapUrls(sitemap.body);
const sitemapPaths = sitemapUrls.map((url) => new URL(url).pathname);

check("sitemap coverage", () => {
  if (!sitemap.ok) fail(`sitemap.xml returned HTTP ${sitemap.status}.`);
  if (sitemapUrls.length < 150) fail(`Sitemap has only ${sitemapUrls.length} URLs; expected at least 150 public archive URLs.`);
  for (const routePath of requiredRoutes) {
    if (!sitemapPaths.includes(routePath)) fail(`Sitemap is missing ${routePath}.`);
  }
  if (sitemapPaths.filter((path) => path.startsWith("/package/") && path.split("/").length === 3).length < 75) {
    fail("Sitemap has fewer than 75 package archive routes.");
  }
  if (sitemapPaths.filter((path) => path.startsWith("/package/") && path.split("/").length === 4).length < 75) {
    fail("Sitemap has fewer than 75 release-risk routes.");
  }
  if (sitemapPaths.filter((path) => path.startsWith("/category/")).length < 8) {
    fail("Sitemap has fewer than 8 category archive routes.");
  }
  if (!sitemapPaths.some((path) => /^\/weekly\/\d{4}-w\d{2}$/.test(path))) {
    fail("Sitemap has no historical weekly archive route.");
  }
  if (currentCheck.failures.length === 0) pass(`Sitemap includes ${sitemapUrls.length} public URLs across weekly, package, category, risk, and archive routes.`);
});

check("freshness", () => {
  const timestamps = [
    ...collectIsoTimestamps(sitemap.body),
    ...collectIsoTimestamps(feed.body),
    ...collectIsoTimestamps(appBundle.body),
  ]
    .map((value) => new Date(value))
    .filter((value) => Number.isFinite(value.getTime()))
    .sort((a, b) => b.getTime() - a.getTime());
  const newestTimestamp = timestamps[0];
  if (!newestTimestamp) {
    fail("No generated timestamp found in sitemap, feed, or application bundle.");
    return;
  }
  const ageHours = (Date.now() - newestTimestamp.getTime()) / 3_600_000;
  if (ageHours > maxGeneratedAgeHours) {
    fail(`Newest generated timestamp is ${ageHours.toFixed(1)} hours old, above the ${maxGeneratedAgeHours}-hour limit.`);
    return;
  }
  pass(`Newest generated timestamp is ${ageHours.toFixed(1)} hours old.`);
});

check("rss feed", () => {
  if (!feed.ok) fail(`feed.xml returned HTTP ${feed.status}.`);
  if (!feed.body.includes("<rss") || !feed.body.includes("<channel>")) fail("feed.xml does not look like an RSS feed.");
  if (!feed.body.includes("Dependency Risk Digest")) fail("feed.xml does not identify Dependency Risk Digest.");
  if (!feed.body.includes("/package/")) fail("feed.xml does not include package release links.");
  if (currentCheck.failures.length === 0) pass("RSS feed is available and includes digest/package entries.");
});

check("IndexNow discovery", () => {
  if (!indexNowKeyFile.ok) fail(`IndexNow key file returned HTTP ${indexNowKeyFile.status}.`);
  if (indexNowKeyFile.body.trim() !== indexNowKey) {
    fail("IndexNow key file does not contain the configured key.");
  }
  if (currentCheck.failures.length === 0) {
    pass("IndexNow key file is hosted at the site root for supported search engine discovery.");
  }
});

for (const routePath of importantMetadataRoutes) {
  const page = routePath === "/weekly" ? weeklyHtml : await fetchText(routePath, `${routePath} route`);
  const metadata = extractMetadata(page.body);
  routeMetadata.push({ routePath, ...metadata });

  check(`${routePath} metadata`, () => {
    if (!page.ok) fail(`${routePath} returned HTTP ${page.status}.`);
    if (!metadata.title || metadata.title.length < 20 || metadata.title.length > 90) {
      fail(`${routePath} title is missing or outside the 20-90 character review range.`);
    }
    if (!metadata.description || metadata.description.length < 80 || metadata.description.length > 240) {
      fail(`${routePath} meta description is missing or outside the 80-240 character review range.`);
    }
    const expectedCanonical = `${siteUrl}${routePath}`;
    if (metadata.canonical !== expectedCanonical) {
      fail(`${routePath} canonical URL is ${metadata.canonical || "missing"}, expected ${expectedCanonical}.`);
    }
    if (!page.body.includes('id="route-schema"')) fail(`${routePath} has no JSON-LD route schema.`);
    if (!page.body.includes('id="route-summary"')) fail(`${routePath} has no noscript route summary.`);
    if (currentCheck.failures.length === 0) pass(`${routePath} has title, description, canonical URL, schema, and noscript summary.`);
  });
}

check("search intent coverage", () => {
  for (const item of routeMetadata) {
    const requiredTerms = searchIntentTerms[item.routePath] ?? [];
    const searchText = `${item.title} ${item.description}`.toLowerCase();
    for (const term of requiredTerms) {
      if (!searchText.includes(term)) {
        fail(`${item.routePath} title/description is missing search-intent term: ${term}.`);
      }
    }
  }
  if (currentCheck.failures.length === 0) {
    pass("Important routes preserve high-intent terms for frontend npm risk, security, breaking changes, OSV/CVE, and package archives.");
  }
});

check("metadata uniqueness", () => {
  const duplicateTitles = duplicates(routeMetadata.map((item) => item.title).filter(Boolean));
  const duplicateDescriptions = duplicates(routeMetadata.map((item) => item.description).filter(Boolean));
  if (duplicateTitles.length > 0) fail(`Duplicate titles found: ${duplicateTitles.join("; ")}.`);
  if (duplicateDescriptions.length > 0) fail(`Duplicate descriptions found: ${duplicateDescriptions.join("; ")}.`);
  if (currentCheck.failures.length === 0) pass("Important routes have unique titles and meta descriptions.");
});

check("internal discovery links", () => {
  const requiredLinkTexts = [
    "/packages",
    "/risk/security",
    "/risk/breaking",
    "/risk/review",
    "/methodology",
    "/package/react",
  ];
  for (const linkText of requiredLinkTexts) {
    if (!weeklyHtml.body.includes(linkText) && !appBundle.body.includes(linkText)) {
      fail(`Weekly route or app bundle does not include ${linkText}.`);
    }
  }
  if (currentCheck.failures.length === 0) pass("Key package, risk, methodology, and directory links are present.");
});

warn(
  "Traffic numbers are dashboard-only unless API access is separately added. Read Vercel Web Analytics for 7-day visitors, 7-day page views, top pages, and top referrers before declaring traffic growing, flat, zero, or unknown.",
);
warn(
  "Search growth still requires Google Search Console and Bing Webmaster Tools numbers: clicks, impressions, top queries, top pages, and sitemap/indexing errors.",
);

const result = {
  checkedAt: new Date().toISOString(),
  siteUrl,
  status: failures.length > 0 ? "fail" : "pass",
  failures,
  warnings,
  checks,
};

await fs.writeFile(resultPath, `${JSON.stringify(result, null, 2)}\n`);
await fs.writeFile(reportPath, buildReport(result));

if (failures.length > 0) {
  console.error(`${failures.length} growth audit failure(s). See ${reportPath}.`);
  process.exit(1);
}

console.log(`Growth audit passed for ${siteUrl}. See ${reportPath}.`);

function check(name, fn) {
  currentCheck = { name, status: "pass", details: [], failures: [] };
  fn();
  if (currentCheck.failures.length > 0) currentCheck.status = "fail";
  checks.push(currentCheck);
  currentCheck = null;
}

function pass(detail) {
  currentCheck.details.push(detail);
}

function fail(reason) {
  currentCheck.failures.push(reason);
  failures.push({ check: currentCheck.name, reason });
}

function warn(message) {
  warnings.push(message);
}

async function fetchText(routePath, name) {
  const url = routePath.startsWith("http") ? routePath : `${siteUrl}${routePath}`;
  try {
    const response = await fetch(url, {
      headers: {
        "Cache-Control": "no-cache",
        "User-Agent": "dependency-risk-digest-growth-audit",
      },
    });
    return {
      body: await response.text(),
      ok: response.ok,
      status: response.status,
      url,
      name,
    };
  } catch (error) {
    return {
      body: "",
      ok: false,
      status: 0,
      url,
      name,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

function findScriptAsset(html) {
  const match = html.match(/<script[^>]+src="([^"]+\.js)"/);
  if (!match) return "";
  return match[1].startsWith("http") ? match[1] : `${siteUrl}${match[1]}`;
}

function parseSitemapUrls(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => decodeXml(match[1]));
}

function collectIsoTimestamps(text) {
  return text.match(/20\d{2}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/g) ?? [];
}

function extractMetadata(html) {
  return {
    title: html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? "",
    description: html.match(/<meta\s+name="description"\s+content="([\s\S]*?)"\s*\/?>/i)?.[1]?.trim() ?? "",
    canonical: html.match(/<link\s+rel="canonical"\s+href="([\s\S]*?)"\s*\/?>/i)?.[1]?.trim() ?? "",
  };
}

function duplicates(values) {
  const seen = new Set();
  const repeated = new Set();
  for (const value of values) {
    if (seen.has(value)) repeated.add(value);
    seen.add(value);
  }
  return [...repeated];
}

function decodeXml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"');
}

function buildReport(result) {
  const checkRows = result.checks.map((item) => {
    const status = item.status === "pass" ? "PASS" : "FAIL";
    const detail = item.failures.length > 0 ? item.failures.join(" ") : item.details.join(" ");
    return `| ${status} | ${escapeMarkdown(item.name)} | ${escapeMarkdown(detail)} |`;
  });
  const failureText = result.failures.length > 0
    ? result.failures.map((item) => `- ${item.check}: ${item.reason}`).join("\n")
    : "- None";
  const warningText = result.warnings.map((item) => `- ${item}`).join("\n");

  return [
    "# Dependency Risk Digest Traffic Growth Audit",
    "",
    `Checked at: ${result.checkedAt}`,
    `Site: ${result.siteUrl}`,
    `Status: ${result.status.toUpperCase()}`,
    "",
    "## External Standard",
    "",
    "- Google Search Central SEO Starter Guide: useful content, clear titles, accurate descriptions, crawlable links.",
    "- Google Helpful Content guidance: content should help people first.",
    "- Bing Webmaster Guidelines: sitemap freshness, canonical URLs, internal links, and discoverable public URLs.",
    "- IndexNow: hosted key file and URL submission can notify supported search engines when public URLs change.",
    "- Vercel Web Analytics: visitors, page views, top pages, and referrers are the traffic measurement source.",
    "",
    "## Scorecard",
    "",
    "| Status | Check | Detail |",
    "| --- | --- | --- |",
    ...checkRows,
    "",
    "## Failures",
    "",
    failureText,
    "",
    "## Required Traffic Inputs",
    "",
    warningText,
    "",
    "## Next No-Cost Diagnostic Step",
    "",
    result.failures.length > 0
      ? "Fix the failed technical growth gate first, then rerun the growth audit."
      : "Read Vercel Web Analytics, Google Search Console, and Bing Webmaster Tools numbers, then compare them to docs/traffic-growth-standard.md.",
    "",
  ].join("\n");
}

function escapeMarkdown(value) {
  return String(value).replaceAll("|", "\\|").replaceAll("\n", " ");
}
