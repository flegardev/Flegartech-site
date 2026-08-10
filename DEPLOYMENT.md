# Deployment — Tini Flegar Portfolio

This is a Next.js 16 App Router portfolio with static/SSG routes and one optional Server Action for contact email. The primary hosting target is Vercel.

## Runtime and build

- Node.js: 22 or newer
- Install: `npm ci`
- Build: `npm run build`
- Output: `.next/` (managed by the Next.js runtime)

The currently verified public domain is `https://flegartech-site-main.vercel.app`. A replacement domain must also be supplied through `NEXT_PUBLIC_SITE_URL` so canonical metadata, JSON-LD, robots and sitemap output stay consistent.

## Vercel setup

1. Import `flegardev/flegartech-site` and keep the standard Next.js framework settings.
2. Set `NEXT_PUBLIC_SITE_URL` to the final production origin without a trailing slash.
3. To enable direct contact delivery, set server-only `RESEND_API_KEY` and a verified `CONTACT_FROM_EMAIL`.
4. Optionally set `CONTACT_TO_EMAIL`; it defaults to `flegardev@gmail.com`.
5. Deploy, then verify the routes and response headers below.

No `vercel.json` is required.

## Required release checks

```bash
npm ci
npm audit --audit-level=high
npm run lint
npm run typecheck
npm run build
npm start
```

Smoke-test:

- `/`
- `/projects` and at least one `/projects/[slug]`
- `/blog` and at least one `/blog/[slug]`
- `/sitemap.xml`
- `/robots.txt`
- `/manifest.webmanifest`
- `/opengraph-image`
- Contact form with no Resend key (expected pre-filled email fallback)
- Contact form with a Resend test/verified sender when credentials are available

Confirm the deployed responses include `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy` and `Content-Security-Policy-Report-Only`.

## Security and operational notes

- The Server Action body limit is 16 KB, while visible fields are capped well below that boundary.
- Resend calls time out after 10 seconds and provider response bodies are not logged.
- The honeypot reduces basic bot submissions but is not durable rate limiting.
- Configure a Vercel Firewall rate rule or another shared edge/data service before treating the public email endpoint as abuse-resistant. Do not use an in-memory counter in a multi-instance serverless deployment.
- The CSP is report-only. Review violations before promoting it to a blocking policy.
- All credentials remain server-only; never prefix the Resend key with `NEXT_PUBLIC_`.

## Alternative Node hosts

Any compatible Node host can run `npm run build` followed by `npm start`. Recreate the environment variables, TLS, abuse controls and response-header verification on that platform.
