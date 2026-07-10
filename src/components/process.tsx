import { SectionHeading } from "@/components/section-heading";

const steps = [
  ["Idea & Scope", "Define the outcome, users, constraints and the smallest useful release."],
  ["Design & Prototype", "Shape the core flow and interface before investing in full implementation."],
  ["Build MVP", "Develop the product with clean architecture, typed code and practical defaults."],
  ["Test & Improve", "Review edge cases, UX friction and performance before launch."],
  ["Deploy & Maintain", "Ship to Vercel or your stack of choice, then iterate with real feedback."],
];

export function Process() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Process"
          title="A clear path from idea to deployed product."
          description="Small enough to move fast, structured enough to avoid chaos."
        />
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {steps.map(([title, description], index) => (
            <li
              key={title}
              className="rounded-lg border border-white/10 bg-white/[0.035] p-5 transition hover:border-[#75b183]/35"
            >
              <div className="mb-5 grid h-10 w-10 place-items-center rounded-md bg-[#75b183] text-sm font-bold text-[#061008]">
                {index + 1}
              </div>
              <h3 className="text-base font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
