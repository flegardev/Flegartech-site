import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "All FlegarTech projects: web apps, dashboards, browser extensions and automation tools, presented with real screenshots and case studies.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="min-h-screen bg-[#050705] pt-28 text-white">
        <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#75b183]">
              All Projects
            </p>
            <h1 className="text-3xl font-semibold tracking-normal text-white sm:text-5xl">
              Every build, honestly labeled and visually reviewed.
            </h1>
            <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg">
              MVPs that work today, products in active development and experiments that feed the
              production work. Each has real project context and selected screenshots where
              strong assets exist.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
