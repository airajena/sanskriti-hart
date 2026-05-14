import { Link } from '@tanstack/react-router';
import { Search, Heart, User, ShoppingBag, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/store/cartStore';
import { useWishlist } from '@/store/wishlistStore';
import { products } from '@/data/products';
import logo from '@/assets/logo.jpeg';

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About Us' },
  { to: '/gift-cards', label: 'Gift Cards' },
  { to: '/contact', label: 'Contact' },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [q, setQ] = useState('');
  const cartCount = useCart(s => s.count());
  const openCart = useCart(s => s.open);
  const wishCount = useWishlist(s => s.ids.length);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const results = q ? products.filter(p => p.name.toLowerCase().includes(q.toLowerCase())).slice(0, 6) : [];

  return (
    <>
      <div className="bg-[var(--earth)] text-[var(--cream)] text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <span className="font-accent">Free shipping on orders above ₹2,000 · 100% Authentic Handmade</span>
          <span className="hidden sm:inline">₹ INR</span>
        </div>
      </div>

      <header className={`sticky top-0 z-40 transition-all ${scrolled ? 'bg-[var(--cream)]/85 backdrop-blur-md shadow-card' : 'bg-[var(--cream)]'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="SanskritiHaat Logo" className="h-10 w-10 rounded-full object-cover shadow-sm" />
            <span className="font-display text-2xl font-bold text-[var(--earth)] tracking-tight">SanskritiHaat</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map(n => (
              <Link key={n.to} to={n.to} className="text-sm font-medium text-[var(--earth)] transition-colors hover:text-[var(--turmeric)]"
                activeProps={{ className: 'text-[var(--turmeric)] font-semibold' }}>
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <button onClick={() => setSearchOpen(true)} aria-label="Search" className="grid h-10 w-10 place-items-center rounded-full text-[var(--earth)] transition-colors hover:bg-[var(--linen)]"><Search size={18}/></button>
            <Link to="/account" aria-label="Wishlist" className="relative grid h-10 w-10 place-items-center rounded-full text-[var(--earth)] hover:bg-[var(--linen)]">
              <Heart size={18}/>
              {wishCount > 0 && <span className="absolute -right-0.5 -top-0.5 grid h-4 w-4 place-items-center rounded-full bg-[var(--terracotta)] text-[10px] font-bold text-[var(--cream)]">{wishCount}</span>}
            </Link>
            <Link to="/account" aria-label="Account" className="grid h-10 w-10 place-items-center rounded-full text-[var(--earth)] hover:bg-[var(--linen)]"><User size={18}/></Link>
            <button onClick={openCart} aria-label="Cart" className="relative grid h-10 w-10 place-items-center rounded-full text-[var(--earth)] hover:bg-[var(--linen)]">
              <ShoppingBag size={18}/>
              {cartCount > 0 && <span className="absolute -right-0.5 -top-0.5 grid h-4 w-4 place-items-center rounded-full bg-[var(--turmeric)] text-[10px] font-bold text-[var(--cream)]">{cartCount}</span>}
            </button>
            <button onClick={() => setMenuOpen(true)} aria-label="Menu" className="grid h-10 w-10 place-items-center rounded-full text-[var(--earth)] hover:bg-[var(--linen)] md:hidden"><Menu size={20}/></button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {searchOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[var(--earth)]/70 backdrop-blur-sm" onClick={() => setSearchOpen(false)}>
            <motion.div initial={{ y: -40 }} animate={{ y: 0 }} exit={{ y: -40 }}
              className="bg-[var(--cream)] p-6 sm:p-8" onClick={(e) => e.stopPropagation()}>
              <div className="mx-auto max-w-3xl">
                <div className="flex items-center gap-3 border-b-2 border-[var(--earth)] pb-3">
                  <Search size={22} className="text-[var(--earth)]"/>
                  <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search artisan crafts…"
                    className="flex-1 bg-transparent font-display text-2xl text-[var(--earth)] placeholder:text-[var(--sand)] focus:outline-none"/>
                  <button onClick={() => setSearchOpen(false)}><X size={22}/></button>
                </div>
                {q && (
                  <div className="mt-6 grid gap-2">
                    {results.length === 0 && <p className="text-[var(--earth)]/60">No products found</p>}
                    {results.map(r => (
                      <Link key={r.id} to="/product/$id" params={{ id: r.id }} onClick={() => setSearchOpen(false)}
                        className="flex items-center gap-4 rounded-md p-2 hover:bg-[var(--linen)]">
                        <img src={r.image} alt={r.name} className="h-14 w-14 rounded object-cover"/>
                        <div>
                          <div className="font-display text-lg">{r.name}</div>
                          <div className="text-xs text-[var(--earth)]/60">{r.region}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
                {!q && (
                  <div className="mt-6">
                    <p className="font-accent text-xs text-[var(--sand)] mb-3">Popular searches</p>
                    <div className="flex flex-wrap gap-2">
                      {['Banarasi Saree','Madhubani','Dokra','Diyas','Pattachitra'].map(s => (
                        <button key={s} onClick={() => setQ(s)} className="rounded-full border border-[var(--sand)] bg-[var(--linen)] px-3 py-1 text-sm hover:bg-[var(--turmeric)] hover:text-[var(--cream)]">{s}</button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 22 }}
            className="fixed inset-0 z-50 bg-[var(--cream)] p-6 md:hidden">
            <div className="flex justify-end"><button onClick={() => setMenuOpen(false)}><X size={24}/></button></div>
            <nav className="mt-8 flex flex-col gap-4">
              {NAV.map(n => (
                <Link key={n.to} to={n.to} onClick={() => setMenuOpen(false)} className="font-display text-3xl text-[var(--earth)]">
                  {n.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
