import {
  Code2,
  Database,
  LayoutDashboard,
  Rocket,
  Sparkles,
  Workflow,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const services = [
  {
    title: "Web Development",
    description:
      "Fast, responsive websites and application frontends with sharp UX and maintainable code.",
    icon: Code2,
  },
  {
    title: "MVP Development",
    description:
      "Lean product builds that validate ideas quickly without boxing you into throwaway tech.",
    icon: Rocket,
  },
  {
    title: "Dashboards & Admin Panels",
    description:
      "Internal tools, role-based workflows and data views built for teams that need clarity.",
    icon: LayoutDashboard,
  },
  {
    title: "Automation Tools",
    description:
      "Practical software that reduces repetitive work and connects the systems you already use.",
    icon: Workflow,
  },
  {
    title: "API & Backend Systems",
    description:
      "Typed backends, integrations and database models designed for real product growth.",
    icon: Database,
  },
  {
    title: "UI/UX Improvements",
    description:
      "Focused redesigns that make existing products easier to trust, scan and use.",
    icon: Sparkles,
  },
];

export function Services() {
  return (
    <section id="services" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="Focused builds for web products and internal systems."
          description="Everything is shaped around practical outcomes: launch faster, operate cleaner and make the product easier to trust."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className={`group reveal rounded-lg border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#75b183]/45 hover:bg-[#75b183]/[0.055] ${
                  index < 2 ? "lg:col-span-3" : "lg:col-span-2"
                }`}
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-md bg-[#75b183]/12 text-[#75b183] ring-1 ring-[#75b183]/25">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
