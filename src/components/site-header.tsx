"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";

const navigation = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    function closeOutside(event: PointerEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
    };
  }, [open]);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-black/10 bg-white/92 backdrop-blur-xl">
      <nav className="page-shell flex h-[5.25rem] items-center justify-between" aria-label="Primary navigation">
        <a href="#home" onClick={() => setOpen(false)}>
          <BrandLogo />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="mailto:flegardev@gmail.com"
          className="hidden items-center gap-2 border border-black bg-black px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-black sm:inline-flex"
        >
          Let&apos;s talk
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>

        <button
          ref={menuButtonRef}
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((current) => !current)}
          className="grid h-11 w-11 place-items-center border border-black/20 md:hidden"
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      {open ? (
        <div id="mobile-navigation" className="border-t border-black/10 bg-white px-5 pb-6 pt-3 md:hidden">
          <div className="grid">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-black/10 py-4 text-lg"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="mailto:flegardev@gmail.com"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 bg-black px-5 py-3.5 text-sm font-semibold text-white"
          >
            Start a conversation
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      ) : null}
    </header>
  );
}
