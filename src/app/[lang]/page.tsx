import Link from "next/link";
import { notFound } from "next/navigation";
import Artwork from "@/components/Artwork";
import InstagramIcon from "@/components/InstagramIcon";
import { getDictionary } from "@/content/dictionaries";
import { concepts } from "@/content/gallery";
import { hasLocale, site } from "@/content/site";

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const t = dict.home;
  const week = concepts.find((c) => c.id === "winter-dinner") ?? concepts[0];
  const collection = concepts.filter((c) => c.id !== week.id).slice(0, 4);

  return (
    <>
      {/* 1 · Full-screen scene: the brand lives inside the image */}
      <section className="relative -mt-px h-[calc(100svh-4rem-env(safe-area-inset-top))] min-h-[560px] overflow-hidden md:h-[calc(100svh-5rem-env(safe-area-inset-top))]">
        <Artwork
          variant="columns"
          uid="hero"
          alt={t.lead}
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-14 text-white sm:px-6 md:pb-20 lg:px-10">
          <p className="rise flex items-center gap-3 text-xs tracking-[0.28em] text-white/80 uppercase">
            <span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_12px_var(--gold)]" />
            {t.eyebrow}
          </p>
          <h1
            className="rise mt-5 font-serif text-[3.6rem] leading-[0.92] italic sm:text-8xl lg:text-[9rem]"
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
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-8 text-sm tracking-[0.14em] text-black uppercase transition-colors hover:bg-white/85"
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
          className="absolute right-6 bottom-6 hidden text-[0.65rem] tracking-[0.3em] text-white/60 uppercase md:block"
          aria-hidden="true"
        >
          {t.scroll} ↓
        </span>
      </section>

      {/* 2 · Honest numbers, no invented reach */}
      <section className="border-b border-line">
        <dl className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-line px-0 sm:px-6 lg:px-10">
          {t.stats.map((s) => (
            <div key={s.label} className="px-3 py-8 text-center sm:py-10">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-serif text-4xl text-accent sm:text-6xl">{s.value}</dd>
              <dd className="mt-2 text-[0.7rem] leading-snug tracking-[0.18em] text-muted uppercase sm:text-xs">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 3 · Statement */}
      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 md:py-28">
        <span className="mx-auto mb-8 block h-10 w-px bg-gold" aria-hidden="true" />
        <h2 className="font-serif text-4xl leading-tight sm:text-5xl">{t.introTitle}</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {t.introBody}
        </p>
      </section>

      {/* 4 · Table of the week */}
      <section className="bg-[#14100e] text-[#efe6da]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.15fr_1fr] md:gap-14 md:py-24 lg:px-10">
          <Artwork
            variant={week.art}
            uid="week"
            image={week.image}
            alt={`${week.title[lang]}: ${week.place[lang]}`}
            sizes="(min-width: 768px) 55vw, 100vw"
            className="aspect-[4/5] rounded-sm md:aspect-[5/6]"
          />
          <div>
            <p className="flex items-center gap-3 text-xs tracking-[0.28em] text-[#d6b06a] uppercase">
              <span className="h-2 w-2 rounded-full bg-[#d6b06a]" />
              {t.weekEyebrow}
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-none italic sm:text-6xl">
              {week.title[lang]}
            </h2>
            <p className="mt-3 text-sm tracking-[0.14em] text-[#a8998a] uppercase">
              {week.place[lang]}
            </p>
            <p className="mt-7 text-lg leading-relaxed text-[#efe6da]/80">{t.weekBody}</p>
            <ul className="mt-7 flex gap-2" aria-label={dict.gallery.palette}>
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
        </div>
      </section>

      {/* 5 · Collection: large edge-to-edge images */}
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
          {collection.map((c) => (
            <Link
              key={c.id}
              href={`/${lang}/gallery`}
              className="group relative block overflow-hidden"
            >
              <Artwork
                variant={c.art}
                uid={`col-${c.id}`}
                image={c.image}
                alt={`${c.title[lang]}: ${c.place[lang]}`}
                sizes="(min-width: 640px) 50vw, 100vw"
                className="aspect-[4/3] transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-6 text-white md:p-8">
                <p className="text-[0.65rem] tracking-[0.24em] text-white/70 uppercase">
                  {dict.gallery.concept} · {c.place[lang]}
                </p>
                <h3 className="mt-2 font-serif text-3xl italic md:text-4xl">{c.title[lang]}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6 · Principles */}
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

      {/* 7 · Follow the table: Instagram-style grid */}
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
