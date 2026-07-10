import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#040604] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/#home" className="flex items-center" aria-label="FlegarTech home">
          <BrandLogo size="footer" />
        </Link>
        <div className="flex flex-col gap-1 text-right">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} FlegarTech. Built for fast product delivery.
          </p>
          <a
            href="https://paypal.me/TiniFlegar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
          >
            Support development
          </a>
        </div>
      </div>
    </footer>
  );
}
