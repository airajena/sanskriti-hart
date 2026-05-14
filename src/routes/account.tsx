import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Route = createFileRoute('/account')({
  head: () => ({ meta: [{ title: 'My Account — SanskritiHaat' }] }),
  component: Account,
});

const TABS = ['Profile', 'Orders', 'Wishlist', 'Addresses', 'Wallet', 'Settings'] as const;

const ORDERS = [
  { id: 'SH445789', date: '2025-05-12', status: 'Shipped', total: 2900, items: 2 },
  { id: 'SH445102', date: '2025-04-28', status: 'Fulfilled', total: 1500, items: 1 },
  { id: 'SH444901', date: '2025-04-14', status: 'Processing', total: 6500, items: 1 },
];

function Account() {
  const [tab, setTab] = useState<(typeof TABS)[number]>('Profile');
  const isLoggedIn = true; // demo
  if (!isLoggedIn) {
    return (
      <div className="mx-auto max-w-md py-24 text-center">
        <h1 className="font-display text-3xl">Sign in to continue</h1>
        <Link to="/login" className="mt-6 inline-block rounded-md bg-[var(--turmeric)] px-6 py-3 text-[var(--cream)]">Login</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl mb-8">My Account</h1>
      <div className="grid gap-8 md:grid-cols-[220px_1fr]">
        <aside className="rounded-[var(--radius-md)] bg-[var(--linen)] p-3">
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`block w-full rounded-md px-3 py-2 text-left text-sm ${tab === t ? 'bg-[var(--turmeric)] text-[var(--cream)]' : 'hover:bg-[var(--cream)]'}`}>
              {t}
            </button>
          ))}
        </aside>

        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="rounded-[var(--radius-md)] border border-[var(--sand)]/40 bg-[var(--cream)] p-6">
            {tab === 'Profile' && (
              <form className="space-y-4 max-w-md">
                <h2 className="font-display text-2xl mb-2">Profile</h2>
                <input defaultValue="Priya Mehta" className="w-full rounded-md border border-[var(--sand)] bg-[var(--linen)] px-3 py-2 text-sm"/>
                <input defaultValue="priya@example.com" className="w-full rounded-md border border-[var(--sand)] bg-[var(--linen)] px-3 py-2 text-sm"/>
                <input defaultValue="+91 99999 99999" className="w-full rounded-md border border-[var(--sand)] bg-[var(--linen)] px-3 py-2 text-sm"/>
                <button className="rounded-md bg-[var(--turmeric)] px-5 py-2 text-sm text-[var(--cream)]">Save changes</button>
              </form>
            )}
            {tab === 'Orders' && (
              <div>
                <h2 className="font-display text-2xl mb-4">My Orders</h2>
                <table className="w-full text-sm">
                  <thead className="text-left text-xs uppercase text-[var(--earth)]/60">
                    <tr><th className="py-2">Order</th><th>Date</th><th>Status</th><th>Total</th></tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--sand)]/30">
                    {ORDERS.map(o => (
                      <tr key={o.id}>
                        <td className="py-3 font-mono">#{o.id}</td>
                        <td>{o.date}</td>
                        <td><span className="rounded-full bg-[var(--linen)] px-2 py-0.5 text-xs">{o.status}</span></td>
                        <td>₹{o.total.toLocaleString('en-IN')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {tab === 'Wishlist' && <p className="text-sm text-[var(--earth)]/60">Your wishlist appears here. Add favorites by tapping the heart on any product.</p>}
            {tab === 'Addresses' && <p className="text-sm text-[var(--earth)]/60">No saved addresses yet. Add one at checkout.</p>}
            {tab === 'Wallet' && (
              <div>
                <p className="font-accent text-sm text-[var(--turmeric)]">Balance</p>
                <p className="font-display text-5xl text-[var(--earth)]">₹0</p>
                <p className="mt-2 text-sm text-[var(--earth)]/60">Redeem a gift card to top up.</p>
              </div>
            )}
            {tab === 'Settings' && <p className="text-sm text-[var(--earth)]/60">Notifications, privacy & language settings.</p>}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
