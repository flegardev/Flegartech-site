import { CalendarCheck, FileText, MessageSquare } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const steps = [
  {
    title: "Intro call or email",
    description:
      "Describe the idea in whatever shape it's in. A paragraph is enough. You get an honest read on whether it's worth building and what the smallest useful version looks like.",
    icon: MessageSquare,
  },
  {
    title: "Fixed scope, fixed price",
    description:
      "The scope is written as concrete screens and workflows, with a clear not-list for v1. You know the price and the delivery date before any code is written.",
    icon: FileText,
  },
  {
    title: "Weekly visible progress",
    description:
      "Every project ships to a preview URL from week one, so you watch the product take shape instead of waiting for a big reveal.",
    icon: CalendarCheck,
  },
];

const faqs = [
  {
    question: "How long does an MVP take?",
    answer:
      "Most MVPs on this site took 3-6 weeks from agreed scope to a deployed product. The scoping week before that is what makes the estimate reliable.",
  },
  {
    question: "What does a typical project cost?",
    answer:
      "It depends on scope, which is exactly why scope comes first: after the scoping phase you get a fixed price tied to a written scope, not an hourly meter.",
  },
  {
    question: "Who owns the code?",
    answer:
      "You do. Every project is delivered in a repository you own, with deployment set up so you're never locked in to FlegarTech.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Your call: hand over with documentation, or continue with an iteration arrangement where real user feedback drives the next releases.",
  },
  {
    question: "Delate v Sloveniji?",
    answer:
      "Ja. FlegarTech deluje tudi v slovenščini. Pišite v slovenščini ali angleščini, kakor vam je lažje.",
  },
];

export function Engagement() {
  return (
    <section id="working-together" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Working Together"
          title="No surprises, from first email to launch."
          description="A simple engagement model designed so you always know what you're getting, what it costs and where it stands."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.title}
                className="reveal rounded-lg border border-white/10 bg-white/[0.035] p-6"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-md bg-[#75b183]/12 text-[#75b183] ring-1 ring-[#75b183]/25">
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
                className="group rounded-lg border border-white/10 bg-white/[0.035] open:border-[#75b183]/40"
              >
                <summary className="cursor-pointer list-none px-5 py-4 text-base font-semibold text-white transition hover:text-[#bce4c4] [&::-webkit-details-marker]:hidden">
                  {faq.question}
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
