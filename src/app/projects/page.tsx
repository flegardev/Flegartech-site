import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work by Tini Flegar: web apps, dashboards, browser extensions and automation tools with honest status labels and project context.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="min-h-screen bg-[#050505] pt-28 text-white">
        <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="font-editorial mb-3 text-xl font-semibold text-zinc-300">
              All Projects
            </p>
            <h1 className="text-3xl font-semibold tracking-normal text-white sm:text-5xl">
              Selected builds, honestly labeled and visually documented.
            </h1>
            <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg">
              This portfolio includes working MVPs, active development and technical case studies.
              Each entry states its current status and uses screenshots captured from the project.
            </p>
          </div>
          {projects.length > 0 ? (
            <div className="grid gap-5 lg:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} headingLevel="h2" />
              ))}
            </div>
          ) : (
            <p className="rounded-lg border border-white/10 bg-white/[0.035] p-8 text-center text-zinc-300">
              No projects are published yet. Check back after the next verified release.
            </p>
          )}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
