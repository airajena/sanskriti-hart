import { useEffect, useState } from 'react';
import { products } from '@/data/products';
import { ProductCard } from '@/components/shop/ProductCard';

function useCountdown(target: Date) {
  const [d, setD] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, target.getTime() - Date.now());
      setD({
        days: Math.floor(diff / 86400000),
        hours: Math.floor(diff / 3600000) % 24,
        mins: Math.floor(diff / 60000) % 60,
        secs: Math.floor(diff / 1000) % 60,
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  return d;
}

export function LimitedOffers() {
  const sale = products.filter(p => p.isSale).slice(0, 3);
  const target = new Date(Date.now() + 3 * 86400000 + 5 * 3600000);
  const { days, hours, mins, secs } = useCountdown(target);

  return (
    <section className="bg-[var(--forest)] py-20 text-[var(--cream)]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-accent text-sm text-[var(--turmeric)]">— Limited Time</p>
            <h2 className="font-display text-4xl md:text-5xl">Festive Offers</h2>
          </div>
          <div className="flex gap-3">
            {[{l:'Days',v:days},{l:'Hrs',v:hours},{l:'Min',v:mins},{l:'Sec',v:secs}].map(b => (
              <div key={b.l} className="grid w-16 place-items-center rounded-md border border-[var(--cream)]/20 bg-[var(--cream)]/5 py-2">
                <span className="font-display text-2xl text-[var(--turmeric)]">{String(b.v).padStart(2,'0')}</span>
                <span className="text-[10px] uppercase tracking-wider opacity-70">{b.l}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {sale.map((p, i) => <ProductCard key={p.id} product={p} index={i}/>)}
        </div>
      </div>
    </section>
  );
}
