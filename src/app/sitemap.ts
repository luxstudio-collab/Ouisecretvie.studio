import type { MetadataRoute } from "next";
import { columns } from "@/content/journal";
import { looks } from "@/content/looks";
import { locales } from "@/content/site";
import { abs } from "@/lib/seo";

// Every page in every language, with its language alternates, so search
// engines find all of them and show the right language to each visitor.
export default function sitemap(): MetadataRoute.Sitemap {
  const today = "2026-11-24";

  const pages: { path: string; lastModified: string; priority: number; freq: "daily" | "weekly" | "monthly" }[] = [
    { path: "", lastModified: today, priority: 1, freq: "weekly" },
    { path: "/journal", lastModified: columns[0]?.date ?? today, priority: 0.9, freq: "weekly" },
    { path: "/gallery", lastModified: today, priority: 0.8, freq: "weekly" },
    { path: "/looks", lastModified: looks[0]?.date ?? today, priority: 0.8, freq: "daily" },
    { path: "/about", lastModified: today, priority: 0.5, freq: "monthly" },
    { path: "/contact", lastModified: today, priority: 0.4, freq: "monthly" },
    ...columns.map((c) => ({
      path: `/journal/${c.slug}`,
      lastModified: c.date,
      priority: 0.7,
      freq: "monthly" as const,
    })),
    ...looks.map((l) => ({
      path: `/looks/${l.slug}`,
      lastModified: l.date,
      priority: 0.6,
      freq: "monthly" as const,
    })),
  ];

  return pages.flatMap((page) =>
    locales.map((lang) => ({
      url: abs(`/${lang}${page.path}`),
      lastModified: page.lastModified,
      changeFrequency: page.freq,
      priority: page.priority,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, abs(`/${l}${page.path}`)])),
      },
    })),
  );
}
