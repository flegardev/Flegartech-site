import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { GitHubMark } from "@/components/github-mark";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/data/site";

type ContactProps = {
  showGitHub: boolean;
};

export function Contact({ showGitHub }: ContactProps) {
  return (
    <section id="contact" className="bg-[#f3f2ee] py-24 sm:py-32">
      <div className="page-shell">
        <SectionHeading number="04" eyebrow="Contact" title="Have a useful idea? Let’s make it real." />
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
          <div>
            <p className="max-w-2xl text-lg leading-8 text-black/65">
              Share the problem, the audience and where the idea stands today. I&apos;ll reply with clear next steps—usually within two business days.
            </p>
            <a href={`mailto:${siteConfig.email}?subject=Project%20inquiry%20for%20FlegarDev`} className="button-primary mt-9">
              Start a conversation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="divide-y divide-black/15 border-y border-black/15">
            <a href={`mailto:${siteConfig.email}`} className="group flex items-center justify-between py-5 text-sm">
              <span className="flex items-center gap-3">
                <Mail className="h-4 w-4" aria-hidden="true" />
                {siteConfig.email}
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            {showGitHub ? (
              <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer" className="group flex items-center justify-between py-5 text-sm">
                <span className="flex items-center gap-3">
                  <GitHubMark className="h-4 w-4" />
                  GitHub / {siteConfig.githubUsername}
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
