import { motion } from 'framer-motion';
import { Link } from '@tanstack/react-router';
import pottery from '@/assets/hero-pottery.jpg';
import textile from '@/assets/hero-textile.jpg';
import painting from '@/assets/hero-painting.jpg';
import metal from '@/assets/hero-metal.jpg';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 left-0 w-1/2 block-print-bg opacity-[0.05] pointer-events-none" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:py-24 md:gap-16 items-center">
        <div>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="font-accent text-sm text-[var(--turmeric)] mb-4">— A cultural marketplace</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-5xl md:text-7xl font-bold leading-[1.05] text-[var(--earth)]">
            Where Heritage<br/>Meets <em className="text-[var(--turmeric)]">Home</em>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-md text-base text-[var(--earth)]/75">
            Handcrafted by 200+ artisans across 25 Indian states. Every piece carries a story of hands that remember.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-3">
            <Link to="/shop" className="rounded-md bg-[var(--turmeric)] px-7 py-3.5 text-sm font-medium text-[var(--cream)] shadow-card transition-all hover:bg-[var(--saffron)] hover:shadow-lifted">Shop Now →</Link>
            <Link to="/about" className="rounded-md border-2 border-[var(--earth)] px-7 py-3.5 text-sm font-medium text-[var(--earth)] hover:bg-[var(--earth)] hover:text-[var(--cream)]">Our Story</Link>
          </motion.div>
        </div>

        <div className="relative h-[420px] md:h-[560px]">
          {[
            { src: textile, top: '0%', left: '5%', w: '52%', rot: -4, d: 0.2 },
            { src: pottery, top: '8%', left: '46%', w: '50%', rot: 5, d: 0.35 },
            { src: painting, top: '48%', left: '0%', w: '50%', rot: 6, d: 0.5 },
            { src: metal, top: '52%', left: '44%', w: '52%', rot: -3, d: 0.65 },
          ].map((it, i) => (
            <motion.img key={i} src={it.src} alt="craft" loading={i === 0 ? 'eager' : 'lazy'}
              initial={{ opacity: 0, scale: 0.85, rotate: it.rot * 2 }} animate={{ opacity: 1, scale: 1, rotate: it.rot }} transition={{ duration: 0.7, delay: it.d, ease: 'easeOut' }}
              style={{ top: it.top, left: it.left, width: it.w }}
              className="absolute aspect-square rounded-[var(--radius-md)] object-cover shadow-lifted"/>
          ))}
          <motion.div initial={{ scale: 0, rotate: -20 }} animate={{ scale: 1, rotate: -12 }} transition={{ delay: 0.9, type: 'spring' }}
            className="absolute -left-4 bottom-8 z-10 grid h-24 w-24 place-items-center rounded-full bg-[var(--turmeric)] text-center font-display text-sm font-bold uppercase leading-tight text-[var(--cream)] shadow-lifted">
            100%<br/>Hand<br/>made
          </motion.div>
        </div>
      </div>
    </section>
  );
}
