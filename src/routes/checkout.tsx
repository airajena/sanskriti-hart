import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ShieldCheck } from 'lucide-react';
import { useCart } from '@/store/cartStore';
import { formatINR } from '@/lib/format';
import { useEffect } from 'react';
import logo from '@/assets/logo.jpeg';

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const Route = createFileRoute('/checkout')({
  head: () => ({ meta: [{ title: 'Checkout — SanskritiHaat' }, { name: 'description', content: 'Secure checkout via Razorpay.' }] }),
  component: Checkout,
});

const STEPS = ['Delivery', 'Review', 'Payment', 'Done'];
const STATES = ['Andhra Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Odisha','Punjab','Rajasthan','Tamil Nadu','Tripura','Uttar Pradesh','West Bengal','Delhi'];

function Checkout() {
  const [step, setStep] = useState(0);
  const { items, subtotal, shipping, total, clear } = useCart();
  const [orderNo] = useState(() => 'SH' + Math.floor(Math.random() * 900000 + 100000));

  const handlePayment = async () => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const options = {
      key: 'rzp_test_SpDpepCahGuJ7b', // Updated with your new Test Key ID
      amount: total() * 100,
      currency: 'INR',
      name: 'Sanskriti Haat Delight',
      description: `Order #${orderNo}`,
      handler: function (response: any) {
        console.log('Payment Successful:', response);
        setStep(3);
        clear();
      },
      prefill: {
        name: 'Test User',
        email: 'test@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#D48B3D',
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  if (items.length === 0 && step < 3) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <h1 className="font-display text-4xl">Nothing to checkout</h1>
        <Link to="/shop" className="mt-6 inline-block rounded-md bg-[var(--turmeric)] px-6 py-3 text-[var(--cream)]">Browse shop</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-6 flex justify-center">
        <Link to="/">
          <img src={logo} alt="SanskritiHaat Logo" className="h-16 w-16 rounded-full object-cover shadow-card" />
        </Link>
      </div>
      <h1 className="font-display text-4xl md:text-5xl mb-8 text-center">Checkout</h1>

      <ol className="mb-10 flex justify-center gap-4">
        {STEPS.map((s, i) => (
          <li key={s} className={`flex items-center gap-2 text-sm ${i <= step ? 'text-[var(--turmeric)]' : 'text-[var(--earth)]/40'}`}>
            <span className={`grid h-7 w-7 place-items-center rounded-full ${i <= step ? 'bg-[var(--turmeric)] text-[var(--cream)]' : 'bg-[var(--linen)]'}`}>
              {i < step ? <Check size={14}/> : i + 1}
            </span>
            <span className="hidden sm:inline">{s}</span>
            {i < STEPS.length - 1 && <span className="hidden sm:inline-block w-8 h-px bg-current opacity-30"/>}
          </li>
        ))}
      </ol>

      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.form key="d" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
            onSubmit={(e) => { e.preventDefault(); setStep(1); }}
            className="space-y-4 rounded-[var(--radius-lg)] bg-[var(--linen)] p-8">
            <h2 className="font-display text-2xl mb-2">Contact & Delivery</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <input required placeholder="Full Name" className="rounded-md border border-[var(--sand)] bg-[var(--cream)] px-4 py-3 text-sm"/>
              <input required type="tel" placeholder="Mobile Number" className="rounded-md border border-[var(--sand)] bg-[var(--cream)] px-4 py-3 text-sm"/>
              <input required type="email" placeholder="Email" className="sm:col-span-2 rounded-md border border-[var(--sand)] bg-[var(--cream)] px-4 py-3 text-sm"/>
              <textarea required placeholder="Complete Address" rows={3} className="sm:col-span-2 rounded-md border border-[var(--sand)] bg-[var(--cream)] px-4 py-3 text-sm"/>
              <input required placeholder="Pincode" className="rounded-md border border-[var(--sand)] bg-[var(--cream)] px-4 py-3 text-sm"/>
              <input required placeholder="City" className="rounded-md border border-[var(--sand)] bg-[var(--cream)] px-4 py-3 text-sm"/>
              <select required className="sm:col-span-2 rounded-md border border-[var(--sand)] bg-[var(--cream)] px-4 py-3 text-sm">
                <option value="">State</option>
                {STATES.map(s => <option key={s}>{s}</option>)}
              </select>
              <textarea placeholder="Delivery note (optional)" rows={2} className="sm:col-span-2 rounded-md border border-[var(--sand)] bg-[var(--cream)] px-4 py-3 text-sm"/>
            </div>
            <button className="w-full rounded-md bg-[var(--turmeric)] py-3 font-medium text-[var(--cream)] hover:bg-[var(--saffron)]">Continue to Review →</button>
          </motion.form>
        )}

        {step === 1 && (
          <motion.div key="r" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
            className="rounded-[var(--radius-lg)] bg-[var(--linen)] p-8">
            <h2 className="font-display text-2xl mb-4">Order Review</h2>
            <div className="divide-y divide-[var(--sand)]/40">
              {items.map(it => (
                <div key={it.product.id} className="flex items-center gap-3 py-3 text-sm">
                  <img src={it.product.image} alt="" className="h-12 w-12 rounded object-cover"/>
                  <span className="flex-1">{it.product.name} × {it.qty}</span>
                  <span>{formatINR(it.product.price * it.qty)}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-1 text-sm">
              <div className="flex justify-between"><span>Subtotal</span><span>{formatINR(subtotal())}</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>{shipping() === 0 ? 'Free' : formatINR(shipping())}</span></div>
              <div className="flex justify-between border-t border-[var(--sand)]/40 pt-2 font-display text-lg"><span>Total</span><span className="text-[var(--turmeric)]">{formatINR(total())}</span></div>
            </div>
            <div className="mt-6 flex gap-3">
              <button onClick={() => setStep(0)} className="flex-1 rounded-md border border-[var(--earth)] py-3 text-sm">← Back</button>
              <button onClick={() => setStep(2)} className="flex-1 rounded-md bg-[var(--turmeric)] py-3 text-sm font-medium text-[var(--cream)]">Continue to Payment →</button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="p" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
            className="rounded-[var(--radius-lg)] bg-[var(--linen)] p-8 text-center">
            <h2 className="font-display text-2xl">Payment</h2>
            <p className="mt-2 text-sm text-[var(--earth)]/70">You will be redirected to Razorpay's secure payment gateway</p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {['UPI','Cards','Netbanking','Wallets'].map(p => (
                <span key={p} className="rounded-full border border-[var(--sand)] px-4 py-1 text-xs">{p}</span>
              ))}
            </div>
            <div className="mt-6 grid place-items-center">
              <div className="grid h-40 w-40 place-items-center rounded-md border-2 border-dashed border-[var(--sand)] bg-[var(--cream)]">
                <span className="font-accent text-xs text-[var(--earth)]/60">Scan QR to pay</span>
              </div>
            </div>
            <p className="mt-4 font-display text-2xl text-[var(--turmeric)]">{formatINR(total())}</p>
            <button 
              onClick={handlePayment}
              className="mt-6 inline-block rounded-md bg-[var(--turmeric)] px-8 py-4 font-medium text-[var(--cream)] hover:bg-[var(--saffron)]">Pay Securely →</button>
            <div className="mt-6 flex items-center justify-center gap-4 text-xs text-[var(--earth)]/60">
              <span className="flex items-center gap-1"><ShieldCheck size={14}/> SSL Secured</span>
              <span>· RBI Compliant</span>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div key="c" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-[var(--radius-lg)] bg-[var(--linen)] p-12 text-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: [0, 1.2, 1] }} transition={{ duration: 0.5 }}
              className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[var(--forest)] text-[var(--cream)]">
              <Check size={40}/>
            </motion.div>
            <h2 className="mt-6 font-display text-4xl">Order Confirmed!</h2>
            <p className="mt-2 text-[var(--earth)]/70">Order #{orderNo} · Expected delivery in 3–5 days</p>
            <p className="mt-1 text-xs text-[var(--earth)]/60">A confirmation email has been sent to your address</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button className="rounded-md border border-[var(--earth)] px-5 py-2.5 text-sm">Download Receipt</button>
              <Link to="/shop" className="rounded-md bg-[var(--turmeric)] px-5 py-2.5 text-sm text-[var(--cream)]">Continue Shopping</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
