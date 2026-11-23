import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ConceptCard from "@/components/ConceptCard";
import PageIntro from "@/components/PageIntro";
import { getDictionary } from "@/content/dictionaries";
import { concepts } from "@/content/gallery";
import { hasLocale } from "@/content/site";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/gallery">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang).gallery;
  return { title: t.title, description: t.lead };
}

export default async function GalleryPage({ params }: PageProps<"/[lang]/gallery">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang).gallery;

  return (
    <>
      <PageIntro eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
      <section className="mx-auto grid max-w-6xl gap-x-8 gap-y-16 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-10">
        {concepts.map((c, i) => (
          <ConceptCard
            key={c.id}
            concept={c}
            lang={lang}
            index={i}
            conceptLabel={t.concept}
            comingSoonLabel={t.comingSoon}
            paletteLabel={t.palette}
          />
        ))}
      </section>
    </>
  );
}
