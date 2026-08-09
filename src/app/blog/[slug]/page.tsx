import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getPost, posts, type PostBlock } from "@/data/posts";
import { siteConfig } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
    },
  };
}

const dateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-10 text-2xl font-semibold text-white">{block.text}</h2>
      );
    case "ul":
      return (
        <ul className="mt-5 list-disc space-y-2 pl-6 text-lg leading-8 text-zinc-300 marker:text-[#eee8de]">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    default:
      return <p className="mt-5 text-lg leading-8 text-zinc-300">{block.text}</p>;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url: `${siteConfig.url}/blog/${post.slug}`,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />
      <main id="main" className="min-h-screen bg-[#050505] pt-28 text-white">
        <article className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All posts
          </Link>
          <header className="mt-8">
            <p className="text-sm text-zinc-400">
              <time dateTime={post.date}>{dateFormat.format(new Date(post.date))}</time>
              {" · "}
              {post.readingMinutes} min read
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-normal text-white sm:text-5xl">
              {post.title}
            </h1>
          </header>
          <div className="mt-4">
            {post.blocks.map((block, index) => (
              <Block key={index} block={block} />
            ))}
          </div>
          <div className="mt-12 rounded-lg border border-white/15 bg-white/[0.04] p-6">
            <p className="text-lg font-semibold text-white">
              Building something where this applies?
            </p>
            <Link
              href="/#contact"
              className="mt-4 inline-flex h-11 items-center gap-2 rounded-md bg-[#eee8de] px-4 text-sm font-semibold text-[#090909] transition hover:bg-white"
            >
              Start a project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
