import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const siteUrl = (process.env.SITE_URL || "https://dependency-risk-digest.vercel.app").replace(/\/$/, "");
const distDir = path.join(root, "dist");
const digestPath = path.join(root, "data", "latest-digest.json");
const indexPath = path.join(distDir, "index.html");

const template = await fs.readFile(indexPath, "utf8");
const digestData = JSON.parse(await fs.readFile(digestPath, "utf8"));
const seoRoutes = digestData.seoRoutes ?? {};

const weeklySeo = seoRoutes["/weekly"] ?? {
  title: "Dependency Risk Digest",
  description: "Frontend npm dependency-risk updates with OSV and CVE signals, release notes, breaking changes, security updates, and recommended actions.",
};

await fs.writeFile(indexPath, applySeo(template, "/", weeklySeo));

for (const [routePath, seo] of Object.entries(seoRoutes)) {
  if (routePath === "/") continue;
  const outputPath = path.join(distDir, routePath.replace(/^\/+/, ""), "index.html");
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, applySeo(template, routePath, seo));
}

console.log(`Generated route-specific HTML for ${Object.keys(seoRoutes).length + 1} routes`);

function applySeo(html, routePath, seo) {
  const canonicalPath = routePath === "/" ? "/weekly" : routePath;
  const url = `${siteUrl}${canonicalPath}`;
  const title = `${seo.title} | Dependency Risk Digest`;
  const description = seo.description;
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    url,
    description,
    isPartOf: {
      "@type": "WebSite",
      name: "Dependency Risk Digest",
      url: `${siteUrl}/weekly`,
    },
  };

  return html
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`)
    .replace(/<meta\s+name="description"\s+content="[\s\S]*?"\s*\/>/i, meta("name", "description", description))
    .replace(/<meta\s+property="og:title"\s+content="[\s\S]*?"\s*\/>/i, meta("property", "og:title", title))
    .replace(/<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/>/i, meta("property", "og:description", description))
    .replace(/<meta\s+property="og:url"\s+content="[\s\S]*?"\s*\/>/i, meta("property", "og:url", url))
    .replace(/<meta\s+name="twitter:title"\s+content="[\s\S]*?"\s*\/>/i, meta("name", "twitter:title", title))
    .replace(/<meta\s+name="twitter:description"\s+content="[\s\S]*?"\s*\/>/i, meta("name", "twitter:description", description))
    .replace(/<link\s+rel="canonical"\s+href="[\s\S]*?"\s*\/>/i, `<link rel="canonical" href="${escapeAttribute(url)}" />`)
    .replace(
      /<script id="route-schema" type="application\/ld\+json">[\s\S]*?<\/script>/i,
      `<script id="route-schema" type="application/ld+json">${JSON.stringify(schema)}</script>`,
    );
}

function meta(attribute, key, content) {
  return `<meta ${attribute}="${escapeAttribute(key)}" content="${escapeAttribute(content)}" />`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll('"', "&quot;");
}
