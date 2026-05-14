import { createFileRoute, Link } from '@tanstack/react-router';
import { HeroSection } from '@/components/home/HeroSection';
import { MarqueeTicker } from '@/components/layout/MarqueeTicker';
import { CategoryShowcase } from '@/components/home/CategoryShowcase';
import { StoryBanner } from '@/components/home/StoryBanner';
import { LimitedOffers } from '@/components/home/LimitedOffers';
import { Testimonials } from '@/components/home/Testimonials';
import { ArtisanSpotlight } from '@/components/home/ArtisanSpotlight';
import { Newsletter } from '@/components/home/Newsletter';
import { ProductCard } from '@/components/shop/ProductCard';
import { products } from '@/data/products';
import { PatternDivider } from '@/components/ui-custom/PatternDivider';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'SanskritiHaat — Where Heritage Meets Home' },
      { name: 'description', content: 'Discover handcrafted Indian textiles, pottery, paintings, metalcraft and basketry. 200+ artisans, 25 states, 100% handmade.' },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = products.filter(p => p.isFeatured).slice(0, 8);
  return (
    <>
      <HeroSection />
      <MarqueeTicker />
      <CategoryShowcase />
      <PatternDivider />

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-10 flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="font-accent text-sm text-[var(--turmeric)]">— Top picks</p>
            <h2 className="font-display text-4xl md:text-5xl">Curated by Artisans</h2>
          </div>
          <Link to="/shop" className="text-sm font-medium text-[var(--earth)] underline-offset-4 hover:underline hover:text-[var(--turmeric)]">View all →</Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p, i) => <ProductCard key={p.id} product={p} index={i}/>)}
        </div>
      </section>

      <StoryBanner />
      <LimitedOffers />
      <Testimonials />
      <ArtisanSpotlight />
      <Newsletter />
    </>
  );
}
