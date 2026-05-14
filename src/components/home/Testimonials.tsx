import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  { quote: "I bought a Madhubani painting and the story behind it made it feel like I was bringing home a piece of Bihar's soul. Beautifully packaged, prompt delivery.", name: 'Ananya R.', city: 'Bengaluru' },
  { quote: 'The Banarasi saree is a dream. Every thread is intentional. SanskritiHaat is doing precious work for our weavers.', name: 'Priya M.', city: 'Mumbai' },
  { quote: 'Ordered the Dokra elephant for a friend\'s housewarming. The artisan story card was a beautiful touch — they were moved to tears.', name: 'Karan S.', city: 'Delhi' },
  { quote: 'Finally a marketplace that respects craft and pays artisans fairly. Will keep shopping here forever.', name: 'Meera J.', city: 'Pune' },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI(p => (p + 1) % reviews.length);
  const prev = () => setI(p => (p - 1 + reviews.length) % reviews.length);
  const r = reviews[i];

  return (
    <section className="mx-auto max-w-5xl px-4 py-20 text-center">
      <p className="font-accent text-sm text-[var(--turmeric)]">Voices from the haat</p>
      <h2 className="font-display text-4xl md:text-5xl">Loved by collectors</h2>
      <div className="relative mt-10 min-h-[220px]">
        <AnimatePresence mode="wait">
          <motion.div key={i} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.45 }}>
            <span className="font-display text-7xl text-[var(--turmeric)]/40 leading-none">"</span>
            <p className="mx-auto max-w-2xl font-display text-xl md:text-2xl leading-snug text-[var(--earth)]">{r.quote}</p>
            <p className="mt-6 font-accent text-sm text-[var(--earth)]/60">— {r.name}, {r.city}</p>
          </motion.div>
        </AnimatePresence>
        <button onClick={prev} aria-label="Prev" className="absolute -left-2 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full border border-[var(--sand)] hover:bg-[var(--turmeric)] hover:text-[var(--cream)]"><ChevronLeft size={18}/></button>
        <button onClick={next} aria-label="Next" className="absolute -right-2 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full border border-[var(--sand)] hover:bg-[var(--turmeric)] hover:text-[var(--cream)]"><ChevronRight size={18}/></button>
      </div>
    </section>
  );
}
