import { Braces, Cloud, Database, Layers3, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const capabilityGroups = [
  {
    title: "Interface",
    icon: Layers3,
    summary: "Accessible, responsive product interfaces with precise component systems.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Design systems", "WCAG"],
  },
  {
    title: "Application",
    icon: Braces,
    summary: "End-to-end web applications with clear domain boundaries and reliable data flow.",
    skills: ["Node.js", "REST APIs", "Python", "PHP / Symfony", "Validation", "Testing"],
  },
  {
    title: "Data",
    icon: Database,
    summary: "Practical data models, authorization and query patterns built for real workflows.",
    skills: ["PostgreSQL", "Supabase", "Prisma", "SQLAlchemy", "Redis", "RLS"],
  },
  {
    title: "Delivery",
    icon: Cloud,
    summary: "Static and full-stack deployments with disciplined automation and observability.",
    skills: ["GitHub Actions", "Vercel", "Docker", "CI/CD", "Playwright", "SEO"],
  },
  {
    title: "Intelligent tools",
    icon: Sparkles,
    summary: "AI features that support a defined workflow instead of becoming the whole product.",
    skills: ["LLM APIs", "Structured output", "Automation", "Prompt design", "Fallbacks", "Evaluation"],
  },
];

export function TechStack() {
  return (
    <section id="skills" className="bg-black py-24 text-white sm:py-32">
      <div className="page-shell">
        <SectionHeading
          number="03"
          eyebrow="Skills"
          title="One stack, selected for the problem."
          description="A broad toolkit is useful only when it leads to simpler decisions. I favor typed, documented systems and proven web primitives."
          inverted
        />

        <div className="grid border-l border-t border-white/20 md:grid-cols-2 xl:grid-cols-5">
          {capabilityGroups.map(({ title, icon: Icon, summary, skills }) => (
            <article key={title} className="border-b border-r border-white/20 p-6 xl:min-h-[30rem]">
              <Icon className="h-6 w-6 stroke-[1.4] text-white/72" aria-hidden="true" />
              <h3 className="font-brand mt-10 text-3xl">{title}</h3>
              <p className="mt-4 min-h-24 text-sm leading-6 text-white/70">{summary}</p>
              <ul className="mt-8 space-y-3 border-t border-white/15 pt-6 text-xs uppercase tracking-[0.12em] text-white/62">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
