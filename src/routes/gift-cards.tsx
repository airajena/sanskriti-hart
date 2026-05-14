import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const Route = createFileRoute('/gift-cards')({
  head: () => ({
    meta: [
      { title: 'Gift Cards — SanskritiHaat' },
      { name: 'description', content: 'Give the gift of culture with a SanskritiHaat eGift card.' },
    ],
  }),
  component: Gift,
});

const AMOUNTS = [500, 1000, 2000, 3500, 5000];

function Gift() {
  const [amount, setAmount] = useState(1000);
  const [forSelf, setForSelf] = useState(false);
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center mb-12">
        <p className="font-accent text-sm text-[var(--turmeric)]">— eGift Card</p>
        <h1 className="font-display text-5xl">Give the Gift of Culture</h1>
        <p className="mt-3 text-[var(--earth)]/70">A timeless gift — they choose the artisan piece they love.</p>
      </div>

      <div className="grid gap-12 md:grid-cols-2 items-start">
        <div onClick={() => setFlipped(f => !f)} className="cursor-pointer perspective-1000">
          <motion.div animate={{ rotateY: flipped ? 180 : 0 }} transition={{ duration: 0.6 }}
            style={{ transformStyle: 'preserve-3d' }}
            className="relative aspect-[1.6/1] rounded-[var(--radius-lg)] shadow-lifted">
            <div className="absolute inset-0 rounded-[var(--radius-lg)] bg-gradient-to-br from-[var(--turmeric)] to-[var(--terracotta)] p-8 text-[var(--cream)]" style={{ backfaceVisibility: 'hidden' }}>
              <p className="font-accent text-sm">SanskritiHaat</p>
              <p className="font-display text-3xl mt-1">eGift Card</p>
              <p className="absolute bottom-8 right-8 font-display text-5xl">₹{amount.toLocaleString('en-IN')}</p>
              <div className="absolute bottom-8 left-8 block-print-bg h-8 w-24 opacity-30"/>
            </div>
            <div className="absolute inset-0 rounded-[var(--radius-lg)] bg-[var(--earth)] p-8 text-[var(--cream)]" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
              <p className="font-accent text-sm text-[var(--turmeric)]">Code:</p>
              <p className="font-mono text-2xl mt-2">SH-XXXX-XXXX</p>
              <p className="absolute bottom-8 left-8 right-8 text-xs opacity-70">Redeem at sanskritihaat.com · Valid for 12 months · No expiry on stored balance</p>
            </div>
          </motion.div>
          <p className="mt-3 text-center text-xs text-[var(--earth)]/50">click card to flip</p>
        </div>

        <form className="space-y-5 rounded-[var(--radius-lg)] bg-[var(--linen)] p-8">
          <div>
            <p className="font-display text-lg mb-3">Choose amount</p>
            <div className="flex flex-wrap gap-2">
              {AMOUNTS.map(a => (
                <button key={a} type="button" onClick={() => setAmount(a)}
                  className={`rounded-full border px-4 py-2 text-sm ${amount === a ? 'border-[var(--turmeric)] bg-[var(--turmeric)] text-[var(--cream)]' : 'border-[var(--sand)] bg-[var(--cream)]'}`}>
                  ₹{a.toLocaleString('en-IN')}
                </button>
              ))}
            </div>
            <input type="number" value={amount} onChange={(e) => setAmount(+e.target.value)} className="mt-3 w-full rounded-md border border-[var(--sand)] bg-[var(--cream)] px-3 py-2 text-sm"/>
          </div>

          <div className="flex gap-2">
            <button type="button" onClick={() => setForSelf(false)} className={`flex-1 rounded-md py-2 text-sm ${!forSelf ? 'bg-[var(--earth)] text-[var(--cream)]' : 'bg-[var(--cream)] border border-[var(--sand)]'}`}>For someone else</button>
            <button type="button" onClick={() => setForSelf(true)} className={`flex-1 rounded-md py-2 text-sm ${forSelf ? 'bg-[var(--earth)] text-[var(--cream)]' : 'bg-[var(--cream)] border border-[var(--sand)]'}`}>For myself</button>
          </div>

          {!forSelf && (
            <>
              <input placeholder="Recipient name" className="w-full rounded-md border border-[var(--sand)] bg-[var(--cream)] px-3 py-2 text-sm"/>
              <input type="email" placeholder="Recipient email" className="w-full rounded-md border border-[var(--sand)] bg-[var(--cream)] px-3 py-2 text-sm"/>
              <textarea rows={3} placeholder="Personal message…" className="w-full rounded-md border border-[var(--sand)] bg-[var(--cream)] px-3 py-2 text-sm"/>
            </>
          )}

          <button type="button" className="w-full rounded-md bg-[var(--turmeric)] py-3 font-medium text-[var(--cream)] hover:bg-[var(--saffron)]">Purchase Gift Card →</button>
        </form>
      </div>
    </div>
  );
}
