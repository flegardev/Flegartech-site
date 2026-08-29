"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, ExternalLink, Minus, Search, Star } from "lucide-react";
import { GitHubMark } from "@/components/github-mark";
import type { PortfolioRepository } from "@/lib/github";

type ProjectsBrowserProps = {
  repositories: PortfolioRepository[];
};

type SortMode = "updated" | "stars" | "language" | "name";

const preferredCategoryOrder = ["AI", "Fullstack", "Frontend", "Backend", "Finance", "Data", "Tools", "Other"];

function formattedDate(date: string | null) {
  if (!date) return "Selected build";
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}

export function ProjectsBrowser({ repositories }: ProjectsBrowserProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState<SortMode>("updated");

  const categories = useMemo(() => {
    const available = new Set(repositories.flatMap((repository) => repository.categories));
    return ["All", ...preferredCategoryOrder.filter((item) => available.has(item))];
  }, [repositories]);

  const visibleRepositories = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    const filtered = repositories.filter((repository) => {
      const matchesCategory = category === "All" || repository.categories.includes(category);
      const searchable = [
        repository.name,
        repository.description,
        repository.language,
        ...repository.topics,
        ...repository.categories,
      ]
        .filter(Boolean)
        .join(" ")
        .toLocaleLowerCase();

      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });

    return [...filtered].sort((a, b) => {
      if (sort === "stars") return b.stars - a.stars || a.name.localeCompare(b.name);
      if (sort === "language") return (a.language ?? "zzz").localeCompare(b.language ?? "zzz") || a.name.localeCompare(b.name);
      if (sort === "name") return a.name.localeCompare(b.name);
      return (b.updatedAt ?? "").localeCompare(a.updatedAt ?? "") || b.stars - a.stars;
    });
  }, [category, query, repositories, sort]);

  return (
    <div>
      <div className="grid gap-5 border-y border-black/15 py-5 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="no-scrollbar flex gap-2 overflow-x-auto" aria-label="Project categories">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
              className={`shrink-0 border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition ${
                category === item
                  ? "border-black bg-black text-white"
                  : "border-black/15 bg-white text-black/65 hover:border-black hover:text-black"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <label className="relative block min-w-0 sm:w-64">
            <span className="sr-only">Search projects</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-black/65" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search projects"
              className="h-10 w-full border border-black/15 bg-white pl-10 pr-3 text-sm outline-none transition placeholder:text-black/55 focus:border-black"
            />
          </label>
          <label>
            <span className="sr-only">Sort projects</span>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value as SortMode)}
              className="h-10 w-full border border-black/15 bg-white px-3 text-sm outline-none focus:border-black sm:w-44"
            >
              <option value="updated">Recently updated</option>
              <option value="stars">Most starred</option>
              <option value="language">By language</option>
              <option value="name">Name A–Z</option>
            </select>
          </label>
        </div>
      </div>

      <p className="mt-6 text-sm text-black/65" aria-live="polite">
        Showing {visibleRepositories.length} of {repositories.length} projects
      </p>

      {visibleRepositories.length > 0 ? (
        <div className="mt-6 grid border-l border-t border-black/15 md:grid-cols-2 xl:grid-cols-3">
          {visibleRepositories.map((repository, index) => (
            <article
              key={repository.id}
              className="project-card group relative flex min-h-[25rem] flex-col border-b border-r border-black/15 bg-white p-6 transition-colors duration-300 hover:bg-black hover:text-white sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-xs text-black/65 transition-colors group-hover:text-white/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {repository.source === "github" || repository.homepage ? (
                  <a
                    href={repository.source === "github" ? repository.url : repository.homepage!}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${repository.name}${repository.source === "github" ? " on GitHub" : " live demo"}`}
                    className="grid h-10 w-10 place-items-center border border-black/15 transition group-hover:border-white/25"
                  >
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : (
                  <span className="grid h-10 w-10 place-items-center border border-black/10 text-black/25 group-hover:border-white/15 group-hover:text-white/25" aria-hidden="true">
                    <Minus className="h-4 w-4" />
                  </span>
                )}
              </div>

              <div className="mt-12">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/65 transition-colors group-hover:text-white/70">
                  {repository.categories.slice(0, 2).join(" / ")}
                </p>
                <h3 className="font-brand mt-3 text-3xl leading-none tracking-[-0.025em] sm:text-4xl">
                  {repository.name}
                </h3>
                <p className="mt-5 line-clamp-4 text-sm leading-6 text-black/65 transition-colors group-hover:text-white/70">
                  {repository.description}
                </p>
              </div>

              <div className="mt-auto flex flex-wrap items-end justify-between gap-4 border-t border-black/12 pt-5 text-xs text-black/65 transition-colors group-hover:border-white/18 group-hover:text-white/70">
                <div className="flex items-center gap-3">
                  {repository.language ? (
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
                      {repository.language}
                    </span>
                  ) : null}
                  {repository.source === "github" ? (
                    <span className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5" aria-hidden="true" />
                      {new Intl.NumberFormat("en-US").format(repository.stars)}
                    </span>
                  ) : null}
                </div>
                <span>{formattedDate(repository.updatedAt)}</span>
              </div>

              <div className="mt-5 flex gap-3 text-xs font-semibold uppercase tracking-[0.12em]">
                {repository.source === "github" ? (
                  <a href={repository.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:underline">
                    <GitHubMark className="h-3.5 w-3.5" />
                    Source
                  </a>
                ) : null}
                {repository.homepage ? (
                  <a href={repository.homepage} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:underline">
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    Live
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-6 border border-black/15 px-6 py-16 text-center">
          <p className="font-brand text-3xl">No matching projects.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
            className="mt-4 text-sm font-semibold underline underline-offset-4"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
