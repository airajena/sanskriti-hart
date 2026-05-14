import { motion } from 'framer-motion';
import { products } from '@/data/products';

export function ArtisanSpotlight() {
  const seen = new Set<string>();
  const featured = products.filter(p => {
    if (seen.has(p.artisan.name)) return false;
    seen.add(p.artisan.name); return true;
  }).slice(0, 3);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <div className="mb-12 text-center">
        <p className="font-accent text-sm text-[var(--turmeric)]">— Behind every craft</p>
        <h2 className="font-display text-4xl md:text-5xl">Meet the Makers</h2>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {featured.map((p, i) => (
          <motion.div key={p.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
            className="rounded-[var(--radius-lg)] border border-[var(--sand)]/40 bg-[var(--linen)] p-7 text-center shadow-card">
            <div className="mx-auto h-28 w-28 rounded-full border-4 border-[var(--turmeric)] p-1">
              <img src={p.image} alt={p.artisan.name} className="h-full w-full rounded-full object-cover"/>
            </div>
            <h3 className="mt-4 font-display text-2xl text-[var(--earth)]">{p.artisan.name}</h3>
            <p className="font-accent text-xs text-[var(--turmeric)]">{p.artisan.region}</p>
            <p className="mt-3 text-sm text-[var(--earth)]/75">"{p.artisan.story}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
