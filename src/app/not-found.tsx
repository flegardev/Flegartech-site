import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="grid min-h-screen place-content-center bg-[#050705] px-4 pt-20 text-center text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#75b183]">404</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">This page doesn&apos;t exist.</h1>
        <p className="mx-auto mt-4 max-w-md text-zinc-400">
          The link may be outdated. Everything that does exist is reachable from the homepage.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex h-12 items-center gap-2 rounded-md bg-[#75b183] px-5 text-sm font-semibold text-[#061008] transition hover:bg-[#8ac897]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to homepage
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
