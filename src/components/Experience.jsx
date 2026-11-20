import { motion } from 'framer-motion'
import { Award, Briefcase } from 'lucide-react'
import Section from './Section'
import { profile } from '../data/profile'

export default function Experience() {
  const x = profile.internship
  return (
    <Section id="experience" title="Internship Experience" subtitle="Practical exposure to analytics workflows">
      <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass mx-auto max-w-3xl p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="shrink-0 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 p-3 text-white"><Briefcase size={24} /></div>
          <div className="min-w-0">
            <h3 className="text-xl font-bold">{x.role}</h3>
            <p className="text-cyan-500 font-medium">{x.org}</p>
          </div>
        </div>
        <ul className="mt-5 space-y-2 text-muted">
          {x.points.map((p) => <li key={p} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />{p}</li>)}
        </ul>
        {x.certificateUrl && (
          <a href={x.certificateUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-6"><Award size={16} /> Internship Completion Certificate</a>
        )}
      </motion.article>
    </Section>
  )
}
