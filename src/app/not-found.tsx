import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { PortfolioNav } from "@/components/portfolio-nav";

export default function NotFound() {
  return (
    <><PortfolioNav /><main id="main" className="shell section">
      <p className="label">Error 404</p>
      <h1 style={{fontSize: "clamp(36px, 6vw, 64px)", marginBlock: "24px"}}>This page has moved on.</h1>
      <p style={{color: "var(--muted)", maxWidth: "480px", lineHeight: 1.8, marginBottom: "32px"}}>
        The address is no longer part of the portfolio. The main page has everything that is currently available.
      </p>
      <Link href="/" className="button primary">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Return home
      </Link>
    </main></>
  );
}
