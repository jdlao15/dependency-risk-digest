import { useEffect, useMemo, useState } from "react";
import { digestArchive, generatedAt, generationFailures, packageRoutes, releases, seoRoutes, weeklyDigest } from "./data";
import type { ReleaseItem, RiskLevel, WeeklyDigest } from "./types";

const riskLabels: Record<RiskLevel, string> = {
  critical: "Critical",
  security: "Security",
  breaking: "Breaking",
  review: "Review",
  low: "Low",
};

const riskOrder: RiskLevel[] = ["critical", "security", "breaking", "review", "low"];
const siteUrl = "https://dependency-risk-digest.vercel.app";
const sponsorIssueUrl =
  "https://github.com/jdlao15/dependency-risk-digest/issues/new?template=sponsor-inquiry.yml";

function getInitialPath() {
  return window.location.pathname === "/" ? "/weekly" : window.location.pathname;
}

function App() {
  const [path, setPath] = useState(getInitialPath);
  const [query, setQuery] = useState("");
  const [riskFilter, setRiskFilter] = useState<"all" | RiskLevel>("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [selectedId, setSelectedId] = useState(releases[0].id);

  useEffect(() => {
    const onPopState = () => setPath(getInitialPath());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const selectedRelease =
    releases.find((release) => release.route === path) ??
    releases.find((release) => release.id === selectedId) ??
    releases[0];

  const pageMode = getPageMode(path);
  const archiveDigest =
    pageMode.kind === "weeklyArchive"
      ? digestArchive.find((digest) => digest.route === path) ?? digestArchive[0]
      : undefined;
  const breadcrumbItems = buildBreadcrumbItems(path, pageMode, selectedRelease);

  useEffect(() => {
    const seo = seoRoutes[path] ?? seoRoutes["/weekly"];
    const pageTitle = `${seo.title} | Dependency Risk Digest`;
    const pageUrl = `${siteUrl}${path}`;
    document.title = pageTitle;
    setMeta("name", "description", seo.description);
    setMeta("property", "og:title", pageTitle);
    setMeta("property", "og:description", seo.description);
    setMeta("property", "og:url", pageUrl);
    setMeta("name", "twitter:title", pageTitle);
    setMeta("name", "twitter:description", seo.description);
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = pageUrl;
  }, [path]);

  const visibleReleases = useMemo(() => {
    return releases.filter((release) => {
      const matchesQuery = `${release.packageName} ${release.newVersion} ${release.reason} ${release.category}`
        .toLowerCase()
        .includes(query.trim().toLowerCase());
      const matchesRisk = riskFilter === "all" || release.risk === riskFilter;
      const matchesCategory =
        categoryFilter === "all" || release.category === categoryFilter;
      const matchesRoute =
        pageMode.kind === "risk" ? release.risk === pageMode.risk : true;
      return matchesQuery && matchesRisk && matchesCategory && matchesRoute;
    });
  }, [categoryFilter, pageMode, query, riskFilter]);

  function navigate(nextPath: string) {
    window.history.pushState({}, "", nextPath);
    setPath(nextPath);
  }

  function chooseRelease(release: ReleaseItem) {
    setSelectedId(release.id);
    navigate(release.route);
  }

  return (
    <div className="app-shell">
      <Header path={path} navigate={navigate} query={query} setQuery={setQuery} />
      <main>
        <Hero navigate={navigate} />
        <Breadcrumbs items={breadcrumbItems} navigate={navigate} />
        {pageMode.kind === "weeklyArchive" && archiveDigest ? (
          <WeeklyArchivePage digest={archiveDigest} navigate={navigate} />
        ) : pageMode.kind === "sponsor" ? (
          <SponsorPage navigate={navigate} />
        ) : pageMode.kind === "methodology" ? (
          <MethodologyPage navigate={navigate} />
        ) : pageMode.kind === "package" ? (
          <PackagePage navigate={navigate} slug={pageMode.slug} />
        ) : (
          <ArchivePage
            path={path}
            title={pageMode.title}
            visibleReleases={visibleReleases}
            selectedRelease={selectedRelease}
            query={query}
            setQuery={setQuery}
            riskFilter={riskFilter}
            setRiskFilter={setRiskFilter}
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            chooseRelease={chooseRelease}
            navigate={navigate}
          />
        )}
      </main>
    </div>
  );
}

function Header({
  path,
  navigate,
  query,
  setQuery,
}: {
  path: string;
  navigate: (path: string) => void;
  query: string;
  setQuery: (query: string) => void;
}) {
  const links = [
    ["/weekly", "/weekly"],
    ["/package/react", "/package/react"],
    ["/risk/security", "/risk/security"],
    ["/risk/breaking", "/risk/breaking"],
    ["/risk/review", "/risk/review"],
    ["/methodology", "/methodology"],
    ["/sponsor", "/sponsor"],
  ];

  return (
    <header className="site-header">
      <button className="brand-link" type="button" onClick={() => navigate("/weekly")}>
        <span className="brand-name">Dependency Risk Digest</span>
        <span className="brand-copy">
          Automated risk analysis of npm updates that matter to frontend developers.
          <strong> Frontend packages only.</strong>
        </span>
      </button>
      <nav className="top-nav" aria-label="Archive routes">
        {links.map(([href, label]) => (
          <button
            className={path === href ? "nav-link active" : "nav-link"}
            key={href}
            type="button"
            onClick={() => navigate(href)}
          >
            {label}
          </button>
        ))}
      </nav>
      <label className="global-search">
        <span>Search</span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search packages, versions, CVEs..."
        />
      </label>
    </header>
  );
}

function setMeta(attribute: "name" | "property", key: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.content = content;
}

function Breadcrumbs({
  items,
  navigate,
}: {
  items: Array<{ label: string; path: string }>;
  navigate: (path: string) => void;
}) {
  if (items.length < 2) return null;
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={`${item.path}-${index}`}>
          {index > 0 ? <span className="breadcrumb-separator">/</span> : null}
          {index === items.length - 1 ? (
            <strong>{item.label}</strong>
          ) : (
            <button type="button" onClick={() => navigate(item.path)}>
              {item.label}
            </button>
          )}
        </span>
      ))}
    </nav>
  );
}

function Hero({ navigate }: { navigate: (path: string) => void }) {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <div className="hero-title-line">
          <h1>Latest Weekly Digest</h1>
          <span>{weeklyDigest.dateRange} ({weeklyDigest.week})</span>
        </div>
        <p>
          We analyze npm releases, changelogs, and advisories to surface risky,
          breaking, security-relevant, and low-impact updates so teams know what
          deserves attention across React, Vite, Next.js, TypeScript, Storybook,
          build tooling, test tooling, CSS packages, and JavaScript production apps.
        </p>
        <p className="generated-note">
          Based on npm registry metadata and OSV queries. Last updated:{" "}
          {formatDate(generatedAt.slice(0, 10))}
          {generationFailures.length > 0 ? `; ${generationFailures.length} packages skipped` : ""}.
        </p>
        <div className="hero-actions" aria-label="Digest actions">
          <button type="button" onClick={() => navigate("/sponsor")}>
            Sponsor this digest
          </button>
          <a href={sponsorIssueUrl} target="_blank" rel="noreferrer">
            Start inquiry
          </a>
        </div>
        <div className="metrics-grid" aria-label="Weekly summary">
          <Metric value={weeklyDigest.risky} label="Risky Updates" note="review recommended" tone="red" />
          <Metric value={weeklyDigest.breaking} label="Breaking Changes" note="potentially disruptive" tone="orange" />
          <Metric value={weeklyDigest.security} label="Security-Relevant" note="vulnerabilities fixed" tone="red" />
          <Metric value={weeklyDigest.safe} label="Safe to Ignore" note="low impact" tone="green" />
          <Metric value={weeklyDigest.total} label="Total Releases" note="analyzed" tone="dark" />
        </div>
      </div>
      <aside className="why-panel">
        <h2>Why This Matters</h2>
        <p>
          Not every update is safe. Some can break your build, change runtime
          behavior, or patch critical vulnerabilities.
        </p>
        <ul>
          <li>Automated analysis of npm releases and changelogs</li>
          <li>Correlated with OSV advisories and CVE data</li>
          <li>Tracks frontend dependency risk across React, Vite, Next.js, TypeScript, Storybook, and build tools</li>
          <li>Signal-focused: what to review vs. what to ignore</li>
          <li>Built for frontend developers shipping to production</li>
        </ul>
      </aside>
    </section>
  );
}

function Metric({
  value,
  label,
  note,
  tone,
}: {
  value: number;
  label: string;
  note: string;
  tone: "red" | "orange" | "green" | "dark";
}) {
  return (
    <div className="metric">
      <strong className={`metric-value ${tone}`}>{value}</strong>
      <span>{label}</span>
      <small>{note}</small>
    </div>
  );
}

function ArchivePage(props: {
  path: string;
  title: string;
  visibleReleases: ReleaseItem[];
  selectedRelease: ReleaseItem;
  query: string;
  setQuery: (query: string) => void;
  riskFilter: "all" | RiskLevel;
  setRiskFilter: (risk: "all" | RiskLevel) => void;
  categoryFilter: string;
  setCategoryFilter: (category: string) => void;
  chooseRelease: (release: ReleaseItem) => void;
  navigate: (path: string) => void;
}) {
  const {
    path,
    title,
    visibleReleases,
    selectedRelease,
    query,
    setQuery,
    riskFilter,
    setRiskFilter,
    categoryFilter,
    setCategoryFilter,
    chooseRelease,
    navigate,
  } = props;

  return (
    <>
      <section className="content-grid">
        <div className="release-panel">
          <div className="panel-heading">
            <h2>{title}</h2>
            <span className="count-pill">{visibleReleases.length}</span>
            <div className="filters">
              <select
                value={riskFilter}
                onChange={(event) => setRiskFilter(event.target.value as "all" | RiskLevel)}
                aria-label="Risk"
              >
                <option value="all">All Risk Levels</option>
                {riskOrder.map((risk) => (
                  <option value={risk} key={risk}>
                    {riskLabels[risk]}
                  </option>
                ))}
              </select>
              <select
                value={categoryFilter}
                onChange={(event) => setCategoryFilter(event.target.value)}
                aria-label="Category"
              >
                <option value="all">All Categories</option>
                <option value="Security">Security</option>
                <option value="Breaking">Breaking</option>
                <option value="Review">Review</option>
                <option value="Low impact">Low impact</option>
              </select>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Filter packages..."
                aria-label="Filter packages"
              />
            </div>
          </div>
          <p className="panel-description">{seoRoutes[path]?.description ?? seoRoutes["/weekly"].description}</p>
          <ReleaseTable releases={visibleReleases} chooseRelease={chooseRelease} />
        </div>
        <ReleaseDetail release={selectedRelease} navigate={navigate} />
      </section>
      <section className="lower-grid">
        <BreakingChanges navigate={navigate} />
        <DigestArchive navigate={navigate} />
      </section>
      <section className="route-strip" aria-label="Archive route structure">
        <h2>Stable Archive Routes</h2>
        <button type="button" onClick={() => navigate("/weekly")}>/weekly</button>
        <button type="button" onClick={() => navigate(getLatestWeeklyArchiveRoute())}>{getLatestWeeklyArchiveRoute()}</button>
        <button type="button" onClick={() => navigate("/package/react")}>/package/react</button>
        <button type="button" onClick={() => navigate(getReactLatestRoute())}>{getReactLatestRoute()}</button>
        <button type="button" onClick={() => navigate("/risk/security")}>/risk/security</button>
        <button type="button" onClick={() => navigate("/risk/breaking")}>/risk/breaking</button>
        <button type="button" onClick={() => navigate("/risk/review")}>/risk/review</button>
        <button type="button" onClick={() => navigate("/methodology")}>/methodology</button>
        <button type="button" onClick={() => navigate("/sponsor")}>/sponsor</button>
      </section>
    </>
  );
}

function getReactLatestRoute() {
  const routeMap = packageRoutes as Record<string, { latestReleaseRoute?: string }>;
  return routeMap.react?.latestReleaseRoute ?? "/package/react";
}

function getLatestWeeklyArchiveRoute() {
  return digestArchive[0]?.route ?? "/weekly";
}

function riskRouteFor(risk: RiskLevel) {
  if (risk === "security" || risk === "critical") return "/risk/security";
  if (risk === "breaking") return "/risk/breaking";
  return "/risk/review";
}

function ReleaseTable({
  releases: tableReleases,
  chooseRelease,
}: {
  releases: ReleaseItem[];
  chooseRelease: (release: ReleaseItem) => void;
}) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Risk</th>
            <th>Package</th>
            <th>Release</th>
            <th>OSV</th>
            <th>Recommended Action</th>
            <th>Why This Matters</th>
          </tr>
        </thead>
        <tbody>
          {tableReleases.map((release) => (
            <tr key={release.id}>
              <td>
                <span className={`risk-badge ${release.risk}`}>{riskLabels[release.risk]}</span>
              </td>
              <td>
                <button className="package-button" type="button" onClick={() => chooseRelease(release)}>
                  <strong>{release.packageName}</strong>
                  <span>{release.description}</span>
                </button>
              </td>
              <td>
                <strong>{release.newVersion}</strong>
                <span className="new-tag">new</span>
                <small>{release.publishedAgo}</small>
              </td>
              <td>
                <span className={release.osv.includes("No") ? "muted-text" : "linkish"}>
                  {release.osv}
                </span>
                <small>{release.cve}</small>
              </td>
              <td>
                <strong className={`action-text ${release.risk}`}>{release.recommendedAction.split(".")[0]}</strong>
                <small>{release.reason}</small>
              </td>
              <td>
                <button className="text-link" type="button" onClick={() => chooseRelease(release)}>
                  View details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {tableReleases.length === 0 && (
        <div className="empty-state">No releases match the current filters.</div>
      )}
    </div>
  );
}
function ReleaseDetail({ release, navigate }: { release: ReleaseItem; navigate: (path: string) => void }) {
  return (
    <aside className={`detail-panel ${release.risk}`}>
      <div className="detail-heading">
        <div>
          <h2>{release.packageName} {release.newVersion}</h2>
          <p>{release.description}</p>
          <small>{release.publishedAgo} - {formatDate(release.releaseDate)}</small>
        </div>
        <span className={`risk-badge ${release.risk}`}>{riskLabels[release.risk]}</span>
      </div>
      <DetailBlock title="Risk Summary">{release.reason}</DetailBlock>
      <dl className="detail-list">
        <div><dt>OSV</dt><dd>{release.osv}</dd></div>
        <div><dt>CVE</dt><dd>{release.cve}</dd></div>
        <div><dt>Affected</dt><dd>{release.affectedAudience}</dd></div>
        <div><dt>Previous</dt><dd>{release.oldVersion}</dd></div>
        <div><dt>Current</dt><dd>{release.newVersion}</dd></div>
      </dl>
      <DetailBlock title="Recommended Action">{release.recommendedAction}</DetailBlock>
      <DetailBlock title="Why This Matters">{release.whyThisMatters}</DetailBlock>
      <DetailBlock title="What Changed">{release.whatChanged}</DetailBlock>
      <DetailBlock title="GitHub Release Notes">
        {release.releaseNotesExcerpt || release.releaseNotesStatus}
      </DetailBlock>
      <div className="source-links">
        <button type="button" onClick={() => navigate(`/package/${release.packageSlug}`)}>
          Package archive
        </button>
        <button type="button" onClick={() => navigate(riskRouteFor(release.risk))}>
          Related risk page
        </button>
        <button type="button" onClick={() => navigate(getLatestWeeklyArchiveRoute())}>
          Weekly archive
        </button>
        {release.sourceLinks.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </aside>
  );
}

function DetailBlock({ title, children }: { title: string; children: string }) {
  return (
    <section className="detail-block">
      <h3>{title}</h3>
      <p>{children}</p>
    </section>
  );
}

function BreakingChanges({ navigate }: { navigate: (path: string) => void }) {
  const breaking = releases.filter((release) => release.risk === "breaking");
  return (
    <section className="summary-panel">
      <div className="section-title-row">
        <h2>Breaking Changes This Week</h2>
        <span className="count-pill orange">{weeklyDigest.breaking}</span>
      </div>
      <div className="mini-table">
        {breaking.map((release) => (
          <button key={release.id} type="button" onClick={() => navigate(release.route)}>
            <strong>{release.packageName}</strong>
            <span>{release.newVersion}</span>
            <span>{release.whatChanged}</span>
            <em>Review changes</em>
          </button>
        ))}
      </div>
    </section>
  );
}

function DigestArchive({ navigate }: { navigate: (path: string) => void }) {
  return (
    <section className="summary-panel">
      <div className="section-title-row">
        <h2>Digest Archive</h2>
        <button type="button" onClick={() => navigate("/weekly")}>View all weekly digests</button>
      </div>
      <div className="archive-list">
        {digestArchive.map((digest) => (
          <ArchiveRow digest={digest} key={digest.route ?? digest.week} navigate={navigate} />
        ))}
      </div>
    </section>
  );
}

function ArchiveRow({ digest, navigate }: { digest: WeeklyDigest; navigate: (path: string) => void }) {
  return (
    <button className="archive-row" type="button" onClick={() => navigate(digest.route ?? "/weekly")}>
      <strong>{digest.week}</strong>
      <span>{digest.dateRange}</span>
      <span>{digest.risky} risky</span>
      <span>{digest.breaking} breaking</span>
      <span>{digest.security} security</span>
      <span>{digest.total} total</span>
    </button>
  );
}

function WeeklyArchivePage({ digest, navigate }: { digest: WeeklyDigest; navigate: (path: string) => void }) {
  return (
    <section className="package-page">
      <div>
        <h1>{digest.week}</h1>
        <p>
          {digest.dateRange} archived frontend npm dependency-risk summary with
          OSV/CVE checks, breaking-change signals, release notes, and recommended
          actions for tracked React, JavaScript, and frontend packages.
        </p>
      </div>
      <div className="package-summary-grid">
        <div>
          <span>Archived route</span>
          <strong>{digest.route ?? "/weekly"}</strong>
        </div>
        <div>
          <span>Risky updates</span>
          <strong>{digest.risky}</strong>
        </div>
        <div>
          <span>Total releases</span>
          <strong>{digest.total}</strong>
        </div>
      </div>
      <div className="package-empty">
        <h2>{digest.security} security-relevant, {digest.breaking} breaking, {digest.safe} safe to ignore</h2>
        <p>
          Historical weekly pages are preserved in the sitemap so older dependency-risk digests,
          npm security updates, and breaking release summaries remain addressable.
        </p>
        <button type="button" onClick={() => navigate("/weekly")}>View latest weekly digest</button>
      </div>
      {digest.topSignals && digest.topSignals.length > 0 ? (
        <section className="package-release-list" aria-label="Archived risk signals">
          <h2>Top Archived Risk Signals</h2>
          {digest.topSignals.map((signal) => (
            <button key={`${signal.packageName}-${signal.newVersion}`} type="button" onClick={() => navigate(signal.route)}>
              <span className={`risk-badge ${signal.risk}`}>{riskLabels[signal.risk]}</span>
              <strong>{signal.packageName} {signal.newVersion}</strong>
              <span>{signal.reason}</span>
              <small>{signal.recommendedAction}</small>
            </button>
          ))}
        </section>
      ) : null}
    </section>
  );
}

function PackagePage({ navigate, slug }: { navigate: (path: string) => void; slug: string }) {
  const routeMap = packageRoutes as Record<
    string,
    {
      packageName: string;
      description: string;
      route: string;
      latestReleaseRoute?: string;
    }
  >;
  const packageInfo = routeMap[slug];
  const relatedReleases = releases.filter((release) => release.packageSlug === slug);

  if (!packageInfo) {
    return (
      <section className="package-page">
        <div>
          <h1>Package coverage unavailable</h1>
          <p>This package is not currently covered by Dependency Risk Digest.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="package-page">
      <div>
        <h1>{packageInfo.packageName}</h1>
        <p>{packageInfo.description}</p>
        <p>
          This package archive tracks npm release risk, OSV vulnerability results,
          CVE signals, GitHub release notes, affected audience, and recommended
          update actions for frontend teams.
        </p>
      </div>
      <div className="package-summary-grid">
        <div>
          <span>Tracked route</span>
          <strong>{packageInfo.route}</strong>
        </div>
        <div>
          <span>Current scope</span>
          <strong>Frontend packages only</strong>
        </div>
        <div>
          <span>Latest release-risk page</span>
          <button type="button" onClick={() => navigate(packageInfo.latestReleaseRoute ?? packageInfo.route)}>
            {packageInfo.latestReleaseRoute ?? packageInfo.route}
          </button>
        </div>
      </div>
      <div className="package-empty">
        <h2>{relatedReleases.length} release covered in the current digest</h2>
        <p>
          This package page is part of the tracked frontend dependency set. It keeps a
          stable archive URL for release-risk signals, OSV results, CVE checks, and
          recommended update actions.
        </p>
      </div>
      <section className="package-link-panel" aria-label={`${packageInfo.packageName} related archive links`}>
        <h2>Related Dependency-Risk Routes</h2>
        <button type="button" onClick={() => navigate(packageInfo.latestReleaseRoute ?? packageInfo.route)}>
          Latest release-risk page
        </button>
        <button type="button" onClick={() => navigate(getLatestWeeklyArchiveRoute())}>
          Current weekly archive
        </button>
        <button type="button" onClick={() => navigate(relatedReleases[0] ? riskRouteFor(relatedReleases[0].risk) : "/risk/review")}>
          Related risk category
        </button>
        <button type="button" onClick={() => navigate("/risk/security")}>
          Security updates
        </button>
        <button type="button" onClick={() => navigate("/risk/breaking")}>
          Breaking changes
        </button>
      </section>
      {relatedReleases.length > 0 ? (
        <section className="package-release-list" aria-label={`${packageInfo.packageName} release risk history`}>
          <h2>Current Release Risk Signals</h2>
          {relatedReleases.map((release) => (
            <button key={release.id} type="button" onClick={() => navigate(release.route)}>
              <span className={`risk-badge ${release.risk}`}>{riskLabels[release.risk]}</span>
              <strong>{release.packageName} {release.newVersion}</strong>
              <span>{release.whyThisMatters}</span>
              <small>{release.recommendedAction}</small>
            </button>
          ))}
        </section>
      ) : null}
    </section>
  );
}

function SponsorPage({ navigate }: { navigate: (path: string) => void }) {
  return (
    <section className="sponsor-page">
      <div className="sponsor-hero">
        <p className="eyebrow">Sponsorship inquiries</p>
        <h1>Sponsor Dependency Risk Digest</h1>
        <p>
          Reach frontend developers and small teams who are actively reviewing npm
          dependency risk, security updates, breaking changes, OSV/CVE signals,
          React dependencies, Vite, Next.js, TypeScript, Storybook, and JavaScript
          release notes before they update production apps.
        </p>
        <div className="sponsor-actions">
          <a href={sponsorIssueUrl} target="_blank" rel="noreferrer">
            Start sponsorship inquiry
          </a>
          <button type="button" onClick={() => navigate("/weekly")}>
            View latest digest
          </button>
        </div>
      </div>
      <div className="sponsor-grid">
        <section>
          <h2>Current Offer</h2>
          <p>
            Sponsors can request a weekly digest placement or a package-page
            mention. Each inquiry is reviewed for fit with frontend developers
            tracking dependency risk.
          </p>
        </section>
        <section>
          <h2>Audience</h2>
          <p>
            Frontend engineers, indie SaaS builders, and small teams checking
            security, breaking-change, and review signals for common npm packages,
            frontend frameworks, build tools, testing tools, and UI libraries.
          </p>
        </section>
        <section>
          <h2>Why This Matters</h2>
          <p>
            The digest is built around package risk, release notes, OSV results,
            CVE signals, affected audience, and recommended action, so sponsor
            placement appears next to the dependency-risk workflow visitors came
            to inspect.
          </p>
        </section>
      </div>
      <div className="sponsor-note">
        <strong>Direct sponsorship inquiries</strong>
        <span>
          Use the inquiry form to share your company, audience, and preferred
          placement. Each sponsor inquiry is reviewed for audience fit before
          availability is confirmed.
        </span>
      </div>
    </section>
  );
}

function MethodologyPage({ navigate }: { navigate: (path: string) => void }) {
  return (
    <section className="methodology-page">
      <div className="methodology-hero">
        <p className="eyebrow">Risk methodology</p>
        <h1>How Dependency Risk Digest Evaluates Frontend npm Updates</h1>
        <p>
          Dependency Risk Digest reviews common frontend npm packages for release
          risk, security relevance, breaking-change signals, OSV and CVE matches,
          affected audience, and practical update guidance for JavaScript teams.
        </p>
      </div>
      <div className="methodology-grid">
        <section>
          <h2>Data Sources</h2>
          <p>
            Package versions, publish dates, and release metadata come from the npm
            registry. Vulnerability signals are checked against OSV data, CVE
            references, and security language in public release notes.
          </p>
        </section>
        <section>
          <h2>Risk Labels</h2>
          <p>
            Security and critical updates are prioritized when vulnerability or
            security-fix language appears. Breaking updates focus on major package
            releases. Review updates cover non-urgent changes that still deserve
            dependency maintenance attention.
          </p>
        </section>
        <section>
          <h2>Frontend Scope</h2>
          <p>
            Coverage focuses on React, Vite, Next.js, TypeScript, Storybook,
            build tools, testing tools, CSS packages, routing, state management,
            forms, data fetching, and UI dependency workflows.
          </p>
        </section>
        <section>
          <h2>Recommended Actions</h2>
          <p>
            Each release summary explains whether to prioritize an update, review
            changelogs before upgrading, batch with routine dependency work, or
            treat the update as low urgency.
          </p>
        </section>
      </div>
      <div className="methodology-actions">
        <button type="button" onClick={() => navigate("/weekly")}>
          View latest digest
        </button>
        <button type="button" onClick={() => navigate("/risk/security")}>
          View security updates
        </button>
        <button type="button" onClick={() => navigate("/package/react")}>
          View React package archive
        </button>
      </div>
    </section>
  );
}

function getPageMode(path: string):
  | { kind: "weekly"; title: string }
  | { kind: "weeklyArchive"; title: string }
  | { kind: "risk"; title: string; risk: RiskLevel }
  | { kind: "package"; title: string; slug: string }
  | { kind: "sponsor"; title: string }
  | { kind: "methodology"; title: string }
  | { kind: "release"; title: string } {
  if (path === "/methodology") {
    return { kind: "methodology", title: "Dependency Risk Methodology" };
  }
  if (path === "/sponsor") {
    return { kind: "sponsor", title: "Sponsor Dependency Risk Digest" };
  }
  if (path.startsWith("/weekly/")) {
    return { kind: "weeklyArchive", title: "Weekly Archive" };
  }
  if (path === "/risk/security") {
    return { kind: "risk", title: "Security-Relevant Releases", risk: "security" };
  }
  if (path === "/risk/breaking") {
    return { kind: "risk", title: "Breaking Changes This Week", risk: "breaking" };
  }
  if (path === "/risk/review") {
    return { kind: "risk", title: "Updates To Review", risk: "review" };
  }
  const packageMatch = path.match(/^\/package\/([^/]+)$/);
  if (packageMatch) {
    return { kind: "package", title: "Package Archive", slug: packageMatch[1] };
  }
  if (path.startsWith("/package/")) {
    return { kind: "release", title: "Release Detail" };
  }
  return { kind: "weekly", title: "Top Risky Updates This Week" };
}

function buildBreadcrumbItems(
  path: string,
  pageMode: ReturnType<typeof getPageMode>,
  selectedRelease: ReleaseItem,
) {
  const items = [{ label: "Latest Weekly Digest", path: "/weekly" }];
  if (path === "/weekly" || path === "/") return items;
  if (pageMode.kind === "weeklyArchive") {
    const digest = digestArchive.find((item) => item.route === path);
    return [...items, { label: digest?.week ?? "Weekly Archive", path }];
  }
  if (pageMode.kind === "sponsor") {
    return [...items, { label: "Sponsor", path: "/sponsor" }];
  }
  if (pageMode.kind === "methodology") {
    return [...items, { label: "Methodology", path: "/methodology" }];
  }
  if (pageMode.kind === "risk") {
    return [...items, { label: "Risk", path: "/risk/security" }, { label: pageMode.title, path }];
  }
  if (pageMode.kind === "package") {
    const routeMap = packageRoutes as Record<string, { packageName: string }>;
    return [...items, { label: routeMap[pageMode.slug]?.packageName ?? pageMode.slug, path }];
  }
  if (pageMode.kind === "release") {
    return [
      ...items,
      { label: selectedRelease.packageName, path: `/package/${selectedRelease.packageSlug}` },
      { label: selectedRelease.newVersion, path: selectedRelease.route },
    ];
  }
  return items;
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00`));
}

export default App;
