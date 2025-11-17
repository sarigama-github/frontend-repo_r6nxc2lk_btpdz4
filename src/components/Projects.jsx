import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Secure Branch Network Overhaul',
    desc: 'Redesigned multi-site network with SD-WAN, segmented VLANs, and centralized monitoring for 40% latency reduction.',
    tags: ['SD-WAN', 'VLAN', 'Monitoring'],
    link: '#',
  },
  {
    title: 'AWS Hybrid Connectivity',
    desc: 'Built resilient site-to-site VPN and Transit Gateway architecture to connect on-prem to AWS workloads securely.',
    tags: ['AWS', 'TGW', 'VPN'],
    link: '#',
  },
  {
    title: 'Zero-Trust Access Platform',
    desc: 'Implemented identity-aware access, MFA, and least-privilege policies across critical infrastructure.',
    tags: ['IAM', 'MFA', 'ZTNA'],
    link: '#',
  },
  {
    title: 'Observability Stack Rollout',
    desc: 'Deployed metrics, logs, and tracing with SLO dashboards to cut MTTR by 35% across services.',
    tags: ['SRE', 'Grafana', 'Tracing'],
    link: '#',
  },
  {
    title: 'Datacenter Refresh',
    desc: 'Virtualization migration, new top-of-rack switching, and improved redundancy for critical systems.',
    tags: ['VMware', 'BGP', 'HA'],
    link: '#',
  },
  {
    title: 'CI/CD for Infrastructure',
    desc: 'GitOps pipeline with linting, plans, and approvals to safely roll infra changes.',
    tags: ['Terraform', 'Ansible', 'GitHub Actions'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Highlighted Projects</h2>
          <p className="text-slate-600 max-w-xl">Selected engagements that show my approach to reliability, performance, and security.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition block"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-blue-600/10 to-indigo-600/10" />
              <div className="aspect-video rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 mb-4 group-hover:from-slate-200 group-hover:to-slate-300 transition" />
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-900 group-hover:text-slate-950">{p.title}</h3>
                <span className="text-xs text-slate-500">Case study</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
