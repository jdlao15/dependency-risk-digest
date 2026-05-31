import type { ReleaseItem, WeeklyDigest } from "./types";

export const weeklyDigest: WeeklyDigest = {
  week: "Week 20, 2026",
  dateRange: "May 12 - May 18",
  risky: 256,
  breaking: 79,
  security: 38,
  safe: 412,
  total: 785,
};

export const digestArchive: WeeklyDigest[] = [
  weeklyDigest,
  {
    week: "Week 19, 2026",
    dateRange: "May 5 - May 11",
    risky: 241,
    breaking: 72,
    security: 31,
    safe: 398,
    total: 742,
  },
  {
    week: "Week 18, 2026",
    dateRange: "Apr 28 - May 4",
    risky: 218,
    breaking: 66,
    security: 27,
    safe: 384,
    total: 695,
  },
];

export const releases: ReleaseItem[] = [
  {
    id: "minimist-1-2-8",
    packageName: "minimist",
    packageSlug: "minimist",
    description: "CLI argument parsing",
    oldVersion: "1.2.7",
    newVersion: "1.2.8",
    releaseDate: "2026-05-16",
    publishedAgo: "published 2 days ago",
    risk: "security",
    category: "Security",
    osv: "OSV seed match",
    cve: "CVE seed match",
    reason: "Prototype pollution in argument parsing paths.",
    whyThisMatters:
      "Nested object parsing can become dangerous when untrusted command-line or build input reaches configuration objects.",
    affectedAudience:
      "Frontend build scripts, CLI utilities, and package maintainers accepting user-provided flags.",
    recommendedAction:
      "Update recommended. Upgrade to 1.2.8 or later before the next dependency refresh.",
    whatChanged:
      "Validation was tightened around nested object keys during argument parsing.",
    route: "/package/minimist/1.2.8",
    sourceLinks: [
      { label: "npm", href: "https://www.npmjs.com/package/minimist" },
      { label: "GitHub release", href: "https://github.com/minimistjs/minimist" },
      { label: "OSV", href: "https://osv.dev/" },
    ],
  },
  {
    id: "react-router-dom-6-23-0",
    packageName: "react-router-dom",
    packageSlug: "react-router-dom",
    description: "Declarative routing for React",
    oldVersion: "6.22.3",
    newVersion: "6.23.0",
    releaseDate: "2026-05-15",
    publishedAgo: "published 3 days ago",
    risk: "breaking",
    category: "Breaking",
    osv: "No OSV match",
    cve: "No CVE match",
    reason: "Data API behavior changed for several router defaults.",
    whyThisMatters:
      "Apps that rely on legacy loader behavior may see changed redirect timing or pending UI states after the update.",
    affectedAudience:
      "React apps using data routers, route loaders, actions, and nested pending states.",
    recommendedAction:
      "Review changes before updating. Test route loaders and redirects in staging.",
    whatChanged:
      "Data router defaults were adjusted and legacy unstable flags moved closer to removal.",
    route: "/package/react-router-dom/6.23.0",
    sourceLinks: [
      { label: "npm", href: "https://www.npmjs.com/package/react-router-dom" },
      { label: "GitHub release", href: "https://github.com/remix-run/react-router" },
    ],
  },
  {
    id: "tanstack-react-query-5-66-0",
    packageName: "@tanstack/react-query",
    packageSlug: "tanstack-react-query",
    description: "Data fetching for React",
    oldVersion: "5.65.1",
    newVersion: "5.66.0",
    releaseDate: "2026-05-14",
    publishedAgo: "published 4 days ago",
    risk: "breaking",
    category: "Breaking",
    osv: "No OSV match",
    cve: "No CVE match",
    reason: "Default cache timing changed for inactive queries.",
    whyThisMatters:
      "A small cache default can cause extra network requests or visible loading states if apps assumed older query retention.",
    affectedAudience:
      "Frontend apps with heavy client-side data fetching and optimistic updates.",
    recommendedAction:
      "Review cache settings before updating. Pin explicit cacheTime values for critical flows.",
    whatChanged:
      "Inactive query cache behavior was normalized around shorter retention defaults.",
    route: "/package/tanstack-react-query/5.66.0",
    sourceLinks: [
      { label: "npm", href: "https://www.npmjs.com/package/@tanstack/react-query" },
      { label: "GitHub release", href: "https://github.com/TanStack/query" },
    ],
  },
  {
    id: "ws-8-18-1",
    packageName: "ws",
    packageSlug: "ws",
    description: "WebSocket implementation",
    oldVersion: "8.18.0",
    newVersion: "8.18.1",
    releaseDate: "2026-05-13",
    publishedAgo: "published 5 days ago",
    risk: "security",
    category: "Security",
    osv: "OSV seed match",
    cve: "CVE seed match",
    reason: "Denial-of-service risk in header parsing for large payloads.",
    whyThisMatters:
      "Real-time apps can expose WebSocket servers directly to untrusted clients and automated traffic.",
    affectedAudience:
      "Node-backed frontend apps, collaboration tools, dashboards, and dev servers using WebSockets.",
    recommendedAction:
      "Update recommended. Prioritize internet-facing WebSocket services.",
    whatChanged:
      "Payload and header parsing limits were hardened to reduce resource exhaustion paths.",
    route: "/package/ws/8.18.1",
    sourceLinks: [
      { label: "npm", href: "https://www.npmjs.com/package/ws" },
      { label: "GitHub release", href: "https://github.com/websockets/ws" },
      { label: "OSV", href: "https://osv.dev/" },
    ],
  },
  {
    id: "lodash-4-17-22",
    packageName: "lodash",
    packageSlug: "lodash",
    description: "Utility library",
    oldVersion: "4.17.21",
    newVersion: "4.17.22",
    releaseDate: "2026-05-12",
    publishedAgo: "published 6 days ago",
    risk: "review",
    category: "Review",
    osv: "No OSV match",
    cve: "No CVE match",
    reason: "Maintenance release with broad transitive reach.",
    whyThisMatters:
      "Low-risk packages can still trigger large lockfile churn because they sit deep in frontend dependency trees.",
    affectedAudience:
      "Projects with large lockfiles, monorepos, and strict dependency-review workflows.",
    recommendedAction:
      "Review if used. Batch with normal maintenance updates unless internal policy requires faster refresh.",
    whatChanged:
      "Compatibility fixes and dependency metadata cleanup in a widely used utility package.",
    route: "/package/lodash/4.17.22",
    sourceLinks: [
      { label: "npm", href: "https://www.npmjs.com/package/lodash" },
      { label: "Repository", href: "https://github.com/lodash/lodash" },
    ],
  },
  {
    id: "react-19-2-0",
    packageName: "react",
    packageSlug: "react",
    description: "UI library",
    oldVersion: "19.1.1",
    newVersion: "19.2.0",
    releaseDate: "2026-05-12",
    publishedAgo: "published 6 days ago",
    risk: "low",
    category: "Low impact",
    osv: "No OSV match",
    cve: "No CVE match",
    reason: "Minor release with no seed security signal.",
    whyThisMatters:
      "React remains a high-interest package, but this seed release does not cross the review threshold.",
    affectedAudience:
      "Frontend teams planning normal framework maintenance and compatibility testing.",
    recommendedAction:
      "No urgent action. Test through the normal frontend release checklist.",
    whatChanged:
      "Minor runtime and developer-experience improvements with no seed risk signal.",
    route: "/package/react/19.2.0",
    sourceLinks: [
      { label: "npm", href: "https://www.npmjs.com/package/react" },
      { label: "GitHub release", href: "https://github.com/facebook/react" },
    ],
  },
  {
    id: "vite-6-0-5",
    packageName: "vite",
    packageSlug: "vite",
    description: "Frontend build tooling",
    oldVersion: "6.0.4",
    newVersion: "6.0.5",
    releaseDate: "2026-05-12",
    publishedAgo: "published 6 days ago",
    risk: "low",
    category: "Low impact",
    osv: "No OSV match",
    cve: "No CVE match",
    reason: "Patch release with no security signal and narrow surface area.",
    whyThisMatters:
      "This looks safe to batch with normal maintenance unless your build depends on the touched plugin path.",
    affectedAudience:
      "Frontend teams using Vite dev server and plugin transforms.",
    recommendedAction:
      "No urgent action. Include in the next scheduled dependency update.",
    whatChanged:
      "Patch-level fixes for plugin resolution and development server stability.",
    route: "/package/vite/6.0.5",
    sourceLinks: [
      { label: "npm", href: "https://www.npmjs.com/package/vite" },
      { label: "GitHub release", href: "https://github.com/vitejs/vite" },
    ],
  },
];

export const packageRoutes = {
  react: {
    packageName: "react",
    description:
      "Core React releases are tracked as a high-interest frontend package. No high-risk release appears in this seed week.",
    route: "/package/react",
  },
};
