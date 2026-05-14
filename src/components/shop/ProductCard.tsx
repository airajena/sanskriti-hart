import { Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { Heart, Eye, ShoppingBag } from 'lucide-react';
import type { Product } from '@/types';
import { CATEGORY_LABEL } from '@/types';
import { formatINR } from '@/lib/format';
import { StarRating } from '@/components/ui-custom/StarRating';
import { useCart } from '@/store/cartStore';
import { useWishlist } from '@/store/wishlistStore';
import { toast } from 'sonner';

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const add = useCart(s => s.add);
  const wishlistHas = useWishlist(s => s.has(product.id));
  const wishlistToggle = useWishlist(s => s.toggle);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col overflow-hidden rounded-[var(--radius-md)] border border-[var(--sand)]/40 bg-[var(--linen)] shadow-card transition-shadow hover:shadow-lifted"
    >
      <Link to="/product/$id" params={{ id: product.id }} className="relative block aspect-[3/4] overflow-hidden bg-[var(--cream)]/50">
        <img src={product.image} alt={product.name} loading="lazy"
          className="h-full w-full object-contain p-2 transition-transform duration-700 group-hover:scale-105" />
        {product.isSale && (
          <span className="absolute left-3 top-3 rounded-sm bg-[var(--terracotta)] px-2 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--cream)]">Sale</span>
        )}
        {product.isNew && !product.isSale && (
          <span className="absolute left-3 top-3 rounded-sm bg-[var(--forest)] px-2 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--cream)]">New</span>
        )}
        <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button
            aria-label="Add to wishlist"
            onClick={(e) => { e.preventDefault(); wishlistToggle(product.id); toast.success(wishlistHas ? 'Removed from wishlist' : 'Added to wishlist'); }}
            className="grid h-9 w-9 place-items-center rounded-full bg-[var(--cream)]/95 text-[var(--earth)] shadow-card transition-colors hover:bg-[var(--turmeric)] hover:text-[var(--cream)]"
          >
            <Heart size={16} className={wishlistHas ? 'fill-[var(--terracotta)] text-[var(--terracotta)]' : ''} />
          </button>
          <Link
            to="/product/$id" params={{ id: product.id }}
            aria-label="Quick view"
            className="grid h-9 w-9 place-items-center rounded-full bg-[var(--cream)]/95 text-[var(--earth)] shadow-card transition-colors hover:bg-[var(--turmeric)] hover:text-[var(--cream)]"
          >
            <Eye size={16} />
          </Link>
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="font-accent text-xs tracking-wide text-[var(--sand)]">{CATEGORY_LABEL[product.category]}</span>
        <Link to="/product/$id" params={{ id: product.id }} className="font-display text-lg font-semibold leading-snug text-[var(--earth)] hover:text-[var(--turmeric)]">
          {product.name}
        </Link>
        <div className="flex items-center gap-2 text-xs text-[var(--earth)]/70">
          <StarRating value={product.rating} />
          <span>({product.reviewCount})</span>
        </div>
        <div className="mt-auto flex items-baseline gap-2 pt-1">
          <span className="font-display text-xl font-bold text-[var(--turmeric)]">{formatINR(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-[var(--earth)]/50 line-through">{formatINR(product.originalPrice)}</span>
          )}
        </div>
        <button
          onClick={() => { add(product); toast.success(`${product.name} added to cart`); }}
          className="mt-2 flex items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--turmeric)] px-4 py-2.5 text-sm font-medium text-[var(--cream)] transition-all hover:bg-[var(--saffron)] hover:shadow-card"
        >
          <ShoppingBag size={16} /> Add to Cart
        </button>
      </div>
    </motion.div>
  );
}
