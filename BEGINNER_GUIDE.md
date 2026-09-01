# 🎓 FlegarTech Digital Agency Site — Beginner's Learning Guide

## What This Project Does
**flegartech-site** is the official agency marketing portfolio website built with Next.js 16 (Turbopack), React 19, and Tailwind CSS. It features responsive project showcase galleries, categorized project filters, and dynamic metadata generation.

---

## 🗺️ Architecture Map

```
ENTRY POINT
  │  (src/app/layout.tsx & src/app/page.tsx)
  ▼
NEXT.JS 16 APP ROUTER & METADATA
  │  (OpenGraph Generator, robots.ts, sitemap.ts, manifest.ts)
  ▼
DATA CATALOG LAYER
  │  (src/data/projects.ts - Project Catalog, src/data/site.ts - Agency Metadata)
  ▼
CLIENT UI & COMPONENT LAYER
     (src/components/hero.tsx, projects-browser.tsx, contact.tsx, tech-stack.tsx)
```

---

## 🎯 Core Files to Study First (Recommended Learning Order)

1. [`src/data/projects.ts`](file:///C:/Users/tinif/repos/flegartech-site/src/data/projects.ts)
   - **Why study first**: Shows how to structure strongly typed portfolio project catalogs, tags, screenshots, and live demo links.
2. [`src/components/projects-browser.tsx`](file:///C:/Users/tinif/repos/flegartech-site/src/components/projects-browser.tsx)
   - **Why study next**: Teaches client-side category filtering, search debouncing, and responsive grid layouts in React 19.
3. [`src/components/contact.tsx`](file:///C:/Users/tinif/repos/flegartech-site/src/components/contact.tsx)
   - **Why study third**: Demonstrates clean contact CTA surfaces and direct interaction points.

---

## 🛠️ How to Run & Verify

1. **Start Development Server**:
   ```bash
   npm run dev
   ```
2. **Build for Production**:
   ```bash
   npm run build
   ```
3. **Lint Codebase**:
   ```bash
   npm run lint
   ```
