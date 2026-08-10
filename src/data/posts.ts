export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date
  readingMinutes: number;
  blocks: PostBlock[];
};

export const posts: Post[] = [
  {
    slug: "how-i-scope-an-mvp",
    title: "How I scope a focused MVP",
    description:
      "A practical framework for turning a broad product idea into a buildable first release before writing code.",
    date: "2026-06-01",
    readingMinutes: 4,
    blocks: [
      {
        type: "p",
        text: "An MVP becomes hard to evaluate when its scope includes every possible feature or strips away the core value. The useful middle is a first release with one complete workflow and explicit boundaries.",
      },
      { type: "h2", text: "Step 1: Find the one workflow" },
      {
        type: "p",
        text: "Every product worth building has one workflow that carries the value. For a queue system it's 'visitor joins, sees their position, gets called'. For a budgeting app it's 'log an expense, see what's safe to spend'. I keep asking one question until the answer is concrete: what does the user do on day one, and what do they get out of it?",
      },
      { type: "h2", text: "Step 2: Decide what the MVP will not do" },
      {
        type: "p",
        text: "The not-list is as important as the feature list. Avoid custom authentication when a proven provider is enough, and skip an admin panel when a documented operational workflow can support the first release. Each cut protects time for the core experience.",
      },
      { type: "h2", text: "Step 3: Write the scope as screens" },
      {
        type: "p",
        text: "A scope written as features ('user management') is ambiguous. A scope written as screens is not: this screen shows this data, these three buttons do these three things. Screens are also the natural unit for estimating and for agreeing on what 'done' means.",
      },
      { type: "h2", text: "What the scope should contain" },
      {
        type: "ul",
        items: [
          "A one-page scope: the workflow, the screens, the not-list",
          "Acceptance criteria and verification steps for each core screen",
          "A clear path for v2, where everything on the not-list is a candidate",
        ],
      },
      {
        type: "p",
        text: "The point is not ceremony. A concrete scope makes implementation easier to review, test and change without losing the product's central workflow.",
      },
    ],
  },
  {
    slug: "pragmatic-mvp-stack",
    title: "A pragmatic stack for MVPs in 2026",
    description:
      "Why Next.js, TypeScript and Postgres keep winning for first releases, plus where I deviate from the defaults.",
    date: "2026-06-05",
    readingMinutes: 4,
    blocks: [
      {
        type: "p",
        text: "Stack debates are mostly entertainment. For an MVP, the stack question is really one question: what gets a typed, deployable product in front of users fastest, without boxing the product in if it succeeds?",
      },
      { type: "h2", text: "The default" },
      {
        type: "ul",
        items: [
          "Next.js + TypeScript for one codebase across UI, API routes and server logic",
          "PostgreSQL + Prisma for boring, typed data that scales further than any MVP will",
          "Tailwind CSS for design system speed without a design system",
          "Vercel for git-push deploys and preview URLs",
        ],
      },
      {
        type: "p",
        text: "The common thread is that every piece is replaceable later. Postgres doesn't care what reads from it. A Next.js API route can become a dedicated service when there's a reason. Nothing in this stack is a one-way door.",
      },
      { type: "h2", text: "Where I deviate" },
      {
        type: "p",
        text: "Browser extensions, bots and automation tools don't need a web framework by default. Plain TypeScript with a small build step can be the clearer choice. When an existing product already uses another stack, integrating with it often carries less risk than migrating it.",
      },
      { type: "h2", text: "What I avoid in v1" },
      {
        type: "ul",
        items: [
          "Microservices, because an MVP has one service's worth of logic",
          "Custom auth, because magic links or a hosted provider work until there's a reason",
          "Kubernetes, because Vercel or a single VM covers the first year",
          "New databases, because the product idea is the experiment, the database shouldn't be",
        ],
      },
      {
        type: "p",
        text: "Pick boring technology for everything except the one thing the product is actually about. That's where the innovation budget belongs.",
      },
    ],
  },
  {
    slug: "dashboards-people-use",
    title: "Dashboards people actually use",
    description:
      "Most internal dashboards are opened twice: at the demo and never again. The design decisions that change that.",
    date: "2026-06-09",
    readingMinutes: 3,
    blocks: [
      {
        type: "p",
        text: "Dashboard requests often begin with 'we want to see everything in one place.' That framing can produce a dense page of charts without a clear decision behind them. The design challenge is editorial before it is visual.",
      },
      { type: "h2", text: "Answer a question, don't display data" },
      {
        type: "p",
        text: "A useful dashboard answers a concrete question: are we on track today, which driver is risky this week, or what is due next. If the question is unclear, more charting does not fix it. Start by writing the small set of questions the interface must answer.",
      },
      { type: "h2", text: "One number per question" },
      {
        type: "p",
        text: "For each question there should be one number or state that answers it at a glance, with the supporting detail one click deeper. The DriveWise fleet view leads with a single safety score per driver. The trips, events and maps exist, but behind the score, not beside it.",
      },
      { type: "h2", text: "Make stale data loud" },
      {
        type: "p",
        text: "Nothing kills trust in a dashboard faster than quietly outdated numbers. If the data is three days old, the dashboard should say so prominently. Trustworthy and slightly ugly beats polished and silently wrong.",
      },
      {
        type: "ul",
        items: [
          "Three questions, written down before any UI",
          "One leading number per question, detail behind it",
          "Freshness always visible",
          "Role-based views instead of one page for everyone",
        ],
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
