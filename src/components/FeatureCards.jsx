import { motion } from 'framer-motion';
import { Layers, Zap, ShieldCheck, LineChart } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: 'Modular Ledgers',
    desc: 'Organize accounts, vouchers and inventory with a clean, modular structure.'
  },
  {
    icon: Zap,
    title: 'Lightning Performance',
    desc: 'Blazing-fast navigation and keyboard-first workflows for power users.'
  },
  {
    icon: ShieldCheck,
    title: 'Secure by Design',
    desc: 'Role-based access and audit trails keep your books compliant and safe.'
  },
  {
    icon: LineChart,
    title: 'Insightful Reports',
    desc: 'Beautiful dashboards with real-time summaries and drill-down details.'
  }
];

export default function FeatureCards() {
  return (
    <section className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_50%_-20%,rgba(244,63,94,0.15),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center"
        >
          Built for a delightful accounting flow
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-slate-900/50 p-6 shadow-lg backdrop-blur-sm hover:shadow-rose-500/20 transition-all"
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-rose-500 to-orange-400 flex items-center justify-center shadow-md shadow-rose-500/30">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-white font-medium">{title}</h3>
              <p className="mt-2 text-sm text-slate-300/80">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
