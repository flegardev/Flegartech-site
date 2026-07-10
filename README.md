# FlegarTech Website

Professional personal/business website for FlegarTech, built with Next.js, TypeScript and Tailwind CSS.

## Install

```bash
npm install
```

## Development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run lint
npm run build
```

CI (`.github/workflows/ci.yml`) runs the same two commands on every push and pull request.

## Structure

- `src/app/` - routes: homepage, `/projects`, `/projects/[slug]` (case studies), `/blog`, `/blog/[slug]`
- `src/components/` - one component per section (header, hero, services, projects, engagement/FAQ, contact, footer)
- `src/data/site.ts` - site identity: name, URL, email, GitHub (used by metadata, sitemap, robots, manifest)
- `src/data/projects.ts` - project cards and case-study content; `featured: true` controls the homepage selection
- `src/data/posts.ts` - blog posts as typed content blocks

## Contact Form

The form submits to a server action (`src/app/actions.ts`) that sends email through the
[Resend](https://resend.com) API with a honeypot field for spam. Copy `.env.example` to
`.env.local` and set `RESEND_API_KEY` to enable delivery. Without a key, the form falls back to
opening the visitor's email app with the message pre-filled, so nothing is ever lost.

## Deploy

The app is ready for Vercel. Import the repository, keep the default Next.js settings, add the
environment variables from `.env.example`, and deploy. Vercel Analytics is wired in via
`@vercel/analytics` and activates automatically once the project runs on Vercel.

## Replace Logo & Icons

The brand assets live at `public/logo.png` (header, hero, footer, OpenGraph) and
`public/favicon.png` (square 512×512 source). After replacing them, regenerate the app icons:

```bash
node scripts/generate-icons.mjs
```

The 1200×630 social share image is generated at build time from `src/app/opengraph-image.tsx`.

---

Made by FlegarTech. If this project helped you, you can [support development](https://paypal.me/TiniFlegar).
