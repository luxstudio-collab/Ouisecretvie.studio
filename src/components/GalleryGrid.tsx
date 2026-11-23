"use client";

import { useState } from "react";
import { concepts, groups, type Group } from "@/content/gallery";
import type { Locale } from "@/content/site";
import ConceptCard from "./ConceptCard";

type Props = {
  lang: Locale;
  labels: {
    filterLabel: string;
    filters: Record<"all" | Group, string>;
    count: string;
    concept: string;
    comingSoon: string;
    palette: string;
  };
};

/** The Tables grid with filter chips (All · Stone & ruins · Seasons · Nature). */
export default function GalleryGrid({ lang, labels }: Props) {
  const [active, setActive] = useState<"all" | Group>("all");
  const shown = active === "all" ? concepts : concepts.filter((c) => c.group === active);

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div
          role="group"
          aria-label={labels.filterLabel}
          className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0"
        >
          {(["all", ...groups] as const).map((key) => {
            const on = key === active;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActive(key)}
                aria-pressed={on}
                className={`min-h-11 shrink-0 rounded-full border px-5 text-sm tracking-[0.08em] transition-colors ${
                  on
                    ? "border-ink bg-ink text-bg"
                    : "border-line text-muted hover:border-ink hover:text-ink"
                }`}
              >
                {labels.filters[key]}
              </button>
            );
          })}
        </div>
        <p className="mt-4 mb-10 text-sm text-muted" aria-live="polite">
          {String(shown.length).padStart(2, "0")} {labels.count}
        </p>
      </div>

      <section className="mx-auto grid max-w-6xl gap-x-8 gap-y-16 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-10">
        {shown.map((c, i) => (
          <ConceptCard
            key={`${active}-${c.id}`}
            concept={c}
            lang={lang}
            index={i}
            conceptLabel={labels.concept}
            comingSoonLabel={labels.comingSoon}
            paletteLabel={labels.palette}
          />
        ))}
      </section>
    </>
  );
}
