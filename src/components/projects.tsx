import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { featuredProjects } from "@/data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="border-y border-white/10 bg-[#0a0a0a] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work, shown through real product screens."
          description="A focused selection of Tini Flegar projects, backed by screenshots captured from the actual builds."
        />
        {featuredProjects.length > 0 ? (
          <div className="grid gap-5 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <p className="rounded-lg border border-white/10 bg-white/[0.035] p-8 text-center text-zinc-300">
            Featured projects will appear here after verification.
          </p>
        )}
        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex h-12 items-center gap-2 rounded-md border border-white/15 px-5 text-sm font-semibold text-white transition hover:border-[#eee8de]/60 hover:bg-white/[0.08]"
          >
            View all projects
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
