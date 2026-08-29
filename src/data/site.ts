const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const vercelSiteUrl =
  process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() ||
  process.env.VERCEL_URL?.trim();
const repositoryOwner =
  process.env.VERCEL_GIT_REPO_OWNER?.trim() ||
  process.env.GITHUB_REPOSITORY_OWNER?.trim();
const githubUsername =
  process.env.GITHUB_USERNAME?.trim() || repositoryOwner || "flegardev";

function normalizeSiteUrl(value: string): string {
  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  return withProtocol.replace(/\/$/, "");
}

const defaultSiteUrl = "https://flegartech-site-main.vercel.app";

export const siteConfig = {
  brandName: "FlegarDev",
  name: "Tini Flegar",
  professionalTitle: "Full-Stack Developer · Software & IT",
  brandLine: "Software · IT · Fullstack",
  url: normalizeSiteUrl(configuredSiteUrl || vercelSiteUrl || defaultSiteUrl),
  basePath: "",
  email: "flegardev@gmail.com",
  githubUsername,
  githubUrl: `https://github.com/${githubUsername}`,
  title: "FlegarDev | Full-Stack Software & Digital Products",
  description:
    "FlegarDev is the portfolio of Tini Flegar, a full-stack developer building thoughtful web applications, APIs, automation systems and finance-focused products.",
};
