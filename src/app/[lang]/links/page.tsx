import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import InstagramIcon from "@/components/InstagramIcon";
import { getDictionary } from "@/content/dictionaries";
import { columns } from "@/content/journal";
import { hasLocale, site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

// Link-in-bio page for Instagram: put https://ouisecretvie.vercel.app/tr/links in the bio.
export async function generateMetadata({ params }: PageProps<"/[lang]/links">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang).links;
  return {
    ...pageMetadata({ lang, path: "/links", title: t.title, description: t.lead, absoluteTitle: true }),
    robots: { index: false, follow: true },
  };
}

export default async function LinksPage({ params }: PageProps<"/[lang]/links">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const t = dict.links;
  const latest = columns[0];

  const items = [
    { href: `/${lang}/journal/${latest.slug}`, label: latest.title[lang].split(/:\s+/)[0], note: t.latest },
    { href: `/${lang}/journal`, label: dict.journal.title },
    { href: `/${lang}/gallery`, label: dict.nav.gallery },
    { href: `/${lang}/looks`, label: dict.nav.looks },
    { href: `/${lang}`, label: dict.nav.home },
  ];

  return (
    <section className="mx-auto flex max-w-md flex-col items-center px-4 pt-14 pb-10 text-center">
      <span className="grid h-20 w-20 place-items-center rounded-full border border-ink/25 font-serif text-xl tracking-[0.12em]">
        {site.monogram}
      </span>
      <h1 className="mt-5 font-serif text-4xl">{t.title}</h1>
      <p className="mt-2 font-serif text-lg text-muted italic">{t.lead}</p>

      <ul className="mt-10 flex w-full flex-col gap-3">
        {items.map((item, i) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`flex min-h-14 flex-col items-center justify-center rounded-full border px-6 py-3 transition-colors ${
                i === 0
                  ? "border-accent bg-accent text-accent-ink hover:opacity-90"
                  : "border-line hover:border-accent hover:text-accent"
              }`}
            >
              {item.note && (
                <span className="text-[0.65rem] tracking-[0.24em] uppercase opacity-80">{item.note}</span>
              )}
              <span className="font-serif text-xl">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <a
        href={site.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-accent"
      >
        <InstagramIcon className="h-4 w-4" />
        {site.instagram.handle}
      </a>
    </section>
  );
}
