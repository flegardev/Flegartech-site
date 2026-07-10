import Link from "next/link";
import { ArrowRight, Mail, ShieldCheck } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";

const stats = [
  ["MVP-first", "Product thinking"],
  ["Dark-mode", "Premium UI systems"],
  ["Full-stack", "Web apps & tools"],
];

export function Hero() {
  return (
    <section id="home" className="relative pt-24">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(117,177,131,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(117,177,131,0.08)_1px,transparent_1px)] bg-[size:52px_52px] opacity-35" />
      <div className="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full bg-[#75b183]/16 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-14 lg:min-h-[calc(88svh-6rem)] lg:grid-cols-[1.04fr_0.96fr] lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-[#75b183]/30 bg-[#75b183]/10 px-3 py-2 text-sm text-[#bce4c4]">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Practical software for real-world teams
          </div>
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Building digital tools, web apps & MVPs that actually work.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
            FlegarTech creates practical platforms, dashboards and custom software that teams can
            launch, manage and trust.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#projects"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#75b183] px-5 text-sm font-semibold text-[#061008] shadow-[0_18px_46px_rgba(117,177,131,0.18)] transition hover:bg-[#8ac897] active:translate-y-px"
            >
              View Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/15 px-5 text-sm font-semibold text-white transition hover:border-[#75b183]/60 hover:bg-[#75b183]/10 active:translate-y-px"
            >
              Contact Me
              <Mail className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[32rem]">
          <div className="absolute inset-8 rounded-full bg-[#75b183]/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#08100a]/80 p-6 shadow-2xl shadow-black/35 backdrop-blur">
            <div className="mb-7">
              <BrandLogo preload size="hero" />
              <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-400">
                Clean delivery for MVPs, dashboards, web apps and automation tools.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {stats.map(([label, value]) => (
                <div key={label} className="rounded-md border border-white/10 bg-[#050705]/72 p-4">
                  <p className="text-lg font-semibold text-white">{label}</p>
                  <p className="mt-1 text-sm text-zinc-400">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-md border border-[#75b183]/25 bg-[#75b183]/10 px-4 py-3 text-sm text-[#c8f0cf]">
              MVP ready, typed, deployable and designed for real use.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
