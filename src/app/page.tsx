import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Engagement } from "@/components/engagement";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TechStack } from "@/components/tech-stack";
import { siteConfig } from "@/data/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  jobTitle: siteConfig.professionalTitle,
  description: siteConfig.description,
  image: `${siteConfig.url}/brand/tini-flegar-profile-dark.png`,
  sameAs: [siteConfig.githubUrl],
  knowsAbout: [
    "Web development",
    "MVP development",
    "Dashboards",
    "Automation tools",
    "API development",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />
      <main id="main" className="min-h-screen overflow-x-clip bg-[#050505] text-white">
        <Hero />
        <Services />
        <Projects />
        <About />
        <TechStack />
        <Process />
        <Engagement />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
