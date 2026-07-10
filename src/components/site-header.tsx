"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";

const navItems = [
  { label: "Home", href: "/#home", section: "home" },
  { label: "Services", href: "/#services", section: "services" },
  { label: "Projects", href: "/#projects", section: "projects", route: "/projects" },
  { label: "About", href: "/#about", section: "about" },
  { label: "Blog", href: "/blog", route: "/blog" },
  { label: "Contact", href: "/#contact", section: "contact" },
] as const;

const sectionIds = navItems.flatMap((item) => ("section" in item && item.section ? [item.section] : []));

function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);
    if (sections.length === 0) return;

    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio);
          } else {
            visible.delete(entry.target.id);
          }
        }
        let best: string | null = null;
        let bestRatio = 0;
        for (const [id, ratio] of visible) {
          if (ratio > bestRatio) {
            best = id;
            bestRatio = ratio;
          }
        }
        if (best) setActive(best);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [enabled]);

  return enabled ? active : null;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const activeSection = useActiveSection(pathname === "/");

  // Close the mobile menu on Escape and on clicks outside the header.
  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    function onPointerDown(event: PointerEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  function isActive(item: (typeof navItems)[number]) {
    if ("route" in item && item.route && pathname.startsWith(item.route)) return true;
    if (pathname !== "/") return false;
    return "section" in item && item.section === activeSection;
  }

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050705]/86 backdrop-blur-xl"
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Link
          href="/#home"
          className="flex items-center"
          aria-label="FlegarTech home"
          onClick={() => setOpen(false)}
        >
          <BrandLogo preload />
        </Link>
        <div className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-current={isActive(item) ? "true" : undefined}
              className={`transition hover:text-white ${
                isActive(item) ? "font-semibold text-[#9dd8a8]" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden h-10 items-center gap-2 rounded-md bg-[#75b183] px-4 text-sm font-semibold text-[#061008] shadow-[0_16px_40px_rgba(117,177,131,0.16)] transition hover:bg-[#8ac897] active:translate-y-px sm:inline-flex"
          >
            Start a Project
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-md border border-white/15 text-zinc-200 transition hover:border-[#75b183]/60 hover:text-white md:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-[#050705]/95 px-4 pb-6 pt-3 backdrop-blur-xl md:hidden"
        >
          <div className="grid gap-1 text-base text-zinc-200">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item) ? "true" : undefined}
                className={`rounded-md px-3 py-3 transition hover:bg-[#75b183]/10 hover:text-white ${
                  isActive(item) ? "font-semibold text-[#9dd8a8]" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[#75b183] px-4 text-sm font-semibold text-[#061008] transition hover:bg-[#8ac897]"
          >
            Start a Project
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      ) : null}
    </header>
  );
}
