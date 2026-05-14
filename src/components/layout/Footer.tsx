import { Link } from '@tanstack/react-router';
import { Instagram, MessageCircle, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/logo.jpeg';

export function Footer() {
  return (
    <footer className="mt-24 bg-[var(--earth)] text-[var(--cream)]">
      <div className="block-print-bg opacity-10 h-2"/>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="SanskritiHaat Logo" className="h-10 w-10 rounded-full object-cover shadow-sm border border-[var(--cream)]/20" />
            <span className="font-display text-2xl font-bold">SanskritiHaat</span>
          </div>
          <p className="font-accent text-sm text-[var(--cream)]/70">Bringing India's craft heritage to your doorstep.</p>
          <form className="mt-5 flex gap-2">
            <input placeholder="Your email" className="flex-1 rounded-md border border-[var(--sand)]/40 bg-[var(--cream)]/5 px-3 py-2 text-sm placeholder:text-[var(--cream)]/40 focus:outline-none focus:border-[var(--turmeric)]"/>
            <button className="rounded-md bg-[var(--turmeric)] px-3 py-2 text-sm font-medium text-[var(--earth)] hover:bg-[var(--saffron)]">Join</button>
          </form>
        </div>

        <div>
          <h4 className="font-display text-lg mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-[var(--cream)]/70">
            <li><Link to="/about" className="hover:text-[var(--turmeric)]">About Us</Link></li>
            <li><Link to="/shop" className="hover:text-[var(--turmeric)]">Shop All</Link></li>
            <li><Link to="/gift-cards" className="hover:text-[var(--turmeric)]">Gift Cards</Link></li>
            <li><Link to="/admin" className="hover:text-[var(--turmeric)]">Admin</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-3">Customer Service</h4>
          <ul className="space-y-2 text-sm text-[var(--cream)]/70">
            <li><Link to="/contact" className="hover:text-[var(--turmeric)]">Contact Us</Link></li>
            <li>Shipping Policy</li>
            <li>Returns & Refunds</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-3">Reach Us</h4>
          <ul className="space-y-2 text-sm text-[var(--cream)]/70">
            <li className="flex items-start gap-2"><Mail size={14} className="mt-1"/> sanskritihaat9@gmail.com</li>
            <li className="flex items-start gap-2"><Phone size={14} className="mt-1"/> +91 6382110141</li>
            <li className="flex items-start gap-2"><MapPin size={14} className="mt-1"/> NMIMS University, Vile Parle West, Mumbai 400056</li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-[var(--cream)]/10 hover:bg-[var(--turmeric)] hover:text-[var(--earth)]"><Instagram size={16}/></a>
            <a href="#" aria-label="WhatsApp" className="grid h-9 w-9 place-items-center rounded-full bg-[var(--cream)]/10 hover:bg-[var(--turmeric)] hover:text-[var(--earth)]"><MessageCircle size={16}/></a>
            <a href="#" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full bg-[var(--cream)]/10 hover:bg-[var(--turmeric)] hover:text-[var(--earth)]"><Facebook size={16}/></a>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--cream)]/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-[var(--cream)]/60 md:flex-row">
          <p>© 2025 SanskritiHaat · Privacy · Shipping · Terms · Refunds</p>
          <p className="font-accent">Razorpay · UPI · Visa · Mastercard · Netbanking</p>
        </div>
      </div>
    </footer>
  );
}
