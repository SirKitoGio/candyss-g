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
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: '8rem 1.5rem',
        pointerEvents: 'auto',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        style={{
          maxWidth: '900px',
          width: '100%',
          background: 'rgba(255, 255, 255, 0.01)',
          backdropFilter: 'blur(20px) saturate(100%)',
          WebkitBackdropFilter: 'blur(20px) saturate(100%)',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          padding: '4rem 3rem',
          boxShadow: '0 32px 64px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255, 255, 255, 0.2)',
        }}
      >
        <h2 style={{
          fontSize: '3.2rem',
          textAlign: 'center',
          color: '#f8fafc',
          marginBottom: '0.5rem',
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          letterSpacing: '-1px',
        }}>
          Our Menu!
        </h2>
        <p style={{
          textAlign: 'center',
          color: '#7dd3fc',
          fontSize: '0.85rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          fontWeight: 600,
          marginBottom: '3.5rem',
        }}>
          Cooked with Love and Sea Salt
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '1.5rem' }}>
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
              {/* Image Placeholder — BIGGER */}
              <div style={{
                width: '110px',
                height: '110px',
                flexShrink: 0,
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px dashed rgba(255,255,255,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '6px',
                color: 'rgba(255,255,255,0.2)',
              }}>
                <ImageIcon size={24} />
                <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Photo</span>
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