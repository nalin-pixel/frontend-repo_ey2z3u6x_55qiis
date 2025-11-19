import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureCards from './components/FeatureCards'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <FeatureCards />
      <CTA />
      <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-300/70">
        © {new Date().getFullYear()} Tally Prime Clone — Modern UI demo
      </footer>
    </div>
  )
}

export default App
