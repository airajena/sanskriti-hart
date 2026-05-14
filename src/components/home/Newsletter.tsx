import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function Newsletter() {
  const [done, setDone] = useState(false);
  return (
    <section className="bg-[var(--linen)] py-20">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <p className="font-accent text-sm text-[var(--turmeric)]">— Subscribe</p>
        <h2 className="font-display text-4xl md:text-5xl">Stories from the Craft Room</h2>
        <p className="mt-3 text-[var(--earth)]/70">Get artisan features, launch alerts & exclusive offers.</p>
        {!done ? (
          <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="mx-auto mt-8 flex max-w-md gap-2">
            <input required type="email" placeholder="your@email.com" className="flex-1 rounded-md border border-[var(--sand)] bg-[var(--cream)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--turmeric)]"/>
            <button className="rounded-md bg-[var(--turmeric)] px-5 py-3 text-sm font-medium text-[var(--cream)] hover:bg-[var(--saffron)]">Subscribe</button>
          </form>
        ) : (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }} className="mx-auto mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--forest)] px-6 py-3 text-[var(--cream)]">
            <Check size={20}/> Welcome to the haat!
          </motion.div>
        )}
      </div>
    </section>
  );
}
