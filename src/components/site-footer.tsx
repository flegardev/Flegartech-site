import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/#home" className="flex items-center" aria-label="Tini Flegar home">
          <BrandLogo size="footer" />
        </Link>
        <div className="flex flex-col gap-1 text-left sm:text-right">
          <p className="text-sm text-zinc-400">
            © {new Date().getFullYear()} Tini Flegar. Full-Stack Developer · IT & Finance.
          </p>
        </div>
      </div>
    </footer>
  );
}
