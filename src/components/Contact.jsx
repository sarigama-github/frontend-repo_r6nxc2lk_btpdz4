import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-blue-600/10 to-indigo-600/10" />
          <div className="grid md:grid-cols-2 gap-10 items-center relative">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Let’s build something reliable</h2>
              <p className="mt-3 text-slate-700">Have a role or project in mind? I’m open to consulting and full-time opportunities.</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600" /> Response within 24 hours</li>
                <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600" /> Clear scope and next steps</li>
                <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600" /> Remote-friendly</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="mailto:damion.marcus@example.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800">
                  <Mail className="h-4 w-4" /> Email me
                </a>
                <a href="https://www.linkedin.com" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-100 text-slate-900 hover:bg-slate-200">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a href="https://github.com" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-100 text-slate-900 hover:bg-slate-200">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4"
            >
              <div>
                <label className="text-sm text-slate-700">Name</label>
                <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-slate-700">Email</label>
                <input type="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm text-slate-700">Project Type</label>
                <select className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400">
                  <option>Networking</option>
                  <option>Security</option>
                  <option>Cloud</option>
                  <option>SRE / Observability</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-slate-700">Message</label>
                <textarea rows="4" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="Tell me about your project..." />
              </div>
              <button className="w-full rounded-md bg-slate-900 text-white py-2 font-medium hover:bg-slate-800">Send</button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  )
}
