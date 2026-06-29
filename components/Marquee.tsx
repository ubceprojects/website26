export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-line/60 bg-surface/40 py-4 [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
      <div className="flex w-max animate-marquee items-center">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 px-4 font-heading text-sm uppercase tracking-[0.25em] text-mist"
          >
            {item}
            <span className="text-cloud">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
