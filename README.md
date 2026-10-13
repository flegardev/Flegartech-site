# FlegarDev / Tini Flegar

A software-engineer portfolio built with Next.js 16, React 19, TypeScript, Geist fonts, and a restrained light/dark visual identity.

## Product

- Five static case studies grounded in accessible source code.
- Real product screenshots, searchable project catalog, category filters, and useful empty states.
- Responsive navigation, keyboard focus, persistent color preference, and reduced-motion support.
- Canonical metadata, sitemap, robots, structured data, generated social image, and security headers.

Project content lives in `src/data/selected-work.ts`. Update operational status only after checking the actual application. Nana's Recipes links to its public sample preview; Borza links to its public homepage and clearly marks its backend outage. WTFCode has no live demo link while its database-backed runtime is unavailable. Drivewise and Pulse are presented as domain modules. No employment history or performance metrics are invented.

## Development

Use Node.js 22 or 24.

```sh
npm ci
npm run dev
```

## Verification

```sh
npm run lint
npm run typecheck
npm run build
npx playwright install chromium
CI=true npm run test:e2e
npm audit --omit=dev --audit-level=high
```

On Windows, set `$env:CI='true'` before the browser command, or use the installed Google Chrome through the local default configuration. Browser coverage includes search/reset/filter behavior, theme persistence, mobile menu keyboard handling, four viewport widths, five case-study routes, image loading, and axe checks in both themes.

The production dependency audit is clean as of 2026-10-13. The development-only Next ESLint dependency chain still reports an unpatched `braces` advisory. CI gates production dependencies; keep reviewing the full development audit and update when a supported patch becomes available. Do not force a framework downgrade to silence the advisory.

## Deployment

GitHub is the source of truth: https://github.com/flegardev/Flegartech-site . Connect this repository to Vercel with the Next.js preset and no root-directory override. Pull requests build previews. The canonical URL uses `NEXT_PUBLIC_SITE_URL`, then Vercel's production-domain variable, then `https://flegardev-portfolio.vercel.app`. No database, privileged credentials, or paid service is required.
