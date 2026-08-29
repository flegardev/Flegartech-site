# FlegarDev

The production portfolio of Tini Flegar: a clean, accessible showcase for full-stack software, product engineering and practical automation.

## Stack

- Next.js 16 App Router and React 19
- TypeScript and Tailwind CSS 4
- GitHub REST API repository catalog
- Native Vercel deployment with hourly ISR refreshes
- Metadata, Open Graph image, sitemap, robots and web manifest

## Local development

Node.js 22 or newer is required.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Repository data

The site resolves the GitHub username in this order:

1. `GITHUB_USERNAME`
2. Vercel's `VERCEL_GIT_REPO_OWNER`
3. GitHub Actions' `GITHUB_REPOSITORY_OWNER`
4. The local default, `flegardev`

Forks and archived repositories are excluded. Topics, languages and descriptions drive project categories and search. A curated catalog is used when GitHub is unavailable or the account has no public repositories.

`GITHUB_TOKEN` is optional and only needed for higher GitHub API limits. On Vercel, the project catalog is regenerated at most once per hour.

## Deploying

See [DEPLOYMENT.md](DEPLOYMENT.md) for the manual Vercel import checklist.
