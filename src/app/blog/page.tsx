import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on building MVPs, dashboards and practical software: how FlegarTech scopes, builds and ships.",
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
      <main id="main" className="min-h-screen bg-[#050705] pt-28 text-white">
        <div className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#75b183]">
              Blog
            </p>
            <h1 className="text-3xl font-semibold tracking-normal text-white sm:text-5xl">
              Notes on building practical software.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              How FlegarTech scopes MVPs, picks stacks and designs tools people keep using, written
              from the projects on this site.
            </p>
          </div>
          <div className="grid gap-5">
            {sorted.map((post) => (
              <article
                key={post.slug}
                className="rounded-lg border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:border-[#75b183]/45"
              >
                <p className="text-sm text-zinc-500">
                  <time dateTime={post.date}>{dateFormat.format(new Date(post.date))}</time>
                  {" · "}
                  {post.readingMinutes} min read
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  <Link href={`/blog/${post.slug}`} className="transition hover:text-[#bce4c4]">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 leading-7 text-zinc-400">{post.description}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#75b183] transition hover:text-[#8ac897]"
                >
                  Read post
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
