import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/ui-custom/AnimatedCounter';

export function StoryBanner() {
  const stats = [
    { n: 200, suffix: '+', label: 'Artisans' },
    { n: 5, label: 'Craft Categories' },
    { n: 25, label: 'Indian States' },
    { n: 100, suffix: '%', label: 'Handmade' },
  ];
  return (
    <section className="my-16 bg-gradient-to-br from-[var(--cream)] via-[var(--linen)] to-[var(--cream)] py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2">
        <motion.blockquote initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="relative">
          <span className="absolute -left-2 -top-8 font-display text-[140px] leading-none text-[var(--turmeric)]/30">"</span>
          <p className="font-display italic text-3xl md:text-4xl leading-snug text-[var(--earth)]">
            Every thread, every stroke, every bead — a story of hands that remember.
          </p>
          <footer className="mt-6 font-accent text-sm text-[var(--earth)]/60">— SanskritiHaat manifesto</footer>
        </motion.blockquote>
        <div className="grid grid-cols-2 gap-6">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="rounded-[var(--radius-md)] border border-[var(--sand)]/40 bg-[var(--cream)] p-6 shadow-card">
              <p className="font-display text-5xl font-bold text-[var(--turmeric)]"><AnimatedCounter to={s.n} suffix={s.suffix}/></p>
              <p className="mt-1 font-accent text-sm text-[var(--earth)]/70">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
