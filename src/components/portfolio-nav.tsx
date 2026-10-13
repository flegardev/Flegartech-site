"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
const links = [["Work", "/#work"], ["Approach", "/#approach"], ["About", "/#about"]] as const;
export function PortfolioNav() {
 const [open, setOpen] = useState(false);
 const navRef = useRef<HTMLElement>(null);
 const triggerRef = useRef<HTMLButtonElement>(null);
 useEffect(() => {
   if (!open) return;
   const key = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); triggerRef.current?.focus(); } };
   const outside = (event: PointerEvent) => { if (!navRef.current?.contains(event.target as Node)) setOpen(false); };
   document.addEventListener("keydown", key); document.addEventListener("pointerdown", outside);
   return () => { document.removeEventListener("keydown", key); document.removeEventListener("pointerdown", outside); };
 }, [open]);
 return <header className="portfolio-header" ref={navRef}><nav className="shell nav-row" aria-label="Primary navigation">
   <Link href="/" className="wordmark" aria-label="Tini Flegar home" onClick={() => setOpen(false)}><span className="brand-symbol" aria-hidden="true">f.</span><span>Tini Flegar<span className="brand-caption">Independent developer</span></span></Link>
   <div className="desktop-nav">{links.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}</div>
   <div className="nav-actions"><ThemeToggle /><a className="nav-contact" href="mailto:flegardev@gmail.com">Let’s talk <ArrowUpRight size={16} aria-hidden="true" /></a><button type="button" className="menu-toggle" ref={triggerRef} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>{open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}</button></div>
 </nav>{open ? <nav id="mobile-menu" aria-label="Mobile navigation" className="mobile-nav shell">{links.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<a href="mailto:flegardev@gmail.com">Contact</a></nav> : null}</header>;
}
