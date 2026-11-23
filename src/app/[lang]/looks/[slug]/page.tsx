import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/content/dictionaries";
import { formatDate, formatTL, getLook, lookTotal, looks } from "@/content/looks";
import { hasLocale, locales, site } from "@/content/site";

export function generateStaticParams() {
  return locales.flatMap((lang) => looks.map((look) => ({ lang, slug: look.slug })));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/looks/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const look = getLook(slug);
  if (!hasLocale(lang) || !look) return {};
  return {
    title: look.title,
    description: look.formula,
    openGraph: {
      title: look.title,
      description: look.formula,
      images: [{ url: `${site.url}${look.image}`, width: 1080, height: 1350 }],
    },
  };
}

export default async function LookPage({ params }: PageProps<"/[lang]/looks/[slug]">) {
  const { lang, slug } = await params;
  const look = getLook(slug);
  if (!hasLocale(lang) || !look) notFound();
  const t = getDictionary(lang).looks;

  return (
    <article className="mx-auto max-w-6xl px-4 pt-10 pb-8 sm:px-6 md:pt-16 lg:px-10">
      <Link
        href={`/${lang}/looks`}
        className="inline-flex min-h-11 items-center text-sm tracking-[0.14em] text-muted uppercase hover:text-accent"
      >
        ← {t.back}
      </Link>

      <div className="mt-6 grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-14">
        <div className="rise overflow-hidden rounded-sm border border-line/70 bg-white md:sticky md:top-28 md:self-start">
          <Image
            src={look.image}
            alt={look.title}
            width={1080}
            height={1350}
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="h-auto w-full"
          />
        </div>

        <div className="min-w-0">
          <p className="eyebrow">
            {look.gender === "erkek" ? t.men : t.women} · {look.subtitle}
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-[1.05] sm:text-5xl">{look.title}</h1>
          <p className="mt-5 font-serif text-xl leading-relaxed text-ink/80 italic">{look.formula}</p>

          <ol className="mt-10 border-t border-line">
            {look.items.map((item, i) => (
              <li key={item.url} className="border-b border-line">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener"
                  className="group flex min-h-16 items-start gap-4 py-4 transition-colors hover:text-accent"
                >
                  <span className="w-6 shrink-0 pt-0.5 font-serif text-lg text-muted tabular-nums">
                    {i + 1}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs tracking-[0.16em] text-muted uppercase">
                      {item.category} · {item.brand}
                    </span>
                    <span className="mt-1 block leading-snug">{item.name}</span>
                    {item.note && <span className="mt-1 block text-sm text-accent">{item.note}</span>}
                    <span className="mt-2 inline-block text-xs tracking-[0.14em] uppercase underline decoration-line underline-offset-4 group-hover:decoration-accent">
                      {t.shop} ↗
                    </span>
                  </span>
                  <span className="shrink-0 pt-0.5 text-sm tabular-nums">{formatTL(item.price)}</span>
                </a>
              </li>
            ))}
          </ol>

          <div className="flex items-baseline justify-between gap-4 py-5">
            <span className="text-sm tracking-[0.14em] uppercase">{t.total}</span>
            <span className="font-serif text-2xl tabular-nums">{formatTL(lookTotal(look))}</span>
          </div>
          <p className="text-sm text-muted">
            {t.note} {formatDate(look.date, lang)}
          </p>
        </div>
      </div>
    </article>
  );
}
