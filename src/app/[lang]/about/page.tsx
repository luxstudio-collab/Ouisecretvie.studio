import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Artwork from "@/components/Artwork";
import PageIntro from "@/components/PageIntro";
import { getDictionary } from "@/content/dictionaries";
import { hasLocale } from "@/content/site";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang).about;
  return { title: t.eyebrow, description: t.paragraphs[0] };
}

export default async function AboutPage({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang).about;

  return (
    <>
      <PageIntro eyebrow={t.eyebrow} title={t.title} />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-[1fr_1.1fr] md:gap-16 lg:px-10">
        <Artwork
          variant="ruins"
          uid="about"
          alt={t.title}
          sizes="(min-width: 768px) 45vw, 100vw"
          className="rise aspect-[4/5] rounded-t-full md:sticky md:top-28 md:self-start"
        />
        <div className="rise" style={{ animationDelay: "120ms" }}>
          {t.paragraphs.map((p, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "font-serif text-2xl leading-snug sm:text-3xl"
                  : "mt-6 text-lg leading-relaxed text-muted"
              }
            >
              {p}
            </p>
          ))}

          <h2 className="mt-14 font-serif text-3xl">{t.valuesTitle}</h2>
          <ul className="mt-6 border-t border-line">
            {t.values.map((v, i) => (
              <li
                key={v}
                className="flex items-baseline gap-5 border-b border-line py-5 text-lg"
              >
                <span className="font-serif text-gold italic">0{i + 1}</span>
                {v}
              </li>
            ))}
          </ul>

          <p className="mt-12 font-serif text-2xl text-accent italic">— {t.signature}</p>
        </div>
      </section>
    </>
  );
}
