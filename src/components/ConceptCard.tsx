import { concepts, type Concept } from "@/content/gallery";
import type { Locale } from "@/content/site";
import Artwork from "./Artwork";

type Props = {
  concept: Concept;
  lang: Locale;
  conceptLabel: string;
  comingSoonLabel: string;
  paletteLabel: string;
  index: number;
};

export default function ConceptCard({
  concept,
  lang,
  conceptLabel,
  comingSoonLabel,
  paletteLabel,
  index,
}: Props) {
  return (
    <article className="group rise" style={{ animationDelay: `${index * 80}ms` }}>
      <div className="relative">
        <Artwork
          variant={concept.art}
          uid={`card-${concept.id}`}
          image={concept.image}
          alt={`${concept.title[lang]}: ${concept.place[lang]}`}
          className="aspect-[4/5] rounded-sm transition-transform duration-700 group-hover:scale-[1.01]"
        />
        <span className="absolute top-3 left-3 rounded-full bg-black/35 px-3 py-1 text-[0.65rem] tracking-[0.2em] text-white/90 uppercase backdrop-blur-sm">
          {conceptLabel} · {String(concepts.indexOf(concept) + 1).padStart(2, "0")}
        </span>
        {!concept.image && (
          <span className="absolute right-3 bottom-3 text-[0.65rem] tracking-[0.2em] text-white/70 uppercase">
            {comingSoonLabel}
          </span>
        )}
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif text-2xl leading-tight">{concept.title[lang]}</h3>
          <p className="mt-1 text-sm text-muted">{concept.place[lang]}</p>
        </div>
        <ul className="mt-2 flex shrink-0 gap-1.5" aria-label={paletteLabel}>
          {concept.palette.map((c) => (
            <li
              key={c}
              className="h-3.5 w-3.5 rounded-full border border-ink/15"
              style={{ background: c }}
              title={c}
            />
          ))}
        </ul>
      </div>
      <p className="mt-3 font-serif text-lg text-ink/80 italic">{concept.note[lang]}</p>
    </article>
  );
}
