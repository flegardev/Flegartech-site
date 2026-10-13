import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { selectedWork } from "@/data/selected-work";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...selectedWork.map(({ slug }) => ({ url: `${siteConfig.url}/work/${slug}`, lastModified: new Date("2026-10-13"), changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
