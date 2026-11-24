import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Artwork from "@/components/Artwork";
import ColumnCard from "@/components/ColumnCard";
import InstagramIcon from "@/components/InstagramIcon";
import { getDictionary } from "@/content/dictionaries";
import { columns, formatColumnDate, getColumn, readingMinutes } from "@/content/journal";
import { hasLocale, locales, site } from "@/content/site";

export function generateStaticParams() {
  return locales.flatMap((lang) => columns.map((c) => ({ lang, slug: c.slug })));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/journal/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const column = getColumn(slug);
  if (!hasLocale(lang) || !column) return {};
  return { title: column.title[lang], description: column.lead[lang] };
}

export default async function ColumnPage({ params }: PageProps<"/[lang]/journal/[slug]">) {
  const { lang, slug } = await params;
  const column = getColumn(slug);
  if (!hasLocale(lang) || !column) notFound();
  const t = getDictionary(lang).journal;
  const [main, sub] = column.title[lang].split(/:\s+/);
  const others = columns.filter((c) => c.slug !== column.slug).slice(0, 2);

  return (
    <article>
      {/* Heading */}
      <header className="rise mx-auto max-w-3xl px-4 pt-12 text-center sm:px-6 md:pt-20">
        <Link
          href={`/${lang}/journal`}
          className="inline-flex min-h-11 items-center text-xs tracking-[0.24em] text-muted uppercase hover:text-accent"
        >
          ← {t.back}
        </Link>
        <p className="mt-4 text-xs tracking-[0.28em] text-gold uppercase">{column.category[lang]}</p>
        <h1 className="mt-4 font-serif text-4xl leading-[1.08] sm:text-6xl">
          {main}
          {sub && (
            <span className="mt-2 block text-[0.62em] leading-snug text-muted italic">{sub}</span>
          )}
        </h1>
        <p className="mx-auto mt-7 max-w-2xl font-serif text-xl leading-relaxed text-ink/80 italic sm:text-2xl">
          {column.lead[lang]}
        </p>
        <p className="mt-6 text-xs tracking-[0.16em] text-muted uppercase">
          {t.by} {site.name} · {formatColumnDate(column.date, lang)} ·{" "}
          {readingMinutes(column, lang)} {t.minutes}
        </p>
      </header>

      {/* Image */}
      <div className="rise mx-auto mt-12 max-w-5xl px-4 sm:px-6" style={{ animationDelay: "120ms" }}>
        <Artwork
          variant={column.art}
          uid={`col-hero-${column.slug}`}
          image={column.image}
          alt={column.title[lang]}
          priority
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="aspect-[16/9] rounded-sm"
        />
      </div>

      {/* Body */}
      <div className="mx-auto mt-14 max-w-2xl px-4 text-lg leading-[1.85] sm:px-6">
        {column.body.map((block, i) => {
          if (block.type === "h")
            return (
              <h2 key={i} className="mt-12 mb-4 font-serif text-3xl leading-snug">
                {block.text[lang]}
              </h2>
            );
          if (block.type === "quote")
            return (
              <blockquote
                key={i}
                className="my-12 border-y border-line py-8 text-center font-serif text-3xl leading-snug text-accent italic sm:text-4xl"
              >
                <span className="mb-2 block text-5xl leading-none text-gold" aria-hidden="true">
                  “
                </span>
                {block.text[lang]}
              </blockquote>
            );
          return (
            <p
              key={i}
              className={`mt-6 text-ink/85 ${
                i === 0
                  ? "first-letter:float-left first-letter:mt-1 first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-accent"
                  : ""
              }`}
            >
              {block.text[lang]}
            </p>
          );
        })}

        <p className="mt-12 text-center font-serif text-2xl text-gold" aria-hidden="true">
          ✦
        </p>
        <div className="mt-8 text-center">
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-ink/25 px-7 text-sm tracking-[0.12em] uppercase transition-colors hover:border-accent hover:text-accent"
          >
            <InstagramIcon className="h-4 w-4" />
            {t.shareCta}
          </a>
        </div>
      </div>

      {/* More columns */}
      {others.length > 0 && (
        <section className="mx-auto mt-24 max-w-6xl border-t border-line px-4 pt-14 sm:px-6 lg:px-10">
          <h2 className="font-serif text-3xl sm:text-4xl">{t.more}</h2>
          <div className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2">
            {others.map((c, i) => (
              <ColumnCard key={c.slug} column={c} lang={lang} minutesLabel={t.minutes} index={i} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
