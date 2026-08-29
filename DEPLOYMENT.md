# Manual Vercel deployment

This repository uses Vercel's native Next.js integration. No `vercel.json`, custom build command or output directory is required.

## Import

1. Push the finished repository to GitHub.
2. In Vercel, choose **Add New → Project**.
3. Import the GitHub repository.
4. Confirm **Framework Preset: Next.js**.
5. Leave **Root Directory** at the repository root.
6. Leave **Build Command**, **Output Directory**, and **Install Command** on their defaults.
7. Select **Deploy**.

Vercel automatically supplies the production URL used by canonical metadata and recognizes the GitHub repository owner used by the project catalog.

## Optional environment variables

No environment variables are required for the first deployment.

- `GITHUB_USERNAME`: override the GitHub account shown by the project catalog.
- `GITHUB_TOKEN`: increase GitHub API rate limits. Treat this as a secret.
- `NEXT_PUBLIC_SITE_URL`: set this only when using a custom domain and you want it to be the canonical URL.

Apply `NEXT_PUBLIC_SITE_URL` to Production and Preview only if both should use the same canonical domain. Otherwise, leave it unset and Vercel will provide the appropriate deployment URL.

## After deployment

1. Open the production URL and test navigation, filtering and contact links.
2. In **Settings → Domains**, add the custom domain if needed.
3. If the GitHub catalog falls back to curated projects, set `GITHUB_USERNAME` to the intended public account and redeploy.
4. Check the latest deployment's build logs for warnings.

Future pushes to the production branch deploy automatically through Vercel's Git integration. Pull requests receive preview deployments.
