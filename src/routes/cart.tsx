import { createFileRoute, Link } from '@tanstack/react-router';
import { Trash2, Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/store/cartStore';
import { formatINR } from '@/lib/format';
import { toast } from 'sonner';

export const Route = createFileRoute('/cart')({
  head: () => ({ meta: [{ title: 'Cart — SanskritiHaat' }, { name: 'description', content: 'Review your handpicked treasures.' }] }),
  component: CartPage,
});

function CartPage() {
  const { items, setQty, remove, subtotal, shipping, total, applyPromo, promo } = useCart();
  const [code, setCode] = useState('');

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-display text-5xl">Your cart is empty</h1>
        <p className="mt-3 text-[var(--earth)]/60">Begin your journey through India's craft heritage.</p>
        <Link to="/shop" className="mt-8 inline-block rounded-md bg-[var(--turmeric)] px-6 py-3 text-[var(--cream)]">Shop now</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="font-display text-4xl md:text-5xl mb-8">Your Cart</h1>
      <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
        <div className="space-y-4">
          {items.map(it => (
            <div key={it.product.id} className="flex gap-4 rounded-[var(--radius-md)] border border-[var(--sand)]/40 bg-[var(--linen)] p-4">
              <img src={it.product.image} alt={it.product.name} className="h-28 w-28 rounded-md object-cover"/>
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <Link to="/product/$id" params={{ id: it.product.id }} className="font-display text-xl hover:text-[var(--turmeric)]">{it.product.name}</Link>
                  <p className="text-xs text-[var(--earth)]/60">{it.product.region}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center rounded-full border border-[var(--sand)]/60">
                    <button onClick={() => setQty(it.product.id, it.qty - 1)} className="grid h-8 w-8 place-items-center"><Minus size={12}/></button>
                    <span className="w-8 text-center text-sm">{it.qty}</span>
                    <button onClick={() => setQty(it.product.id, it.qty + 1)} className="grid h-8 w-8 place-items-center"><Plus size={12}/></button>
                  </div>
                  <span className="font-display text-lg text-[var(--turmeric)]">{formatINR(it.product.price * it.qty)}</span>
                  <button onClick={() => remove(it.product.id)} className="text-[var(--earth)]/40 hover:text-[var(--terracotta)]"><Trash2 size={16}/></button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="sticky top-28 self-start rounded-[var(--radius-lg)] border border-[var(--sand)]/40 bg-[var(--linen)] p-6 shadow-card">
          <h3 className="font-display text-2xl mb-4">Order Summary</h3>
          <div className="flex gap-2 mb-4">
            <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Promo code" className="flex-1 rounded-md border border-[var(--sand)] bg-[var(--cream)] px-3 py-2 text-sm"/>
            <button onClick={() => { applyPromo(code) ? toast.success('10% off applied') : toast.error('Invalid code'); }}
              className="rounded-md bg-[var(--earth)] px-3 py-2 text-sm text-[var(--cream)]">Apply</button>
          </div>
          <div className="space-y-2 text-sm border-t border-[var(--sand)]/40 pt-4">
            <div className="flex justify-between"><span>Subtotal</span><span>{formatINR(subtotal())}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>{shipping() === 0 ? 'Free' : formatINR(shipping())}</span></div>
            {promo && <div className="flex justify-between text-[var(--forest)]"><span>Promo (10%)</span><span>−{formatINR(Math.round(subtotal()*0.1))}</span></div>}
            <div className="flex justify-between border-t border-[var(--sand)]/40 pt-2 font-display text-xl"><span>Total</span><span className="text-[var(--turmeric)]">{formatINR(total())}</span></div>
          </div>
          <Link to="/checkout" className="mt-5 block rounded-md bg-[var(--turmeric)] py-3 text-center font-medium text-[var(--cream)] hover:bg-[var(--saffron)]">Proceed to Checkout →</Link>
          <p className="mt-3 text-xs text-center text-[var(--earth)]/60">Free shipping above ₹2,000</p>
        </aside>
      </div>
    </div>
  );
}
