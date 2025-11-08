import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero3D = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Ground reflection sheen */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Soft vignette for depth-of-field feel */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_55%,rgba(0,0,0,0.45)_100%)]" />

      {/* Copy Overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/80 backdrop-blur"
          >
            Dynamic New Production
          </motion.span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-6xl">
            Ideas Forged into Reality
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 md:text-lg">
            A high-end clean-room where your vision is engineered, assembled, and brought to life.
          </p>
        </motion.div>

        {/* Subtle floating CTA hint */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="pointer-events-none flex flex-col items-center gap-2 text-white/60">
            <div className="h-10 w-[1px] bg-gradient-to-b from-transparent via-white/50 to-transparent" />
            <span className="text-xs uppercase tracking-widest">Scroll</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero3D;
