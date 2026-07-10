import { SectionHeading } from "@/components/section-heading";

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "Prisma",
  "Docker",
  "Vercel",
  "GitHub",
];

export function TechStack() {
  return (
    <section className="border-y border-white/10 bg-[#080b09] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Modern tools for reliable delivery."
          description="A pragmatic stack for dashboards, MVPs, APIs, automations and production-ready web platforms."
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {techStack.map((tech) => (
            <div
              key={tech}
              className="grid min-h-20 place-items-center rounded-md border border-white/10 bg-[#050705]/70 px-3 text-center text-sm font-semibold text-zinc-200 transition hover:border-[#75b183]/45 hover:bg-[#75b183]/[0.055] hover:text-white"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
