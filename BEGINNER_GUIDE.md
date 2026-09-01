# 🎓 FlegarTech Digital Agency Site — Beginner's Learning Guide

## What This Project Does
**flegartech-site** is the official agency marketing portfolio website built with Next.js 15, React 19, Tailwind CSS, and Framer Motion. It features scroll-driven animations, responsive project showcase galleries, and honeypot-protected Next.js Server Action contact forms.

---

## 🗺️ Architecture Map

```
ENTRY POINT
  │  (src/app/layout.tsx & src/app/page.tsx)
  ▼
NEXT.JS 15 APP ROUTER & METADATA
  │  (OpenGraph Card Generator, JSON-LD Schema Markup, Viewport Settings)
  ▼
SERVER ACTIONS & EMAIL INTEGRATION
  │  (src/app/actions.ts - sendContactEmail, Honeypot Spam Defense, Resend API)
  ▼
CLIENT UI & ANIMATION LAYER
     (src/components/hero.tsx, projects.tsx, contact-form.tsx, Framer Motion)
```

---

## 🎯 Core Files to Study First (Recommended Learning Order)

1. [`src/app/actions.ts`](file:///C:/Users/tinif/repos/flegartech-site/src/app/actions.ts)
   - **Why study first**: Shows modern Next.js 15 Server Actions (`"use server"`), honeypot antispam defense, payload validation, and Resend email API calls.
2. [`src/components/contact-form.tsx`](file:///C:/Users/tinif/repos/flegartech-site/src/components/contact-form.tsx)
   - **Why study next**: Teaches React 19 `useActionState` and `useTransition` hooks for handling form submission loading states.
3. [`src/components/projects.tsx`](file:///C:/Users/tinif/repos/flegartech-site/src/components/projects.tsx)
   - **Why study third**: Demonstrates Framer Motion viewport animation triggers, tag filters, and modal image galleries.

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
