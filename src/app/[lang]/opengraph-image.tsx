import { getDictionary } from "@/content/dictionaries";
import { hasLocale, locales } from "@/content/site";
import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Ouisecretvie Studio · where ideas breathe";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// Default share card for every page in a language.
export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(hasLocale(lang) ? lang : "en");
  return ogImage({
    eyebrow: dict.home.eyebrow,
    title: "where ideas breathe",
    subtitle: dict.home.waysLead,
  });
}
