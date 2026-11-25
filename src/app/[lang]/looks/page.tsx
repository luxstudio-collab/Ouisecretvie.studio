import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import PageIntro from "@/components/PageIntro";
import { getDictionary } from "@/content/dictionaries";
import { formatPrice, lookTotal, looks } from "@/content/looks";
import { hasLocale } from "@/content/site";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/looks">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang).looks;
  return pageMetadata({ lang, path: "/looks", title: t.title, description: t.lead });
}

export default async function LooksPage({ params }: PageProps<"/[lang]/looks">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang).looks;

  return (
    <>
      <PageIntro eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
      <section className="mx-auto grid max-w-6xl gap-x-8 gap-y-16 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-10">
        {looks.map((look, i) => (
          <article key={look.slug} className="group rise" style={{ animationDelay: `${i * 80}ms` }}>
            <Link href={`/${lang}/looks/${look.slug}`} className="block">
              <div className="overflow-hidden rounded-sm border border-line/70 bg-white">
                <Image
                  src={look.image}
                  alt={look.title}
                  width={1080}
                  height={1350}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="aspect-[4/5] h-auto w-full transition-transform duration-700 group-hover:scale-[1.01]"
                />
              </div>
              <div className="mt-5">
                <p className="text-xs tracking-[0.2em] text-muted uppercase">
                  {look.gender === "erkek" ? t.men : t.women} · {look.items.length} {t.pieces}
                </p>
                <h2 className="mt-2 font-serif text-2xl leading-tight group-hover:text-accent">
                  {look.title}
                </h2>
                <p className="mt-1 text-sm text-muted">{formatPrice(lookTotal(look), look.currency)}</p>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}
