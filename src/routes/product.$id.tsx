import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Minus, Plus, ShieldCheck, Truck, RotateCcw, Sparkles, ChevronDown } from 'lucide-react';
import { getProduct, getRelated } from '@/data/products';
import { CATEGORY_LABEL, type Product } from '@/types';
import { formatINR } from '@/lib/format';
import { StarRating } from '@/components/ui-custom/StarRating';
import { ProductCard } from '@/components/shop/ProductCard';
import { useCart } from '@/store/cartStore';
import { useWishlist } from '@/store/wishlistStore';
import { toast } from 'sonner';

export const Route = createFileRoute('/product/$id')({
  loader: ({ params }) => {
    const p = getProduct(params.id);
    if (!p) throw notFound();
    return { product: p };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.name} — SanskritiHaat` },
      { name: 'description', content: loaderData?.product.description },
    ],
  }),
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData() as { product: Product };
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [openSection, setOpenSection] = useState<string | null>('desc');
  const add = useCart(s => s.add);
  const has = useWishlist(s => s.has(product.id));
  const toggleWish = useWishlist(s => s.toggle);
  const related = getRelated(product, 4);

  const images = [product.image, product.image, product.image, product.image];
  const lowStock = product.stockCount < 5;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <nav className="mb-6 text-xs text-[var(--earth)]/60">
        <Link to="/" className="hover:text-[var(--turmeric)]">Home</Link> ·{' '}
        <Link to="/shop" className="hover:text-[var(--turmeric)]">{CATEGORY_LABEL[product.category]}</Link> · <span className="text-[var(--earth)]">{product.name}</span>
      </nav>

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <div className="aspect-[3/4] overflow-hidden rounded-[var(--radius-lg)] bg-[var(--linen)]/50">
            <AnimatePresence mode="wait">
              <motion.img key={activeImg} src={images[activeImg]} alt={product.name}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                className="h-full w-full object-contain p-4"/>
            </AnimatePresence>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {images.map((src, i) => (
              <button key={i} onClick={() => setActiveImg(i)}
                className={`aspect-square overflow-hidden rounded-md border-2 ${i === activeImg ? 'border-[var(--turmeric)]' : 'border-transparent'}`}>
                <img src={src} alt="" className="h-full w-full object-contain p-1"/>
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="font-accent text-xs uppercase tracking-wider text-[var(--forest)]">{CATEGORY_LABEL[product.category]}</span>
          <h1 className="mt-1 font-display text-4xl md:text-5xl text-[var(--earth)]">{product.name}</h1>
          <div className="mt-3 flex items-center gap-3">
            <StarRating value={product.rating} size={16}/>
            <span className="text-sm text-[var(--earth)]/70">{product.reviewCount} reviews</span>
          </div>

          <div className="mt-5 flex items-baseline gap-3">
            <span className="font-display text-4xl font-bold text-[var(--turmeric)]">{formatINR(product.price)}</span>
            {product.originalPrice && <span className="text-lg text-[var(--earth)]/50 line-through">{formatINR(product.originalPrice)}</span>}
          </div>

          <div className="mt-6 rounded-[var(--radius-md)] border border-[var(--sand)]/50 bg-[var(--linen)] p-5">
            <p className="font-accent text-xs text-[var(--turmeric)]">— Artisan Story</p>
            <div className="mt-2 flex items-start gap-4">
              <div className="h-14 w-14 shrink-0 rounded-full border-2 border-[var(--turmeric)] bg-[var(--cream)] grid place-items-center font-display text-xl text-[var(--earth)]">
                {product.artisan.name.charAt(0)}
              </div>
              <div>
                <p className="font-display text-lg text-[var(--earth)]">{product.artisan.name}</p>
                <p className="text-xs text-[var(--earth)]/60">{product.artisan.region}</p>
                <p className="mt-2 text-sm text-[var(--earth)]/80">{product.artisan.story}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center rounded-full border border-[var(--sand)]">
              <button onClick={() => setQty(q => Math.max(1, q - 1))} className="grid h-10 w-10 place-items-center"><Minus size={14}/></button>
              <span className="w-8 text-center">{qty}</span>
              <button onClick={() => setQty(q => q + 1)} className="grid h-10 w-10 place-items-center"><Plus size={14}/></button>
            </div>
            {lowStock && <span className="text-sm font-medium text-[var(--terracotta)]">Only {product.stockCount} left!</span>}
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <button onClick={() => { add(product, qty); toast.success('Added to cart'); }}
              className="flex-1 min-w-[200px] rounded-md bg-[var(--turmeric)] px-6 py-4 font-medium text-[var(--cream)] hover:bg-[var(--saffron)] shadow-card">
              Add to Cart
            </button>
            <button onClick={() => { toggleWish(product.id); toast.success(has ? 'Removed from wishlist' : 'Added to wishlist'); }}
              className={`grid h-14 w-14 place-items-center rounded-md border-2 ${has ? 'border-[var(--terracotta)] text-[var(--terracotta)]' : 'border-[var(--earth)] text-[var(--earth)]'}`}>
              <Heart size={20} className={has ? 'fill-[var(--terracotta)]' : ''}/>
            </button>
          </div>
          <a href="https://razorpay.me/@aravindhanb" target="_blank" rel="noreferrer"
            className="mt-3 block rounded-md border-2 border-[var(--earth)] px-6 py-3.5 text-center font-medium text-[var(--earth)] hover:bg-[var(--earth)] hover:text-[var(--cream)]">Buy Now via Razorpay →</a>

          <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-[var(--earth)]/70 sm:grid-cols-4">
            <div className="flex items-center gap-2"><ShieldCheck size={16} className="text-[var(--forest)]"/> Secure Payment</div>
            <div className="flex items-center gap-2"><Truck size={16} className="text-[var(--forest)]"/> Free over ₹2k</div>
            <div className="flex items-center gap-2"><RotateCcw size={16} className="text-[var(--forest)]"/> Easy Returns</div>
            <div className="flex items-center gap-2"><Sparkles size={16} className="text-[var(--forest)]"/> Handmade</div>
          </div>

          <div className="mt-8 divide-y divide-[var(--sand)]/40 border-y border-[var(--sand)]/40">
            {[
              { id: 'desc', title: 'Product Description', body: product.description },
              { id: 'dim', title: 'Dimensions & Materials', body: `Material: ${product.material} · Region: ${product.region} · SKU: ${product.sku}` },
              { id: 'ship', title: 'Shipping Info', body: 'Standard shipping ₹59 (2–4 days). Free above ₹2,000. International: ₹999 (10–12 days).' },
              { id: 'ret', title: 'Return Policy', body: '7-day returns on unused items. Custom or hand-painted pieces are non-returnable.' },
            ].map(s => (
              <button key={s.id} className="w-full" onClick={() => setOpenSection(o => o === s.id ? null : s.id)}>
                <div className="flex items-center justify-between py-4 text-left">
                  <span className="font-display text-lg">{s.title}</span>
                  <ChevronDown size={18} className={`transition-transform ${openSection === s.id ? 'rotate-180' : ''}`}/>
                </div>
                <AnimatePresence>
                  {openSection === s.id && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden text-left">
                      <p className="pb-4 text-sm text-[var(--earth)]/75">{s.body}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="mb-8 font-display text-3xl">You May Also Like</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((p, i) => <ProductCard key={p.id} product={p} index={i}/>)}
        </div>
      </section>
    </div>
  );
}
