import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@tanstack/react-router';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/store/cartStore';
import { formatINR } from '@/lib/format';
import { useState } from 'react';
import { toast } from 'sonner';

export function CartDrawer() {
  const { isOpen, close, items, setQty, remove, subtotal, shipping, total, applyPromo, promo } = useCart();
  const [code, setCode] = useState('');

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-[var(--earth)]/60" onClick={close}>
          <motion.aside
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 28, stiffness: 240 }}
            onClick={(e) => e.stopPropagation()}
            className="ml-auto flex h-full w-full max-w-md flex-col bg-[var(--cream)]"
          >
            <div className="flex items-center justify-between border-b border-[var(--sand)]/40 px-6 py-4">
              <h3 className="font-display text-2xl">Your Cart ({items.length})</h3>
              <button onClick={close}><X size={20}/></button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 && (
                <div className="grid h-full place-items-center text-center">
                  <div>
                    <p className="font-display text-xl">Your cart is empty</p>
                    <p className="mt-2 text-sm text-[var(--earth)]/60">Discover handmade treasures</p>
                    <Link to="/shop" onClick={close} className="mt-4 inline-block rounded-md bg-[var(--turmeric)] px-5 py-2 text-sm text-[var(--cream)]">Shop now</Link>
                  </div>
                </div>
              )}

              {items.map(item => (
                <div key={item.product.id} className="flex gap-3 border-b border-[var(--sand)]/30 py-4">
                  <img src={item.product.image} alt={item.product.name} className="h-20 w-20 rounded-md object-cover"/>
                  <div className="flex-1">
                    <p className="font-display text-base leading-tight">{item.product.name}</p>
                    <p className="text-xs text-[var(--earth)]/60">{item.product.region}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-1 rounded-full border border-[var(--sand)]/60">
                        <button onClick={() => setQty(item.product.id, item.qty - 1)} className="grid h-7 w-7 place-items-center"><Minus size={12}/></button>
                        <span className="w-6 text-center text-sm">{item.qty}</span>
                        <button onClick={() => setQty(item.product.id, item.qty + 1)} className="grid h-7 w-7 place-items-center"><Plus size={12}/></button>
                      </div>
                      <span className="font-display text-base text-[var(--turmeric)]">{formatINR(item.product.price * item.qty)}</span>
                    </div>
                  </div>
                  <button onClick={() => remove(item.product.id)} className="text-[var(--earth)]/40 hover:text-[var(--terracotta)]"><Trash2 size={16}/></button>
                </div>
              ))}
            </div>

            {items.length > 0 && (
              <div className="border-t border-[var(--sand)]/40 bg-[var(--linen)] px-6 py-5">
                <div className="flex gap-2 mb-4">
                  <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Promo code" className="flex-1 rounded-md border border-[var(--sand)]/50 bg-[var(--cream)] px-3 py-2 text-sm"/>
                  <button onClick={() => { applyPromo(code) ? toast.success('Promo applied! 10% off') : toast.error('Invalid code'); }}
                    className="rounded-md bg-[var(--earth)] px-3 py-2 text-sm text-[var(--cream)]">Apply</button>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between"><span>Subtotal</span><span>{formatINR(subtotal())}</span></div>
                  <div className="flex justify-between"><span>Shipping</span><span>{shipping() === 0 ? 'Free' : formatINR(shipping())}</span></div>
                  {promo && <div className="flex justify-between text-[var(--forest)]"><span>Promo (10%)</span><span>−{formatINR(Math.round(subtotal()*0.1))}</span></div>}
                  <div className="flex justify-between border-t border-[var(--sand)]/40 pt-2 font-display text-lg"><span>Total</span><span className="text-[var(--turmeric)]">{formatINR(total())}</span></div>
                </div>
                <Link to="/checkout" onClick={close} className="mt-4 block rounded-md bg-[var(--turmeric)] py-3 text-center text-sm font-medium text-[var(--cream)] hover:bg-[var(--saffron)]">Checkout →</Link>
                <button onClick={close} className="mt-2 block w-full text-center text-xs text-[var(--earth)]/60 hover:text-[var(--earth)]">Continue shopping</button>
              </div>
            )}
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
