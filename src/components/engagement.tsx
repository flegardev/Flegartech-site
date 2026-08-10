import { CheckCircle2, ChevronDown, FileText, Workflow } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const steps = [
  {
    title: "Start with the workflow",
    description:
      "Define the user, the core task and the smallest outcome that makes the software useful before expanding the feature list.",
    icon: Workflow,
  },
  {
    title: "Document the boundaries",
    description:
      "Write down the routes, data, environment requirements and explicit non-goals so implementation stays reviewable.",
    icon: FileText,
  },
  {
    title: "Verify before claiming done",
    description:
      "Run the strongest available lint, type, test, build and browser checks, then state remaining limitations plainly.",
    icon: CheckCircle2,
  },
];

const faqs = [
  {
    question: "What do the project status labels mean?",
    answer:
      "MVP identifies a usable first version, In development marks active incomplete work, and Case study means the repository is presented for its technical approach rather than as a live product.",
  },
  {
    question: "Can I inspect the source code?",
    answer:
      "Yes. Each project card links to its public GitHub repository. The case study explains the purpose, current state and selected implementation details.",
  },
  {
    question: "How are portfolio claims verified?",
    answer:
      "Build, test and browser results are recorded in repository documentation. Missing credentials or external-service checks are reported as limitations rather than implied successes.",
  },
  {
    question: "What areas does the portfolio cover?",
    answer:
      "Full-stack web applications, APIs, dashboards, browser extensions, automation tools and finance-oriented product experiments.",
  },
  {
    question: "How can I get in touch?",
    answer:
      "Use the contact form or email flegardev@gmail.com. If direct delivery is not configured, the form opens a pre-filled email draft instead.",
  },
];

export function Engagement() {
  return (
    <section id="working-together" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Working Together"
          title="A practical, evidence-led way to build."
          description="Scope the useful workflow, keep implementation reviewable and verify the result before making claims."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.title}
                className="reveal rounded-lg border border-white/10 bg-white/[0.035] p-6"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-md bg-white/[0.08] text-[#eee8de] ring-1 ring-white/20">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{step.description}</p>
              </article>
            );
          })}
        </div>
        <div className="mx-auto mt-14 max-w-3xl">
          <h3 className="mb-6 text-center text-2xl font-semibold text-white">
            Frequently asked questions
          </h3>
          <div className="grid gap-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-lg border border-white/10 bg-white/[0.035] open:border-[#eee8de]/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-base font-semibold text-white transition hover:text-zinc-200 [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <ChevronDown
                    className="h-4 w-4 shrink-0 text-zinc-400 transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="px-5 pb-5 text-sm leading-6 text-zinc-400">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
