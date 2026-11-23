import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GalleryGrid from "@/components/GalleryGrid";
import PageIntro from "@/components/PageIntro";
import { getDictionary } from "@/content/dictionaries";
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
      <GalleryGrid
        lang={lang}
        labels={{
          filterLabel: t.filterLabel,
          filters: t.filters,
          count: t.count,
          concept: t.concept,
          comingSoon: t.comingSoon,
          palette: t.palette,
        }}
      />
    </>
  );
}
