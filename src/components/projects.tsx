import { ProjectsBrowser } from "@/components/projects-browser";
import { SectionHeading } from "@/components/section-heading";
import type { RepositoryResult } from "@/lib/github";

type ProjectsProps = {
  result: RepositoryResult;
};

export function Projects({ result }: ProjectsProps) {
  return (
    <section id="projects" className="page-shell py-24 sm:py-32">
      <SectionHeading
        number="01"
        eyebrow="Projects"
        title="Useful software, not decorative demos."
        description="Public repositories are collected from GitHub at build time, with forks removed and topics translated into practical filters. Search by language, stack or problem space."
      />
      <div className="mb-5 flex items-center gap-2 text-xs text-black/65">
        <span className={`h-2 w-2 rounded-full ${result.source === "github" ? "bg-emerald-600" : "bg-black/35"}`} aria-hidden="true" />
        {result.source === "github"
          ? `Live repository data from @${result.username}`
          : "Curated project catalog · GitHub data refreshes automatically on deployment"}
      </div>
      <ProjectsBrowser repositories={result.repositories} />
    </section>
  );
}
