import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, MessageCircle, Check } from 'lucide-react';

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: 'Contact — SanskritiHaat' },
      { name: 'description', content: 'Reach out about orders, products, partnerships, or anything else.' },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center">
        <p className="font-accent text-sm text-[var(--turmeric)]">— Say hello</p>
        <h1 className="font-display text-5xl">Get in Touch</h1>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="space-y-4 rounded-[var(--radius-lg)] bg-[var(--linen)] p-8">
          <input required placeholder="Your Name" className="w-full rounded-md border border-[var(--sand)] bg-[var(--cream)] px-4 py-3 text-sm"/>
          <input required type="email" placeholder="Email" className="w-full rounded-md border border-[var(--sand)] bg-[var(--cream)] px-4 py-3 text-sm"/>
          <select required className="w-full rounded-md border border-[var(--sand)] bg-[var(--cream)] px-4 py-3 text-sm">
            <option value="">Subject</option>
            <option>Order Inquiry</option>
            <option>Product Question</option>
            <option>Artisan Partnership</option>
            <option>General</option>
          </select>
          <textarea required rows={5} placeholder="Your message…" className="w-full rounded-md border border-[var(--sand)] bg-[var(--cream)] px-4 py-3 text-sm"/>
          {sent ? (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center justify-center gap-2 rounded-md bg-[var(--forest)] py-3 text-[var(--cream)]">
              <Check size={18}/> Message sent! We'll be in touch.
            </motion.div>
          ) : (
            <button className="w-full rounded-md bg-[var(--turmeric)] py-3 text-sm font-medium text-[var(--cream)] hover:bg-[var(--saffron)]">Send Message</button>
          )}
        </form>

        <div className="space-y-6">
          <div className="rounded-[var(--radius-lg)] border border-[var(--sand)]/40 bg-[var(--cream)] p-6">
            <h3 className="font-display text-2xl mb-4">Reach us directly</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3"><Mail size={18} className="text-[var(--turmeric)] mt-0.5"/> jenashivesh1805@gmail.com</li>
              <li className="flex items-start gap-3"><Phone size={18} className="text-[var(--turmeric)] mt-0.5"/> +91 9437497108</li>
              <li className="flex items-start gap-3"><MapPin size={18} className="text-[var(--turmeric)] mt-0.5"/> NMIMS University, V.L. Pherozeshah Mehta Rd, Vile Parle West, Mumbai 400056</li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a href="#" className="grid h-10 w-10 place-items-center rounded-full bg-[var(--linen)] hover:bg-[var(--turmeric)] hover:text-[var(--cream)]"><Instagram size={18}/></a>
              <a href="https://wa.me/919437497108" className="grid h-10 w-10 place-items-center rounded-full bg-[var(--linen)] hover:bg-[var(--turmeric)] hover:text-[var(--cream)]"><MessageCircle size={18}/></a>
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--sand)]/40 bg-[var(--linen)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120697.51139403816!2d72.7753696!3d18.9631744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce042617f04b%3A0x6960d70659610f44!2sSouth%20Mumbai%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715682345678!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="South Mumbai Map"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
