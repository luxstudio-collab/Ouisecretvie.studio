import { columns, getColumn } from "@/content/journal";
import { hasLocale, locales } from "@/content/site";
import { pinImage } from "@/lib/og";

export function generateStaticParams() {
  return locales.flatMap((lang) => columns.map((c) => ({ lang, slug: c.slug })));
}

// Tall 1000x1500 cover for Pinterest, one per column and language.
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ lang: string; slug: string }> },
) {
  const { lang, slug } = await params;
  const l = hasLocale(lang) ? lang : "en";
  const column = getColumn(slug) ?? columns[0];
  const [main, sub] = column.title[l].split(/:\s+/);
  return pinImage({ eyebrow: column.category[l], title: main, subtitle: sub, lead: column.lead[l] });
}
