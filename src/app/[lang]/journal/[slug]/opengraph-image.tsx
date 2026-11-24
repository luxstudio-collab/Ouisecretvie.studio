import { columns, getColumn } from "@/content/journal";
import { hasLocale, locales } from "@/content/site";
import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Ouisecretvie Studio · Journal";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return locales.flatMap((lang) => columns.map((c) => ({ lang, slug: c.slug })));
}

// Share card with the column's own title, so every link looks like a cover.
export default async function Image({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const l = hasLocale(lang) ? lang : "en";
  const column = getColumn(slug) ?? columns[0];
  const [main, sub] = column.title[l].split(/:\s+/);
  return ogImage({ eyebrow: column.category[l], title: main, subtitle: sub });
}
