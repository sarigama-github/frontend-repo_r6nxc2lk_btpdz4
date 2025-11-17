import { motion } from 'framer-motion'
import { Shield, Cloud, Server, Network, Workflow, Cog } from 'lucide-react'

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
  {
    icon: Workflow,
    title: 'Automation',
    desc: 'Ansible/Terraform pipelines to codify change and deliver repeatable, auditable infrastructure.',
  },
  {
    icon: Cog,
    title: 'Ops Excellence',
    desc: 'SLIs/SLOs, runbooks, game days, and blameless postmortems for continuous reliability.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">What I Do</h2>
          <p className="text-slate-600 max-w-xl">I bring production-ready networking and infrastructure practices that scale with your team and business.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-blue-600/10 to-indigo-600/10" />
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
