import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const publicDir = path.join(root, "public");
const sitemapPathsPath = path.join(root, "data", "sitemap-paths.json");
const siteUrl = (process.env.SITE_URL || "https://dependency-risk-digest.vercel.app").replace(/\/$/, "");

const sitemapData = JSON.parse(await fs.readFile(sitemapPathsPath, "utf8"));
const paths = Array.from(new Set(["/", ...sitemapData.paths])).sort();

await fs.mkdir(publicDir, { recursive: true });
await fs.writeFile(path.join(publicDir, "sitemap.xml"), buildSitemap(paths, sitemapData.generatedAt));
await fs.writeFile(path.join(publicDir, "robots.txt"), buildRobots());

console.log(`Generated public/sitemap.xml and public/robots.txt for ${paths.length} routes`);

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
