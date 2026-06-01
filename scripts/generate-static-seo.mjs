import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const publicDir = path.join(root, "public");
const sitemapPathsPath = path.join(root, "data", "sitemap-paths.json");
const digestPath = path.join(root, "data", "latest-digest.json");
const siteUrl = (process.env.SITE_URL || "https://dependency-risk-digest.vercel.app").replace(/\/$/, "");

const sitemapData = JSON.parse(await fs.readFile(sitemapPathsPath, "utf8"));
const digestData = JSON.parse(await fs.readFile(digestPath, "utf8"));
const paths = Array.from(new Set(["/", ...sitemapData.paths])).sort();

await fs.mkdir(publicDir, { recursive: true });
await fs.writeFile(path.join(publicDir, "sitemap.xml"), buildSitemap(paths, sitemapData.generatedAt));
await fs.writeFile(path.join(publicDir, "robots.txt"), buildRobots());
await fs.writeFile(path.join(publicDir, "feed.xml"), buildFeed(digestData));

console.log(`Generated public/sitemap.xml, public/robots.txt, and public/feed.xml for ${paths.length} routes`);

function buildSitemap(routePaths, generatedAt) {
  const lastmod = new Date(generatedAt).toISOString();
  const urls = routePaths
    .map((routePath) => {
      const loc = routePath === "/" ? siteUrl : `${siteUrl}${routePath}`;
      return [
        "  <url>",
        `    <loc>${escapeXml(loc)}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <changefreq>${routePath === "/weekly" || routePath === "/" ? "weekly" : "daily"}</changefreq>`,
        `    <priority>${priorityFor(routePath)}</priority>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    "</urlset>",
    "",
  ].join("\n");
}

function buildRobots() {
  return [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${siteUrl}/sitemap.xml`,
    "",
  ].join("\n");
}

function buildFeed(data) {
  const generatedAt = new Date(data.generatedAt).toUTCString();
  const items = [
    {
      title: `${data.weeklyDigest.week} Frontend Dependency Risk Digest`,
      link: `${siteUrl}/weekly`,
      guid: `${siteUrl}/weekly#${data.generatedAt}`,
      pubDate: generatedAt,
      description: `${data.weeklyDigest.risky} risky updates, ${data.weeklyDigest.breaking} breaking changes, ${data.weeklyDigest.security} security-relevant releases, OSV/CVE checks, release notes, and recommended actions.`,
    },
    ...data.digestArchive.slice(0, 8).map((digest) => ({
      title: `${digest.week} dependency-risk archive`,
      link: `${siteUrl}${digest.route}`,
      guid: `${siteUrl}${digest.route}#${digest.generatedAt ?? data.generatedAt}`,
      pubDate: new Date(digest.generatedAt ?? data.generatedAt).toUTCString(),
      description: `${digest.dateRange}: ${digest.risky} risky updates, ${digest.breaking} breaking changes, ${digest.security} security-relevant releases, and ${digest.total} tracked frontend npm packages.`,
    })),
    ...data.releases.slice(0, 30).map((release) => ({
      title: `${release.packageName} ${release.newVersion} ${release.category.toLowerCase()} update`,
      link: `${siteUrl}${release.route}`,
      guid: `${siteUrl}${release.route}#${data.generatedAt}`,
      pubDate: new Date(release.releaseDate).toUTCString(),
      description: `${release.reason} OSV: ${release.osv}. CVE: ${release.cve}. Recommended action: ${release.recommendedAction}`,
    })),
  ];

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "  <channel>",
    "    <title>Dependency Risk Digest</title>",
    `    <link>${escapeXml(`${siteUrl}/weekly`)}</link>`,
    "    <description>Frontend npm dependency-risk updates with OSV/CVE signals, release notes, breaking changes, security updates, and recommended actions.</description>",
    `    <atom:link href="${escapeXml(`${siteUrl}/feed.xml`)}" rel="self" type="application/rss+xml" />`,
    "    <language>en-us</language>",
    `    <lastBuildDate>${generatedAt}</lastBuildDate>`,
    ...items.map(feedItem),
    "  </channel>",
    "</rss>",
    "",
  ].join("\n");
}

function feedItem(item) {
  return [
    "    <item>",
    `      <title>${escapeXml(item.title)}</title>`,
    `      <link>${escapeXml(item.link)}</link>`,
    `      <guid isPermaLink="false">${escapeXml(item.guid)}</guid>`,
    `      <pubDate>${escapeXml(item.pubDate)}</pubDate>`,
    `      <description>${escapeXml(item.description)}</description>`,
    "    </item>",
  ].join("\n");
}

function priorityFor(routePath) {
  if (routePath === "/" || routePath === "/weekly") return "1.0";
  if (routePath.startsWith("/risk/")) return "0.8";
  if (routePath.split("/").length > 3) return "0.7";
  return "0.6";
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
