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
const releases = digestData.releases ?? [];
const packageRoutes = digestData.packageRoutes ?? {};
const categoryRoutes = digestData.categoryRoutes ?? {};
const releaseByRoute = new Map(releases.map((release) => [release.route, release]));
const packageByRoute = new Map(Object.values(packageRoutes).map((route) => [route.route, route]));
const categoryByRoute = new Map(Object.values(categoryRoutes).map((route) => [route.route, route]));

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
  const schemaItems = [{
    "@context": "https://schema.org",
    "@type": pageTypeFor(routePath),
    name: title,
    url,
    description,
    isPartOf: {
      "@type": "WebSite",
      name: "Dependency Risk Digest",
      url: `${siteUrl}/weekly`,
    },
  }];
  const breadcrumbs = buildBreadcrumbs(routePath, seo);
  if (breadcrumbs.length > 1) {
    schemaItems.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    });
  }
  const articleSchema = buildArticleSchema(routePath, title, description, url);
  if (articleSchema) schemaItems.push(articleSchema);

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
      `<script id="route-schema" type="application/ld+json">${JSON.stringify(schemaItems)}</script>`,
    )
    .replace(
      '<div id="root"></div>',
      `<div id="root"></div>\n    <noscript id="route-summary">${buildNoScriptSummary(routePath, title, description, breadcrumbs)}</noscript>`,
    );
}

function pageTypeFor(routePath) {
  if (routePath === "/weekly" || routePath.startsWith("/weekly/")) return "CollectionPage";
  if (routePath.startsWith("/package/") && routePath.split("/").length === 4) return "TechArticle";
  if (
    routePath === "/packages" ||
    routePath.startsWith("/category/") ||
    routePath.startsWith("/package/") ||
    routePath.startsWith("/risk/")
  ) return "CollectionPage";
  return "WebPage";
}

function buildArticleSchema(routePath, title, description, url) {
  if (!routePath.startsWith("/weekly") && !(routePath.startsWith("/package/") && routePath.split("/").length === 4)) {
    return null;
  }
  const release = releaseByRoute.get(routePath);
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: title,
    description,
    url,
    datePublished: release?.releaseDate ?? digestData.generatedAt,
    dateModified: digestData.generatedAt,
    author: {
      "@type": "Organization",
      name: "Dependency Risk Digest",
    },
    publisher: {
      "@type": "Organization",
      name: "Dependency Risk Digest",
    },
    mainEntityOfPage: url,
  };
}

function buildBreadcrumbs(routePath, seo) {
  const items = [{ name: "Latest Weekly Digest", url: `${siteUrl}/weekly` }];
  if (routePath === "/" || routePath === "/weekly") return items;
  if (routePath.startsWith("/weekly/")) {
    items.push({ name: seo.title.replace(" frontend dependency risk archive", ""), url: `${siteUrl}${routePath}` });
    return items;
  }
  if (routePath.startsWith("/risk/")) {
    items.push({ name: "Risk", url: `${siteUrl}/risk/security` });
    items.push({ name: seo.title.replace("Frontend npm ", "").replace("Frontend Package ", ""), url: `${siteUrl}${routePath}` });
    return items;
  }
  if (routePath === "/sponsor") {
    items.push({ name: "Sponsor", url: `${siteUrl}/sponsor` });
    return items;
  }
  if (routePath === "/methodology") {
    items.push({ name: "Methodology", url: `${siteUrl}/methodology` });
    return items;
  }
  if (routePath === "/packages") {
    items.push({ name: "Packages", url: `${siteUrl}/packages` });
    return items;
  }
  const categoryRoute = categoryByRoute.get(routePath);
  if (categoryRoute) {
    items.push({ name: "Packages", url: `${siteUrl}/packages` });
    items.push({ name: categoryRoute.label, url: `${siteUrl}${routePath}` });
    return items;
  }
  const release = releaseByRoute.get(routePath);
  if (release) {
    const packageRoute = `/package/${release.packageSlug}`;
    const packageInfo = packageByRoute.get(packageRoute);
    items.push({ name: "Packages", url: `${siteUrl}/packages` });
    if (packageInfo?.areaSlug && packageInfo?.areaLabel) {
      items.push({ name: packageInfo.areaLabel, url: `${siteUrl}/category/${packageInfo.areaSlug}` });
    }
    items.push({ name: release.packageName, url: `${siteUrl}${packageRoute}` });
    items.push({ name: release.newVersion, url: `${siteUrl}${routePath}` });
    return items;
  }
  const packageRoute = packageByRoute.get(routePath);
  if (packageRoute) {
    items.push({ name: "Packages", url: `${siteUrl}/packages` });
    if (packageRoute.areaSlug && packageRoute.areaLabel) {
      items.push({ name: packageRoute.areaLabel, url: `${siteUrl}/category/${packageRoute.areaSlug}` });
    }
    items.push({ name: packageRoute.packageName, url: `${siteUrl}${routePath}` });
  }
  return items;
}

function buildNoScriptSummary(routePath, title, description, breadcrumbs) {
  const release = releaseByRoute.get(routePath);
  const category = categoryByRoute.get(routePath);
  const packageInfo = packageByRoute.get(routePath);
  const directoryLinks =
    routePath === "/packages"
      ? Object.values(categoryRoutes).map((item) => ({
          label: item.label,
          href: item.route,
        }))
      : category
        ? category.packages.map((item) => ({
            label: `${item.packageName} package archive`,
            href: item.route,
          }))
        : [];
  const links = [
    { label: "Latest weekly digest", href: "/weekly" },
    { label: "Frontend package directory", href: "/packages" },
    { label: "Security updates", href: "/risk/security" },
    { label: "Breaking changes", href: "/risk/breaking" },
    { label: "Sponsor", href: "/sponsor" },
    ...(packageInfo?.areaSlug ? [{
      label: packageInfo.areaLabel,
      href: `/category/${packageInfo.areaSlug}`,
    }] : []),
    ...directoryLinks,
    ...(release ? [
      { label: `${release.packageName} package archive`, href: `/package/${release.packageSlug}` },
      { label: `${release.packageName} risk category`, href: riskRouteFor(release.risk) },
    ] : []),
  ];
  return [
    '<section class="route-noscript">',
    `<nav aria-label="Breadcrumb">${breadcrumbs.map((item) => `<a href="${escapeAttribute(new URL(item.url).pathname)}">${escapeHtml(item.name)}</a>`).join(" / ")}</nav>`,
    `<h1>${escapeHtml(title)}</h1>`,
    `<p>${escapeHtml(description)}</p>`,
    "<ul>",
    ...links.map((link) => `<li><a href="${escapeAttribute(link.href)}">${escapeHtml(link.label)}</a></li>`),
    "</ul>",
    "</section>",
  ].join("");
}

function riskRouteFor(risk) {
  if (risk === "security" || risk === "critical") return "/risk/security";
  if (risk === "breaking") return "/risk/breaking";
  return "/risk/review";
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
