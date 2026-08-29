import { ArrowDown, ArrowUpRight } from "lucide-react";
import { GitHubMark } from "@/components/github-mark";
import { siteConfig } from "@/data/site";

const skillChips = ["Next.js", "React", "TypeScript", "APIs", "PostgreSQL", "AI systems"];

type HeroProps = {
  showGitHub: boolean;
};

export function Hero({ showGitHub }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden border-b border-black/10">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="page-shell relative grid min-h-[calc(100svh-5.25rem)] items-center gap-14 py-20 lg:grid-cols-[1.18fr_0.82fr] lg:py-24">
        <div className="max-w-4xl">
          <p className="eyebrow mb-7">Independent developer · Slovenia / Europe</p>
          <h1 className="font-brand text-[clamp(3.9rem,9vw,8.8rem)] leading-[0.84] tracking-[-0.055em]">
            Digital products,
            <span className="block italic">built end to end.</span>
          </h1>
          <p className="mt-9 max-w-2xl text-lg leading-8 text-black/64 sm:text-xl">
            I&apos;m Tini Flegar, the developer behind FlegarDev. I turn practical ideas into focused,
            reliable software—from the first interface to the final API.
          </p>

          <div className="mt-9 flex flex-wrap gap-2" aria-label="Core skills">
            {skillChips.map((skill) => (
              <span key={skill} className="border border-black/15 bg-white px-3.5 py-2 text-xs font-medium text-black/68">
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="button-primary">
              Explore projects
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            {showGitHub ? (
              <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer" className="button-secondary">
                <GitHubMark className="h-4 w-4" />
                GitHub profile
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>

        <div className="relative mx-auto hidden w-full max-w-[30rem] lg:block" aria-hidden="true">
          <div className="aspect-square rounded-full border border-black/15 bg-white/70 shadow-[0_30px_100px_rgba(0,0,0,0.08)]">
            <div className="font-brand grid h-full place-items-center text-[20rem] leading-none tracking-[-0.08em] text-black">
              F
            </div>
          </div>
          <div className="absolute -bottom-7 -left-12 w-64 border border-black bg-white p-5">
            <div className="h-px w-full bg-black" />
            <p className="mt-3 text-[0.64rem] font-semibold uppercase tracking-[0.32em] text-black/65">
              Software · IT · Fullstack
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
