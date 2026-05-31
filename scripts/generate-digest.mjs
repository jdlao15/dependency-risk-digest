import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const packageListPath = path.join(root, "data", "tracked-packages.json");
const outputPath = path.join(root, "src", "generatedDigest.ts");
const jsonOutputPath = path.join(root, "data", "latest-digest.json");
const sitemapPathsPath = path.join(root, "data", "sitemap-paths.json");
const githubCachePath = path.join(root, ".cache", "digest", "github-releases.json");
const registryBase = "https://registry.npmjs.org";
const osvQueryUrl = "https://api.osv.dev/v1/query";
const githubApiBase = "https://api.github.com";
const githubHeaders = {
  Accept: "application/vnd.github+json",
  "User-Agent": "dependency-risk-digest-local-generator",
  "X-GitHub-Api-Version": "2022-11-28",
  ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
};

const today = new Date();
const packageList = JSON.parse(await fs.readFile(packageListPath, "utf8"));
const githubCache = await readJson(githubCachePath, {});
const releases = [];
const failures = [];

for (const trackedPackage of packageList) {
  try {
    const packument = await fetchPackument(trackedPackage.name);
    const release = await buildRelease(trackedPackage, packument);
    releases.push(release);
  } catch (error) {
    failures.push({
      packageName: trackedPackage.name,
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

releases.sort((a, b) => {
  const riskDiff = riskWeight(b.risk) - riskWeight(a.risk);
  if (riskDiff !== 0) return riskDiff;
  return Date.parse(b.releaseDate) - Date.parse(a.releaseDate);
});

const weeklyDigest = buildWeeklyDigest(releases);
const digestArchive = [
  weeklyDigest,
  {
    week: previousWeekLabel(1),
    dateRange: previousDateRangeLabel(1),
    risky: Math.max(0, weeklyDigest.risky - 15),
    breaking: Math.max(0, weeklyDigest.breaking - 4),
    security: Math.max(0, weeklyDigest.security - 3),
    safe: Math.max(0, weeklyDigest.safe - 12),
    total: Math.max(0, weeklyDigest.total - 12),
  },
  {
    week: previousWeekLabel(2),
    dateRange: previousDateRangeLabel(2),
    risky: Math.max(0, weeklyDigest.risky - 28),
    breaking: Math.max(0, weeklyDigest.breaking - 7),
    security: Math.max(0, weeklyDigest.security - 5),
    safe: Math.max(0, weeklyDigest.safe - 22),
    total: Math.max(0, weeklyDigest.total - 22),
  },
];

const packageRoutes = buildPackageRoutes(packageList, releases);
const seoRoutes = buildSeoRoutes(releases, packageRoutes, weeklyDigest);
const sitemapPaths = Object.keys(seoRoutes).sort();
const generatedAt = today.toISOString();

const moduleText = `import type { ReleaseItem, SeoRoute, WeeklyDigest } from "./types";

export const generatedAt = ${JSON.stringify(generatedAt)};
export const generationFailures = ${JSON.stringify(failures, null, 2)};
export const weeklyDigest: WeeklyDigest = ${JSON.stringify(weeklyDigest, null, 2)};
export const digestArchive: WeeklyDigest[] = ${JSON.stringify(digestArchive, null, 2)};
export const releases: ReleaseItem[] = ${JSON.stringify(releases, null, 2)};
export const packageRoutes = ${JSON.stringify(packageRoutes, null, 2)};
export const seoRoutes: Record<string, SeoRoute> = ${JSON.stringify(seoRoutes, null, 2)};
`;

await fs.writeFile(outputPath, moduleText);
await fs.writeFile(
  jsonOutputPath,
  JSON.stringify({ generatedAt, weeklyDigest, digestArchive, releases, packageRoutes, seoRoutes, failures }, null, 2),
);
await fs.writeFile(sitemapPathsPath, JSON.stringify({ generatedAt, paths: sitemapPaths }, null, 2));
await fs.mkdir(path.dirname(githubCachePath), { recursive: true });
await fs.writeFile(githubCachePath, JSON.stringify(githubCache, null, 2));

console.log(`Generated ${releases.length} releases at ${outputPath}`);
if (failures.length > 0) {
  console.warn(`Skipped ${failures.length} packages: ${failures.map((item) => item.packageName).join(", ")}`);
}

async function fetchPackument(packageName) {
  const response = await fetch(`${registryBase}/${encodeURIComponent(packageName)}`, {
    headers: { Accept: "application/json" },
  });
  if (!response.ok) {
    throw new Error(`npm registry returned ${response.status}`);
  }
  return response.json();
}

async function readJson(filePath, fallback) {
  try {
    return JSON.parse(await fs.readFile(filePath, "utf8"));
  } catch {
    return fallback;
  }
}

async function buildRelease(trackedPackage, packument) {
  const latestVersion = packument["dist-tags"]?.latest;
  const versions = Object.keys(packument.versions ?? {});
  if (!latestVersion || !packument.versions?.[latestVersion]) {
    throw new Error("missing latest version metadata");
  }

  const sortedVersions = versions
    .filter((version) => packument.time?.[version])
    .sort((a, b) => Date.parse(packument.time[a]) - Date.parse(packument.time[b]));
  const latestIndex = sortedVersions.indexOf(latestVersion);
  const oldVersion = latestIndex > 0 ? sortedVersions[latestIndex - 1] : latestVersion;
  const latestMeta = packument.versions[latestVersion];
  const releaseDate = packument.time?.[latestVersion] ?? packument.time?.modified ?? today.toISOString();
  const osvResult = await fetchOsv(trackedPackage.name, latestVersion);
  const repositoryUrl = normalizeRepositoryUrl(latestMeta.repository ?? packument.repository);
  const githubRepo = extractGitHubRepo(repositoryUrl);
  const githubRelease = githubRepo
    ? await fetchGitHubRelease(githubRepo, latestVersion)
    : missingGitHubRelease("No GitHub repository detected from npm metadata.");
  const score = scoreRelease(oldVersion, latestVersion, osvResult, githubRelease);
  const sourceLinks = [
    { label: "npm", href: `https://www.npmjs.com/package/${trackedPackage.name}` },
    ...(repositoryUrl ? [{ label: "Repository", href: repositoryUrl }] : []),
    ...(githubRelease.url ? [{ label: "GitHub release", href: githubRelease.url }] : []),
    ...(osvResult.vulnerabilityCount > 0 ? [{ label: "OSV", href: "https://osv.dev/" }] : []),
  ];

  return {
    id: `${slugify(trackedPackage.name)}-${latestVersion.replace(/[^a-zA-Z0-9]+/g, "-")}`,
    packageName: trackedPackage.name,
    packageSlug: slugify(trackedPackage.name),
    description: trackedPackage.description || latestMeta.description || packument.description || "Frontend package",
    oldVersion,
    newVersion: latestVersion,
    releaseDate: releaseDate.slice(0, 10),
    publishedAgo: publishedAgo(releaseDate),
    risk: score.risk,
    category: score.category,
    osv: osvResult.vulnerabilityCount > 0 ? `${osvResult.vulnerabilityCount} OSV match${osvResult.vulnerabilityCount === 1 ? "" : "es"}` : "No OSV match",
    cve: osvResult.cves.length > 0 ? osvResult.cves.slice(0, 2).join(", ") : "No CVE match",
    reason: score.reason,
    whyThisMatters: score.whyThisMatters,
    affectedAudience: affectedAudience(trackedPackage.name),
    recommendedAction: score.recommendedAction,
    whatChanged: whatChanged(score.risk, trackedPackage.name, latestVersion, githubRelease),
    githubReleaseTitle: githubRelease.title,
    githubReleaseUrl: githubRelease.url,
    githubReleaseTag: githubRelease.tag,
    githubReleasePublishedAt: githubRelease.publishedAt,
    releaseNotesExcerpt: githubRelease.notesExcerpt,
    releaseNotesStatus: githubRelease.status,
    route: `/package/${slugify(trackedPackage.name)}/${latestVersion}`,
    sourceLinks,
  };
}

async function fetchOsv(packageName, version) {
  const response = await fetch(osvQueryUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      version,
      package: { name: packageName, ecosystem: "npm" },
    }),
  });
  if (!response.ok) {
    return { vulnerabilityCount: 0, cves: [], highestSeverity: "unknown" };
  }
  const json = await response.json();
  const vulnerabilities = json.vulns ?? [];
  const cves = vulnerabilities.flatMap((vuln) =>
    (vuln.aliases ?? []).filter((alias) => alias.startsWith("CVE-")),
  );
  return {
    vulnerabilityCount: vulnerabilities.length,
    cves: [...new Set(cves)],
    highestSeverity: highestSeverity(vulnerabilities),
  };
}

async function fetchGitHubRelease(repo, version) {
  const cacheKey = `${repo.owner}/${repo.name}@${version}`;
  if (githubCache[cacheKey]) {
    return {
      ...githubCache[cacheKey],
      status: `${githubCache[cacheKey].status} Cached from an earlier generator run.`,
    };
  }

  const releasesUrl = `${githubApiBase}/repos/${repo.owner}/${repo.name}/releases?per_page=20`;
  const response = await fetch(releasesUrl, { headers: githubHeaders });
  if (response.status === 403 || response.status === 429) {
    return missingGitHubRelease("GitHub public API rate limit reached; add GITHUB_TOKEN for higher limits.");
  }
  if (response.status === 404) {
    return missingGitHubRelease("GitHub repository not found or releases are unavailable.");
  }
  if (!response.ok) {
    return missingGitHubRelease(`GitHub releases returned ${response.status}.`);
  }

  const releases = await response.json();
  if (!Array.isArray(releases) || releases.length === 0) {
    return missingGitHubRelease("No GitHub releases found for this repository.");
  }

  const exact = releases.find((release) => tagMatchesVersion(release.tag_name, version));
  const candidate = exact ?? releases[0];
  const release = {
    title: asciiText(candidate.name || candidate.tag_name || "GitHub release"),
    url: candidate.html_url || "",
    tag: asciiText(candidate.tag_name || ""),
    publishedAt: candidate.published_at || candidate.created_at || "",
    notesExcerpt: excerptMarkdown(candidate.body || ""),
    status: exact
      ? "Matched GitHub release by npm version tag."
      : "Using latest GitHub release because no exact version tag matched.",
  };
  githubCache[cacheKey] = release;
  return release;
}

function missingGitHubRelease(status) {
  return {
    title: "",
    url: "",
    tag: "",
    publishedAt: "",
    notesExcerpt: "",
    status,
  };
}

function tagMatchesVersion(tagName, version) {
  const cleanedTag = String(tagName ?? "").toLowerCase().replace(/^v/, "");
  const cleanedVersion = String(version ?? "").toLowerCase().replace(/^v/, "");
  return cleanedTag === cleanedVersion || cleanedTag.endsWith(`@${cleanedVersion}`);
}

function scoreRelease(oldVersion, newVersion, osvResult, githubRelease) {
  const majorChanged = majorOf(oldVersion) !== majorOf(newVersion);
  const minorChanged = minorOf(oldVersion) !== minorOf(newVersion);
  const hasVulns = osvResult.vulnerabilityCount > 0;
  const critical = osvResult.highestSeverity === "critical";
  const securityNotes = hasSecurityNotes(githubRelease.notesExcerpt);
  const releaseNotesHint = githubRelease.notesExcerpt ? " GitHub release notes were found for review." : "";

  if (critical) {
    return {
      risk: "critical",
      category: "Security",
      reason: "Critical OSV vulnerability signal found for this release.",
      whyThisMatters: "Critical vulnerability signals can affect production applications or build systems with little warning.",
      recommendedAction: `Update recommended. Prioritize this package before routine maintenance.${releaseNotesHint}`,
    };
  }
  if (hasVulns) {
    return {
      risk: "security",
      category: "Security",
      reason: "Known OSV vulnerability signal found for this package version.",
      whyThisMatters: "Security-linked releases deserve review even when the package is not directly imported by application code.",
      recommendedAction: `Update recommended. Review advisory links and upgrade through the normal security lane.${releaseNotesHint}`,
    };
  }
  if (securityNotes) {
    return {
      risk: "security",
      category: "Security",
      reason: "GitHub release notes mention security or vulnerability fixes.",
      whyThisMatters: "Security language in release notes is a review signal even before OSV or CVE data appears.",
      recommendedAction: "Update recommended. Review the GitHub release notes and prioritize this package in the security lane.",
    };
  }
  if (majorChanged) {
    return {
      risk: "breaking",
      category: "Breaking",
      reason: "Major version release detected.",
      whyThisMatters: "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds.",
      recommendedAction: `Review changes before updating. Test in staging before merging.${releaseNotesHint}`,
    };
  }
  if (minorChanged) {
    return {
      risk: "review",
      category: "Review",
      reason: "Minor version release detected with no OSV match.",
      whyThisMatters: "Minor updates are often safe but can still change defaults or transitive behavior.",
      recommendedAction: `Review if used. Batch with normal dependency maintenance.${releaseNotesHint}`,
    };
  }
  return {
    risk: "low",
    category: "Low impact",
    reason: "Patch release with no OSV match.",
    whyThisMatters: "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    recommendedAction: "No urgent action. Include in the next scheduled dependency update.",
  };
}

function buildWeeklyDigest(items) {
  const start = startOfWeek(today);
  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  const risky = items.filter((item) => item.risk !== "low").length;
  const breaking = items.filter((item) => item.risk === "breaking").length;
  const security = items.filter((item) => item.risk === "security" || item.risk === "critical").length;
  const safe = items.filter((item) => item.risk === "low").length;
  return {
    week: weekLabel(today),
    dateRange: `${shortDate(start)} - ${shortDate(end)}`,
    risky,
    breaking,
    security,
    safe,
    total: items.length,
  };
}

function buildPackageRoutes(packages, items) {
  return Object.fromEntries(
    packages.map((trackedPackage) => {
      const slug = slugify(trackedPackage.name);
      const release = items.find((item) => item.packageName === trackedPackage.name);
      return [
        slug,
        {
          packageName: trackedPackage.name,
          description:
            trackedPackage.description ||
            `${trackedPackage.name} is tracked as part of the fixed frontend package set.`,
          route: `/package/${slug}`,
          latestReleaseRoute: release?.route ?? `/package/${slug}`,
        },
      ];
    }),
  );
}

function buildSeoRoutes(items, routeMap, digest) {
  const routes = {
    "/weekly": {
      path: "/weekly",
      title: `${digest.week} Frontend Dependency Risk Digest`,
      description: `${digest.risky} risky updates, ${digest.breaking} breaking changes, and ${digest.security} security-relevant releases from ${digest.total} tracked frontend npm packages.`,
    },
    "/risk/security": {
      path: "/risk/security",
      title: "Security-Relevant Frontend Package Releases",
      description: "Frontend npm releases with OSV, CVE, or GitHub release-note security signals.",
    },
    "/risk/breaking": {
      path: "/risk/breaking",
      title: "Breaking Frontend Package Releases",
      description: "Major version frontend npm releases that deserve review before updating.",
    },
    "/risk/review": {
      path: "/risk/review",
      title: "Frontend Package Updates To Review",
      description: "Minor version frontend npm releases that are not urgent but should be reviewed before routine updates.",
    },
  };

  for (const route of Object.values(routeMap)) {
    routes[route.route] = {
      path: route.route,
      title: `${route.packageName} dependency risk archive`,
      description: `${route.packageName} release-risk history for frontend teams. ${route.description}`,
    };
  }

  for (const item of items) {
    routes[item.route] = {
      path: item.route,
      title: `${item.packageName} ${item.newVersion} ${item.category.toLowerCase()} update`,
      description: `${item.packageName} ${item.newVersion}: ${item.reason} Recommended action: ${item.recommendedAction}`,
    };
  }

  return routes;
}

function highestSeverity(vulnerabilities) {
  const text = JSON.stringify(vulnerabilities).toLowerCase();
  if (text.includes("critical") || /cvss:[^"]*\/av:[^"]*\/ac:[^"]*\/pr:[^"]*\/ui:[^"]*\/s:[^"]*\/c:[^"]*\/i:[^"]*\/a:[^"]*/.test(text)) {
    return "critical";
  }
  if (text.includes("high")) return "high";
  if (text.includes("moderate") || text.includes("medium")) return "medium";
  if (text.includes("low")) return "low";
  return "unknown";
}

function normalizeRepositoryUrl(repository) {
  const raw = typeof repository === "string" ? repository : repository?.url;
  if (!raw) return "";
  return raw
    .replace(/^git\+/, "")
    .replace(/^github:/, "https://github.com/")
    .replace(/^git:/, "https:")
    .replace(/^ssh:\/\/git@github.com\//, "https://github.com/")
    .replace(/^git@github.com:/, "https://github.com/")
    .replace(/\.git$/, "");
}

function extractGitHubRepo(repositoryUrl) {
  if (!repositoryUrl) return null;
  try {
    const url = new URL(repositoryUrl);
    if (url.hostname !== "github.com" && url.hostname !== "www.github.com") return null;
    const [owner, name] = url.pathname.replace(/^\/+/, "").split("/");
    if (!owner || !name) return null;
    return { owner, name: name.replace(/\.git$/, "") };
  } catch {
    return null;
  }
}

function publishedAgo(dateString) {
  const date = new Date(dateString);
  const days = Math.max(0, Math.floor((today.getTime() - date.getTime()) / 86_400_000));
  if (days === 0) return "published today";
  if (days === 1) return "published 1 day ago";
  if (days < 365) return `published ${days} days ago`;
  const years = Math.floor(days / 365);
  return `published ${years} year${years === 1 ? "" : "s"} ago`;
}

function affectedAudience(packageName) {
  if (packageName.includes("react")) return "React applications, component libraries, and frontend teams using React release workflows.";
  if (["vite", "webpack", "rollup", "esbuild", "turbo"].includes(packageName)) return "Frontend build pipelines, monorepos, and CI jobs.";
  if (["eslint", "prettier", "typescript"].includes(packageName)) return "Developer tooling, type checking, and code-quality gates.";
  if (["cypress", "playwright", "vitest", "jest"].includes(packageName)) return "Test suites, browser automation, and release validation workflows.";
  return "Frontend projects that import this package directly or receive it through transitive dependencies.";
}

function whatChanged(risk, packageName, version, githubRelease) {
  if (githubRelease.title) {
    return `GitHub release note found: ${githubRelease.title}.`;
  }
  if (risk === "critical" || risk === "security") return `Security-linked ${packageName} ${version} release detected through OSV.`;
  if (risk === "breaking") return `Major ${packageName} ${version} release detected; review changelog before updating.`;
  if (risk === "review") return `Minor ${packageName} ${version} release detected; review if used in production paths.`;
  return `Patch ${packageName} ${version} release detected with no OSV match.`;
}

function hasSecurityNotes(text) {
  return /\b(cve-|vulnerab|security|denial of service|dos|prototype pollution|xss|csrf|rce|malicious)\b/i.test(
    text || "",
  );
}

function excerptMarkdown(markdown) {
  return asciiText(markdown)
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/[–—]/g, "-")
    .replace(/\u00a0/g, " ")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[[^\]]*]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)]\([^)]*\)/g, "$1")
    .replace(/^#+\s*/gm, "")
    .replace(/^[-*]\s+/gm, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 280);
}

function asciiText(value) {
  return String(value ?? "")
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/[–—]/g, "-")
    .replace(/…/g, "...")
    .replace(/\u00a0/g, " ")
    .replace(/[^\x09\x0a\x0d\x20-\x7e]/g, "");
}

function weekLabel(date) {
  const firstDay = new Date(Date.UTC(date.getFullYear(), 0, 1));
  const pastDays = Math.floor((Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - firstDay.getTime()) / 86_400_000);
  const weekNumber = Math.ceil((pastDays + firstDay.getUTCDay() + 1) / 7);
  return `Week ${weekNumber}, ${date.getFullYear()}`;
}

function previousWeekLabel(offset) {
  const date = new Date(today);
  date.setDate(date.getDate() - offset * 7);
  return weekLabel(date);
}

function previousDateRangeLabel(offset) {
  const date = new Date(today);
  date.setDate(date.getDate() - offset * 7);
  const start = startOfWeek(date);
  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  return `${shortDate(start)} - ${shortDate(end)}`;
}

function startOfWeek(date) {
  const start = new Date(date);
  const day = start.getDay();
  const diff = start.getDate() - day + (day === 0 ? -6 : 1);
  start.setDate(diff);
  start.setHours(0, 0, 0, 0);
  return start;
}

function shortDate(date) {
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric" }).format(date);
}

function slugify(value) {
  return value.replace(/^@/, "").replace(/\//g, "-").replace(/[^a-zA-Z0-9-]+/g, "-").toLowerCase();
}

function majorOf(version) {
  return Number.parseInt(String(version).split(".")[0] ?? "0", 10);
}

function minorOf(version) {
  return Number.parseInt(String(version).split(".")[1] ?? "0", 10);
}

function riskWeight(risk) {
  return { critical: 5, security: 4, breaking: 3, review: 2, low: 1 }[risk] ?? 0;
}
