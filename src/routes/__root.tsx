import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { Chatbot } from "@/components/layout/Chatbot";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-[var(--earth)]">404</h1>
        <p className="mt-2 text-sm text-[var(--earth)]/60">This corner of the haat doesn't exist.</p>
        <Link to="/" className="mt-6 inline-block rounded-md bg-[var(--turmeric)] px-5 py-2.5 text-sm text-[var(--cream)]">Back home</Link>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SanskritiHaat — Handcrafted Indian Treasures" },
      { name: "description", content: "Discover authentic handmade textiles, pottery, paintings, metalcraft and basketry from 200+ Indian artisans." },
      { property: "og:title", content: "SanskritiHaat — Handcrafted Indian Treasures" },
      { property: "og:description", content: "Discover authentic handmade textiles, pottery, paintings, metalcraft and basketry from 200+ Indian artisans." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "SanskritiHaat — Handcrafted Indian Treasures" },
      { name: "twitter:description", content: "Discover authentic handmade textiles, pottery, paintings, metalcraft and basketry from 200+ Indian artisans." },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});


function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-[var(--cream)]">
        <Header />
        <main className="flex-1"><Outlet /></main>
        <Footer />
        <CartDrawer />
        <Chatbot />
        <Toaster position="bottom-center" toastOptions={{ style: { background: 'var(--forest)', color: 'var(--cream)', border: 'none' } }} />
      </div>
    </QueryClientProvider>
  );
}
