import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const LiveMotion = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const glow = useTransform(scrollYProgress, [0, 1], [0.1, 0.35]);

  return (
    <section ref={ref} className="relative w-full bg-[#0a0a0a] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_50%_at_30%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_55%,rgba(0,0,0,0.5)_100%)]" />

      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70">Phase 03</span>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Live & In Motion</h2>
          <p className="mt-3 max-w-2xl text-white/70">The product awakens. Data streams, video textures, and real-time feedback pulse through the surface.</p>
        </div>

        <motion.div style={{ y }} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-0">
          <div className="relative aspect-video w-full overflow-hidden">
            <div className="absolute inset-0 opacity-70 mix-blend-screen" style={{ background: 'repeating-linear-gradient(90deg, rgba(168,85,247,0.1) 0px, rgba(16,185,129,0.15) 2px, transparent 3px)' }} />
            <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-fuchsia-500/20 via-cyan-400/10 to-indigo-500/20" />
            <div className="absolute inset-0" style={{ filter: `drop-shadow(0 0 ${glow.get()}rem rgba(34,211,238,0.8))` }} />

            {/* Simulated HUD */}
            <div className="absolute left-6 top-6 rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-xs text-white/70 backdrop-blur">
              Stream: online • 60fps • 4K
            </div>
            <div className="absolute bottom-6 right-6 rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-xs text-white/70 backdrop-blur">
              Latency: 12ms • State: Stable
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveMotion;
