import Link from "next/link";

// Shown for unknown pages inside a language, e.g. /en/something-missing.
export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-4 py-32 text-center sm:px-6">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-serif text-5xl italic">This table is not set</h1>
      <p className="mt-4 text-muted">
        The page you are looking for does not exist. · Aradığın sayfa bulunamadı. ·
        Cette page n&apos;existe pas.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex min-h-12 items-center rounded-full bg-accent px-8 text-sm tracking-[0.14em] text-accent-ink uppercase"
      >
        Home · Ana Sayfa · Accueil
      </Link>
    </section>
  );
}
