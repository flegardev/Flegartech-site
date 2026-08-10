import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Braces, Check, FolderGit } from "lucide-react";
import type { Project } from "@/data/projects";

function ProjectVisual({ project }: { project: Project }) {
  const screenshot = project.screenshots[0];

  return (
    <div className="relative h-72 overflow-hidden border-b border-white/10 bg-[#0a0a0a]">
      <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-16`} />
      {screenshot ? (
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-top opacity-[0.92] transition duration-500 group-hover:scale-[1.025]"
        />
      ) : (
        <div className="absolute inset-6 grid place-items-center rounded-md border border-white/10 bg-[#050505]/70 p-6 text-center">
          <div>
            <Braces className="mx-auto h-10 w-10 text-[#eee8de]" aria-hidden="true" />
            <p className="mt-3 text-sm font-medium text-zinc-300">Case study without public UI shots</p>
          </div>
        </div>
      )}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent p-5">
        <p className="inline-flex rounded-md border border-white/10 bg-black/40 px-3 py-1 text-xs font-medium text-zinc-200 backdrop-blur">
          {project.metric}
        </p>
      </div>
    </div>
  );
}

function CapabilityList({ project }: { project: Project }) {
  return (
    <ul className="mt-5 grid gap-2 text-sm leading-5 text-zinc-300">
      {project.caseStudy.highlights.slice(0, 3).map((highlight) => (
        <li key={highlight} className="flex items-start gap-2">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#eee8de]" aria-hidden="true" />
          <span>{highlight}</span>
        </li>
      ))}
    </ul>
  );
}

function ScreenshotMeta({ project }: { project: Project }) {
  if (project.screenshots.length === 0) return null;

  return (
    <div className="mt-5 flex flex-wrap gap-2 text-xs text-zinc-400">
      {project.screenshots.slice(0, 3).map((screenshot) => (
        <span key={screenshot.src} className="rounded-md border border-white/10 px-2 py-1">
          {screenshot.caption}
        </span>
      ))}
    </div>
  );
}

export function ProjectCard({
  project,
  headingLevel = "h3",
}: {
  project: Project;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;

  return (
    <article className="group reveal overflow-hidden rounded-lg border border-white/10 bg-[#050505] shadow-2xl shadow-black/25 transition duration-300 hover:-translate-y-1 hover:border-[#eee8de]/45">
      <ProjectVisual project={project} />
      <div className="p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <Heading className="text-2xl font-semibold text-white">{project.name}</Heading>
          <span className="rounded-md border border-white/20 bg-white/[0.06] px-3 py-1 text-xs font-semibold text-[#f4f1ec]">
            {project.status}
          </span>
        </div>
        <p className="text-sm leading-6 text-zinc-400">{project.description}</p>
        <CapabilityList project={project} />
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-zinc-300"
            >
              {item}
            </span>
          ))}
        </div>
        <ScreenshotMeta project={project} />
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex h-10 items-center gap-2 rounded-md bg-[#eee8de] px-3 text-sm font-semibold text-[#090909] transition hover:bg-white"
          >
            Case Study
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-md bg-white/8 px-3 text-sm font-semibold text-white transition hover:bg-white/12"
            >
              Demo
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">: {project.name} (opens in a new tab)</span>
            </a>
          ) : null}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-md border border-white/15 px-3 text-sm font-semibold text-white transition hover:border-[#eee8de]/60 hover:bg-white/[0.08]"
          >
            <FolderGit className="h-4 w-4" aria-hidden="true" />
            GitHub
            <span className="sr-only">: {project.name} (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </article>
  );
}
