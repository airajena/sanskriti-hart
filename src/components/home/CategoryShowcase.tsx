import { Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { products } from '@/data/products';
import { CATEGORY_LABEL } from '@/types';
import type { Category } from '@/types';

const cats: { key: Category; img: string }[] = [
  { key: 'textiles', img: products.find(p => p.category === 'textiles')!.image },
  { key: 'pottery', img: products.find(p => p.category === 'pottery')!.image },
  { key: 'paintings', img: products.find(p => p.category === 'paintings')!.image },
  { key: 'metalcraft', img: products.find(p => p.category === 'metalcraft')!.image },
  { key: 'basketry', img: products.find(p => p.category === 'basketry')!.image },
];

export function CategoryShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <div className="mb-12 text-center">
        <p className="font-accent text-sm text-[var(--turmeric)]">Explore</p>
        <h2 className="font-display text-4xl md:text-5xl text-[var(--earth)]">Five Living Traditions</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-6">
        {cats.map((c, i) => {
          const count = products.filter(p => p.category === c.key).length;
          return (
            <motion.div key={c.key}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}>
              <Link to="/shop" search={{ category: c.key } as never} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius-lg)] bg-[var(--linen)]">
                  <img src={c.img} alt={CATEGORY_LABEL[c.key]} loading="lazy"
                    className="h-full w-full object-contain p-4 transition-transform duration-700 group-hover:scale-110"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--earth)]/80 via-[var(--earth)]/20 to-transparent"/>
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="font-accent text-[10px] uppercase tracking-wider text-[var(--turmeric)]">{count} pieces</p>
                    <h3 className="font-display text-xl text-[var(--cream)] leading-tight">{CATEGORY_LABEL[c.key]}</h3>
                    <span className="mt-2 inline-block translate-y-2 text-xs text-[var(--cream)] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">Explore →</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
