export type RiskLevel = "critical" | "security" | "breaking" | "review" | "low";

export type SourceLink = {
  label: string;
  href: string;
};

export type ReleaseItem = {
  id: string;
  packageName: string;
  packageSlug: string;
  description: string;
  oldVersion: string;
  newVersion: string;
  releaseDate: string;
  publishedAgo: string;
  isRecent: boolean;
  risk: RiskLevel;
  category: "Security" | "Breaking" | "Review" | "Low impact";
  osv: string;
  cve: string;
  reason: string;
  whyThisMatters: string;
  affectedAudience: string;
  recommendedAction: string;
  whatChanged: string;
  githubReleaseTitle: string;
  githubReleaseUrl: string;
  githubReleaseTag: string;
  githubReleasePublishedAt: string;
  releaseNotesExcerpt: string;
  releaseNotesStatus: string;
  route: string;
  sourceLinks: SourceLink[];
};

export type WeeklyDigest = {
  week: string;
  dateRange: string;
  risky: number;
  breaking: number;
  security: number;
  safe: number;
  total: number;
  topSignals?: WeeklyDigestSignal[];
  route?: string;
  generatedAt?: string;
};

export type WeeklyDigestSignal = {
  packageName: string;
  route: string;
  risk: RiskLevel;
  newVersion: string;
  reason: string;
  recommendedAction: string;
  whyThisMatters: string;
};

export type SeoRoute = {
  path: string;
  title: string;
  description: string;
};
