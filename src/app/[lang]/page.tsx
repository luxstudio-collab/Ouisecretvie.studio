import Link from "next/link";
import { notFound } from "next/navigation";
import Artwork from "@/components/Artwork";
import ConceptCard from "@/components/ConceptCard";
import InstagramIcon from "@/components/InstagramIcon";
import { getDictionary } from "@/content/dictionaries";
import { concepts } from "@/content/gallery";
import { hasLocale, site } from "@/content/site";

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const t = dict.home;

  return (
    <>
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-10 pb-16 sm:px-6 md:grid-cols-[1.05fr_1fr] md:gap-12 md:pt-16 lg:px-10 lg:pt-20">
        <div className="rise">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1 className="mt-5 font-serif text-[3.25rem] leading-[0.95] font-normal italic sm:text-7xl lg:text-8xl">
            {t.title}
          </h1>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-muted">
            {t.lead}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/${lang}/gallery`}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-8 text-sm tracking-[0.14em] text-accent-ink uppercase transition-opacity hover:opacity-90"
            >
              {t.primary}
            </Link>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ink/25 px-8 text-sm tracking-[0.14em] uppercase transition-colors hover:border-ink"
            >
              <InstagramIcon className="h-4 w-4" />
              {t.secondary}
            </a>
          </div>
        </div>
        <div
          className="rise mx-auto w-full max-w-sm md:max-w-none"
          style={{ animationDelay: "120ms" }}
        >
          <Artwork
            variant="columns"
            uid="hero"
            alt={t.lead}
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="aspect-[4/5] rounded-t-full"
          />
        </div>
      </section>

      {/* Statement */}
      <section className="border-y border-line bg-surface/60">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 md:py-28">
          <span className="mx-auto mb-8 block h-10 w-px bg-gold" aria-hidden="true" />
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
            {t.introTitle}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {t.introBody}
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-6xl px-4 pt-20 sm:px-6 md:pt-28 lg:px-10">
        <div className="mb-10 flex items-end justify-between gap-6">
          <h2 className="font-serif text-4xl sm:text-5xl">{t.featuredTitle}</h2>
          <Link
            href={`/${lang}/gallery`}
            className="hidden min-h-11 items-center border-b border-ink/30 text-sm tracking-[0.14em] uppercase hover:border-accent hover:text-accent sm:inline-flex"
          >
            {t.featuredLink} →
          </Link>
        </div>
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {concepts.slice(0, 3).map((c, i) => (
            <ConceptCard
              key={c.id}
              concept={c}
              lang={lang}
              index={i}
              conceptLabel={dict.gallery.concept}
              comingSoonLabel={dict.gallery.comingSoon}
              paletteLabel={dict.gallery.palette}
            />
          ))}
        </div>
        <Link
          href={`/${lang}/gallery`}
          className="mt-10 flex min-h-12 items-center justify-center rounded-full border border-ink/25 text-sm tracking-[0.14em] uppercase sm:hidden"
        >
          {t.featuredLink} →
        </Link>
      </section>

      {/* Principles */}
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

      {/* Closing */}
      <section className="mx-auto max-w-6xl px-4 pt-24 sm:px-6 md:pt-32 lg:px-10">
        <div className="relative overflow-hidden rounded-sm">
          <div className="absolute inset-0">
            <Artwork
              variant="red"
              uid="closing"
              alt={t.closingTitle}
              sizes="100vw"
              className="h-full w-full"
            />
          </div>
          <div className="relative bg-black/45 px-6 py-20 text-center text-white sm:py-28">
            <h2 className="font-serif text-4xl italic sm:text-6xl">{t.closingTitle}</h2>
            <p className="mx-auto mt-5 max-w-md text-white/80">{t.closingBody}</p>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-8 text-sm tracking-[0.14em] text-black uppercase hover:bg-white/90"
            >
              <InstagramIcon className="h-4 w-4" />
              {site.instagram.handle}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
