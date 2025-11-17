import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium tracking-widest text-slate-700 uppercase">
            IT • Networking • Infrastructure
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Damion Marcus
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            I design, deploy, and secure modern networks and IT systems. From on-prem to cloud, I bring reliability, performance, and peace of mind.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-slate-900 text-white font-medium hover:bg-slate-800 transition">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white border border-slate-200 text-slate-900 font-medium hover:border-slate-300 transition">
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
