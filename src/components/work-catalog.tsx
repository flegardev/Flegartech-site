"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
type Entry = { slug: string; name: string; category: string; summary: string; stack: string[]; status: string };
export function WorkCatalog({ entries }: { entries: Entry[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(entries.map((entry) => entry.category))];
  const visible = entries.filter((entry) => (category === "All" || entry.category === category) && [entry.name, entry.summary, ...entry.stack].join(" ").toLowerCase().includes(query.trim().toLowerCase()));
  return <><div className="catalog-controls"><div className="filter-list" aria-label="Project categories">{categories.map((label) => <button type="button" key={label} aria-pressed={category === label} onClick={() => setCategory(label)}>{label}</button>)}</div><label className="search-box"><Search size={17} aria-hidden="true" /><span className="sr-only">Search selected projects</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find a project or technology" /></label></div>
    <p className="catalog-count" aria-live="polite">{visible.length} {visible.length === 1 ? "project" : "projects"}</p>
    {visible.length ? <div className="catalog-list">{visible.map((entry) => <Link href={"/work/" + entry.slug} className="catalog-item" key={entry.slug}><div><span className="label">{entry.category}</span><h3>{entry.name}</h3></div><p>{entry.summary}</p><div className="catalog-meta"><span>{entry.status}</span><ArrowUpRight size={21} aria-hidden="true" /></div></Link>)}</div> : <div className="empty-state"><h3>No projects match that search.</h3><p>Try a technology like TypeScript, or reset the filters.</p><button className="button secondary" type="button" onClick={() => { setQuery(""); setCategory("All"); }}>Reset filters</button></div>}</>;
}
