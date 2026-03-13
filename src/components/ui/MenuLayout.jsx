"use client";

import { motion } from 'framer-motion';
import { ImageIcon } from 'lucide-react';

export default function MenuLayout() {
  const menuItems = [
    { name: "Menu Item", price: "₱0.00", desc: "Description goes here" },
    { name: "Menu Item", price: "₱0.00", desc: "Description goes here" },
    { name: "Menu Item", price: "₱0.00", desc: "Description goes here" },
    { name: "Menu Item", price: "₱0.00", desc: "Description goes here" },
    { name: "Menu Item", price: "₱0.00", desc: "Description goes here" },
    { name: "Menu Item", price: "₱0.00", desc: "Description goes here" },
    { name: "Menu Item", price: "₱0.00", desc: "Description goes here" },
    { name: "Menu Item", price: "₱0.00", desc: "Description goes here" },
    { name: "Menu Item", price: "₱0.00", desc: "Description goes here" },
    { name: "Menu Item", price: "₱0.00", desc: "Description goes here" },
  ];

  return (
    <section
      className="min-h-screen flex items-center justify-center w-full px-4 md:px-6 py-20 md:py-32 pointer-events-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="w-full max-w-4xl bg-white/5 backdrop-blur-xl rounded-3xl border border-white/15 px-6 py-10 md:px-12 md:py-16 shadow-2xl"
        style={{
          boxShadow: '0 32px 64px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255, 255, 255, 0.2)',
        }}
      >
        <h2 className="text-4xl md:text-5xl text-center text-slate-50 mb-2 font-display font-bold tracking-tight">
          Our Menu!
        </h2>
        <p className="text-center text-sky-300 text-xs md:text-sm tracking-widest uppercase font-semibold mb-10 md:mb-14">
          Cooked with Love and Sea Salt
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menuItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: (i % 5) * 0.1 }}
              viewport={{ once: true }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.2rem',
                padding: '1rem',
                background: 'rgba(255,255,255,0.02)',
                borderRadius: '14px',
                border: '1px solid rgba(255,255,255,0.04)',
                transition: 'background 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
            >
              <div className="w-20 h-20 md:w-28 md:h-28 shrink-0 rounded-xl bg-white/5 border border-dashed border-white/10 flex items-center justify-center flex-col gap-1 text-white/20">
                <ImageIcon size={24} className="scale-75 md:scale-100" />
                <span className="text-[0.6rem] md:text-xs uppercase tracking-wider">Photo</span>
              </div>

              {/* Text Info */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{
                    color: 'rgba(255,255,255,0.3)',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    lineHeight: 1.2,
                  }}>{item.name}</span>
                  <span style={{
                    fontWeight: 700,
                    color: 'rgba(251,146,60,0.4)',
                    fontSize: '1.1rem',
                    fontFamily: "'Inter', sans-serif",
                    marginLeft: '0.5rem',
                  }}>{item.price}</span>
                </div>
                <p style={{
                  margin: 0,
                  color: 'rgba(148,163,184,0.4)',
                  fontSize: '0.85rem',
                  lineHeight: 1.4,
                  fontStyle: 'italic',
                }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}