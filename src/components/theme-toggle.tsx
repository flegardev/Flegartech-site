"use client";
import { Moon, Sun } from "lucide-react";
export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const dark = root.dataset.theme === "dark" || (!root.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);
    const next = dark ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("flegardev-theme", next); } catch { /* Theme still works when storage is unavailable. */ }
  }
  return <button type="button" className="theme-toggle" onClick={toggle} aria-label="Toggle color theme"><Sun className="sun" size={18} aria-hidden="true" /><Moon className="moon" size={18} aria-hidden="true" /></button>;
}
