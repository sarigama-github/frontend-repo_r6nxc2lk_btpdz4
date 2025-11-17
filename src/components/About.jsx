import { motion } from 'framer-motion'

export default function About() {
  const stats = [
    { label: 'Years Experience', value: '7+' },
    { label: 'Certifications', value: 'CCNA, AWS-CP' },
    { label: 'Uptime Delivered', value: '99.99%' },
  ]

  return (
    <section id="about" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_40%)]" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">About</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              I’m a systems and network specialist focused on building secure, scalable, and highly available infrastructure. I enjoy solving complex problems, automating routine tasks, and leaving systems better than I found them.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li>• Network design and segmentation (LAN/WAN, SD-WAN)</li>
              <li>• Firewalling and zero-trust security</li>
              <li>• Cloud networking (AWS VPC, Transit Gateway)</li>
              <li>• Virtualization, containers, and CI/CD for infra</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                  <div className="text-2xl font-bold text-slate-900">{s.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
