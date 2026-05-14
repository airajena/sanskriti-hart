import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import logo from '@/assets/logo.jpeg';

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: 'bot' | 'user'; text: string }[]>([
    { from: 'bot', text: 'Hi there 👋 Welcome to Sanskriti Haat! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages(m => [...m, { from: 'user', text }]);
    setInput('');
    setTimeout(() => {
      setMessages(m => [...m, { from: 'bot', text: "Thanks for reaching out! We'll get back to you shortly. Leave your email and we'll connect 💛" }]);
    }, 700);
  };

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
        className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[var(--turmeric)] text-[var(--cream)] shadow-lifted hover:bg-[var(--saffron)]"
        aria-label="Open chat"
      >
        <MessageCircle size={22}/>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-40 flex h-[460px] w-[340px] flex-col overflow-hidden rounded-[var(--radius-lg)] bg-[var(--cream)] shadow-lifted border border-[var(--sand)]/40">
            <div className="flex items-center justify-between bg-[var(--earth)] px-4 py-3 text-[var(--cream)]">
              <div className="flex items-center gap-3">
                <img src={logo} alt="" className="h-10 w-10 rounded-full border border-[var(--cream)]/20 object-cover" />
                <div>
                  <p className="font-display text-lg">Haat Helper</p>
                  <p className="text-xs opacity-70">Usually replies in a few minutes</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)}><X size={18}/></button>
            </div>
            <div className="flex-1 space-y-2 overflow-y-auto p-4 bg-[var(--linen)]">
              {messages.map((m, i) => (
                <div key={i} className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${m.from === 'bot' ? 'bg-[var(--cream)] text-[var(--earth)]' : 'ml-auto bg-[var(--turmeric)] text-[var(--cream)]'}`}>
                  {m.text}
                </div>
              ))}
              <div className="flex flex-wrap gap-2 pt-2">
                {['Track My Order','Browse Products','Shipping Info','Contact Us'].map(c => (
                  <button key={c} onClick={() => send(c)} className="rounded-full border border-[var(--sand)] bg-[var(--cream)] px-3 py-1 text-xs hover:bg-[var(--turmeric)] hover:text-[var(--cream)]">{c}</button>
                ))}
              </div>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex items-center gap-2 border-t border-[var(--sand)]/30 p-3">
              <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message…" className="flex-1 rounded-full border border-[var(--sand)]/50 bg-[var(--cream)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--turmeric)]"/>
              <button type="submit" className="grid h-9 w-9 place-items-center rounded-full bg-[var(--turmeric)] text-[var(--cream)]"><Send size={16}/></button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
