import Image from "next/image";

export function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <Image
            src="/brand/tini-flegar-profile-dark.png"
            alt="Tini Flegar monogram"
            width={768}
            height={768}
            sizes="(max-width: 1024px) 10rem, 12rem"
            className="mb-6 h-40 w-40 rounded-full border border-white/15 object-cover shadow-2xl shadow-black/40 lg:h-48 lg:w-48"
          />
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-zinc-300">
            About Tini
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Full-Stack Developer · IT & Finance
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-8 text-zinc-300">
          <p>
            I build modern web applications, dashboards, APIs and focused MVPs. My portfolio spans
            product interfaces, automation, data-backed tools and finance-oriented software.
          </p>
          <p>
            The through-line is practical engineering: clear workflows, typed code, maintainable data
            models, accessible interfaces and documentation that states what was actually verified.
          </p>
        </div>
      </div>
    </section>
  );
}
