import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes by Tini Flegar on building MVPs, dashboards and practical software.",
  alternates: { canonical: "/blog" },
};

const dateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <SiteHeader />
      <main id="main" className="min-h-screen bg-[#050505] pt-28 text-white">
        <div className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="font-editorial mb-3 text-xl font-semibold text-zinc-300">
              Blog
            </p>
            <h1 className="text-3xl font-semibold tracking-normal text-white sm:text-5xl">
              Notes on building practical software.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              Engineering notes on scoping MVPs, choosing pragmatic stacks and designing useful
              interfaces, grounded in the projects on this site.
            </p>
          </div>
          {sorted.length > 0 ? (
            <div className="grid gap-5">
              {sorted.map((post) => (
              <article
                key={post.slug}
                className="rounded-lg border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:border-[#eee8de]/45"
              >
                <p className="text-sm text-zinc-400">
                  <time dateTime={post.date}>{dateFormat.format(new Date(post.date))}</time>
                  {" · "}
                  {post.readingMinutes} min read
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  <Link href={`/blog/${post.slug}`} className="transition hover:text-[#f4f1ec]">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 leading-7 text-zinc-400">{post.description}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#eee8de] transition hover:text-white"
                >
                  Read post
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
              ))}
            </div>
          ) : (
            <p className="rounded-lg border border-white/10 bg-white/[0.035] p-8 text-zinc-300">
              No notes are published yet.
            </p>
          )}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
