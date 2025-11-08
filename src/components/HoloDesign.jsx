import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HoloDesign = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);
  const blur = useTransform(scrollYProgress, [0, 1], [6, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 1]);
  // Convert numeric blur MotionValue into a CSS filter string MotionValue
  const blurFilter = useTransform(blur, (b) => `blur(${b}px)`);

  return (
    <section ref={ref} className="relative w-full bg-[#0b0c0e] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_70%_40%,rgba(99,102,241,0.08)_0%,transparent_60%)]" />

      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70">Phase 02</span>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Holographic Identity</h2>
          <p className="mt-3 max-w-2xl text-white/70">Brand layers are projected — color, typography, motion language. The chassis becomes recognizable and unmistakably yours.</p>
        </div>

        <motion.div
          style={{ scale, opacity, filter: blurFilter }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-cyan-500/10 to-fuchsia-500/10 p-8"
        >
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-black/30 p-4 backdrop-blur">
              <p className="text-sm text-white/60">Palette</p>
              <div className="mt-2 flex gap-2">
                <span className="h-8 w-8 rounded-full bg-cyan-400" />
                <span className="h-8 w-8 rounded-full bg-fuchsia-400" />
                <span className="h-8 w-8 rounded-full bg-indigo-400" />
              </div>
            </div>
            <div className="rounded-lg bg-black/30 p-4 backdrop-blur">
              <p className="text-sm text-white/60">Typography</p>
              <p className="mt-1 text-lg font-medium">Inter / Geist / Manrope</p>
            </div>
            <div className="rounded-lg bg-black/30 p-4 backdrop-blur">
              <p className="text-sm text-white/60">Motion</p>
              <p className="mt-1 text-lg">Easing, micro-interactions, and states that feel alive.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HoloDesign;
