import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export const Route = createFileRoute('/admin')({
  head: () => ({ meta: [{ title: 'Admin Dashboard — SanskritiHaat' }] }),
  component: Admin,
});

const SALES_DATA = Array.from({ length: 28 }, (_, i) => ({
  d: `Jul ${11 + i > 31 ? i - 20 : 11 + i}${11 + i > 31 ? ' Aug' : ''}`,
  sales: Math.floor(500 + Math.random() * 1500 + i * 30),
}));

const SOURCE_DATA = [{ name: 'Manual', v: 69 }, { name: 'POS', v: 31 }];
const CUST_DATA = [{ name: 'New', v: 58 }, { name: 'Returning', v: 42 }];
const COLORS = ['#C9832A', '#2C4A2E', '#C1614F', '#3B4A6B'];

const ORDERS = [
  { id: 'SH446001', date: '2025-08-08', cust: 'Ananya R.', pay: 'Paid', ship: 'Shipped', total: 2900 },
  { id: 'SH446000', date: '2025-08-07', cust: 'Karan S.', pay: 'Paid', ship: 'Processing', total: 6500 },
  { id: 'SH445999', date: '2025-08-06', cust: 'Meera J.', pay: 'Paid', ship: 'Fulfilled', total: 1500 },
  { id: 'SH445998', date: '2025-08-05', cust: 'Priya M.', pay: 'Refunded', ship: 'Returned', total: 950 },
  { id: 'SH445997', date: '2025-08-04', cust: 'Vikram T.', pay: 'Paid', ship: 'Shipped', total: 3200 },
];

function Admin() {
  const [authed, setAuthed] = useState(false);
  const [pwd, setPwd] = useState('');

  if (!authed) {
    return (
      <div className="mx-auto grid max-w-sm place-items-center py-24">
        <form onSubmit={(e) => { e.preventDefault(); setAuthed(pwd === 'admin'); }} className="w-full rounded-[var(--radius-md)] bg-[var(--linen)] p-6">
          <h1 className="font-display text-2xl mb-3">Admin Access</h1>
          <input type="password" value={pwd} onChange={(e) => setPwd(e.target.value)} placeholder="Password (admin)"
            className="w-full rounded-md border border-[var(--sand)] bg-[var(--cream)] px-3 py-2 text-sm"/>
          <button className="mt-3 w-full rounded-md bg-[var(--turmeric)] py-2 text-sm text-[var(--cream)]">Enter</button>
        </form>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="font-display text-4xl mb-8">Sales Dashboard</h1>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { l: 'Total Sales', v: '₹25,932' },
          { l: 'Orders', v: '47' },
          { l: 'Avg Order Value', v: '₹552' },
        ].map(c => (
          <div key={c.l} className="rounded-[var(--radius-md)] border border-[var(--sand)]/40 bg-[var(--linen)] p-5">
            <p className="font-accent text-xs text-[var(--turmeric)]">{c.l}</p>
            <p className="font-display text-3xl mt-1">{c.v}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-[var(--radius-md)] border border-[var(--sand)]/40 bg-[var(--cream)] p-5">
          <h3 className="font-display text-xl mb-3">Sales Jul 11 – Aug 8 2025</h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={SALES_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="#B8A082" opacity={0.3}/>
              <XAxis dataKey="d" stroke="#3D2B1F" tick={{ fontSize: 10 }} interval={3}/>
              <YAxis stroke="#3D2B1F" tick={{ fontSize: 10 }}/>
              <Tooltip/>
              <Line type="monotone" dataKey="sales" stroke="#C9832A" strokeWidth={2} dot={{ fill: '#C9832A' }}/>
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="rounded-[var(--radius-md)] border border-[var(--sand)]/40 bg-[var(--cream)] p-5">
          <h3 className="font-display text-xl mb-3">Sales Source</h3>
          <ResponsiveContainer width="100%" height={120}>
            <PieChart>
              <Pie data={SOURCE_DATA} dataKey="v" innerRadius={30} outerRadius={50}>
                {SOURCE_DATA.map((_, i) => <Cell key={i} fill={COLORS[i]}/>)}
              </Pie>
              <Tooltip/>
            </PieChart>
          </ResponsiveContainer>
          <h3 className="font-display text-xl mb-3 mt-4">New vs Returning</h3>
          <ResponsiveContainer width="100%" height={120}>
            <PieChart>
              <Pie data={CUST_DATA} dataKey="v" innerRadius={30} outerRadius={50}>
                {CUST_DATA.map((_, i) => <Cell key={i} fill={COLORS[i + 2]}/>)}
              </Pie>
              <Tooltip/>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-6 rounded-[var(--radius-md)] border border-[var(--sand)]/40 bg-[var(--cream)] p-5">
        <h3 className="font-display text-xl mb-3">Recent Orders</h3>
        <table className="w-full text-sm">
          <thead className="text-left text-xs uppercase text-[var(--earth)]/60">
            <tr><th className="py-2">Order</th><th>Date</th><th>Customer</th><th>Payment</th><th>Fulfillment</th><th>Total</th></tr>
          </thead>
          <tbody className="divide-y divide-[var(--sand)]/30">
            {ORDERS.map(o => (
              <tr key={o.id}>
                <td className="py-2 font-mono">#{o.id}</td>
                <td>{o.date}</td>
                <td>{o.cust}</td>
                <td><span className={`rounded-full px-2 py-0.5 text-xs ${o.pay === 'Refunded' ? 'bg-[var(--terracotta)]/20 text-[var(--terracotta)]' : 'bg-[var(--forest)]/15 text-[var(--forest)]'}`}>{o.pay}</span></td>
                <td>{o.ship}</td>
                <td>₹{o.total.toLocaleString('en-IN')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
