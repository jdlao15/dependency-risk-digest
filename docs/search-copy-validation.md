# Search Copy Validation

Search copy changes must be tied to Google Search Console evidence and checked against external sources before implementation.

## Validated Override: ws 8.21.0

- Page: `/package/ws/8.21.0`
- GSC query: `"maxbufferedchunks" "maxfragments" ws npm documentation`
- GSC signal: 20 impressions, 0 clicks, average position 5.7
- External source evidence:
  - The official `websockets/ws` release notes say version 8.21.0 introduced `maxBufferedChunks` and `maxFragments` and fixed a remote memory exhaustion DoS issue.
  - The official `ws` documentation describes `maxBufferedChunks` and `maxFragments` as WebSocket options.
  - Google Search Central says meta descriptions should be unique, accurate, useful summaries of the specific page.
  - Yoast's public guidance recommends using the focus keyphrase naturally, keeping the description concise, and matching the page content.

Approved title:

`ws 8.21.0 maxBufferedChunks and maxFragments Security Update`

Approved description:

`ws 8.21.0 added maxBufferedChunks and maxFragments and fixed a remote memory exhaustion DoS risk. See OSV/CVE status and recommended update action.`
