import { ArrowUp } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/15 bg-white py-10">
      <div className="page-shell grid gap-10 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <BrandLogo size="footer" />
          <p className="mt-8 text-xs uppercase tracking-[0.16em] text-black/65">
            © {new Date().getFullYear()} Tini Flegar. Built with care in Slovenia.
          </p>
        </div>
        <a href="#home" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em]">
          Back to top
          <span className="grid h-10 w-10 place-items-center border border-black/20">
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </span>
        </a>
      </div>
    </footer>
  );
}
