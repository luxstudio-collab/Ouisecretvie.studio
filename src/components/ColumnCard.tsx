import Link from "next/link";
import type { Column } from "@/content/journal";
import { formatColumnDate, readingMinutes } from "@/content/journal";
import type { Locale } from "@/content/site";
import Artwork from "./Artwork";

type Props = {
  column: Column;
  lang: Locale;
  minutesLabel: string;
  index: number;
};

/** A column teaser: image, category, "Title: subtitle", lead, date and reading time. */
export default function ColumnCard({ column, lang, minutesLabel, index }: Props) {
  const [main, sub] = column.title[lang].split(/:\s+/);
  return (
    <article className="group rise" style={{ animationDelay: `${index * 80}ms` }}>
      <Link href={`/${lang}/journal/${column.slug}`} className="block">
        <div className="overflow-hidden rounded-sm">
          <Artwork
            variant={column.art}
            uid={`column-${column.slug}`}
            image={column.image}
            alt={column.title[lang]}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="aspect-[3/2] transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
        <p className="mt-5 text-xs tracking-[0.24em] text-gold uppercase">
          {column.category[lang]}
        </p>
        <h3 className="mt-2 font-serif text-2xl leading-snug transition-colors group-hover:text-accent sm:text-[1.7rem]">
          {main}
          {sub && <span className="italic text-muted">: {sub}</span>}
        </h3>
        <p className="mt-3 line-clamp-3 leading-relaxed text-muted">{column.lead[lang]}</p>
        <p className="mt-4 text-xs tracking-[0.14em] text-muted uppercase">
          {formatColumnDate(column.date, lang)} · {readingMinutes(column, lang)} {minutesLabel}
        </p>
      </Link>
    </article>
  );
}
