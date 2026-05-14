import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product } from '@/types';

interface CartItem { product: Product; qty: number; }

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  promo: string | null;
  open: () => void;
  close: () => void;
  add: (p: Product, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  applyPromo: (code: string) => boolean;
  subtotal: () => number;
  shipping: () => number;
  total: () => number;
  count: () => number;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      promo: null,
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      add: (p, qty = 1) => {
        const items = [...get().items];
        const i = items.findIndex(x => x.product.id === p.id);
        if (i >= 0) items[i] = { ...items[i], qty: items[i].qty + qty };
        else items.push({ product: p, qty });
        set({ items, isOpen: true });
      },
      remove: (id) => set({ items: get().items.filter(i => i.product.id !== id) }),
      setQty: (id, qty) => set({
        items: get().items.map(i => i.product.id === id ? { ...i, qty: Math.max(1, qty) } : i),
      }),
      clear: () => set({ items: [], promo: null }),
      applyPromo: (code) => {
        const valid = ['SANSKRITIH-466845558', 'WELCOME10', 'HAAT15'];
        if (valid.includes(code.toUpperCase()) || valid.includes(code)) {
          set({ promo: code });
          return true;
        }
        return false;
      },
      subtotal: () => get().items.reduce((s, i) => s + i.product.price * i.qty, 0),
      shipping: () => (get().subtotal() >= 2000 || get().items.length === 0 ? 0 : 59),
      total: () => {
        const sub = get().subtotal();
        const ship = get().shipping();
        const promo = get().promo;
        const discount = promo ? Math.round(sub * 0.1) : 0;
        return sub + ship - discount;
      },
      count: () => get().items.reduce((s, i) => s + i.qty, 0),
    }),
    { name: 'sanskriti-cart' }
  )
);
