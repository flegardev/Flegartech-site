# Deployment - FlegarTech Website

Next.js 16 (App Router) static/SSG marketing site. Primary target: **Vercel**.

## Build / run
| Command | Purpose |
|---------|---------|
| `npm ci` | Clean install from lockfile |
| `npm run lint` | ESLint |
| `npm run build` | Production build (also runs TypeScript) |
| `npm start` | Serve the production build locally |

Output: `.next/` (handled automatically by Vercel - no custom output dir).
Node: 22+ (CI uses 22; local verified on 24).

## Vercel (recommended)
Next.js is auto-detected - **no `vercel.json` required**.

1. Import the repo in Vercel (or `vercel` CLI). Framework preset: **Next.js**.
2. Build command `next build`, output auto. Install `npm ci`.
3. Set environment variables (all **server-only**, none `NEXT_PUBLIC_`):
   - `RESEND_API_KEY` - optional; without it the contact form falls back to the visitor's mail client.
   - `CONTACT_FROM_EMAIL` - optional; verified Resend sender. Defaults to `FlegarTech Website <onboarding@resend.dev>`.
   - `CONTACT_TO_EMAIL` - optional; recipient. Defaults to `siteConfig.email`.
4. Deploy. Verify `/`, `/projects`, `/projects/[slug]`, `/blog`, `/blog/[slug]`, `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`, `/opengraph-image`.

## Alternative hosts
Any Node host can run `npm run build` + `npm start` (default port 3000, override with `PORT`). Netlify works via the official Next runtime.

## Notes / known limitations
- `npm audit` reports 2 *moderate* advisories in **PostCSS bundled inside Next.js**. The only offered "fix" force-downgrades Next 16 → 9 (a major breaking regression) and is rejected. The advisory (XSS via unescaped `</style>` when stringifying **untrusted** CSS) does not apply to this site, which processes only first-party CSS. Track an upstream Next patch instead.
- Contact form uses a React Server Action (`src/app/actions.ts`) with honeypot, field validation, length caps, and graceful error/unconfigured states.
