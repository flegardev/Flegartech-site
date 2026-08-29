import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TechStack } from "@/components/tech-stack";
import { siteConfig } from "@/data/site";
import { getRepositories } from "@/lib/github";

// Vercel refreshes the statically rendered repository catalog once per hour.
export const revalidate = 3600;

export default async function Home() {
  const repositories = await getRepositories();
  const hasPublicGitHubProfile = repositories.source === "github";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    alternateName: siteConfig.brandName,
    url: siteConfig.url,
    email: `mailto:${siteConfig.email}`,
    jobTitle: siteConfig.professionalTitle,
    description: siteConfig.description,
    ...(hasPublicGitHubProfile ? { sameAs: [siteConfig.githubUrl] } : {}),
    knowsAbout: [
      "Full-stack web development",
      "Product design",
      "API development",
      "Data modeling",
      "Artificial intelligence",
      "Software automation",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <SiteHeader />
      <main id="main">
        <Hero showGitHub={hasPublicGitHubProfile} />
        <Projects result={repositories} />
        <About />
        <TechStack />
        <Contact showGitHub={hasPublicGitHubProfile} />
      </main>
      <SiteFooter />
    </>
  );
}
