import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WishlistState {
  ids: string[];
  toggle: (id: string) => void;
  has: (id: string) => boolean;
  remove: (id: string) => void;
  clear: () => void;
}

export const useWishlist = create<WishlistState>()(
  persist(
    (set, get) => ({
      ids: [],
      toggle: (id) => set({ ids: get().ids.includes(id) ? get().ids.filter(x => x !== id) : [...get().ids, id] }),
      has: (id) => get().ids.includes(id),
      remove: (id) => set({ ids: get().ids.filter(x => x !== id) }),
      clear: () => set({ ids: [] }),
    }),
    { name: 'sanskriti-wishlist' }
  )
);
