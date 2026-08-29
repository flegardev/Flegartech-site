import { createFallbackRepositories } from "@/data/fallback-repositories";
import { siteConfig } from "@/data/site";

type GitHubRepositoryResponse = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  archived: boolean;
  topics?: string[];
  updated_at: string;
};

export type PortfolioRepository = {
  id: string;
  name: string;
  description: string;
  url: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  forks: number;
  topics: string[];
  categories: string[];
  updatedAt: string | null;
  source: "github" | "curated";
};

export type RepositoryResult = {
  repositories: PortfolioRepository[];
  source: "github" | "curated";
  username: string;
};

const categoryRules: Array<[string, RegExp]> = [
  ["AI", /\b(ai|artificial intelligence|machine learning|ml|llm|openai|gpt)\b/i],
  ["Finance", /\b(finance|fintech|trading|budget|portfolio|market)\b/i],
  ["Data", /\b(data|analytics|telematics|visualization|database|postgres|sql)\b/i],
  ["Tools", /\b(automation|extension|cli|tool|productivity|bot|scraper)\b/i],
  ["Frontend", /\b(frontend|react|vue|svelte|css|tailwind|ui|pwa)\b/i],
  ["Backend", /\b(backend|api|server|fastapi|nestjs|symfony|node|python|php)\b/i],
  ["Fullstack", /\b(fullstack|full-stack|nextjs|next\.js|web app|platform|marketplace)\b/i],
];

function categorize(repository: GitHubRepositoryResponse): string[] {
  const text = [
    repository.name,
    repository.description,
    repository.language,
    ...(repository.topics ?? []),
  ]
    .filter(Boolean)
    .join(" ");

  const categories = categoryRules
    .filter(([, pattern]) => pattern.test(text))
    .map(([label]) => label);

  return categories.length > 0 ? categories : ["Other"];
}

function mapRepository(repository: GitHubRepositoryResponse): PortfolioRepository {
  return {
    id: String(repository.id),
    name: repository.name,
    description: repository.description?.trim() || "An open-source project from FlegarDev.",
    url: repository.html_url,
    homepage: repository.homepage?.trim() || null,
    language: repository.language,
    stars: repository.stargazers_count,
    forks: repository.forks_count,
    topics: repository.topics ?? [],
    categories: categorize(repository),
    updatedAt: repository.updated_at,
    source: "github",
  };
}

export async function getRepositories(): Promise<RepositoryResult> {
  const endpoint = `https://api.github.com/users/${encodeURIComponent(siteConfig.githubUsername)}/repos?sort=updated&per_page=100`;
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "FlegarDev-portfolio-build",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const response = await fetch(endpoint, {
      headers,
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      throw new Error(`GitHub API returned ${response.status}`);
    }

    const data = (await response.json()) as GitHubRepositoryResponse[];
    const repositories = data
      .filter((repository) => !repository.fork && !repository.archived)
      .map(mapRepository)
      .sort(
        (a, b) =>
          b.stars - a.stars ||
          (b.updatedAt ?? "").localeCompare(a.updatedAt ?? "") ||
          (a.language ?? "").localeCompare(b.language ?? "") ||
          a.description.localeCompare(b.description),
      );

    if (repositories.length > 0) {
      return { repositories, source: "github", username: siteConfig.githubUsername };
    }
  } catch (error) {
    console.warn(
      "GitHub repositories could not be loaded during the build; using the curated portfolio fallback.",
      error instanceof Error ? error.message : error,
    );
  }

  return {
    repositories: createFallbackRepositories(siteConfig.githubUsername),
    source: "curated",
    username: siteConfig.githubUsername,
  };
}
