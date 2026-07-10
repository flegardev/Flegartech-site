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
    title: "How I scope an MVP in one week",
    description:
      "The process I use to turn a fuzzy product idea into a buildable, fixed-scope first release before writing any code.",
    date: "2026-06-01",
    readingMinutes: 4,
    blocks: [
      {
        type: "p",
        text: "Most MVPs fail before the first line of code, in the scoping. Either the scope is everything the founder ever imagined, or it's so thin that the launch proves nothing. The week I spend scoping is the highest-leverage week of the whole project.",
      },
      { type: "h2", text: "Day 1-2: Find the one workflow" },
      {
        type: "p",
        text: "Every product worth building has one workflow that carries the value. For a queue system it's 'visitor joins, sees their position, gets called'. For a budgeting app it's 'log an expense, see what's safe to spend'. I keep asking one question until the answer is concrete: what does the user do on day one, and what do they get out of it?",
      },
      { type: "h2", text: "Day 3: Decide what the MVP will not do" },
      {
        type: "p",
        text: "The not-list is more important than the feature list. No accounts in v1 if a magic link will do. No admin panel if a database client will do for the first ten customers. Every cut here is a week of delivery time bought back.",
      },
      { type: "h2", text: "Day 4-5: Write the scope as screens" },
      {
        type: "p",
        text: "A scope written as features ('user management') is ambiguous. A scope written as screens is not: this screen shows this data, these three buttons do these three things. Screens are also the natural unit for estimating and for agreeing on what 'done' means.",
      },
      { type: "h2", text: "What the client gets" },
      {
        type: "ul",
        items: [
          "A one-page scope: the workflow, the screens, the not-list",
          "A fixed price and a delivery date tied to that scope",
          "A clear path for v2, where everything on the not-list is a candidate",
        ],
      },
      {
        type: "p",
        text: "The point isn't ceremony. It's that a week of honest scoping makes the build phase boring, and boring builds ship on time.",
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
        text: "Browser extensions, bots and automation tools don't need a framework at all. Plain TypeScript with a small build step beats dragging a web framework into a non-web product. And when a client already runs on another stack, joining it usually beats migrating it.",
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
        text: "Every dashboard project starts with the same request: 'we want to see everything in one place.' Most end the same way: a page of charts nobody opens after week two. The difference between a used dashboard and an abandoned one is rarely visual. It's editorial.",
      },
      { type: "h2", text: "Answer a question, don't display data" },
      {
        type: "p",
        text: "A used dashboard answers a question its owner asks every day: are we on track today, which driver is risky this week, what's due next. If the question isn't crisp, no amount of charting fixes it. I start every dashboard by writing the three questions it must answer, in the owner's words.",
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
