import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Artwork from "@/components/Artwork";
import ColumnCard from "@/components/ColumnCard";
import InstagramIcon from "@/components/InstagramIcon";
import { getDictionary } from "@/content/dictionaries";
import { concepts } from "@/content/gallery";
import { columns } from "@/content/journal";
import { looks } from "@/content/looks";
import { hasLocale, site } from "@/content/site";

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const t = dict.home;
  const week = concepts.find((c) => c.id === "winter-dinner") ?? concepts[0];
  const collection = concepts.filter((c) => c.id !== week.id).slice(0, 4);
  const firstLook = looks[0];
  const doors = [
    { href: `/${lang}/gallery`, external: false },
    { href: `/${lang}/looks`, external: false },
    { href: site.instagram.url, external: true },
  ];

  return (
    <>
      {/* 1 · Full-screen scene. The header floats over it (see Header). */}
      <section className="grain relative -mt-[calc(4rem+env(safe-area-inset-top))] h-[100svh] min-h-[600px] overflow-hidden bg-[#14100e] md:-mt-[calc(5rem+env(safe-area-inset-top))]">
        <Artwork
          variant="columns"
          uid="hero"
          alt={t.lead}
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-black/85"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-16 text-white sm:px-6 md:pb-24 lg:px-10">
          <p className="rise flex items-center gap-3 text-xs tracking-[0.3em] text-white/80 uppercase">
            <span className="h-2 w-2 rounded-full bg-[#d6b06a] shadow-[0_0_14px_#d6b06a]" />
            {t.eyebrow}
          </p>
          <h1
            className="glow rise mt-5 font-serif text-[3.8rem] leading-[0.9] italic sm:text-8xl lg:text-[9.5rem]"
            style={{ animationDelay: "100ms" }}
          >
            {t.title}
          </h1>
          <p
            className="rise mt-6 max-w-lg text-lg leading-relaxed text-white/80"
            style={{ animationDelay: "200ms" }}
          >
            {t.lead}
          </p>
          <div
            className="rise mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "300ms" }}
          >
            <Link
              href={`/${lang}/gallery`}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#f3e9da] px-8 text-sm tracking-[0.14em] text-[#14100e] uppercase transition-colors hover:bg-white"
            >
              {t.primary}
            </Link>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/40 px-8 text-sm tracking-[0.14em] uppercase backdrop-blur-sm transition-colors hover:border-white"
            >
              <InstagramIcon className="h-4 w-4" />
              {t.secondary}
            </a>
          </div>
        </div>
        <span
          className="absolute right-6 bottom-8 hidden text-[0.65rem] tracking-[0.3em] text-white/60 uppercase md:block"
          aria-hidden="true"
        >
          {t.scroll} ↓
        </span>
      </section>

      {/* 2 · Endless band of places and materials */}
      <div className="marquee overflow-hidden border-y border-[#d6b06a]/20 bg-[#14100e] py-5 text-[#efe6da]">
        <div className="marquee-track" aria-hidden="true">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center">
              {t.marquee.map((word) => (
                <li
                  key={`${copy}-${word}`}
                  className="flex items-center gap-8 pr-8 font-serif text-2xl whitespace-nowrap italic sm:text-3xl"
                >
                  {word}
                  <span className="text-base text-[#d6b06a] not-italic">✦</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <p className="sr-only">{t.marquee.join(", ")}</p>
      </div>

      {/* 3 · Honest numbers */}
      <section className="border-b border-line">
        <dl className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-line sm:px-6 lg:px-10">
          {t.stats.map((s) => (
            <div key={s.label} className="px-3 py-9 text-center sm:py-12">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-serif text-5xl text-accent sm:text-7xl">{s.value}</dd>
              <dd className="mt-2 text-[0.68rem] leading-snug tracking-[0.18em] text-muted uppercase sm:text-xs">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 4 · Three ways in */}
      <section className="mx-auto max-w-6xl px-4 pt-20 sm:px-6 md:pt-28 lg:px-10">
        <div className="text-center">
          <p className="eyebrow">{t.waysEyebrow}</p>
          <h2 className="mt-4 font-serif text-5xl italic sm:text-6xl">{t.waysTitle}</h2>
          <p className="mx-auto mt-4 max-w-md text-muted">{t.waysLead}</p>
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {t.ways.map((way, i) => {
            const door = doors[i];
            const media =
              i === 1 && firstLook ? (
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-line bg-white">
                  <Image
                    src={firstLook.image}
                    alt={firstLook.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              ) : (
                <Artwork
                  variant={i === 0 ? "ruins" : "red"}
                  uid={`door-${i}`}
                  alt={way.title}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="aspect-[4/5] rounded-sm transition-transform duration-700 group-hover:scale-[1.03]"
                />
              );
            const body = (
              <>
                <div className="overflow-hidden rounded-sm">{media}</div>
                <p className="mt-6 text-xs tracking-[0.28em] text-gold uppercase">{way.eyebrow}</p>
                <h3 className="mt-2 font-serif text-3xl italic">{way.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{way.body}</p>
                <span className="mt-5 inline-flex min-h-11 items-center gap-2 border-b border-ink/30 text-sm tracking-[0.14em] uppercase transition-colors group-hover:border-accent group-hover:text-accent">
                  {way.cta} <span aria-hidden="true">→</span>
                </span>
              </>
            );
            return door.external ? (
              <a
                key={way.title}
                href={door.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                {body}
              </a>
            ) : (
              <Link key={way.title} href={door.href} className="group block">
                {body}
              </Link>
            );
          })}
        </div>
      </section>

      {/* 5 · Table of the week, with a glowing title */}
      <section className="grain mt-24 bg-[#14100e] text-[#efe6da] md:mt-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1fr_1.15fr] md:gap-16 md:py-28 lg:px-10">
          <div className="order-2 text-center md:order-1 md:text-left">
            <p className="inline-flex items-center gap-3 text-xs tracking-[0.3em] text-[#d6b06a] uppercase">
              <span className="h-2 w-2 rounded-full bg-[#d6b06a] shadow-[0_0_14px_#d6b06a]" />
              {t.weekEyebrow}
            </p>
            <h2 className="glow mt-6 font-serif text-6xl leading-[0.95] italic sm:text-7xl lg:text-8xl">
              {week.title[lang]}
            </h2>
            <p className="mt-4 text-sm tracking-[0.18em] text-[#a8998a] uppercase">
              {week.place[lang]}
            </p>
            <p className="mx-auto mt-7 max-w-md text-lg leading-relaxed text-[#efe6da]/80 md:mx-0">
              {t.weekBody}
            </p>
            <ul
              className="mt-7 flex justify-center gap-2 md:justify-start"
              aria-label={dict.gallery.palette}
            >
              {week.palette.map((c) => (
                <li
                  key={c}
                  className="h-8 w-8 rounded-full border border-white/20"
                  style={{ background: c }}
                  title={c}
                />
              ))}
            </ul>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-full border border-[#d6b06a]/60 px-7 text-sm tracking-[0.14em] uppercase transition-colors hover:bg-[#d6b06a] hover:text-[#14100e]"
            >
              {t.weekCta} ✨
            </a>
          </div>
          <div className="order-1 md:order-2">
            <Artwork
              variant={week.art}
              uid="week"
              image={week.image}
              alt={`${week.title[lang]}: ${week.place[lang]}`}
              sizes="(min-width: 768px) 55vw, 100vw"
              className="aspect-[4/5] rounded-t-full shadow-[0_40px_120px_-40px_rgb(214_176_106/0.45)]"
            />
          </div>
        </div>
      </section>

      {/* 6 · Collection: large edge-to-edge images */}
      <section className="pt-20 md:pt-28">
        <div className="mx-auto mb-10 flex max-w-6xl items-end justify-between gap-6 px-4 sm:px-6 lg:px-10">
          <h2 className="font-serif text-4xl sm:text-5xl">{t.collectionTitle}</h2>
          <Link
            href={`/${lang}/gallery`}
            className="inline-flex min-h-11 items-center border-b border-ink/30 text-xs tracking-[0.14em] uppercase hover:border-accent hover:text-accent sm:text-sm"
          >
            {t.featuredLink} →
          </Link>
        </div>
        <div className="grid gap-1 sm:grid-cols-2">
          {collection.map((c) => {
            const n = String(concepts.indexOf(c) + 1).padStart(2, "0");
            return (
              <Link key={c.id} href={`/${lang}/gallery`} className="group relative block overflow-hidden">
                <Artwork
                  variant={c.art}
                  uid={`col-${c.id}`}
                  image={c.image}
                  alt={`${c.title[lang]}: ${c.place[lang]}`}
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="aspect-[4/3] transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/75 via-transparent to-black/20 p-6 text-white md:p-8">
                  <span className="font-serif text-lg text-white/80 italic">{n}</span>
                  <div>
                    <p className="text-[0.65rem] tracking-[0.24em] text-white/70 uppercase">
                      {dict.gallery.filters[c.group]} · {c.place[lang]}
                    </p>
                    <h3 className="mt-2 flex items-center justify-between gap-4 font-serif text-3xl italic md:text-4xl">
                      {c.title[lang]}
                      <span
                        className="translate-x-[-6px] text-2xl not-italic opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 6b · From the journal: short columns */}
      <section className="mx-auto max-w-6xl px-4 pt-24 sm:px-6 md:pt-32 lg:px-10">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">{dict.journal.eyebrow}</p>
            <h2 className="mt-3 font-serif text-4xl italic sm:text-5xl">{dict.journal.homeTitle}</h2>
          </div>
          <Link
            href={`/${lang}/journal`}
            className="inline-flex min-h-11 items-center border-b border-ink/30 text-xs tracking-[0.14em] uppercase hover:border-accent hover:text-accent sm:text-sm"
          >
            {dict.journal.homeLink} →
          </Link>
        </div>
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {columns.slice(0, 3).map((c, i) => (
            <ColumnCard
              key={c.slug}
              column={c}
              lang={lang}
              minutesLabel={dict.journal.minutes}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* 7 · Manifesto, as a pull-quote */}
      <section className="grain mt-24 bg-[#14100e] px-4 py-24 text-center text-[#efe6da] sm:px-6 md:mt-32 md:py-32">
        <span className="block font-serif text-7xl leading-none text-[#d6b06a]" aria-hidden="true">
          “
        </span>
        <blockquote className="mx-auto mt-2 max-w-4xl">
          <p className="glow font-serif text-4xl leading-tight italic sm:text-6xl">
            {t.introTitle}
          </p>
          <footer className="mt-6 text-xs tracking-[0.3em] text-[#d6b06a] uppercase">
            ~ {site.name}
          </footer>
        </blockquote>
        <p className="mx-auto mt-10 max-w-xl text-lg leading-relaxed text-[#efe6da]/70">
          {t.introBody}
        </p>
      </section>

      {/* 8 · Principles */}
      <section className="mx-auto max-w-6xl px-4 pt-24 sm:px-6 md:pt-32 lg:px-10">
        <h2 className="font-serif text-4xl sm:text-5xl">{t.principlesTitle}</h2>
        <ol className="mt-10 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {t.principles.map((p, i) => (
            <li key={p.title} className="bg-bg p-7 md:p-8">
              <span className="font-serif text-lg text-gold italic">0{i + 1}</span>
              <h3 className="mt-4 font-serif text-2xl">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 9 · Follow the table */}
      <section className="mx-auto max-w-6xl px-4 pt-24 sm:px-6 md:pt-32 lg:px-10">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_1.3fr] md:gap-14">
          <div>
            <p className="eyebrow">{site.instagram.handle}</p>
            <h2 className="mt-4 font-serif text-5xl italic sm:text-6xl">{t.followTitle}</h2>
            <p className="mt-5 max-w-sm text-lg leading-relaxed text-muted">{t.followBody}</p>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-8 text-sm tracking-[0.14em] text-accent-ink uppercase hover:opacity-90"
            >
              <InstagramIcon className="h-4 w-4" />
              {t.secondary}
            </a>
          </div>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t.followTitle} · ${site.instagram.handle}`}
            className="grid grid-cols-3 gap-1"
          >
            {concepts.map((c) => (
              <Artwork
                key={c.id}
                variant={c.art}
                uid={`ig-${c.id}`}
                image={c.image}
                alt={c.title[lang]}
                sizes="(min-width: 768px) 18vw, 33vw"
                className="aspect-[4/5] transition-opacity hover:opacity-85"
              />
            ))}
          </a>
        </div>
      </section>
    </>
  );
}
