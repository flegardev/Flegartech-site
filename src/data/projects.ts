export type ProjectStatus = "Live" | "MVP" | "In development" | "Case study";

export type CaseStudy = {
  problem: string;
  approach: string;
  outcome: string;
  highlights: string[];
};

export type ProjectScreenshot = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

export type Project = {
  name: string;
  slug: string;
  description: string;
  stack: string[];
  status: ProjectStatus;
  featured: boolean;
  githubUrl: string;
  demoUrl?: string;
  accent: string;
  metric: string;
  screenshots: ProjectScreenshot[];
  caseStudy: CaseStudy;
};

export const projects: Project[] = [
  {
    name: "DriveWise",
    slug: "drivewise",
    description:
      "Driving telematics MVP that turns trips into transparent safety scores, risk maps and fleet-ready admin dashboards.",
    stack: ["Telematics", "React", "NestJS", "Prisma", "Leaflet"],
    status: "MVP",
    featured: true,
    githubUrl: "https://github.com/flegardev/drivewise",
    accent: "from-[#d7d2ca] to-[#5f95d8]",
    metric: "Telematics MVP",
    screenshots: [
      {
        src: "/projects/drivewise/dashboard-desktop.webp",
        width: 1440,
        height: 900,
        alt: "DriveWise overview dashboard with trip, distance and scoring metrics",
        caption: "Overview dashboard",
      },
      {
        src: "/projects/drivewise/risk-map.webp",
        width: 1440,
        height: 900,
        alt: "DriveWise risk map showing mapped driving risk signals",
        caption: "Risk map",
      },
      {
        src: "/projects/drivewise/trip-detail.webp",
        width: 1440,
        height: 900,
        alt: "DriveWise trip detail page with route, score and event summary",
        caption: "Trip detail",
      },
      {
        src: "/projects/drivewise/mobile-dashboard.webp",
        width: 390,
        height: 844,
        alt: "DriveWise mobile overview with key driving metrics",
        caption: "Mobile overview",
      },
    ],
    caseStudy: {
      problem:
        "Trip data from vehicles is abundant but unreadable. Raw coordinates and speed logs don't tell a fleet manager which drivers are safe or where risk accumulates.",
      approach:
        "A monorepo with a NestJS API, React admin dashboard, transparent TypeScript scoring engine and simulation tools. The dashboard surfaces trends that matter: harsh events, risky locations, trip history and per-driver detail.",
      outcome:
        "An MVP that proves the core value: seed demo trips, review scores and inspect the dashboard a fleet operator would use. The model is prepared for live telematics feeds and mobile data capture.",
      highlights: [
        "Transparent driver scoring from trip and sensor data",
        "Admin dashboard with overview, trip detail and risk map views",
        "Simulation tooling for repeatable demo trips",
        "Typed monorepo across API, dashboard, mobile and shared packages",
      ],
    },
  },
  {
    name: "Pametni Sistem Čakalnice",
    slug: "pametni-sistem-cakalnice",
    description:
      "Smart queue and patient-flow system for waiting rooms, with staff control, public displays and QR status views.",
    stack: ["React", "TypeScript", "Vite", "Playwright"],
    status: "MVP",
    featured: true,
    githubUrl: "https://github.com/flegardev/pametni-sistem-cakalnice",
    accent: "from-[#d7d2ca] to-[#a775d1]",
    metric: "Queue system",
    screenshots: [
      {
        src: "/projects/pametni-sistem-cakalnice/dashboard-desktop.webp",
        width: 1440,
        height: 960,
        alt: "Pametni Sistem Cakalnice staff dashboard with queue overview cards",
        caption: "Staff dashboard",
      },
      {
        src: "/projects/pametni-sistem-cakalnice/queue-management.webp",
        width: 1440,
        height: 960,
        alt: "Pametni Sistem Cakalnice queue management board for waiting rooms",
        caption: "Queue management",
      },
      {
        src: "/projects/pametni-sistem-cakalnice/public-display.webp",
        width: 1600,
        height: 900,
        alt: "Pametni Sistem Cakalnice public waiting room display showing the current ticket",
        caption: "Public display",
      },
      {
        src: "/projects/pametni-sistem-cakalnice/mobile-dashboard.webp",
        width: 780,
        height: 1688,
        alt: "Pametni Sistem Cakalnice mobile staff dashboard",
        caption: "Mobile staff view",
      },
    ],
    caseStudy: {
      problem:
        "Waiting rooms run on paper lists and guesswork: visitors don't know how long they'll wait, and staff have no clean way to manage the queue or communicate delays.",
      approach:
        "A browser-based queue system with staff dashboards, patient registration, queue state controls, room assignment, QR status pages and public display views. Built as a polished React/Vite interface with Playwright verification.",
      outcome:
        "A presentation-ready MVP that demonstrates the full loop: staff manage patient flow, patients get clear status, and waiting-room screens show the current ticket.",
      highlights: [
        "Staff dashboard for live waiting-room state",
        "Patient check-in, priority and room assignment flows",
        "Public display and QR-based patient status page",
        "Reports and export-ready operational insights",
      ],
    },
  },
  {
    name: "AI Automation Bot",
    slug: "ai-automation-bot",
    description:
      "Configurable e-commerce assistant that answers customer questions, collects order leads and exposes an admin dashboard.",
    stack: ["Node.js", "JavaScript", "OpenAI API", "Playwright"],
    status: "In development",
    featured: true,
    githubUrl: "https://github.com/flegardev/ai-automation-bot",
    accent: "from-[#d7d2ca] to-[#c8d85f]",
    metric: "AI workflow",
    screenshots: [
      {
        src: "/projects/ai-automation-bot/chat-desktop.webp",
        width: 1440,
        height: 901,
        alt: "AI Automation Bot e-commerce assistant chat with a completed customer conversation",
        caption: "Customer chat flow",
      },
      {
        src: "/projects/ai-automation-bot/admin-dashboard.webp",
        width: 1440,
        height: 991,
        alt: "AI Automation Bot admin dashboard with conversations and captured leads",
        caption: "Admin dashboard",
      },
      {
        src: "/projects/ai-automation-bot/mobile-chat.webp",
        width: 390,
        height: 1700,
        alt: "AI Automation Bot mobile chat interface",
        caption: "Mobile chat",
      },
    ],
    caseStudy: {
      problem:
        "Small stores need quick answers and lead capture, but a generic chatbot does not know the product catalog, policies or order questions that matter.",
      approach:
        "A configurable bot reads a store config, answers product and order questions, saves customer leads locally and gives the owner an admin dashboard. Without an API key it runs in local demo mode so the full flow can still be tested.",
      outcome:
        "An in-development but complete demo loop: customer chat, lead capture, admin review and status updates, with production admin routes gated by an admin token.",
      highlights: [
        "Store-specific product, policy and FAQ configuration",
        "Local demo mode when no OpenAI API key is configured",
        "Lead capture with admin status updates",
        "Production admin-token protection for sensitive routes",
      ],
    },
  },
  {
    name: "Študentski Denar",
    slug: "studentski-denar",
    description:
      "Browser-first budgeting app for Slovenian students with survival-mode spending guidance and mobile quick entry.",
    stack: ["React", "TypeScript", "Vite", "Local storage"],
    status: "In development",
    featured: true,
    githubUrl: "https://github.com/flegardev/studentski-denar",
    accent: "from-[#d7d2ca] to-[#d6b55e]",
    metric: "Finance tool",
    screenshots: [
      {
        src: "/projects/studentski-denar/dashboard-desktop.webp",
        width: 1440,
        height: 1740,
        alt: "Studentski Denar monthly overview dashboard with safe-to-spend budgeting data",
        caption: "Monthly overview",
      },
      {
        src: "/projects/studentski-denar/income-desktop.webp",
        width: 1440,
        height: 900,
        alt: "Studentski Denar income tracking page for student income categories",
        caption: "Income tracking",
      },
      {
        src: "/projects/studentski-denar/expenses-desktop.webp",
        width: 1440,
        height: 1014,
        alt: "Studentski Denar expenses page with categorized spending entries",
        caption: "Expense categories",
      },
      {
        src: "/projects/studentski-denar/mobile-quick-expense.webp",
        width: 780,
        height: 1688,
        alt: "Studentski Denar mobile quick expense entry sheet",
        caption: "Mobile quick entry",
      },
    ],
    caseStudy: {
      problem:
        "Students live on irregular income: student work, allowances and seasonal jobs. Mainstream budgeting apps assume a salary, so the result is usually no budget at all.",
      approach:
        "A local-first budgeting app designed around irregular student income: Slovenian categories, one clear safe-to-spend number, recurring costs, mobile quick expense entry and a supporter/license flow.",
      outcome:
        "In development, with the core budgeting model, onboarding, monthly overview, mobile quick entry and privacy-first browser storage in place.",
      highlights: [
        "Designed for irregular Slovenian student income",
        "Survival Mode with daily safe-spend guidance",
        "Mobile quick expense entry with recent templates",
        "Browser-local data with backup reminders",
      ],
    },
  },
  {
    name: "Fitness Tracker App",
    slug: "fitness-tracker-app",
    description:
      "Private local-first fitness tracker for workouts, exercise history, body metrics, progress charts and goals.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    status: "In development",
    featured: true,
    githubUrl: "https://github.com/flegardev/pulse-fitness-tracker",
    accent: "from-[#d7d2ca] to-[#d87c68]",
    metric: "Health app",
    screenshots: [
      {
        src: "/projects/fitness-tracker-app/dashboard-desktop.webp",
        width: 1440,
        height: 1610,
        alt: "Fitness Tracker App dashboard with workout plan, streak and weekly stats",
        caption: "Fitness dashboard",
      },
      {
        src: "/projects/fitness-tracker-app/workout-complete.webp",
        width: 1440,
        height: 1371,
        alt: "Fitness Tracker App completed workout summary with sets and session metrics",
        caption: "Completed workout",
      },
      {
        src: "/projects/fitness-tracker-app/progress-analytics.webp",
        width: 1440,
        height: 2041,
        alt: "Fitness Tracker App progress page with body weight and volume charts",
        caption: "Progress analytics",
      },
      {
        src: "/projects/fitness-tracker-app/mobile-dashboard.webp",
        width: 390,
        height: 844,
        alt: "Fitness Tracker App mobile dashboard with workout and streak cards",
        caption: "Mobile dashboard",
      },
    ],
    caseStudy: {
      problem:
        "Most fitness apps optimize for streaks and notifications, not for honestly reviewing progress. Logging a workout should take seconds and reviewing a month should take one screen.",
      approach:
        "A local-first web app focused on workout planning, live session tracking, a built-in exercise library, body metrics, charts and goals. All stats are derived from the workout log so the data cannot drift.",
      outcome:
        "In active development. Demo data, dashboard, workouts, exercises, progress and goals are alive immediately, with JSON export/import and a storage boundary ready for a future backend.",
      highlights: [
        "Workout planning and live session tracking",
        "70-movement exercise library with filters",
        "Progress charts for weight, volume, consistency and records",
        "Local browser storage with export/import",
      ],
    },
  },
  {
    name: "AvtoNet Garaža",
    slug: "avtonet-garage",
    description:
      "Chrome extension for saving avto.net listings, tracking price changes and reviewing listings with a Smart Advisor.",
    stack: ["JavaScript", "Chrome Extension", "React", "Browser APIs"],
    status: "MVP",
    featured: true,
    githubUrl: "https://github.com/flegardev/avtonet-garage",
    accent: "from-[#d7d2ca] to-[#9eb0bd]",
    metric: "Vehicle tool",
    screenshots: [
      {
        src: "/projects/avtonet-garage/main-feature.webp",
        width: 1440,
        height: 900,
        alt: "AvtoNet Garage injected listing advisor and save confirmation on an avto.net vehicle page",
        caption: "In-page save flow",
      },
      {
        src: "/projects/avtonet-garage/popup-dashboard.webp",
        width: 700,
        height: 620,
        alt: "AvtoNet Garage popup dashboard with saved vehicles and price change status",
        caption: "Saved vehicles",
      },
      {
        src: "/projects/avtonet-garage/vehicle-detail.webp",
        width: 700,
        height: 620,
        alt: "AvtoNet Garage vehicle detail modal with price history and smart advisor notes",
        caption: "Vehicle detail",
      },
      {
        src: "/projects/avtonet-garage/mobile-listing.webp",
        width: 390,
        height: 844,
        alt: "AvtoNet Garage mobile vehicle listing with injected save action",
        caption: "Mobile listing",
      },
    ],
    caseStudy: {
      problem:
        "Shopping for a car on avto.net means juggling browser tabs, re-finding listings and never knowing whether a price dropped or a listing quietly changed.",
      approach:
        "A Chrome extension that injects save controls and a Smart Advisor into vehicle detail pages, while a React popup manages saved listings, folders, notifications, price history and settings.",
      outcome:
        "A working MVP that turns marketplace browsing into a tracked, comparable shortlist. It keeps data in Chrome storage and monitors saved listings for price/status changes.",
      highlights: [
        "Save listings directly from avto.net detail pages",
        "Smart Advisor scoring with positives and risk signals",
        "Price-change, sold and removed monitoring",
        "Folders, local storage and optional Chrome notifications",
      ],
    },
  },
  {
    name: "Auto Life Logger",
    slug: "auto-life-logger",
    description:
      "Local-first Chrome extension for tracking browsing habits, spotting distraction loops and nudging focus back on track.",
    stack: ["JavaScript", "Chrome Extension", "Local storage", "Playwright"],
    status: "In development",
    featured: true,
    githubUrl: "https://github.com/flegardev/auto-life-logger",
    accent: "from-[#d7d2ca] to-[#82a8e8]",
    metric: "Focus tracker",
    screenshots: [
      {
        src: "/projects/auto-life-logger/dashboard-desktop.webp",
        width: 1600,
        height: 1406,
        alt: "Auto Life Logger dashboard showing browsing time, focus score and activity charts",
        caption: "Focus analytics dashboard",
      },
      {
        src: "/projects/auto-life-logger/patterns-desktop.webp",
        width: 1600,
        height: 1000,
        alt: "Auto Life Logger patterns page showing detected distraction loops and intervention progress",
        caption: "Focus patterns",
      },
      {
        src: "/projects/auto-life-logger/discipline-score.webp",
        width: 1600,
        height: 1000,
        alt: "Auto Life Logger discipline score dashboard with history and focus breakdown",
        caption: "Discipline score",
      },
      {
        src: "/projects/auto-life-logger/mobile-popup.webp",
        width: 780,
        height: 1688,
        alt: "Auto Life Logger mobile-sized extension popup with score and site activity",
        caption: "Extension popup",
      },
    ],
    caseStudy: {
      problem:
        "Browser time is easy to lose and hard to understand. Raw history does not explain distraction loops, overruns or whether the day was actually focused.",
      approach:
        "A Manifest V3 extension tracks active HTTP/HTTPS tab sessions locally, classifies domains, shows dashboards and detects focus patterns. Optional overlays and Strict Mode intervene when distracting sites keep pulling attention.",
      outcome:
        "In development with the core tracking, dashboard, scoring, options, onboarding and local-only privacy model in place.",
      highlights: [
        "Local-only browsing session tracking",
        "Productive, distracting and neutral domain classification",
        "Distraction-loop and overrun detection",
        "Strict Mode, notifications and on-page interventions",
      ],
    },
  },
  {
    name: "YouTube Focus",
    slug: "youtube-focus",
    description:
      "Chrome extension that makes YouTube calmer by hiding feeds, Shorts, comments, recommendations and other distractions.",
    stack: ["JavaScript", "Chrome Extension", "Browser APIs", "Playwright"],
    status: "MVP",
    featured: true,
    githubUrl: "https://github.com/flegardev/youtube-focus",
    accent: "from-[#d7d2ca] to-[#d85f5f]",
    metric: "Focus extension",
    screenshots: [
      {
        src: "/projects/youtube-focus/focused-home.webp",
        width: 1440,
        height: 900,
        alt: "YouTube Focus Mode focused YouTube home page with distractions hidden",
        caption: "Focused YouTube home",
      },
      {
        src: "/projects/youtube-focus/popup-soft-lock.webp",
        width: 390,
        height: 652,
        alt: "YouTube Focus Mode extension popup with timed lock enabled",
        caption: "Timed focus lock",
      },
      {
        src: "/projects/youtube-focus/watch-focused.webp",
        width: 1440,
        height: 900,
        alt: "YouTube Focus Mode watch page with related distractions removed",
        caption: "Focused watch page",
      },
      {
        src: "/projects/youtube-focus/mobile-home.webp",
        width: 390,
        height: 844,
        alt: "YouTube Focus Mode mobile-sized focused YouTube home page",
        caption: "Mobile focused view",
      },
    ],
    caseStudy: {
      problem:
        "YouTube is a work tool and a distraction machine in the same tab. Watching one tutorial should not cost an hour of recommendations, Shorts and comments.",
      approach:
        "A Chrome extension with a one-click Focus Mode toggle, a minimal search-first YouTube experience and a Timed Lock for 25, 50, 90 or custom-minute sessions. State stays local in Chrome storage.",
      outcome:
        "A working MVP with local-only settings, light/dark popup themes and smoke-tested popup/content-script behavior.",
      highlights: [
        "Hides feeds, Shorts, comments, related videos and notification distractions",
        "Timed Lock for focused sessions",
        "Search-first YouTube access while focus mode is active",
        "Local-only settings and no analytics",
      ],
    },
  },
  {
    name: "Fullstack Template",
    slug: "fullstack-template",
    description:
      "Production-minded full-stack monorepo starter with Next.js, Express, PostgreSQL, Prisma, auth and CRUD defaults.",
    stack: ["Next.js", "Express", "PostgreSQL", "Prisma"],
    status: "MVP",
    featured: false,
    githubUrl: "https://github.com/flegardev/fullstack-template",
    accent: "from-[#d7d2ca] to-[#68d4c5]",
    metric: "Build system",
    screenshots: [
      {
        src: "/projects/fullstack-template/home-desktop.webp",
        width: 1440,
        height: 900,
        alt: "Fullstack Template starter landing page with stack cards and command sample",
        caption: "Starter homepage",
      },
      {
        src: "/projects/fullstack-template/home-mobile.webp",
        width: 390,
        height: 1160,
        alt: "Fullstack Template mobile homepage layout",
        caption: "Mobile homepage",
      },
    ],
    caseStudy: {
      problem:
        "Every new MVP used to start with the same setup work: project structure, auth, API validation, database wiring, seed data, deployment config and quality scripts.",
      approach:
        "A reusable monorepo starter encodes those decisions once: Next.js web app, Express API, Prisma/PostgreSQL database package, JWT auth, posts CRUD, seed data, Docker Compose and unified scripts.",
      outcome:
        "A practical starter that lets new builds begin from a working full-stack baseline instead of repeating boilerplate.",
      highlights: [
        "Next.js web app plus Express REST API",
        "JWT auth and ownership-checked posts CRUD",
        "Prisma schema, migrations and seed data",
        "Docker Compose and workspace scripts for local setup",
      ],
    },
  },
  {
    name: "AI Bot",
    slug: "ai-bot",
    description:
      "Python trading research bot for backtesting, paper trading, signal scoring and transparent risk rules.",
    stack: ["Python", "ccxt", "pandas", "scikit-learn"],
    status: "Case study",
    featured: false,
    githubUrl: "https://github.com/flegardev/ai-bot",
    accent: "from-[#d7d2ca] to-[#6d8cff]",
    metric: "Trading research",
    screenshots: [],
    caseStudy: {
      problem:
        "Trading strategy ideas are easy to describe and hard to validate without a repeatable backtest, paper-trading loop and clear risk controls.",
      approach:
        "A Python research tool implements multi-timeframe technical analysis, backtesting, paper trading, CSV logging, configurable risk limits and an optional machine-learning confidence filter.",
      outcome:
        "A case-study project for transparent algorithmic research. Paper mode is the safe default; live trading requires explicit opt-in and user-owned exchange credentials.",
      highlights: [
        "Backtesting against historical OHLCV data",
        "Paper trading with live market data and no real orders",
        "Risk limits for position sizing and drawdown control",
        "Optional ML confidence filter for signal scoring",
      ],
    },
  },
  {
    name: "Borza Academy",
    slug: "borza",
    description:
      "Multilingual financial-literacy academy with structured learning paths, trading simulation, review flows, and classroom tools.",
    stack: ["Next.js", "React", "TypeScript", "FastAPI", "SQLAlchemy", "PostgreSQL", "Supabase"],
    status: "MVP",
    featured: true,
    githubUrl: "https://github.com/flegardev/Borza",
    demoUrl: "https://borza-kappa.vercel.app",
    accent: "from-[#d7d2ca] to-[#3b82f6]",
    metric: "Fintech Academy",
    screenshots: [
      {
        src: "/projects/borza/dashboard-desktop.png",
        width: 1440,
        height: 900,
        alt: "Borza Academy main platform interface showing curriculum paths and learning dashboard",
        caption: "Academy dashboard",
      },
      {
        src: "/projects/borza/mobile-dashboard.png",
        width: 390,
        height: 844,
        alt: "Borza Academy mobile view for responsive learning",
        caption: "Mobile interface",
      },
    ],
    caseStudy: {
      problem:
        "Financial education and trading practice often rely on unverified advice or complex trading software. Beginners need structured, risk-focused micro-learning paired with realistic, non-monetary practice.",
      approach:
        "A full-stack learning platform joining a Next.js 16 App Router frontend, a FastAPI/SQLAlchemy backend, PostgreSQL database, and optional Supabase auth. Features German, Slovenian, and English curriculum paths, quizzes, calculator tools, trading simulations, and teacher classroom controls.",
      outcome:
        "A production-relevant MVP supporting 12 curriculum paths, interactive chart exercises, and deterministic historical replay scenarios where process quality and risk management are scored independently from profit.",
      highlights: [
        "Multilingual learning paths in DE, SL, and EN",
        "Deterministic paper-trading simulator with historical replay",
        "Socratic AI mentor integration with fallback safeguards",
        "Teacher Mode for secondary school classroom sessions and CSV reporting",
      ],
    },
  },
  {
    name: "Nana's Recipes",
    slug: "recepti",
    description:
      "Private shared household cookbook PWA with multi-owner authorization, pantry-based recipe matching, and offline support.",
    stack: ["Next.js", "React", "TypeScript", "Supabase Auth", "PostgreSQL", "Tailwind CSS"],
    status: "Live",
    featured: true,
    githubUrl: "https://github.com/flegardev/recepti",
    demoUrl: "https://recepti-rho.vercel.app",
    accent: "from-[#d7d2ca] to-[#e11d48]",
    metric: "Household PWA",
    screenshots: [
      {
        src: "/projects/recepti/preview-desktop.png",
        width: 1440,
        height: 900,
        alt: "Nana's Recipes private household cookbook dashboard and recipe library",
        caption: "Cookbook dashboard",
      },
      {
        src: "/projects/recepti/mobile-preview.png",
        width: 390,
        height: 844,
        alt: "Nana's Recipes mobile cooking view and pantry manager",
        caption: "Mobile cooking mode",
      },
    ],
    caseStudy: {
      problem:
        "Households struggle to organize shared recipes, keep track of pantry ingredients, and answer the daily question of what to cook without wasting food.",
      approach:
        "A private Next.js 16 PWA built with React 19, TypeScript, and Supabase Auth/PostgreSQL. Implements multi-owner security boundaries, pantry matching algorithms, serving scaling, mobile step-by-step cooking timers, and structured grocery lists.",
      outcome:
        "A deployed, installable household application featuring a warm kitchen design system, strict authorization controls, transactional PostgreSQL RPCs, offline fallback, and zero-leakage security RLS policies.",
      highlights: [
        "Pantry-based recipe matching and grocery list generation",
        "Multi-owner Google OAuth authorization with private storage",
        "Mobile cooking mode with step-by-step timers and wake lock",
        "Installable PWA with offline fallback caching",
      ],
    },
  },
  {
    name: "DeloHub SI",
    slug: "delohub-si",
    description:
      "Slovenian jobs marketplace platform with typed search, student & career tracks, applicant workflows, and employer analytics.",
    stack: ["Symfony", "PHP", "Vue", "TypeScript", "PostgreSQL", "Redis", "Elasticsearch", "Docker"],
    status: "MVP",
    featured: true,
    githubUrl: "https://github.com/flegardev/DeloHubSI",
    accent: "from-[#d7d2ca] to-[#059669]",
    metric: "Jobs Marketplace",
    screenshots: [
      {
        src: "/projects/delohub-si/home-desktop.png",
        width: 1440,
        height: 900,
        alt: "DeloHub SI jobs marketplace landing page with student and career work discovery",
        caption: "Marketplace homepage",
      },
      {
        src: "/projects/delohub-si/job-detail.png",
        width: 1440,
        height: 900,
        alt: "DeloHub SI job details page with employer requirements and application flow",
        caption: "Job detail view",
      },
      {
        src: "/projects/delohub-si/candidate-dashboard.png",
        width: 1440,
        height: 900,
        alt: "DeloHub SI candidate dashboard with resume manager and application tracking",
        caption: "Candidate dashboard",
      },
      {
        src: "/projects/delohub-si/home-mobile.png",
        width: 390,
        height: 844,
        alt: "DeloHub SI mobile jobs discovery layout",
        caption: "Mobile view",
      },
    ],
    caseStudy: {
      problem:
        "Employment portals in Slovenia often conflate temporary student work with permanent career positions, lacking clear role separation, modern UI workflows, and malware-scanned resume storage.",
      approach:
        "A full-stack employment application built on Symfony/PHP and Vue 3/TypeScript, supported by PostgreSQL, Redis, RabbitMQ outbox publishing, Elasticsearch search projection, MinIO private S3 storage, and ClamAV malware scanning.",
      outcome:
        "A comprehensive portfolio-grade platform covering typed job discovery for both student work and career roles, employer listing moderation, applicant pipelines, messaging, alerts, and operational admin tools.",
      highlights: [
        "Dual-track architecture for Slovenian student work and regular career employment",
        "Transactional RabbitMQ outbox and Elasticsearch search projection with SQL fallback",
        "ClamAV fail-closed malware scanning for private S3 resume uploads",
        "Reviewed OpenAPI 3.1 contract covering 91 API operations across candidate, employer, and admin roles",
      ],
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
