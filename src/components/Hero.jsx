import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown, MapPin, Phone } from 'lucide-react';
import Seagulls from './ui/Seagulls';

export default function Hero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden flex flex-col items-center justify-start pt-40"
      style={{ height: '120vh' }}
    >
      {/* ── THE DEEP SEA ACCURATE GRADIENT ── */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, #9fdcdc 0%, #bde4df 40%, #e2ecd3 75%, #f1ebc6 90%, #dcd39b 100%)',
      }} />

      {/* DROP THE SEAGULLS HERE */}
      <Seagulls />

      {/* Parallax Text */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 flex flex-col items-center text-center px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-5xl md:text-9xl font-bold tracking-tight mb-4"
          style={{ color: '#2f3b5e' }}
        >
          Candy's <br />
          <span className="text-3xl md:text-6xl text-slate-600 mt-2 md:mt-4 block">
            Seafood and Grill
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-x-6 gap-y-3 mb-10"
          style={{ color: '#4a5a7a' }}
        >
          <span className="flex items-center gap-1.5 text-sm font-medium">
            <MapPin size={15} className="shrink-0" />
            <span className="text-center">Abelarde St., Zone 3, Cadiz City</span>
          </span>
          <span className="flex items-center gap-1.5 text-sm font-medium">
            <Phone size={15} className="shrink-0" />
            0995 263 3426
          </span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="mt-12 flex flex-col items-center gap-2"
          style={{ color: '#576785' }}
        >
          <ArrowDown size={32} />
        </motion.div>
      </motion.div>

      {/* ═══ NEAL.FUN WAVE STYLE ═══ */}
      <div className="absolute bottom-0 left-0 w-full z-20 overflow-hidden" style={{ height: '160px' }}>
        <motion.div
          className="absolute bottom-0 left-0 w-[300%]"
          style={{ height: '160px' }}
          animate={{ x: ["0%", "-33.333333%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
        >
          <svg
            className="block w-full h-full"
            style={{ overflow: 'visible' }}
            viewBox="0 0 4320 160"
            preserveAspectRatio="none"
          >
            {/* Fill Path (no stroke) */}
            <path
              d="M0,80 C320,130 420,30 720,80 C1020,130 1120,30 1440,80 C1760,130 1860,30 2160,80 C2460,130 2560,30 2880,80 C3200,130 3300,30 3600,80 C3900,130 4000,30 4320,80 L4320,180 L0,180 Z"
              fill="#058899"
            />
            {/* Top Stroke Outline ONLY (No borders on side/bottom) */}
            <path
              d="M0,80 C320,130 420,30 720,80 C1020,130 1120,30 1440,80 C1760,130 1860,30 2160,80 C2460,130 2560,30 2880,80 C3200,130 3300,30 3600,80 C3900,130 4000,30 4320,80"
              fill="none"
              stroke="#ffffff"
              strokeWidth="5"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}