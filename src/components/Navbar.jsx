import { Menu, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/60 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-rose-500 to-orange-400 shadow-lg shadow-rose-500/30" />
          <span className="text-white font-semibold tracking-tight">Tally Prime Clone</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-1 text-sm">
          {[
            { label: "Features" },
            { label: "Solutions", caret: true },
            { label: "Pricing" },
            { label: "Resources", caret: true },
          ].map((item) => (
            <button
              key={item.label}
              className="text-slate-300/90 hover:text-white px-3 py-2 rounded-md transition-colors inline-flex items-center gap-1"
            >
              <span>{item.label}</span>
              {item.caret && (
                <ChevronDown className="h-4 w-4 opacity-70" />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex px-4 py-2 rounded-md text-slate-200 hover:text-white hover:bg-white/5 transition-colors">
            Sign in
          </button>
          <button className="px-4 py-2 rounded-md bg-gradient-to-r from-rose-500 to-orange-400 text-white font-medium shadow-lg shadow-rose-500/30 hover:shadow-rose-500/40 transition-all">
            Get Started
          </button>
          <button className="md:hidden inline-flex p-2 rounded-md hover:bg-white/5">
            <Menu className="h-5 w-5 text-white" />
          </button>
        </div>
      </nav>
    </header>
  );
}
