import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      {/* 3D Interactive Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to ensure text contrast; pointer-events-none so Spline remains interactive */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/20 to-slate-900 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs tracking-wide"
        >
          Smooth. Minimal. Powerful.
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight"
        >
          Tally Prime — Reimagined
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-white/80"
        >
          A fresh and modern take on accounting — crafted for speed, clarity and an effortless user experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 flex items-center gap-3"
        >
          <button className="px-5 py-3 rounded-md bg-white text-slate-900 font-medium hover:bg-white/90 transition-colors">Try Demo</button>
          <button className="px-5 py-3 rounded-md bg-transparent border border-white/30 text-white hover:bg-white/10 transition-colors">Watch Overview</button>
        </motion.div>
      </div>
    </section>
  );
}
