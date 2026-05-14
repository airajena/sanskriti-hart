import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/ui-custom/AnimatedCounter';
import { Sparkles, Heart, Users, ShieldCheck } from 'lucide-react';
import { PatternDivider } from '@/components/ui-custom/PatternDivider';
import headImg from '@/assets/head.jpeg';

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About SanskritiHaat — Rooted in Tradition' },
      { name: 'description', content: 'A digital marketplace bridging India\'s 200+ artisans with conscious consumers worldwide.' },
    ],
  }),
  component: About,
});

const TEAM = [
  { name: 'Shivesh Jena', role: '', fact: 'Bridges crafts with Gen Z', image: headImg },
];

const PILLARS = [
  { icon: Heart, title: 'Bridge the Gap', body: 'Connecting rural artisans to global homes.' },
  { icon: ShieldCheck, title: 'Promote Authenticity', body: '100% genuine, 0% mass produced.' },
  { icon: Users, title: 'Enable Artisans', body: 'Fair pay, training, and digital access.' },
  { icon: Sparkles, title: 'Celebrate Culture', body: 'Each piece honors a living tradition.' },
];

function About() {
  return (
    <>
      <section className="relative bg-[var(--earth)] py-24 text-center text-[var(--cream)]">
        <div className="absolute inset-0 block-print-bg opacity-10"/>
        <div className="relative mx-auto max-w-3xl px-4">
          <p className="font-accent text-sm text-[var(--turmeric)]">— About us</p>
          <h1 className="font-display text-5xl md:text-6xl mt-2">Rooted in Tradition.<br/>Built for Today.</h1>
          <p className="mt-6 text-[var(--cream)]/80">SanskritiHaat is a digital cultural marketplace digitizing the artisan economy of India — one handcrafted treasure at a time.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="font-accent text-sm text-[var(--turmeric)]">— Our Story</p>
            <h2 className="font-display text-4xl">Born in Mumbai. Rooted in 25 states.</h2>
          </div>
          <div className="space-y-4 text-[var(--earth)]/80">
            <p>It started with a walk through Colaba market in Mumbai, where stalls overflowed with handmade pieces — and where it became painfully clear how far the artisans behind them sit from the people who would love their work.</p>
            <p>SanskritiHaat is our answer: a digital haat (marketplace) that respects craft, pays fairly, and tells the stories that mass commerce erases. Every listing carries the name and region of the maker.</p>
            <p>Today we work with 200+ artisans across textiles, pottery, paintings, metalcraft and natural fibers — and we're just getting started.</p>
          </div>
        </div>
      </section>

      <PatternDivider />

      <section className="bg-[var(--linen)] py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center font-display text-4xl mb-12">Our Mission</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map(({ icon: Icon, title, body }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="rounded-[var(--radius-md)] border border-[var(--sand)]/40 bg-[var(--cream)] p-6 text-center shadow-card">
                <Icon size={28} className="mx-auto text-[var(--turmeric)]"/>
                <h3 className="mt-3 font-display text-xl">{title}</h3>
                <p className="mt-2 text-sm text-[var(--earth)]/70">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center mb-12">
          <p className="font-accent text-sm text-[var(--turmeric)]">— The team</p>
          <h2 className="font-display text-4xl">Crafted by humans</h2>
        </div>
        <div className="flex justify-center gap-6">
          {TEAM.map((m, i) => (
            <motion.div key={m.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="group rounded-[var(--radius-md)] border border-[var(--sand)]/40 bg-[var(--linen)] p-5 text-center shadow-card">
              <div className="mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-[var(--turmeric)] shadow-card">
                <img src={m.image} alt={m.name} className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-4 font-display text-xl">{m.name}</h3>
              {m.role && <p className="font-accent text-xs text-[var(--turmeric)]">{m.role}</p>}
              <p className="mt-2 text-xs text-[var(--earth)]/0 transition-colors group-hover:text-[var(--earth)]/70">{m.fact}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--earth)] py-20 text-[var(--cream)]">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {[
            { n: 24000, prefix: '₹', suffix: ' Cr', label: 'Industry Size' },
            { n: 200, suffix: '+', label: 'Artisans Supported' },
            { n: 25, label: 'Products' },
            { n: 5, label: 'Categories' },
          ].map((s, i) => (
            <div key={i}>
              <p className="font-display text-5xl text-[var(--turmeric)]">
                <AnimatedCounter to={s.n} prefix={s.prefix} suffix={s.suffix}/>
              </p>
              <p className="mt-1 font-accent text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
