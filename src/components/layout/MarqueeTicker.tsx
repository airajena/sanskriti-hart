export function MarqueeTicker() {
  const items = ['Free Shipping Above ₹2000','Raksha Bandhan Gifts','Support 200+ Artisans','Eco-Friendly Packaging','Secure Payments','Made in India'];
  const row = (
    <div className="flex shrink-0 items-center gap-12 px-6">
      {items.map((t, i) => (
        <span key={i} className="font-accent text-sm whitespace-nowrap text-[var(--cream)]">✦ {t}</span>
      ))}
    </div>
  );
  return (
    <div className="overflow-hidden bg-[var(--forest)] py-3">
      <div className="flex animate-marquee">
        {row}{row}{row}{row}
      </div>
    </div>
  );
}
