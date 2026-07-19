import type { MetadataRoute } from "next";
import { ARTICLES } from "@/content/articles";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://cdlpassprep.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/quiz", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/free", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/guides", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "monthly" as const },
    { path: "/refunds", priority: 0.3, changeFrequency: "monthly" as const },
  ];

  const articleRoutes = ARTICLES.map((a) => ({
    path: `/guides/${a.slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...articleRoutes].map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
