import { ArrowUpRight, Check } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const principles = [
  "Reduce the idea to its most useful form.",
  "Design the system and the interface together.",
  "Make trade-offs visible and maintainable.",
  "Ship with accessibility and verification built in.",
];

export function About() {
  return (
    <section id="about" className="bg-[#f3f2ee] py-24 sm:py-32">
      <div className="page-shell">
        <SectionHeading
          number="02"
          eyebrow="About"
          title="Product thinking with engineering depth."
          description="I work across the complete product surface: framing the problem, shaping the interaction, building the system and checking the details that make it dependable."
        />

        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <div className="font-brand grid aspect-square max-w-[22rem] place-items-center rounded-full border border-black/15 bg-white text-[11rem] leading-none shadow-[0_24px_70px_rgba(0,0,0,0.06)]" aria-hidden="true">
              F
            </div>
            <p className="mt-7 max-w-sm text-sm leading-6 text-black/65">
              Based in Slovenia and building for the web. Comfortable moving from a blank page to a working, documented product.
            </p>
          </div>

          <div>
            <p className="font-brand max-w-3xl text-3xl leading-[1.15] tracking-[-0.025em] sm:text-5xl">
              Good software should feel inevitable: clear in purpose, calm in use and solid underneath.
            </p>
            <div className="mt-12 grid border-l border-t border-black/15 sm:grid-cols-2">
              {principles.map((principle, index) => (
                <div key={principle} className="min-h-36 border-b border-r border-black/15 bg-white/45 p-6">
                  <span className="font-mono text-xs text-black/65">0{index + 1}</span>
                  <p className="mt-5 text-sm leading-6 text-black/68">{principle}</p>
                </div>
              ))}
            </div>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold underline decoration-black/30 underline-offset-4 hover:decoration-black">
              Discuss a product idea
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CapabilityList() {
  return (
    <ul className="grid gap-3">
      {principles.map((principle) => (
        <li key={principle} className="flex gap-3 text-sm text-white/65">
          <Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          {principle}
        </li>
      ))}
    </ul>
  );
}
