import type { ReleaseItem, SeoRoute, WeeklyDigest } from "./types";

export const generatedAt = "2026-06-15T18:03:18.842Z";
export const generationFailures = [];
export const weeklyDigest: WeeklyDigest = {
  "week": "Week 25, 2026",
  "dateRange": "Jun 15 - Jun 21",
  "risky": 40,
  "breaking": 15,
  "security": 5,
  "safe": 42,
  "total": 82
};
export const digestArchive: WeeklyDigest[] = [
  {
    "week": "Week 25, 2026",
    "dateRange": "Jun 15 - Jun 21",
    "risky": 40,
    "breaking": 15,
    "security": 5,
    "safe": 42,
    "total": 82,
    "topSignals": [
      {
        "packageName": "axios",
        "route": "/package/axios/1.18.0",
        "risk": "security",
        "newVersion": "1.18.0",
        "reason": "GitHub release notes mention security or vulnerability fixes.",
        "recommendedAction": "Update recommended. Review the GitHub release notes and prioritize this package in the security lane.",
        "whyThisMatters": "Security language in release notes is a review signal even before OSV or CVE data appears."
      },
      {
        "packageName": "esbuild",
        "route": "/package/esbuild/0.28.1",
        "risk": "security",
        "newVersion": "0.28.1",
        "reason": "GitHub release notes mention security or vulnerability fixes.",
        "recommendedAction": "Update recommended. Review the GitHub release notes and prioritize this package in the security lane.",
        "whyThisMatters": "Security language in release notes is a review signal even before OSV or CVE data appears."
      },
      {
        "packageName": "@angular/core",
        "route": "/package/angular-core/22.0.1",
        "risk": "security",
        "newVersion": "22.0.1",
        "reason": "GitHub release notes mention security or vulnerability fixes.",
        "recommendedAction": "Update recommended. Review the GitHub release notes and prioritize this package in the security lane.",
        "whyThisMatters": "Security language in release notes is a review signal even before OSV or CVE data appears."
      },
      {
        "packageName": "ws",
        "route": "/package/ws/8.21.0",
        "risk": "security",
        "newVersion": "8.21.0",
        "reason": "GitHub release notes mention security or vulnerability fixes.",
        "recommendedAction": "Update recommended. Review the GitHub release notes and prioritize this package in the security lane.",
        "whyThisMatters": "Security language in release notes is a review signal even before OSV or CVE data appears."
      },
      {
        "packageName": "npm-run-all",
        "route": "/package/npm-run-all/4.1.5",
        "risk": "security",
        "newVersion": "4.1.5",
        "reason": "GitHub release notes mention security or vulnerability fixes.",
        "recommendedAction": "Update recommended. Review the GitHub release notes and prioritize this package in the security lane.",
        "whyThisMatters": "Security language in release notes is a review signal even before OSV or CVE data appears."
      },
      {
        "packageName": "graphql",
        "route": "/package/graphql/17.0.0",
        "risk": "breaking",
        "newVersion": "17.0.0",
        "reason": "Major version release detected.",
        "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
        "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds."
      },
      {
        "packageName": "vitest",
        "route": "/package/vitest/4.1.9",
        "risk": "breaking",
        "newVersion": "4.1.9",
        "reason": "Major version release detected.",
        "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
        "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds."
      },
      {
        "packageName": "@storybook/react",
        "route": "/package/storybook-react/10.4.5",
        "risk": "breaking",
        "newVersion": "10.4.5",
        "reason": "Major version release detected.",
        "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
        "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds."
      }
    ],
    "route": "/weekly/2026-w25",
    "generatedAt": "2026-06-15T18:03:18.842Z"
  },
  {
    "week": "Week 24, 2026",
    "dateRange": "Jun 8 - Jun 14",
    "risky": 40,
    "breaking": 15,
    "security": 6,
    "safe": 42,
    "total": 82,
    "topSignals": [
      {
        "packageName": "esbuild",
        "route": "/package/esbuild/0.28.1",
        "risk": "security",
        "newVersion": "0.28.1",
        "reason": "GitHub release notes mention security or vulnerability fixes.",
        "recommendedAction": "Update recommended. Review the GitHub release notes and prioritize this package in the security lane.",
        "whyThisMatters": "Security language in release notes is a review signal even before OSV or CVE data appears."
      },
      {
        "packageName": "pnpm",
        "route": "/package/pnpm/11.6.0",
        "risk": "security",
        "newVersion": "11.6.0",
        "reason": "GitHub release notes mention security or vulnerability fixes.",
        "recommendedAction": "Update recommended. Review the GitHub release notes and prioritize this package in the security lane.",
        "whyThisMatters": "Security language in release notes is a review signal even before OSV or CVE data appears."
      },
      {
        "packageName": "@angular/core",
        "route": "/package/angular-core/22.0.1",
        "risk": "security",
        "newVersion": "22.0.1",
        "reason": "GitHub release notes mention security or vulnerability fixes.",
        "recommendedAction": "Update recommended. Review the GitHub release notes and prioritize this package in the security lane.",
        "whyThisMatters": "Security language in release notes is a review signal even before OSV or CVE data appears."
      },
      {
        "packageName": "axios",
        "route": "/package/axios/1.17.0",
        "risk": "security",
        "newVersion": "1.17.0",
        "reason": "GitHub release notes mention security or vulnerability fixes.",
        "recommendedAction": "Update recommended. Review the GitHub release notes and prioritize this package in the security lane.",
        "whyThisMatters": "Security language in release notes is a review signal even before OSV or CVE data appears."
      },
      {
        "packageName": "ws",
        "route": "/package/ws/8.21.0",
        "risk": "security",
        "newVersion": "8.21.0",
        "reason": "GitHub release notes mention security or vulnerability fixes.",
        "recommendedAction": "Update recommended. Review the GitHub release notes and prioritize this package in the security lane.",
        "whyThisMatters": "Security language in release notes is a review signal even before OSV or CVE data appears."
      },
      {
        "packageName": "npm-run-all",
        "route": "/package/npm-run-all/4.1.5",
        "risk": "security",
        "newVersion": "4.1.5",
        "reason": "GitHub release notes mention security or vulnerability fixes.",
        "recommendedAction": "Update recommended. Review the GitHub release notes and prioritize this package in the security lane.",
        "whyThisMatters": "Security language in release notes is a review signal even before OSV or CVE data appears."
      },
      {
        "packageName": "tailwindcss",
        "route": "/package/tailwindcss/4.3.1",
        "risk": "breaking",
        "newVersion": "4.3.1",
        "reason": "Major version release detected.",
        "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
        "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds."
      },
      {
        "packageName": "@storybook/react",
        "route": "/package/storybook-react/10.4.4",
        "risk": "breaking",
        "newVersion": "10.4.4",
        "reason": "Major version release detected.",
        "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
        "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds."
      }
    ],
    "route": "/weekly/2026-w24",
    "generatedAt": "2026-06-13T17:56:33.893Z"
  },
  {
    "week": "Week 23, 2026",
    "dateRange": "Jun 1 - Jun 7",
    "risky": 37,
    "breaking": 15,
    "security": 4,
    "safe": 45,
    "total": 82,
    "topSignals": [
      {
        "packageName": "axios",
        "route": "/package/axios/1.17.0",
        "risk": "security",
        "newVersion": "1.17.0",
        "reason": "GitHub release notes mention security or vulnerability fixes.",
        "recommendedAction": "Update recommended. Review the GitHub release notes and prioritize this package in the security lane.",
        "whyThisMatters": "Security language in release notes is a review signal even before OSV or CVE data appears."
      },
      {
        "packageName": "nuxt",
        "route": "/package/nuxt/4.4.7",
        "risk": "security",
        "newVersion": "4.4.7",
        "reason": "GitHub release notes mention security or vulnerability fixes.",
        "recommendedAction": "Update recommended. Review the GitHub release notes and prioritize this package in the security lane.",
        "whyThisMatters": "Security language in release notes is a review signal even before OSV or CVE data appears."
      },
      {
        "packageName": "ws",
        "route": "/package/ws/8.21.0",
        "risk": "security",
        "newVersion": "8.21.0",
        "reason": "GitHub release notes mention security or vulnerability fixes.",
        "recommendedAction": "Update recommended. Review the GitHub release notes and prioritize this package in the security lane.",
        "whyThisMatters": "Security language in release notes is a review signal even before OSV or CVE data appears."
      },
      {
        "packageName": "npm-run-all",
        "route": "/package/npm-run-all/4.1.5",
        "risk": "security",
        "newVersion": "4.1.5",
        "reason": "GitHub release notes mention security or vulnerability fixes.",
        "recommendedAction": "Update recommended. Review the GitHub release notes and prioritize this package in the security lane.",
        "whyThisMatters": "Security language in release notes is a review signal even before OSV or CVE data appears."
      },
      {
        "packageName": "@types/react",
        "route": "/package/types-react/19.2.17",
        "risk": "breaking",
        "newVersion": "19.2.17",
        "reason": "Major version release detected.",
        "recommendedAction": "Review changes before updating. Test in staging before merging.",
        "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds."
      },
      {
        "packageName": "react-router-dom",
        "route": "/package/react-router-dom/7.17.0",
        "risk": "breaking",
        "newVersion": "7.17.0",
        "reason": "Major version release detected.",
        "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
        "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds."
      },
      {
        "packageName": "@angular/core",
        "route": "/package/angular-core/22.0.0",
        "risk": "breaking",
        "newVersion": "22.0.0",
        "reason": "Major version release detected.",
        "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
        "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds."
      },
      {
        "packageName": "@storybook/react",
        "route": "/package/storybook-react/10.4.2",
        "risk": "breaking",
        "newVersion": "10.4.2",
        "reason": "Major version release detected.",
        "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
        "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds."
      }
    ],
    "route": "/weekly/2026-w23",
    "generatedAt": "2026-06-06T17:43:37.961Z"
  }
];
export const releases: ReleaseItem[] = [
  {
    "id": "axios-1-18-0",
    "packageName": "axios",
    "packageSlug": "axios",
    "description": "HTTP client",
    "oldVersion": "0.33.0",
    "newVersion": "1.18.0",
    "releaseDate": "2026-06-14",
    "publishedAgo": "published today",
    "risk": "security",
    "category": "Security",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "GitHub release notes mention security or vulnerability fixes.",
    "whyThisMatters": "Security language in release notes is a review signal even before OSV or CVE data appears.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "Update recommended. Review the GitHub release notes and prioritize this package in the security lane.",
    "whatChanged": "GitHub release note found: v1.18.0.",
    "githubReleaseTitle": "v1.18.0",
    "githubReleaseUrl": "https://github.com/axios/axios/releases/tag/v1.18.0",
    "githubReleaseTag": "v1.18.0",
    "githubReleasePublishedAt": "2026-06-13T12:00:31Z",
    "releaseNotesExcerpt": "v1.18.0 - June 13, 2026 This release hardens redirect and URL handling, improves the validateStatus configuration semantics, and includes updates to documentation, dependencies, and release metadata. Security Fixes **Redirect Header Safety:** Added Node HTTP adapter support for s",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/axios/1.18.0",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/axios"
      },
      {
        "label": "Repository",
        "href": "https://github.com/axios/axios"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/axios/axios/releases/tag/v1.18.0"
      }
    ]
  },
  {
    "id": "esbuild-0-28-1",
    "packageName": "esbuild",
    "packageSlug": "esbuild",
    "description": "JavaScript bundler",
    "oldVersion": "0.28.0",
    "newVersion": "0.28.1",
    "releaseDate": "2026-06-11",
    "publishedAgo": "published 3 days ago",
    "risk": "security",
    "category": "Security",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "GitHub release notes mention security or vulnerability fixes.",
    "whyThisMatters": "Security language in release notes is a review signal even before OSV or CVE data appears.",
    "affectedAudience": "Frontend build pipelines, monorepos, and CI jobs.",
    "recommendedAction": "Update recommended. Review the GitHub release notes and prioritize this package in the security lane.",
    "whatChanged": "GitHub release note found: v0.28.1.",
    "githubReleaseTitle": "v0.28.1",
    "githubReleaseUrl": "https://github.com/evanw/esbuild/releases/tag/v0.28.1",
    "githubReleaseTag": "v0.28.1",
    "githubReleasePublishedAt": "2026-06-11T22:47:14Z",
    "releaseNotesExcerpt": "Disallow `\\ in local development server HTTP requests (GHSA-g7r4-m6w7-qqqr) This release fixes a security issue where HTTP requests to esbuild's local development server could traverse outside of the serve directory on Windows using a \\ backslash character. It happened due to the",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/esbuild/0.28.1",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/esbuild"
      },
      {
        "label": "Repository",
        "href": "https://github.com/evanw/esbuild"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/evanw/esbuild/releases/tag/v0.28.1"
      }
    ]
  },
  {
    "id": "angular-core-22-0-1",
    "packageName": "@angular/core",
    "packageSlug": "angular-core",
    "description": "Angular framework core",
    "oldVersion": "21.2.17",
    "newVersion": "22.0.1",
    "releaseDate": "2026-06-10",
    "publishedAgo": "published 4 days ago",
    "risk": "security",
    "category": "Security",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "GitHub release notes mention security or vulnerability fixes.",
    "whyThisMatters": "Security language in release notes is a review signal even before OSV or CVE data appears.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "Update recommended. Review the GitHub release notes and prioritize this package in the security lane.",
    "whatChanged": "GitHub release note found: 22.0.1.",
    "githubReleaseTitle": "22.0.1",
    "githubReleaseUrl": "https://github.com/angular/angular/releases/tag/v22.0.1",
    "githubReleaseTag": "v22.0.1",
    "githubReleasePublishedAt": "2026-06-10T20:16:29Z",
    "releaseNotesExcerpt": "common | Commit | Description | | -- | -- | | | escape CSS string-terminating characters in escapeCssUrl | | | Limits date format string length | | | prevent prototype pollution in formatDateTime | | | use cryptographically secure SHA-256 for transfer cache key generation | compi",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/angular-core/22.0.1",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/@angular/core"
      },
      {
        "label": "Repository",
        "href": "https://github.com/angular/angular"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/angular/angular/releases/tag/v22.0.1"
      }
    ]
  },
  {
    "id": "ws-8-21-0",
    "packageName": "ws",
    "packageSlug": "ws",
    "description": "WebSocket implementation",
    "oldVersion": "7.5.11",
    "newVersion": "8.21.0",
    "releaseDate": "2026-05-22",
    "publishedAgo": "published 24 days ago",
    "risk": "security",
    "category": "Security",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "GitHub release notes mention security or vulnerability fixes.",
    "whyThisMatters": "Security language in release notes is a review signal even before OSV or CVE data appears.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "Update recommended. Review the GitHub release notes and prioritize this package in the security lane.",
    "whatChanged": "GitHub release note found: 8.21.0.",
    "githubReleaseTitle": "8.21.0",
    "githubReleaseUrl": "https://github.com/websockets/ws/releases/tag/8.21.0",
    "githubReleaseTag": "8.21.0",
    "githubReleasePublishedAt": "2026-05-22T18:03:36Z",
    "releaseNotesExcerpt": "Features Introduced the maxBufferedChunks and maxFragments options (2b2abd45). Bug fixes Fixed a remote memory exhaustion DoS vulnerability (2b2abd45). A high volume of tiny fragments and data chunks could be sent by a peer, using modest network traffic, to crash a ws server or c",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/ws/8.21.0",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/ws"
      },
      {
        "label": "Repository",
        "href": "https://github.com/websockets/ws"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/websockets/ws/releases/tag/8.21.0"
      }
    ]
  },
  {
    "id": "npm-run-all-4-1-5",
    "packageName": "npm-run-all",
    "packageSlug": "npm-run-all",
    "description": "Script runner",
    "oldVersion": "4.1.4",
    "newVersion": "4.1.5",
    "releaseDate": "2018-11-24",
    "publishedAgo": "published 7 years ago",
    "risk": "security",
    "category": "Security",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "GitHub release notes mention security or vulnerability fixes.",
    "whyThisMatters": "Security language in release notes is a review signal even before OSV or CVE data appears.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "Update recommended. Review the GitHub release notes and prioritize this package in the security lane.",
    "whatChanged": "GitHub release note found: v4.1.5.",
    "githubReleaseTitle": "v4.1.5",
    "githubReleaseUrl": "https://github.com/mysticatea/npm-run-all/releases/tag/v4.1.5",
    "githubReleaseTag": "v4.1.5",
    "githubReleasePublishedAt": "2018-11-24T14:04:46Z",
    "releaseNotesExcerpt": "Bug fixes 52eaf86242ba408dedd015f53ca7ca368f25a026...1b41ac569987c96e224f940ff59f9699322c7824 switched ps-tree package to pidtree package for security reason.",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/npm-run-all/4.1.5",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/npm-run-all"
      },
      {
        "label": "Repository",
        "href": "https://github.com/mysticatea/npm-run-all"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/mysticatea/npm-run-all/releases/tag/v4.1.5"
      }
    ]
  },
  {
    "id": "graphql-17-0-0",
    "packageName": "graphql",
    "packageSlug": "graphql",
    "description": "GraphQL JavaScript implementation",
    "oldVersion": "16.14.2",
    "newVersion": "17.0.0",
    "releaseDate": "2026-06-15",
    "publishedAgo": "published today",
    "risk": "breaking",
    "category": "Breaking",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Major version release detected.",
    "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: v17.0.0.",
    "githubReleaseTitle": "v17.0.0",
    "githubReleaseUrl": "https://github.com/graphql/graphql-js/releases/tag/v17.0.0",
    "githubReleaseTag": "v17.0.0",
    "githubReleasePublishedAt": "2026-06-15T17:11:46Z",
    "releaseNotesExcerpt": "v17.0.0 (2026-06-15) New Feature #4819 feat: graduate directives on directives (@yaacovCR) Bug Fix #4799 fix: raise request error on invalid fragment variables (@yaacovCR) #4800 fix: apply directives when SDL contains type definitions and extensions with directives (@yaacovCR) #4",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/graphql/17.0.0",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/graphql"
      },
      {
        "label": "Repository",
        "href": "https://github.com/graphql/graphql-js"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/graphql/graphql-js/releases/tag/v17.0.0"
      }
    ]
  },
  {
    "id": "vitest-4-1-9",
    "packageName": "vitest",
    "packageSlug": "vitest",
    "description": "Vite-native testing",
    "oldVersion": "3.2.6",
    "newVersion": "4.1.9",
    "releaseDate": "2026-06-15",
    "publishedAgo": "published today",
    "risk": "breaking",
    "category": "Breaking",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Major version release detected.",
    "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds.",
    "affectedAudience": "Test suites, browser automation, and release validation workflows.",
    "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: v5.0.0-beta.5.",
    "githubReleaseTitle": "v5.0.0-beta.5",
    "githubReleaseUrl": "https://github.com/vitest-dev/vitest/releases/tag/v5.0.0-beta.5",
    "githubReleaseTag": "v5.0.0-beta.5",
    "githubReleasePublishedAt": "2026-06-15T08:49:24Z",
    "releaseNotesExcerpt": "&nbsp;&nbsp;&nbsp; Breaking Changes Don't lookup config file from ancestor directories &nbsp;-&nbsp; by @hi-ogawa, **Codex** and **Hiroshi Ogawa** in https://github.com/vitest-dev/vitest/issues/10428 <samp>(945d9)</samp> Inline @vitest/runner package, do not publish it anymore &n",
    "releaseNotesStatus": "Using latest GitHub release because no exact version tag matched.",
    "route": "/package/vitest/4.1.9",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/vitest"
      },
      {
        "label": "Repository",
        "href": "https://github.com/vitest-dev/vitest"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/vitest-dev/vitest/releases/tag/v5.0.0-beta.5"
      }
    ]
  },
  {
    "id": "storybook-react-10-4-5",
    "packageName": "@storybook/react",
    "packageSlug": "storybook-react",
    "description": "React component workshop",
    "oldVersion": "0.0.0-pr-35164-sha-fe7f4278",
    "newVersion": "10.4.5",
    "releaseDate": "2026-06-15",
    "publishedAgo": "published today",
    "risk": "breaking",
    "category": "Breaking",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Major version release detected.",
    "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds.",
    "affectedAudience": "React applications, component libraries, and frontend teams using React release workflows.",
    "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: v10.4.5.",
    "githubReleaseTitle": "v10.4.5",
    "githubReleaseUrl": "https://github.com/storybookjs/storybook/releases/tag/v10.4.5",
    "githubReleaseTag": "v10.4.5",
    "githubReleasePublishedAt": "2026-06-15T09:29:56Z",
    "releaseNotesExcerpt": "10.4.5 Core: Rework AI checklist feature gate - #35053, thanks @Sidnioulz! Preview: Stop mixed CSF3+4 stories getting core annotations injected twice - #35094, thanks @JReinhold!",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/storybook-react/10.4.5",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/@storybook/react"
      },
      {
        "label": "Repository",
        "href": "https://github.com/storybookjs/storybook"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/storybookjs/storybook/releases/tag/v10.4.5"
      }
    ]
  },
  {
    "id": "storybook-10-4-5",
    "packageName": "storybook",
    "packageSlug": "storybook",
    "description": "Component documentation",
    "oldVersion": "0.0.0-pr-35164-sha-fe7f4278",
    "newVersion": "10.4.5",
    "releaseDate": "2026-06-15",
    "publishedAgo": "published today",
    "risk": "breaking",
    "category": "Breaking",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Major version release detected.",
    "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: v10.4.5.",
    "githubReleaseTitle": "v10.4.5",
    "githubReleaseUrl": "https://github.com/storybookjs/storybook/releases/tag/v10.4.5",
    "githubReleaseTag": "v10.4.5",
    "githubReleasePublishedAt": "2026-06-15T09:29:56Z",
    "releaseNotesExcerpt": "10.4.5 Core: Rework AI checklist feature gate - #35053, thanks @Sidnioulz! Preview: Stop mixed CSF3+4 stories getting core annotations injected twice - #35094, thanks @JReinhold!",
    "releaseNotesStatus": "Matched GitHub release by npm version tag. Cached from an earlier generator run.",
    "route": "/package/storybook/10.4.5",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/storybook"
      },
      {
        "label": "Repository",
        "href": "https://github.com/storybookjs/storybook"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/storybookjs/storybook/releases/tag/v10.4.5"
      }
    ]
  },
  {
    "id": "tailwindcss-4-3-1",
    "packageName": "tailwindcss",
    "packageSlug": "tailwindcss",
    "description": "Utility-first CSS",
    "oldVersion": "0.0.0-insiders.8a14a71",
    "newVersion": "4.3.1",
    "releaseDate": "2026-06-12",
    "publishedAgo": "published 3 days ago",
    "risk": "breaking",
    "category": "Breaking",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Major version release detected.",
    "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: v4.3.1.",
    "githubReleaseTitle": "v4.3.1",
    "githubReleaseUrl": "https://github.com/tailwindlabs/tailwindcss/releases/tag/v4.3.1",
    "githubReleaseTag": "v4.3.1",
    "githubReleasePublishedAt": "2026-06-12T17:50:58Z",
    "releaseNotesExcerpt": "Added Add --silent option to suppress output in @tailwindcss/cli (#20100) Fixed Remove deprecation warnings by using Module#registerHooks instead of Module#register on Node 26+ (#20028) Canonicalization: don't crash when plugin utilities throw for unsupported values (#20052) Allo",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/tailwindcss/4.3.1",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/tailwindcss"
      },
      {
        "label": "Repository",
        "href": "https://github.com/tailwindlabs/tailwindcss"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/tailwindlabs/tailwindcss/releases/tag/v4.3.1"
      }
    ]
  },
  {
    "id": "chakra-ui-react-3-36-0",
    "packageName": "@chakra-ui/react",
    "packageSlug": "chakra-ui-react",
    "description": "Accessible React component library",
    "oldVersion": "2.10.10",
    "newVersion": "3.36.0",
    "releaseDate": "2026-06-10",
    "publishedAgo": "published 5 days ago",
    "risk": "breaking",
    "category": "Breaking",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Major version release detected.",
    "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds.",
    "affectedAudience": "React applications, component libraries, and frontend teams using React release workflows.",
    "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: @chakra-ui/react@3.36.0.",
    "githubReleaseTitle": "@chakra-ui/react@3.36.0",
    "githubReleaseUrl": "https://github.com/chakra-ui/chakra-ui/releases/tag/%40chakra-ui/react%403.36.0",
    "githubReleaseTag": "@chakra-ui/react@3.36.0",
    "githubReleasePublishedAt": "2026-06-10T14:16:51Z",
    "releaseNotesExcerpt": "Minor Changes #10752 1ef5800 Thanks @kalisaNkevin! - **[New] FloatingPanel**: Add draggable, resizable floating panel component #10847 238e20a Thanks @Adebesin-Cell! - Update Ark UI to v5.37.2 - **Splitter**: Accept CSS units (px, em, rem, vh, vw) for size props, add per-panel re",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/chakra-ui-react/3.36.0",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/@chakra-ui/react"
      },
      {
        "label": "Repository",
        "href": "https://github.com/chakra-ui/chakra-ui"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/chakra-ui/chakra-ui/releases/tag/%40chakra-ui/react%403.36.0"
      }
    ]
  },
  {
    "id": "types-react-19-2-17",
    "packageName": "@types/react",
    "packageSlug": "types-react",
    "description": "React TypeScript definitions",
    "oldVersion": "17.0.93",
    "newVersion": "19.2.17",
    "releaseDate": "2026-06-05",
    "publishedAgo": "published 9 days ago",
    "risk": "breaking",
    "category": "Breaking",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Major version release detected.",
    "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds.",
    "affectedAudience": "React applications, component libraries, and frontend teams using React release workflows.",
    "recommendedAction": "Review changes before updating. Test in staging before merging.",
    "whatChanged": "GitHub release note found: 0.1.450.",
    "githubReleaseTitle": "0.1.450",
    "githubReleaseUrl": "https://github.com/DefinitelyTyped/DefinitelyTyped/releases/tag/0.1.450",
    "githubReleaseTag": "0.1.450",
    "githubReleasePublishedAt": "2019-09-04T18:31:00Z",
    "releaseNotesExcerpt": "",
    "releaseNotesStatus": "Using latest GitHub release because no exact version tag matched.",
    "route": "/package/types-react/19.2.17",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/@types/react"
      },
      {
        "label": "Repository",
        "href": "https://github.com/DefinitelyTyped/DefinitelyTyped"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/DefinitelyTyped/DefinitelyTyped/releases/tag/0.1.450"
      }
    ]
  },
  {
    "id": "react-router-dom-7-17-0",
    "packageName": "react-router-dom",
    "packageSlug": "react-router-dom",
    "description": "Declarative routing for React",
    "oldVersion": "0.0.0-experimental-dd63c14ca",
    "newVersion": "7.17.0",
    "releaseDate": "2026-06-04",
    "publishedAgo": "published 11 days ago",
    "risk": "breaking",
    "category": "Breaking",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Major version release detected.",
    "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds.",
    "affectedAudience": "React applications, component libraries, and frontend teams using React release workflows.",
    "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: v7.17.0.",
    "githubReleaseTitle": "v7.17.0",
    "githubReleaseUrl": "https://github.com/remix-run/react-router/releases/tag/react-router%407.17.0",
    "githubReleaseTag": "react-router@7.17.0",
    "githubReleasePublishedAt": "2026-06-04T14:21:31Z",
    "releaseNotesExcerpt": "See the changelog for release notes: https://github.com/remix-run/react-router/blob/main/CHANGELOG.md#v7170",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/react-router-dom/7.17.0",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/react-router-dom"
      },
      {
        "label": "Repository",
        "href": "https://github.com/remix-run/react-router"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/remix-run/react-router/releases/tag/react-router%407.17.0"
      }
    ]
  },
  {
    "id": "babel-preset-env-7-29-7",
    "packageName": "@babel/preset-env",
    "packageSlug": "babel-preset-env",
    "description": "Babel environment preset",
    "oldVersion": "8.0.0-rc.6",
    "newVersion": "7.29.7",
    "releaseDate": "2026-05-25",
    "publishedAgo": "published 21 days ago",
    "risk": "breaking",
    "category": "Breaking",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Major version release detected.",
    "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: v7.29.7.",
    "githubReleaseTitle": "v7.29.7",
    "githubReleaseUrl": "https://github.com/babel/babel/releases/tag/v7.29.7",
    "githubReleaseTag": "v7.29.7",
    "githubReleasePublishedAt": "2026-05-25T12:36:26Z",
    "releaseNotesExcerpt": "v7.29.7 (2026-05-25) Re-release all packages with npm provenance attestations",
    "releaseNotesStatus": "Matched GitHub release by npm version tag. Cached from an earlier generator run.",
    "route": "/package/babel-preset-env/7.29.7",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/@babel/preset-env"
      },
      {
        "label": "Repository",
        "href": "https://github.com/babel/babel"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/babel/babel/releases/tag/v7.29.7"
      }
    ]
  },
  {
    "id": "babel-preset-react-7-29-7",
    "packageName": "@babel/preset-react",
    "packageSlug": "babel-preset-react",
    "description": "Babel React preset",
    "oldVersion": "8.0.0-rc.6",
    "newVersion": "7.29.7",
    "releaseDate": "2026-05-25",
    "publishedAgo": "published 21 days ago",
    "risk": "breaking",
    "category": "Breaking",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Major version release detected.",
    "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds.",
    "affectedAudience": "React applications, component libraries, and frontend teams using React release workflows.",
    "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: v7.29.7.",
    "githubReleaseTitle": "v7.29.7",
    "githubReleaseUrl": "https://github.com/babel/babel/releases/tag/v7.29.7",
    "githubReleaseTag": "v7.29.7",
    "githubReleasePublishedAt": "2026-05-25T12:36:26Z",
    "releaseNotesExcerpt": "v7.29.7 (2026-05-25) Re-release all packages with npm provenance attestations",
    "releaseNotesStatus": "Matched GitHub release by npm version tag. Cached from an earlier generator run.",
    "route": "/package/babel-preset-react/7.29.7",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/@babel/preset-react"
      },
      {
        "label": "Repository",
        "href": "https://github.com/babel/babel"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/babel/babel/releases/tag/v7.29.7"
      }
    ]
  },
  {
    "id": "styled-components-6-4-2",
    "packageName": "styled-components",
    "packageSlug": "styled-components",
    "description": "CSS-in-JS styling",
    "oldVersion": "7.0.0-prerelease-20260519035351",
    "newVersion": "6.4.2",
    "releaseDate": "2026-05-19",
    "publishedAgo": "published 27 days ago",
    "risk": "breaking",
    "category": "Breaking",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Major version release detected.",
    "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: styled-components@6.4.2.",
    "githubReleaseTitle": "styled-components@6.4.2",
    "githubReleaseUrl": "https://github.com/styled-components/styled-components/releases/tag/styled-components%406.4.2",
    "githubReleaseTag": "styled-components@6.4.2",
    "githubReleasePublishedAt": "2026-05-19T12:58:04Z",
    "releaseNotesExcerpt": "Patch Changes 9945904: Restore TypeScript prop autocomplete inside the JSX of a styled component once the first attribute is typed. 9945904: Apply all chain levels' styles when an extended styled component renders with the as prop under Preact's react-compat. 9945904: Respect a c",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/styled-components/6.4.2",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/styled-components"
      },
      {
        "label": "Repository",
        "href": "https://github.com/styled-components/styled-components"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/styled-components/styled-components/releases/tag/styled-components%406.4.2"
      }
    ]
  },
  {
    "id": "solid-js-1-9-13",
    "packageName": "solid-js",
    "packageSlug": "solid-js",
    "description": "Reactive UI library",
    "oldVersion": "2.0.0-beta.13",
    "newVersion": "1.9.13",
    "releaseDate": "2026-05-15",
    "publishedAgo": "published 31 days ago",
    "risk": "breaking",
    "category": "Breaking",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Major version release detected.",
    "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: v2.0.0 Beta - The <Suspense> is Over.",
    "githubReleaseTitle": "v2.0.0 Beta - The <Suspense> is Over",
    "githubReleaseUrl": "https://github.com/solidjs/solid/releases/tag/v2.0.0-beta.0",
    "githubReleaseTag": "v2.0.0-beta.0",
    "githubReleasePublishedAt": "2026-03-03T23:09:19Z",
    "releaseNotesExcerpt": "I know you all probably weren't expecting this announcement next. But after reviewing the roadmap, we spent so long iterating in the Experimental phase, most of the goalposts within Alpha don't appear relevant enough to warrant their own phase. Instead, I'm happy to announce toda",
    "releaseNotesStatus": "Using latest GitHub release because no exact version tag matched.",
    "route": "/package/solid-js/1.9.13",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/solid-js"
      },
      {
        "label": "Repository",
        "href": "https://github.com/solidjs/solid"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/solidjs/solid/releases/tag/v2.0.0-beta.0"
      }
    ]
  },
  {
    "id": "nanoid-5-1-11",
    "packageName": "nanoid",
    "packageSlug": "nanoid",
    "description": "Compact unique ID generator",
    "oldVersion": "3.3.12",
    "newVersion": "5.1.11",
    "releaseDate": "2026-04-30",
    "publishedAgo": "published 45 days ago",
    "risk": "breaking",
    "category": "Breaking",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Major version release detected.",
    "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: 5.1.11.",
    "githubReleaseTitle": "5.1.11",
    "githubReleaseUrl": "https://github.com/ai/nanoid/releases/tag/5.1.11",
    "githubReleaseTag": "5.1.11",
    "githubReleasePublishedAt": "2026-04-30T22:06:30Z",
    "releaseNotesExcerpt": "Fixed breaking Nano ID by requesting big ID.",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/nanoid/5.1.11",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/nanoid"
      },
      {
        "label": "Repository",
        "href": "https://github.com/ai/nanoid"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/ai/nanoid/releases/tag/5.1.11"
      }
    ]
  },
  {
    "id": "uuid-14-0-0",
    "packageName": "uuid",
    "packageSlug": "uuid",
    "description": "UUID generator",
    "oldVersion": "13.0.0",
    "newVersion": "14.0.0",
    "releaseDate": "2026-04-19",
    "publishedAgo": "published 57 days ago",
    "risk": "breaking",
    "category": "Breaking",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Major version release detected.",
    "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: v14.0.0.",
    "githubReleaseTitle": "v14.0.0",
    "githubReleaseUrl": "https://github.com/uuidjs/uuid/releases/tag/v14.0.0",
    "githubReleaseTag": "v14.0.0",
    "githubReleasePublishedAt": "2026-04-19T15:15:13Z",
    "releaseNotesExcerpt": "14.0.0 (2026-04-19) BREAKING CHANGES expect crypto to be global everywhere (requires node@20+) (#935) drop node@18 support (#934) Features drop node@18 support (#934) (dc4ddb8) Bug Fixes expect crypto to be global everywhere (requires node@20+) (#935) (f2c235f) Use GITHUB_TOKEN f",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/uuid/14.0.0",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/uuid"
      },
      {
        "label": "Repository",
        "href": "https://github.com/uuidjs/uuid"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/uuidjs/uuid/releases/tag/v14.0.0"
      }
    ]
  },
  {
    "id": "minimist-1-2-8",
    "packageName": "minimist",
    "packageSlug": "minimist",
    "description": "CLI argument parsing",
    "oldVersion": "0.2.3",
    "newVersion": "1.2.8",
    "releaseDate": "2023-02-09",
    "publishedAgo": "published 3 years ago",
    "risk": "breaking",
    "category": "Breaking",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Major version release detected.",
    "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "Review changes before updating. Test in staging before merging.",
    "whatChanged": "Major minimist 1.2.8 release detected; review changelog before updating.",
    "githubReleaseTitle": "",
    "githubReleaseUrl": "",
    "githubReleaseTag": "",
    "githubReleasePublishedAt": "",
    "releaseNotesExcerpt": "",
    "releaseNotesStatus": "No GitHub releases found for this repository.",
    "route": "/package/minimist/1.2.8",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/minimist"
      },
      {
        "label": "Repository",
        "href": "https://github.com/minimistjs/minimist"
      }
    ]
  },
  {
    "id": "pnpm-11-7-0",
    "packageName": "pnpm",
    "packageSlug": "pnpm",
    "description": "Package manager",
    "oldVersion": "11.6.0",
    "newVersion": "11.7.0",
    "releaseDate": "2026-06-15",
    "publishedAgo": "published today",
    "risk": "review",
    "category": "Review",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: pnpm 11.7.",
    "githubReleaseTitle": "pnpm 11.7",
    "githubReleaseUrl": "https://github.com/pnpm/pnpm/releases/tag/v11.7.0",
    "githubReleaseTag": "v11.7.0",
    "githubReleasePublishedAt": "2026-06-15T06:56:53Z",
    "releaseNotesExcerpt": "Minor Changes Added a new setting frozenStore (--frozen-store) that lets pnpm install run against a package store on a read-only filesystem (e.g. a Nix store, a read-only bind mount, an OCI layer). When enabled, pnpm opens the store's SQLite index.db through the immutable=1 URI -",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/pnpm/11.7.0",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/pnpm"
      },
      {
        "label": "Repository",
        "href": "https://github.com/pnpm/pnpm"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/pnpm/pnpm/releases/tag/v11.7.0"
      }
    ]
  },
  {
    "id": "rollup-4-62-0",
    "packageName": "rollup",
    "packageSlug": "rollup",
    "description": "Module bundler",
    "oldVersion": "4.61.1",
    "newVersion": "4.62.0",
    "releaseDate": "2026-06-13",
    "publishedAgo": "published 2 days ago",
    "risk": "review",
    "category": "Review",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "Frontend build pipelines, monorepos, and CI jobs.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: v4.62.0.",
    "githubReleaseTitle": "v4.62.0",
    "githubReleaseUrl": "https://github.com/rollup/rollup/releases/tag/v4.62.0",
    "githubReleaseTag": "v4.62.0",
    "githubReleasePublishedAt": "2026-06-13T08:32:26Z",
    "releaseNotesExcerpt": "4.62.0 _2026-06-13_ Features Ensure that shared dependencies between manual chunks and entry points receive a serparate chunk (#6374) Pull Requests #6374: Extract the static dependencies imported by manual chunks into separate chunks (@TrickyPi, @lukastaegert) #6405: fix(deps): u",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/rollup/4.62.0",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/rollup"
      },
      {
        "label": "Repository",
        "href": "https://github.com/rollup/rollup"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/rollup/rollup/releases/tag/v4.62.0"
      }
    ]
  },
  {
    "id": "react-hook-form-7-79-0",
    "packageName": "react-hook-form",
    "packageSlug": "react-hook-form",
    "description": "React form state",
    "oldVersion": "7.78.0",
    "newVersion": "7.79.0",
    "releaseDate": "2026-06-13",
    "publishedAgo": "published 2 days ago",
    "risk": "review",
    "category": "Review",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "React applications, component libraries, and frontend teams using React release workflows.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: Version 7.79.0.",
    "githubReleaseTitle": "Version 7.79.0",
    "githubReleaseUrl": "https://github.com/react-hook-form/react-hook-form/releases/tag/v7.79.0",
    "githubReleaseTag": "v7.79.0",
    "githubReleasePublishedAt": "2026-06-13T04:24:10Z",
    "releaseNotesExcerpt": "feat: use field array disabled (#13520) fix controller onChange promise (#13518) fix: track visited pairs in deepEqual to avoid false positives with shared object references (#13515) fix #12651 issue: field validation with shouldUseNativeValidation does not behave native like for",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/react-hook-form/7.79.0",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/react-hook-form"
      },
      {
        "label": "Repository",
        "href": "https://github.com/react-hook-form/react-hook-form"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/react-hook-form/react-hook-form/releases/tag/v7.79.0"
      }
    ]
  },
  {
    "id": "eslint-10-5-0",
    "packageName": "eslint",
    "packageSlug": "eslint",
    "description": "JavaScript linting",
    "oldVersion": "10.4.1",
    "newVersion": "10.5.0",
    "releaseDate": "2026-06-12",
    "publishedAgo": "published 3 days ago",
    "risk": "review",
    "category": "Review",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "Developer tooling, type checking, and code-quality gates.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: v10.5.0.",
    "githubReleaseTitle": "v10.5.0",
    "githubReleaseUrl": "https://github.com/eslint/eslint/releases/tag/v10.5.0",
    "githubReleaseTag": "v10.5.0",
    "githubReleasePublishedAt": "2026-06-12T17:54:47Z",
    "releaseNotesExcerpt": "Features 5ca8c52 feat: correct stack tracking in max-nested-callbacks (#20973) (Pixel998) b565783 feat: report no-with violations at the with keyword (#20971) (Pixel998) 2ce032f feat: report max-lines-per-function violations at function head (#20966) (Pixel998) 732cb3e feat: repo",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/eslint/10.5.0",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/eslint"
      },
      {
        "label": "Repository",
        "href": "https://github.com/eslint/eslint"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/eslint/eslint/releases/tag/v10.5.0"
      }
    ]
  },
  {
    "id": "lucide-react-1-18-0",
    "packageName": "lucide-react",
    "packageSlug": "lucide-react",
    "description": "React icon library",
    "oldVersion": "1.17.0",
    "newVersion": "1.18.0",
    "releaseDate": "2026-06-12",
    "publishedAgo": "published 3 days ago",
    "risk": "review",
    "category": "Review",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "React applications, component libraries, and frontend teams using React release workflows.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: Version 1.18.0.",
    "githubReleaseTitle": "Version 1.18.0",
    "githubReleaseUrl": "https://github.com/lucide-icons/lucide/releases/tag/1.18.0",
    "githubReleaseTag": "1.18.0",
    "githubReleasePublishedAt": "2026-06-12T12:38:47Z",
    "releaseNotesExcerpt": "What's Changed chore(site): Remove survey from site by @ericfennis in https://github.com/lucide-icons/lucide/pull/4417 feat(icons): added play-off icon by @Ahmed-Dghaies in https://github.com/lucide-icons/lucide/pull/4412 fix(metadata): add missing use-cases prop on play-off.json",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/lucide-react/1.18.0",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/lucide-react"
      },
      {
        "label": "Repository",
        "href": "https://github.com/lucide-icons/lucide"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/lucide-icons/lucide/releases/tag/1.18.0"
      }
    ]
  },
  {
    "id": "vue-3-5-38",
    "packageName": "vue",
    "packageSlug": "vue",
    "description": "Progressive JavaScript framework",
    "oldVersion": "3.6.0-beta.15",
    "newVersion": "3.5.38",
    "releaseDate": "2026-06-11",
    "publishedAgo": "published 4 days ago",
    "risk": "review",
    "category": "Review",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: v3.5.38.",
    "githubReleaseTitle": "v3.5.38",
    "githubReleaseUrl": "https://github.com/vuejs/core/releases/tag/v3.5.38",
    "githubReleaseTag": "v3.5.38",
    "githubReleasePublishedAt": "2026-06-11T08:00:58Z",
    "releaseNotesExcerpt": "For stable releases, please refer to CHANGELOG.md for details. For pre-releases, please refer to CHANGELOG.md of the minor branch.",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/vue/3.5.38",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/vue"
      },
      {
        "label": "Repository",
        "href": "https://github.com/vuejs/core"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/vuejs/core/releases/tag/v3.5.38"
      }
    ]
  },
  {
    "id": "sass-1-101-0",
    "packageName": "sass",
    "packageSlug": "sass",
    "description": "CSS preprocessor",
    "oldVersion": "1.100.0",
    "newVersion": "1.101.0",
    "releaseDate": "2026-06-11",
    "publishedAgo": "published 3 days ago",
    "risk": "review",
    "category": "Review",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: Dart Sass 1.101.0.",
    "githubReleaseTitle": "Dart Sass 1.101.0",
    "githubReleaseUrl": "https://github.com/sass/dart-sass/releases/tag/1.101.0",
    "githubReleaseTag": "1.101.0",
    "githubReleasePublishedAt": "2026-06-11T21:27:16Z",
    "releaseNotesExcerpt": "To install Sass 1.101.0, download one of the packages below and [add it to your PATH][], or see [the Sass website][] for full installation instructions. [add it to your PATH]: https://katiek2.github.io/path-doc/ [the Sass website]: https://sass-lang.com/install Changes **Potentia",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/sass/1.101.0",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/sass"
      },
      {
        "label": "Repository",
        "href": "https://github.com/sass/dart-sass"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/sass/dart-sass/releases/tag/1.101.0"
      }
    ]
  },
  {
    "id": "cypress-15-17-0",
    "packageName": "cypress",
    "packageSlug": "cypress",
    "description": "Browser testing",
    "oldVersion": "15.16.0",
    "newVersion": "15.17.0",
    "releaseDate": "2026-06-09",
    "publishedAgo": "published 6 days ago",
    "risk": "review",
    "category": "Review",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "Test suites, browser automation, and release validation workflows.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: v15.17.0.",
    "githubReleaseTitle": "v15.17.0",
    "githubReleaseUrl": "https://github.com/cypress-io/cypress/releases/tag/v15.17.0",
    "githubReleaseTag": "v15.17.0",
    "githubReleasePublishedAt": "2026-06-09T16:32:50Z",
    "releaseNotesExcerpt": "Changelog: https://docs.cypress.io/app/references/changelog#15-17-0",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/cypress/15.17.0",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/cypress"
      },
      {
        "label": "Repository",
        "href": "https://github.com/cypress-io/cypress"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/cypress-io/cypress/releases/tag/v15.17.0"
      }
    ]
  },
  {
    "id": "typescript-eslint-parser-8-61-0",
    "packageName": "@typescript-eslint/parser",
    "packageSlug": "typescript-eslint-parser",
    "description": "TypeScript parser for ESLint",
    "oldVersion": "8.60.2-alpha.8",
    "newVersion": "8.61.0",
    "releaseDate": "2026-06-08",
    "publishedAgo": "published 7 days ago",
    "risk": "review",
    "category": "Review",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: v8.61.0.",
    "githubReleaseTitle": "v8.61.0",
    "githubReleaseUrl": "https://github.com/typescript-eslint/typescript-eslint/releases/tag/v8.61.0",
    "githubReleaseTag": "v8.61.0",
    "githubReleasePublishedAt": "2026-06-08T18:00:19Z",
    "releaseNotesExcerpt": "8.61.0 (2026-06-08) Features **ast-spec:** change type of UnaryExpression.prefix to always true (#12372) **ast-spec:** tighten types of ArrowFunction, YieldExpression, TSTypePredicate (#12373) Fixes **rule-schema-to-typescript-types:** respect ECMAScript line terminators (#12374)",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/typescript-eslint-parser/8.61.0",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/@typescript-eslint/parser"
      },
      {
        "label": "Repository",
        "href": "https://github.com/typescript-eslint/typescript-eslint"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/typescript-eslint/typescript-eslint/releases/tag/v8.61.0"
      }
    ]
  },
  {
    "id": "typescript-eslint-eslint-plugin-8-61-0",
    "packageName": "@typescript-eslint/eslint-plugin",
    "packageSlug": "typescript-eslint-eslint-plugin",
    "description": "TypeScript ESLint rules",
    "oldVersion": "8.60.2-alpha.8",
    "newVersion": "8.61.0",
    "releaseDate": "2026-06-08",
    "publishedAgo": "published 7 days ago",
    "risk": "review",
    "category": "Review",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: v8.61.0.",
    "githubReleaseTitle": "v8.61.0",
    "githubReleaseUrl": "https://github.com/typescript-eslint/typescript-eslint/releases/tag/v8.61.0",
    "githubReleaseTag": "v8.61.0",
    "githubReleasePublishedAt": "2026-06-08T18:00:19Z",
    "releaseNotesExcerpt": "8.61.0 (2026-06-08) Features **ast-spec:** change type of UnaryExpression.prefix to always true (#12372) **ast-spec:** tighten types of ArrowFunction, YieldExpression, TSTypePredicate (#12373) Fixes **rule-schema-to-typescript-types:** respect ECMAScript line terminators (#12374)",
    "releaseNotesStatus": "Matched GitHub release by npm version tag. Cached from an earlier generator run.",
    "route": "/package/typescript-eslint-eslint-plugin/8.61.0",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/@typescript-eslint/eslint-plugin"
      },
      {
        "label": "Repository",
        "href": "https://github.com/typescript-eslint/typescript-eslint"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/typescript-eslint/typescript-eslint/releases/tag/v8.61.0"
      }
    ]
  },
  {
    "id": "tanstack-react-query-5-101-0",
    "packageName": "@tanstack/react-query",
    "packageSlug": "tanstack-react-query",
    "description": "Data fetching for React",
    "oldVersion": "5.100.14",
    "newVersion": "5.101.0",
    "releaseDate": "2026-06-02",
    "publishedAgo": "published 12 days ago",
    "risk": "review",
    "category": "Review",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "React applications, component libraries, and frontend teams using React release workflows.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: @tanstack/vue-query@5.101.0.",
    "githubReleaseTitle": "@tanstack/vue-query@5.101.0",
    "githubReleaseUrl": "https://github.com/TanStack/query/releases/tag/%40tanstack/vue-query%405.101.0",
    "githubReleaseTag": "@tanstack/vue-query@5.101.0",
    "githubReleasePublishedAt": "2026-06-02T19:25:05Z",
    "releaseNotesExcerpt": "Patch Changes #10826 1348095 - Replace deprecated isServer with environmentManager.isServer() Updated dependencies \\[]: - @tanstack/query-core@5.101.0",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/tanstack-react-query/5.101.0",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/@tanstack/react-query"
      },
      {
        "label": "Repository",
        "href": "https://github.com/TanStack/query"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/TanStack/query/releases/tag/%40tanstack/vue-query%405.101.0"
      }
    ]
  },
  {
    "id": "react-19-2-7",
    "packageName": "react",
    "packageSlug": "react",
    "description": "UI library",
    "oldVersion": "19.1.8",
    "newVersion": "19.2.7",
    "releaseDate": "2026-06-01",
    "publishedAgo": "published 14 days ago",
    "risk": "review",
    "category": "Review",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "React applications, component libraries, and frontend teams using React release workflows.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: 19.2.7 (June 1st, 2026).",
    "githubReleaseTitle": "19.2.7 (June 1st, 2026)",
    "githubReleaseUrl": "https://github.com/react/react/releases/tag/v19.2.7",
    "githubReleaseTag": "v19.2.7",
    "githubReleasePublishedAt": "2026-06-01T18:04:24Z",
    "releaseNotesExcerpt": "React Server Components Fixed missing FormData entries in Server Actions which regressed in 19.2.6 (#36566 by @unstubbable)",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/react/19.2.7",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/react"
      },
      {
        "label": "Repository",
        "href": "https://github.com/facebook/react"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/react/react/releases/tag/v19.2.7"
      }
    ]
  },
  {
    "id": "react-dom-19-2-7",
    "packageName": "react-dom",
    "packageSlug": "react-dom",
    "description": "React DOM rendering",
    "oldVersion": "19.1.8",
    "newVersion": "19.2.7",
    "releaseDate": "2026-06-01",
    "publishedAgo": "published 14 days ago",
    "risk": "review",
    "category": "Review",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "React applications, component libraries, and frontend teams using React release workflows.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: 19.2.7 (June 1st, 2026).",
    "githubReleaseTitle": "19.2.7 (June 1st, 2026)",
    "githubReleaseUrl": "https://github.com/react/react/releases/tag/v19.2.7",
    "githubReleaseTag": "v19.2.7",
    "githubReleasePublishedAt": "2026-06-01T18:04:24Z",
    "releaseNotesExcerpt": "React Server Components Fixed missing FormData entries in Server Actions which regressed in 19.2.6 (#36566 by @unstubbable)",
    "releaseNotesStatus": "Matched GitHub release by npm version tag. Cached from an earlier generator run.",
    "route": "/package/react-dom/19.2.7",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/react-dom"
      },
      {
        "label": "Repository",
        "href": "https://github.com/facebook/react"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/react/react/releases/tag/v19.2.7"
      }
    ]
  },
  {
    "id": "date-fns-4-4-0",
    "packageName": "date-fns",
    "packageSlug": "date-fns",
    "description": "Date utilities",
    "oldVersion": "4.3.0",
    "newVersion": "4.4.0",
    "releaseDate": "2026-05-29",
    "publishedAgo": "published 16 days ago",
    "risk": "review",
    "category": "Review",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: v4.4.0.",
    "githubReleaseTitle": "v4.4.0",
    "githubReleaseUrl": "https://github.com/date-fns/date-fns/releases/tag/v4.4.0",
    "githubReleaseTag": "v4.4.0",
    "githubReleasePublishedAt": "2026-05-29T23:33:36Z",
    "releaseNotesExcerpt": "This release revisits the approach to CDN usage and introduces a new package, @date-fns/cdn and deprecates the date-fns CDN scripts. It allowed reducing the zipped package size from 5.83 MB down to 3.96 MB without introducing any breaking changes. In v5.0.0-alpha.0 where CDN scri",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/date-fns/4.4.0",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/date-fns"
      },
      {
        "label": "Repository",
        "href": "https://github.com/date-fns/date-fns"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/date-fns/date-fns/releases/tag/v4.4.0"
      }
    ]
  },
  {
    "id": "framer-motion-12-40-0",
    "packageName": "framer-motion",
    "packageSlug": "framer-motion",
    "description": "React motion library",
    "oldVersion": "12.39.0",
    "newVersion": "12.40.0",
    "releaseDate": "2026-05-21",
    "publishedAgo": "published 25 days ago",
    "risk": "review",
    "category": "Review",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance.",
    "whatChanged": "Minor framer-motion 12.40.0 release detected; review if used in production paths.",
    "githubReleaseTitle": "",
    "githubReleaseUrl": "",
    "githubReleaseTag": "",
    "githubReleasePublishedAt": "",
    "releaseNotesExcerpt": "",
    "releaseNotesStatus": "No GitHub releases found for this repository.",
    "route": "/package/framer-motion/12.40.0",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/framer-motion"
      },
      {
        "label": "Repository",
        "href": "https://github.com/motiondivision/motion"
      }
    ]
  },
  {
    "id": "reduxjs-toolkit-2-12-0",
    "packageName": "@reduxjs/toolkit",
    "packageSlug": "reduxjs-toolkit",
    "description": "Redux application toolkit",
    "oldVersion": "2.11.2",
    "newVersion": "2.12.0",
    "releaseDate": "2026-05-15",
    "publishedAgo": "published 31 days ago",
    "risk": "review",
    "category": "Review",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: v2.12.0.",
    "githubReleaseTitle": "v2.12.0",
    "githubReleaseUrl": "https://github.com/reduxjs/redux-toolkit/releases/tag/v2.12.0",
    "githubReleaseTag": "v2.12.0",
    "githubReleasePublishedAt": "2026-05-15T14:38:12Z",
    "releaseNotesExcerpt": "This **feature release** adds RTK usage skills files (via TanStack Intent) exports the RTK Query hook options types for reusability, fixes issues with infinite query status flags and batching handling, and makes some small TS improvements. Changelog Skills Files We've generated a",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/reduxjs-toolkit/2.12.0",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/@reduxjs/toolkit"
      },
      {
        "label": "Repository",
        "href": "https://github.com/reduxjs/redux-toolkit"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/reduxjs/redux-toolkit/releases/tag/v2.12.0"
      }
    ]
  },
  {
    "id": "zod-4-4-3",
    "packageName": "zod",
    "packageSlug": "zod",
    "description": "Schema validation",
    "oldVersion": "4.5.0-canary.20260504T070434",
    "newVersion": "4.4.3",
    "releaseDate": "2026-05-04",
    "publishedAgo": "published 42 days ago",
    "risk": "review",
    "category": "Review",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: v4.4.3.",
    "githubReleaseTitle": "v4.4.3",
    "githubReleaseUrl": "https://github.com/colinhacks/zod/releases/tag/v4.4.3",
    "githubReleaseTag": "v4.4.3",
    "githubReleasePublishedAt": "2026-05-04T07:06:55Z",
    "releaseNotesExcerpt": "Commits: 4c2fa95ce3f3390fbc522324e406b4e9e89b88f9 docs: use Zernio primary wordmark for gold sponsor logo 2aeec83eb135e3a83756e973ef44845fc5a455d2 docs: prune lapsed gold sponsors and rebalance logo sizing 7391be88ac1ee5cd02057f5ccc012a1f5df4efd0 docs: prune lapsed silver/bronze ",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/zod/4.4.3",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/zod"
      },
      {
        "label": "Repository",
        "href": "https://github.com/colinhacks/zod"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/colinhacks/zod/releases/tag/v4.4.3"
      }
    ]
  },
  {
    "id": "autoprefixer-10-5-0",
    "packageName": "autoprefixer",
    "packageSlug": "autoprefixer",
    "description": "CSS vendor prefixing",
    "oldVersion": "10.4.27",
    "newVersion": "10.5.0",
    "releaseDate": "2026-04-13",
    "publishedAgo": "published 62 days ago",
    "risk": "review",
    "category": "Review",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: 10.5.0 \"Each Endeavouring, All Achieving\".",
    "githubReleaseTitle": "10.5.0 \"Each Endeavouring, All Achieving\"",
    "githubReleaseUrl": "https://github.com/postcss/autoprefixer/releases/tag/10.5.0",
    "githubReleaseTag": "10.5.0",
    "githubReleasePublishedAt": "2026-04-13T20:44:49Z",
    "releaseNotesExcerpt": "<img src=\"https://github.com/user-attachments/assets/401cb4b1-0f05-459f-9106-47c4f1bbb53d\" alt=\"Coat of arms of Antigua and Barbuda\" width=\"172\" height=\"200\" align=\"right\"> Added mask-position-x and mask-position-y support (by @toporek).",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/autoprefixer/10.5.0",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/autoprefixer"
      },
      {
        "label": "Repository",
        "href": "https://github.com/postcss/autoprefixer"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/postcss/autoprefixer/releases/tag/10.5.0"
      }
    ]
  },
  {
    "id": "parcel-2-16-4",
    "packageName": "parcel",
    "packageSlug": "parcel",
    "description": "Zero-configuration web bundler",
    "oldVersion": "2.0.0-canary.1871",
    "newVersion": "2.16.4",
    "releaseDate": "2026-02-02",
    "publishedAgo": "published 133 days ago",
    "risk": "review",
    "category": "Review",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: v2.16.4.",
    "githubReleaseTitle": "v2.16.4",
    "githubReleaseUrl": "https://github.com/parcel-bundler/parcel/releases/tag/v2.16.4",
    "githubReleaseTag": "v2.16.4",
    "githubReleasePublishedAt": "2026-02-02T03:22:20Z",
    "releaseNotesExcerpt": "Fixed Dev server - Add --no-cors option to disable CORS headers - Details",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/parcel/2.16.4",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/parcel"
      },
      {
        "label": "Repository",
        "href": "https://github.com/parcel-bundler/parcel"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/parcel-bundler/parcel/releases/tag/v2.16.4"
      }
    ]
  },
  {
    "id": "emotion-react-11-14-0",
    "packageName": "@emotion/react",
    "packageSlug": "emotion-react",
    "description": "CSS-in-JS styling",
    "oldVersion": "11.13.5",
    "newVersion": "11.14.0",
    "releaseDate": "2024-12-09",
    "publishedAgo": "published 1 year ago",
    "risk": "review",
    "category": "Review",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "React applications, component libraries, and frontend teams using React release workflows.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: @emotion/styled@11.14.0.",
    "githubReleaseTitle": "@emotion/styled@11.14.0",
    "githubReleaseUrl": "https://github.com/emotion-js/emotion/releases/tag/%40emotion/styled%4011.14.0",
    "githubReleaseTag": "@emotion/styled@11.14.0",
    "githubReleasePublishedAt": "2024-12-09T08:43:42Z",
    "releaseNotesExcerpt": "Minor Changes #3284 a19d019 Thanks @Andarist! - Source code has been migrated to TypeScript. From now on type declarations will be emitted based on that, instead of being hand-written. Patch Changes Updated dependencies \\[e1bf17e]: - @emotion/use-insertion-effect-with-fallbacks@1",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/emotion-react/11.14.0",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/@emotion/react"
      },
      {
        "label": "Repository",
        "href": "https://github.com/emotion-js/emotion.git#main"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/emotion-js/emotion/releases/tag/%40emotion/styled%4011.14.0"
      }
    ]
  },
  {
    "id": "astro-6-4-7",
    "packageName": "astro",
    "packageSlug": "astro",
    "description": "Content-focused web framework",
    "oldVersion": "6.4.6",
    "newVersion": "6.4.7",
    "releaseDate": "2026-06-15",
    "publishedAgo": "published today",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: astro@6.4.7.",
    "githubReleaseTitle": "astro@6.4.7",
    "githubReleaseUrl": "https://github.com/withastro/astro/releases/tag/astro%406.4.7",
    "githubReleaseTag": "astro@6.4.7",
    "githubReleasePublishedAt": "2026-06-15T10:47:24Z",
    "releaseNotesExcerpt": "Patch Changes #17035 197e50e Thanks @astrobot-houston! - Fixes getRelativeLocaleUrl, getAbsoluteLocaleUrl, and getAbsoluteLocaleUrlList to strip trailing slashes when trailingSlash: 'never' is configured #16967 3719765 Thanks @astrobot-houston! - Fixes double URL-encoded paths re",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/astro/6.4.7",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/astro"
      },
      {
        "label": "Repository",
        "href": "https://github.com/withastro/astro"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/withastro/astro/releases/tag/astro%406.4.7"
      }
    ]
  },
  {
    "id": "playwright-1-61-0",
    "packageName": "playwright",
    "packageSlug": "playwright",
    "description": "Browser automation",
    "oldVersion": "1.61.0-beta-1781513093000",
    "newVersion": "1.61.0",
    "releaseDate": "2026-06-15",
    "publishedAgo": "published today",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Test suites, browser automation, and release validation workflows.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v1.61.0.",
    "githubReleaseTitle": "v1.61.0",
    "githubReleaseUrl": "https://github.com/microsoft/playwright/releases/tag/v1.61.0",
    "githubReleaseTag": "v1.61.0",
    "githubReleasePublishedAt": "2026-06-15T10:05:19Z",
    "releaseNotesExcerpt": "WebAuthn passkeys New Credentials virtual authenticator, available via browserContext.credentials, lets tests register passkeys and answer navigator.credentials.create() / navigator.credentials.get() ceremonies in the page - no real hardware key required, works in all browsers: Y",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/playwright/1.61.0",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/playwright"
      },
      {
        "label": "Repository",
        "href": "https://github.com/microsoft/playwright"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/microsoft/playwright/releases/tag/v1.61.0"
      }
    ]
  },
  {
    "id": "less-4-6-6",
    "packageName": "less",
    "packageSlug": "less",
    "description": "CSS preprocessor",
    "oldVersion": "4.6.5",
    "newVersion": "4.6.6",
    "releaseDate": "2026-06-14",
    "publishedAgo": "published 1 day ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: Release v4.6.6.",
    "githubReleaseTitle": "Release v4.6.6",
    "githubReleaseUrl": "https://github.com/less/less.js/releases/tag/v4.6.6",
    "githubReleaseTag": "v4.6.6",
    "githubReleasePublishedAt": "2026-06-14T00:18:46Z",
    "releaseNotesExcerpt": "Changes See CHANGELOG.md for details. Installation",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/less/4.6.6",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/less"
      },
      {
        "label": "Repository",
        "href": "https://github.com/less/less.js"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/less/less.js/releases/tag/v4.6.6"
      }
    ]
  },
  {
    "id": "happy-dom-20-10-3",
    "packageName": "happy-dom",
    "packageSlug": "happy-dom",
    "description": "Browser environment for testing",
    "oldVersion": "20.10.2",
    "newVersion": "20.10.3",
    "releaseDate": "2026-06-12",
    "publishedAgo": "published 2 days ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v20.10.3.",
    "githubReleaseTitle": "v20.10.3",
    "githubReleaseUrl": "https://github.com/capricorn86/happy-dom/releases/tag/v20.10.3",
    "githubReleaseTag": "v20.10.3",
    "githubReleasePublishedAt": "2026-06-12T22:45:56Z",
    "releaseNotesExcerpt": ":construction_worker_man: Patch fixes - Fix \"~=\" attribute selector matching hyphenated substrings in CSS selectors - By **@mixelburg** in task #2194",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/happy-dom/20.10.3",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/happy-dom"
      },
      {
        "label": "Repository",
        "href": "https://github.com/capricorn86/happy-dom"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/capricorn86/happy-dom/releases/tag/v20.10.3"
      }
    ]
  },
  {
    "id": "mui-material-9-1-1",
    "packageName": "@mui/material",
    "packageSlug": "mui-material",
    "description": "React component library",
    "oldVersion": "9.1.0",
    "newVersion": "9.1.1",
    "releaseDate": "2026-06-11",
    "publishedAgo": "published 4 days ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v9.1.0.",
    "githubReleaseTitle": "v9.1.0",
    "githubReleaseUrl": "https://github.com/mui/material-ui/releases/tag/v9.1.0",
    "githubReleaseTag": "v9.1.0",
    "githubReleasePublishedAt": "2026-06-08T08:42:14Z",
    "releaseNotesExcerpt": "A big thanks to the 15 contributors who made this release possible. Here are some highlights : Support for the prefers-reduced-motion setting. Improved support for Windows High Contrast mode with the enhanceHighContrast theme wrapper. @mui/material@9.1.0 [autocomplete] Enable cle",
    "releaseNotesStatus": "Using latest GitHub release because no exact version tag matched.",
    "route": "/package/mui-material/9.1.1",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/@mui/material"
      },
      {
        "label": "Repository",
        "href": "https://github.com/mui/material-ui"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/mui/material-ui/releases/tag/v9.1.0"
      }
    ]
  },
  {
    "id": "turbo-2-9-18",
    "packageName": "turbo",
    "packageSlug": "turbo",
    "description": "Monorepo build system",
    "oldVersion": "2.9.17",
    "newVersion": "2.9.18",
    "releaseDate": "2026-06-10",
    "publishedAgo": "published 4 days ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend build pipelines, monorepos, and CI jobs.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: Turborepo v2.9.18.",
    "githubReleaseTitle": "Turborepo v2.9.18",
    "githubReleaseUrl": "https://github.com/vercel/turborepo/releases/tag/v2.9.18",
    "githubReleaseTag": "v2.9.18",
    "githubReleasePublishedAt": "2026-06-10T23:19:20Z",
    "releaseNotesExcerpt": "<!-- Release notes generated using configuration in .github/release.yml at v2.9.18 --> What's Changed Changelog release(turborepo): 2.9.17 by @github-actions[bot] in https://github.com/vercel/turborepo/pull/13047 ci: Fetch version.txt via API in docs alias failure notification by",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/turbo/2.9.18",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/turbo"
      },
      {
        "label": "Repository",
        "href": "https://github.com/vercel/turborepo"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/vercel/turborepo/releases/tag/v2.9.18"
      }
    ]
  },
  {
    "id": "next-16-2-9",
    "packageName": "next",
    "packageSlug": "next",
    "description": "React framework",
    "oldVersion": "16.2.8",
    "newVersion": "16.2.9",
    "releaseDate": "2026-06-09",
    "publishedAgo": "published 5 days ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v16.2.9.",
    "githubReleaseTitle": "v16.2.9",
    "githubReleaseUrl": "https://github.com/vercel/next.js/releases/tag/v16.2.9",
    "githubReleaseTag": "v16.2.9",
    "githubReleasePublishedAt": "2026-06-10T12:30:06Z",
    "releaseNotesExcerpt": "Empty release to ensure next@latest points at a stable release. Next.js only allows publishing with Trusted Publishing enabled. In order to fix NPM dist-tags, we have to release a new version. Updating dist-tags is not possible with Trusted Publishing.",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/next/16.2.9",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/next"
      },
      {
        "label": "Repository",
        "href": "https://github.com/vercel/next.js"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/vercel/next.js/releases/tag/v16.2.9"
      }
    ]
  },
  {
    "id": "swc-core-1-15-41",
    "packageName": "@swc/core",
    "packageSlug": "swc-core",
    "description": "JavaScript and TypeScript compiler",
    "oldVersion": "1.15.41-nightly-20260609.1",
    "newVersion": "1.15.41",
    "releaseDate": "2026-06-09",
    "publishedAgo": "published 6 days ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v1.15.41.",
    "githubReleaseTitle": "v1.15.41",
    "githubReleaseUrl": "https://github.com/swc-project/swc/releases/tag/v1.15.41",
    "githubReleaseTag": "v1.15.41",
    "githubReleasePublishedAt": "2026-06-09T15:39:22Z",
    "releaseNotesExcerpt": "",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/swc-core/1.15.41",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/@swc/core"
      },
      {
        "label": "Repository",
        "href": "https://github.com/swc-project/swc"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/swc-project/swc/releases/tag/v1.15.41"
      }
    ]
  },
  {
    "id": "prettier-3-8-4",
    "packageName": "prettier",
    "packageSlug": "prettier",
    "description": "Code formatter",
    "oldVersion": "3.8.3",
    "newVersion": "3.8.4",
    "releaseDate": "2026-06-09",
    "publishedAgo": "published 6 days ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Developer tooling, type checking, and code-quality gates.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: 3.8.4.",
    "githubReleaseTitle": "3.8.4",
    "githubReleaseUrl": "https://github.com/prettier/prettier/releases/tag/3.8.4",
    "githubReleaseTag": "3.8.4",
    "githubReleasePublishedAt": "2026-06-09T11:31:30Z",
    "releaseNotesExcerpt": "Markdown: Fix blank lines between list items and nested sub-lists being removed in Markdown/MDX (https://github.com/prettier/prettier/pull/17746 by @byplayer) Changelog",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/prettier/3.8.4",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/prettier"
      },
      {
        "label": "Repository",
        "href": "https://github.com/prettier/prettier"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/prettier/prettier/releases/tag/3.8.4"
      }
    ]
  },
  {
    "id": "semver-7-8-4",
    "packageName": "semver",
    "packageSlug": "semver",
    "description": "Semantic version parsing",
    "oldVersion": "7.8.3",
    "newVersion": "7.8.4",
    "releaseDate": "2026-06-09",
    "publishedAgo": "published 5 days ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v7.8.4.",
    "githubReleaseTitle": "v7.8.4",
    "githubReleaseUrl": "https://github.com/npm/node-semver/releases/tag/v7.8.4",
    "githubReleaseTag": "v7.8.4",
    "githubReleasePublishedAt": "2026-06-09T23:49:18Z",
    "releaseNotesExcerpt": "7.8.4 (2026-06-09) Bug Fixes e583226 #874 reject numeric segments after x-ranges (@pupuking723)",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/semver/7.8.4",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/semver"
      },
      {
        "label": "Repository",
        "href": "https://github.com/npm/node-semver"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/npm/node-semver/releases/tag/v7.8.4"
      }
    ]
  },
  {
    "id": "nuxt-4-4-8",
    "packageName": "nuxt",
    "packageSlug": "nuxt",
    "description": "Vue application framework",
    "oldVersion": "4.4.7",
    "newVersion": "4.4.8",
    "releaseDate": "2026-06-08",
    "publishedAgo": "published 6 days ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v4.4.8.",
    "githubReleaseTitle": "v4.4.8",
    "githubReleaseUrl": "https://github.com/nuxt/nuxt/releases/tag/v4.4.8",
    "githubReleaseTag": "v4.4.8",
    "githubReleasePublishedAt": "2026-06-08T18:40:24Z",
    "releaseNotesExcerpt": "> 4.4.8 is a hotfix release to address an issue running the dev server on MacOS. Changelog compare changes Fixes **vite:** Shorter socket name for macOs with tmp fallback (#35265) **kit:** Respect type option in findPath (#35272) **deps:** Update nuxt/scripts presets (905621594) ",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/nuxt/4.4.8",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/nuxt"
      },
      {
        "label": "Repository",
        "href": "https://github.com/nuxt/nuxt"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/nuxt/nuxt/releases/tag/v4.4.8"
      }
    ]
  },
  {
    "id": "apollo-client-4-2-3",
    "packageName": "@apollo/client",
    "packageSlug": "apollo-client",
    "description": "GraphQL client",
    "oldVersion": "4.2.2",
    "newVersion": "4.2.3",
    "releaseDate": "2026-06-08",
    "publishedAgo": "published 6 days ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: @apollo/client@4.2.3.",
    "githubReleaseTitle": "@apollo/client@4.2.3",
    "githubReleaseUrl": "https://github.com/apollographql/apollo-client/releases/tag/%40apollo/client%404.2.3",
    "githubReleaseTag": "@apollo/client@4.2.3",
    "githubReleasePublishedAt": "2026-06-08T22:55:33Z",
    "releaseNotesExcerpt": "Patch Changes #13254 66e9dfc Thanks @jerelmiller! - Add support for graphql v17 as a valid peer dependency.",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/apollo-client/4.2.3",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/@apollo/client"
      },
      {
        "label": "Repository",
        "href": "https://github.com/apollographql/apollo-client"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/apollographql/apollo-client/releases/tag/%40apollo/client%404.2.3"
      }
    ]
  },
  {
    "id": "svelte-5-56-3",
    "packageName": "svelte",
    "packageSlug": "svelte",
    "description": "Compiler-based UI framework",
    "oldVersion": "5.56.2",
    "newVersion": "5.56.3",
    "releaseDate": "2026-06-07",
    "publishedAgo": "published 7 days ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: svelte@5.56.3.",
    "githubReleaseTitle": "svelte@5.56.3",
    "githubReleaseUrl": "https://github.com/sveltejs/svelte/releases/tag/svelte%405.56.3",
    "githubReleaseTag": "svelte@5.56.3",
    "githubReleasePublishedAt": "2026-06-07T18:30:29Z",
    "releaseNotesExcerpt": "Patch Changes fix: ignore errors that occur in destroyed effects (#18384) fix: type BigInts in $state.snapshot(...) return values (#18388)",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/svelte/5.56.3",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/svelte"
      },
      {
        "label": "Repository",
        "href": "https://github.com/sveltejs/svelte"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/sveltejs/svelte/releases/tag/svelte%405.56.3"
      }
    ]
  },
  {
    "id": "radix-ui-react-dialog-1-1-16",
    "packageName": "@radix-ui/react-dialog",
    "packageSlug": "radix-ui-react-dialog",
    "description": "Accessible dialog primitive",
    "oldVersion": "1.1.16-rc.1780677407053",
    "newVersion": "1.1.16",
    "releaseDate": "2026-06-06",
    "publishedAgo": "published 9 days ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "React applications, component libraries, and frontend teams using React release workflows.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "Patch @radix-ui/react-dialog 1.1.16 release detected with no OSV match.",
    "githubReleaseTitle": "",
    "githubReleaseUrl": "",
    "githubReleaseTag": "",
    "githubReleasePublishedAt": "",
    "releaseNotesExcerpt": "",
    "releaseNotesStatus": "No GitHub releases found for this repository.",
    "route": "/package/radix-ui-react-dialog/1.1.16",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/@radix-ui/react-dialog"
      },
      {
        "label": "Repository",
        "href": "https://github.com/radix-ui/primitives"
      }
    ]
  },
  {
    "id": "radix-ui-react-popover-1-1-16",
    "packageName": "@radix-ui/react-popover",
    "packageSlug": "radix-ui-react-popover",
    "description": "Accessible popover primitive",
    "oldVersion": "1.1.16-rc.1780677407053",
    "newVersion": "1.1.16",
    "releaseDate": "2026-06-06",
    "publishedAgo": "published 9 days ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "React applications, component libraries, and frontend teams using React release workflows.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "Patch @radix-ui/react-popover 1.1.16 release detected with no OSV match.",
    "githubReleaseTitle": "",
    "githubReleaseUrl": "",
    "githubReleaseTag": "",
    "githubReleasePublishedAt": "",
    "releaseNotesExcerpt": "",
    "releaseNotesStatus": "No GitHub releases found for this repository.",
    "route": "/package/radix-ui-react-popover/1.1.16",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/@radix-ui/react-popover"
      },
      {
        "label": "Repository",
        "href": "https://github.com/radix-ui/primitives"
      }
    ]
  },
  {
    "id": "remix-run-react-2-17-5",
    "packageName": "@remix-run/react",
    "packageSlug": "remix-run-react",
    "description": "Remix React runtime",
    "oldVersion": "2.17.4",
    "newVersion": "2.17.5",
    "releaseDate": "2026-06-01",
    "publishedAgo": "published 14 days ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "React applications, component libraries, and frontend teams using React release workflows.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: test v0.5.0.",
    "githubReleaseTitle": "test v0.5.0",
    "githubReleaseUrl": "https://github.com/remix-run/remix/releases/tag/test%400.5.0",
    "githubReleaseTag": "test@0.5.0",
    "githubReleasePublishedAt": "2026-06-05T18:28:12Z",
    "releaseNotesExcerpt": "Minor Changes Add timeout and abort signal support to @remix-run/test. Tests and lifecycle hooks can now pass { timeout, signal }. Timed-out tests fail and abort t.signal, so async work that accepts an AbortSignal can cancel promptly. Tests and suites can also use string skip/tod",
    "releaseNotesStatus": "Using latest GitHub release because no exact version tag matched.",
    "route": "/package/remix-run-react/2.17.5",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/@remix-run/react"
      },
      {
        "label": "Repository",
        "href": "https://github.com/remix-run/remix"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/remix-run/remix/releases/tag/test%400.5.0"
      }
    ]
  },
  {
    "id": "vite-8-0-16",
    "packageName": "vite",
    "packageSlug": "vite",
    "description": "Frontend build tooling",
    "oldVersion": "8.0.15",
    "newVersion": "8.0.16",
    "releaseDate": "2026-06-01",
    "publishedAgo": "published 14 days ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend build pipelines, monorepos, and CI jobs.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v8.0.16.",
    "githubReleaseTitle": "v8.0.16",
    "githubReleaseUrl": "https://github.com/vitejs/vite/releases/tag/v8.0.16",
    "githubReleaseTag": "v8.0.16",
    "githubReleasePublishedAt": "2026-06-01T09:50:08Z",
    "releaseNotesExcerpt": "Please refer to CHANGELOG.md for details.",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/vite/8.0.16",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/vite"
      },
      {
        "label": "Repository",
        "href": "https://github.com/vitejs/vite"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/vitejs/vite/releases/tag/v8.0.16"
      }
    ]
  },
  {
    "id": "zustand-5-0-14",
    "packageName": "zustand",
    "packageSlug": "zustand",
    "description": "React state management",
    "oldVersion": "5.0.13",
    "newVersion": "5.0.14",
    "releaseDate": "2026-05-28",
    "publishedAgo": "published 18 days ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v5.0.14.",
    "githubReleaseTitle": "v5.0.14",
    "githubReleaseUrl": "https://github.com/pmndrs/zustand/releases/tag/v5.0.14",
    "githubReleaseTag": "v5.0.14",
    "githubReleasePublishedAt": "2026-05-28T10:17:28Z",
    "releaseNotesExcerpt": "This release fixes a type issue in devtools. What's Changed fix(devtools): improve type inference for Devtools initializer by @dbritto-dev in https://github.com/pmndrs/zustand/pull/3511 New Contributors @TheSeydiCharyyev made their first contribution in https://github.com/pmndrs/",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/zustand/5.0.14",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/zustand"
      },
      {
        "label": "Repository",
        "href": "https://github.com/pmndrs/zustand"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/pmndrs/zustand/releases/tag/v5.0.14"
      }
    ]
  },
  {
    "id": "dayjs-1-11-21",
    "packageName": "dayjs",
    "packageSlug": "dayjs",
    "description": "Date utilities",
    "oldVersion": "1.11.20",
    "newVersion": "1.11.21",
    "releaseDate": "2026-05-26",
    "publishedAgo": "published 20 days ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v1.11.21.",
    "githubReleaseTitle": "v1.11.21",
    "githubReleaseUrl": "https://github.com/iamkun/dayjs/releases/tag/v1.11.21",
    "githubReleaseTag": "v1.11.21",
    "githubReleasePublishedAt": "2026-05-26T05:46:13Z",
    "releaseNotesExcerpt": "1.11.21 (2026-05-26) Bug Fixes preserve unsupported year tokens in format (#3015) (#3016) (8fda602)",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/dayjs/1.11.21",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/dayjs"
      },
      {
        "label": "Repository",
        "href": "https://github.com/iamkun/dayjs"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/iamkun/dayjs/releases/tag/v1.11.21"
      }
    ]
  },
  {
    "id": "webpack-5-107-2",
    "packageName": "webpack",
    "packageSlug": "webpack",
    "description": "JavaScript bundler",
    "oldVersion": "5.107.1",
    "newVersion": "5.107.2",
    "releaseDate": "2026-05-25",
    "publishedAgo": "published 21 days ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend build pipelines, monorepos, and CI jobs.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v5.107.2.",
    "githubReleaseTitle": "v5.107.2",
    "githubReleaseUrl": "https://github.com/webpack/webpack/releases/tag/v5.107.2",
    "githubReleaseTag": "v5.107.2",
    "githubReleasePublishedAt": "2026-05-25T15:18:32Z",
    "releaseNotesExcerpt": "Patch Changes Reduce per-file overhead in ContextModuleFactory.resolveDependencies by batching alternativeRequests hook calls. Previously the hook was invoked once per file in the context (with a single-item array), paying per-call overhead (closure allocation, resolverFactory.ge",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/webpack/5.107.2",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/webpack"
      },
      {
        "label": "Repository",
        "href": "https://github.com/webpack/webpack"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/webpack/webpack/releases/tag/v5.107.2"
      }
    ]
  },
  {
    "id": "babel-core-7-29-7",
    "packageName": "@babel/core",
    "packageSlug": "babel-core",
    "description": "JavaScript compiler core",
    "oldVersion": "7.29.6",
    "newVersion": "7.29.7",
    "releaseDate": "2026-05-25",
    "publishedAgo": "published 21 days ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v7.29.7.",
    "githubReleaseTitle": "v7.29.7",
    "githubReleaseUrl": "https://github.com/babel/babel/releases/tag/v7.29.7",
    "githubReleaseTag": "v7.29.7",
    "githubReleasePublishedAt": "2026-05-25T12:36:26Z",
    "releaseNotesExcerpt": "v7.29.7 (2026-05-25) Re-release all packages with npm provenance attestations",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/babel-core/7.29.7",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/@babel/core"
      },
      {
        "label": "Repository",
        "href": "https://github.com/babel/babel"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/babel/babel/releases/tag/v7.29.7"
      }
    ]
  },
  {
    "id": "postcss-8-5-15",
    "packageName": "postcss",
    "packageSlug": "postcss",
    "description": "CSS transformation",
    "oldVersion": "8.5.14",
    "newVersion": "8.5.15",
    "releaseDate": "2026-05-19",
    "publishedAgo": "published 27 days ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: 8.5.15.",
    "githubReleaseTitle": "8.5.15",
    "githubReleaseUrl": "https://github.com/postcss/postcss/releases/tag/8.5.15",
    "githubReleaseTag": "8.5.15",
    "githubReleasePublishedAt": "2026-05-19T09:50:58Z",
    "releaseNotesExcerpt": "Fixed declaration parsing performance (by @homanp).",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/postcss/8.5.15",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/postcss"
      },
      {
        "label": "Repository",
        "href": "https://github.com/postcss/postcss"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/postcss/postcss/releases/tag/8.5.15"
      }
    ]
  },
  {
    "id": "vitejs-plugin-react-6-0-2",
    "packageName": "@vitejs/plugin-react",
    "packageSlug": "vitejs-plugin-react",
    "description": "Vite React plugin",
    "oldVersion": "6.0.1",
    "newVersion": "6.0.2",
    "releaseDate": "2026-05-14",
    "publishedAgo": "published 31 days ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "React applications, component libraries, and frontend teams using React release workflows.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: plugin-react@6.0.2.",
    "githubReleaseTitle": "plugin-react@6.0.2",
    "githubReleaseUrl": "https://github.com/vitejs/vite-plugin-react/releases/tag/plugin-react%406.0.2",
    "githubReleaseTag": "plugin-react@6.0.2",
    "githubReleasePublishedAt": "2026-05-14T20:03:25Z",
    "releaseNotesExcerpt": "Allow all options in reactCompilerPreset (#1189) This is a type only change. Only compilationMode and target options were available for reactCompilerPreset.",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/vitejs-plugin-react/6.0.2",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/@vitejs/plugin-react"
      },
      {
        "label": "Repository",
        "href": "https://github.com/vitejs/vite-plugin-react"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/vitejs/vite-plugin-react/releases/tag/plugin-react%406.0.2"
      }
    ]
  },
  {
    "id": "msw-2-14-6",
    "packageName": "msw",
    "packageSlug": "msw",
    "description": "API mocking library",
    "oldVersion": "2.14.5",
    "newVersion": "2.14.6",
    "releaseDate": "2026-05-11",
    "publishedAgo": "published 35 days ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v2.14.6.",
    "githubReleaseTitle": "v2.14.6",
    "githubReleaseUrl": "https://github.com/mswjs/msw/releases/tag/v2.14.6",
    "githubReleaseTag": "v2.14.6",
    "githubReleasePublishedAt": "2026-05-11T09:41:54Z",
    "releaseNotesExcerpt": "v2.14.6 (2026-05-11) Bug Fixes **defineNetwork:** prevent event forwarding manually (#2740) (ccb40e08e3ef1dd80da217f74a1093be260a3f51) @kettanaito",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/msw/2.14.6",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/msw"
      },
      {
        "label": "Repository",
        "href": "https://github.com/mswjs/msw"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/mswjs/msw/releases/tag/v2.14.6"
      }
    ]
  },
  {
    "id": "tailwind-merge-3-6-0",
    "packageName": "tailwind-merge",
    "packageSlug": "tailwind-merge",
    "description": "Tailwind class merging",
    "oldVersion": "3.6.0-dev.d54f7e5713c653d0171971405344f7c6e44d418f",
    "newVersion": "3.6.0",
    "releaseDate": "2026-05-10",
    "publishedAgo": "published 36 days ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v3.6.0.",
    "githubReleaseTitle": "v3.6.0",
    "githubReleaseUrl": "https://github.com/dcastil/tailwind-merge/releases/tag/v3.6.0",
    "githubReleaseTag": "v3.6.0",
    "githubReleasePublishedAt": "2026-05-10T12:55:59Z",
    "releaseNotesExcerpt": "New Features Add support for Tailwind CSS v4.3 by @dcastil in https://github.com/dcastil/tailwind-merge/pull/677 - Add postfixLookupClassGroups option to config to support Tailwind utilities where a slash is part of the full class name, like named container queries Add support fo",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/tailwind-merge/3.6.0",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/tailwind-merge"
      },
      {
        "label": "Repository",
        "href": "https://github.com/dcastil/tailwind-merge"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/dcastil/tailwind-merge/releases/tag/v3.6.0"
      }
    ]
  },
  {
    "id": "jest-30-4-2",
    "packageName": "jest",
    "packageSlug": "jest",
    "description": "JavaScript testing",
    "oldVersion": "30.4.1",
    "newVersion": "30.4.2",
    "releaseDate": "2026-05-09",
    "publishedAgo": "published 37 days ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Test suites, browser automation, and release validation workflows.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v30.4.2.",
    "githubReleaseTitle": "v30.4.2",
    "githubReleaseUrl": "https://github.com/jestjs/jest/releases/tag/v30.4.2",
    "githubReleaseTag": "v30.4.2",
    "githubReleasePublishedAt": "2026-05-09T00:32:04Z",
    "releaseNotesExcerpt": "Fixes [jest-runtime] Fix named imports from CJS modules whose module.exports is a function with own-property exports (#16150) **Full Changelog**: https://github.com/jestjs/jest/compare/v30.4.1...v30.4.2",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/jest/30.4.2",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/jest"
      },
      {
        "label": "Repository",
        "href": "https://github.com/jestjs/jest"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/jestjs/jest/releases/tag/v30.4.2"
      }
    ]
  },
  {
    "id": "immer-11-1-8",
    "packageName": "immer",
    "packageSlug": "immer",
    "description": "Immutable state updates",
    "oldVersion": "11.1.7",
    "newVersion": "11.1.8",
    "releaseDate": "2026-05-08",
    "publishedAgo": "published 38 days ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v11.1.8.",
    "githubReleaseTitle": "v11.1.8",
    "githubReleaseUrl": "https://github.com/immerjs/immer/releases/tag/v11.1.8",
    "githubReleaseTag": "v11.1.8",
    "githubReleasePublishedAt": "2026-05-08T15:09:34Z",
    "releaseNotesExcerpt": "11.1.8 (2026-05-08) Bug Fixes update current and original typings to assert draft value is unwrapped (#1236) (bf2d154)",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/immer/11.1.8",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/immer"
      },
      {
        "label": "Repository",
        "href": "https://github.com/immerjs/immer"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/immerjs/immer/releases/tag/v11.1.8"
      }
    ]
  },
  {
    "id": "ky-2-0-2",
    "packageName": "ky",
    "packageSlug": "ky",
    "description": "Fetch client",
    "oldVersion": "2.0.1",
    "newVersion": "2.0.2",
    "releaseDate": "2026-04-21",
    "publishedAgo": "published 55 days ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v2.0.2.",
    "githubReleaseTitle": "v2.0.2",
    "githubReleaseUrl": "https://github.com/sindresorhus/ky/releases/tag/v2.0.2",
    "githubReleaseTag": "v2.0.2",
    "githubReleasePublishedAt": "2026-04-21T08:58:55Z",
    "releaseNotesExcerpt": "Fix init hook URLSearchParams deletions add0703 Fix tuple searchParams mutations leaking across init-hook requests (#861) 346f898 --- https://github.com/sindresorhus/ky/compare/v2.0.1...v2.0.2",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/ky/2.0.2",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/ky"
      },
      {
        "label": "Repository",
        "href": "https://github.com/sindresorhus/ky"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/sindresorhus/ky/releases/tag/v2.0.2"
      }
    ]
  },
  {
    "id": "typescript-6-0-3",
    "packageName": "typescript",
    "packageSlug": "typescript",
    "description": "Typed JavaScript compiler",
    "oldVersion": "6.0.0-dev.20260416",
    "newVersion": "6.0.3",
    "releaseDate": "2026-04-16",
    "publishedAgo": "published 59 days ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Developer tooling, type checking, and code-quality gates.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: TypeScript 6.0.3.",
    "githubReleaseTitle": "TypeScript 6.0.3",
    "githubReleaseUrl": "https://github.com/microsoft/TypeScript/releases/tag/v6.0.3",
    "githubReleaseTag": "v6.0.3",
    "githubReleasePublishedAt": "2026-04-16T23:43:08Z",
    "releaseNotesExcerpt": "For release notes, check out the release announcement blog post. fixed issues query for TypeScript 6.0.0 (Beta). fixed issues query for TypeScript 6.0.1 (RC). fixed issues query for TypeScript 6.0.2 (Stable). fixed issues query for TypeScript 6.0.3 (Stable). Downloads are availab",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/typescript/6.0.3",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/typescript"
      },
      {
        "label": "Repository",
        "href": "https://github.com/microsoft/TypeScript"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/microsoft/TypeScript/releases/tag/v6.0.3"
      }
    ]
  },
  {
    "id": "lodash-4-18-1",
    "packageName": "lodash",
    "packageSlug": "lodash",
    "description": "Utility library",
    "oldVersion": "4.18.0",
    "newVersion": "4.18.1",
    "releaseDate": "2026-04-01",
    "publishedAgo": "published 74 days ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: 4.18.1.",
    "githubReleaseTitle": "4.18.1",
    "githubReleaseUrl": "https://github.com/lodash/lodash/releases/tag/4.18.1",
    "githubReleaseTag": "4.18.1",
    "githubReleasePublishedAt": "2026-04-01T21:01:28Z",
    "releaseNotesExcerpt": "Bugs Fixes a ReferenceError issue in lodash lodash-es lodash-amd and lodash.template when using the template and fromPairs functions from the modular builds. See https://github.com/lodash/lodash/issues/6167#issuecomment-4165269769 These defects were related to how lodash distribu",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/lodash/4.18.1",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/lodash"
      },
      {
        "label": "Repository",
        "href": "https://github.com/lodash/lodash"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/lodash/lodash/releases/tag/4.18.1"
      }
    ]
  },
  {
    "id": "swr-2-4-1",
    "packageName": "swr",
    "packageSlug": "swr",
    "description": "React data fetching",
    "oldVersion": "2.4.0",
    "newVersion": "2.4.1",
    "releaseDate": "2026-02-27",
    "publishedAgo": "published 108 days ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v2.4.0.",
    "githubReleaseTitle": "v2.4.0",
    "githubReleaseUrl": "https://github.com/vercel/swr/releases/tag/v2.4.0",
    "githubReleaseTag": "v2.4.0",
    "githubReleasePublishedAt": "2026-02-01T03:02:37Z",
    "releaseNotesExcerpt": "What's Changed chore: Migrate suspense related tests to e2e by @promer94 in https://github.com/vercel/swr/pull/4204 CI: add missing flag for canary test by @promer94 in https://github.com/vercel/swr/pull/4206 fix: Ensure useSWRImmutable overrides global refreshInterval by @CODEAb",
    "releaseNotesStatus": "Using latest GitHub release because no exact version tag matched.",
    "route": "/package/swr/2.4.1",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/swr"
      },
      {
        "label": "Repository",
        "href": "https://github.com/vercel/swr"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/vercel/swr/releases/tag/v2.4.0"
      }
    ]
  },
  {
    "id": "gatsby-5-16-1",
    "packageName": "gatsby",
    "packageSlug": "gatsby",
    "description": "React site framework",
    "oldVersion": "5.16.0",
    "newVersion": "5.16.1",
    "releaseDate": "2026-02-10",
    "publishedAgo": "published 125 days ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: gatsby@5.16.1.",
    "githubReleaseTitle": "gatsby@5.16.1",
    "githubReleaseUrl": "https://github.com/gatsbyjs/gatsby/releases/tag/gatsby%405.16.1",
    "githubReleaseTag": "gatsby@5.16.1",
    "githubReleasePublishedAt": "2026-02-10T14:38:44Z",
    "releaseNotesExcerpt": "What's Changed Fix various regressions with Gatsby Head API, such as <title> not updating document.title by @serhalp and @pieh in https://github.com/gatsbyjs/gatsby/pull/39382 **Full Changelog**: https://github.com/gatsbyjs/gatsby/compare/gatsby@5.16.0...gatsby@5.16.1",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/gatsby/5.16.1",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/gatsby"
      },
      {
        "label": "Repository",
        "href": "https://github.com/gatsbyjs/gatsby"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/gatsbyjs/gatsby/releases/tag/gatsby%405.16.1"
      }
    ]
  },
  {
    "id": "testing-library-react-16-3-2",
    "packageName": "@testing-library/react",
    "packageSlug": "testing-library-react",
    "description": "React component testing",
    "oldVersion": "16.3.1",
    "newVersion": "16.3.2",
    "releaseDate": "2026-01-19",
    "publishedAgo": "published 147 days ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "React applications, component libraries, and frontend teams using React release workflows.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v16.3.2.",
    "githubReleaseTitle": "v16.3.2",
    "githubReleaseUrl": "https://github.com/testing-library/react-testing-library/releases/tag/v16.3.2",
    "githubReleaseTag": "v16.3.2",
    "githubReleasePublishedAt": "2026-01-19T10:59:09Z",
    "releaseNotesExcerpt": "16.3.2 (2026-01-19) Bug Fixes Update 'onCaughtError' type inference in 'RenderOptions' to work with React v19 (#1438) (f32bd1b)",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/testing-library-react/16.3.2",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/@testing-library/react"
      },
      {
        "label": "Repository",
        "href": "https://github.com/testing-library/react-testing-library"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/testing-library/react-testing-library/releases/tag/v16.3.2"
      }
    ]
  },
  {
    "id": "tsup-8-5-1",
    "packageName": "tsup",
    "packageSlug": "tsup",
    "description": "TypeScript library bundler",
    "oldVersion": "8.5.0",
    "newVersion": "8.5.1",
    "releaseDate": "2025-11-12",
    "publishedAgo": "published 214 days ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v8.5.1.",
    "githubReleaseTitle": "v8.5.1",
    "githubReleaseUrl": "https://github.com/egoist/tsup/releases/tag/v8.5.1",
    "githubReleaseTag": "v8.5.1",
    "githubReleasePublishedAt": "2025-11-12T21:21:34Z",
    "releaseNotesExcerpt": "&nbsp;&nbsp;&nbsp; Bug Fixes Add script tag validation &nbsp;-&nbsp; by @benhoad in https://github.com/egoist/tsup/issues/1314 <samp>(df736)</samp> Update esbuild to fix sourcemap source issue &nbsp;-&nbsp; by @ArcherGu and @sxzz in https://github.com/egoist/tsup/issues/1316 <sam",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/tsup/8.5.1",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/tsup"
      },
      {
        "label": "Repository",
        "href": "https://github.com/egoist/tsup"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/egoist/tsup/releases/tag/v8.5.1"
      }
    ]
  },
  {
    "id": "types-react-dom-19-2-3",
    "packageName": "@types/react-dom",
    "packageSlug": "types-react-dom",
    "description": "React DOM TypeScript definitions",
    "oldVersion": "19.2.2",
    "newVersion": "19.2.3",
    "releaseDate": "2025-11-12",
    "publishedAgo": "published 215 days ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "React applications, component libraries, and frontend teams using React release workflows.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: 0.1.450.",
    "githubReleaseTitle": "0.1.450",
    "githubReleaseUrl": "https://github.com/DefinitelyTyped/DefinitelyTyped/releases/tag/0.1.450",
    "githubReleaseTag": "0.1.450",
    "githubReleasePublishedAt": "2019-09-04T18:31:00Z",
    "releaseNotesExcerpt": "",
    "releaseNotesStatus": "Using latest GitHub release because no exact version tag matched.",
    "route": "/package/types-react-dom/19.2.3",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/@types/react-dom"
      },
      {
        "label": "Repository",
        "href": "https://github.com/DefinitelyTyped/DefinitelyTyped"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/DefinitelyTyped/DefinitelyTyped/releases/tag/0.1.450"
      }
    ]
  },
  {
    "id": "formik-2-4-9",
    "packageName": "formik",
    "packageSlug": "formik",
    "description": "React form state",
    "oldVersion": "2.4.8",
    "newVersion": "2.4.9",
    "releaseDate": "2025-11-10",
    "publishedAgo": "published 217 days ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: formik@2.4.9.",
    "githubReleaseTitle": "formik@2.4.9",
    "githubReleaseUrl": "https://github.com/jaredpalmer/formik/releases/tag/formik%402.4.9",
    "githubReleaseTag": "formik@2.4.9",
    "githubReleasePublishedAt": "2025-11-10T17:02:10Z",
    "releaseNotesExcerpt": "Patch Changes #4051 8f9d04d Thanks @Moumouls! - fix: jsx ref for react 19",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/formik/2.4.9",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/formik"
      },
      {
        "label": "Repository",
        "href": "https://github.com/jaredpalmer/formik"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/jaredpalmer/formik/releases/tag/formik%402.4.9"
      }
    ]
  },
  {
    "id": "testing-library-jest-dom-6-9-1",
    "packageName": "@testing-library/jest-dom",
    "packageSlug": "testing-library-jest-dom",
    "description": "DOM testing matchers",
    "oldVersion": "6.9.0",
    "newVersion": "6.9.1",
    "releaseDate": "2025-10-01",
    "publishedAgo": "published 256 days ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v6.9.1.",
    "githubReleaseTitle": "v6.9.1",
    "githubReleaseUrl": "https://github.com/testing-library/jest-dom/releases/tag/v6.9.1",
    "githubReleaseTag": "v6.9.1",
    "githubReleasePublishedAt": "2025-10-01T20:04:24Z",
    "releaseNotesExcerpt": "6.9.1 (2025-10-01) Bug Fixes Fix undefined Node error (nodejs) (#707) (0ff8904)",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/testing-library-jest-dom/6.9.1",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/@testing-library/jest-dom"
      },
      {
        "label": "Repository",
        "href": "https://github.com/testing-library/jest-dom"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/testing-library/jest-dom/releases/tag/v6.9.1"
      }
    ]
  },
  {
    "id": "yup-1-7-1",
    "packageName": "yup",
    "packageSlug": "yup",
    "description": "Object schema validation",
    "oldVersion": "1.7.0",
    "newVersion": "1.7.1",
    "releaseDate": "2025-09-21",
    "publishedAgo": "published 267 days ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v1 Because I finally got around to it.",
    "githubReleaseTitle": "v1 Because I finally got around to it",
    "githubReleaseUrl": "https://github.com/jquense/yup/releases/tag/v1.0.0",
    "githubReleaseTag": "v1.0.0",
    "githubReleasePublishedAt": "2023-02-08T14:30:36Z",
    "releaseNotesExcerpt": "https://github.com/jquense/yup/issues/1906",
    "releaseNotesStatus": "Using latest GitHub release because no exact version tag matched.",
    "route": "/package/yup/1.7.1",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/yup"
      },
      {
        "label": "Repository",
        "href": "https://github.com/jquense/yup"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/jquense/yup/releases/tag/v1.0.0"
      }
    ]
  },
  {
    "id": "class-variance-authority-0-7-1",
    "packageName": "class-variance-authority",
    "packageSlug": "class-variance-authority",
    "description": "Variant class composition",
    "oldVersion": "0.7.1-canary.2",
    "newVersion": "0.7.1",
    "releaseDate": "2024-11-26",
    "publishedAgo": "published 1 year ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v0.7.1.",
    "githubReleaseTitle": "v0.7.1",
    "githubReleaseUrl": "https://github.com/joe-bell/cva/releases/tag/v0.7.1",
    "githubReleaseTag": "v0.7.1",
    "githubReleasePublishedAt": "2024-11-26T08:20:39Z",
    "releaseNotesExcerpt": "What's Changed Add LICENSE Comments by @joe-bell in https://github.com/joe-bell/cva/pull/283 chore: move clsx dependency to caret/semver range by @philwolstenholme in https://github.com/joe-bell/cva/pull/316 New Contributors @philwolstenholme made their first contribution in http",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/class-variance-authority/0.7.1",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/class-variance-authority"
      },
      {
        "label": "Repository",
        "href": "https://github.com/joe-bell/cva"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/joe-bell/cva/releases/tag/v0.7.1"
      }
    ]
  },
  {
    "id": "clsx-2-1-1",
    "packageName": "clsx",
    "packageSlug": "clsx",
    "description": "Class name utility",
    "oldVersion": "2.1.0",
    "newVersion": "2.1.1",
    "releaseDate": "2024-04-23",
    "publishedAgo": "published 2 years ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v2.1.1.",
    "githubReleaseTitle": "v2.1.1",
    "githubReleaseUrl": "https://github.com/lukeed/clsx/releases/tag/v2.1.1",
    "githubReleaseTag": "v2.1.1",
    "githubReleasePublishedAt": "2024-04-23T05:29:52Z",
    "releaseNotesExcerpt": "Patches (types) Include bigint in ClassValue type: (#96): 3d960ab _Accommodates recent @types/react changes to ReactNode._ _Thank you @ViliamKopecky~!_ Chores Add licenses.dev badge: 684509c _This service recursively analyzes entire dependency graphs to ensure that a package (or ",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/clsx/2.1.1",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/clsx"
      },
      {
        "label": "Repository",
        "href": "https://github.com/lukeed/clsx"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/lukeed/clsx/releases/tag/v2.1.1"
      }
    ]
  },
  {
    "id": "classnames-2-5-1",
    "packageName": "classnames",
    "packageSlug": "classnames",
    "description": "Class name utility",
    "oldVersion": "2.5.0",
    "newVersion": "2.5.1",
    "releaseDate": "2023-12-29",
    "publishedAgo": "published 2 years ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "Patch classnames 2.5.1 release detected with no OSV match.",
    "githubReleaseTitle": "",
    "githubReleaseUrl": "",
    "githubReleaseTag": "",
    "githubReleasePublishedAt": "",
    "releaseNotesExcerpt": "",
    "releaseNotesStatus": "No GitHub releases found for this repository.",
    "route": "/package/classnames/2.5.1",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/classnames"
      },
      {
        "label": "Repository",
        "href": "https://github.com/JedWatson/classnames"
      }
    ]
  },
  {
    "id": "redux-5-0-1",
    "packageName": "redux",
    "packageSlug": "redux",
    "description": "State container",
    "oldVersion": "5.0.0",
    "newVersion": "5.0.1",
    "releaseDate": "2023-12-23",
    "publishedAgo": "published 2 years ago",
    "risk": "low",
    "category": "Low impact",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v5.0.1.",
    "githubReleaseTitle": "v5.0.1",
    "githubReleaseUrl": "https://github.com/reduxjs/redux/releases/tag/v5.0.1",
    "githubReleaseTag": "v5.0.1",
    "githubReleasePublishedAt": "2023-12-23T16:54:41Z",
    "releaseNotesExcerpt": "This **patch release** adjusts the isPlainObject util to allow objects created via Object.create(null), and fixes a type issue which accidentally made the store state type non-nullable. What's Changed fix(isPlainObject): support check Object.create(null) by @zhe-he in https://git",
    "releaseNotesStatus": "Matched GitHub release by npm version tag.",
    "route": "/package/redux/5.0.1",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/redux"
      },
      {
        "label": "Repository",
        "href": "https://github.com/reduxjs/redux"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/reduxjs/redux/releases/tag/v5.0.1"
      }
    ]
  }
];
export const packageRoutes = {
  "react": {
    "packageName": "react",
    "description": "UI library",
    "route": "/package/react",
    "latestReleaseRoute": "/package/react/19.2.7",
    "areaSlug": "core-frameworks",
    "areaLabel": "Frameworks and Core UI"
  },
  "react-dom": {
    "packageName": "react-dom",
    "description": "React DOM rendering",
    "route": "/package/react-dom",
    "latestReleaseRoute": "/package/react-dom/19.2.7",
    "areaSlug": "core-frameworks",
    "areaLabel": "Frameworks and Core UI"
  },
  "next": {
    "packageName": "next",
    "description": "React framework",
    "route": "/package/next",
    "latestReleaseRoute": "/package/next/16.2.9",
    "areaSlug": "core-frameworks",
    "areaLabel": "Frameworks and Core UI"
  },
  "vue": {
    "packageName": "vue",
    "description": "Progressive JavaScript framework",
    "route": "/package/vue",
    "latestReleaseRoute": "/package/vue/3.5.38",
    "areaSlug": "core-frameworks",
    "areaLabel": "Frameworks and Core UI"
  },
  "svelte": {
    "packageName": "svelte",
    "description": "Compiler-based UI framework",
    "route": "/package/svelte",
    "latestReleaseRoute": "/package/svelte/5.56.3",
    "areaSlug": "core-frameworks",
    "areaLabel": "Frameworks and Core UI"
  },
  "angular-core": {
    "packageName": "@angular/core",
    "description": "Angular framework core",
    "route": "/package/angular-core",
    "latestReleaseRoute": "/package/angular-core/22.0.1",
    "areaSlug": "core-frameworks",
    "areaLabel": "Frameworks and Core UI"
  },
  "solid-js": {
    "packageName": "solid-js",
    "description": "Reactive UI library",
    "route": "/package/solid-js",
    "latestReleaseRoute": "/package/solid-js/1.9.13",
    "areaSlug": "core-frameworks",
    "areaLabel": "Frameworks and Core UI"
  },
  "astro": {
    "packageName": "astro",
    "description": "Content-focused web framework",
    "route": "/package/astro",
    "latestReleaseRoute": "/package/astro/6.4.7",
    "areaSlug": "core-frameworks",
    "areaLabel": "Frameworks and Core UI"
  },
  "nuxt": {
    "packageName": "nuxt",
    "description": "Vue application framework",
    "route": "/package/nuxt",
    "latestReleaseRoute": "/package/nuxt/4.4.8",
    "areaSlug": "core-frameworks",
    "areaLabel": "Frameworks and Core UI"
  },
  "gatsby": {
    "packageName": "gatsby",
    "description": "React site framework",
    "route": "/package/gatsby",
    "latestReleaseRoute": "/package/gatsby/5.16.1",
    "areaSlug": "core-frameworks",
    "areaLabel": "Frameworks and Core UI"
  },
  "remix-run-react": {
    "packageName": "@remix-run/react",
    "description": "Remix React runtime",
    "route": "/package/remix-run-react",
    "latestReleaseRoute": "/package/remix-run-react/2.17.5",
    "areaSlug": "core-frameworks",
    "areaLabel": "Frameworks and Core UI"
  },
  "vite": {
    "packageName": "vite",
    "description": "Frontend build tooling",
    "route": "/package/vite",
    "latestReleaseRoute": "/package/vite/8.0.16",
    "areaSlug": "build-tooling",
    "areaLabel": "Build Tooling"
  },
  "webpack": {
    "packageName": "webpack",
    "description": "JavaScript bundler",
    "route": "/package/webpack",
    "latestReleaseRoute": "/package/webpack/5.107.2",
    "areaSlug": "build-tooling",
    "areaLabel": "Build Tooling"
  },
  "rollup": {
    "packageName": "rollup",
    "description": "Module bundler",
    "route": "/package/rollup",
    "latestReleaseRoute": "/package/rollup/4.62.0",
    "areaSlug": "build-tooling",
    "areaLabel": "Build Tooling"
  },
  "esbuild": {
    "packageName": "esbuild",
    "description": "JavaScript bundler",
    "route": "/package/esbuild",
    "latestReleaseRoute": "/package/esbuild/0.28.1",
    "areaSlug": "build-tooling",
    "areaLabel": "Build Tooling"
  },
  "turbo": {
    "packageName": "turbo",
    "description": "Monorepo build system",
    "route": "/package/turbo",
    "latestReleaseRoute": "/package/turbo/2.9.18",
    "areaSlug": "build-tooling",
    "areaLabel": "Build Tooling"
  },
  "parcel": {
    "packageName": "parcel",
    "description": "Zero-configuration web bundler",
    "route": "/package/parcel",
    "latestReleaseRoute": "/package/parcel/2.16.4",
    "areaSlug": "build-tooling",
    "areaLabel": "Build Tooling"
  },
  "tsup": {
    "packageName": "tsup",
    "description": "TypeScript library bundler",
    "route": "/package/tsup",
    "latestReleaseRoute": "/package/tsup/8.5.1",
    "areaSlug": "build-tooling",
    "areaLabel": "Build Tooling"
  },
  "vitejs-plugin-react": {
    "packageName": "@vitejs/plugin-react",
    "description": "Vite React plugin",
    "route": "/package/vitejs-plugin-react",
    "latestReleaseRoute": "/package/vitejs-plugin-react/6.0.2",
    "areaSlug": "build-tooling",
    "areaLabel": "Build Tooling"
  },
  "babel-core": {
    "packageName": "@babel/core",
    "description": "JavaScript compiler core",
    "route": "/package/babel-core",
    "latestReleaseRoute": "/package/babel-core/7.29.7",
    "areaSlug": "build-tooling",
    "areaLabel": "Build Tooling"
  },
  "babel-preset-env": {
    "packageName": "@babel/preset-env",
    "description": "Babel environment preset",
    "route": "/package/babel-preset-env",
    "latestReleaseRoute": "/package/babel-preset-env/7.29.7",
    "areaSlug": "build-tooling",
    "areaLabel": "Build Tooling"
  },
  "babel-preset-react": {
    "packageName": "@babel/preset-react",
    "description": "Babel React preset",
    "route": "/package/babel-preset-react",
    "latestReleaseRoute": "/package/babel-preset-react/7.29.7",
    "areaSlug": "build-tooling",
    "areaLabel": "Build Tooling"
  },
  "swc-core": {
    "packageName": "@swc/core",
    "description": "JavaScript and TypeScript compiler",
    "route": "/package/swc-core",
    "latestReleaseRoute": "/package/swc-core/1.15.41",
    "areaSlug": "build-tooling",
    "areaLabel": "Build Tooling"
  },
  "typescript": {
    "packageName": "typescript",
    "description": "Typed JavaScript compiler",
    "route": "/package/typescript",
    "latestReleaseRoute": "/package/typescript/6.0.3",
    "areaSlug": "typescript-quality",
    "areaLabel": "TypeScript and Code Quality"
  },
  "eslint": {
    "packageName": "eslint",
    "description": "JavaScript linting",
    "route": "/package/eslint",
    "latestReleaseRoute": "/package/eslint/10.5.0",
    "areaSlug": "typescript-quality",
    "areaLabel": "TypeScript and Code Quality"
  },
  "prettier": {
    "packageName": "prettier",
    "description": "Code formatter",
    "route": "/package/prettier",
    "latestReleaseRoute": "/package/prettier/3.8.4",
    "areaSlug": "typescript-quality",
    "areaLabel": "TypeScript and Code Quality"
  },
  "typescript-eslint-parser": {
    "packageName": "@typescript-eslint/parser",
    "description": "TypeScript parser for ESLint",
    "route": "/package/typescript-eslint-parser",
    "latestReleaseRoute": "/package/typescript-eslint-parser/8.61.0",
    "areaSlug": "typescript-quality",
    "areaLabel": "TypeScript and Code Quality"
  },
  "typescript-eslint-eslint-plugin": {
    "packageName": "@typescript-eslint/eslint-plugin",
    "description": "TypeScript ESLint rules",
    "route": "/package/typescript-eslint-eslint-plugin",
    "latestReleaseRoute": "/package/typescript-eslint-eslint-plugin/8.61.0",
    "areaSlug": "typescript-quality",
    "areaLabel": "TypeScript and Code Quality"
  },
  "types-react": {
    "packageName": "@types/react",
    "description": "React TypeScript definitions",
    "route": "/package/types-react",
    "latestReleaseRoute": "/package/types-react/19.2.17",
    "areaSlug": "typescript-quality",
    "areaLabel": "TypeScript and Code Quality"
  },
  "types-react-dom": {
    "packageName": "@types/react-dom",
    "description": "React DOM TypeScript definitions",
    "route": "/package/types-react-dom",
    "latestReleaseRoute": "/package/types-react-dom/19.2.3",
    "areaSlug": "typescript-quality",
    "areaLabel": "TypeScript and Code Quality"
  },
  "react-router-dom": {
    "packageName": "react-router-dom",
    "description": "Declarative routing for React",
    "route": "/package/react-router-dom",
    "latestReleaseRoute": "/package/react-router-dom/7.17.0",
    "areaSlug": "routing-state-data",
    "areaLabel": "Routing, State, and Data"
  },
  "tanstack-react-query": {
    "packageName": "@tanstack/react-query",
    "description": "Data fetching for React",
    "route": "/package/tanstack-react-query",
    "latestReleaseRoute": "/package/tanstack-react-query/5.101.0",
    "areaSlug": "routing-state-data",
    "areaLabel": "Routing, State, and Data"
  },
  "zustand": {
    "packageName": "zustand",
    "description": "React state management",
    "route": "/package/zustand",
    "latestReleaseRoute": "/package/zustand/5.0.14",
    "areaSlug": "routing-state-data",
    "areaLabel": "Routing, State, and Data"
  },
  "redux": {
    "packageName": "redux",
    "description": "State container",
    "route": "/package/redux",
    "latestReleaseRoute": "/package/redux/5.0.1",
    "areaSlug": "routing-state-data",
    "areaLabel": "Routing, State, and Data"
  },
  "reduxjs-toolkit": {
    "packageName": "@reduxjs/toolkit",
    "description": "Redux application toolkit",
    "route": "/package/reduxjs-toolkit",
    "latestReleaseRoute": "/package/reduxjs-toolkit/2.12.0",
    "areaSlug": "routing-state-data",
    "areaLabel": "Routing, State, and Data"
  },
  "swr": {
    "packageName": "swr",
    "description": "React data fetching",
    "route": "/package/swr",
    "latestReleaseRoute": "/package/swr/2.4.1",
    "areaSlug": "routing-state-data",
    "areaLabel": "Routing, State, and Data"
  },
  "axios": {
    "packageName": "axios",
    "description": "HTTP client",
    "route": "/package/axios",
    "latestReleaseRoute": "/package/axios/1.18.0",
    "areaSlug": "routing-state-data",
    "areaLabel": "Routing, State, and Data"
  },
  "ky": {
    "packageName": "ky",
    "description": "Fetch client",
    "route": "/package/ky",
    "latestReleaseRoute": "/package/ky/2.0.2",
    "areaSlug": "routing-state-data",
    "areaLabel": "Routing, State, and Data"
  },
  "apollo-client": {
    "packageName": "@apollo/client",
    "description": "GraphQL client",
    "route": "/package/apollo-client",
    "latestReleaseRoute": "/package/apollo-client/4.2.3",
    "areaSlug": "routing-state-data",
    "areaLabel": "Routing, State, and Data"
  },
  "graphql": {
    "packageName": "graphql",
    "description": "GraphQL JavaScript implementation",
    "route": "/package/graphql",
    "latestReleaseRoute": "/package/graphql/17.0.0",
    "areaSlug": "routing-state-data",
    "areaLabel": "Routing, State, and Data"
  },
  "immer": {
    "packageName": "immer",
    "description": "Immutable state updates",
    "route": "/package/immer",
    "latestReleaseRoute": "/package/immer/11.1.8",
    "areaSlug": "routing-state-data",
    "areaLabel": "Routing, State, and Data"
  },
  "react-hook-form": {
    "packageName": "react-hook-form",
    "description": "React form state",
    "route": "/package/react-hook-form",
    "latestReleaseRoute": "/package/react-hook-form/7.79.0",
    "areaSlug": "forms-validation",
    "areaLabel": "Forms and Validation"
  },
  "zod": {
    "packageName": "zod",
    "description": "Schema validation",
    "route": "/package/zod",
    "latestReleaseRoute": "/package/zod/4.4.3",
    "areaSlug": "forms-validation",
    "areaLabel": "Forms and Validation"
  },
  "yup": {
    "packageName": "yup",
    "description": "Object schema validation",
    "route": "/package/yup",
    "latestReleaseRoute": "/package/yup/1.7.1",
    "areaSlug": "forms-validation",
    "areaLabel": "Forms and Validation"
  },
  "formik": {
    "packageName": "formik",
    "description": "React form state",
    "route": "/package/formik",
    "latestReleaseRoute": "/package/formik/2.4.9",
    "areaSlug": "forms-validation",
    "areaLabel": "Forms and Validation"
  },
  "vitest": {
    "packageName": "vitest",
    "description": "Vite-native testing",
    "route": "/package/vitest",
    "latestReleaseRoute": "/package/vitest/4.1.9",
    "areaSlug": "testing-storybook",
    "areaLabel": "Testing and Storybook"
  },
  "jest": {
    "packageName": "jest",
    "description": "JavaScript testing",
    "route": "/package/jest",
    "latestReleaseRoute": "/package/jest/30.4.2",
    "areaSlug": "testing-storybook",
    "areaLabel": "Testing and Storybook"
  },
  "cypress": {
    "packageName": "cypress",
    "description": "Browser testing",
    "route": "/package/cypress",
    "latestReleaseRoute": "/package/cypress/15.17.0",
    "areaSlug": "testing-storybook",
    "areaLabel": "Testing and Storybook"
  },
  "playwright": {
    "packageName": "playwright",
    "description": "Browser automation",
    "route": "/package/playwright",
    "latestReleaseRoute": "/package/playwright/1.61.0",
    "areaSlug": "testing-storybook",
    "areaLabel": "Testing and Storybook"
  },
  "storybook-react": {
    "packageName": "@storybook/react",
    "description": "React component workshop",
    "route": "/package/storybook-react",
    "latestReleaseRoute": "/package/storybook-react/10.4.5",
    "areaSlug": "testing-storybook",
    "areaLabel": "Testing and Storybook"
  },
  "storybook": {
    "packageName": "storybook",
    "description": "Component documentation",
    "route": "/package/storybook",
    "latestReleaseRoute": "/package/storybook/10.4.5",
    "areaSlug": "testing-storybook",
    "areaLabel": "Testing and Storybook"
  },
  "testing-library-react": {
    "packageName": "@testing-library/react",
    "description": "React component testing",
    "route": "/package/testing-library-react",
    "latestReleaseRoute": "/package/testing-library-react/16.3.2",
    "areaSlug": "testing-storybook",
    "areaLabel": "Testing and Storybook"
  },
  "testing-library-jest-dom": {
    "packageName": "@testing-library/jest-dom",
    "description": "DOM testing matchers",
    "route": "/package/testing-library-jest-dom",
    "latestReleaseRoute": "/package/testing-library-jest-dom/6.9.1",
    "areaSlug": "testing-storybook",
    "areaLabel": "Testing and Storybook"
  },
  "msw": {
    "packageName": "msw",
    "description": "API mocking library",
    "route": "/package/msw",
    "latestReleaseRoute": "/package/msw/2.14.6",
    "areaSlug": "testing-storybook",
    "areaLabel": "Testing and Storybook"
  },
  "happy-dom": {
    "packageName": "happy-dom",
    "description": "Browser environment for testing",
    "route": "/package/happy-dom",
    "latestReleaseRoute": "/package/happy-dom/20.10.3",
    "areaSlug": "testing-storybook",
    "areaLabel": "Testing and Storybook"
  },
  "tailwindcss": {
    "packageName": "tailwindcss",
    "description": "Utility-first CSS",
    "route": "/package/tailwindcss",
    "latestReleaseRoute": "/package/tailwindcss/4.3.1",
    "areaSlug": "css-ui",
    "areaLabel": "CSS and UI Libraries"
  },
  "postcss": {
    "packageName": "postcss",
    "description": "CSS transformation",
    "route": "/package/postcss",
    "latestReleaseRoute": "/package/postcss/8.5.15",
    "areaSlug": "css-ui",
    "areaLabel": "CSS and UI Libraries"
  },
  "autoprefixer": {
    "packageName": "autoprefixer",
    "description": "CSS vendor prefixing",
    "route": "/package/autoprefixer",
    "latestReleaseRoute": "/package/autoprefixer/10.5.0",
    "areaSlug": "css-ui",
    "areaLabel": "CSS and UI Libraries"
  },
  "sass": {
    "packageName": "sass",
    "description": "CSS preprocessor",
    "route": "/package/sass",
    "latestReleaseRoute": "/package/sass/1.101.0",
    "areaSlug": "css-ui",
    "areaLabel": "CSS and UI Libraries"
  },
  "less": {
    "packageName": "less",
    "description": "CSS preprocessor",
    "route": "/package/less",
    "latestReleaseRoute": "/package/less/4.6.6",
    "areaSlug": "css-ui",
    "areaLabel": "CSS and UI Libraries"
  },
  "styled-components": {
    "packageName": "styled-components",
    "description": "CSS-in-JS styling",
    "route": "/package/styled-components",
    "latestReleaseRoute": "/package/styled-components/6.4.2",
    "areaSlug": "css-ui",
    "areaLabel": "CSS and UI Libraries"
  },
  "emotion-react": {
    "packageName": "@emotion/react",
    "description": "CSS-in-JS styling",
    "route": "/package/emotion-react",
    "latestReleaseRoute": "/package/emotion-react/11.14.0",
    "areaSlug": "css-ui",
    "areaLabel": "CSS and UI Libraries"
  },
  "framer-motion": {
    "packageName": "framer-motion",
    "description": "React motion library",
    "route": "/package/framer-motion",
    "latestReleaseRoute": "/package/framer-motion/12.40.0",
    "areaSlug": "css-ui",
    "areaLabel": "CSS and UI Libraries"
  },
  "radix-ui-react-dialog": {
    "packageName": "@radix-ui/react-dialog",
    "description": "Accessible dialog primitive",
    "route": "/package/radix-ui-react-dialog",
    "latestReleaseRoute": "/package/radix-ui-react-dialog/1.1.16",
    "areaSlug": "css-ui",
    "areaLabel": "CSS and UI Libraries"
  },
  "radix-ui-react-popover": {
    "packageName": "@radix-ui/react-popover",
    "description": "Accessible popover primitive",
    "route": "/package/radix-ui-react-popover",
    "latestReleaseRoute": "/package/radix-ui-react-popover/1.1.16",
    "areaSlug": "css-ui",
    "areaLabel": "CSS and UI Libraries"
  },
  "tailwind-merge": {
    "packageName": "tailwind-merge",
    "description": "Tailwind class merging",
    "route": "/package/tailwind-merge",
    "latestReleaseRoute": "/package/tailwind-merge/3.6.0",
    "areaSlug": "css-ui",
    "areaLabel": "CSS and UI Libraries"
  },
  "class-variance-authority": {
    "packageName": "class-variance-authority",
    "description": "Variant class composition",
    "route": "/package/class-variance-authority",
    "latestReleaseRoute": "/package/class-variance-authority/0.7.1",
    "areaSlug": "css-ui",
    "areaLabel": "CSS and UI Libraries"
  },
  "clsx": {
    "packageName": "clsx",
    "description": "Class name utility",
    "route": "/package/clsx",
    "latestReleaseRoute": "/package/clsx/2.1.1",
    "areaSlug": "css-ui",
    "areaLabel": "CSS and UI Libraries"
  },
  "classnames": {
    "packageName": "classnames",
    "description": "Class name utility",
    "route": "/package/classnames",
    "latestReleaseRoute": "/package/classnames/2.5.1",
    "areaSlug": "css-ui",
    "areaLabel": "CSS and UI Libraries"
  },
  "lucide-react": {
    "packageName": "lucide-react",
    "description": "React icon library",
    "route": "/package/lucide-react",
    "latestReleaseRoute": "/package/lucide-react/1.18.0",
    "areaSlug": "css-ui",
    "areaLabel": "CSS and UI Libraries"
  },
  "mui-material": {
    "packageName": "@mui/material",
    "description": "React component library",
    "route": "/package/mui-material",
    "latestReleaseRoute": "/package/mui-material/9.1.1",
    "areaSlug": "css-ui",
    "areaLabel": "CSS and UI Libraries"
  },
  "chakra-ui-react": {
    "packageName": "@chakra-ui/react",
    "description": "Accessible React component library",
    "route": "/package/chakra-ui-react",
    "latestReleaseRoute": "/package/chakra-ui-react/3.36.0",
    "areaSlug": "css-ui",
    "areaLabel": "CSS and UI Libraries"
  },
  "lodash": {
    "packageName": "lodash",
    "description": "Utility library",
    "route": "/package/lodash",
    "latestReleaseRoute": "/package/lodash/4.18.1",
    "areaSlug": "utilities-runtime",
    "areaLabel": "JavaScript Utilities and Runtime"
  },
  "date-fns": {
    "packageName": "date-fns",
    "description": "Date utilities",
    "route": "/package/date-fns",
    "latestReleaseRoute": "/package/date-fns/4.4.0",
    "areaSlug": "utilities-runtime",
    "areaLabel": "JavaScript Utilities and Runtime"
  },
  "dayjs": {
    "packageName": "dayjs",
    "description": "Date utilities",
    "route": "/package/dayjs",
    "latestReleaseRoute": "/package/dayjs/1.11.21",
    "areaSlug": "utilities-runtime",
    "areaLabel": "JavaScript Utilities and Runtime"
  },
  "minimist": {
    "packageName": "minimist",
    "description": "CLI argument parsing",
    "route": "/package/minimist",
    "latestReleaseRoute": "/package/minimist/1.2.8",
    "areaSlug": "utilities-runtime",
    "areaLabel": "JavaScript Utilities and Runtime"
  },
  "ws": {
    "packageName": "ws",
    "description": "WebSocket implementation",
    "route": "/package/ws",
    "latestReleaseRoute": "/package/ws/8.21.0",
    "areaSlug": "utilities-runtime",
    "areaLabel": "JavaScript Utilities and Runtime"
  },
  "semver": {
    "packageName": "semver",
    "description": "Semantic version parsing",
    "route": "/package/semver",
    "latestReleaseRoute": "/package/semver/7.8.4",
    "areaSlug": "utilities-runtime",
    "areaLabel": "JavaScript Utilities and Runtime"
  },
  "npm-run-all": {
    "packageName": "npm-run-all",
    "description": "Script runner",
    "route": "/package/npm-run-all",
    "latestReleaseRoute": "/package/npm-run-all/4.1.5",
    "areaSlug": "utilities-runtime",
    "areaLabel": "JavaScript Utilities and Runtime"
  },
  "pnpm": {
    "packageName": "pnpm",
    "description": "Package manager",
    "route": "/package/pnpm",
    "latestReleaseRoute": "/package/pnpm/11.7.0",
    "areaSlug": "utilities-runtime",
    "areaLabel": "JavaScript Utilities and Runtime"
  },
  "uuid": {
    "packageName": "uuid",
    "description": "UUID generator",
    "route": "/package/uuid",
    "latestReleaseRoute": "/package/uuid/14.0.0",
    "areaSlug": "utilities-runtime",
    "areaLabel": "JavaScript Utilities and Runtime"
  },
  "nanoid": {
    "packageName": "nanoid",
    "description": "Compact unique ID generator",
    "route": "/package/nanoid",
    "latestReleaseRoute": "/package/nanoid/5.1.11",
    "areaSlug": "utilities-runtime",
    "areaLabel": "JavaScript Utilities and Runtime"
  }
};
export const categoryRoutes = {
  "core-frameworks": {
    "slug": "core-frameworks",
    "label": "Frameworks and Core UI",
    "description": "Frontend frameworks and core UI runtimes used to build React, Vue, Svelte, Angular, Astro, Nuxt, Gatsby, Remix, and Solid applications.",
    "route": "/category/core-frameworks",
    "packageCount": 11,
    "packages": [
      {
        "packageName": "@angular/core",
        "description": "Angular framework core",
        "route": "/package/angular-core",
        "latestReleaseRoute": "/package/angular-core/22.0.1",
        "areaSlug": "core-frameworks",
        "areaLabel": "Frameworks and Core UI"
      },
      {
        "packageName": "@remix-run/react",
        "description": "Remix React runtime",
        "route": "/package/remix-run-react",
        "latestReleaseRoute": "/package/remix-run-react/2.17.5",
        "areaSlug": "core-frameworks",
        "areaLabel": "Frameworks and Core UI"
      },
      {
        "packageName": "astro",
        "description": "Content-focused web framework",
        "route": "/package/astro",
        "latestReleaseRoute": "/package/astro/6.4.7",
        "areaSlug": "core-frameworks",
        "areaLabel": "Frameworks and Core UI"
      },
      {
        "packageName": "gatsby",
        "description": "React site framework",
        "route": "/package/gatsby",
        "latestReleaseRoute": "/package/gatsby/5.16.1",
        "areaSlug": "core-frameworks",
        "areaLabel": "Frameworks and Core UI"
      },
      {
        "packageName": "next",
        "description": "React framework",
        "route": "/package/next",
        "latestReleaseRoute": "/package/next/16.2.9",
        "areaSlug": "core-frameworks",
        "areaLabel": "Frameworks and Core UI"
      },
      {
        "packageName": "nuxt",
        "description": "Vue application framework",
        "route": "/package/nuxt",
        "latestReleaseRoute": "/package/nuxt/4.4.8",
        "areaSlug": "core-frameworks",
        "areaLabel": "Frameworks and Core UI"
      },
      {
        "packageName": "react",
        "description": "UI library",
        "route": "/package/react",
        "latestReleaseRoute": "/package/react/19.2.7",
        "areaSlug": "core-frameworks",
        "areaLabel": "Frameworks and Core UI"
      },
      {
        "packageName": "react-dom",
        "description": "React DOM rendering",
        "route": "/package/react-dom",
        "latestReleaseRoute": "/package/react-dom/19.2.7",
        "areaSlug": "core-frameworks",
        "areaLabel": "Frameworks and Core UI"
      },
      {
        "packageName": "solid-js",
        "description": "Reactive UI library",
        "route": "/package/solid-js",
        "latestReleaseRoute": "/package/solid-js/1.9.13",
        "areaSlug": "core-frameworks",
        "areaLabel": "Frameworks and Core UI"
      },
      {
        "packageName": "svelte",
        "description": "Compiler-based UI framework",
        "route": "/package/svelte",
        "latestReleaseRoute": "/package/svelte/5.56.3",
        "areaSlug": "core-frameworks",
        "areaLabel": "Frameworks and Core UI"
      },
      {
        "packageName": "vue",
        "description": "Progressive JavaScript framework",
        "route": "/package/vue",
        "latestReleaseRoute": "/package/vue/3.5.38",
        "areaSlug": "core-frameworks",
        "areaLabel": "Frameworks and Core UI"
      }
    ]
  },
  "build-tooling": {
    "slug": "build-tooling",
    "label": "Build Tooling",
    "description": "Bundlers, compilers, Vite plugins, and monorepo tools that affect frontend builds, dependency graphs, and release pipelines.",
    "route": "/category/build-tooling",
    "packageCount": 12,
    "packages": [
      {
        "packageName": "@babel/core",
        "description": "JavaScript compiler core",
        "route": "/package/babel-core",
        "latestReleaseRoute": "/package/babel-core/7.29.7",
        "areaSlug": "build-tooling",
        "areaLabel": "Build Tooling"
      },
      {
        "packageName": "@babel/preset-env",
        "description": "Babel environment preset",
        "route": "/package/babel-preset-env",
        "latestReleaseRoute": "/package/babel-preset-env/7.29.7",
        "areaSlug": "build-tooling",
        "areaLabel": "Build Tooling"
      },
      {
        "packageName": "@babel/preset-react",
        "description": "Babel React preset",
        "route": "/package/babel-preset-react",
        "latestReleaseRoute": "/package/babel-preset-react/7.29.7",
        "areaSlug": "build-tooling",
        "areaLabel": "Build Tooling"
      },
      {
        "packageName": "@swc/core",
        "description": "JavaScript and TypeScript compiler",
        "route": "/package/swc-core",
        "latestReleaseRoute": "/package/swc-core/1.15.41",
        "areaSlug": "build-tooling",
        "areaLabel": "Build Tooling"
      },
      {
        "packageName": "@vitejs/plugin-react",
        "description": "Vite React plugin",
        "route": "/package/vitejs-plugin-react",
        "latestReleaseRoute": "/package/vitejs-plugin-react/6.0.2",
        "areaSlug": "build-tooling",
        "areaLabel": "Build Tooling"
      },
      {
        "packageName": "esbuild",
        "description": "JavaScript bundler",
        "route": "/package/esbuild",
        "latestReleaseRoute": "/package/esbuild/0.28.1",
        "areaSlug": "build-tooling",
        "areaLabel": "Build Tooling"
      },
      {
        "packageName": "parcel",
        "description": "Zero-configuration web bundler",
        "route": "/package/parcel",
        "latestReleaseRoute": "/package/parcel/2.16.4",
        "areaSlug": "build-tooling",
        "areaLabel": "Build Tooling"
      },
      {
        "packageName": "rollup",
        "description": "Module bundler",
        "route": "/package/rollup",
        "latestReleaseRoute": "/package/rollup/4.62.0",
        "areaSlug": "build-tooling",
        "areaLabel": "Build Tooling"
      },
      {
        "packageName": "tsup",
        "description": "TypeScript library bundler",
        "route": "/package/tsup",
        "latestReleaseRoute": "/package/tsup/8.5.1",
        "areaSlug": "build-tooling",
        "areaLabel": "Build Tooling"
      },
      {
        "packageName": "turbo",
        "description": "Monorepo build system",
        "route": "/package/turbo",
        "latestReleaseRoute": "/package/turbo/2.9.18",
        "areaSlug": "build-tooling",
        "areaLabel": "Build Tooling"
      },
      {
        "packageName": "vite",
        "description": "Frontend build tooling",
        "route": "/package/vite",
        "latestReleaseRoute": "/package/vite/8.0.16",
        "areaSlug": "build-tooling",
        "areaLabel": "Build Tooling"
      },
      {
        "packageName": "webpack",
        "description": "JavaScript bundler",
        "route": "/package/webpack",
        "latestReleaseRoute": "/package/webpack/5.107.2",
        "areaSlug": "build-tooling",
        "areaLabel": "Build Tooling"
      }
    ]
  },
  "typescript-quality": {
    "slug": "typescript-quality",
    "label": "TypeScript and Code Quality",
    "description": "TypeScript, ESLint, Prettier, and type-definition packages that shape frontend build checks and code-quality workflows.",
    "route": "/category/typescript-quality",
    "packageCount": 7,
    "packages": [
      {
        "packageName": "@types/react",
        "description": "React TypeScript definitions",
        "route": "/package/types-react",
        "latestReleaseRoute": "/package/types-react/19.2.17",
        "areaSlug": "typescript-quality",
        "areaLabel": "TypeScript and Code Quality"
      },
      {
        "packageName": "@types/react-dom",
        "description": "React DOM TypeScript definitions",
        "route": "/package/types-react-dom",
        "latestReleaseRoute": "/package/types-react-dom/19.2.3",
        "areaSlug": "typescript-quality",
        "areaLabel": "TypeScript and Code Quality"
      },
      {
        "packageName": "@typescript-eslint/eslint-plugin",
        "description": "TypeScript ESLint rules",
        "route": "/package/typescript-eslint-eslint-plugin",
        "latestReleaseRoute": "/package/typescript-eslint-eslint-plugin/8.61.0",
        "areaSlug": "typescript-quality",
        "areaLabel": "TypeScript and Code Quality"
      },
      {
        "packageName": "@typescript-eslint/parser",
        "description": "TypeScript parser for ESLint",
        "route": "/package/typescript-eslint-parser",
        "latestReleaseRoute": "/package/typescript-eslint-parser/8.61.0",
        "areaSlug": "typescript-quality",
        "areaLabel": "TypeScript and Code Quality"
      },
      {
        "packageName": "eslint",
        "description": "JavaScript linting",
        "route": "/package/eslint",
        "latestReleaseRoute": "/package/eslint/10.5.0",
        "areaSlug": "typescript-quality",
        "areaLabel": "TypeScript and Code Quality"
      },
      {
        "packageName": "prettier",
        "description": "Code formatter",
        "route": "/package/prettier",
        "latestReleaseRoute": "/package/prettier/3.8.4",
        "areaSlug": "typescript-quality",
        "areaLabel": "TypeScript and Code Quality"
      },
      {
        "packageName": "typescript",
        "description": "Typed JavaScript compiler",
        "route": "/package/typescript",
        "latestReleaseRoute": "/package/typescript/6.0.3",
        "areaSlug": "typescript-quality",
        "areaLabel": "TypeScript and Code Quality"
      }
    ]
  },
  "routing-state-data": {
    "slug": "routing-state-data",
    "label": "Routing, State, and Data",
    "description": "Routing, state management, GraphQL, and HTTP client packages used in production JavaScript and React applications.",
    "route": "/category/routing-state-data",
    "packageCount": 11,
    "packages": [
      {
        "packageName": "@apollo/client",
        "description": "GraphQL client",
        "route": "/package/apollo-client",
        "latestReleaseRoute": "/package/apollo-client/4.2.3",
        "areaSlug": "routing-state-data",
        "areaLabel": "Routing, State, and Data"
      },
      {
        "packageName": "@reduxjs/toolkit",
        "description": "Redux application toolkit",
        "route": "/package/reduxjs-toolkit",
        "latestReleaseRoute": "/package/reduxjs-toolkit/2.12.0",
        "areaSlug": "routing-state-data",
        "areaLabel": "Routing, State, and Data"
      },
      {
        "packageName": "@tanstack/react-query",
        "description": "Data fetching for React",
        "route": "/package/tanstack-react-query",
        "latestReleaseRoute": "/package/tanstack-react-query/5.101.0",
        "areaSlug": "routing-state-data",
        "areaLabel": "Routing, State, and Data"
      },
      {
        "packageName": "axios",
        "description": "HTTP client",
        "route": "/package/axios",
        "latestReleaseRoute": "/package/axios/1.18.0",
        "areaSlug": "routing-state-data",
        "areaLabel": "Routing, State, and Data"
      },
      {
        "packageName": "graphql",
        "description": "GraphQL JavaScript implementation",
        "route": "/package/graphql",
        "latestReleaseRoute": "/package/graphql/17.0.0",
        "areaSlug": "routing-state-data",
        "areaLabel": "Routing, State, and Data"
      },
      {
        "packageName": "immer",
        "description": "Immutable state updates",
        "route": "/package/immer",
        "latestReleaseRoute": "/package/immer/11.1.8",
        "areaSlug": "routing-state-data",
        "areaLabel": "Routing, State, and Data"
      },
      {
        "packageName": "ky",
        "description": "Fetch client",
        "route": "/package/ky",
        "latestReleaseRoute": "/package/ky/2.0.2",
        "areaSlug": "routing-state-data",
        "areaLabel": "Routing, State, and Data"
      },
      {
        "packageName": "react-router-dom",
        "description": "Declarative routing for React",
        "route": "/package/react-router-dom",
        "latestReleaseRoute": "/package/react-router-dom/7.17.0",
        "areaSlug": "routing-state-data",
        "areaLabel": "Routing, State, and Data"
      },
      {
        "packageName": "redux",
        "description": "State container",
        "route": "/package/redux",
        "latestReleaseRoute": "/package/redux/5.0.1",
        "areaSlug": "routing-state-data",
        "areaLabel": "Routing, State, and Data"
      },
      {
        "packageName": "swr",
        "description": "React data fetching",
        "route": "/package/swr",
        "latestReleaseRoute": "/package/swr/2.4.1",
        "areaSlug": "routing-state-data",
        "areaLabel": "Routing, State, and Data"
      },
      {
        "packageName": "zustand",
        "description": "React state management",
        "route": "/package/zustand",
        "latestReleaseRoute": "/package/zustand/5.0.14",
        "areaSlug": "routing-state-data",
        "areaLabel": "Routing, State, and Data"
      }
    ]
  },
  "forms-validation": {
    "slug": "forms-validation",
    "label": "Forms and Validation",
    "description": "Form state and schema validation packages used to process user input in frontend applications.",
    "route": "/category/forms-validation",
    "packageCount": 4,
    "packages": [
      {
        "packageName": "formik",
        "description": "React form state",
        "route": "/package/formik",
        "latestReleaseRoute": "/package/formik/2.4.9",
        "areaSlug": "forms-validation",
        "areaLabel": "Forms and Validation"
      },
      {
        "packageName": "react-hook-form",
        "description": "React form state",
        "route": "/package/react-hook-form",
        "latestReleaseRoute": "/package/react-hook-form/7.79.0",
        "areaSlug": "forms-validation",
        "areaLabel": "Forms and Validation"
      },
      {
        "packageName": "yup",
        "description": "Object schema validation",
        "route": "/package/yup",
        "latestReleaseRoute": "/package/yup/1.7.1",
        "areaSlug": "forms-validation",
        "areaLabel": "Forms and Validation"
      },
      {
        "packageName": "zod",
        "description": "Schema validation",
        "route": "/package/zod",
        "latestReleaseRoute": "/package/zod/4.4.3",
        "areaSlug": "forms-validation",
        "areaLabel": "Forms and Validation"
      }
    ]
  },
  "testing-storybook": {
    "slug": "testing-storybook",
    "label": "Testing and Storybook",
    "description": "Test runners, browser automation, component testing, API mocking, and Storybook packages used before frontend releases ship.",
    "route": "/category/testing-storybook",
    "packageCount": 10,
    "packages": [
      {
        "packageName": "@storybook/react",
        "description": "React component workshop",
        "route": "/package/storybook-react",
        "latestReleaseRoute": "/package/storybook-react/10.4.5",
        "areaSlug": "testing-storybook",
        "areaLabel": "Testing and Storybook"
      },
      {
        "packageName": "@testing-library/jest-dom",
        "description": "DOM testing matchers",
        "route": "/package/testing-library-jest-dom",
        "latestReleaseRoute": "/package/testing-library-jest-dom/6.9.1",
        "areaSlug": "testing-storybook",
        "areaLabel": "Testing and Storybook"
      },
      {
        "packageName": "@testing-library/react",
        "description": "React component testing",
        "route": "/package/testing-library-react",
        "latestReleaseRoute": "/package/testing-library-react/16.3.2",
        "areaSlug": "testing-storybook",
        "areaLabel": "Testing and Storybook"
      },
      {
        "packageName": "cypress",
        "description": "Browser testing",
        "route": "/package/cypress",
        "latestReleaseRoute": "/package/cypress/15.17.0",
        "areaSlug": "testing-storybook",
        "areaLabel": "Testing and Storybook"
      },
      {
        "packageName": "happy-dom",
        "description": "Browser environment for testing",
        "route": "/package/happy-dom",
        "latestReleaseRoute": "/package/happy-dom/20.10.3",
        "areaSlug": "testing-storybook",
        "areaLabel": "Testing and Storybook"
      },
      {
        "packageName": "jest",
        "description": "JavaScript testing",
        "route": "/package/jest",
        "latestReleaseRoute": "/package/jest/30.4.2",
        "areaSlug": "testing-storybook",
        "areaLabel": "Testing and Storybook"
      },
      {
        "packageName": "msw",
        "description": "API mocking library",
        "route": "/package/msw",
        "latestReleaseRoute": "/package/msw/2.14.6",
        "areaSlug": "testing-storybook",
        "areaLabel": "Testing and Storybook"
      },
      {
        "packageName": "playwright",
        "description": "Browser automation",
        "route": "/package/playwright",
        "latestReleaseRoute": "/package/playwright/1.61.0",
        "areaSlug": "testing-storybook",
        "areaLabel": "Testing and Storybook"
      },
      {
        "packageName": "storybook",
        "description": "Component documentation",
        "route": "/package/storybook",
        "latestReleaseRoute": "/package/storybook/10.4.5",
        "areaSlug": "testing-storybook",
        "areaLabel": "Testing and Storybook"
      },
      {
        "packageName": "vitest",
        "description": "Vite-native testing",
        "route": "/package/vitest",
        "latestReleaseRoute": "/package/vitest/4.1.9",
        "areaSlug": "testing-storybook",
        "areaLabel": "Testing and Storybook"
      }
    ]
  },
  "css-ui": {
    "slug": "css-ui",
    "label": "CSS and UI Libraries",
    "description": "CSS tooling, component libraries, accessible primitives, animation packages, and class utilities used in frontend interfaces.",
    "route": "/category/css-ui",
    "packageCount": 17,
    "packages": [
      {
        "packageName": "@chakra-ui/react",
        "description": "Accessible React component library",
        "route": "/package/chakra-ui-react",
        "latestReleaseRoute": "/package/chakra-ui-react/3.36.0",
        "areaSlug": "css-ui",
        "areaLabel": "CSS and UI Libraries"
      },
      {
        "packageName": "@emotion/react",
        "description": "CSS-in-JS styling",
        "route": "/package/emotion-react",
        "latestReleaseRoute": "/package/emotion-react/11.14.0",
        "areaSlug": "css-ui",
        "areaLabel": "CSS and UI Libraries"
      },
      {
        "packageName": "@mui/material",
        "description": "React component library",
        "route": "/package/mui-material",
        "latestReleaseRoute": "/package/mui-material/9.1.1",
        "areaSlug": "css-ui",
        "areaLabel": "CSS and UI Libraries"
      },
      {
        "packageName": "@radix-ui/react-dialog",
        "description": "Accessible dialog primitive",
        "route": "/package/radix-ui-react-dialog",
        "latestReleaseRoute": "/package/radix-ui-react-dialog/1.1.16",
        "areaSlug": "css-ui",
        "areaLabel": "CSS and UI Libraries"
      },
      {
        "packageName": "@radix-ui/react-popover",
        "description": "Accessible popover primitive",
        "route": "/package/radix-ui-react-popover",
        "latestReleaseRoute": "/package/radix-ui-react-popover/1.1.16",
        "areaSlug": "css-ui",
        "areaLabel": "CSS and UI Libraries"
      },
      {
        "packageName": "autoprefixer",
        "description": "CSS vendor prefixing",
        "route": "/package/autoprefixer",
        "latestReleaseRoute": "/package/autoprefixer/10.5.0",
        "areaSlug": "css-ui",
        "areaLabel": "CSS and UI Libraries"
      },
      {
        "packageName": "class-variance-authority",
        "description": "Variant class composition",
        "route": "/package/class-variance-authority",
        "latestReleaseRoute": "/package/class-variance-authority/0.7.1",
        "areaSlug": "css-ui",
        "areaLabel": "CSS and UI Libraries"
      },
      {
        "packageName": "classnames",
        "description": "Class name utility",
        "route": "/package/classnames",
        "latestReleaseRoute": "/package/classnames/2.5.1",
        "areaSlug": "css-ui",
        "areaLabel": "CSS and UI Libraries"
      },
      {
        "packageName": "clsx",
        "description": "Class name utility",
        "route": "/package/clsx",
        "latestReleaseRoute": "/package/clsx/2.1.1",
        "areaSlug": "css-ui",
        "areaLabel": "CSS and UI Libraries"
      },
      {
        "packageName": "framer-motion",
        "description": "React motion library",
        "route": "/package/framer-motion",
        "latestReleaseRoute": "/package/framer-motion/12.40.0",
        "areaSlug": "css-ui",
        "areaLabel": "CSS and UI Libraries"
      },
      {
        "packageName": "less",
        "description": "CSS preprocessor",
        "route": "/package/less",
        "latestReleaseRoute": "/package/less/4.6.6",
        "areaSlug": "css-ui",
        "areaLabel": "CSS and UI Libraries"
      },
      {
        "packageName": "lucide-react",
        "description": "React icon library",
        "route": "/package/lucide-react",
        "latestReleaseRoute": "/package/lucide-react/1.18.0",
        "areaSlug": "css-ui",
        "areaLabel": "CSS and UI Libraries"
      },
      {
        "packageName": "postcss",
        "description": "CSS transformation",
        "route": "/package/postcss",
        "latestReleaseRoute": "/package/postcss/8.5.15",
        "areaSlug": "css-ui",
        "areaLabel": "CSS and UI Libraries"
      },
      {
        "packageName": "sass",
        "description": "CSS preprocessor",
        "route": "/package/sass",
        "latestReleaseRoute": "/package/sass/1.101.0",
        "areaSlug": "css-ui",
        "areaLabel": "CSS and UI Libraries"
      },
      {
        "packageName": "styled-components",
        "description": "CSS-in-JS styling",
        "route": "/package/styled-components",
        "latestReleaseRoute": "/package/styled-components/6.4.2",
        "areaSlug": "css-ui",
        "areaLabel": "CSS and UI Libraries"
      },
      {
        "packageName": "tailwind-merge",
        "description": "Tailwind class merging",
        "route": "/package/tailwind-merge",
        "latestReleaseRoute": "/package/tailwind-merge/3.6.0",
        "areaSlug": "css-ui",
        "areaLabel": "CSS and UI Libraries"
      },
      {
        "packageName": "tailwindcss",
        "description": "Utility-first CSS",
        "route": "/package/tailwindcss",
        "latestReleaseRoute": "/package/tailwindcss/4.3.1",
        "areaSlug": "css-ui",
        "areaLabel": "CSS and UI Libraries"
      }
    ]
  },
  "utilities-runtime": {
    "slug": "utilities-runtime",
    "label": "JavaScript Utilities and Runtime",
    "description": "Common JavaScript utilities and runtime packages that can appear directly or transitively in frontend dependency graphs.",
    "route": "/category/utilities-runtime",
    "packageCount": 10,
    "packages": [
      {
        "packageName": "date-fns",
        "description": "Date utilities",
        "route": "/package/date-fns",
        "latestReleaseRoute": "/package/date-fns/4.4.0",
        "areaSlug": "utilities-runtime",
        "areaLabel": "JavaScript Utilities and Runtime"
      },
      {
        "packageName": "dayjs",
        "description": "Date utilities",
        "route": "/package/dayjs",
        "latestReleaseRoute": "/package/dayjs/1.11.21",
        "areaSlug": "utilities-runtime",
        "areaLabel": "JavaScript Utilities and Runtime"
      },
      {
        "packageName": "lodash",
        "description": "Utility library",
        "route": "/package/lodash",
        "latestReleaseRoute": "/package/lodash/4.18.1",
        "areaSlug": "utilities-runtime",
        "areaLabel": "JavaScript Utilities and Runtime"
      },
      {
        "packageName": "minimist",
        "description": "CLI argument parsing",
        "route": "/package/minimist",
        "latestReleaseRoute": "/package/minimist/1.2.8",
        "areaSlug": "utilities-runtime",
        "areaLabel": "JavaScript Utilities and Runtime"
      },
      {
        "packageName": "nanoid",
        "description": "Compact unique ID generator",
        "route": "/package/nanoid",
        "latestReleaseRoute": "/package/nanoid/5.1.11",
        "areaSlug": "utilities-runtime",
        "areaLabel": "JavaScript Utilities and Runtime"
      },
      {
        "packageName": "npm-run-all",
        "description": "Script runner",
        "route": "/package/npm-run-all",
        "latestReleaseRoute": "/package/npm-run-all/4.1.5",
        "areaSlug": "utilities-runtime",
        "areaLabel": "JavaScript Utilities and Runtime"
      },
      {
        "packageName": "pnpm",
        "description": "Package manager",
        "route": "/package/pnpm",
        "latestReleaseRoute": "/package/pnpm/11.7.0",
        "areaSlug": "utilities-runtime",
        "areaLabel": "JavaScript Utilities and Runtime"
      },
      {
        "packageName": "semver",
        "description": "Semantic version parsing",
        "route": "/package/semver",
        "latestReleaseRoute": "/package/semver/7.8.4",
        "areaSlug": "utilities-runtime",
        "areaLabel": "JavaScript Utilities and Runtime"
      },
      {
        "packageName": "uuid",
        "description": "UUID generator",
        "route": "/package/uuid",
        "latestReleaseRoute": "/package/uuid/14.0.0",
        "areaSlug": "utilities-runtime",
        "areaLabel": "JavaScript Utilities and Runtime"
      },
      {
        "packageName": "ws",
        "description": "WebSocket implementation",
        "route": "/package/ws",
        "latestReleaseRoute": "/package/ws/8.21.0",
        "areaSlug": "utilities-runtime",
        "areaLabel": "JavaScript Utilities and Runtime"
      }
    ]
  }
};
export const seoRoutes: Record<string, SeoRoute> = {
  "/weekly": {
    "path": "/weekly",
    "title": "Week 25, 2026 Frontend Dependency Risk Digest",
    "description": "Week 25, 2026 frontend npm dependency-risk digest: 40 risky updates, 15 breaking changes, 5 security-relevant releases, OSV/CVE checks, release notes, and recommended actions from 82 tracked React, JavaScript, and frontend packages."
  },
  "/risk/security": {
    "path": "/risk/security",
    "title": "Frontend npm Security Updates and OSV Signals",
    "description": "Security-relevant frontend npm package releases with OSV vulnerability checks, CVE references, GitHub release-note security signals, affected audience, and recommended update actions for JavaScript teams."
  },
  "/risk/breaking": {
    "path": "/risk/breaking",
    "title": "Breaking Frontend npm Package Releases",
    "description": "Breaking frontend npm updates and major package releases for React, Vite, Next.js, TypeScript, Storybook, build tooling, test tooling, and JavaScript dependency maintenance."
  },
  "/risk/review": {
    "path": "/risk/review",
    "title": "Frontend npm Updates To Review",
    "description": "Frontend npm dependency updates to review, including minor releases, release notes, OSV checks, affected audience, and recommended maintenance actions for JavaScript production apps."
  },
  "/methodology": {
    "path": "/methodology",
    "title": "Dependency Risk Methodology for Frontend npm Updates",
    "description": "Explains how Dependency Risk Digest evaluates frontend npm risk with release metadata, OSV/CVE signals, changelog language, affected audience, and recommended actions for React, Vite, Next.js, TypeScript, Storybook, and JavaScript teams."
  },
  "/packages": {
    "path": "/packages",
    "title": "Frontend npm Package Risk Directory",
    "description": "Browse 82 tracked frontend npm package archives across frameworks, build tools, TypeScript, testing, CSS, UI libraries, routing, state management, data fetching, forms, validation, and JavaScript utilities."
  },
  "/weekly/2026-w25": {
    "path": "/weekly/2026-w25",
    "title": "Week 25, 2026 frontend dependency risk archive",
    "description": "Jun 15 - Jun 21 archive for frontend npm dependency risk: 40 risky updates, 15 breaking changes, 5 security-relevant releases, OSV/CVE checks, release notes, and recommended actions from 82 tracked packages."
  },
  "/weekly/2026-w24": {
    "path": "/weekly/2026-w24",
    "title": "Week 24, 2026 frontend dependency risk archive",
    "description": "Jun 8 - Jun 14 archive for frontend npm dependency risk: 40 risky updates, 15 breaking changes, 6 security-relevant releases, OSV/CVE checks, release notes, and recommended actions from 82 tracked packages."
  },
  "/weekly/2026-w23": {
    "path": "/weekly/2026-w23",
    "title": "Week 23, 2026 frontend dependency risk archive",
    "description": "Jun 1 - Jun 7 archive for frontend npm dependency risk: 37 risky updates, 15 breaking changes, 4 security-relevant releases, OSV/CVE checks, release notes, and recommended actions from 82 tracked packages."
  },
  "/package/react": {
    "path": "/package/react",
    "title": "react dependency risk archive",
    "description": "react npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. UI library"
  },
  "/package/react-dom": {
    "path": "/package/react-dom",
    "title": "react-dom dependency risk archive",
    "description": "react-dom npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. React DOM rendering"
  },
  "/package/next": {
    "path": "/package/next",
    "title": "next dependency risk archive",
    "description": "next npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. React framework"
  },
  "/package/vue": {
    "path": "/package/vue",
    "title": "vue dependency risk archive",
    "description": "vue npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Progressive JavaScript framework"
  },
  "/package/svelte": {
    "path": "/package/svelte",
    "title": "svelte dependency risk archive",
    "description": "svelte npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Compiler-based UI framework"
  },
  "/package/angular-core": {
    "path": "/package/angular-core",
    "title": "@angular/core dependency risk archive",
    "description": "@angular/core npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Angular framework core"
  },
  "/package/solid-js": {
    "path": "/package/solid-js",
    "title": "solid-js dependency risk archive",
    "description": "solid-js npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Reactive UI library"
  },
  "/package/astro": {
    "path": "/package/astro",
    "title": "astro dependency risk archive",
    "description": "astro npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Content-focused web framework"
  },
  "/package/nuxt": {
    "path": "/package/nuxt",
    "title": "nuxt dependency risk archive",
    "description": "nuxt npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Vue application framework"
  },
  "/package/gatsby": {
    "path": "/package/gatsby",
    "title": "gatsby dependency risk archive",
    "description": "gatsby npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. React site framework"
  },
  "/package/remix-run-react": {
    "path": "/package/remix-run-react",
    "title": "@remix-run/react dependency risk archive",
    "description": "@remix-run/react npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Remix React runtime"
  },
  "/package/vite": {
    "path": "/package/vite",
    "title": "vite dependency risk archive",
    "description": "vite npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Frontend build tooling"
  },
  "/package/webpack": {
    "path": "/package/webpack",
    "title": "webpack dependency risk archive",
    "description": "webpack npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. JavaScript bundler"
  },
  "/package/rollup": {
    "path": "/package/rollup",
    "title": "rollup dependency risk archive",
    "description": "rollup npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Module bundler"
  },
  "/package/esbuild": {
    "path": "/package/esbuild",
    "title": "esbuild dependency risk archive",
    "description": "esbuild npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. JavaScript bundler"
  },
  "/package/turbo": {
    "path": "/package/turbo",
    "title": "turbo dependency risk archive",
    "description": "turbo npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Monorepo build system"
  },
  "/package/parcel": {
    "path": "/package/parcel",
    "title": "parcel dependency risk archive",
    "description": "parcel npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Zero-configuration web bundler"
  },
  "/package/tsup": {
    "path": "/package/tsup",
    "title": "tsup dependency risk archive",
    "description": "tsup npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. TypeScript library bundler"
  },
  "/package/vitejs-plugin-react": {
    "path": "/package/vitejs-plugin-react",
    "title": "@vitejs/plugin-react dependency risk archive",
    "description": "@vitejs/plugin-react npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Vite React plugin"
  },
  "/package/babel-core": {
    "path": "/package/babel-core",
    "title": "@babel/core dependency risk archive",
    "description": "@babel/core npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. JavaScript compiler core"
  },
  "/package/babel-preset-env": {
    "path": "/package/babel-preset-env",
    "title": "@babel/preset-env dependency risk archive",
    "description": "@babel/preset-env npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Babel environment preset"
  },
  "/package/babel-preset-react": {
    "path": "/package/babel-preset-react",
    "title": "@babel/preset-react dependency risk archive",
    "description": "@babel/preset-react npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Babel React preset"
  },
  "/package/swc-core": {
    "path": "/package/swc-core",
    "title": "@swc/core dependency risk archive",
    "description": "@swc/core npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. JavaScript and TypeScript compiler"
  },
  "/package/typescript": {
    "path": "/package/typescript",
    "title": "typescript dependency risk archive",
    "description": "typescript npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Typed JavaScript compiler"
  },
  "/package/eslint": {
    "path": "/package/eslint",
    "title": "eslint dependency risk archive",
    "description": "eslint npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. JavaScript linting"
  },
  "/package/prettier": {
    "path": "/package/prettier",
    "title": "prettier dependency risk archive",
    "description": "prettier npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Code formatter"
  },
  "/package/typescript-eslint-parser": {
    "path": "/package/typescript-eslint-parser",
    "title": "@typescript-eslint/parser dependency risk archive",
    "description": "@typescript-eslint/parser npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. TypeScript parser for ESLint"
  },
  "/package/typescript-eslint-eslint-plugin": {
    "path": "/package/typescript-eslint-eslint-plugin",
    "title": "@typescript-eslint/eslint-plugin dependency risk archive",
    "description": "@typescript-eslint/eslint-plugin npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. TypeScript ESLint rules"
  },
  "/package/types-react": {
    "path": "/package/types-react",
    "title": "@types/react dependency risk archive",
    "description": "@types/react npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. React TypeScript definitions"
  },
  "/package/types-react-dom": {
    "path": "/package/types-react-dom",
    "title": "@types/react-dom dependency risk archive",
    "description": "@types/react-dom npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. React DOM TypeScript definitions"
  },
  "/package/react-router-dom": {
    "path": "/package/react-router-dom",
    "title": "react-router-dom dependency risk archive",
    "description": "react-router-dom npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Declarative routing for React"
  },
  "/package/tanstack-react-query": {
    "path": "/package/tanstack-react-query",
    "title": "@tanstack/react-query dependency risk archive",
    "description": "@tanstack/react-query npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Data fetching for React"
  },
  "/package/zustand": {
    "path": "/package/zustand",
    "title": "zustand dependency risk archive",
    "description": "zustand npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. React state management"
  },
  "/package/redux": {
    "path": "/package/redux",
    "title": "redux dependency risk archive",
    "description": "redux npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. State container"
  },
  "/package/reduxjs-toolkit": {
    "path": "/package/reduxjs-toolkit",
    "title": "@reduxjs/toolkit dependency risk archive",
    "description": "@reduxjs/toolkit npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Redux application toolkit"
  },
  "/package/swr": {
    "path": "/package/swr",
    "title": "swr dependency risk archive",
    "description": "swr npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. React data fetching"
  },
  "/package/axios": {
    "path": "/package/axios",
    "title": "axios dependency risk archive",
    "description": "axios npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. HTTP client"
  },
  "/package/ky": {
    "path": "/package/ky",
    "title": "ky dependency risk archive",
    "description": "ky npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Fetch client"
  },
  "/package/apollo-client": {
    "path": "/package/apollo-client",
    "title": "@apollo/client dependency risk archive",
    "description": "@apollo/client npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. GraphQL client"
  },
  "/package/graphql": {
    "path": "/package/graphql",
    "title": "graphql dependency risk archive",
    "description": "graphql npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. GraphQL JavaScript implementation"
  },
  "/package/immer": {
    "path": "/package/immer",
    "title": "immer dependency risk archive",
    "description": "immer npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Immutable state updates"
  },
  "/package/react-hook-form": {
    "path": "/package/react-hook-form",
    "title": "react-hook-form dependency risk archive",
    "description": "react-hook-form npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. React form state"
  },
  "/package/zod": {
    "path": "/package/zod",
    "title": "zod dependency risk archive",
    "description": "zod npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Schema validation"
  },
  "/package/yup": {
    "path": "/package/yup",
    "title": "yup dependency risk archive",
    "description": "yup npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Object schema validation"
  },
  "/package/formik": {
    "path": "/package/formik",
    "title": "formik dependency risk archive",
    "description": "formik npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. React form state"
  },
  "/package/vitest": {
    "path": "/package/vitest",
    "title": "vitest dependency risk archive",
    "description": "vitest npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Vite-native testing"
  },
  "/package/jest": {
    "path": "/package/jest",
    "title": "jest dependency risk archive",
    "description": "jest npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. JavaScript testing"
  },
  "/package/cypress": {
    "path": "/package/cypress",
    "title": "cypress dependency risk archive",
    "description": "cypress npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Browser testing"
  },
  "/package/playwright": {
    "path": "/package/playwright",
    "title": "playwright dependency risk archive",
    "description": "playwright npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Browser automation"
  },
  "/package/storybook-react": {
    "path": "/package/storybook-react",
    "title": "@storybook/react dependency risk archive",
    "description": "@storybook/react npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. React component workshop"
  },
  "/package/storybook": {
    "path": "/package/storybook",
    "title": "storybook dependency risk archive",
    "description": "storybook npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Component documentation"
  },
  "/package/testing-library-react": {
    "path": "/package/testing-library-react",
    "title": "@testing-library/react dependency risk archive",
    "description": "@testing-library/react npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. React component testing"
  },
  "/package/testing-library-jest-dom": {
    "path": "/package/testing-library-jest-dom",
    "title": "@testing-library/jest-dom dependency risk archive",
    "description": "@testing-library/jest-dom npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. DOM testing matchers"
  },
  "/package/msw": {
    "path": "/package/msw",
    "title": "msw dependency risk archive",
    "description": "msw npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. API mocking library"
  },
  "/package/happy-dom": {
    "path": "/package/happy-dom",
    "title": "happy-dom dependency risk archive",
    "description": "happy-dom npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Browser environment for testing"
  },
  "/package/tailwindcss": {
    "path": "/package/tailwindcss",
    "title": "tailwindcss dependency risk archive",
    "description": "tailwindcss npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Utility-first CSS"
  },
  "/package/postcss": {
    "path": "/package/postcss",
    "title": "postcss dependency risk archive",
    "description": "postcss npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. CSS transformation"
  },
  "/package/autoprefixer": {
    "path": "/package/autoprefixer",
    "title": "autoprefixer dependency risk archive",
    "description": "autoprefixer npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. CSS vendor prefixing"
  },
  "/package/sass": {
    "path": "/package/sass",
    "title": "sass dependency risk archive",
    "description": "sass npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. CSS preprocessor"
  },
  "/package/less": {
    "path": "/package/less",
    "title": "less dependency risk archive",
    "description": "less npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. CSS preprocessor"
  },
  "/package/styled-components": {
    "path": "/package/styled-components",
    "title": "styled-components dependency risk archive",
    "description": "styled-components npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. CSS-in-JS styling"
  },
  "/package/emotion-react": {
    "path": "/package/emotion-react",
    "title": "@emotion/react dependency risk archive",
    "description": "@emotion/react npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. CSS-in-JS styling"
  },
  "/package/framer-motion": {
    "path": "/package/framer-motion",
    "title": "framer-motion dependency risk archive",
    "description": "framer-motion npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. React motion library"
  },
  "/package/radix-ui-react-dialog": {
    "path": "/package/radix-ui-react-dialog",
    "title": "@radix-ui/react-dialog dependency risk archive",
    "description": "@radix-ui/react-dialog npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Accessible dialog primitive"
  },
  "/package/radix-ui-react-popover": {
    "path": "/package/radix-ui-react-popover",
    "title": "@radix-ui/react-popover dependency risk archive",
    "description": "@radix-ui/react-popover npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Accessible popover primitive"
  },
  "/package/tailwind-merge": {
    "path": "/package/tailwind-merge",
    "title": "tailwind-merge dependency risk archive",
    "description": "tailwind-merge npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Tailwind class merging"
  },
  "/package/class-variance-authority": {
    "path": "/package/class-variance-authority",
    "title": "class-variance-authority dependency risk archive",
    "description": "class-variance-authority npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Variant class composition"
  },
  "/package/clsx": {
    "path": "/package/clsx",
    "title": "clsx dependency risk archive",
    "description": "clsx npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Class name utility"
  },
  "/package/classnames": {
    "path": "/package/classnames",
    "title": "classnames dependency risk archive",
    "description": "classnames npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Class name utility"
  },
  "/package/lucide-react": {
    "path": "/package/lucide-react",
    "title": "lucide-react dependency risk archive",
    "description": "lucide-react npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. React icon library"
  },
  "/package/mui-material": {
    "path": "/package/mui-material",
    "title": "@mui/material dependency risk archive",
    "description": "@mui/material npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. React component library"
  },
  "/package/chakra-ui-react": {
    "path": "/package/chakra-ui-react",
    "title": "@chakra-ui/react dependency risk archive",
    "description": "@chakra-ui/react npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Accessible React component library"
  },
  "/package/lodash": {
    "path": "/package/lodash",
    "title": "lodash dependency risk archive",
    "description": "lodash npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Utility library"
  },
  "/package/date-fns": {
    "path": "/package/date-fns",
    "title": "date-fns dependency risk archive",
    "description": "date-fns npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Date utilities"
  },
  "/package/dayjs": {
    "path": "/package/dayjs",
    "title": "dayjs dependency risk archive",
    "description": "dayjs npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Date utilities"
  },
  "/package/minimist": {
    "path": "/package/minimist",
    "title": "minimist dependency risk archive",
    "description": "minimist npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. CLI argument parsing"
  },
  "/package/ws": {
    "path": "/package/ws",
    "title": "ws dependency risk archive",
    "description": "ws npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. WebSocket implementation"
  },
  "/package/semver": {
    "path": "/package/semver",
    "title": "semver dependency risk archive",
    "description": "semver npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Semantic version parsing"
  },
  "/package/npm-run-all": {
    "path": "/package/npm-run-all",
    "title": "npm-run-all dependency risk archive",
    "description": "npm-run-all npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Script runner"
  },
  "/package/pnpm": {
    "path": "/package/pnpm",
    "title": "pnpm dependency risk archive",
    "description": "pnpm npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Package manager"
  },
  "/package/uuid": {
    "path": "/package/uuid",
    "title": "uuid dependency risk archive",
    "description": "uuid npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. UUID generator"
  },
  "/package/nanoid": {
    "path": "/package/nanoid",
    "title": "nanoid dependency risk archive",
    "description": "nanoid npm dependency-risk archive for frontend teams tracking package releases, OSV and CVE signals, breaking changes, release notes, affected audience, and recommended update actions. Compact unique ID generator"
  },
  "/category/core-frameworks": {
    "path": "/category/core-frameworks",
    "title": "Frameworks and Core UI npm dependency risk",
    "description": "Frameworks and Core UI frontend npm dependency-risk directory with 11 tracked package archives, current release-risk pages, OSV and CVE signals, breaking-change checks, release notes, and recommended update actions. Frontend frameworks and core UI runtimes used to build React, Vue, Svelte, Angular, Astro, Nuxt, Gatsby, Remix, and Solid applications."
  },
  "/category/build-tooling": {
    "path": "/category/build-tooling",
    "title": "Build Tooling npm dependency risk",
    "description": "Build Tooling frontend npm dependency-risk directory with 12 tracked package archives, current release-risk pages, OSV and CVE signals, breaking-change checks, release notes, and recommended update actions. Bundlers, compilers, Vite plugins, and monorepo tools that affect frontend builds, dependency graphs, and release pipelines."
  },
  "/category/typescript-quality": {
    "path": "/category/typescript-quality",
    "title": "TypeScript and Code Quality npm dependency risk",
    "description": "TypeScript and Code Quality frontend npm dependency-risk directory with 7 tracked package archives, current release-risk pages, OSV and CVE signals, breaking-change checks, release notes, and recommended update actions. TypeScript, ESLint, Prettier, and type-definition packages that shape frontend build checks and code-quality workflows."
  },
  "/category/routing-state-data": {
    "path": "/category/routing-state-data",
    "title": "Routing, State, and Data npm dependency risk",
    "description": "Routing, State, and Data frontend npm dependency-risk directory with 11 tracked package archives, current release-risk pages, OSV and CVE signals, breaking-change checks, release notes, and recommended update actions. Routing, state management, GraphQL, and HTTP client packages used in production JavaScript and React applications."
  },
  "/category/forms-validation": {
    "path": "/category/forms-validation",
    "title": "Forms and Validation npm dependency risk",
    "description": "Forms and Validation frontend npm dependency-risk directory with 4 tracked package archives, current release-risk pages, OSV and CVE signals, breaking-change checks, release notes, and recommended update actions. Form state and schema validation packages used to process user input in frontend applications."
  },
  "/category/testing-storybook": {
    "path": "/category/testing-storybook",
    "title": "Testing and Storybook npm dependency risk",
    "description": "Testing and Storybook frontend npm dependency-risk directory with 10 tracked package archives, current release-risk pages, OSV and CVE signals, breaking-change checks, release notes, and recommended update actions. Test runners, browser automation, component testing, API mocking, and Storybook packages used before frontend releases ship."
  },
  "/category/css-ui": {
    "path": "/category/css-ui",
    "title": "CSS and UI Libraries npm dependency risk",
    "description": "CSS and UI Libraries frontend npm dependency-risk directory with 17 tracked package archives, current release-risk pages, OSV and CVE signals, breaking-change checks, release notes, and recommended update actions. CSS tooling, component libraries, accessible primitives, animation packages, and class utilities used in frontend interfaces."
  },
  "/category/utilities-runtime": {
    "path": "/category/utilities-runtime",
    "title": "JavaScript Utilities and Runtime npm dependency risk",
    "description": "JavaScript Utilities and Runtime frontend npm dependency-risk directory with 10 tracked package archives, current release-risk pages, OSV and CVE signals, breaking-change checks, release notes, and recommended update actions. Common JavaScript utilities and runtime packages that can appear directly or transitively in frontend dependency graphs."
  },
  "/package/axios/1.18.0": {
    "path": "/package/axios/1.18.0",
    "title": "axios 1.18.0 security update",
    "description": "axios 1.18.0 frontend npm update: GitHub release notes mention security or vulnerability fixes. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Update recommended. Review the GitHub release notes and prioritize this package in the security lane."
  },
  "/package/esbuild/0.28.1": {
    "path": "/package/esbuild/0.28.1",
    "title": "esbuild 0.28.1 security update",
    "description": "esbuild 0.28.1 frontend npm update: GitHub release notes mention security or vulnerability fixes. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Update recommended. Review the GitHub release notes and prioritize this package in the security lane."
  },
  "/package/angular-core/22.0.1": {
    "path": "/package/angular-core/22.0.1",
    "title": "@angular/core 22.0.1 security update",
    "description": "@angular/core 22.0.1 frontend npm update: GitHub release notes mention security or vulnerability fixes. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Update recommended. Review the GitHub release notes and prioritize this package in the security lane."
  },
  "/package/ws/8.21.0": {
    "path": "/package/ws/8.21.0",
    "title": "ws 8.21.0 security update",
    "description": "ws 8.21.0 frontend npm update: GitHub release notes mention security or vulnerability fixes. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Update recommended. Review the GitHub release notes and prioritize this package in the security lane."
  },
  "/package/npm-run-all/4.1.5": {
    "path": "/package/npm-run-all/4.1.5",
    "title": "npm-run-all 4.1.5 security update",
    "description": "npm-run-all 4.1.5 frontend npm update: GitHub release notes mention security or vulnerability fixes. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Update recommended. Review the GitHub release notes and prioritize this package in the security lane."
  },
  "/package/graphql/17.0.0": {
    "path": "/package/graphql/17.0.0",
    "title": "graphql 17.0.0 breaking update",
    "description": "graphql 17.0.0 frontend npm update: Major version release detected. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Review changes before updating. Test in staging before merging. GitHub release notes were found for review."
  },
  "/package/vitest/4.1.9": {
    "path": "/package/vitest/4.1.9",
    "title": "vitest 4.1.9 breaking update",
    "description": "vitest 4.1.9 frontend npm update: Major version release detected. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Review changes before updating. Test in staging before merging. GitHub release notes were found for review."
  },
  "/package/storybook-react/10.4.5": {
    "path": "/package/storybook-react/10.4.5",
    "title": "@storybook/react 10.4.5 breaking update",
    "description": "@storybook/react 10.4.5 frontend npm update: Major version release detected. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Review changes before updating. Test in staging before merging. GitHub release notes were found for review."
  },
  "/package/storybook/10.4.5": {
    "path": "/package/storybook/10.4.5",
    "title": "storybook 10.4.5 breaking update",
    "description": "storybook 10.4.5 frontend npm update: Major version release detected. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Review changes before updating. Test in staging before merging. GitHub release notes were found for review."
  },
  "/package/tailwindcss/4.3.1": {
    "path": "/package/tailwindcss/4.3.1",
    "title": "tailwindcss 4.3.1 breaking update",
    "description": "tailwindcss 4.3.1 frontend npm update: Major version release detected. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Review changes before updating. Test in staging before merging. GitHub release notes were found for review."
  },
  "/package/chakra-ui-react/3.36.0": {
    "path": "/package/chakra-ui-react/3.36.0",
    "title": "@chakra-ui/react 3.36.0 breaking update",
    "description": "@chakra-ui/react 3.36.0 frontend npm update: Major version release detected. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Review changes before updating. Test in staging before merging. GitHub release notes were found for review."
  },
  "/package/types-react/19.2.17": {
    "path": "/package/types-react/19.2.17",
    "title": "@types/react 19.2.17 breaking update",
    "description": "@types/react 19.2.17 frontend npm update: Major version release detected. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Review changes before updating. Test in staging before merging."
  },
  "/package/react-router-dom/7.17.0": {
    "path": "/package/react-router-dom/7.17.0",
    "title": "react-router-dom 7.17.0 breaking update",
    "description": "react-router-dom 7.17.0 frontend npm update: Major version release detected. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Review changes before updating. Test in staging before merging. GitHub release notes were found for review."
  },
  "/package/babel-preset-env/7.29.7": {
    "path": "/package/babel-preset-env/7.29.7",
    "title": "@babel/preset-env 7.29.7 breaking update",
    "description": "@babel/preset-env 7.29.7 frontend npm update: Major version release detected. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Review changes before updating. Test in staging before merging. GitHub release notes were found for review."
  },
  "/package/babel-preset-react/7.29.7": {
    "path": "/package/babel-preset-react/7.29.7",
    "title": "@babel/preset-react 7.29.7 breaking update",
    "description": "@babel/preset-react 7.29.7 frontend npm update: Major version release detected. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Review changes before updating. Test in staging before merging. GitHub release notes were found for review."
  },
  "/package/styled-components/6.4.2": {
    "path": "/package/styled-components/6.4.2",
    "title": "styled-components 6.4.2 breaking update",
    "description": "styled-components 6.4.2 frontend npm update: Major version release detected. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Review changes before updating. Test in staging before merging. GitHub release notes were found for review."
  },
  "/package/solid-js/1.9.13": {
    "path": "/package/solid-js/1.9.13",
    "title": "solid-js 1.9.13 breaking update",
    "description": "solid-js 1.9.13 frontend npm update: Major version release detected. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Review changes before updating. Test in staging before merging. GitHub release notes were found for review."
  },
  "/package/nanoid/5.1.11": {
    "path": "/package/nanoid/5.1.11",
    "title": "nanoid 5.1.11 breaking update",
    "description": "nanoid 5.1.11 frontend npm update: Major version release detected. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Review changes before updating. Test in staging before merging. GitHub release notes were found for review."
  },
  "/package/uuid/14.0.0": {
    "path": "/package/uuid/14.0.0",
    "title": "uuid 14.0.0 breaking update",
    "description": "uuid 14.0.0 frontend npm update: Major version release detected. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Review changes before updating. Test in staging before merging. GitHub release notes were found for review."
  },
  "/package/minimist/1.2.8": {
    "path": "/package/minimist/1.2.8",
    "title": "minimist 1.2.8 breaking update",
    "description": "minimist 1.2.8 frontend npm update: Major version release detected. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Review changes before updating. Test in staging before merging."
  },
  "/package/pnpm/11.7.0": {
    "path": "/package/pnpm/11.7.0",
    "title": "pnpm 11.7.0 review update",
    "description": "pnpm 11.7.0 frontend npm update: Minor version release detected with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review."
  },
  "/package/rollup/4.62.0": {
    "path": "/package/rollup/4.62.0",
    "title": "rollup 4.62.0 review update",
    "description": "rollup 4.62.0 frontend npm update: Minor version release detected with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review."
  },
  "/package/react-hook-form/7.79.0": {
    "path": "/package/react-hook-form/7.79.0",
    "title": "react-hook-form 7.79.0 review update",
    "description": "react-hook-form 7.79.0 frontend npm update: Minor version release detected with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review."
  },
  "/package/eslint/10.5.0": {
    "path": "/package/eslint/10.5.0",
    "title": "eslint 10.5.0 review update",
    "description": "eslint 10.5.0 frontend npm update: Minor version release detected with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review."
  },
  "/package/lucide-react/1.18.0": {
    "path": "/package/lucide-react/1.18.0",
    "title": "lucide-react 1.18.0 review update",
    "description": "lucide-react 1.18.0 frontend npm update: Minor version release detected with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review."
  },
  "/package/vue/3.5.38": {
    "path": "/package/vue/3.5.38",
    "title": "vue 3.5.38 review update",
    "description": "vue 3.5.38 frontend npm update: Minor version release detected with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review."
  },
  "/package/sass/1.101.0": {
    "path": "/package/sass/1.101.0",
    "title": "sass 1.101.0 review update",
    "description": "sass 1.101.0 frontend npm update: Minor version release detected with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review."
  },
  "/package/cypress/15.17.0": {
    "path": "/package/cypress/15.17.0",
    "title": "cypress 15.17.0 review update",
    "description": "cypress 15.17.0 frontend npm update: Minor version release detected with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review."
  },
  "/package/typescript-eslint-parser/8.61.0": {
    "path": "/package/typescript-eslint-parser/8.61.0",
    "title": "@typescript-eslint/parser 8.61.0 review update",
    "description": "@typescript-eslint/parser 8.61.0 frontend npm update: Minor version release detected with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review."
  },
  "/package/typescript-eslint-eslint-plugin/8.61.0": {
    "path": "/package/typescript-eslint-eslint-plugin/8.61.0",
    "title": "@typescript-eslint/eslint-plugin 8.61.0 review update",
    "description": "@typescript-eslint/eslint-plugin 8.61.0 frontend npm update: Minor version release detected with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review."
  },
  "/package/tanstack-react-query/5.101.0": {
    "path": "/package/tanstack-react-query/5.101.0",
    "title": "@tanstack/react-query 5.101.0 review update",
    "description": "@tanstack/react-query 5.101.0 frontend npm update: Minor version release detected with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review."
  },
  "/package/react/19.2.7": {
    "path": "/package/react/19.2.7",
    "title": "react 19.2.7 review update",
    "description": "react 19.2.7 frontend npm update: Minor version release detected with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review."
  },
  "/package/react-dom/19.2.7": {
    "path": "/package/react-dom/19.2.7",
    "title": "react-dom 19.2.7 review update",
    "description": "react-dom 19.2.7 frontend npm update: Minor version release detected with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review."
  },
  "/package/date-fns/4.4.0": {
    "path": "/package/date-fns/4.4.0",
    "title": "date-fns 4.4.0 review update",
    "description": "date-fns 4.4.0 frontend npm update: Minor version release detected with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review."
  },
  "/package/framer-motion/12.40.0": {
    "path": "/package/framer-motion/12.40.0",
    "title": "framer-motion 12.40.0 review update",
    "description": "framer-motion 12.40.0 frontend npm update: Minor version release detected with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance."
  },
  "/package/reduxjs-toolkit/2.12.0": {
    "path": "/package/reduxjs-toolkit/2.12.0",
    "title": "@reduxjs/toolkit 2.12.0 review update",
    "description": "@reduxjs/toolkit 2.12.0 frontend npm update: Minor version release detected with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review."
  },
  "/package/zod/4.4.3": {
    "path": "/package/zod/4.4.3",
    "title": "zod 4.4.3 review update",
    "description": "zod 4.4.3 frontend npm update: Minor version release detected with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review."
  },
  "/package/autoprefixer/10.5.0": {
    "path": "/package/autoprefixer/10.5.0",
    "title": "autoprefixer 10.5.0 review update",
    "description": "autoprefixer 10.5.0 frontend npm update: Minor version release detected with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review."
  },
  "/package/parcel/2.16.4": {
    "path": "/package/parcel/2.16.4",
    "title": "parcel 2.16.4 review update",
    "description": "parcel 2.16.4 frontend npm update: Minor version release detected with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review."
  },
  "/package/emotion-react/11.14.0": {
    "path": "/package/emotion-react/11.14.0",
    "title": "@emotion/react 11.14.0 review update",
    "description": "@emotion/react 11.14.0 frontend npm update: Minor version release detected with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review."
  },
  "/package/astro/6.4.7": {
    "path": "/package/astro/6.4.7",
    "title": "astro 6.4.7 low impact update",
    "description": "astro 6.4.7 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/playwright/1.61.0": {
    "path": "/package/playwright/1.61.0",
    "title": "playwright 1.61.0 low impact update",
    "description": "playwright 1.61.0 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/less/4.6.6": {
    "path": "/package/less/4.6.6",
    "title": "less 4.6.6 low impact update",
    "description": "less 4.6.6 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/happy-dom/20.10.3": {
    "path": "/package/happy-dom/20.10.3",
    "title": "happy-dom 20.10.3 low impact update",
    "description": "happy-dom 20.10.3 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/mui-material/9.1.1": {
    "path": "/package/mui-material/9.1.1",
    "title": "@mui/material 9.1.1 low impact update",
    "description": "@mui/material 9.1.1 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/turbo/2.9.18": {
    "path": "/package/turbo/2.9.18",
    "title": "turbo 2.9.18 low impact update",
    "description": "turbo 2.9.18 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/next/16.2.9": {
    "path": "/package/next/16.2.9",
    "title": "next 16.2.9 low impact update",
    "description": "next 16.2.9 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/swc-core/1.15.41": {
    "path": "/package/swc-core/1.15.41",
    "title": "@swc/core 1.15.41 low impact update",
    "description": "@swc/core 1.15.41 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/prettier/3.8.4": {
    "path": "/package/prettier/3.8.4",
    "title": "prettier 3.8.4 low impact update",
    "description": "prettier 3.8.4 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/semver/7.8.4": {
    "path": "/package/semver/7.8.4",
    "title": "semver 7.8.4 low impact update",
    "description": "semver 7.8.4 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/nuxt/4.4.8": {
    "path": "/package/nuxt/4.4.8",
    "title": "nuxt 4.4.8 low impact update",
    "description": "nuxt 4.4.8 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/apollo-client/4.2.3": {
    "path": "/package/apollo-client/4.2.3",
    "title": "@apollo/client 4.2.3 low impact update",
    "description": "@apollo/client 4.2.3 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/svelte/5.56.3": {
    "path": "/package/svelte/5.56.3",
    "title": "svelte 5.56.3 low impact update",
    "description": "svelte 5.56.3 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/radix-ui-react-dialog/1.1.16": {
    "path": "/package/radix-ui-react-dialog/1.1.16",
    "title": "@radix-ui/react-dialog 1.1.16 low impact update",
    "description": "@radix-ui/react-dialog 1.1.16 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/radix-ui-react-popover/1.1.16": {
    "path": "/package/radix-ui-react-popover/1.1.16",
    "title": "@radix-ui/react-popover 1.1.16 low impact update",
    "description": "@radix-ui/react-popover 1.1.16 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/remix-run-react/2.17.5": {
    "path": "/package/remix-run-react/2.17.5",
    "title": "@remix-run/react 2.17.5 low impact update",
    "description": "@remix-run/react 2.17.5 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/vite/8.0.16": {
    "path": "/package/vite/8.0.16",
    "title": "vite 8.0.16 low impact update",
    "description": "vite 8.0.16 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/zustand/5.0.14": {
    "path": "/package/zustand/5.0.14",
    "title": "zustand 5.0.14 low impact update",
    "description": "zustand 5.0.14 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/dayjs/1.11.21": {
    "path": "/package/dayjs/1.11.21",
    "title": "dayjs 1.11.21 low impact update",
    "description": "dayjs 1.11.21 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/webpack/5.107.2": {
    "path": "/package/webpack/5.107.2",
    "title": "webpack 5.107.2 low impact update",
    "description": "webpack 5.107.2 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/babel-core/7.29.7": {
    "path": "/package/babel-core/7.29.7",
    "title": "@babel/core 7.29.7 low impact update",
    "description": "@babel/core 7.29.7 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/postcss/8.5.15": {
    "path": "/package/postcss/8.5.15",
    "title": "postcss 8.5.15 low impact update",
    "description": "postcss 8.5.15 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/vitejs-plugin-react/6.0.2": {
    "path": "/package/vitejs-plugin-react/6.0.2",
    "title": "@vitejs/plugin-react 6.0.2 low impact update",
    "description": "@vitejs/plugin-react 6.0.2 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/msw/2.14.6": {
    "path": "/package/msw/2.14.6",
    "title": "msw 2.14.6 low impact update",
    "description": "msw 2.14.6 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/tailwind-merge/3.6.0": {
    "path": "/package/tailwind-merge/3.6.0",
    "title": "tailwind-merge 3.6.0 low impact update",
    "description": "tailwind-merge 3.6.0 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/jest/30.4.2": {
    "path": "/package/jest/30.4.2",
    "title": "jest 30.4.2 low impact update",
    "description": "jest 30.4.2 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/immer/11.1.8": {
    "path": "/package/immer/11.1.8",
    "title": "immer 11.1.8 low impact update",
    "description": "immer 11.1.8 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/ky/2.0.2": {
    "path": "/package/ky/2.0.2",
    "title": "ky 2.0.2 low impact update",
    "description": "ky 2.0.2 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/typescript/6.0.3": {
    "path": "/package/typescript/6.0.3",
    "title": "typescript 6.0.3 low impact update",
    "description": "typescript 6.0.3 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/lodash/4.18.1": {
    "path": "/package/lodash/4.18.1",
    "title": "lodash 4.18.1 low impact update",
    "description": "lodash 4.18.1 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/swr/2.4.1": {
    "path": "/package/swr/2.4.1",
    "title": "swr 2.4.1 low impact update",
    "description": "swr 2.4.1 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/gatsby/5.16.1": {
    "path": "/package/gatsby/5.16.1",
    "title": "gatsby 5.16.1 low impact update",
    "description": "gatsby 5.16.1 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/testing-library-react/16.3.2": {
    "path": "/package/testing-library-react/16.3.2",
    "title": "@testing-library/react 16.3.2 low impact update",
    "description": "@testing-library/react 16.3.2 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/tsup/8.5.1": {
    "path": "/package/tsup/8.5.1",
    "title": "tsup 8.5.1 low impact update",
    "description": "tsup 8.5.1 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/types-react-dom/19.2.3": {
    "path": "/package/types-react-dom/19.2.3",
    "title": "@types/react-dom 19.2.3 low impact update",
    "description": "@types/react-dom 19.2.3 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/formik/2.4.9": {
    "path": "/package/formik/2.4.9",
    "title": "formik 2.4.9 low impact update",
    "description": "formik 2.4.9 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/testing-library-jest-dom/6.9.1": {
    "path": "/package/testing-library-jest-dom/6.9.1",
    "title": "@testing-library/jest-dom 6.9.1 low impact update",
    "description": "@testing-library/jest-dom 6.9.1 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/yup/1.7.1": {
    "path": "/package/yup/1.7.1",
    "title": "yup 1.7.1 low impact update",
    "description": "yup 1.7.1 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/class-variance-authority/0.7.1": {
    "path": "/package/class-variance-authority/0.7.1",
    "title": "class-variance-authority 0.7.1 low impact update",
    "description": "class-variance-authority 0.7.1 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/clsx/2.1.1": {
    "path": "/package/clsx/2.1.1",
    "title": "clsx 2.1.1 low impact update",
    "description": "clsx 2.1.1 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/classnames/2.5.1": {
    "path": "/package/classnames/2.5.1",
    "title": "classnames 2.5.1 low impact update",
    "description": "classnames 2.5.1 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/redux/5.0.1": {
    "path": "/package/redux/5.0.1",
    "title": "redux 5.0.1 low impact update",
    "description": "redux 5.0.1 frontend npm update: Patch release with no OSV match. OSV result: No OSV match. CVE signal: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  }
};
