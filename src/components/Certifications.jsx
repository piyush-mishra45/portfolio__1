import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import Section from './Section'
import { certifications } from '../data/certifications'

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications" subtitle="Verified learning in data science, SQL and Python">
      <div className="grid gap-6 md:grid-cols-3">
        {certifications.map((c, i) => (
          <motion.article key={c.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1 }} whileHover={{ y: -6 }} className="glass flex flex-col p-6">
            <div className="mb-4 inline-flex w-fit rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 p-3 text-white"><Award size={24} /></div>
            <h3 className="text-lg font-bold leading-snug">{c.title}</h3>
            <p className="mt-2 text-sm text-cyan-500 font-medium">{c.issuer}</p>
            {c.platform && <p className="text-sm text-muted">Platform: {c.platform}</p>}
            {c.url && (
              <a href={c.url} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-5 !py-2"><ExternalLink size={14} /> View Certificate</a>
            )}
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
