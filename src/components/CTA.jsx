import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_80%_20%,rgba(244,63,94,0.12),transparent_50%)]" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-semibold text-white"
        >
          Experience accounting that feels effortless
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-4 text-slate-300/90"
        >
          Join a new era of clarity and speed. Set up your company, add ledgers, and get insights in minutes.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <button className="px-5 py-3 rounded-md bg-gradient-to-r from-rose-500 to-orange-400 text-white font-medium shadow-lg shadow-rose-500/30 hover:shadow-rose-500/40 transition-all">Create Company</button>
          <button className="px-5 py-3 rounded-md bg-transparent border border-white/20 text-white hover:bg-white/10 transition-colors">Explore Reports</button>
        </motion.div>
      </div>
    </section>
  );
}
