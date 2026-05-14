import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Route = createFileRoute('/login')({
  head: () => ({ meta: [{ title: 'Login — SanskritiHaat' }] }),
  component: Auth,
});

function Auth() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  return (
    <div className="grid min-h-[calc(100vh-200px)] md:grid-cols-2">
      <div className="hidden bg-[var(--earth)] md:grid place-items-center text-center text-[var(--cream)] p-12 relative overflow-hidden">
        <div className="absolute inset-0 block-print-bg opacity-10"/>
        <div className="relative">
          <p className="font-accent text-sm text-[var(--turmeric)]">— SanskritiHaat</p>
          <h2 className="font-display text-5xl mt-2 leading-tight">Welcome to the haat,<br/>where every craft<br/><em className="text-[var(--turmeric)]">tells a story.</em></h2>
        </div>
      </div>
      <div className="grid place-items-center p-8">
        <div className="w-full max-w-sm">
          <div className="flex border-b border-[var(--sand)]/40 mb-6">
            {(['login','signup'] as const).map(m => (
              <button key={m} onClick={() => setMode(m)} className={`flex-1 pb-3 font-display text-lg capitalize ${mode === m ? 'text-[var(--turmeric)] border-b-2 border-[var(--turmeric)]' : 'text-[var(--earth)]/60'}`}>
                {m === 'login' ? 'Login' : 'Sign Up'}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.form key={mode} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-3">
              <button type="button" className="w-full rounded-md border border-[var(--sand)] bg-[var(--cream)] py-2.5 text-sm">Continue with Google</button>
              <button type="button" className="w-full rounded-md border border-[var(--sand)] bg-[var(--cream)] py-2.5 text-sm">Continue with Facebook</button>
              <div className="my-2 flex items-center gap-2 text-xs text-[var(--earth)]/40"><div className="flex-1 h-px bg-[var(--sand)]/40"/>OR<div className="flex-1 h-px bg-[var(--sand)]/40"/></div>
              {mode === 'signup' && <input placeholder="Full name" className="w-full rounded-md border border-[var(--sand)] bg-[var(--linen)] px-3 py-2.5 text-sm"/>}
              <input placeholder="Email" type="email" className="w-full rounded-md border border-[var(--sand)] bg-[var(--linen)] px-3 py-2.5 text-sm"/>
              <input placeholder="Password" type="password" className="w-full rounded-md border border-[var(--sand)] bg-[var(--linen)] px-3 py-2.5 text-sm"/>
              <Link to="/account" className="block w-full rounded-md bg-[var(--turmeric)] py-3 text-center text-sm font-medium text-[var(--cream)] hover:bg-[var(--saffron)]">{mode === 'login' ? 'Login' : 'Create account'}</Link>
              <p className="text-center text-xs text-[var(--earth)]/60">Two-step verification keeps your account safe.</p>
            </motion.form>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
