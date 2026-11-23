export default function PageIntro({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="rise mx-auto max-w-6xl px-4 pt-12 pb-12 sm:px-6 md:pt-20 md:pb-16 lg:px-10">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
        {title}
      </h1>
      {lead && (
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{lead}</p>
      )}
    </header>
  );
}
