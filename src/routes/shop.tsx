import { createFileRoute } from '@tanstack/react-router';
import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductCard } from '@/components/shop/ProductCard';
import { products } from '@/data/products';
import { CATEGORY_LABEL } from '@/types';
import type { Category, Product } from '@/types';
import { Filter, X } from 'lucide-react';

export const Route = createFileRoute('/shop')({
  head: () => ({
    meta: [
      { title: 'Shop All Crafts — SanskritiHaat' },
      { name: 'description', content: 'Browse 25+ authentic handmade Indian crafts across 5 categories. Filter by region, material, and price.' },
    ],
  }),
  component: Shop,
});

const REGIONS = Array.from(new Set(products.map(p => p.region.split(',')[1]?.trim() || p.region.split(',')[0].trim())));
const MATERIALS = Array.from(new Set(products.map(p => p.material)));

function Shop() {
  const [cats, setCats] = useState<Category[]>([]);
  const [regions, setRegions] = useState<string[]>([]);
  const [materials, setMaterials] = useState<string[]>([]);
  const [priceMax, setPriceMax] = useState(15000);
  const [sort, setSort] = useState('recommended');
  const [mobileOpen, setMobileOpen] = useState(false);

  const filtered = useMemo(() => {
    let arr: Product[] = products.filter(p => {
      if (cats.length && !cats.includes(p.category)) return false;
      if (regions.length && !regions.some(r => p.region.includes(r))) return false;
      if (materials.length && !materials.includes(p.material)) return false;
      if (p.price > priceMax) return false;
      return true;
    });
    switch (sort) {
      case 'price-asc': arr = [...arr].sort((a,b) => a.price - b.price); break;
      case 'price-desc': arr = [...arr].sort((a,b) => b.price - a.price); break;
      case 'name-asc': arr = [...arr].sort((a,b) => a.name.localeCompare(b.name)); break;
      case 'rating': arr = [...arr].sort((a,b) => b.rating - a.rating); break;
    }
    return arr;
  }, [cats, regions, materials, priceMax, sort]);

  const toggle = <T,>(arr: T[], v: T, setter: (a: T[]) => void) => setter(arr.includes(v) ? arr.filter(x => x !== v) : [...arr, v]);
  const clearAll = () => { setCats([]); setRegions([]); setMaterials([]); setPriceMax(15000); };
  const activeFilters = cats.length + regions.length + materials.length + (priceMax < 15000 ? 1 : 0);

  const Sidebar = () => (
    <aside className="space-y-7">
      <div>
        <h3 className="font-display text-lg mb-3">Category</h3>
        {(Object.keys(CATEGORY_LABEL) as Category[]).map(c => (
          <label key={c} className="flex cursor-pointer items-center gap-2 py-1 text-sm">
            <input type="checkbox" checked={cats.includes(c)} onChange={() => toggle(cats, c, setCats)} className="accent-[var(--turmeric)]"/>
            {CATEGORY_LABEL[c]}
          </label>
        ))}
      </div>
      <div>
        <h3 className="font-display text-lg mb-3">Price (max)</h3>
        <input type="range" min={300} max={15000} step={100} value={priceMax} onChange={(e) => setPriceMax(+e.target.value)} className="w-full accent-[var(--turmeric)]"/>
        <div className="flex justify-between text-xs"><span>₹300</span><span className="font-semibold">₹{priceMax.toLocaleString('en-IN')}</span></div>
      </div>
      <div>
        <h3 className="font-display text-lg mb-3">Craft Region</h3>
        <div className="space-y-1 max-h-40 overflow-y-auto pr-2">
          {REGIONS.map(r => (
            <label key={r} className="flex cursor-pointer items-center gap-2 py-1 text-sm">
              <input type="checkbox" checked={regions.includes(r)} onChange={() => toggle(regions, r, setRegions)} className="accent-[var(--turmeric)]"/>
              {r}
            </label>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-display text-lg mb-3">Material</h3>
        {MATERIALS.map(m => (
          <label key={m} className="flex cursor-pointer items-center gap-2 py-1 text-sm">
            <input type="checkbox" checked={materials.includes(m)} onChange={() => toggle(materials, m, setMaterials)} className="accent-[var(--turmeric)]"/>
            {m}
          </label>
        ))}
      </div>
      <button onClick={clearAll} className="text-sm font-medium text-[var(--turmeric)] hover:underline">Clear all filters</button>
    </aside>
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-8">
        <p className="font-accent text-sm text-[var(--turmeric)]">— Browse</p>
        <h1 className="font-display text-4xl md:text-5xl">All Handcrafted Treasures</h1>
        <p className="mt-2 text-sm text-[var(--earth)]/60">{filtered.length} of {products.length} pieces</p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
        <div className="hidden lg:block sticky top-28 self-start">
          <Sidebar />
        </div>

        <div>
          <div className="mb-6 flex items-center justify-between gap-3">
            <button onClick={() => setMobileOpen(true)} className="flex items-center gap-2 rounded-md border border-[var(--sand)] px-3 py-2 text-sm lg:hidden">
              <Filter size={16}/> Filters {activeFilters > 0 && <span className="grid h-5 w-5 place-items-center rounded-full bg-[var(--turmeric)] text-[10px] text-[var(--cream)]">{activeFilters}</span>}
            </button>
            <select value={sort} onChange={(e) => setSort(e.target.value)}
              className="ml-auto rounded-md border border-[var(--sand)] bg-[var(--cream)] px-3 py-2 text-sm">
              <option value="recommended">Recommended</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name A–Z</option>
              <option value="rating">Best Rated</option>
            </select>
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={`${cats.join()}-${regions.join()}-${materials.join()}-${priceMax}-${sort}`}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i}/>)}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="grid place-items-center py-20 text-center">
              <p className="font-display text-2xl">No pieces match your filters</p>
              <button onClick={clearAll} className="mt-4 rounded-md bg-[var(--turmeric)] px-5 py-2 text-sm text-[var(--cream)]">Clear filters</button>
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[var(--earth)]/60 lg:hidden" onClick={() => setMobileOpen(false)}>
            <motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
              className="h-full w-[85%] max-w-sm overflow-y-auto bg-[var(--cream)] p-6" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-2xl">Filters</h2>
                <button onClick={() => setMobileOpen(false)}><X/></button>
              </div>
              <Sidebar />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
