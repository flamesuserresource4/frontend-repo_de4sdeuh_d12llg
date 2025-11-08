import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA = () => {
  return (
    <section className="relative w-full bg-black py-28 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_40%,rgba(34,211,238,0.12)_0%,transparent_60%)]" />

      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold md:text-5xl"
        >
          Your Masterpiece is Ready. Let's Build.
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mx-auto mt-4 max-w-2xl text-white/70"
        >
          High-end execution from strategy to ship. Precision, polish, and performance in every pixel.
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative mt-8 inline-flex items-center justify-center overflow-hidden rounded-full border border-cyan-300/30 bg-white/5 px-7 py-3 text-sm font-medium text-white backdrop-blur transition hover:border-cyan-300/60"
        >
          <span className="absolute inset-0 pointer-events-none bg-gradient-to-r from-cyan-400/20 via-fuchsia-400/20 to-indigo-400/20" />
          <span className="relative">Start Project</span>
        </motion.a>
      </div>
    </section>
  );
};

export default FinalCTA;
