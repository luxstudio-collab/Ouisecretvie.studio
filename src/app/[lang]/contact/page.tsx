import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Artwork from "@/components/Artwork";
import InstagramIcon from "@/components/InstagramIcon";
import PageIntro from "@/components/PageIntro";
import { getDictionary } from "@/content/dictionaries";
import { hasLocale, site } from "@/content/site";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang).contact;
  return { title: t.eyebrow, description: t.lead };
}

export default async function ContactPage({ params }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang).contact;

  return (
    <>
      <PageIntro eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:items-start lg:px-10">
        <div className="rise flex flex-col gap-4">
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-20 items-center justify-between gap-4 rounded-sm border border-line bg-surface/60 px-6 py-5 transition-colors hover:border-accent"
          >
            <span className="flex items-center gap-4">
              <InstagramIcon className="h-7 w-7 text-accent" />
              <span>
                <span className="block font-serif text-2xl">{t.instagramCta}</span>
                <span className="text-sm text-muted">{site.instagram.handle}</span>
              </span>
            </span>
            <span className="text-xl transition-transform group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </a>

          {site.email && (
            <a
              href={`mailto:${site.email}`}
              className="group flex min-h-20 items-center justify-between gap-4 rounded-sm border border-line px-6 py-5 transition-colors hover:border-accent"
            >
              <span>
                <span className="block font-serif text-2xl">{t.emailCta}</span>
                <span className="text-sm text-muted">{site.email}</span>
              </span>
              <span className="text-xl" aria-hidden="true">→</span>
            </a>
          )}

          <p className="mt-4 font-serif text-xl leading-snug text-muted italic">{t.note}</p>
        </div>

        <Artwork
          variant="olive"
          uid="contact"
          alt={t.title}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="rise aspect-[5/4] rounded-sm md:aspect-[4/5]"
        />
      </section>
    </>
  );
}
