export type SelectedWork = {
  slug: string; name: string; category: string; summary: string; stack: string[];
  repository: string; image?: string; imageAlt?: string; demo?: string;
  demoLabel?: string; status: string; verification: string;
  problem: string; solution: string; decisions: string[]; architecture: string[];
};
export const selectedWork: SelectedWork[] = [
  {
    slug: "recepti", name: "Nana’s Recipes", category: "Household software",
    summary: "A shared cookbook that answers a practical question: what can we cook with what we have?",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    repository: "https://github.com/flegardev/Recepti",
    image: "/projects/recepti/audited-preview.webp", imageAlt: "Nana’s Recipes public kitchen demo, captured from the live application",
    demo: "https://recepti-rho.vercel.app/preview", demoLabel: "Try the kitchen demo",
    status: "Public demo · owner access verified", verification: "Verified on 13 October 2026: public sample, production Google owner sign-in, persisted recipe browsing, database/RLS and private-storage diagnostics. Record creation/editing and cross-owner isolation have not been reverified. The maintenance PR remains draft pending an unpatched development dependency advisory.",
    problem: "Recipes, pantry ingredients and shopping lists usually live in separate places. A household needs a shared workflow without publishing its private cookbook.",
    solution: "A Next.js application connects recipe browsing, ingredient matching, serving scaling and cooking steps. The public preview uses sample data and temporary browser state; the private product uses Supabase Auth and PostgreSQL.",
    decisions: ["Keep the public demo isolated from private household records.", "Enforce ownership in PostgreSQL policies and transactional RPCs, in addition to application checks.", "Use a mobile cooking view and a privacy-conscious offline fallback."],
    architecture: ["Next.js interface", "Supabase Auth", "PostgreSQL + RLS", "Private recipe storage"]
  },
  {
    slug: "borza", name: "Borza Academy", category: "Learning & simulation",
    summary: "Finance education built around decisions, risk, and practice before real money is involved.",
    stack: ["Next.js", "FastAPI", "SQLAlchemy", "PostgreSQL"],
    repository: "https://github.com/flegardev/Borza",
    image: "/projects/borza/audited-home.webp", imageAlt: "Borza Academy German landing page captured from its current public deployment",
    demo: "https://borza-pi.vercel.app", demoLabel: "Explore the public site",
    status: "Public site · backend unavailable", verification: "Verified on 14 October 2026: the frontend deploys reviewed main with the corrected Render API origin. The backend security fix passes CI and its Render image builds; API startup remains blocked by the unavailable existing database connection secret. Account-backed features remain unverified.",
    problem: "Financial learning often separates theory from the decisions beginners actually face. Trading practice also needs clear boundaries around risk and simulated results.",
    solution: "A multilingual Next.js frontend joins authored curriculum, quizzes, calculators and deterministic practice scenarios. FastAPI owns learner state, with SQLAlchemy and Alembic providing the database boundary.",
    decisions: ["Keep authored learning material in version-controlled content.", "Score process and risk discipline separately from profit and loss.", "Separate public learning/demo flows from authenticated learner records.", "Use database migrations; never create or drop production tables during application startup."],
    architecture: ["Next.js on Vercel", "FastAPI on Render", "SQLAlchemy + Alembic", "Supabase PostgreSQL"]
  },
  {
    slug: "wtfcode", name: "WTFCode", category: "Developer tools",
    summary: "Evidence-backed repository maps that help developers understand unfamiliar code before changing it.",
    stack: ["PHP", "Node.js", "Tree-sitter", "PostgreSQL"],
    repository: "https://github.com/flegardev/WTFCode",
    image: "/projects/wtfcode/product-overview.webp", imageAlt: "WTFCode repository analysis interface from its version-controlled product screenshot",
    status: "Public landing · scanning unavailable", verification: "Verified on 14 October 2026: reviewed main is deployed and both public landing URLs return HTTP 200. The health endpoint returns 503 while the database is paused and no hosted queue worker is available. Production repository scanning remains unverified.",
    problem: "A developer entering an unfamiliar repository needs relationships and evidence, not confident guesses about how the system works.",
    solution: "A PHP application coordinates bounded static analyzers in isolated PHP and Node processes. Results become dependency graphs, route maps, security review leads and change-impact evidence.",
    decisions: ["Treat imported repositories as untrusted: do not install dependencies or execute their code.", "Move long scans into durable jobs with lease tokens and bounded retries.", "Keep database credentials and GitHub App keys on the server.", "Use a separately supervised worker; a web request cannot provide a durable queue consumer."],
    architecture: ["PHP web interface", "PostgreSQL job queue", "Supervised scan worker", "Isolated static analyzers"]
  },
  {
    slug: "drivewise", name: "DriveWise", category: "Typed domain engineering",
    summary: "A transparent TypeScript core for turning telemetry samples into driving-event and trip-score summaries.",
    stack: ["TypeScript", "React", "Zod", "Vitest"],
    repository: "https://github.com/flegardev/Drivewise",
    status: "Engine & UI components", verification: "The accessible repository contains the calculation engine, React components and tests. It does not contain the previously described NestJS monorepo or a complete deployed dashboard.",
    problem: "Raw location and motion samples need understandable scoring rules before they can support a useful driver-facing interface.",
    solution: "Pure TypeScript functions calculate Haversine distance, detect driving events and produce score breakdowns. Zod schemas define telemetry boundaries, and React components present the summaries.",
    decisions: ["Keep the calculation core independent from React.", "Make thresholds explicit instead of hiding them in UI code.", "Use deterministic fixtures to check physical calculations.", "Describe this repository as an engine and components, not an operating fleet platform."],
    architecture: ["Telemetry samples", "Zod schema boundary", "TypeScript calculations", "React summary components"]
  },
  {
    slug: "pulse", name: "Pulse", category: "Typed domain engineering",
    summary: "Workout analytics with explicit formulas for estimated strength, training volume and heart-rate zones.",
    stack: ["TypeScript", "React", "Vitest"],
    repository: "https://github.com/flegardev/Pulse-fitness-tracker",
    status: "Engine & UI components", verification: "The accessible repository contains workout calculations, React components and tests. A complete hosted fitness tracker has not been verified.",
    problem: "Training numbers are useful only when the formulas behind them are clear and consistently applied.",
    solution: "A TypeScript analytics module implements one-repetition maximum estimates and workout summaries. Small React components and hooks present calculations without coupling the math to an entire application.",
    decisions: ["Compare Epley, Brzycki and Lombardi estimates rather than presenting one formula as ground truth.", "Validate numerical inputs at the calculation boundary.", "Keep tests focused on edge cases and expected calculations."],
    architecture: ["Workout inputs", "TypeScript analytics", "React components", "Vitest regression tests"]
  }
];
export function findWork(slug: string) { return selectedWork.find((work) => work.slug === slug); }
