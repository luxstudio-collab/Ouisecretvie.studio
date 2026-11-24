import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ColumnCard from "@/components/ColumnCard";
import PageIntro from "@/components/PageIntro";
import { getDictionary } from "@/content/dictionaries";
import { columns } from "@/content/journal";
import { hasLocale } from "@/content/site";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/journal">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang).journal;
  return { title: t.title, description: t.lead };
}

export default async function JournalPage({ params }: PageProps<"/[lang]/journal">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang).journal;

  return (
    <>
      <PageIntro eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
      <section className="mx-auto grid max-w-6xl gap-x-8 gap-y-16 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-10">
        {columns.map((c, i) => (
          <ColumnCard key={c.slug} column={c} lang={lang} minutesLabel={t.minutes} index={i} />
        ))}
      </section>
    </>
  );
}
