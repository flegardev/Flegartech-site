const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteConfig = {
  name: "Tini Flegar",
  professionalTitle: "Full-Stack Developer · IT & Finance",
  brandLine: "Software · IT · Fullstack",
  url: (configuredSiteUrl || "https://flegartech-site-main.vercel.app").replace(/\/$/, ""),
  email: "flegardev@gmail.com",
  githubUrl: "https://github.com/flegardev",
  githubHandle: "github.com/flegardev",
  title: "Tini Flegar | Full-Stack Developer · IT & Finance",
  description:
    "Portfolio of Tini Flegar, a full-stack developer building practical software, web applications, dashboards and finance-focused tools.",
};
