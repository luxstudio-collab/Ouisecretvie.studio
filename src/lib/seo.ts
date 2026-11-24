// One place for search and social settings, so every page gets the same,
// complete set: title, description, canonical address, language alternates
// (hreflang), Open Graph and Twitter cards.

import type { Metadata } from "next";
import { locales, site, type Locale } from "@/content/site";

export const ogLocale: Record<Locale, string> = {
  en: "en_US",
  tr: "tr_TR",
  fr: "fr_FR",
};

/** Absolute address of a page, e.g. abs("/tr/journal") */
export const abs = (path: string) => new URL(path, site.url).toString();

/** "/journal" -> { en: "/en/journal", tr: "/tr/journal", fr: "/fr/journal", "x-default": "/en/journal" } */
export function languageAlternates(path: string) {
  const entries = locales.map((l) => [l, `/${l}${path}`] as const);
  return { ...Object.fromEntries(entries), "x-default": `/en${path}` };
}

type PageSeo = {
  lang: Locale;
  /** Path after the language, starting with "/" or "" for the home page */
  path: string;
  title?: string;
  description: string;
  type?: "website" | "article";
  images?: { url: string; width?: number; height?: number; alt?: string }[];
  publishedTime?: string;
  section?: string;
  absoluteTitle?: boolean;
};

export function pageMetadata({
  lang,
  path,
  title,
  description,
  type = "website",
  images,
  publishedTime,
  section,
  absoluteTitle,
}: PageSeo): Metadata {
  const url = `/${lang}${path}`;
  return {
    title: title ? (absoluteTitle ? { absolute: title } : title) : undefined,
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type,
      url,
      siteName: site.name,
      locale: ogLocale[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocale[l]),
      title: title ?? undefined,
      description,
      ...(images ? { images } : {}),
      ...(type === "article"
        ? { publishedTime, section, authors: [site.name] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: title ?? undefined,
      description,
      ...(images ? { images: images.map((i) => i.url) } : {}),
    },
  };
}

/** Safe JSON-LD for a <script type="application/ld+json"> tag */
export const jsonLd = (data: unknown) => ({
  __html: JSON.stringify(data).replace(/</g, "\\u003c"),
});
