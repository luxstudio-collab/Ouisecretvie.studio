"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeNames, type Locale } from "@/content/site";

type Props = {
  lang: Locale;
  label: string;
  onSelect?: () => void;
};

/** EN · TR · FR links that keep you on the same page in another language. */
export default function LanguageSwitcher({ lang, label, onSelect }: Props) {
  const pathname = usePathname();
  const rest = pathname.split("/").slice(2).join("/");

  return (
    <nav aria-label={label} className="flex items-center">
      {locales.map((locale) => {
        const active = locale === lang;
        return (
          <Link
            key={locale}
            href={`/${locale}${rest ? `/${rest}` : ""}`}
            hrefLang={locale}
            lang={locale}
            title={localeNames[locale]}
            onClick={onSelect}
            aria-current={active ? "true" : undefined}
            className={`flex min-h-11 min-w-11 items-center justify-center text-xs tracking-[0.18em] uppercase transition-colors ${
              active ? "text-accent" : "text-muted hover:text-ink"
            }`}
          >
            {locale}
          </Link>
        );
      })}
    </nav>
  );
}
