import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, FolderGit } from "lucide-react";
import { ProjectGallery } from "@/components/project-gallery";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getProject, projects } from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} Case Study`,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const sections = [
    ["The problem", project.caseStudy.problem],
    ["The approach", project.caseStudy.approach],
    ["Where it stands", project.caseStudy.outcome],
  ] as const;
  const heroScreenshot = project.screenshots[0];

  return (
    <>
      <SiteHeader />
      <main id="main" className="min-h-screen bg-[#050505] pt-28 text-white">
        <article className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All projects
          </Link>

          <header className="mt-8 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-md border border-white/20 bg-white/[0.06] px-3 py-1 text-xs font-semibold text-[#f4f1ec]">
                {project.status}
              </span>
              <span className="text-sm text-zinc-400">{project.metric}</span>
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-normal text-white sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-5 text-lg leading-8 text-zinc-300">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </header>

          {heroScreenshot ? (
            <figure className="mt-12 overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/35">
              <div className="flex h-10 items-center gap-2 border-b border-white/10 bg-[#0a0a0a] px-4">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#eee8de]/80" />
                <span className="ml-2 h-1.5 w-40 max-w-[40vw] rounded-full bg-white/10" />
              </div>
              <div className="relative aspect-[16/10] bg-[#020202]">
                <Image
                  src={heroScreenshot.src}
                  alt={heroScreenshot.alt}
                  fill
                  preload
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="sr-only">{heroScreenshot.caption}</figcaption>
            </figure>
          ) : null}

          <ProjectGallery screenshots={project.screenshots} />

          <div className="mt-14 max-w-4xl space-y-10">
            {sections.map(([title, text]) => (
              <section key={title}>
                <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#eee8de]">
                  {title}
                </h2>
                <p className="mt-3 text-lg leading-8 text-zinc-300">{text}</p>
              </section>
            ))}

            <section className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#eee8de]">
                Highlights
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {project.caseStudy.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-zinc-300">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#eee8de]" aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-md border border-white/15 px-5 text-sm font-semibold text-white transition hover:border-[#eee8de]/60 hover:bg-white/[0.08]"
            >
              <FolderGit className="h-4 w-4" aria-hidden="true" />
              View on GitHub
              <span className="sr-only">: {project.name} (opens in a new tab)</span>
            </a>
            <Link
              href="/#contact"
              className="inline-flex h-12 items-center gap-2 rounded-md bg-[#eee8de] px-5 text-sm font-semibold text-[#090909] transition hover:bg-white"
            >
              Build something like this
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
