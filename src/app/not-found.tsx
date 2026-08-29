import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";

export default function NotFound() {
  return (
    <main id="main" className="page-shell grid min-h-screen place-content-center py-16 text-center">
      <div className="mx-auto mb-12">
        <BrandLogo />
      </div>
      <p className="eyebrow text-black/65">Error 404</p>
      <h1 className="font-brand mt-4 text-5xl tracking-[-0.04em] sm:text-7xl">This page has moved on.</h1>
      <p className="mx-auto mt-5 max-w-md leading-7 text-black/65">
        The address is no longer part of the portfolio. The main page has everything that is currently available.
      </p>
      <Link href="/" className="button-primary mx-auto mt-8">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Return home
      </Link>
    </main>
  );
}
