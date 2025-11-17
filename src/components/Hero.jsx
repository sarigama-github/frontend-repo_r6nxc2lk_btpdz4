import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium tracking-widest text-slate-700 uppercase">
            IT • Networking • Infrastructure
          </p>
          <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl"
        >
          {["CCNA", "AWS-CP", "SRE", "Zero-Trust"].map((chip) => (
            <div key={chip} className="text-xs px-3 py-2 rounded-full bg-white/70 border border-slate-200 text-slate-700 backdrop-blur shadow-sm">
              {chip}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-4 flex justify-center">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="h-10 w-6 rounded-full border-2 border-slate-400/70 grid place-items-center"
        >
          <div className="h-2 w-1 rounded-full bg-slate-400" />
        </motion.div>
      </div>
    </section>
  )
}
