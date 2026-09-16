import type { ReleaseItem, SeoRoute, WeeklyDigest } from "./types";

export const generatedAt = "2026-09-16T17:38:24.680Z";
export const generationFailures = [];
export const weeklyDigest: WeeklyDigest = {
  "week": "Week 38, 2026",
  "dateRange": "Sep 14 - Sep 20",
  "risky": 30,
  "breaking": 1,
  "security": 0,
  "safe": 52,
  "total": 82
};
export const digestArchive: WeeklyDigest[] = [
  {
    "week": "Week 38, 2026",
    "dateRange": "Sep 14 - Sep 20",
    "risky": 30,
    "breaking": 1,
    "security": 0,
    "safe": 52,
    "total": 82,
    "topSignals": [
      {
        "packageName": "typescript",
        "route": "/package/typescript/7.0.2",
        "risk": "breaking",
        "newVersion": "7.0.2",
        "reason": "Major version release detected.",
        "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
        "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds."
      },
      {
        "packageName": "framer-motion",
        "route": "/package/framer-motion/13.4.0",
        "risk": "review",
        "newVersion": "13.4.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "cypress",
        "route": "/package/cypress/16.1.0",
        "risk": "review",
        "newVersion": "16.1.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "pnpm",
        "route": "/package/pnpm/12.4.2",
        "risk": "review",
        "newVersion": "12.4.2",
        "reason": "Release notes mention security language, but no OSV or CVE match was found.",
        "recommendedAction": "Review if used. Confirm against OSV and CVE before treating this as a security fix.",
        "whyThisMatters": "Security wording in release notes is an unverified signal until an OSV advisory or CVE confirms it."
      },
      {
        "packageName": "webpack",
        "route": "/package/webpack/5.111.0",
        "risk": "review",
        "newVersion": "5.111.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "lucide-react",
        "route": "/package/lucide-react/1.46.0",
        "risk": "review",
        "newVersion": "1.46.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "tailwind-merge",
        "route": "/package/tailwind-merge/3.7.0",
        "risk": "review",
        "newVersion": "3.7.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "@apollo/client",
        "route": "/package/apollo-client/4.3.0",
        "risk": "review",
        "newVersion": "4.3.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      }
    ],
    "route": "/weekly/2026-w38",
    "generatedAt": "2026-09-16T17:38:24.680Z"
  },
  {
    "week": "Week 37, 2026",
    "dateRange": "Sep 7 - Sep 13",
    "risky": 30,
    "breaking": 3,
    "security": 0,
    "safe": 52,
    "total": 82,
    "topSignals": [
      {
        "packageName": "vitest",
        "route": "/package/vitest/5.0.0",
        "risk": "breaking",
        "newVersion": "5.0.0",
        "reason": "Major version release detected.",
        "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
        "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds."
      },
      {
        "packageName": "cypress",
        "route": "/package/cypress/16.0.0",
        "risk": "breaking",
        "newVersion": "16.0.0",
        "reason": "Major version release detected.",
        "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
        "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds."
      },
      {
        "packageName": "typescript",
        "route": "/package/typescript/7.0.2",
        "risk": "breaking",
        "newVersion": "7.0.2",
        "reason": "Major version release detected.",
        "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
        "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds."
      },
      {
        "packageName": "autoprefixer",
        "route": "/package/autoprefixer/10.6.0",
        "risk": "review",
        "newVersion": "10.6.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "@apollo/client",
        "route": "/package/apollo-client/4.3.0",
        "risk": "review",
        "newVersion": "4.3.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "react-hook-form",
        "route": "/package/react-hook-form/7.88.0",
        "risk": "review",
        "newVersion": "7.88.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "lucide-react",
        "route": "/package/lucide-react/1.45.0",
        "risk": "review",
        "newVersion": "1.45.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "vite",
        "route": "/package/vite/8.3.0",
        "risk": "review",
        "newVersion": "8.3.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      }
    ],
    "route": "/weekly/2026-w37",
    "generatedAt": "2026-09-12T16:21:20.279Z"
  },
  {
    "week": "Week 36, 2026",
    "dateRange": "Aug 31 - Sep 6",
    "risky": 26,
    "breaking": 3,
    "security": 0,
    "safe": 56,
    "total": 82,
    "topSignals": [
      {
        "packageName": "vitest",
        "route": "/package/vitest/5.0.0",
        "risk": "breaking",
        "newVersion": "5.0.0",
        "reason": "Major version release detected.",
        "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
        "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds."
      },
      {
        "packageName": "cypress",
        "route": "/package/cypress/16.0.0",
        "risk": "breaking",
        "newVersion": "16.0.0",
        "reason": "Major version release detected.",
        "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
        "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds."
      },
      {
        "packageName": "typescript",
        "route": "/package/typescript/7.0.2",
        "risk": "breaking",
        "newVersion": "7.0.2",
        "reason": "Major version release detected.",
        "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
        "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds."
      },
      {
        "packageName": "eslint",
        "route": "/package/eslint/10.10.0",
        "risk": "review",
        "newVersion": "10.10.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "playwright",
        "route": "/package/playwright/1.63.0",
        "risk": "review",
        "newVersion": "1.63.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "lucide-react",
        "route": "/package/lucide-react/1.41.0",
        "risk": "review",
        "newVersion": "1.41.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "happy-dom",
        "route": "/package/happy-dom/20.14.0",
        "risk": "review",
        "newVersion": "20.14.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "sass",
        "route": "/package/sass/1.104.0",
        "risk": "review",
        "newVersion": "1.104.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      }
    ],
    "route": "/weekly/2026-w36",
    "generatedAt": "2026-09-05T16:06:52.771Z"
  },
  {
    "week": "Week 35, 2026",
    "dateRange": "Aug 24 - Aug 30",
    "risky": 23,
    "breaking": 1,
    "security": 0,
    "safe": 59,
    "total": 82,
    "topSignals": [
      {
        "packageName": "typescript",
        "route": "/package/typescript/7.0.2",
        "risk": "breaking",
        "newVersion": "7.0.2",
        "reason": "Major version release detected.",
        "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
        "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds."
      },
      {
        "packageName": "happy-dom",
        "route": "/package/happy-dom/20.12.0",
        "risk": "review",
        "newVersion": "20.12.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "lucide-react",
        "route": "/package/lucide-react/1.37.0",
        "risk": "review",
        "newVersion": "1.37.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "svelte",
        "route": "/package/svelte/5.57.0",
        "risk": "review",
        "newVersion": "5.57.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "ky",
        "route": "/package/ky/2.1.0",
        "risk": "review",
        "newVersion": "2.1.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "jest",
        "route": "/package/jest/30.5.0",
        "risk": "review",
        "newVersion": "30.5.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "@chakra-ui/react",
        "route": "/package/chakra-ui-react/3.37.0",
        "risk": "review",
        "newVersion": "3.37.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "@mui/material",
        "route": "/package/mui-material/9.4.0",
        "risk": "review",
        "newVersion": "9.4.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      }
    ],
    "route": "/weekly/2026-w35",
    "generatedAt": "2026-08-29T17:10:57.891Z"
  },
  {
    "week": "Week 34, 2026",
    "dateRange": "Aug 17 - Aug 23",
    "risky": 19,
    "breaking": 1,
    "security": 0,
    "safe": 63,
    "total": 82,
    "topSignals": [
      {
        "packageName": "typescript",
        "route": "/package/typescript/7.0.2",
        "risk": "breaking",
        "newVersion": "7.0.2",
        "reason": "Major version release detected.",
        "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
        "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds."
      },
      {
        "packageName": "eslint",
        "route": "/package/eslint/10.9.0",
        "risk": "review",
        "newVersion": "10.9.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "react-hook-form",
        "route": "/package/react-hook-form/7.86.0",
        "risk": "review",
        "newVersion": "7.86.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "@vitejs/plugin-react",
        "route": "/package/vitejs-plugin-react/6.1.0",
        "risk": "review",
        "newVersion": "6.1.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "@storybook/react",
        "route": "/package/storybook-react/10.5.10",
        "risk": "review",
        "newVersion": "10.5.10",
        "reason": "Release notes mention security language, but no OSV or CVE match was found.",
        "recommendedAction": "Review if used. Confirm against OSV and CVE before treating this as a security fix.",
        "whyThisMatters": "Security wording in release notes is an unverified signal until an OSV advisory or CVE confirms it."
      },
      {
        "packageName": "storybook",
        "route": "/package/storybook/10.5.10",
        "risk": "review",
        "newVersion": "10.5.10",
        "reason": "Release notes mention security language, but no OSV or CVE match was found.",
        "recommendedAction": "Review if used. Confirm against OSV and CVE before treating this as a security fix.",
        "whyThisMatters": "Security wording in release notes is an unverified signal until an OSV advisory or CVE confirms it."
      },
      {
        "packageName": "lucide-react",
        "route": "/package/lucide-react/1.33.0",
        "risk": "review",
        "newVersion": "1.33.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "cypress",
        "route": "/package/cypress/15.21.0",
        "risk": "review",
        "newVersion": "15.21.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      }
    ],
    "route": "/weekly/2026-w34",
    "generatedAt": "2026-08-22T13:46:13.772Z"
  },
  {
    "week": "Week 33, 2026",
    "dateRange": "Aug 10 - Aug 16",
    "risky": 17,
    "breaking": 1,
    "security": 0,
    "safe": 65,
    "total": 82,
    "topSignals": [
      {
        "packageName": "typescript",
        "route": "/package/typescript/7.0.2",
        "risk": "breaking",
        "newVersion": "7.0.2",
        "reason": "Major version release detected.",
        "recommendedAction": "Review changes before updating. Test in staging before merging.",
        "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds."
      },
      {
        "packageName": "@swc/core",
        "route": "/package/swc-core/1.16.0",
        "risk": "review",
        "newVersion": "1.16.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "less",
        "route": "/package/less/4.9.0",
        "risk": "review",
        "newVersion": "4.9.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "@typescript-eslint/parser",
        "route": "/package/typescript-eslint-parser/8.67.0",
        "risk": "review",
        "newVersion": "8.67.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "@typescript-eslint/eslint-plugin",
        "route": "/package/typescript-eslint-eslint-plugin/8.67.0",
        "risk": "review",
        "newVersion": "8.67.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "framer-motion",
        "route": "/package/framer-motion/13.1.0",
        "risk": "review",
        "newVersion": "13.1.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "lucide-react",
        "route": "/package/lucide-react/1.31.0",
        "risk": "review",
        "newVersion": "1.31.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "pnpm",
        "route": "/package/pnpm/11.21.0",
        "risk": "review",
        "newVersion": "11.21.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      }
    ],
    "route": "/weekly/2026-w33",
    "generatedAt": "2026-08-15T13:45:04.796Z"
  },
  {
    "week": "Week 32, 2026",
    "dateRange": "Aug 3 - Aug 9",
    "risky": 21,
    "breaking": 3,
    "security": 0,
    "safe": 61,
    "total": 82,
    "topSignals": [
      {
        "packageName": "framer-motion",
        "route": "/package/framer-motion/13.0.0",
        "risk": "breaking",
        "newVersion": "13.0.0",
        "reason": "Major version release detected.",
        "recommendedAction": "Review changes before updating. Test in staging before merging.",
        "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds."
      },
      {
        "packageName": "@testing-library/jest-dom",
        "route": "/package/testing-library-jest-dom/7.0.0",
        "risk": "breaking",
        "newVersion": "7.0.0",
        "reason": "Major version release detected.",
        "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
        "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds."
      },
      {
        "packageName": "typescript",
        "route": "/package/typescript/7.0.2",
        "risk": "breaking",
        "newVersion": "7.0.2",
        "reason": "Major version release detected.",
        "recommendedAction": "Review changes before updating. Test in staging before merging.",
        "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds."
      },
      {
        "packageName": "react-hook-form",
        "route": "/package/react-hook-form/7.85.0",
        "risk": "review",
        "newVersion": "7.85.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "lucide-react",
        "route": "/package/lucide-react/1.30.0",
        "risk": "review",
        "newVersion": "1.30.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "astro",
        "route": "/package/astro/7.2.0",
        "risk": "review",
        "newVersion": "7.2.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "cypress",
        "route": "/package/cypress/15.20.0",
        "risk": "review",
        "newVersion": "15.20.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "next",
        "route": "/package/next/16.3.0",
        "risk": "review",
        "newVersion": "16.3.0",
        "reason": "Release notes mention security language, but no OSV or CVE match was found.",
        "recommendedAction": "Review if used. Confirm against OSV and CVE before treating this as a security fix.",
        "whyThisMatters": "Security wording in release notes is an unverified signal until an OSV advisory or CVE confirms it."
      }
    ],
    "route": "/weekly/2026-w32",
    "generatedAt": "2026-08-08T13:59:12.630Z"
  },
  {
    "week": "Week 31, 2026",
    "dateRange": "Jul 27 - Aug 2",
    "risky": 26,
    "breaking": 3,
    "security": 0,
    "safe": 56,
    "total": 82,
    "topSignals": [
      {
        "packageName": "@testing-library/jest-dom",
        "route": "/package/testing-library-jest-dom/7.0.0",
        "risk": "breaking",
        "newVersion": "7.0.0",
        "reason": "Major version release detected.",
        "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
        "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds."
      },
      {
        "packageName": "nanoid",
        "route": "/package/nanoid/6.0.0",
        "risk": "breaking",
        "newVersion": "6.0.0",
        "reason": "Major version release detected.",
        "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
        "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds."
      },
      {
        "packageName": "typescript",
        "route": "/package/typescript/7.0.2",
        "risk": "breaking",
        "newVersion": "7.0.2",
        "reason": "Major version release detected.",
        "recommendedAction": "Review changes before updating. Test in staging before merging.",
        "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds."
      },
      {
        "packageName": "react-hook-form",
        "route": "/package/react-hook-form/7.84.0",
        "risk": "review",
        "newVersion": "7.84.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "vite",
        "route": "/package/vite/8.2.0",
        "risk": "review",
        "newVersion": "8.2.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "lucide-react",
        "route": "/package/lucide-react/1.28.0",
        "risk": "review",
        "newVersion": "1.28.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "@angular/core",
        "route": "/package/angular-core/22.1.0",
        "risk": "review",
        "newVersion": "22.1.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "axios",
        "route": "/package/axios/1.19.0",
        "risk": "review",
        "newVersion": "1.19.0",
        "reason": "Release notes mention security language, but no OSV or CVE match was found.",
        "recommendedAction": "Review if used. Confirm against OSV and CVE before treating this as a security fix.",
        "whyThisMatters": "Security wording in release notes is an unverified signal until an OSV advisory or CVE confirms it."
      }
    ],
    "route": "/weekly/2026-w31",
    "generatedAt": "2026-08-01T14:40:53.021Z"
  },
  {
    "week": "Week 30, 2026",
    "dateRange": "Jul 20 - Jul 26",
    "risky": 25,
    "breaking": 3,
    "security": 0,
    "safe": 57,
    "total": 82,
    "topSignals": [
      {
        "packageName": "@testing-library/jest-dom",
        "route": "/package/testing-library-jest-dom/7.0.0",
        "risk": "breaking",
        "newVersion": "7.0.0",
        "reason": "Major version release detected.",
        "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
        "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds."
      },
      {
        "packageName": "nanoid",
        "route": "/package/nanoid/6.0.0",
        "risk": "breaking",
        "newVersion": "6.0.0",
        "reason": "Major version release detected.",
        "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
        "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds."
      },
      {
        "packageName": "typescript",
        "route": "/package/typescript/7.0.2",
        "risk": "breaking",
        "newVersion": "7.0.2",
        "reason": "Major version release detected.",
        "recommendedAction": "Review changes before updating. Test in staging before merging.",
        "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds."
      },
      {
        "packageName": "react-hook-form",
        "route": "/package/react-hook-form/7.83.0",
        "risk": "review",
        "newVersion": "7.83.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "sass",
        "route": "/package/sass/1.102.0",
        "risk": "review",
        "newVersion": "1.102.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "eslint",
        "route": "/package/eslint/10.8.0",
        "risk": "review",
        "newVersion": "10.8.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "playwright",
        "route": "/package/playwright/1.62.0",
        "risk": "review",
        "newVersion": "1.62.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "postcss",
        "route": "/package/postcss/8.5.23",
        "risk": "review",
        "newVersion": "8.5.23",
        "reason": "Release notes mention security language, but no OSV or CVE match was found.",
        "recommendedAction": "Review if used. Confirm against OSV and CVE before treating this as a security fix.",
        "whyThisMatters": "Security wording in release notes is an unverified signal until an OSV advisory or CVE confirms it."
      }
    ],
    "route": "/weekly/2026-w30",
    "generatedAt": "2026-07-25T14:42:27.373Z"
  },
  {
    "week": "Week 29, 2026",
    "dateRange": "Jul 13 - Jul 19",
    "risky": 18,
    "breaking": 2,
    "security": 0,
    "safe": 64,
    "total": 82,
    "topSignals": [
      {
        "packageName": "nanoid",
        "route": "/package/nanoid/6.0.0",
        "risk": "breaking",
        "newVersion": "6.0.0",
        "reason": "Major version release detected.",
        "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
        "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds."
      },
      {
        "packageName": "typescript",
        "route": "/package/typescript/7.0.2",
        "risk": "breaking",
        "newVersion": "7.0.2",
        "reason": "Major version release detected.",
        "recommendedAction": "Review changes before updating. Test in staging before merging.",
        "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds."
      },
      {
        "packageName": "react-hook-form",
        "route": "/package/react-hook-form/7.82.0",
        "risk": "review",
        "newVersion": "7.82.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "lucide-react",
        "route": "/package/lucide-react/1.25.0",
        "risk": "review",
        "newVersion": "1.25.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "pnpm",
        "route": "/package/pnpm/11.14.0",
        "risk": "review",
        "newVersion": "11.14.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "@typescript-eslint/parser",
        "route": "/package/typescript-eslint-parser/8.64.0",
        "risk": "review",
        "newVersion": "8.64.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "@typescript-eslint/eslint-plugin",
        "route": "/package/typescript-eslint-eslint-plugin/8.64.0",
        "risk": "review",
        "newVersion": "8.64.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "eslint",
        "route": "/package/eslint/10.7.0",
        "risk": "review",
        "newVersion": "10.7.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      }
    ],
    "route": "/weekly/2026-w29",
    "generatedAt": "2026-07-18T14:31:58.155Z"
  },
  {
    "week": "Week 28, 2026",
    "dateRange": "Jul 6 - Jul 12",
    "risky": 20,
    "breaking": 1,
    "security": 0,
    "safe": 62,
    "total": 82,
    "topSignals": [
      {
        "packageName": "typescript",
        "route": "/package/typescript/7.0.2",
        "risk": "breaking",
        "newVersion": "7.0.2",
        "reason": "Major version release detected.",
        "recommendedAction": "Review changes before updating. Test in staging before merging.",
        "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds."
      },
      {
        "packageName": "eslint",
        "route": "/package/eslint/10.7.0",
        "risk": "review",
        "newVersion": "10.7.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "@storybook/react",
        "route": "/package/storybook-react/10.5.0",
        "risk": "review",
        "newVersion": "10.5.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "storybook",
        "route": "/package/storybook/10.5.0",
        "risk": "review",
        "newVersion": "10.5.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "lucide-react",
        "route": "/package/lucide-react/1.24.0",
        "risk": "review",
        "newVersion": "1.24.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "pnpm",
        "route": "/package/pnpm/11.11.0",
        "risk": "review",
        "newVersion": "11.11.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "msw",
        "route": "/package/msw/2.15.0",
        "risk": "review",
        "newVersion": "2.15.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "@typescript-eslint/parser",
        "route": "/package/typescript-eslint-parser/8.63.0",
        "risk": "review",
        "newVersion": "8.63.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      }
    ],
    "route": "/weekly/2026-w28",
    "generatedAt": "2026-07-11T14:33:13.436Z"
  },
  {
    "week": "Week 27, 2026",
    "dateRange": "Jun 29 - Jul 5",
    "risky": 15,
    "breaking": 0,
    "security": 0,
    "safe": 67,
    "total": 82,
    "topSignals": [
      {
        "packageName": "@mui/material",
        "route": "/package/mui-material/9.2.0",
        "risk": "review",
        "newVersion": "9.2.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "lucide-react",
        "route": "/package/lucide-react/1.23.0",
        "risk": "review",
        "newVersion": "1.23.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "eslint",
        "route": "/package/eslint/10.6.0",
        "risk": "review",
        "newVersion": "10.6.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "cypress",
        "route": "/package/cypress/15.18.0",
        "risk": "review",
        "newVersion": "15.18.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "pnpm",
        "route": "/package/pnpm/11.9.0",
        "risk": "review",
        "newVersion": "11.9.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "react-hook-form",
        "route": "/package/react-hook-form/7.80.0",
        "risk": "review",
        "newVersion": "7.80.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "esbuild",
        "route": "/package/esbuild/0.28.1",
        "risk": "review",
        "newVersion": "0.28.1",
        "reason": "Release notes mention security language, but no OSV or CVE match was found.",
        "recommendedAction": "Review if used. Confirm against OSV and CVE before treating this as a security fix.",
        "whyThisMatters": "Security wording in release notes is an unverified signal until an OSV advisory or CVE confirms it."
      },
      {
        "packageName": "sass",
        "route": "/package/sass/1.101.0",
        "risk": "review",
        "newVersion": "1.101.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      }
    ],
    "route": "/weekly/2026-w27",
    "generatedAt": "2026-07-04T14:46:22.365Z"
  },
  {
    "week": "Week 26, 2026",
    "dateRange": "Jun 22 - Jun 28",
    "risky": 21,
    "breaking": 0,
    "security": 0,
    "safe": 61,
    "total": 82,
    "topSignals": [
      {
        "packageName": "prettier",
        "route": "/package/prettier/3.9.0",
        "risk": "review",
        "newVersion": "3.9.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "eslint",
        "route": "/package/eslint/10.6.0",
        "risk": "review",
        "newVersion": "10.6.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "framer-motion",
        "route": "/package/framer-motion/12.42.0",
        "risk": "review",
        "newVersion": "12.42.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "turbo",
        "route": "/package/turbo/2.10.0",
        "risk": "review",
        "newVersion": "2.10.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "vite",
        "route": "/package/vite/8.1.0",
        "risk": "review",
        "newVersion": "8.1.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "cypress",
        "route": "/package/cypress/15.18.0",
        "risk": "review",
        "newVersion": "15.18.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "pnpm",
        "route": "/package/pnpm/11.9.0",
        "risk": "review",
        "newVersion": "11.9.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      },
      {
        "packageName": "@typescript-eslint/parser",
        "route": "/package/typescript-eslint-parser/8.62.0",
        "risk": "review",
        "newVersion": "8.62.0",
        "reason": "Minor version release detected with no OSV match.",
        "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
        "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior."
      }
    ],
    "route": "/weekly/2026-w26",
    "generatedAt": "2026-06-27T14:56:33.225Z"
  },
  {
    "week": "Week 25, 2026",
    "dateRange": "Jun 15 - Jun 21",
    "risky": 35,
    "breaking": 11,
    "security": 4,
    "safe": 47,
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
        "packageName": "uuid",
        "route": "/package/uuid/14.0.1",
        "risk": "breaking",
        "newVersion": "14.0.1",
        "reason": "Major version release detected.",
        "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
        "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds."
      },
      {
        "packageName": "nanoid",
        "route": "/package/nanoid/5.1.15",
        "risk": "breaking",
        "newVersion": "5.1.15",
        "reason": "Major version release detected.",
        "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
        "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds."
      },
      {
        "packageName": "astro",
        "route": "/package/astro/6.4.8",
        "risk": "breaking",
        "newVersion": "6.4.8",
        "reason": "Major version release detected.",
        "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
        "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds."
      },
      {
        "packageName": "react-router-dom",
        "route": "/package/react-router-dom/7.18.0",
        "risk": "breaking",
        "newVersion": "7.18.0",
        "reason": "Major version release detected.",
        "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
        "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds."
      }
    ],
    "route": "/weekly/2026-w25",
    "generatedAt": "2026-06-20T15:16:34.961Z"
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
    "id": "typescript-7-0-2",
    "packageName": "typescript",
    "packageSlug": "typescript",
    "description": "Typed JavaScript compiler",
    "oldVersion": "6.0.3",
    "newVersion": "7.0.2",
    "releaseDate": "2026-07-08",
    "publishedAgo": "published 70 days ago",
    "isRecent": false,
    "risk": "breaking",
    "category": "Major version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Major version release detected.",
    "whyThisMatters": "Major releases often change defaults, APIs, or runtime behavior that can break frontend builds.",
    "affectedAudience": "Developer tooling, type checking, and code-quality gates.",
    "recommendedAction": "Review changes before updating. Test in staging before merging. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: TypeScript 7.0.2.",
    "githubReleaseTitle": "TypeScript 7.0.2",
    "githubReleaseUrl": "https://github.com/microsoft/TypeScript/releases/tag/v7.0.2",
    "githubReleaseTag": "v7.0.2",
    "githubReleasePublishedAt": "2026-08-20T18:09:49Z",
    "releaseNotesExcerpt": "https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/ This tag was originally released at: https://github.com/microsoft/typescript-go/releases/tag/typescript%2Fv7.0.2",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/typescript/7.0.2",
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
        "href": "https://github.com/microsoft/TypeScript/releases/tag/v7.0.2"
      }
    ]
  },
  {
    "id": "framer-motion-13-4-0",
    "packageName": "framer-motion",
    "packageSlug": "framer-motion",
    "description": "React motion library",
    "oldVersion": "13.3.0",
    "newVersion": "13.4.0",
    "releaseDate": "2026-09-16",
    "publishedAgo": "published today",
    "isRecent": true,
    "risk": "review",
    "category": "Minor version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance.",
    "whatChanged": "Minor framer-motion 13.4.0 release detected; review if used in production paths.",
    "githubReleaseTitle": "",
    "githubReleaseUrl": "",
    "githubReleaseTag": "",
    "githubReleasePublishedAt": "",
    "releaseNotesExcerpt": "",
    "releaseNotesStatus": "No GitHub releases found for this repository.",
    "route": "/package/framer-motion/13.4.0",
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
    "id": "cypress-16-1-0",
    "packageName": "cypress",
    "packageSlug": "cypress",
    "description": "Browser testing",
    "oldVersion": "16.0.0",
    "newVersion": "16.1.0",
    "releaseDate": "2026-09-15",
    "publishedAgo": "published today",
    "isRecent": true,
    "risk": "review",
    "category": "Minor version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "Test suites, browser automation, and release validation workflows.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: v16.1.0.",
    "githubReleaseTitle": "v16.1.0",
    "githubReleaseUrl": "https://github.com/cypress-io/cypress/releases/tag/v16.1.0",
    "githubReleaseTag": "v16.1.0",
    "githubReleasePublishedAt": "2026-09-15T21:37:56Z",
    "releaseNotesExcerpt": "Changelog: https://docs.cypress.io/app/references/changelog#16-1-0",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/cypress/16.1.0",
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
        "href": "https://github.com/cypress-io/cypress/releases/tag/v16.1.0"
      }
    ]
  },
  {
    "id": "pnpm-12-4-2",
    "packageName": "pnpm",
    "packageSlug": "pnpm",
    "description": "Package manager",
    "oldVersion": "12.4.1",
    "newVersion": "12.4.2",
    "releaseDate": "2026-09-15",
    "publishedAgo": "published 1 day ago",
    "isRecent": true,
    "risk": "review",
    "category": "Release-note review",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Release notes mention security language, but no OSV or CVE match was found.",
    "whyThisMatters": "Security wording in release notes is an unverified signal until an OSV advisory or CVE confirms it.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "Review if used. Confirm against OSV and CVE before treating this as a security fix.",
    "whatChanged": "GitHub release note found: pnpm 12.4.2.",
    "githubReleaseTitle": "pnpm 12.4.2",
    "githubReleaseUrl": "https://github.com/pnpm/pnpm/releases/tag/v12.4.2",
    "githubReleaseTag": "v12.4.2",
    "githubReleasePublishedAt": "2026-09-15T10:49:15Z",
    "releaseNotesExcerpt": "pnpm 12.4.2 includes security fixes for executable shims and GitHub Actions links, more reliable installs, faster peer dependency checks in workspaces, and Python lockfiles that work across compatible targets. Patch Changes Security Dependency executables can no longer take over ",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/pnpm/12.4.2",
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
        "href": "https://github.com/pnpm/pnpm/releases/tag/v12.4.2"
      }
    ]
  },
  {
    "id": "webpack-5-111-0",
    "packageName": "webpack",
    "packageSlug": "webpack",
    "description": "JavaScript bundler",
    "oldVersion": "5.110.3",
    "newVersion": "5.111.0",
    "releaseDate": "2026-09-14",
    "publishedAgo": "published 2 days ago",
    "isRecent": true,
    "risk": "review",
    "category": "Minor version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "Frontend build pipelines, monorepos, and CI jobs.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: v5.111.0.",
    "githubReleaseTitle": "v5.111.0",
    "githubReleaseUrl": "https://github.com/webpack/webpack/releases/tag/v5.111.0",
    "githubReleaseTag": "v5.111.0",
    "githubReleasePublishedAt": "2026-09-14T06:11:20Z",
    "releaseNotesExcerpt": "Minor Changes Enable output.module by default with futureDefaults on ESM-capable targets. (by @alexander-akait in #22088) Remove experiments.outputModule, set output.module to emit ESM instead. (by @alexander-akait in #22011) Add output.copy to copy files and directories into the",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/webpack/5.111.0",
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
        "href": "https://github.com/webpack/webpack/releases/tag/v5.111.0"
      }
    ]
  },
  {
    "id": "lucide-react-1-46-0",
    "packageName": "lucide-react",
    "packageSlug": "lucide-react",
    "description": "React icon library",
    "oldVersion": "1.45.0",
    "newVersion": "1.46.0",
    "releaseDate": "2026-09-14",
    "publishedAgo": "published 2 days ago",
    "isRecent": true,
    "risk": "review",
    "category": "Minor version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "React applications, component libraries, and frontend teams using React release workflows.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: Version 1.46.0.",
    "githubReleaseTitle": "Version 1.46.0",
    "githubReleaseUrl": "https://github.com/lucide-icons/lucide/releases/tag/1.46.0",
    "githubReleaseTag": "1.46.0",
    "githubReleasePublishedAt": "2026-09-14T09:16:38Z",
    "releaseNotesExcerpt": "What's Changed feat(icons): Added new icons: clef-g, clef-f and clef-c by @rrod497 in https://github.com/lucide-icons/lucide/pull/4083 chore(deps-dev): bump astro from 7.3.0 to 7.3.2 in the astro-deps group by @dependabot[bot] in https://github.com/lucide-icons/lucide/pull/4860 f",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/lucide-react/1.46.0",
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
        "href": "https://github.com/lucide-icons/lucide/releases/tag/1.46.0"
      }
    ]
  },
  {
    "id": "tailwind-merge-3-7-0",
    "packageName": "tailwind-merge",
    "packageSlug": "tailwind-merge",
    "description": "Tailwind class merging",
    "oldVersion": "3.6.0",
    "newVersion": "3.7.0",
    "releaseDate": "2026-09-12",
    "publishedAgo": "published 3 days ago",
    "isRecent": true,
    "risk": "review",
    "category": "Minor version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: tailwind-merge@3.7.0.",
    "githubReleaseTitle": "tailwind-merge@3.7.0",
    "githubReleaseUrl": "https://github.com/dcastil/tailwind-merge/releases/tag/tailwind-merge%403.7.0",
    "githubReleaseTag": "tailwind-merge@3.7.0",
    "githubReleasePublishedAt": "2026-09-12T20:05:05Z",
    "releaseNotesExcerpt": "New Features Prepare some upcoming changes by @dcastil in https://github.com/dcastil/tailwind-merge/pull/713 - Theme getters returned by fromTheme now expose the theme key they read as a themeKey property, so tooling can identify the referenced theme scale without calling the get",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/tailwind-merge/3.7.0",
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
        "href": "https://github.com/dcastil/tailwind-merge/releases/tag/tailwind-merge%403.7.0"
      }
    ]
  },
  {
    "id": "apollo-client-4-3-0",
    "packageName": "@apollo/client",
    "packageSlug": "apollo-client",
    "description": "GraphQL client",
    "oldVersion": "4.2.12",
    "newVersion": "4.3.0",
    "releaseDate": "2026-09-11",
    "publishedAgo": "published 4 days ago",
    "isRecent": true,
    "risk": "review",
    "category": "Minor version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: @apollo/client@4.3.0.",
    "githubReleaseTitle": "@apollo/client@4.3.0",
    "githubReleaseUrl": "https://github.com/apollographql/apollo-client/releases/tag/%40apollo/client%404.3.0",
    "githubReleaseTag": "@apollo/client@4.3.0",
    "githubReleasePublishedAt": "2026-09-11T19:03:19Z",
    "releaseNotesExcerpt": "Minor Changes #13447 24133fe Thanks @jerelmiller! - Field policies and inputObjects can now tell the cache whether a field is a list of scalars or a scalar whose value is an array. Previously all arrays were iterated and only the inner type was provided to the scalar parse/serial",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/apollo-client/4.3.0",
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
        "href": "https://github.com/apollographql/apollo-client/releases/tag/%40apollo/client%404.3.0"
      }
    ]
  },
  {
    "id": "react-hook-form-7-88-0",
    "packageName": "react-hook-form",
    "packageSlug": "react-hook-form",
    "description": "React form state",
    "oldVersion": "7.87.0",
    "newVersion": "7.88.0",
    "releaseDate": "2026-09-11",
    "publishedAgo": "published 4 days ago",
    "isRecent": true,
    "risk": "review",
    "category": "Minor version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "React applications, component libraries, and frontend teams using React release workflows.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: Version 7.88.0.",
    "githubReleaseTitle": "Version 7.88.0",
    "githubReleaseUrl": "https://github.com/react-hook-form/react-hook-form/releases/tag/v7.88.0",
    "githubReleaseTag": "v7.88.0",
    "githubReleasePublishedAt": "2026-09-11T22:30:09Z",
    "releaseNotesExcerpt": "Features Add Error Message component (#13472) Add the Error Message component for displaying validation errors from React Hook Form. Fixes Fix stale validating state after resetField() (#13735) Fix errors and touched state remaining for rows removed by replace() (#13734) Fix stal",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/react-hook-form/7.88.0",
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
        "href": "https://github.com/react-hook-form/react-hook-form/releases/tag/v7.88.0"
      }
    ]
  },
  {
    "id": "vite-8-3-0",
    "packageName": "vite",
    "packageSlug": "vite",
    "description": "Frontend build tooling",
    "oldVersion": "8.2.2",
    "newVersion": "8.3.0",
    "releaseDate": "2026-09-10",
    "publishedAgo": "published 6 days ago",
    "isRecent": true,
    "risk": "review",
    "category": "Minor version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "Frontend build pipelines, monorepos, and CI jobs.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: v8.3.0.",
    "githubReleaseTitle": "v8.3.0",
    "githubReleaseUrl": "https://github.com/vitejs/vite/releases/tag/v8.3.0",
    "githubReleaseTag": "v8.3.0",
    "githubReleasePublishedAt": "2026-09-10T11:25:16Z",
    "releaseNotesExcerpt": "Features **build:** avoid settling seen preload dependencies for performance (#23446) (e6f6b3e) Bug Fixes handle CRLF line endings in code frame positions (#23219) (9913672) only treat whole node_modules path segments as dependencies (fix #17467) (#23437) (ef0dc17) Performance Im",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/vite/8.3.0",
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
        "href": "https://github.com/vitejs/vite/releases/tag/v8.3.0"
      }
    ]
  },
  {
    "id": "react-19-3-0",
    "packageName": "react",
    "packageSlug": "react",
    "description": "UI library",
    "oldVersion": "19.2.8",
    "newVersion": "19.3.0",
    "releaseDate": "2026-09-09",
    "publishedAgo": "published 7 days ago",
    "isRecent": true,
    "risk": "review",
    "category": "Minor version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "React applications, component libraries, and frontend teams using React release workflows.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: 19.3.0 (September 9, 2026).",
    "githubReleaseTitle": "19.3.0 (September 9, 2026)",
    "githubReleaseUrl": "https://github.com/react/react/releases/tag/v19.3.0",
    "githubReleaseTag": "v19.3.0",
    "githubReleasePublishedAt": "2026-09-09T18:01:33Z",
    "releaseNotesExcerpt": "Below is a list of all new features, APIs, and bug fixes. Read the React 19.3 release post for more information. New React Features <ViewTransition />: Adds <ViewTransition /> and addTransitionType APIs to power View Transition animations in React (@sebmarkbage, @jackpope, @gaear",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/react/19.3.0",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/react"
      },
      {
        "label": "Repository",
        "href": "https://github.com/react/react"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/react/react/releases/tag/v19.3.0"
      }
    ]
  },
  {
    "id": "react-dom-19-3-0",
    "packageName": "react-dom",
    "packageSlug": "react-dom",
    "description": "React DOM rendering",
    "oldVersion": "19.2.8",
    "newVersion": "19.3.0",
    "releaseDate": "2026-09-09",
    "publishedAgo": "published 7 days ago",
    "isRecent": true,
    "risk": "review",
    "category": "Minor version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "React applications, component libraries, and frontend teams using React release workflows.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: 19.3.0 (September 9, 2026).",
    "githubReleaseTitle": "19.3.0 (September 9, 2026)",
    "githubReleaseUrl": "https://github.com/react/react/releases/tag/v19.3.0",
    "githubReleaseTag": "v19.3.0",
    "githubReleasePublishedAt": "2026-09-09T18:01:33Z",
    "releaseNotesExcerpt": "Below is a list of all new features, APIs, and bug fixes. Read the React 19.3 release post for more information. New React Features <ViewTransition />: Adds <ViewTransition /> and addTransitionType APIs to power View Transition animations in React (@sebmarkbage, @jackpope, @gaear",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag. Cached from an earlier generator run.",
    "route": "/package/react-dom/19.3.0",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/react-dom"
      },
      {
        "label": "Repository",
        "href": "https://github.com/react/react"
      },
      {
        "label": "GitHub release",
        "href": "https://github.com/react/react/releases/tag/v19.3.0"
      }
    ]
  },
  {
    "id": "types-react-19-3-0",
    "packageName": "@types/react",
    "packageSlug": "types-react",
    "description": "React TypeScript definitions",
    "oldVersion": "19.2.18",
    "newVersion": "19.3.0",
    "releaseDate": "2026-09-09",
    "publishedAgo": "published 6 days ago",
    "isRecent": true,
    "risk": "review",
    "category": "Minor version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "React applications, component libraries, and frontend teams using React release workflows.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance.",
    "whatChanged": "Minor @types/react 19.3.0 release detected; review if used in production paths.",
    "githubReleaseTitle": "",
    "githubReleaseUrl": "",
    "githubReleaseTag": "",
    "githubReleasePublishedAt": "",
    "releaseNotesExcerpt": "",
    "releaseNotesStatus": "No GitHub release matched this exact npm version tag; release notes are not attributed to this version.",
    "route": "/package/types-react/19.3.0",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/@types/react"
      },
      {
        "label": "Repository",
        "href": "https://github.com/DefinitelyTyped/DefinitelyTyped"
      }
    ]
  },
  {
    "id": "types-react-dom-19-3-0",
    "packageName": "@types/react-dom",
    "packageSlug": "types-react-dom",
    "description": "React DOM TypeScript definitions",
    "oldVersion": "19.2.7",
    "newVersion": "19.3.0",
    "releaseDate": "2026-09-09",
    "publishedAgo": "published 6 days ago",
    "isRecent": true,
    "risk": "review",
    "category": "Minor version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "React applications, component libraries, and frontend teams using React release workflows.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance.",
    "whatChanged": "Minor @types/react-dom 19.3.0 release detected; review if used in production paths.",
    "githubReleaseTitle": "",
    "githubReleaseUrl": "",
    "githubReleaseTag": "",
    "githubReleasePublishedAt": "",
    "releaseNotesExcerpt": "",
    "releaseNotesStatus": "No GitHub release matched this exact npm version tag; release notes are not attributed to this version. Cached from an earlier generator run.",
    "route": "/package/types-react-dom/19.3.0",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/@types/react-dom"
      },
      {
        "label": "Repository",
        "href": "https://github.com/DefinitelyTyped/DefinitelyTyped"
      }
    ]
  },
  {
    "id": "typescript-eslint-parser-8-70-0",
    "packageName": "@typescript-eslint/parser",
    "packageSlug": "typescript-eslint-parser",
    "description": "TypeScript parser for ESLint",
    "oldVersion": "8.69.0",
    "newVersion": "8.70.0",
    "releaseDate": "2026-09-07",
    "publishedAgo": "published 8 days ago",
    "isRecent": true,
    "risk": "review",
    "category": "Minor version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: v8.70.0.",
    "githubReleaseTitle": "v8.70.0",
    "githubReleaseUrl": "https://github.com/typescript-eslint/typescript-eslint/releases/tag/v8.70.0",
    "githubReleaseTag": "v8.70.0",
    "githubReleasePublishedAt": "2026-09-07T17:06:49Z",
    "releaseNotesExcerpt": "8.70.0 (2026-09-07) Features **eslint-plugin:** [no-generated-empty-object-type] add rule (#12730) **website:** generate per-page social preview cards (#12734) Fixes use stable release of pnpm 12 (#12808) update pnpm to 12.3.4 and dedupe Docusaurus packages (#12829) **eslint-plug",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/typescript-eslint-parser/8.70.0",
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
        "href": "https://github.com/typescript-eslint/typescript-eslint/releases/tag/v8.70.0"
      }
    ]
  },
  {
    "id": "typescript-eslint-eslint-plugin-8-70-0",
    "packageName": "@typescript-eslint/eslint-plugin",
    "packageSlug": "typescript-eslint-eslint-plugin",
    "description": "TypeScript ESLint rules",
    "oldVersion": "8.69.0",
    "newVersion": "8.70.0",
    "releaseDate": "2026-09-07",
    "publishedAgo": "published 8 days ago",
    "isRecent": true,
    "risk": "review",
    "category": "Minor version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: v8.70.0.",
    "githubReleaseTitle": "v8.70.0",
    "githubReleaseUrl": "https://github.com/typescript-eslint/typescript-eslint/releases/tag/v8.70.0",
    "githubReleaseTag": "v8.70.0",
    "githubReleasePublishedAt": "2026-09-07T17:06:49Z",
    "releaseNotesExcerpt": "8.70.0 (2026-09-07) Features **eslint-plugin:** [no-generated-empty-object-type] add rule (#12730) **website:** generate per-page social preview cards (#12734) Fixes use stable release of pnpm 12 (#12808) update pnpm to 12.3.4 and dedupe Docusaurus packages (#12829) **eslint-plug",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag. Cached from an earlier generator run.",
    "route": "/package/typescript-eslint-eslint-plugin/8.70.0",
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
        "href": "https://github.com/typescript-eslint/typescript-eslint/releases/tag/v8.70.0"
      }
    ]
  },
  {
    "id": "eslint-10-10-0",
    "packageName": "eslint",
    "packageSlug": "eslint",
    "description": "JavaScript linting",
    "oldVersion": "10.9.1",
    "newVersion": "10.10.0",
    "releaseDate": "2026-09-04",
    "publishedAgo": "published 12 days ago",
    "isRecent": true,
    "risk": "review",
    "category": "Minor version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "Developer tooling, type checking, and code-quality gates.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: v10.10.0.",
    "githubReleaseTitle": "v10.10.0",
    "githubReleaseUrl": "https://github.com/eslint/eslint/releases/tag/v10.10.0",
    "githubReleaseTag": "v10.10.0",
    "githubReleasePublishedAt": "2026-09-04T14:30:17Z",
    "releaseNotesExcerpt": "Features 264b434 feat: add d and v flags to no-unexpected-multiline (#21305) (Gihyeon Jeong / ) c6cc6c5 feat: check Object.prototype property names in new-cap (#21269) (crimsonjay0) 5661fa6 feat: no-extra-bind false negatives with class fields and static blocks (#21260) (synthex-",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/eslint/10.10.0",
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
        "href": "https://github.com/eslint/eslint/releases/tag/v10.10.0"
      }
    ]
  },
  {
    "id": "playwright-1-63-0",
    "packageName": "playwright",
    "packageSlug": "playwright",
    "description": "Browser automation",
    "oldVersion": "1.62.1",
    "newVersion": "1.63.0",
    "releaseDate": "2026-09-04",
    "publishedAgo": "published 11 days ago",
    "isRecent": true,
    "risk": "review",
    "category": "Minor version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "Test suites, browser automation, and release validation workflows.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: v1.63.0.",
    "githubReleaseTitle": "v1.63.0",
    "githubReleaseUrl": "https://github.com/microsoft/playwright/releases/tag/v1.63.0",
    "githubReleaseTag": "v1.63.0",
    "githubReleasePublishedAt": "2026-09-04T22:40:31Z",
    "releaseNotesExcerpt": "Test locks Tests that access a shared resource - an external service, a global account setting - can now declare a named lock. Tests that share a lock name never run concurrently, across files, workers and projects, while everything else keeps running in parallel: A test can hold",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/playwright/1.63.0",
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
        "href": "https://github.com/microsoft/playwright/releases/tag/v1.63.0"
      }
    ]
  },
  {
    "id": "storybook-react-10-6-0",
    "packageName": "@storybook/react",
    "packageSlug": "storybook-react",
    "description": "React component workshop",
    "oldVersion": "10.5.10",
    "newVersion": "10.6.0",
    "releaseDate": "2026-09-02",
    "publishedAgo": "published 14 days ago",
    "isRecent": true,
    "risk": "review",
    "category": "Minor version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "React applications, component libraries, and frontend teams using React release workflows.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: v10.6.0.",
    "githubReleaseTitle": "v10.6.0",
    "githubReleaseUrl": "https://github.com/storybookjs/storybook/releases/tag/v10.6.0",
    "githubReleaseTag": "v10.6.0",
    "githubReleasePublishedAt": "2026-09-02T13:57:23Z",
    "releaseNotesExcerpt": "10.6.0 > New skills architecture for agentic workflows Storybook 10.6 contains hundreds of fixes and improvements: CLI bindings for agent tools/skills Angular-Vite MCP/skills support and improved docgen/snippets (experimental) Vue MCP/skills support and improved docgen/snippets (",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/storybook-react/10.6.0",
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
        "href": "https://github.com/storybookjs/storybook/releases/tag/v10.6.0"
      }
    ]
  },
  {
    "id": "storybook-10-6-0",
    "packageName": "storybook",
    "packageSlug": "storybook",
    "description": "Component documentation",
    "oldVersion": "10.5.10",
    "newVersion": "10.6.0",
    "releaseDate": "2026-09-02",
    "publishedAgo": "published 14 days ago",
    "isRecent": true,
    "risk": "review",
    "category": "Minor version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: v10.6.0.",
    "githubReleaseTitle": "v10.6.0",
    "githubReleaseUrl": "https://github.com/storybookjs/storybook/releases/tag/v10.6.0",
    "githubReleaseTag": "v10.6.0",
    "githubReleasePublishedAt": "2026-09-02T13:57:23Z",
    "releaseNotesExcerpt": "10.6.0 > New skills architecture for agentic workflows Storybook 10.6 contains hundreds of fixes and improvements: CLI bindings for agent tools/skills Angular-Vite MCP/skills support and improved docgen/snippets (experimental) Vue MCP/skills support and improved docgen/snippets (",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag. Cached from an earlier generator run.",
    "route": "/package/storybook/10.6.0",
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
        "href": "https://github.com/storybookjs/storybook/releases/tag/v10.6.0"
      }
    ]
  },
  {
    "id": "svelte-5-57-0",
    "packageName": "svelte",
    "packageSlug": "svelte",
    "description": "Compiler-based UI framework",
    "oldVersion": "5.56.10",
    "newVersion": "5.57.0",
    "releaseDate": "2026-08-28",
    "publishedAgo": "published 18 days ago",
    "isRecent": true,
    "risk": "review",
    "category": "Minor version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: svelte@5.57.0.",
    "githubReleaseTitle": "svelte@5.57.0",
    "githubReleaseUrl": "https://github.com/sveltejs/svelte/releases/tag/svelte%405.57.0",
    "githubReleaseTag": "svelte@5.57.0",
    "githubReleasePublishedAt": "2026-08-28T23:31:40Z",
    "releaseNotesExcerpt": "Minor Changes feat: export RenderOutput, SyncRenderOutput, Csp and Sha256Source from svelte/server (#18648) feat: add has function to createContext (#18472) feat: support defaultValue on <select> (#18591) feat: add getOrInsert/getOrInsertComputed to SvelteMap (#18728) Patch Chang",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/svelte/5.57.0",
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
        "href": "https://github.com/sveltejs/svelte/releases/tag/svelte%405.57.0"
      }
    ]
  },
  {
    "id": "ky-2-1-0",
    "packageName": "ky",
    "packageSlug": "ky",
    "description": "Fetch client",
    "oldVersion": "2.0.2",
    "newVersion": "2.1.0",
    "releaseDate": "2026-08-28",
    "publishedAgo": "published 19 days ago",
    "isRecent": true,
    "risk": "review",
    "category": "Minor version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: v2.1.0.",
    "githubReleaseTitle": "v2.1.0",
    "githubReleaseUrl": "https://github.com/sindresorhus/ky/releases/tag/v2.1.0",
    "githubReleaseTag": "v2.1.0",
    "githubReleasePublishedAt": "2026-08-28T13:10:41Z",
    "releaseNotesExcerpt": "Improvements Add QUERY method support (#873) 6edddd9 Allow parseJson to handle empty bodies (#877) 294fe63 Reject malformed HTTP URLs with baseUrl be60db5 Improve Retry-After handling (#874) 3419113 Harden retry c426f19 Fixes Fix progress callbacks for empty request and response ",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/ky/2.1.0",
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
        "href": "https://github.com/sindresorhus/ky/releases/tag/v2.1.0"
      }
    ]
  },
  {
    "id": "chakra-ui-react-3-37-0",
    "packageName": "@chakra-ui/react",
    "packageSlug": "chakra-ui-react",
    "description": "Accessible React component library",
    "oldVersion": "3.36.1",
    "newVersion": "3.37.0",
    "releaseDate": "2026-08-28",
    "publishedAgo": "published 19 days ago",
    "isRecent": true,
    "risk": "review",
    "category": "Minor version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "React applications, component libraries, and frontend teams using React release workflows.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: @chakra-ui/react@3.37.0.",
    "githubReleaseTitle": "@chakra-ui/react@3.37.0",
    "githubReleaseUrl": "https://github.com/chakra-ui/chakra-ui/releases/tag/%40chakra-ui/react%403.37.0",
    "githubReleaseTag": "@chakra-ui/react@3.37.0",
    "githubReleasePublishedAt": "2026-08-28T09:56:45Z",
    "releaseNotesExcerpt": "Minor Changes #10877 afc8b48 Thanks @kalisaNkevin! - **[New] DateInput**: Add a segmented date field for typing dates without a calendar. Each part of the date is its own keyboard-navigable segment, ordered and formatted by locale. Supports selectionMode=\"range\", min/max, and gra",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/chakra-ui-react/3.37.0",
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
        "href": "https://github.com/chakra-ui/chakra-ui/releases/tag/%40chakra-ui/react%403.37.0"
      }
    ]
  },
  {
    "id": "mui-material-9-4-0",
    "packageName": "@mui/material",
    "packageSlug": "mui-material",
    "description": "React component library",
    "oldVersion": "9.3.1",
    "newVersion": "9.4.0",
    "releaseDate": "2026-08-27",
    "publishedAgo": "published 20 days ago",
    "isRecent": true,
    "risk": "review",
    "category": "Minor version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: v9.4.0.",
    "githubReleaseTitle": "v9.4.0",
    "githubReleaseUrl": "https://github.com/mui/material-ui/releases/tag/v9.4.0",
    "githubReleaseTag": "v9.4.0",
    "githubReleasePublishedAt": "2026-08-28T02:03:14Z",
    "releaseNotesExcerpt": "A big thanks to the 19 contributors who made this release possible. Here are some highlights : Opt in to a consistent keyboard focus ring across components with the new theme.focusVisible. The Tooltip now supports disabled button triggers without an extra wrapper element. @mui/ma",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/mui-material/9.4.0",
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
        "href": "https://github.com/mui/material-ui/releases/tag/v9.4.0"
      }
    ]
  },
  {
    "id": "axios-1-20-0",
    "packageName": "axios",
    "packageSlug": "axios",
    "description": "HTTP client",
    "oldVersion": "1.19.0",
    "newVersion": "1.20.0",
    "releaseDate": "2026-08-26",
    "publishedAgo": "published 21 days ago",
    "isRecent": true,
    "risk": "review",
    "category": "Minor version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: v1.20.0.",
    "githubReleaseTitle": "v1.20.0",
    "githubReleaseUrl": "https://github.com/axios/axios/releases/tag/v1.20.0",
    "githubReleaseTag": "v1.20.0",
    "githubReleasePublishedAt": "2026-08-24T13:40:40Z",
    "releaseNotesExcerpt": "v1.20.0 - August 19, 2026 This release hardens runtime option handling, adds RFC 9110 status-code aliases, fixes Node.js and XHR reliability issues, and refreshes project tooling and documentation. Breaking Changes & Deprecations HTTP Status Naming: Added ContentTooLarge (413) an",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/axios/1.20.0",
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
        "href": "https://github.com/axios/axios/releases/tag/v1.20.0"
      }
    ]
  },
  {
    "id": "msw-2-15-0",
    "packageName": "msw",
    "packageSlug": "msw",
    "description": "API mocking library",
    "oldVersion": "2.14.7",
    "newVersion": "2.15.0",
    "releaseDate": "2026-07-08",
    "publishedAgo": "published 70 days ago",
    "isRecent": false,
    "risk": "review",
    "category": "Minor version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Minor version release detected with no OSV match.",
    "whyThisMatters": "Minor updates are often safe but can still change defaults or transitive behavior.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "Review if used. Batch with normal dependency maintenance. GitHub release notes were found for review.",
    "whatChanged": "GitHub release note found: v2.15.0.",
    "githubReleaseTitle": "v2.15.0",
    "githubReleaseUrl": "https://github.com/mswjs/msw/releases/tag/v2.15.0",
    "githubReleaseTag": "v2.15.0",
    "githubReleasePublishedAt": "2026-07-08T01:43:13Z",
    "releaseNotesExcerpt": "v2.15.0 (2026-07-08) Features **sse:** invoke finalize on response stream end (#2741) (7fae0cc0954b20c739ae8e95a24eefc8a78710e8) @kettanaito",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/msw/2.15.0",
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
        "href": "https://github.com/mswjs/msw/releases/tag/v2.15.0"
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
    "publishedAgo": "published 109 days ago",
    "isRecent": false,
    "risk": "review",
    "category": "Minor version",
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
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
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
    "id": "reduxjs-toolkit-2-12-0",
    "packageName": "@reduxjs/toolkit",
    "packageSlug": "reduxjs-toolkit",
    "description": "Redux application toolkit",
    "oldVersion": "2.11.2",
    "newVersion": "2.12.0",
    "releaseDate": "2026-05-15",
    "publishedAgo": "published 124 days ago",
    "isRecent": false,
    "risk": "review",
    "category": "Minor version",
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
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
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
    "id": "emotion-react-11-14-0",
    "packageName": "@emotion/react",
    "packageSlug": "emotion-react",
    "description": "CSS-in-JS styling",
    "oldVersion": "11.13.5",
    "newVersion": "11.14.0",
    "releaseDate": "2024-12-09",
    "publishedAgo": "published 1 year ago",
    "isRecent": false,
    "risk": "review",
    "category": "Minor version",
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
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
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
    "id": "npm-run-all-4-1-5",
    "packageName": "npm-run-all",
    "packageSlug": "npm-run-all",
    "description": "Script runner",
    "oldVersion": "4.1.4",
    "newVersion": "4.1.5",
    "releaseDate": "2018-11-24",
    "publishedAgo": "published 7 years ago",
    "isRecent": false,
    "risk": "review",
    "category": "Release-note review",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Release notes mention security language, but no OSV or CVE match was found.",
    "whyThisMatters": "Security wording in release notes is an unverified signal until an OSV advisory or CVE confirms it.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "Review if used. Confirm against OSV and CVE before treating this as a security fix.",
    "whatChanged": "GitHub release note found: v4.1.5.",
    "githubReleaseTitle": "v4.1.5",
    "githubReleaseUrl": "https://github.com/mysticatea/npm-run-all/releases/tag/v4.1.5",
    "githubReleaseTag": "v4.1.5",
    "githubReleasePublishedAt": "2018-11-24T14:04:46Z",
    "releaseNotesExcerpt": "Bug fixes 52eaf86242ba408dedd015f53ca7ca368f25a026...1b41ac569987c96e224f940ff59f9699322c7824 switched ps-tree package to pidtree package for security reason.",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
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
    "id": "prettier-3-9-7",
    "packageName": "prettier",
    "packageSlug": "prettier",
    "description": "Code formatter",
    "oldVersion": "3.9.6",
    "newVersion": "3.9.7",
    "releaseDate": "2026-09-16",
    "publishedAgo": "published today",
    "isRecent": true,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Developer tooling, type checking, and code-quality gates.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: 3.9.7.",
    "githubReleaseTitle": "3.9.7",
    "githubReleaseUrl": "https://github.com/prettier/prettier/releases/tag/3.9.7",
    "githubReleaseTag": "3.9.7",
    "githubReleasePublishedAt": "2026-09-16T08:27:53Z",
    "releaseNotesExcerpt": "Support Angular 22.2 Fix regressions in v3.9 Changelog",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/prettier/3.9.7",
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
        "href": "https://github.com/prettier/prettier/releases/tag/3.9.7"
      }
    ]
  },
  {
    "id": "tanstack-react-query-5-103-1",
    "packageName": "@tanstack/react-query",
    "packageSlug": "tanstack-react-query",
    "description": "Data fetching for React",
    "oldVersion": "5.103.0",
    "newVersion": "5.103.1",
    "releaseDate": "2026-09-16",
    "publishedAgo": "published today",
    "isRecent": true,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "React applications, component libraries, and frontend teams using React release workflows.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: @tanstack/vue-query@5.103.1.",
    "githubReleaseTitle": "@tanstack/vue-query@5.103.1",
    "githubReleaseUrl": "https://github.com/TanStack/query/releases/tag/%40tanstack/vue-query%405.103.1",
    "githubReleaseTag": "@tanstack/vue-query@5.103.1",
    "githubReleasePublishedAt": "2026-09-16T15:00:42Z",
    "releaseNotesExcerpt": "Patch Changes Updated dependencies \\[8330b2f, 3212966]: - @tanstack/query-core@5.103.1",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/tanstack-react-query/5.103.1",
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
        "href": "https://github.com/TanStack/query/releases/tag/%40tanstack/vue-query%405.103.1"
      }
    ]
  },
  {
    "id": "react-router-dom-7-18-4",
    "packageName": "react-router-dom",
    "packageSlug": "react-router-dom",
    "description": "Declarative routing for React",
    "oldVersion": "7.18.3",
    "newVersion": "7.18.4",
    "releaseDate": "2026-09-15",
    "publishedAgo": "published 1 day ago",
    "isRecent": true,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "React applications, component libraries, and frontend teams using React release workflows.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v7.18.4.",
    "githubReleaseTitle": "v7.18.4",
    "githubReleaseUrl": "https://github.com/remix-run/react-router/releases/tag/react-router%407.18.4",
    "githubReleaseTag": "react-router@7.18.4",
    "githubReleasePublishedAt": "2026-09-15T15:05:10Z",
    "releaseNotesExcerpt": "See the changelog for release notes: https://github.com/remix-run/react-router/blob/v7/CHANGELOG.md#v7184",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/react-router-dom/7.18.4",
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
        "href": "https://github.com/remix-run/react-router/releases/tag/react-router%407.18.4"
      }
    ]
  },
  {
    "id": "vitest-5-0-1",
    "packageName": "vitest",
    "packageSlug": "vitest",
    "description": "Vite-native testing",
    "oldVersion": "5.0.0",
    "newVersion": "5.0.1",
    "releaseDate": "2026-09-15",
    "publishedAgo": "published 1 day ago",
    "isRecent": true,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Test suites, browser automation, and release validation workflows.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v5.0.1.",
    "githubReleaseTitle": "v5.0.1",
    "githubReleaseUrl": "https://github.com/vitest-dev/vitest/releases/tag/v5.0.1",
    "githubReleaseTag": "v5.0.1",
    "githubReleasePublishedAt": "2026-09-15T08:43:24Z",
    "releaseNotesExcerpt": "&nbsp;&nbsp;&nbsp; Features **ui**: - Move trace attempts selector to viewer header &nbsp;-&nbsp; by @hi-ogawa, **Hiroshi Ogawa** and **Codex** in https://github.com/vitest-dev/vitest/issues/11189 <samp>(5dc4b)</samp> - Add focused trace view layout mode &nbsp;-&nbsp; by @hi-ogaw",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/vitest/5.0.1",
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
        "href": "https://github.com/vitest-dev/vitest/releases/tag/v5.0.1"
      }
    ]
  },
  {
    "id": "autoprefixer-10-6-1",
    "packageName": "autoprefixer",
    "packageSlug": "autoprefixer",
    "description": "CSS vendor prefixing",
    "oldVersion": "10.6.0",
    "newVersion": "10.6.1",
    "releaseDate": "2026-09-15",
    "publishedAgo": "published 1 day ago",
    "isRecent": true,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: 10.6.1.",
    "githubReleaseTitle": "10.6.1",
    "githubReleaseUrl": "https://github.com/postcss/autoprefixer/releases/tag/10.6.1",
    "githubReleaseTag": "10.6.1",
    "githubReleasePublishedAt": "2026-09-15T13:44:10Z",
    "releaseNotesExcerpt": "Fixed grid gap set with the row-gap and column-gap longhands (by dualfroz).",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/autoprefixer/10.6.1",
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
        "href": "https://github.com/postcss/autoprefixer/releases/tag/10.6.1"
      }
    ]
  },
  {
    "id": "rollup-4-63-3",
    "packageName": "rollup",
    "packageSlug": "rollup",
    "description": "Module bundler",
    "oldVersion": "4.63.2",
    "newVersion": "4.63.3",
    "releaseDate": "2026-09-14",
    "publishedAgo": "published 2 days ago",
    "isRecent": true,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend build pipelines, monorepos, and CI jobs.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v4.63.3.",
    "githubReleaseTitle": "v4.63.3",
    "githubReleaseUrl": "https://github.com/rollup/rollup/releases/tag/v4.63.3",
    "githubReleaseTag": "v4.63.3",
    "githubReleasePublishedAt": "2026-09-14T12:47:02Z",
    "releaseNotesExcerpt": "4.63.3 _2026-09-14_ Bug Fixes Make sure that the internal shims for basename and extname in the browser build fully match NodeJS (#6473) Always report and recover from failures on invalidation in watch mode (#6506) Respect windows line terminators when tree-shaking in situations ",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/rollup/4.63.3",
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
        "href": "https://github.com/rollup/rollup/releases/tag/v4.63.3"
      }
    ]
  },
  {
    "id": "turbo-2-10-13",
    "packageName": "turbo",
    "packageSlug": "turbo",
    "description": "Monorepo build system",
    "oldVersion": "2.10.12",
    "newVersion": "2.10.13",
    "releaseDate": "2026-09-14",
    "publishedAgo": "published 2 days ago",
    "isRecent": true,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend build pipelines, monorepos, and CI jobs.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: Turborepo v2.10.13.",
    "githubReleaseTitle": "Turborepo v2.10.13",
    "githubReleaseUrl": "https://github.com/vercel/turborepo/releases/tag/v2.10.13",
    "githubReleaseTag": "v2.10.13",
    "githubReleasePublishedAt": "2026-09-14T16:36:19Z",
    "releaseNotesExcerpt": "<!-- Release notes generated using configuration in .github/release.yml at v2.10.13 --> What's Changed Changelog chore: Release Turborepo 2.10.12 by @github-actions[bot] in https://github.com/vercel/turborepo/pull/13844 fix: Remove unsupported remote cache environment variable by",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/turbo/2.10.13",
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
        "href": "https://github.com/vercel/turborepo/releases/tag/v2.10.13"
      }
    ]
  },
  {
    "id": "zod-4-6-5",
    "packageName": "zod",
    "packageSlug": "zod",
    "description": "Schema validation",
    "oldVersion": "4.6.4",
    "newVersion": "4.6.5",
    "releaseDate": "2026-09-13",
    "publishedAgo": "published 2 days ago",
    "isRecent": true,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v4.6.5.",
    "githubReleaseTitle": "v4.6.5",
    "githubReleaseUrl": "https://github.com/colinhacks/zod/releases/tag/v4.6.5",
    "githubReleaseTag": "v4.6.5",
    "githubReleasePublishedAt": "2026-09-13T23:25:34Z",
    "releaseNotesExcerpt": "Commits: d2b135cfb7a3582b9eb515756b9166bcb9521f4a docs: add the 4.6.x patch highlights to the 4.6 post f1448f7cee00df9fe1e9ad84a000aa1828cc8bc1 docs: fold the 4.6.x patch highlights into the 4.6 post's own sections de65a5cb39ed22a507fac935788f718fa88d104f docs: lead the propertie",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/zod/4.6.5",
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
        "href": "https://github.com/colinhacks/zod/releases/tag/v4.6.5"
      }
    ]
  },
  {
    "id": "happy-dom-20-14-5",
    "packageName": "happy-dom",
    "packageSlug": "happy-dom",
    "description": "Browser environment for testing",
    "oldVersion": "20.14.4",
    "newVersion": "20.14.5",
    "releaseDate": "2026-09-12",
    "publishedAgo": "published 4 days ago",
    "isRecent": true,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v20.14.5.",
    "githubReleaseTitle": "v20.14.5",
    "githubReleaseUrl": "https://github.com/capricorn86/happy-dom/releases/tag/v20.14.5",
    "githubReleaseTag": "v20.14.5",
    "githubReleasePublishedAt": "2026-09-12T00:05:16Z",
    "releaseNotesExcerpt": ":construction_worker_man: Patch fixes - Preserve character references in comment data - By **@hampustagerud** in task #2409",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/happy-dom/20.14.5",
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
        "href": "https://github.com/capricorn86/happy-dom/releases/tag/v20.14.5"
      }
    ]
  },
  {
    "id": "sass-1-104-1",
    "packageName": "sass",
    "packageSlug": "sass",
    "description": "CSS preprocessor",
    "oldVersion": "1.104.0",
    "newVersion": "1.104.1",
    "releaseDate": "2026-09-12",
    "publishedAgo": "published 4 days ago",
    "isRecent": true,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: Dart Sass 1.104.1.",
    "githubReleaseTitle": "Dart Sass 1.104.1",
    "githubReleaseUrl": "https://github.com/sass/dart-sass/releases/tag/1.104.1",
    "githubReleaseTag": "1.104.1",
    "githubReleasePublishedAt": "2026-09-12T07:49:38Z",
    "releaseNotesExcerpt": "To install Sass 1.104.1, download one of the packages below and [add it to your PATH][], or see [the Sass website][] for full installation instructions. [add it to your PATH]: https://katiek2.github.io/path-doc/ [the Sass website]: https://sass-lang.com/install Changes Fix a bug ",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/sass/1.104.1",
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
        "href": "https://github.com/sass/dart-sass/releases/tag/1.104.1"
      }
    ]
  },
  {
    "id": "next-16-3-5",
    "packageName": "next",
    "packageSlug": "next",
    "description": "React framework",
    "oldVersion": "16.3.4",
    "newVersion": "16.3.5",
    "releaseDate": "2026-09-11",
    "publishedAgo": "published 5 days ago",
    "isRecent": true,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v16.3.5.",
    "githubReleaseTitle": "v16.3.5",
    "githubReleaseUrl": "https://github.com/vercel/next.js/releases/tag/v16.3.5",
    "githubReleaseTag": "v16.3.5",
    "githubReleasePublishedAt": "2026-09-11T19:15:50Z",
    "releaseNotesExcerpt": "The following bug fixes have been backported. It does not include all pending features/changes on canary. next/image: Skip 0-byte entries when initializing disk LRU cache (#98185) next/image: Reject empty images when reading/writing to the disk cache (#98186) Emit whole-app serve",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/next/16.3.5",
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
        "href": "https://github.com/vercel/next.js/releases/tag/v16.3.5"
      }
    ]
  },
  {
    "id": "babel-core-8-0-5",
    "packageName": "@babel/core",
    "packageSlug": "babel-core",
    "description": "JavaScript compiler core",
    "oldVersion": "8.0.1",
    "newVersion": "8.0.5",
    "releaseDate": "2026-09-10",
    "publishedAgo": "published 5 days ago",
    "isRecent": true,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v8.0.5.",
    "githubReleaseTitle": "v8.0.5",
    "githubReleaseUrl": "https://github.com/babel/babel/releases/tag/v8.0.5",
    "githubReleaseTag": "v8.0.5",
    "githubReleasePublishedAt": "2026-09-10T21:15:35Z",
    "releaseNotesExcerpt": "v8.0.5 (2026-09-10) Thanks @drubetti, @jibin7jose, @joelle-a-dev, @journey-ad, @Kjubikstronk, @MatteoGabriele, and @zhangli091011 for your first PRs! :eyeglasses: Spec Compliance babel-parser * #18218 fix(parser): do not form html entity for invalid codepoint (@JLHwung) :bug: Bug",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/babel-core/8.0.5",
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
        "href": "https://github.com/babel/babel/releases/tag/v8.0.5"
      }
    ]
  },
  {
    "id": "babel-preset-env-8-0-5",
    "packageName": "@babel/preset-env",
    "packageSlug": "babel-preset-env",
    "description": "Babel environment preset",
    "oldVersion": "8.0.2",
    "newVersion": "8.0.5",
    "releaseDate": "2026-09-10",
    "publishedAgo": "published 5 days ago",
    "isRecent": true,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v8.0.5.",
    "githubReleaseTitle": "v8.0.5",
    "githubReleaseUrl": "https://github.com/babel/babel/releases/tag/v8.0.5",
    "githubReleaseTag": "v8.0.5",
    "githubReleasePublishedAt": "2026-09-10T21:15:35Z",
    "releaseNotesExcerpt": "v8.0.5 (2026-09-10) Thanks @drubetti, @jibin7jose, @joelle-a-dev, @journey-ad, @Kjubikstronk, @MatteoGabriele, and @zhangli091011 for your first PRs! :eyeglasses: Spec Compliance babel-parser * #18218 fix(parser): do not form html entity for invalid codepoint (@JLHwung) :bug: Bug",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag. Cached from an earlier generator run.",
    "route": "/package/babel-preset-env/8.0.5",
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
        "href": "https://github.com/babel/babel/releases/tag/v8.0.5"
      }
    ]
  },
  {
    "id": "angular-core-22-1-6",
    "packageName": "@angular/core",
    "packageSlug": "angular-core",
    "description": "Angular framework core",
    "oldVersion": "22.1.5",
    "newVersion": "22.1.6",
    "releaseDate": "2026-09-09",
    "publishedAgo": "published 6 days ago",
    "isRecent": true,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: 22.1.6.",
    "githubReleaseTitle": "22.1.6",
    "githubReleaseUrl": "https://github.com/angular/angular/releases/tag/v22.1.6",
    "githubReleaseTag": "v22.1.6",
    "githubReleasePublishedAt": "2026-09-09T20:10:26Z",
    "releaseNotesExcerpt": "compiler | Commit | Description | | -- | -- | | | namespace @property declarations | compiler-cli | Commit | Description | | -- | -- | | | do not flag callable objects with zero parameters in uninvoked track function check | core | Commit | Description | | -- | -- | | | apply Ski",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/angular-core/22.1.6",
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
        "href": "https://github.com/angular/angular/releases/tag/v22.1.6"
      }
    ]
  },
  {
    "id": "astro-7-3-2",
    "packageName": "astro",
    "packageSlug": "astro",
    "description": "Content-focused web framework",
    "oldVersion": "7.3.1",
    "newVersion": "7.3.2",
    "releaseDate": "2026-09-08",
    "publishedAgo": "published 8 days ago",
    "isRecent": true,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: astro@7.3.2.",
    "githubReleaseTitle": "astro@7.3.2",
    "githubReleaseUrl": "https://github.com/withastro/astro/releases/tag/astro%407.3.2",
    "githubReleaseTag": "astro@7.3.2",
    "githubReleasePublishedAt": "2026-09-08T15:50:02Z",
    "releaseNotesExcerpt": "Patch Changes #17896 a548223 Thanks @matthewp! - Fixes <script>/<style> rendering in MDX so that only literal content (including content injected by remark/rehype plugins) is treated as trusted markup. A dynamic value passed as a <script>/<style> child (e.g. <script>{value}</scri",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/astro/7.3.2",
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
        "href": "https://github.com/withastro/astro/releases/tag/astro%407.3.2"
      }
    ]
  },
  {
    "id": "swc-core-1-16-2",
    "packageName": "@swc/core",
    "packageSlug": "swc-core",
    "description": "JavaScript and TypeScript compiler",
    "oldVersion": "1.16.1",
    "newVersion": "1.16.2",
    "releaseDate": "2026-09-04",
    "publishedAgo": "published 11 days ago",
    "isRecent": true,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v1.16.2.",
    "githubReleaseTitle": "v1.16.2",
    "githubReleaseUrl": "https://github.com/swc-project/swc/releases/tag/v1.16.2",
    "githubReleaseTag": "v1.16.2",
    "githubReleasePublishedAt": "2026-09-04T19:09:30Z",
    "releaseNotesExcerpt": "",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/swc-core/1.16.2",
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
        "href": "https://github.com/swc-project/swc/releases/tag/v1.16.2"
      }
    ]
  },
  {
    "id": "postcss-8-5-28",
    "packageName": "postcss",
    "packageSlug": "postcss",
    "description": "CSS transformation",
    "oldVersion": "8.5.27",
    "newVersion": "8.5.28",
    "releaseDate": "2026-09-03",
    "publishedAgo": "published 13 days ago",
    "isRecent": true,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: 8.5.28.",
    "githubReleaseTitle": "8.5.28",
    "githubReleaseUrl": "https://github.com/postcss/postcss/releases/tag/8.5.28",
    "githubReleaseTag": "8.5.28",
    "githubReleasePublishedAt": "2026-09-03T15:05:00Z",
    "releaseNotesExcerpt": "Fixes types regression.",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/postcss/8.5.28",
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
        "href": "https://github.com/postcss/postcss/releases/tag/8.5.28"
      }
    ]
  },
  {
    "id": "less-4-9-1",
    "packageName": "less",
    "packageSlug": "less",
    "description": "CSS preprocessor",
    "oldVersion": "4.9.0",
    "newVersion": "4.9.1",
    "releaseDate": "2026-09-02",
    "publishedAgo": "published 13 days ago",
    "isRecent": true,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: Release v4.9.1.",
    "githubReleaseTitle": "Release v4.9.1",
    "githubReleaseUrl": "https://github.com/less/less.js/releases/tag/v4.9.1",
    "githubReleaseTag": "v4.9.1",
    "githubReleasePublishedAt": "2026-09-02T20:03:24Z",
    "releaseNotesExcerpt": "Changes See CHANGELOG.md for details. Installation",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/less/4.9.1",
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
        "href": "https://github.com/less/less.js/releases/tag/v4.9.1"
      }
    ]
  },
  {
    "id": "jest-30-5-1",
    "packageName": "jest",
    "packageSlug": "jest",
    "description": "JavaScript testing",
    "oldVersion": "30.5.0",
    "newVersion": "30.5.1",
    "releaseDate": "2026-09-01",
    "publishedAgo": "published 15 days ago",
    "isRecent": true,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Test suites, browser automation, and release validation workflows.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v30.5.1.",
    "githubReleaseTitle": "v30.5.1",
    "githubReleaseUrl": "https://github.com/jestjs/jest/releases/tag/v30.5.1",
    "githubReleaseTag": "v30.5.1",
    "githubReleasePublishedAt": "2026-09-01T07:58:26Z",
    "releaseNotesExcerpt": "Fixes [jest-config] Don't warn about global-only options in the config that supplies the global config - the root config a project resolves to, or the first entry of --projects when no root config is passed (#16411) [jest-config, jest-types] Stop accepting reporters, coverageRepo",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/jest/30.5.1",
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
        "href": "https://github.com/jestjs/jest/releases/tag/v30.5.1"
      }
    ]
  },
  {
    "id": "vitejs-plugin-react-6-1-1",
    "packageName": "@vitejs/plugin-react",
    "packageSlug": "vitejs-plugin-react",
    "description": "Vite React plugin",
    "oldVersion": "6.1.0",
    "newVersion": "6.1.1",
    "releaseDate": "2026-08-28",
    "publishedAgo": "published 19 days ago",
    "isRecent": true,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "React applications, component libraries, and frontend teams using React release workflows.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: plugin-react@6.1.1.",
    "githubReleaseTitle": "plugin-react@6.1.1",
    "githubReleaseUrl": "https://github.com/vitejs/vite-plugin-react/releases/tag/plugin-react%406.1.1",
    "githubReleaseTag": "plugin-react@6.1.1",
    "githubReleasePublishedAt": "2026-08-28T03:30:01Z",
    "releaseNotesExcerpt": "Add compiler.logDiagnostics option Recoverable React Compiler diagnostics are no longer logged by default. Set compiler.logDiagnostics to true to log them through Vite. Fatal diagnostics are always logged and fail the transform. Respect environment sourcemap option for React Comp",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/vitejs-plugin-react/6.1.1",
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
        "href": "https://github.com/vitejs/vite-plugin-react/releases/tag/plugin-react%406.1.1"
      }
    ]
  },
  {
    "id": "vue-3-5-42",
    "packageName": "vue",
    "packageSlug": "vue",
    "description": "Progressive JavaScript framework",
    "oldVersion": "3.5.41",
    "newVersion": "3.5.42",
    "releaseDate": "2026-08-27",
    "publishedAgo": "published 20 days ago",
    "isRecent": true,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v3.5.42.",
    "githubReleaseTitle": "v3.5.42",
    "githubReleaseUrl": "https://github.com/vuejs/core/releases/tag/v3.5.42",
    "githubReleaseTag": "v3.5.42",
    "githubReleasePublishedAt": "2026-08-27T05:47:42Z",
    "releaseNotesExcerpt": "For stable releases, please refer to CHANGELOG.md for details. For pre-releases, please refer to CHANGELOG.md of the minor branch.",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/vue/3.5.42",
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
        "href": "https://github.com/vuejs/core/releases/tag/v3.5.42"
      }
    ]
  },
  {
    "id": "testing-library-react-16-3-3",
    "packageName": "@testing-library/react",
    "packageSlug": "testing-library-react",
    "description": "React component testing",
    "oldVersion": "16.3.2",
    "newVersion": "16.3.3",
    "releaseDate": "2026-08-27",
    "publishedAgo": "published 19 days ago",
    "isRecent": true,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "React applications, component libraries, and frontend teams using React release workflows.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v16.3.3.",
    "githubReleaseTitle": "v16.3.3",
    "githubReleaseUrl": "https://github.com/testing-library/react-testing-library/releases/tag/v16.3.3",
    "githubReleaseTag": "v16.3.3",
    "githubReleasePublishedAt": "2026-08-27T17:40:24Z",
    "releaseNotesExcerpt": "16.3.3 (2026-08-27) Bug Fixes Avoid act() re-entrant when dispatching events (#1468) (20ce75f)",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/testing-library-react/16.3.3",
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
        "href": "https://github.com/testing-library/react-testing-library/releases/tag/v16.3.3"
      }
    ]
  },
  {
    "id": "immer-11-1-18",
    "packageName": "immer",
    "packageSlug": "immer",
    "description": "Immutable state updates",
    "oldVersion": "11.1.17",
    "newVersion": "11.1.18",
    "releaseDate": "2026-08-19",
    "publishedAgo": "published 28 days ago",
    "isRecent": true,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v11.1.18.",
    "githubReleaseTitle": "v11.1.18",
    "githubReleaseUrl": "https://github.com/immerjs/immer/releases/tag/v11.1.18",
    "githubReleaseTag": "v11.1.18",
    "githubReleasePublishedAt": "2026-08-19T07:24:18Z",
    "releaseNotesExcerpt": "11.1.18 (2026-08-19) Bug Fixes remove global var Iterator declaration conflicting with ESNext lib (#1290) (b00474e), closes #1273",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/immer/11.1.18",
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
        "href": "https://github.com/immerjs/immer/releases/tag/v11.1.18"
      }
    ]
  },
  {
    "id": "uuid-14-0-2",
    "packageName": "uuid",
    "packageSlug": "uuid",
    "description": "UUID generator",
    "oldVersion": "14.0.1",
    "newVersion": "14.0.2",
    "releaseDate": "2026-08-18",
    "publishedAgo": "published 28 days ago",
    "isRecent": true,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v14.0.2.",
    "githubReleaseTitle": "v14.0.2",
    "githubReleaseUrl": "https://github.com/uuidjs/uuid/releases/tag/v14.0.2",
    "githubReleaseTag": "v14.0.2",
    "githubReleasePublishedAt": "2026-08-18T18:19:21Z",
    "releaseNotesExcerpt": "14.0.2 (2026-08-18) Bug Fixes **v1:** carry nsecs overflow into the timestamp's high bits (#972) (6adcc1d) **v1:** set the multicast bit on v1Bytes's own randomly-generated node (#973) (b1da338) **v7:** align default seq formula in v7Bytes with updateV7State (#965) (a67db57)",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/uuid/14.0.2",
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
        "href": "https://github.com/uuidjs/uuid/releases/tag/v14.0.2"
      }
    ]
  },
  {
    "id": "solid-js-1-9-15",
    "packageName": "solid-js",
    "packageSlug": "solid-js",
    "description": "Reactive UI library",
    "oldVersion": "1.9.14",
    "newVersion": "1.9.15",
    "releaseDate": "2026-08-17",
    "publishedAgo": "published 29 days ago",
    "isRecent": true,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "Patch solid-js 1.9.15 release detected with no OSV match.",
    "githubReleaseTitle": "",
    "githubReleaseUrl": "",
    "githubReleaseTag": "",
    "githubReleasePublishedAt": "",
    "releaseNotesExcerpt": "",
    "releaseNotesStatus": "No GitHub release matched this exact npm version tag; release notes are not attributed to this version.",
    "route": "/package/solid-js/1.9.15",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/solid-js"
      },
      {
        "label": "Repository",
        "href": "https://github.com/solidjs/solid"
      }
    ]
  },
  {
    "id": "dayjs-1-11-23",
    "packageName": "dayjs",
    "packageSlug": "dayjs",
    "description": "Date utilities",
    "oldVersion": "1.11.22",
    "newVersion": "1.11.23",
    "releaseDate": "2026-08-17",
    "publishedAgo": "published 30 days ago",
    "isRecent": true,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v1.11.23.",
    "githubReleaseTitle": "v1.11.23",
    "githubReleaseUrl": "https://github.com/iamkun/dayjs/releases/tag/v1.11.23",
    "githubReleaseTag": "v1.11.23",
    "githubReleasePublishedAt": "2026-08-17T11:50:26Z",
    "releaseNotesExcerpt": "1.11.23 (2026-08-17) Bug Fixes **plugin:** timezone plugin prevent RangeError for invalid Day.js values (#3180) (dad46e6) **plugin:** timezone plugin prevent RangeError for invalid Day.js values (#3180) (#3181) (2a3785f)",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/dayjs/1.11.23",
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
        "href": "https://github.com/iamkun/dayjs/releases/tag/v1.11.23"
      }
    ]
  },
  {
    "id": "styled-components-6-5-3",
    "packageName": "styled-components",
    "packageSlug": "styled-components",
    "description": "CSS-in-JS styling",
    "oldVersion": "6.5.2",
    "newVersion": "6.5.3",
    "releaseDate": "2026-08-15",
    "publishedAgo": "published 32 days ago",
    "isRecent": false,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: styled-components@6.5.3.",
    "githubReleaseTitle": "styled-components@6.5.3",
    "githubReleaseUrl": "https://github.com/styled-components/styled-components/releases/tag/styled-components%406.5.3",
    "githubReleaseTag": "styled-components@6.5.3",
    "githubReleasePublishedAt": "2026-08-15T15:09:45Z",
    "releaseNotesExcerpt": "Patch Changes 3470387: Fix TypeScript errors in projects that augment React HTML props with a data-* template-literal index signature.",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/styled-components/6.5.3",
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
        "href": "https://github.com/styled-components/styled-components/releases/tag/styled-components%406.5.3"
      }
    ]
  },
  {
    "id": "zustand-5-0-15",
    "packageName": "zustand",
    "packageSlug": "zustand",
    "description": "React state management",
    "oldVersion": "5.0.14",
    "newVersion": "5.0.15",
    "releaseDate": "2026-08-13",
    "publishedAgo": "published 34 days ago",
    "isRecent": false,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v5.0.15.",
    "githubReleaseTitle": "v5.0.15",
    "githubReleaseUrl": "https://github.com/pmndrs/zustand/releases/tag/v5.0.15",
    "githubReleaseTag": "v5.0.15",
    "githubReleasePublishedAt": "2026-08-13T00:36:16Z",
    "releaseNotesExcerpt": "Fix some issues in devtools and persist middleware. What's Changed fix(devtools): correct V8 stack regex when source path contains spaces by @dai-shi with @Copilot in https://github.com/pmndrs/zustand/pull/3531 fix(persist): clearStorage() should invalidate concurrent async rehyd",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/zustand/5.0.15",
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
        "href": "https://github.com/pmndrs/zustand/releases/tag/v5.0.15"
      }
    ]
  },
  {
    "id": "swr-2-5-1",
    "packageName": "swr",
    "packageSlug": "swr",
    "description": "React data fetching",
    "oldVersion": "2.5.0",
    "newVersion": "2.5.1",
    "releaseDate": "2026-08-12",
    "publishedAgo": "published 35 days ago",
    "isRecent": false,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v2.5.1.",
    "githubReleaseTitle": "v2.5.1",
    "githubReleaseUrl": "https://github.com/vercel/swr/releases/tag/v2.5.1",
    "githubReleaseTag": "v2.5.1",
    "githubReleasePublishedAt": "2026-08-12T14:39:02Z",
    "releaseNotesExcerpt": "Patches fix: hydrate cacheData for hooks without a fetcher by @yongsk0066 in https://github.com/vercel/swr/pull/4293 fix: revalidate suspense cacheData on remount by @javascripter in https://github.com/vercel/swr/pull/4312 fix: clean up completed subscription state by @iroiro147 ",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/swr/2.5.1",
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
        "href": "https://github.com/vercel/swr/releases/tag/v2.5.1"
      }
    ]
  },
  {
    "id": "testing-library-jest-dom-7-0-1",
    "packageName": "@testing-library/jest-dom",
    "packageSlug": "testing-library-jest-dom",
    "description": "DOM testing matchers",
    "oldVersion": "7.0.0",
    "newVersion": "7.0.1",
    "releaseDate": "2026-08-09",
    "publishedAgo": "published 37 days ago",
    "isRecent": false,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v7.0.1.",
    "githubReleaseTitle": "v7.0.1",
    "githubReleaseUrl": "https://github.com/testing-library/jest-dom/releases/tag/v7.0.1",
    "githubReleaseTag": "v7.0.1",
    "githubReleasePublishedAt": "2026-08-09T23:42:27Z",
    "releaseNotesExcerpt": "7.0.1 (2026-08-09) Bug Fixes declare vitest as an optional peer dependency (#733) (3782c78)",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/testing-library-jest-dom/7.0.1",
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
        "href": "https://github.com/testing-library/jest-dom/releases/tag/v7.0.1"
      }
    ]
  },
  {
    "id": "esbuild-0-28-2",
    "packageName": "esbuild",
    "packageSlug": "esbuild",
    "description": "JavaScript bundler",
    "oldVersion": "0.28.1",
    "newVersion": "0.28.2",
    "releaseDate": "2026-08-08",
    "publishedAgo": "published 38 days ago",
    "isRecent": false,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend build pipelines, monorepos, and CI jobs.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v0.28.2.",
    "githubReleaseTitle": "v0.28.2",
    "githubReleaseUrl": "https://github.com/evanw/esbuild/releases/tag/v0.28.2",
    "githubReleaseTag": "v0.28.2",
    "githubReleasePublishedAt": "2026-08-08T19:58:58Z",
    "releaseNotesExcerpt": "Fix tree shaking bug due to TypeScript import alias (#4507) This release fixes a bug that could cause esbuild to incorrectly tree-shake imports that are used in a TypeScript type alias under certain circumstances. Affected code uses a TypeScript-specific import assignment and loo",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/esbuild/0.28.2",
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
        "href": "https://github.com/evanw/esbuild/releases/tag/v0.28.2"
      }
    ]
  },
  {
    "id": "ws-8-21-3",
    "packageName": "ws",
    "packageSlug": "ws",
    "description": "WebSocket implementation",
    "oldVersion": "8.21.2",
    "newVersion": "8.21.3",
    "releaseDate": "2026-08-07",
    "publishedAgo": "published 40 days ago",
    "isRecent": false,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: 8.21.3.",
    "githubReleaseTitle": "8.21.3",
    "githubReleaseUrl": "https://github.com/websockets/ws/releases/tag/8.21.3",
    "githubReleaseTag": "8.21.3",
    "githubReleasePublishedAt": "2026-08-06T16:38:20Z",
    "releaseNotesExcerpt": "Bug fixes The server now correctly rejects permessage-deflate offers if the incoming client_max_window_bits parameter value is smaller than its configured clientMaxWindowBits (e97a20ea).",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/ws/8.21.3",
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
        "href": "https://github.com/websockets/ws/releases/tag/8.21.3"
      }
    ]
  },
  {
    "id": "nuxt-4-5-2",
    "packageName": "nuxt",
    "packageSlug": "nuxt",
    "description": "Vue application framework",
    "oldVersion": "4.5.1",
    "newVersion": "4.5.2",
    "releaseDate": "2026-08-05",
    "publishedAgo": "published 42 days ago",
    "isRecent": false,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v4.5.2.",
    "githubReleaseTitle": "v4.5.2",
    "githubReleaseUrl": "https://github.com/nuxt/nuxt/releases/tag/v4.5.2",
    "githubReleaseTag": "v4.5.2",
    "githubReleasePublishedAt": "2026-08-05T16:19:44Z",
    "releaseNotesExcerpt": "> 4.5.2 is the next patch release. Changelog compare changes Performance **nuxt,kit:** Skip rewriting unchanged generated files (#35902) **kit,nuxt:** Use lazy imports to improve parsing speed (#35901) **vite:** Skip html entry probes in bare-import resolver (#35907) **nuxt:** Re",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/nuxt/4.5.2",
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
        "href": "https://github.com/nuxt/nuxt/releases/tag/v4.5.2"
      }
    ]
  },
  {
    "id": "nanoid-6-0-1",
    "packageName": "nanoid",
    "packageSlug": "nanoid",
    "description": "Compact unique ID generator",
    "oldVersion": "6.0.0",
    "newVersion": "6.0.1",
    "releaseDate": "2026-08-03",
    "publishedAgo": "published 44 days ago",
    "isRecent": false,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: 6.0.1.",
    "githubReleaseTitle": "6.0.1",
    "githubReleaseUrl": "https://github.com/ai/nanoid/releases/tag/6.0.1",
    "githubReleaseTag": "6.0.1",
    "githubReleasePublishedAt": "2026-08-03T10:43:38Z",
    "releaseNotesExcerpt": "Fixed docs.",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/nanoid/6.0.1",
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
        "href": "https://github.com/ai/nanoid/releases/tag/6.0.1"
      }
    ]
  },
  {
    "id": "radix-ui-react-dialog-1-1-23",
    "packageName": "@radix-ui/react-dialog",
    "packageSlug": "radix-ui-react-dialog",
    "description": "Accessible dialog primitive",
    "oldVersion": "1.1.22",
    "newVersion": "1.1.23",
    "releaseDate": "2026-07-24",
    "publishedAgo": "published 53 days ago",
    "isRecent": false,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "React applications, component libraries, and frontend teams using React release workflows.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "Patch @radix-ui/react-dialog 1.1.23 release detected with no OSV match.",
    "githubReleaseTitle": "",
    "githubReleaseUrl": "",
    "githubReleaseTag": "",
    "githubReleasePublishedAt": "",
    "releaseNotesExcerpt": "",
    "releaseNotesStatus": "No GitHub releases found for this repository.",
    "route": "/package/radix-ui-react-dialog/1.1.23",
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
    "id": "radix-ui-react-popover-1-1-23",
    "packageName": "@radix-ui/react-popover",
    "packageSlug": "radix-ui-react-popover",
    "description": "Accessible popover primitive",
    "oldVersion": "1.1.22",
    "newVersion": "1.1.23",
    "releaseDate": "2026-07-24",
    "publishedAgo": "published 53 days ago",
    "isRecent": false,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "React applications, component libraries, and frontend teams using React release workflows.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "Patch @radix-ui/react-popover 1.1.23 release detected with no OSV match.",
    "githubReleaseTitle": "",
    "githubReleaseUrl": "",
    "githubReleaseTag": "",
    "githubReleasePublishedAt": "",
    "releaseNotesExcerpt": "",
    "releaseNotesStatus": "No GitHub releases found for this repository.",
    "route": "/package/radix-ui-react-popover/1.1.23",
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
    "id": "tailwindcss-4-3-3",
    "packageName": "tailwindcss",
    "packageSlug": "tailwindcss",
    "description": "Utility-first CSS",
    "oldVersion": "4.3.2",
    "newVersion": "4.3.3",
    "releaseDate": "2026-07-16",
    "publishedAgo": "published 62 days ago",
    "isRecent": false,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v4.3.3.",
    "githubReleaseTitle": "v4.3.3",
    "githubReleaseUrl": "https://github.com/tailwindlabs/tailwindcss/releases/tag/v4.3.3",
    "githubReleaseTag": "v4.3.3",
    "githubReleasePublishedAt": "2026-07-16T11:55:08Z",
    "releaseNotesExcerpt": "Fixed Support --watch --poll[=ms] in @tailwindcss/cli when filesystem events are unreliable or unavailable (#20297) Canonicalization: match arbitrary hex colors against theme colors case-insensitively (e.g. bg-[#fff] and bg-[#FFF] bg-white) (#20298) Prevent Preflight from overrid",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/tailwindcss/4.3.3",
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
        "href": "https://github.com/tailwindlabs/tailwindcss/releases/tag/v4.3.3"
      }
    ]
  },
  {
    "id": "graphql-17-0-2",
    "packageName": "graphql",
    "packageSlug": "graphql",
    "description": "GraphQL JavaScript implementation",
    "oldVersion": "17.0.1",
    "newVersion": "17.0.2",
    "releaseDate": "2026-07-03",
    "publishedAgo": "published 75 days ago",
    "isRecent": false,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v17.0.2.",
    "githubReleaseTitle": "v17.0.2",
    "githubReleaseUrl": "https://github.com/graphql/graphql-js/releases/tag/v17.0.2",
    "githubReleaseTag": "v17.0.2",
    "githubReleasePublishedAt": "2026-07-03T06:28:41Z",
    "releaseNotesExcerpt": "v17.0.2 (2026-07-03) Bug Fix #4832 fix: detect default-value changes on input object fields (@spokodev) Polish #4829 fix(mapSchemaConfig): fix context for schema argument mapper (@yaacovCR) Committers: 2 null(@spokodev) Yaacov Rydzinski (@yaacovCR)",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/graphql/17.0.2",
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
        "href": "https://github.com/graphql/graphql-js/releases/tag/v17.0.2"
      }
    ]
  },
  {
    "id": "semver-7-8-5",
    "packageName": "semver",
    "packageSlug": "semver",
    "description": "Semantic version parsing",
    "oldVersion": "7.8.4",
    "newVersion": "7.8.5",
    "releaseDate": "2026-06-19",
    "publishedAgo": "published 88 days ago",
    "isRecent": false,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v7.8.5.",
    "githubReleaseTitle": "v7.8.5",
    "githubReleaseUrl": "https://github.com/npm/node-semver/releases/tag/v7.8.5",
    "githubReleaseTag": "v7.8.5",
    "githubReleasePublishedAt": "2026-06-19T18:32:05Z",
    "releaseNotesExcerpt": "7.8.5 (2026-06-19) Bug Fixes 9c8692a #878 include prereleases in tilde range lower bound with includePrerelease (#878) (@chatman-media)",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/semver/7.8.5",
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
        "href": "https://github.com/npm/node-semver/releases/tag/v7.8.5"
      }
    ]
  },
  {
    "id": "babel-preset-react-8-0-1",
    "packageName": "@babel/preset-react",
    "packageSlug": "babel-preset-react",
    "description": "Babel React preset",
    "oldVersion": "8.0.0",
    "newVersion": "8.0.1",
    "releaseDate": "2026-06-17",
    "publishedAgo": "published 91 days ago",
    "isRecent": false,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "React applications, component libraries, and frontend teams using React release workflows.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v8.0.1.",
    "githubReleaseTitle": "v8.0.1",
    "githubReleaseUrl": "https://github.com/babel/babel/releases/tag/v8.0.1",
    "githubReleaseTag": "v8.0.1",
    "githubReleasePublishedAt": "2026-06-17T09:57:09Z",
    "releaseNotesExcerpt": "v8.0.1 (2026-06-17) This release includes a breaking change that was in the Babel 8 migration guide's Getting ready section and in the release post, but the actual removal of the feature from the codebase was accidentally not complete. :boom: Breaking Change babel-core, babel-plu",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
    "route": "/package/babel-preset-react/8.0.1",
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
        "href": "https://github.com/babel/babel/releases/tag/v8.0.1"
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
    "publishedAgo": "published 107 days ago",
    "isRecent": false,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "React applications, component libraries, and frontend teams using React release workflows.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "Patch @remix-run/react 2.17.5 release detected with no OSV match.",
    "githubReleaseTitle": "",
    "githubReleaseUrl": "",
    "githubReleaseTag": "",
    "githubReleasePublishedAt": "",
    "releaseNotesExcerpt": "",
    "releaseNotesStatus": "No GitHub release matched this exact npm version tag; release notes are not attributed to this version.",
    "route": "/package/remix-run-react/2.17.5",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/@remix-run/react"
      },
      {
        "label": "Repository",
        "href": "https://github.com/remix-run/remix"
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
    "publishedAgo": "published 167 days ago",
    "isRecent": false,
    "risk": "low",
    "category": "Patch version",
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
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
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
    "id": "gatsby-5-16-1",
    "packageName": "gatsby",
    "packageSlug": "gatsby",
    "description": "React site framework",
    "oldVersion": "5.16.0",
    "newVersion": "5.16.1",
    "releaseDate": "2026-02-10",
    "publishedAgo": "published 218 days ago",
    "isRecent": false,
    "risk": "low",
    "category": "Patch version",
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
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
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
    "id": "parcel-2-16-4",
    "packageName": "parcel",
    "packageSlug": "parcel",
    "description": "Zero-configuration web bundler",
    "oldVersion": "2.16.3",
    "newVersion": "2.16.4",
    "releaseDate": "2026-02-02",
    "publishedAgo": "published 226 days ago",
    "isRecent": false,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "GitHub release note found: v2.16.4.",
    "githubReleaseTitle": "v2.16.4",
    "githubReleaseUrl": "https://github.com/parcel-bundler/parcel/releases/tag/v2.16.4",
    "githubReleaseTag": "v2.16.4",
    "githubReleasePublishedAt": "2026-02-02T03:22:20Z",
    "releaseNotesExcerpt": "Fixed Dev server - Add --no-cors option to disable CORS headers - Details",
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
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
    "id": "tsup-8-5-1",
    "packageName": "tsup",
    "packageSlug": "tsup",
    "description": "TypeScript library bundler",
    "oldVersion": "8.5.0",
    "newVersion": "8.5.1",
    "releaseDate": "2025-11-12",
    "publishedAgo": "published 307 days ago",
    "isRecent": false,
    "risk": "low",
    "category": "Patch version",
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
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
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
    "id": "formik-2-4-9",
    "packageName": "formik",
    "packageSlug": "formik",
    "description": "React form state",
    "oldVersion": "2.4.8",
    "newVersion": "2.4.9",
    "releaseDate": "2025-11-10",
    "publishedAgo": "published 310 days ago",
    "isRecent": false,
    "risk": "low",
    "category": "Patch version",
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
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
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
    "id": "yup-1-7-1",
    "packageName": "yup",
    "packageSlug": "yup",
    "description": "Object schema validation",
    "oldVersion": "1.7.0",
    "newVersion": "1.7.1",
    "releaseDate": "2025-09-21",
    "publishedAgo": "published 360 days ago",
    "isRecent": false,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "Patch yup 1.7.1 release detected with no OSV match.",
    "githubReleaseTitle": "",
    "githubReleaseUrl": "",
    "githubReleaseTag": "",
    "githubReleasePublishedAt": "",
    "releaseNotesExcerpt": "",
    "releaseNotesStatus": "No GitHub release matched this exact npm version tag; release notes are not attributed to this version.",
    "route": "/package/yup/1.7.1",
    "sourceLinks": [
      {
        "label": "npm",
        "href": "https://www.npmjs.com/package/yup"
      },
      {
        "label": "Repository",
        "href": "https://github.com/jquense/yup"
      }
    ]
  },
  {
    "id": "class-variance-authority-0-7-1",
    "packageName": "class-variance-authority",
    "packageSlug": "class-variance-authority",
    "description": "Variant class composition",
    "oldVersion": "0.7.0",
    "newVersion": "0.7.1",
    "releaseDate": "2024-11-26",
    "publishedAgo": "published 1 year ago",
    "isRecent": false,
    "risk": "low",
    "category": "Patch version",
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
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
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
    "isRecent": false,
    "risk": "low",
    "category": "Patch version",
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
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
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
    "isRecent": false,
    "risk": "low",
    "category": "Patch version",
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
    "isRecent": false,
    "risk": "low",
    "category": "Patch version",
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
    "releaseNotesStatus": "Matched GitHub release by exact npm version tag.",
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
  },
  {
    "id": "minimist-1-2-8",
    "packageName": "minimist",
    "packageSlug": "minimist",
    "description": "CLI argument parsing",
    "oldVersion": "1.2.7",
    "newVersion": "1.2.8",
    "releaseDate": "2023-02-09",
    "publishedAgo": "published 3 years ago",
    "isRecent": false,
    "risk": "low",
    "category": "Patch version",
    "osv": "No OSV match",
    "cve": "No CVE match",
    "reason": "Patch release with no OSV match.",
    "whyThisMatters": "Patch updates with no vulnerability signal are usually safe to batch into routine maintenance.",
    "affectedAudience": "Frontend projects that import this package directly or receive it through transitive dependencies.",
    "recommendedAction": "No urgent action. Include in the next scheduled dependency update.",
    "whatChanged": "Patch minimist 1.2.8 release detected with no OSV match.",
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
  }
];
export const packageRoutes = {
  "react": {
    "packageName": "react",
    "description": "UI library",
    "route": "/package/react",
    "latestReleaseRoute": "/package/react/19.3.0",
    "areaSlug": "core-frameworks",
    "areaLabel": "Frameworks and Core UI"
  },
  "react-dom": {
    "packageName": "react-dom",
    "description": "React DOM rendering",
    "route": "/package/react-dom",
    "latestReleaseRoute": "/package/react-dom/19.3.0",
    "areaSlug": "core-frameworks",
    "areaLabel": "Frameworks and Core UI"
  },
  "next": {
    "packageName": "next",
    "description": "React framework",
    "route": "/package/next",
    "latestReleaseRoute": "/package/next/16.3.5",
    "areaSlug": "core-frameworks",
    "areaLabel": "Frameworks and Core UI"
  },
  "vue": {
    "packageName": "vue",
    "description": "Progressive JavaScript framework",
    "route": "/package/vue",
    "latestReleaseRoute": "/package/vue/3.5.42",
    "areaSlug": "core-frameworks",
    "areaLabel": "Frameworks and Core UI"
  },
  "svelte": {
    "packageName": "svelte",
    "description": "Compiler-based UI framework",
    "route": "/package/svelte",
    "latestReleaseRoute": "/package/svelte/5.57.0",
    "areaSlug": "core-frameworks",
    "areaLabel": "Frameworks and Core UI"
  },
  "angular-core": {
    "packageName": "@angular/core",
    "description": "Angular framework core",
    "route": "/package/angular-core",
    "latestReleaseRoute": "/package/angular-core/22.1.6",
    "areaSlug": "core-frameworks",
    "areaLabel": "Frameworks and Core UI"
  },
  "solid-js": {
    "packageName": "solid-js",
    "description": "Reactive UI library",
    "route": "/package/solid-js",
    "latestReleaseRoute": "/package/solid-js/1.9.15",
    "areaSlug": "core-frameworks",
    "areaLabel": "Frameworks and Core UI"
  },
  "astro": {
    "packageName": "astro",
    "description": "Content-focused web framework",
    "route": "/package/astro",
    "latestReleaseRoute": "/package/astro/7.3.2",
    "areaSlug": "core-frameworks",
    "areaLabel": "Frameworks and Core UI"
  },
  "nuxt": {
    "packageName": "nuxt",
    "description": "Vue application framework",
    "route": "/package/nuxt",
    "latestReleaseRoute": "/package/nuxt/4.5.2",
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
    "latestReleaseRoute": "/package/vite/8.3.0",
    "areaSlug": "build-tooling",
    "areaLabel": "Build Tooling"
  },
  "webpack": {
    "packageName": "webpack",
    "description": "JavaScript bundler",
    "route": "/package/webpack",
    "latestReleaseRoute": "/package/webpack/5.111.0",
    "areaSlug": "build-tooling",
    "areaLabel": "Build Tooling"
  },
  "rollup": {
    "packageName": "rollup",
    "description": "Module bundler",
    "route": "/package/rollup",
    "latestReleaseRoute": "/package/rollup/4.63.3",
    "areaSlug": "build-tooling",
    "areaLabel": "Build Tooling"
  },
  "esbuild": {
    "packageName": "esbuild",
    "description": "JavaScript bundler",
    "route": "/package/esbuild",
    "latestReleaseRoute": "/package/esbuild/0.28.2",
    "areaSlug": "build-tooling",
    "areaLabel": "Build Tooling"
  },
  "turbo": {
    "packageName": "turbo",
    "description": "Monorepo build system",
    "route": "/package/turbo",
    "latestReleaseRoute": "/package/turbo/2.10.13",
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
    "latestReleaseRoute": "/package/vitejs-plugin-react/6.1.1",
    "areaSlug": "build-tooling",
    "areaLabel": "Build Tooling"
  },
  "babel-core": {
    "packageName": "@babel/core",
    "description": "JavaScript compiler core",
    "route": "/package/babel-core",
    "latestReleaseRoute": "/package/babel-core/8.0.5",
    "areaSlug": "build-tooling",
    "areaLabel": "Build Tooling"
  },
  "babel-preset-env": {
    "packageName": "@babel/preset-env",
    "description": "Babel environment preset",
    "route": "/package/babel-preset-env",
    "latestReleaseRoute": "/package/babel-preset-env/8.0.5",
    "areaSlug": "build-tooling",
    "areaLabel": "Build Tooling"
  },
  "babel-preset-react": {
    "packageName": "@babel/preset-react",
    "description": "Babel React preset",
    "route": "/package/babel-preset-react",
    "latestReleaseRoute": "/package/babel-preset-react/8.0.1",
    "areaSlug": "build-tooling",
    "areaLabel": "Build Tooling"
  },
  "swc-core": {
    "packageName": "@swc/core",
    "description": "JavaScript and TypeScript compiler",
    "route": "/package/swc-core",
    "latestReleaseRoute": "/package/swc-core/1.16.2",
    "areaSlug": "build-tooling",
    "areaLabel": "Build Tooling"
  },
  "typescript": {
    "packageName": "typescript",
    "description": "Typed JavaScript compiler",
    "route": "/package/typescript",
    "latestReleaseRoute": "/package/typescript/7.0.2",
    "areaSlug": "typescript-quality",
    "areaLabel": "TypeScript and Code Quality"
  },
  "eslint": {
    "packageName": "eslint",
    "description": "JavaScript linting",
    "route": "/package/eslint",
    "latestReleaseRoute": "/package/eslint/10.10.0",
    "areaSlug": "typescript-quality",
    "areaLabel": "TypeScript and Code Quality"
  },
  "prettier": {
    "packageName": "prettier",
    "description": "Code formatter",
    "route": "/package/prettier",
    "latestReleaseRoute": "/package/prettier/3.9.7",
    "areaSlug": "typescript-quality",
    "areaLabel": "TypeScript and Code Quality"
  },
  "typescript-eslint-parser": {
    "packageName": "@typescript-eslint/parser",
    "description": "TypeScript parser for ESLint",
    "route": "/package/typescript-eslint-parser",
    "latestReleaseRoute": "/package/typescript-eslint-parser/8.70.0",
    "areaSlug": "typescript-quality",
    "areaLabel": "TypeScript and Code Quality"
  },
  "typescript-eslint-eslint-plugin": {
    "packageName": "@typescript-eslint/eslint-plugin",
    "description": "TypeScript ESLint rules",
    "route": "/package/typescript-eslint-eslint-plugin",
    "latestReleaseRoute": "/package/typescript-eslint-eslint-plugin/8.70.0",
    "areaSlug": "typescript-quality",
    "areaLabel": "TypeScript and Code Quality"
  },
  "types-react": {
    "packageName": "@types/react",
    "description": "React TypeScript definitions",
    "route": "/package/types-react",
    "latestReleaseRoute": "/package/types-react/19.3.0",
    "areaSlug": "typescript-quality",
    "areaLabel": "TypeScript and Code Quality"
  },
  "types-react-dom": {
    "packageName": "@types/react-dom",
    "description": "React DOM TypeScript definitions",
    "route": "/package/types-react-dom",
    "latestReleaseRoute": "/package/types-react-dom/19.3.0",
    "areaSlug": "typescript-quality",
    "areaLabel": "TypeScript and Code Quality"
  },
  "react-router-dom": {
    "packageName": "react-router-dom",
    "description": "Declarative routing for React",
    "route": "/package/react-router-dom",
    "latestReleaseRoute": "/package/react-router-dom/7.18.4",
    "areaSlug": "routing-state-data",
    "areaLabel": "Routing, State, and Data"
  },
  "tanstack-react-query": {
    "packageName": "@tanstack/react-query",
    "description": "Data fetching for React",
    "route": "/package/tanstack-react-query",
    "latestReleaseRoute": "/package/tanstack-react-query/5.103.1",
    "areaSlug": "routing-state-data",
    "areaLabel": "Routing, State, and Data"
  },
  "zustand": {
    "packageName": "zustand",
    "description": "React state management",
    "route": "/package/zustand",
    "latestReleaseRoute": "/package/zustand/5.0.15",
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
    "latestReleaseRoute": "/package/swr/2.5.1",
    "areaSlug": "routing-state-data",
    "areaLabel": "Routing, State, and Data"
  },
  "axios": {
    "packageName": "axios",
    "description": "HTTP client",
    "route": "/package/axios",
    "latestReleaseRoute": "/package/axios/1.20.0",
    "areaSlug": "routing-state-data",
    "areaLabel": "Routing, State, and Data"
  },
  "ky": {
    "packageName": "ky",
    "description": "Fetch client",
    "route": "/package/ky",
    "latestReleaseRoute": "/package/ky/2.1.0",
    "areaSlug": "routing-state-data",
    "areaLabel": "Routing, State, and Data"
  },
  "apollo-client": {
    "packageName": "@apollo/client",
    "description": "GraphQL client",
    "route": "/package/apollo-client",
    "latestReleaseRoute": "/package/apollo-client/4.3.0",
    "areaSlug": "routing-state-data",
    "areaLabel": "Routing, State, and Data"
  },
  "graphql": {
    "packageName": "graphql",
    "description": "GraphQL JavaScript implementation",
    "route": "/package/graphql",
    "latestReleaseRoute": "/package/graphql/17.0.2",
    "areaSlug": "routing-state-data",
    "areaLabel": "Routing, State, and Data"
  },
  "immer": {
    "packageName": "immer",
    "description": "Immutable state updates",
    "route": "/package/immer",
    "latestReleaseRoute": "/package/immer/11.1.18",
    "areaSlug": "routing-state-data",
    "areaLabel": "Routing, State, and Data"
  },
  "react-hook-form": {
    "packageName": "react-hook-form",
    "description": "React form state",
    "route": "/package/react-hook-form",
    "latestReleaseRoute": "/package/react-hook-form/7.88.0",
    "areaSlug": "forms-validation",
    "areaLabel": "Forms and Validation"
  },
  "zod": {
    "packageName": "zod",
    "description": "Schema validation",
    "route": "/package/zod",
    "latestReleaseRoute": "/package/zod/4.6.5",
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
    "latestReleaseRoute": "/package/vitest/5.0.1",
    "areaSlug": "testing-storybook",
    "areaLabel": "Testing and Storybook"
  },
  "jest": {
    "packageName": "jest",
    "description": "JavaScript testing",
    "route": "/package/jest",
    "latestReleaseRoute": "/package/jest/30.5.1",
    "areaSlug": "testing-storybook",
    "areaLabel": "Testing and Storybook"
  },
  "cypress": {
    "packageName": "cypress",
    "description": "Browser testing",
    "route": "/package/cypress",
    "latestReleaseRoute": "/package/cypress/16.1.0",
    "areaSlug": "testing-storybook",
    "areaLabel": "Testing and Storybook"
  },
  "playwright": {
    "packageName": "playwright",
    "description": "Browser automation",
    "route": "/package/playwright",
    "latestReleaseRoute": "/package/playwright/1.63.0",
    "areaSlug": "testing-storybook",
    "areaLabel": "Testing and Storybook"
  },
  "storybook-react": {
    "packageName": "@storybook/react",
    "description": "React component workshop",
    "route": "/package/storybook-react",
    "latestReleaseRoute": "/package/storybook-react/10.6.0",
    "areaSlug": "testing-storybook",
    "areaLabel": "Testing and Storybook"
  },
  "storybook": {
    "packageName": "storybook",
    "description": "Component documentation",
    "route": "/package/storybook",
    "latestReleaseRoute": "/package/storybook/10.6.0",
    "areaSlug": "testing-storybook",
    "areaLabel": "Testing and Storybook"
  },
  "testing-library-react": {
    "packageName": "@testing-library/react",
    "description": "React component testing",
    "route": "/package/testing-library-react",
    "latestReleaseRoute": "/package/testing-library-react/16.3.3",
    "areaSlug": "testing-storybook",
    "areaLabel": "Testing and Storybook"
  },
  "testing-library-jest-dom": {
    "packageName": "@testing-library/jest-dom",
    "description": "DOM testing matchers",
    "route": "/package/testing-library-jest-dom",
    "latestReleaseRoute": "/package/testing-library-jest-dom/7.0.1",
    "areaSlug": "testing-storybook",
    "areaLabel": "Testing and Storybook"
  },
  "msw": {
    "packageName": "msw",
    "description": "API mocking library",
    "route": "/package/msw",
    "latestReleaseRoute": "/package/msw/2.15.0",
    "areaSlug": "testing-storybook",
    "areaLabel": "Testing and Storybook"
  },
  "happy-dom": {
    "packageName": "happy-dom",
    "description": "Browser environment for testing",
    "route": "/package/happy-dom",
    "latestReleaseRoute": "/package/happy-dom/20.14.5",
    "areaSlug": "testing-storybook",
    "areaLabel": "Testing and Storybook"
  },
  "tailwindcss": {
    "packageName": "tailwindcss",
    "description": "Utility-first CSS",
    "route": "/package/tailwindcss",
    "latestReleaseRoute": "/package/tailwindcss/4.3.3",
    "areaSlug": "css-ui",
    "areaLabel": "CSS and UI Libraries"
  },
  "postcss": {
    "packageName": "postcss",
    "description": "CSS transformation",
    "route": "/package/postcss",
    "latestReleaseRoute": "/package/postcss/8.5.28",
    "areaSlug": "css-ui",
    "areaLabel": "CSS and UI Libraries"
  },
  "autoprefixer": {
    "packageName": "autoprefixer",
    "description": "CSS vendor prefixing",
    "route": "/package/autoprefixer",
    "latestReleaseRoute": "/package/autoprefixer/10.6.1",
    "areaSlug": "css-ui",
    "areaLabel": "CSS and UI Libraries"
  },
  "sass": {
    "packageName": "sass",
    "description": "CSS preprocessor",
    "route": "/package/sass",
    "latestReleaseRoute": "/package/sass/1.104.1",
    "areaSlug": "css-ui",
    "areaLabel": "CSS and UI Libraries"
  },
  "less": {
    "packageName": "less",
    "description": "CSS preprocessor",
    "route": "/package/less",
    "latestReleaseRoute": "/package/less/4.9.1",
    "areaSlug": "css-ui",
    "areaLabel": "CSS and UI Libraries"
  },
  "styled-components": {
    "packageName": "styled-components",
    "description": "CSS-in-JS styling",
    "route": "/package/styled-components",
    "latestReleaseRoute": "/package/styled-components/6.5.3",
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
    "latestReleaseRoute": "/package/framer-motion/13.4.0",
    "areaSlug": "css-ui",
    "areaLabel": "CSS and UI Libraries"
  },
  "radix-ui-react-dialog": {
    "packageName": "@radix-ui/react-dialog",
    "description": "Accessible dialog primitive",
    "route": "/package/radix-ui-react-dialog",
    "latestReleaseRoute": "/package/radix-ui-react-dialog/1.1.23",
    "areaSlug": "css-ui",
    "areaLabel": "CSS and UI Libraries"
  },
  "radix-ui-react-popover": {
    "packageName": "@radix-ui/react-popover",
    "description": "Accessible popover primitive",
    "route": "/package/radix-ui-react-popover",
    "latestReleaseRoute": "/package/radix-ui-react-popover/1.1.23",
    "areaSlug": "css-ui",
    "areaLabel": "CSS and UI Libraries"
  },
  "tailwind-merge": {
    "packageName": "tailwind-merge",
    "description": "Tailwind class merging",
    "route": "/package/tailwind-merge",
    "latestReleaseRoute": "/package/tailwind-merge/3.7.0",
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
    "latestReleaseRoute": "/package/lucide-react/1.46.0",
    "areaSlug": "css-ui",
    "areaLabel": "CSS and UI Libraries"
  },
  "mui-material": {
    "packageName": "@mui/material",
    "description": "React component library",
    "route": "/package/mui-material",
    "latestReleaseRoute": "/package/mui-material/9.4.0",
    "areaSlug": "css-ui",
    "areaLabel": "CSS and UI Libraries"
  },
  "chakra-ui-react": {
    "packageName": "@chakra-ui/react",
    "description": "Accessible React component library",
    "route": "/package/chakra-ui-react",
    "latestReleaseRoute": "/package/chakra-ui-react/3.37.0",
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
    "latestReleaseRoute": "/package/dayjs/1.11.23",
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
    "latestReleaseRoute": "/package/ws/8.21.3",
    "areaSlug": "utilities-runtime",
    "areaLabel": "JavaScript Utilities and Runtime"
  },
  "semver": {
    "packageName": "semver",
    "description": "Semantic version parsing",
    "route": "/package/semver",
    "latestReleaseRoute": "/package/semver/7.8.5",
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
    "latestReleaseRoute": "/package/pnpm/12.4.2",
    "areaSlug": "utilities-runtime",
    "areaLabel": "JavaScript Utilities and Runtime"
  },
  "uuid": {
    "packageName": "uuid",
    "description": "UUID generator",
    "route": "/package/uuid",
    "latestReleaseRoute": "/package/uuid/14.0.2",
    "areaSlug": "utilities-runtime",
    "areaLabel": "JavaScript Utilities and Runtime"
  },
  "nanoid": {
    "packageName": "nanoid",
    "description": "Compact unique ID generator",
    "route": "/package/nanoid",
    "latestReleaseRoute": "/package/nanoid/6.0.1",
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
        "latestReleaseRoute": "/package/angular-core/22.1.6",
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
        "latestReleaseRoute": "/package/astro/7.3.2",
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
        "latestReleaseRoute": "/package/next/16.3.5",
        "areaSlug": "core-frameworks",
        "areaLabel": "Frameworks and Core UI"
      },
      {
        "packageName": "nuxt",
        "description": "Vue application framework",
        "route": "/package/nuxt",
        "latestReleaseRoute": "/package/nuxt/4.5.2",
        "areaSlug": "core-frameworks",
        "areaLabel": "Frameworks and Core UI"
      },
      {
        "packageName": "react",
        "description": "UI library",
        "route": "/package/react",
        "latestReleaseRoute": "/package/react/19.3.0",
        "areaSlug": "core-frameworks",
        "areaLabel": "Frameworks and Core UI"
      },
      {
        "packageName": "react-dom",
        "description": "React DOM rendering",
        "route": "/package/react-dom",
        "latestReleaseRoute": "/package/react-dom/19.3.0",
        "areaSlug": "core-frameworks",
        "areaLabel": "Frameworks and Core UI"
      },
      {
        "packageName": "solid-js",
        "description": "Reactive UI library",
        "route": "/package/solid-js",
        "latestReleaseRoute": "/package/solid-js/1.9.15",
        "areaSlug": "core-frameworks",
        "areaLabel": "Frameworks and Core UI"
      },
      {
        "packageName": "svelte",
        "description": "Compiler-based UI framework",
        "route": "/package/svelte",
        "latestReleaseRoute": "/package/svelte/5.57.0",
        "areaSlug": "core-frameworks",
        "areaLabel": "Frameworks and Core UI"
      },
      {
        "packageName": "vue",
        "description": "Progressive JavaScript framework",
        "route": "/package/vue",
        "latestReleaseRoute": "/package/vue/3.5.42",
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
        "latestReleaseRoute": "/package/babel-core/8.0.5",
        "areaSlug": "build-tooling",
        "areaLabel": "Build Tooling"
      },
      {
        "packageName": "@babel/preset-env",
        "description": "Babel environment preset",
        "route": "/package/babel-preset-env",
        "latestReleaseRoute": "/package/babel-preset-env/8.0.5",
        "areaSlug": "build-tooling",
        "areaLabel": "Build Tooling"
      },
      {
        "packageName": "@babel/preset-react",
        "description": "Babel React preset",
        "route": "/package/babel-preset-react",
        "latestReleaseRoute": "/package/babel-preset-react/8.0.1",
        "areaSlug": "build-tooling",
        "areaLabel": "Build Tooling"
      },
      {
        "packageName": "@swc/core",
        "description": "JavaScript and TypeScript compiler",
        "route": "/package/swc-core",
        "latestReleaseRoute": "/package/swc-core/1.16.2",
        "areaSlug": "build-tooling",
        "areaLabel": "Build Tooling"
      },
      {
        "packageName": "@vitejs/plugin-react",
        "description": "Vite React plugin",
        "route": "/package/vitejs-plugin-react",
        "latestReleaseRoute": "/package/vitejs-plugin-react/6.1.1",
        "areaSlug": "build-tooling",
        "areaLabel": "Build Tooling"
      },
      {
        "packageName": "esbuild",
        "description": "JavaScript bundler",
        "route": "/package/esbuild",
        "latestReleaseRoute": "/package/esbuild/0.28.2",
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
        "latestReleaseRoute": "/package/rollup/4.63.3",
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
        "latestReleaseRoute": "/package/turbo/2.10.13",
        "areaSlug": "build-tooling",
        "areaLabel": "Build Tooling"
      },
      {
        "packageName": "vite",
        "description": "Frontend build tooling",
        "route": "/package/vite",
        "latestReleaseRoute": "/package/vite/8.3.0",
        "areaSlug": "build-tooling",
        "areaLabel": "Build Tooling"
      },
      {
        "packageName": "webpack",
        "description": "JavaScript bundler",
        "route": "/package/webpack",
        "latestReleaseRoute": "/package/webpack/5.111.0",
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
        "latestReleaseRoute": "/package/types-react/19.3.0",
        "areaSlug": "typescript-quality",
        "areaLabel": "TypeScript and Code Quality"
      },
      {
        "packageName": "@types/react-dom",
        "description": "React DOM TypeScript definitions",
        "route": "/package/types-react-dom",
        "latestReleaseRoute": "/package/types-react-dom/19.3.0",
        "areaSlug": "typescript-quality",
        "areaLabel": "TypeScript and Code Quality"
      },
      {
        "packageName": "@typescript-eslint/eslint-plugin",
        "description": "TypeScript ESLint rules",
        "route": "/package/typescript-eslint-eslint-plugin",
        "latestReleaseRoute": "/package/typescript-eslint-eslint-plugin/8.70.0",
        "areaSlug": "typescript-quality",
        "areaLabel": "TypeScript and Code Quality"
      },
      {
        "packageName": "@typescript-eslint/parser",
        "description": "TypeScript parser for ESLint",
        "route": "/package/typescript-eslint-parser",
        "latestReleaseRoute": "/package/typescript-eslint-parser/8.70.0",
        "areaSlug": "typescript-quality",
        "areaLabel": "TypeScript and Code Quality"
      },
      {
        "packageName": "eslint",
        "description": "JavaScript linting",
        "route": "/package/eslint",
        "latestReleaseRoute": "/package/eslint/10.10.0",
        "areaSlug": "typescript-quality",
        "areaLabel": "TypeScript and Code Quality"
      },
      {
        "packageName": "prettier",
        "description": "Code formatter",
        "route": "/package/prettier",
        "latestReleaseRoute": "/package/prettier/3.9.7",
        "areaSlug": "typescript-quality",
        "areaLabel": "TypeScript and Code Quality"
      },
      {
        "packageName": "typescript",
        "description": "Typed JavaScript compiler",
        "route": "/package/typescript",
        "latestReleaseRoute": "/package/typescript/7.0.2",
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
        "latestReleaseRoute": "/package/apollo-client/4.3.0",
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
        "latestReleaseRoute": "/package/tanstack-react-query/5.103.1",
        "areaSlug": "routing-state-data",
        "areaLabel": "Routing, State, and Data"
      },
      {
        "packageName": "axios",
        "description": "HTTP client",
        "route": "/package/axios",
        "latestReleaseRoute": "/package/axios/1.20.0",
        "areaSlug": "routing-state-data",
        "areaLabel": "Routing, State, and Data"
      },
      {
        "packageName": "graphql",
        "description": "GraphQL JavaScript implementation",
        "route": "/package/graphql",
        "latestReleaseRoute": "/package/graphql/17.0.2",
        "areaSlug": "routing-state-data",
        "areaLabel": "Routing, State, and Data"
      },
      {
        "packageName": "immer",
        "description": "Immutable state updates",
        "route": "/package/immer",
        "latestReleaseRoute": "/package/immer/11.1.18",
        "areaSlug": "routing-state-data",
        "areaLabel": "Routing, State, and Data"
      },
      {
        "packageName": "ky",
        "description": "Fetch client",
        "route": "/package/ky",
        "latestReleaseRoute": "/package/ky/2.1.0",
        "areaSlug": "routing-state-data",
        "areaLabel": "Routing, State, and Data"
      },
      {
        "packageName": "react-router-dom",
        "description": "Declarative routing for React",
        "route": "/package/react-router-dom",
        "latestReleaseRoute": "/package/react-router-dom/7.18.4",
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
        "latestReleaseRoute": "/package/swr/2.5.1",
        "areaSlug": "routing-state-data",
        "areaLabel": "Routing, State, and Data"
      },
      {
        "packageName": "zustand",
        "description": "React state management",
        "route": "/package/zustand",
        "latestReleaseRoute": "/package/zustand/5.0.15",
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
        "latestReleaseRoute": "/package/react-hook-form/7.88.0",
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
        "latestReleaseRoute": "/package/zod/4.6.5",
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
        "latestReleaseRoute": "/package/storybook-react/10.6.0",
        "areaSlug": "testing-storybook",
        "areaLabel": "Testing and Storybook"
      },
      {
        "packageName": "@testing-library/jest-dom",
        "description": "DOM testing matchers",
        "route": "/package/testing-library-jest-dom",
        "latestReleaseRoute": "/package/testing-library-jest-dom/7.0.1",
        "areaSlug": "testing-storybook",
        "areaLabel": "Testing and Storybook"
      },
      {
        "packageName": "@testing-library/react",
        "description": "React component testing",
        "route": "/package/testing-library-react",
        "latestReleaseRoute": "/package/testing-library-react/16.3.3",
        "areaSlug": "testing-storybook",
        "areaLabel": "Testing and Storybook"
      },
      {
        "packageName": "cypress",
        "description": "Browser testing",
        "route": "/package/cypress",
        "latestReleaseRoute": "/package/cypress/16.1.0",
        "areaSlug": "testing-storybook",
        "areaLabel": "Testing and Storybook"
      },
      {
        "packageName": "happy-dom",
        "description": "Browser environment for testing",
        "route": "/package/happy-dom",
        "latestReleaseRoute": "/package/happy-dom/20.14.5",
        "areaSlug": "testing-storybook",
        "areaLabel": "Testing and Storybook"
      },
      {
        "packageName": "jest",
        "description": "JavaScript testing",
        "route": "/package/jest",
        "latestReleaseRoute": "/package/jest/30.5.1",
        "areaSlug": "testing-storybook",
        "areaLabel": "Testing and Storybook"
      },
      {
        "packageName": "msw",
        "description": "API mocking library",
        "route": "/package/msw",
        "latestReleaseRoute": "/package/msw/2.15.0",
        "areaSlug": "testing-storybook",
        "areaLabel": "Testing and Storybook"
      },
      {
        "packageName": "playwright",
        "description": "Browser automation",
        "route": "/package/playwright",
        "latestReleaseRoute": "/package/playwright/1.63.0",
        "areaSlug": "testing-storybook",
        "areaLabel": "Testing and Storybook"
      },
      {
        "packageName": "storybook",
        "description": "Component documentation",
        "route": "/package/storybook",
        "latestReleaseRoute": "/package/storybook/10.6.0",
        "areaSlug": "testing-storybook",
        "areaLabel": "Testing and Storybook"
      },
      {
        "packageName": "vitest",
        "description": "Vite-native testing",
        "route": "/package/vitest",
        "latestReleaseRoute": "/package/vitest/5.0.1",
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
        "latestReleaseRoute": "/package/chakra-ui-react/3.37.0",
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
        "latestReleaseRoute": "/package/mui-material/9.4.0",
        "areaSlug": "css-ui",
        "areaLabel": "CSS and UI Libraries"
      },
      {
        "packageName": "@radix-ui/react-dialog",
        "description": "Accessible dialog primitive",
        "route": "/package/radix-ui-react-dialog",
        "latestReleaseRoute": "/package/radix-ui-react-dialog/1.1.23",
        "areaSlug": "css-ui",
        "areaLabel": "CSS and UI Libraries"
      },
      {
        "packageName": "@radix-ui/react-popover",
        "description": "Accessible popover primitive",
        "route": "/package/radix-ui-react-popover",
        "latestReleaseRoute": "/package/radix-ui-react-popover/1.1.23",
        "areaSlug": "css-ui",
        "areaLabel": "CSS and UI Libraries"
      },
      {
        "packageName": "autoprefixer",
        "description": "CSS vendor prefixing",
        "route": "/package/autoprefixer",
        "latestReleaseRoute": "/package/autoprefixer/10.6.1",
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
        "latestReleaseRoute": "/package/framer-motion/13.4.0",
        "areaSlug": "css-ui",
        "areaLabel": "CSS and UI Libraries"
      },
      {
        "packageName": "less",
        "description": "CSS preprocessor",
        "route": "/package/less",
        "latestReleaseRoute": "/package/less/4.9.1",
        "areaSlug": "css-ui",
        "areaLabel": "CSS and UI Libraries"
      },
      {
        "packageName": "lucide-react",
        "description": "React icon library",
        "route": "/package/lucide-react",
        "latestReleaseRoute": "/package/lucide-react/1.46.0",
        "areaSlug": "css-ui",
        "areaLabel": "CSS and UI Libraries"
      },
      {
        "packageName": "postcss",
        "description": "CSS transformation",
        "route": "/package/postcss",
        "latestReleaseRoute": "/package/postcss/8.5.28",
        "areaSlug": "css-ui",
        "areaLabel": "CSS and UI Libraries"
      },
      {
        "packageName": "sass",
        "description": "CSS preprocessor",
        "route": "/package/sass",
        "latestReleaseRoute": "/package/sass/1.104.1",
        "areaSlug": "css-ui",
        "areaLabel": "CSS and UI Libraries"
      },
      {
        "packageName": "styled-components",
        "description": "CSS-in-JS styling",
        "route": "/package/styled-components",
        "latestReleaseRoute": "/package/styled-components/6.5.3",
        "areaSlug": "css-ui",
        "areaLabel": "CSS and UI Libraries"
      },
      {
        "packageName": "tailwind-merge",
        "description": "Tailwind class merging",
        "route": "/package/tailwind-merge",
        "latestReleaseRoute": "/package/tailwind-merge/3.7.0",
        "areaSlug": "css-ui",
        "areaLabel": "CSS and UI Libraries"
      },
      {
        "packageName": "tailwindcss",
        "description": "Utility-first CSS",
        "route": "/package/tailwindcss",
        "latestReleaseRoute": "/package/tailwindcss/4.3.3",
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
        "latestReleaseRoute": "/package/dayjs/1.11.23",
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
        "latestReleaseRoute": "/package/nanoid/6.0.1",
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
        "latestReleaseRoute": "/package/pnpm/12.4.2",
        "areaSlug": "utilities-runtime",
        "areaLabel": "JavaScript Utilities and Runtime"
      },
      {
        "packageName": "semver",
        "description": "Semantic version parsing",
        "route": "/package/semver",
        "latestReleaseRoute": "/package/semver/7.8.5",
        "areaSlug": "utilities-runtime",
        "areaLabel": "JavaScript Utilities and Runtime"
      },
      {
        "packageName": "uuid",
        "description": "UUID generator",
        "route": "/package/uuid",
        "latestReleaseRoute": "/package/uuid/14.0.2",
        "areaSlug": "utilities-runtime",
        "areaLabel": "JavaScript Utilities and Runtime"
      },
      {
        "packageName": "ws",
        "description": "WebSocket implementation",
        "route": "/package/ws",
        "latestReleaseRoute": "/package/ws/8.21.3",
        "areaSlug": "utilities-runtime",
        "areaLabel": "JavaScript Utilities and Runtime"
      }
    ]
  }
};
export const seoRoutes: Record<string, SeoRoute> = {
  "/weekly": {
    "path": "/weekly",
    "title": "Frontend npm Security Updates and Dependency Risk",
    "description": "Week 38, 2026 digest for frontend npm security updates, breaking package releases, OSV/CVE signals, React dependency risk, and recommended update actions from 82 tracked packages."
  },
  "/risk/security": {
    "path": "/risk/security",
    "title": "Frontend npm Security Updates, OSV and CVE Fixes",
    "description": "Track security-relevant frontend npm releases with OSV vulnerability checks, CVE references, release-note security signals, affected audience, and recommended update actions."
  },
  "/risk/breaking": {
    "path": "/risk/breaking",
    "title": "Breaking Frontend npm Package Releases",
    "description": "Find breaking frontend npm package releases and major updates for React, Vite, Next.js, TypeScript, Storybook, build tooling, testing, and JavaScript dependency maintenance."
  },
  "/risk/review": {
    "path": "/risk/review",
    "title": "Frontend npm Dependency Updates To Review",
    "description": "Review frontend npm dependency updates with release notes, OSV checks, affected audience, and recommended maintenance actions before upgrading JavaScript production apps."
  },
  "/methodology": {
    "path": "/methodology",
    "title": "Dependency Risk Methodology for Frontend npm Updates",
    "description": "See how Dependency Risk Digest evaluates frontend npm risk using release metadata, OSV/CVE signals, changelog language, affected audience, and recommended actions."
  },
  "/packages": {
    "path": "/packages",
    "title": "Frontend npm Package Risk Directory",
    "description": "Browse 82 frontend npm package risk archives for React, Vite, Next.js, TypeScript, Storybook, security updates, breaking releases, OSV/CVE signals, and recommended actions."
  },
  "/weekly/2026-w38": {
    "path": "/weekly/2026-w38",
    "title": "Week 38, 2026 frontend npm risk archive",
    "description": "Sep 14 - Sep 20 archive for frontend npm dependency risk: 30 risky updates, 1 breaking releases, 0 security updates, OSV/CVE checks, and recommended actions."
  },
  "/weekly/2026-w37": {
    "path": "/weekly/2026-w37",
    "title": "Week 37, 2026 frontend npm risk archive",
    "description": "Sep 7 - Sep 13 archive for frontend npm dependency risk: 30 risky updates, 3 breaking releases, 0 security updates, OSV/CVE checks, and recommended actions."
  },
  "/weekly/2026-w36": {
    "path": "/weekly/2026-w36",
    "title": "Week 36, 2026 frontend npm risk archive",
    "description": "Aug 31 - Sep 6 archive for frontend npm dependency risk: 26 risky updates, 3 breaking releases, 0 security updates, OSV/CVE checks, and recommended actions."
  },
  "/weekly/2026-w35": {
    "path": "/weekly/2026-w35",
    "title": "Week 35, 2026 frontend npm risk archive",
    "description": "Aug 24 - Aug 30 archive for frontend npm dependency risk: 23 risky updates, 1 breaking releases, 0 security updates, OSV/CVE checks, and recommended actions."
  },
  "/weekly/2026-w34": {
    "path": "/weekly/2026-w34",
    "title": "Week 34, 2026 frontend npm risk archive",
    "description": "Aug 17 - Aug 23 archive for frontend npm dependency risk: 19 risky updates, 1 breaking releases, 0 security updates, OSV/CVE checks, and recommended actions."
  },
  "/weekly/2026-w33": {
    "path": "/weekly/2026-w33",
    "title": "Week 33, 2026 frontend npm risk archive",
    "description": "Aug 10 - Aug 16 archive for frontend npm dependency risk: 17 risky updates, 1 breaking releases, 0 security updates, OSV/CVE checks, and recommended actions."
  },
  "/weekly/2026-w32": {
    "path": "/weekly/2026-w32",
    "title": "Week 32, 2026 frontend npm risk archive",
    "description": "Aug 3 - Aug 9 archive for frontend npm dependency risk: 21 risky updates, 3 breaking releases, 0 security updates, OSV/CVE checks, and recommended actions."
  },
  "/weekly/2026-w31": {
    "path": "/weekly/2026-w31",
    "title": "Week 31, 2026 frontend npm risk archive",
    "description": "Jul 27 - Aug 2 archive for frontend npm dependency risk: 26 risky updates, 3 breaking releases, 0 security updates, OSV/CVE checks, and recommended actions."
  },
  "/weekly/2026-w30": {
    "path": "/weekly/2026-w30",
    "title": "Week 30, 2026 frontend npm risk archive",
    "description": "Jul 20 - Jul 26 archive for frontend npm dependency risk: 25 risky updates, 3 breaking releases, 0 security updates, OSV/CVE checks, and recommended actions."
  },
  "/weekly/2026-w29": {
    "path": "/weekly/2026-w29",
    "title": "Week 29, 2026 frontend npm risk archive",
    "description": "Jul 13 - Jul 19 archive for frontend npm dependency risk: 18 risky updates, 2 breaking releases, 0 security updates, OSV/CVE checks, and recommended actions."
  },
  "/weekly/2026-w28": {
    "path": "/weekly/2026-w28",
    "title": "Week 28, 2026 frontend npm risk archive",
    "description": "Jul 6 - Jul 12 archive for frontend npm dependency risk: 20 risky updates, 1 breaking releases, 0 security updates, OSV/CVE checks, and recommended actions."
  },
  "/weekly/2026-w27": {
    "path": "/weekly/2026-w27",
    "title": "Week 27, 2026 frontend npm risk archive",
    "description": "Jun 29 - Jul 5 archive for frontend npm dependency risk: 15 risky updates, 0 breaking releases, 0 security updates, OSV/CVE checks, and recommended actions."
  },
  "/weekly/2026-w26": {
    "path": "/weekly/2026-w26",
    "title": "Week 26, 2026 frontend npm risk archive",
    "description": "Jun 22 - Jun 28 archive for frontend npm dependency risk: 21 risky updates, 0 breaking releases, 0 security updates, OSV/CVE checks, and recommended actions."
  },
  "/weekly/2026-w25": {
    "path": "/weekly/2026-w25",
    "title": "Week 25, 2026 frontend npm risk archive",
    "description": "Jun 15 - Jun 21 archive for frontend npm dependency risk: 35 risky updates, 11 breaking releases, 4 security updates, OSV/CVE checks, and recommended actions."
  },
  "/weekly/2026-w24": {
    "path": "/weekly/2026-w24",
    "title": "Week 24, 2026 frontend npm risk archive",
    "description": "Jun 8 - Jun 14 archive for frontend npm dependency risk: 40 risky updates, 15 breaking releases, 6 security updates, OSV/CVE checks, and recommended actions."
  },
  "/weekly/2026-w23": {
    "path": "/weekly/2026-w23",
    "title": "Week 23, 2026 frontend npm risk archive",
    "description": "Jun 1 - Jun 7 archive for frontend npm dependency risk: 37 risky updates, 15 breaking releases, 4 security updates, OSV/CVE checks, and recommended actions."
  },
  "/package/react": {
    "path": "/package/react",
    "title": "react npm dependency risk archive",
    "description": "react npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/react-dom": {
    "path": "/package/react-dom",
    "title": "react-dom npm dependency risk archive",
    "description": "react-dom npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/next": {
    "path": "/package/next",
    "title": "next npm dependency risk archive",
    "description": "next npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/vue": {
    "path": "/package/vue",
    "title": "vue npm dependency risk archive",
    "description": "vue npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/svelte": {
    "path": "/package/svelte",
    "title": "svelte npm dependency risk archive",
    "description": "svelte npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/angular-core": {
    "path": "/package/angular-core",
    "title": "@angular/core npm dependency risk archive",
    "description": "@angular/core npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/solid-js": {
    "path": "/package/solid-js",
    "title": "solid-js npm dependency risk archive",
    "description": "solid-js npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/astro": {
    "path": "/package/astro",
    "title": "astro npm dependency risk archive",
    "description": "astro npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/nuxt": {
    "path": "/package/nuxt",
    "title": "nuxt npm dependency risk archive",
    "description": "nuxt npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/gatsby": {
    "path": "/package/gatsby",
    "title": "gatsby npm dependency risk archive",
    "description": "gatsby npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/remix-run-react": {
    "path": "/package/remix-run-react",
    "title": "@remix-run/react npm dependency risk archive",
    "description": "@remix-run/react npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/vite": {
    "path": "/package/vite",
    "title": "vite npm dependency risk archive",
    "description": "vite npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/webpack": {
    "path": "/package/webpack",
    "title": "webpack npm dependency risk archive",
    "description": "webpack npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/rollup": {
    "path": "/package/rollup",
    "title": "rollup npm dependency risk archive",
    "description": "rollup npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/esbuild": {
    "path": "/package/esbuild",
    "title": "esbuild npm dependency risk archive",
    "description": "esbuild npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/turbo": {
    "path": "/package/turbo",
    "title": "turbo npm dependency risk archive",
    "description": "turbo npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/parcel": {
    "path": "/package/parcel",
    "title": "parcel npm dependency risk archive",
    "description": "parcel npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/tsup": {
    "path": "/package/tsup",
    "title": "tsup npm dependency risk archive",
    "description": "tsup npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/vitejs-plugin-react": {
    "path": "/package/vitejs-plugin-react",
    "title": "@vitejs/plugin-react npm dependency risk archive",
    "description": "@vitejs/plugin-react npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/babel-core": {
    "path": "/package/babel-core",
    "title": "@babel/core npm dependency risk archive",
    "description": "@babel/core npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/babel-preset-env": {
    "path": "/package/babel-preset-env",
    "title": "@babel/preset-env npm dependency risk archive",
    "description": "@babel/preset-env npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/babel-preset-react": {
    "path": "/package/babel-preset-react",
    "title": "@babel/preset-react npm dependency risk archive",
    "description": "@babel/preset-react npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/swc-core": {
    "path": "/package/swc-core",
    "title": "@swc/core npm dependency risk archive",
    "description": "@swc/core npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/typescript": {
    "path": "/package/typescript",
    "title": "typescript npm dependency risk archive",
    "description": "typescript npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/eslint": {
    "path": "/package/eslint",
    "title": "eslint npm dependency risk archive",
    "description": "eslint npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/prettier": {
    "path": "/package/prettier",
    "title": "prettier npm dependency risk archive",
    "description": "prettier npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/typescript-eslint-parser": {
    "path": "/package/typescript-eslint-parser",
    "title": "@typescript-eslint/parser npm dependency risk archive",
    "description": "@typescript-eslint/parser npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/typescript-eslint-eslint-plugin": {
    "path": "/package/typescript-eslint-eslint-plugin",
    "title": "@typescript-eslint/eslint-plugin npm dependency risk archive",
    "description": "@typescript-eslint/eslint-plugin npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/types-react": {
    "path": "/package/types-react",
    "title": "@types/react npm dependency risk archive",
    "description": "@types/react npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/types-react-dom": {
    "path": "/package/types-react-dom",
    "title": "@types/react-dom npm dependency risk archive",
    "description": "@types/react-dom npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/react-router-dom": {
    "path": "/package/react-router-dom",
    "title": "react-router-dom npm dependency risk archive",
    "description": "react-router-dom npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/tanstack-react-query": {
    "path": "/package/tanstack-react-query",
    "title": "@tanstack/react-query npm dependency risk archive",
    "description": "@tanstack/react-query npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/zustand": {
    "path": "/package/zustand",
    "title": "zustand npm dependency risk archive",
    "description": "zustand npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/redux": {
    "path": "/package/redux",
    "title": "redux npm dependency risk archive",
    "description": "redux npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/reduxjs-toolkit": {
    "path": "/package/reduxjs-toolkit",
    "title": "@reduxjs/toolkit npm dependency risk archive",
    "description": "@reduxjs/toolkit npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/swr": {
    "path": "/package/swr",
    "title": "swr npm dependency risk archive",
    "description": "swr npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/axios": {
    "path": "/package/axios",
    "title": "axios npm dependency risk archive",
    "description": "axios npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/ky": {
    "path": "/package/ky",
    "title": "ky npm dependency risk archive",
    "description": "ky npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/apollo-client": {
    "path": "/package/apollo-client",
    "title": "@apollo/client npm dependency risk archive",
    "description": "@apollo/client npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/graphql": {
    "path": "/package/graphql",
    "title": "graphql npm dependency risk archive",
    "description": "graphql npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/immer": {
    "path": "/package/immer",
    "title": "immer npm dependency risk archive",
    "description": "immer npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/react-hook-form": {
    "path": "/package/react-hook-form",
    "title": "react-hook-form npm dependency risk archive",
    "description": "react-hook-form npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/zod": {
    "path": "/package/zod",
    "title": "zod npm dependency risk archive",
    "description": "zod npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/yup": {
    "path": "/package/yup",
    "title": "yup npm dependency risk archive",
    "description": "yup npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/formik": {
    "path": "/package/formik",
    "title": "formik npm dependency risk archive",
    "description": "formik npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/vitest": {
    "path": "/package/vitest",
    "title": "vitest npm dependency risk archive",
    "description": "vitest npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/jest": {
    "path": "/package/jest",
    "title": "jest npm dependency risk archive",
    "description": "jest npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/cypress": {
    "path": "/package/cypress",
    "title": "cypress npm dependency risk archive",
    "description": "cypress npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/playwright": {
    "path": "/package/playwright",
    "title": "playwright npm dependency risk archive",
    "description": "playwright npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/storybook-react": {
    "path": "/package/storybook-react",
    "title": "@storybook/react npm dependency risk archive",
    "description": "@storybook/react npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/storybook": {
    "path": "/package/storybook",
    "title": "storybook npm dependency risk archive",
    "description": "storybook npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/testing-library-react": {
    "path": "/package/testing-library-react",
    "title": "@testing-library/react npm dependency risk archive",
    "description": "@testing-library/react npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/testing-library-jest-dom": {
    "path": "/package/testing-library-jest-dom",
    "title": "@testing-library/jest-dom npm dependency risk archive",
    "description": "@testing-library/jest-dom npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/msw": {
    "path": "/package/msw",
    "title": "msw npm dependency risk archive",
    "description": "msw npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/happy-dom": {
    "path": "/package/happy-dom",
    "title": "happy-dom npm dependency risk archive",
    "description": "happy-dom npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/tailwindcss": {
    "path": "/package/tailwindcss",
    "title": "tailwindcss npm dependency risk archive",
    "description": "tailwindcss npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/postcss": {
    "path": "/package/postcss",
    "title": "postcss npm dependency risk archive",
    "description": "postcss npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/autoprefixer": {
    "path": "/package/autoprefixer",
    "title": "autoprefixer npm dependency risk archive",
    "description": "autoprefixer npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/sass": {
    "path": "/package/sass",
    "title": "sass npm dependency risk archive",
    "description": "sass npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/less": {
    "path": "/package/less",
    "title": "less npm dependency risk archive",
    "description": "less npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/styled-components": {
    "path": "/package/styled-components",
    "title": "styled-components npm dependency risk archive",
    "description": "styled-components npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/emotion-react": {
    "path": "/package/emotion-react",
    "title": "@emotion/react npm dependency risk archive",
    "description": "@emotion/react npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/framer-motion": {
    "path": "/package/framer-motion",
    "title": "framer-motion npm dependency risk archive",
    "description": "framer-motion npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/radix-ui-react-dialog": {
    "path": "/package/radix-ui-react-dialog",
    "title": "@radix-ui/react-dialog npm dependency risk archive",
    "description": "@radix-ui/react-dialog npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/radix-ui-react-popover": {
    "path": "/package/radix-ui-react-popover",
    "title": "@radix-ui/react-popover npm dependency risk archive",
    "description": "@radix-ui/react-popover npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/tailwind-merge": {
    "path": "/package/tailwind-merge",
    "title": "tailwind-merge npm dependency risk archive",
    "description": "tailwind-merge npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/class-variance-authority": {
    "path": "/package/class-variance-authority",
    "title": "class-variance-authority npm dependency risk archive",
    "description": "class-variance-authority npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/clsx": {
    "path": "/package/clsx",
    "title": "clsx npm dependency risk archive",
    "description": "clsx npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/classnames": {
    "path": "/package/classnames",
    "title": "classnames npm dependency risk archive",
    "description": "classnames npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/lucide-react": {
    "path": "/package/lucide-react",
    "title": "lucide-react npm dependency risk archive",
    "description": "lucide-react npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/mui-material": {
    "path": "/package/mui-material",
    "title": "@mui/material npm dependency risk archive",
    "description": "@mui/material npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/chakra-ui-react": {
    "path": "/package/chakra-ui-react",
    "title": "@chakra-ui/react npm dependency risk archive",
    "description": "@chakra-ui/react npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/lodash": {
    "path": "/package/lodash",
    "title": "lodash npm dependency risk archive",
    "description": "lodash npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/date-fns": {
    "path": "/package/date-fns",
    "title": "date-fns npm dependency risk archive",
    "description": "date-fns npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/dayjs": {
    "path": "/package/dayjs",
    "title": "dayjs npm dependency risk archive",
    "description": "dayjs npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/minimist": {
    "path": "/package/minimist",
    "title": "minimist npm dependency risk archive",
    "description": "minimist npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/ws": {
    "path": "/package/ws",
    "title": "ws npm dependency risk archive",
    "description": "ws npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/semver": {
    "path": "/package/semver",
    "title": "semver npm dependency risk archive",
    "description": "semver npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/npm-run-all": {
    "path": "/package/npm-run-all",
    "title": "npm-run-all npm dependency risk archive",
    "description": "npm-run-all npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/pnpm": {
    "path": "/package/pnpm",
    "title": "pnpm npm dependency risk archive",
    "description": "pnpm npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/uuid": {
    "path": "/package/uuid",
    "title": "uuid npm dependency risk archive",
    "description": "uuid npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/package/nanoid": {
    "path": "/package/nanoid",
    "title": "nanoid npm dependency risk archive",
    "description": "nanoid npm dependency risk archive for frontend teams tracking security updates, breaking releases, OSV/CVE signals, release notes, affected audience, and recommended actions."
  },
  "/category/core-frameworks": {
    "path": "/category/core-frameworks",
    "title": "Frameworks and Core UI npm dependency risk",
    "description": "Frameworks and Core UI frontend npm dependency-risk directory with 11 package archives, current release-risk pages, OSV/CVE signals, breaking-change checks, release notes, and recommended actions."
  },
  "/category/build-tooling": {
    "path": "/category/build-tooling",
    "title": "Build Tooling npm dependency risk",
    "description": "Build Tooling frontend npm dependency-risk directory with 12 package archives, current release-risk pages, OSV/CVE signals, breaking-change checks, release notes, and recommended actions."
  },
  "/category/typescript-quality": {
    "path": "/category/typescript-quality",
    "title": "TypeScript and Code Quality npm dependency risk",
    "description": "TypeScript and Code Quality frontend npm dependency-risk directory with 7 package archives, current release-risk pages, OSV/CVE signals, breaking-change checks, release notes, and recommended actions."
  },
  "/category/routing-state-data": {
    "path": "/category/routing-state-data",
    "title": "Routing, State, and Data npm dependency risk",
    "description": "Routing, State, and Data frontend npm dependency-risk directory with 11 package archives, current release-risk pages, OSV/CVE signals, breaking-change checks, release notes, and recommended actions."
  },
  "/category/forms-validation": {
    "path": "/category/forms-validation",
    "title": "Forms and Validation npm dependency risk",
    "description": "Forms and Validation frontend npm dependency-risk directory with 4 package archives, current release-risk pages, OSV/CVE signals, breaking-change checks, release notes, and recommended actions."
  },
  "/category/testing-storybook": {
    "path": "/category/testing-storybook",
    "title": "Testing and Storybook npm dependency risk",
    "description": "Testing and Storybook frontend npm dependency-risk directory with 10 package archives, current release-risk pages, OSV/CVE signals, breaking-change checks, release notes, and recommended actions."
  },
  "/category/css-ui": {
    "path": "/category/css-ui",
    "title": "CSS and UI Libraries npm dependency risk",
    "description": "CSS and UI Libraries frontend npm dependency-risk directory with 17 package archives, current release-risk pages, OSV/CVE signals, breaking-change checks, release notes, and recommended actions."
  },
  "/category/utilities-runtime": {
    "path": "/category/utilities-runtime",
    "title": "JavaScript Utilities and Runtime npm dependency risk",
    "description": "JavaScript Utilities and Runtime frontend npm dependency-risk directory with 10 package archives, current release-risk pages, OSV/CVE signals, breaking-change checks, release notes, and recommended actions."
  },
  "/package/typescript/7.0.2": {
    "path": "/package/typescript/7.0.2",
    "title": "typescript 7.0.2 npm major version update",
    "description": "typescript 7.0.2 frontend npm update risk: Major version release detected. OSV: No OSV match. CVE: No CVE match. Recommended action: Review changes before updating. Test in staging before merging. GitHub release notes were..."
  },
  "/package/framer-motion/13.4.0": {
    "path": "/package/framer-motion/13.4.0",
    "title": "framer-motion 13.4.0 npm minor version update",
    "description": "framer-motion 13.4.0 frontend npm update risk: Minor version release detected with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance."
  },
  "/package/cypress/16.1.0": {
    "path": "/package/cypress/16.1.0",
    "title": "cypress 16.1.0 npm minor version update",
    "description": "cypress 16.1.0 frontend npm update risk: Minor version release detected with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub release..."
  },
  "/package/pnpm/12.4.2": {
    "path": "/package/pnpm/12.4.2",
    "title": "pnpm 12.4.2 npm release-note review update",
    "description": "pnpm 12.4.2 frontend npm update risk: Release notes mention security language, but no OSV or CVE match was found. OSV: No OSV match. CVE: No CVE match. Recommended action: Review if used. Confirm against OSV and CVE before..."
  },
  "/package/webpack/5.111.0": {
    "path": "/package/webpack/5.111.0",
    "title": "webpack 5.111.0 npm minor version update",
    "description": "webpack 5.111.0 frontend npm update risk: Minor version release detected with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub release..."
  },
  "/package/lucide-react/1.46.0": {
    "path": "/package/lucide-react/1.46.0",
    "title": "lucide-react 1.46.0 npm minor version update",
    "description": "lucide-react 1.46.0 frontend npm update risk: Minor version release detected with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub release..."
  },
  "/package/tailwind-merge/3.7.0": {
    "path": "/package/tailwind-merge/3.7.0",
    "title": "tailwind-merge 3.7.0 npm minor version update",
    "description": "tailwind-merge 3.7.0 frontend npm update risk: Minor version release detected with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub..."
  },
  "/package/apollo-client/4.3.0": {
    "path": "/package/apollo-client/4.3.0",
    "title": "@apollo/client 4.3.0 npm minor version update",
    "description": "@apollo/client 4.3.0 frontend npm update risk: Minor version release detected with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub..."
  },
  "/package/react-hook-form/7.88.0": {
    "path": "/package/react-hook-form/7.88.0",
    "title": "react-hook-form 7.88.0 npm minor version update",
    "description": "react-hook-form 7.88.0 frontend npm update risk: Minor version release detected with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub..."
  },
  "/package/vite/8.3.0": {
    "path": "/package/vite/8.3.0",
    "title": "vite 8.3.0 npm minor version update",
    "description": "vite 8.3.0 frontend npm update risk: Minor version release detected with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub release notes..."
  },
  "/package/react/19.3.0": {
    "path": "/package/react/19.3.0",
    "title": "react 19.3.0 npm minor version update",
    "description": "react 19.3.0 frontend npm update risk: Minor version release detected with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub release notes..."
  },
  "/package/react-dom/19.3.0": {
    "path": "/package/react-dom/19.3.0",
    "title": "react-dom 19.3.0 npm minor version update",
    "description": "react-dom 19.3.0 frontend npm update risk: Minor version release detected with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub release..."
  },
  "/package/types-react/19.3.0": {
    "path": "/package/types-react/19.3.0",
    "title": "@types/react 19.3.0 npm minor version update",
    "description": "@types/react 19.3.0 frontend npm update risk: Minor version release detected with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance."
  },
  "/package/types-react-dom/19.3.0": {
    "path": "/package/types-react-dom/19.3.0",
    "title": "@types/react-dom 19.3.0 npm minor version update",
    "description": "@types/react-dom 19.3.0 frontend npm update risk: Minor version release detected with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance."
  },
  "/package/typescript-eslint-parser/8.70.0": {
    "path": "/package/typescript-eslint-parser/8.70.0",
    "title": "@typescript-eslint/parser 8.70.0 npm minor version update",
    "description": "@typescript-eslint/parser 8.70.0 frontend npm update risk: Minor version release detected with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance..."
  },
  "/package/typescript-eslint-eslint-plugin/8.70.0": {
    "path": "/package/typescript-eslint-eslint-plugin/8.70.0",
    "title": "@typescript-eslint/eslint-plugin 8.70.0 npm minor version update",
    "description": "@typescript-eslint/eslint-plugin 8.70.0 frontend npm update risk: Minor version release detected with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: Review if used. Batch with normal dependency..."
  },
  "/package/eslint/10.10.0": {
    "path": "/package/eslint/10.10.0",
    "title": "eslint 10.10.0 npm minor version update",
    "description": "eslint 10.10.0 frontend npm update risk: Minor version release detected with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub release..."
  },
  "/package/playwright/1.63.0": {
    "path": "/package/playwright/1.63.0",
    "title": "playwright 1.63.0 npm minor version update",
    "description": "playwright 1.63.0 frontend npm update risk: Minor version release detected with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub release..."
  },
  "/package/storybook-react/10.6.0": {
    "path": "/package/storybook-react/10.6.0",
    "title": "@storybook/react 10.6.0 npm minor version update",
    "description": "@storybook/react 10.6.0 frontend npm update risk: Minor version release detected with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub..."
  },
  "/package/storybook/10.6.0": {
    "path": "/package/storybook/10.6.0",
    "title": "storybook 10.6.0 npm minor version update",
    "description": "storybook 10.6.0 frontend npm update risk: Minor version release detected with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub release..."
  },
  "/package/svelte/5.57.0": {
    "path": "/package/svelte/5.57.0",
    "title": "svelte 5.57.0 npm minor version update",
    "description": "svelte 5.57.0 frontend npm update risk: Minor version release detected with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub release notes..."
  },
  "/package/ky/2.1.0": {
    "path": "/package/ky/2.1.0",
    "title": "ky 2.1.0 npm minor version update",
    "description": "ky 2.1.0 frontend npm update risk: Minor version release detected with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub release notes were..."
  },
  "/package/chakra-ui-react/3.37.0": {
    "path": "/package/chakra-ui-react/3.37.0",
    "title": "@chakra-ui/react 3.37.0 npm minor version update",
    "description": "@chakra-ui/react 3.37.0 frontend npm update risk: Minor version release detected with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub..."
  },
  "/package/mui-material/9.4.0": {
    "path": "/package/mui-material/9.4.0",
    "title": "@mui/material 9.4.0 npm minor version update",
    "description": "@mui/material 9.4.0 frontend npm update risk: Minor version release detected with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub release..."
  },
  "/package/axios/1.20.0": {
    "path": "/package/axios/1.20.0",
    "title": "axios 1.20.0 npm minor version update",
    "description": "axios 1.20.0 frontend npm update risk: Minor version release detected with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub release notes..."
  },
  "/package/msw/2.15.0": {
    "path": "/package/msw/2.15.0",
    "title": "msw 2.15.0 npm minor version update",
    "description": "msw 2.15.0 frontend npm update risk: Minor version release detected with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub release notes..."
  },
  "/package/date-fns/4.4.0": {
    "path": "/package/date-fns/4.4.0",
    "title": "date-fns 4.4.0 npm minor version update",
    "description": "date-fns 4.4.0 frontend npm update risk: Minor version release detected with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub release..."
  },
  "/package/reduxjs-toolkit/2.12.0": {
    "path": "/package/reduxjs-toolkit/2.12.0",
    "title": "@reduxjs/toolkit 2.12.0 npm minor version update",
    "description": "@reduxjs/toolkit 2.12.0 frontend npm update risk: Minor version release detected with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub..."
  },
  "/package/emotion-react/11.14.0": {
    "path": "/package/emotion-react/11.14.0",
    "title": "@emotion/react 11.14.0 npm minor version update",
    "description": "@emotion/react 11.14.0 frontend npm update risk: Minor version release detected with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: Review if used. Batch with normal dependency maintenance. GitHub..."
  },
  "/package/npm-run-all/4.1.5": {
    "path": "/package/npm-run-all/4.1.5",
    "title": "npm-run-all 4.1.5 npm release-note review update",
    "description": "npm-run-all 4.1.5 frontend npm update risk: Release notes mention security language, but no OSV or CVE match was found. OSV: No OSV match. CVE: No CVE match. Recommended action: Review if used. Confirm against OSV and CVE..."
  },
  "/package/prettier/3.9.7": {
    "path": "/package/prettier/3.9.7",
    "title": "prettier 3.9.7 npm patch version update",
    "description": "prettier 3.9.7 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/tanstack-react-query/5.103.1": {
    "path": "/package/tanstack-react-query/5.103.1",
    "title": "@tanstack/react-query 5.103.1 npm patch version update",
    "description": "@tanstack/react-query 5.103.1 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/react-router-dom/7.18.4": {
    "path": "/package/react-router-dom/7.18.4",
    "title": "react-router-dom 7.18.4 npm patch version update",
    "description": "react-router-dom 7.18.4 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/vitest/5.0.1": {
    "path": "/package/vitest/5.0.1",
    "title": "vitest 5.0.1 npm patch version update",
    "description": "vitest 5.0.1 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/autoprefixer/10.6.1": {
    "path": "/package/autoprefixer/10.6.1",
    "title": "autoprefixer 10.6.1 npm patch version update",
    "description": "autoprefixer 10.6.1 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/rollup/4.63.3": {
    "path": "/package/rollup/4.63.3",
    "title": "rollup 4.63.3 npm patch version update",
    "description": "rollup 4.63.3 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/turbo/2.10.13": {
    "path": "/package/turbo/2.10.13",
    "title": "turbo 2.10.13 npm patch version update",
    "description": "turbo 2.10.13 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/zod/4.6.5": {
    "path": "/package/zod/4.6.5",
    "title": "zod 4.6.5 npm patch version update",
    "description": "zod 4.6.5 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/happy-dom/20.14.5": {
    "path": "/package/happy-dom/20.14.5",
    "title": "happy-dom 20.14.5 npm patch version update",
    "description": "happy-dom 20.14.5 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/sass/1.104.1": {
    "path": "/package/sass/1.104.1",
    "title": "sass 1.104.1 npm patch version update",
    "description": "sass 1.104.1 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/next/16.3.5": {
    "path": "/package/next/16.3.5",
    "title": "next 16.3.5 npm patch version update",
    "description": "next 16.3.5 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/babel-core/8.0.5": {
    "path": "/package/babel-core/8.0.5",
    "title": "@babel/core 8.0.5 npm patch version update",
    "description": "@babel/core 8.0.5 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/babel-preset-env/8.0.5": {
    "path": "/package/babel-preset-env/8.0.5",
    "title": "@babel/preset-env 8.0.5 npm patch version update",
    "description": "@babel/preset-env 8.0.5 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/angular-core/22.1.6": {
    "path": "/package/angular-core/22.1.6",
    "title": "@angular/core 22.1.6 npm patch version update",
    "description": "@angular/core 22.1.6 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/astro/7.3.2": {
    "path": "/package/astro/7.3.2",
    "title": "astro 7.3.2 npm patch version update",
    "description": "astro 7.3.2 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/swc-core/1.16.2": {
    "path": "/package/swc-core/1.16.2",
    "title": "@swc/core 1.16.2 npm patch version update",
    "description": "@swc/core 1.16.2 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/postcss/8.5.28": {
    "path": "/package/postcss/8.5.28",
    "title": "postcss 8.5.28 npm patch version update",
    "description": "postcss 8.5.28 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/less/4.9.1": {
    "path": "/package/less/4.9.1",
    "title": "less 4.9.1 npm patch version update",
    "description": "less 4.9.1 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/jest/30.5.1": {
    "path": "/package/jest/30.5.1",
    "title": "jest 30.5.1 npm patch version update",
    "description": "jest 30.5.1 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/vitejs-plugin-react/6.1.1": {
    "path": "/package/vitejs-plugin-react/6.1.1",
    "title": "@vitejs/plugin-react 6.1.1 npm patch version update",
    "description": "@vitejs/plugin-react 6.1.1 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/vue/3.5.42": {
    "path": "/package/vue/3.5.42",
    "title": "vue 3.5.42 npm patch version update",
    "description": "vue 3.5.42 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/testing-library-react/16.3.3": {
    "path": "/package/testing-library-react/16.3.3",
    "title": "@testing-library/react 16.3.3 npm patch version update",
    "description": "@testing-library/react 16.3.3 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/immer/11.1.18": {
    "path": "/package/immer/11.1.18",
    "title": "immer 11.1.18 npm patch version update",
    "description": "immer 11.1.18 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/uuid/14.0.2": {
    "path": "/package/uuid/14.0.2",
    "title": "uuid 14.0.2 npm patch version update",
    "description": "uuid 14.0.2 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/solid-js/1.9.15": {
    "path": "/package/solid-js/1.9.15",
    "title": "solid-js 1.9.15 npm patch version update",
    "description": "solid-js 1.9.15 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/dayjs/1.11.23": {
    "path": "/package/dayjs/1.11.23",
    "title": "dayjs 1.11.23 npm patch version update",
    "description": "dayjs 1.11.23 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/styled-components/6.5.3": {
    "path": "/package/styled-components/6.5.3",
    "title": "styled-components 6.5.3 npm patch version update",
    "description": "styled-components 6.5.3 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/zustand/5.0.15": {
    "path": "/package/zustand/5.0.15",
    "title": "zustand 5.0.15 npm patch version update",
    "description": "zustand 5.0.15 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/swr/2.5.1": {
    "path": "/package/swr/2.5.1",
    "title": "swr 2.5.1 npm patch version update",
    "description": "swr 2.5.1 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/testing-library-jest-dom/7.0.1": {
    "path": "/package/testing-library-jest-dom/7.0.1",
    "title": "@testing-library/jest-dom 7.0.1 npm patch version update",
    "description": "@testing-library/jest-dom 7.0.1 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/esbuild/0.28.2": {
    "path": "/package/esbuild/0.28.2",
    "title": "esbuild 0.28.2 npm patch version update",
    "description": "esbuild 0.28.2 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/ws/8.21.3": {
    "path": "/package/ws/8.21.3",
    "title": "ws 8.21.3 npm patch version update",
    "description": "ws 8.21.3 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/nuxt/4.5.2": {
    "path": "/package/nuxt/4.5.2",
    "title": "nuxt 4.5.2 npm patch version update",
    "description": "nuxt 4.5.2 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/nanoid/6.0.1": {
    "path": "/package/nanoid/6.0.1",
    "title": "nanoid 6.0.1 npm patch version update",
    "description": "nanoid 6.0.1 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/radix-ui-react-dialog/1.1.23": {
    "path": "/package/radix-ui-react-dialog/1.1.23",
    "title": "@radix-ui/react-dialog 1.1.23 npm patch version update",
    "description": "@radix-ui/react-dialog 1.1.23 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/radix-ui-react-popover/1.1.23": {
    "path": "/package/radix-ui-react-popover/1.1.23",
    "title": "@radix-ui/react-popover 1.1.23 npm patch version update",
    "description": "@radix-ui/react-popover 1.1.23 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/tailwindcss/4.3.3": {
    "path": "/package/tailwindcss/4.3.3",
    "title": "tailwindcss 4.3.3 npm patch version update",
    "description": "tailwindcss 4.3.3 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/graphql/17.0.2": {
    "path": "/package/graphql/17.0.2",
    "title": "graphql 17.0.2 npm patch version update",
    "description": "graphql 17.0.2 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/semver/7.8.5": {
    "path": "/package/semver/7.8.5",
    "title": "semver 7.8.5 npm patch version update",
    "description": "semver 7.8.5 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/babel-preset-react/8.0.1": {
    "path": "/package/babel-preset-react/8.0.1",
    "title": "@babel/preset-react 8.0.1 npm patch version update",
    "description": "@babel/preset-react 8.0.1 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/remix-run-react/2.17.5": {
    "path": "/package/remix-run-react/2.17.5",
    "title": "@remix-run/react 2.17.5 npm patch version update",
    "description": "@remix-run/react 2.17.5 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/lodash/4.18.1": {
    "path": "/package/lodash/4.18.1",
    "title": "lodash 4.18.1 npm patch version update",
    "description": "lodash 4.18.1 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/gatsby/5.16.1": {
    "path": "/package/gatsby/5.16.1",
    "title": "gatsby 5.16.1 npm patch version update",
    "description": "gatsby 5.16.1 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/parcel/2.16.4": {
    "path": "/package/parcel/2.16.4",
    "title": "parcel 2.16.4 npm patch version update",
    "description": "parcel 2.16.4 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/tsup/8.5.1": {
    "path": "/package/tsup/8.5.1",
    "title": "tsup 8.5.1 npm patch version update",
    "description": "tsup 8.5.1 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/formik/2.4.9": {
    "path": "/package/formik/2.4.9",
    "title": "formik 2.4.9 npm patch version update",
    "description": "formik 2.4.9 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/yup/1.7.1": {
    "path": "/package/yup/1.7.1",
    "title": "yup 1.7.1 npm patch version update",
    "description": "yup 1.7.1 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/class-variance-authority/0.7.1": {
    "path": "/package/class-variance-authority/0.7.1",
    "title": "class-variance-authority 0.7.1 npm patch version update",
    "description": "class-variance-authority 0.7.1 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/clsx/2.1.1": {
    "path": "/package/clsx/2.1.1",
    "title": "clsx 2.1.1 npm patch version update",
    "description": "clsx 2.1.1 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/classnames/2.5.1": {
    "path": "/package/classnames/2.5.1",
    "title": "classnames 2.5.1 npm patch version update",
    "description": "classnames 2.5.1 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/redux/5.0.1": {
    "path": "/package/redux/5.0.1",
    "title": "redux 5.0.1 npm patch version update",
    "description": "redux 5.0.1 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  },
  "/package/minimist/1.2.8": {
    "path": "/package/minimist/1.2.8",
    "title": "minimist 1.2.8 npm patch version update",
    "description": "minimist 1.2.8 frontend npm update risk: Patch release with no OSV match. OSV: No OSV match. CVE: No CVE match. Recommended action: No urgent action. Include in the next scheduled dependency update."
  }
};
