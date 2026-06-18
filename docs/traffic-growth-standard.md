# Dependency Risk Digest Traffic Growth Standard

This is the recurring, source-backed standard for deciding whether Dependency Risk Digest is getting traffic and what to improve next. It is intentionally no-cost and does not require paid analytics, checkout, ads, accounts, dashboards on the public site, Slack, newsletters, or manual custom reports.

## External Standards

- Google Search Central SEO Starter Guide: prioritize useful content, clear page titles, accurate descriptions, crawlable links, and pages that accurately describe their contents.
- Google Search Central Helpful Content guidance: content should primarily help people, not exist only to manipulate search ranking.
- Bing Webmaster Guidelines: keep URLs discoverable with XML sitemaps, crawlable internal links, canonical URLs, current site structure, and freshness signals.
- Vercel Web Analytics: use visitors, page views, top pages, referrers, locations, devices, and browsers to understand whether people are visiting and where they come from.

Source URLs:

- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- https://www.bing.com/webmasters/help/bing-webmaster-guidelines-30fba23a
- https://vercel.com/docs/analytics

## Weekly Scorecard

Every recurring traffic review compares the site against these gates.

| Gate | Pass Standard | Why It Exists |
| --- | --- | --- |
| Measurement | Vercel Web Analytics tracker is installed and live | Visitor counts must come from measured production traffic, not guesses |
| Search reporting | Google Search Console and Bing Webmaster Tools have the sitemap submitted | Search impressions and clicks are the earliest traffic signal for a new archive |
| Crawlability | robots.txt allows crawling and links to sitemap.xml | Search engines need a clear discovery path |
| Sitemap coverage | Sitemap includes weekly, package, category, risk, methodology, RSS, and archive routes | Bing and Google both rely on clear current URL lists |
| Canonical URLs | Important routes have canonical URLs | Prevents route duplication and keeps signals consolidated |
| Unique page value | Weekly, package, category, and risk pages have distinct titles, descriptions, summaries, and internal links | Avoids thin duplicate generated pages |
| Search intent coverage | Important routes include clear frontend npm, dependency risk, security, OSV/CVE, breaking-release, and package-specific language | Search snippets need to match what developers are likely searching for |
| Freshness | Generated content timestamp is inside the expected refresh window | Dependency-risk content loses value if it goes stale |
| Internal linking | Important pages link across weekly, package, category, risk, and methodology routes | Helps readers and crawlers move through the archive |
| No paid-tool dependency | Measurement and growth review work without paid services | The project must stay owner-light until revenue exists |

## Traffic Decision Rules

Use the same decision rules every time.

| Signal | Meaning | Next No-Cost Move |
| --- | --- | --- |
| Vercel visitors are unknown | Measurement is blocked | Fix analytics/dashboard access before judging growth |
| 7-day visitors are 0 | The site is not yet receiving measurable visits | Confirm sitemap submission, check index coverage, improve titles/descriptions for the top public routes |
| Impressions are 0 | Search engines are not showing the site yet | Verify indexing, sitemap submission, crawlability, and whether pages are too thin or too new |
| Impressions exist but clicks are 0 | Pages are appearing but not earning clicks | Improve title/description wording for the pages and queries that receive impressions |
| Impressions exist but query/page tables are empty | Google is testing or anonymizing low-volume data | Improve sitewide titles, descriptions, and internal links while waiting for more visible detail |
| Some package pages get views | Users care about those package topics | Expand and strengthen the same package/category template pattern |
| Weekly page gets views but package pages do not | Readers are not moving deeper | Improve internal links from weekly digest rows to package and release pages |
| Package pages get views but weekly page does not | Search is landing on specific packages | Make package pages clearer, then route readers to current digest and related risk pages |
| Referrers show GitHub, Reddit, Hacker News, newsletters, or blogs | External discovery is working | Create more linkable package/risk pages around the same topic cluster |
| Traffic is flat for 2+ reviews | Current content is not compounding | Improve page templates, metadata, internal links, and package/topic coverage based on Search Console queries |

## What Codex Must Check Repeatedly

Codex should not make up traffic status. Each review must classify traffic as one of:

- Growing: visitors or search clicks increased compared with the prior review.
- Flat: visitors and search clicks are present but not improving.
- Zero: analytics/search tools show no measurable visits or clicks.
- Unknown: required metrics are not accessible.
- Blocked: setup prevents measurement or indexing.

Each review should produce the smallest useful no-cost next action. Do not add paid tools or monetization features just to create a metric.

When Google Search Console shows impressions but no clicks, improve the search-result pitch first:

- Make title tags more specific to developer intent.
- Keep descriptions accurate, useful, and concise.
- Prefer concrete phrases such as frontend npm security updates, dependency risk, OSV/CVE signals, breaking npm package releases, React dependency updates, and recommended update actions.
- Do not keyword-stuff or create pages only for search engines; the page must still help frontend developers decide what to review.

## Required Metrics To Read

From Vercel Web Analytics:

- 7-day visitors
- 7-day page views
- Top pages
- Top referrers
- Countries/devices/browsers if useful

From Google Search Console:

- 7-day and 28-day clicks
- 7-day and 28-day impressions
- Top queries
- Top pages
- Indexing errors or sitemap errors

From Bing Webmaster Tools:

- Search clicks
- Search impressions
- Top pages or indexed URL issues
- Sitemap status

If Codex cannot access one of these dashboards, Codex must ask JP for the exact numbers instead of pretending the metric is known.
