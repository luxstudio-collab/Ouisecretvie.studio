import { site } from "@/content/site";
import InstagramIcon from "./InstagramIcon";

/** Small pill that stays in the corner, so Instagram is always one tap away. */
export default function FloatingInstagram({ label }: { label: string }) {
  return (
    <a
      href={site.instagram.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} · ${site.instagram.handle}`}
      className="fixed right-[calc(1rem+env(safe-area-inset-right))] bottom-[calc(1rem+env(safe-area-inset-bottom))] z-30 inline-flex min-h-12 min-w-12 items-center justify-center gap-2 rounded-full bg-ink/90 sm:px-5 text-sm text-bg shadow-lg backdrop-blur-md transition-transform hover:scale-[1.03]"
    >
      <InstagramIcon className="h-4 w-4" />
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}
