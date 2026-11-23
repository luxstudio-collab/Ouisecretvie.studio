import Link from "next/link";
import { site, type Locale } from "@/content/site";
import type { Dictionary } from "@/content/dictionaries";
import InstagramIcon from "./InstagramIcon";

export default function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const links = [
    { href: `/${lang}/gallery`, label: dict.nav.gallery },
    { href: `/${lang}/about`, label: dict.nav.about },
    { href: `/${lang}/contact`, label: dict.nav.contact },
  ];

  return (
    <footer className="mt-24 border-t border-line pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
        <div>
          <p className="font-serif text-3xl">{site.name}</p>
          <p className="mt-2 font-serif text-lg text-muted italic">
            {dict.footer.tagline}
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="flex min-h-11 items-center text-sm tracking-[0.14em] text-muted uppercase hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-3 text-sm hover:text-accent"
          >
            <InstagramIcon className="h-5 w-5" />
            {site.instagram.handle}
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-line/70 px-4 py-6 text-xs text-muted sm:flex-row sm:justify-between sm:px-6 lg:px-10">
        <p>{dict.footer.disclaimer}</p>
        <p>
          © 2026 {site.name}. {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
