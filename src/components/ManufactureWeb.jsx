import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ManufactureWeb = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const y = useTransform(scrollYProgress, [0, 1], [60, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);

  return (
    <section ref={ref} className="relative w-full bg-[#0a0b0c] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,255,255,0.08)_0%,transparent_60%)]" />

      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70">Phase 01</span>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Code Assembly</h2>
          <p className="mt-3 max-w-2xl text-white/70">Abstract robotic arms and scanners forge the software chassis — structure, components, and systems woven precisely around your idea.</p>
        </div>

        <motion.div style={{ y, opacity }} className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-black/40 p-4">
              <p className="text-sm text-white/60">Compiler</p>
              <p className="mt-1 text-lg">Types checked. Bundles optimized.</p>
            </div>
            <div className="rounded-lg bg-black/40 p-4">
              <p className="text-sm text-white/60">Robotic Arm</p>
              <p className="mt-1 text-lg">Components placed with micron precision.</p>
            </div>
            <div className="rounded-lg bg-black/40 p-4">
              <p className="text-sm text-white/60">Laser Scanner</p>
              <p className="mt-1 text-lg">Interfaces aligned. No friction, only flow.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ManufactureWeb;
