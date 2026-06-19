import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const siteUrl = (process.env.SITE_URL || "https://dependency-risk-digest.vercel.app").replace(/\/$/, "");
const indexNowEndpoint = process.env.INDEXNOW_ENDPOINT || "https://api.indexnow.org/indexnow";
const indexNowKey = process.env.INDEXNOW_KEY || "24522ec422af67f4cf6e75ac7f458df6";
const keyFileName = `${indexNowKey}.txt`;
const keyFilePath = path.join(root, "public", keyFileName);
const sitemapPathsPath = path.join(root, "data", "sitemap-paths.json");
const dryRun = process.argv.includes("--dry-run");

const hostedKey = (await fs.readFile(keyFilePath, "utf8")).trim();
if (hostedKey !== indexNowKey) {
  throw new Error(`IndexNow key file ${keyFileName} does not match the configured key.`);
}

const sitemapData = JSON.parse(await fs.readFile(sitemapPathsPath, "utf8"));
const paths = Array.isArray(sitemapData.paths) ? sitemapData.paths : [];
const urlList = Array.from(new Set(["/", ...paths]))
  .sort()
  .map((routePath) => {
    return routePath === "/" ? siteUrl : `${siteUrl}${routePath}`;
  });

const payload = {
  host: new URL(siteUrl).host,
  key: indexNowKey,
  keyLocation: `${siteUrl}/${keyFileName}`,
  urlList,
};

if (dryRun) {
  console.log(`IndexNow dry run: ${urlList.length} URLs ready for ${payload.host}.`);
  console.log(`Key location: ${payload.keyLocation}`);
  console.log(`Endpoint: ${indexNowEndpoint}`);
  console.log(`First URL: ${urlList[0]}`);
  console.log(`Last URL: ${urlList[urlList.length - 1]}`);
  process.exit(0);
}

const response = await fetch(indexNowEndpoint, {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "User-Agent": "dependency-risk-digest-indexnow",
  },
  body: JSON.stringify(payload),
});

const body = await response.text();
if (!response.ok) {
  throw new Error(`IndexNow submission failed with HTTP ${response.status}: ${body}`);
}

console.log(`IndexNow submitted ${urlList.length} URLs to ${indexNowEndpoint}.`);
console.log(`Response: HTTP ${response.status}${body ? ` ${body}` : ""}`);
