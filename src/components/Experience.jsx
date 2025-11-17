import { motion } from 'framer-motion'
import { Shield, Cloud, Server, Network } from 'lucide-react'

const items = [
  {
    icon: Network,
    title: 'Network Engineering',
    desc: 'Designed and implemented segmented networks with VLANs, VPNs, and SD-WAN for multi-site reliability.',
  },
  {
    icon: Shield,
    title: 'Security & Hardening',
    desc: 'Zero-trust policies, next-gen firewalls, IDS/IPS, and continuous monitoring to keep systems safe.',
  },
  {
    icon: Cloud,
    title: 'Cloud & Hybrid',
    desc: 'Built secure VPCs, VPNs, and peering across AWS with automated infrastructure as code.',
  },
  {
    icon: Server,
    title: 'Systems & SRE',
    desc: 'Virtualization, container orchestration, observability and incident response for high availability.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">What I Do</h2>
          <p className="text-slate-600 max-w-xl">I bring production-ready networking and infrastructure practices that scale with your team and business.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white grid place-items-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
