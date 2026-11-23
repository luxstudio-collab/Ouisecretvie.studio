"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Locale } from "@/content/site";
import LanguageSwitcher from "./LanguageSwitcher";

type NavItem = { href: string; label: string };

type Props = {
  lang: Locale;
  name: string;
  monogram: string;
  items: NavItem[];
  menuLabel: string;
  closeLabel: string;
  languageLabel: string;
};

export default function Header({
  lang,
  name,
  monogram,
  items,
  menuLabel,
  closeLabel,
  languageLabel,
}: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Stop the page behind the menu from scrolling while it is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close with the Escape key (useful with an iPad keyboard).
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) =>
    href === `/${lang}` ? pathname === href : pathname.startsWith(href);

  return (
    <>
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/85 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 md:h-20 lg:px-10">
        <Link
          href={`/${lang}`}
          onClick={() => setOpen(false)}
          className="flex min-h-11 items-center gap-3"
          aria-label={name}
        >
          <span className="grid h-10 w-10 place-items-center rounded-full border border-ink/25 font-serif text-sm tracking-[0.12em]">
            {monogram}
          </span>
          <span className="hidden font-serif text-xl tracking-wide sm:inline">
            {name}
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`relative flex min-h-11 items-center px-4 text-sm tracking-[0.14em] uppercase transition-colors hover:text-accent ${
                isActive(item.href) ? "text-ink" : "text-muted"
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute inset-x-4 bottom-2 h-px bg-accent" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <div className="hidden sm:block">
            <LanguageSwitcher lang={lang} label={languageLabel} />
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex min-h-11 min-w-11 items-center justify-center gap-2 px-2 text-sm tracking-[0.14em] uppercase lg:hidden"
          >
            <span className="relative block h-3 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 h-px w-5 bg-ink transition-transform duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-5 bg-ink transition-transform duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
            <span>{open ? closeLabel : menuLabel}</span>
          </button>
        </div>
      </div>
    </header>

      {/* Full-screen menu for phones and iPad portrait. It sits outside the
          header because the header's blur effect would trap it. */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 top-[calc(4rem+env(safe-area-inset-top))] bottom-0 z-40 overflow-y-auto bg-bg md:top-[calc(5rem+env(safe-area-inset-top))] lg:hidden"
      >
        <nav
          aria-label="Mobile"
          className="mx-auto flex max-w-6xl flex-col px-6 pt-8 pb-[calc(2rem+env(safe-area-inset-bottom))] sm:px-10"
        >
          {items.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(item.href) ? "page" : undefined}
              className="rise flex min-h-16 items-baseline gap-5 border-b border-line py-4 font-serif text-4xl sm:text-5xl"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="font-sans text-xs tracking-[0.2em] text-muted">
                0{i + 1}
              </span>
              <span className={isActive(item.href) ? "text-accent" : ""}>
                {item.label}
              </span>
            </Link>
          ))}
          <div className="mt-10 sm:hidden">
            <p className="eyebrow mb-3">{languageLabel}</p>
            <LanguageSwitcher
              lang={lang}
              label={languageLabel}
              onSelect={() => setOpen(false)}
            />
          </div>
        </nav>
      </div>
    </>
  );
}
