# Dependency Risk Digest

Public archive for frontend npm dependency updates that are risky, breaking, security-relevant, or safe to ignore.

## Current State

- React + Vite public archive site.
- Curated 82-package frontend tracking list in `data/tracked-packages.json`.
- Local generator pulls npm registry metadata, OSV results, and GitHub release notes.
- Generated app data is written to `src/generatedDigest.ts`.
- JSON export is written to `data/latest-digest.json`.
- Route metadata, route-specific HTML, sitemap paths, and the RSS feed are generated with the digest.

## Local Commands

Use the portable Node/npm runtime if the system Node install is blocked on this machine.

```powershell
$env:Path = 'C:\Users\jpdel\.cache\codex-node\node-v22.11.0-win-x64;' + $env:Path
npm run generate:digest
npm run build
npm run dev -- --port 5173
```

One-command refresh:

```powershell
npm run refresh
```

`npm run refresh` regenerates digest data, writes static SEO files, and builds the app.

## Environment

Set `GITHUB_TOKEN` as a user or deployment environment variable. Do not commit the real token.

The token only needs access sufficient to read public release data. Fine-grained token setup:

- Repository access: public repositories.
- Repository permissions: Contents read-only.
- Metadata read-only/default.
- Everything else: no access.

## Deployment Notes

The included `vercel.json` builds with `npm run refresh`, outputs `dist`, and rewrites all archive routes to `index.html` so routes such as `/weekly`, `/packages`, `/category/core-frameworks`, `/package/react`, `/methodology`, and `/risk/breaking` work on static hosting.

Static SEO assets are generated into `public/sitemap.xml`, `public/robots.txt`, `public/feed.xml`, and route-specific HTML files in `dist`.

## Public Archive and Advertising

Dependency Risk Digest stays free, public, and lightweight. The `/advertise` page uses a public advertising inquiry issue for relevant ad placements.

Do not add tools or services that create routine owner work or recurring cost without explicit owner approval.

## Automated Refresh

`.github/workflows/refresh-digest.yml` runs the free daily refresh path on GitHub Actions. It regenerates digest data, package-category directory routes, sitemap paths, static SEO assets, and the TypeScript data file, then commits generated changes back to `main` when the output changed.

The next external steps are:

1. Create or choose a GitHub repository.
2. Push this local repository.
3. Connect the repository to Vercel.
4. Add `GITHUB_TOKEN` to Vercel environment variables.
5. Deploy.

## Product Boundaries

The current product intentionally has no accounts, no custom watchlists, no repo scans, no Slack alerts, no backend, and no AI summaries.
