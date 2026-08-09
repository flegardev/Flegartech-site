import { FolderGit, Mail } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-lg border border-white/15 bg-white/[0.04] p-6 shadow-[0_0_70px_rgba(255,255,255,0.035)] md:grid-cols-[0.9fr_1.1fr] md:p-8">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-zinc-300">
            Contact
          </p>
          <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-4xl">
            Have a project in mind? Let&apos;s talk.
          </h2>
          <p className="mt-5 text-base leading-7 text-zinc-300">
            Send a short brief, an early idea or a specific build request. I can help shape it into a
            focused web application, dashboard or custom software workflow.
          </p>
          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Delate v Sloveniji? Pišete lahko tudi v slovenščini.
          </p>
          <div className="mt-8 space-y-3 text-sm text-zinc-300">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 hover:text-white"
            >
              <Mail className="h-5 w-5 text-[#eee8de]" aria-hidden="true" />
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-white"
            >
              <FolderGit className="h-5 w-5 text-[#eee8de]" aria-hidden="true" />
              {siteConfig.githubHandle}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
        <ContactForm email={siteConfig.email} />
      </div>
    </section>
  );
}
