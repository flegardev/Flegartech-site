import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { PortfolioNav } from "@/components/portfolio-nav";
import { selectedWork, findWork } from "@/data/selected-work";
import { siteConfig } from "@/data/site";
type Props = { params: Promise<{slug: string}> };
export const dynamicParams = false;
export function generateStaticParams() { return selectedWork.map(({slug}) => ({slug})); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
 const {slug}=await params; const work=findWork(slug); if (!work) return {};
 return { title: work.name + " — Tini Flegar", description: work.summary, alternates: {canonical: siteConfig.url + "/work/" + slug}, openGraph: {title: work.name + " — Engineering case study", description: work.summary, url: siteConfig.url + "/work/" + slug} };
}
export default async function CaseStudy({params}: Props) {
 const {slug}=await params; const work=findWork(slug); if (!work) notFound();
 return <><PortfolioNav /><main id="main" className="shell case-study"><Link href="/#work" className="text-link"><ArrowLeft size={17} aria-hidden="true" /> All selected work</Link><div className="case-intro"><p className="label">{work.category}</p><h1>{work.name}</h1><p className="large-copy">{work.summary}</p><ul className="tags">{work.stack.map((item) => <li key={item}>{item}</li>)}</ul><div className="hero-actions"><a className="button primary" href={work.repository} target="_blank" rel="noreferrer">Explore the source <ArrowUpRight size={17} aria-hidden="true" /></a>{work.demo ? <a className="button secondary" href={work.demo} target="_blank" rel="noreferrer">{work.demoLabel} <ArrowUpRight size={17} aria-hidden="true" /></a> : null}</div><aside className="verification-note"><strong>{work.status}</strong><p>{work.verification}</p></aside></div>
 {work.image ? <figure className="case-image"><Image src={work.image} alt={work.imageAlt ?? work.name} width={1440} height={1000} sizes="(max-width: 767px) 100vw, 90vw" priority /><figcaption>{work.imageAlt}</figcaption></figure> : null}
 <div className="case-body"><section><p className="label">The problem</p><h2>A reason to build.</h2><p>{work.problem}</p></section><section><p className="label">The solution</p><h2>From workflow to system.</h2><p>{work.solution}</p></section><section className="architecture-section"><p className="label">Architecture</p><h2>The pieces and their boundaries.</h2><ol className="architecture-flow">{work.architecture.map((node, index) => <li key={node}><span className="label">0{index+1}</span><strong>{node}</strong></li>)}</ol><p className="architecture-caption">A simplified view of the implemented system. Hosting status is described above.</p></section><section><p className="label">Engineering decisions</p><h2>What matters underneath.</h2><ol className="decision-list">{work.decisions.map((decision) => <li key={decision}>{decision}</li>)}</ol></section></div><div className="case-end"><p>Interested in the details?</p><a className="text-link" href={work.repository} target="_blank" rel="noreferrer">Read the implementation on GitHub <ArrowUpRight size={17} aria-hidden="true" /></a></div></main></>;
}
