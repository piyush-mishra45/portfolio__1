import { motion } from 'framer-motion'
import Section from './Section'
import { Icon } from './icons'
import { skills } from '../data/skills'

export default function Skills() {
  return (
    <Section id="skills" title="Technical Skills" subtitle="Tools and technologies I work with">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <motion.article key={s.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.07 }} whileHover={{ y: -4 }} className={`glass p-6 ${i === 1 ? 'lg:col-span-2' : ''}`}>
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 p-2.5 text-white"><Icon name={s.icon} size={20} /></div>
              <h3 className="font-semibold">{s.title}</h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {s.items.map((it) => <li key={it} className="chip hover:border-cyan-400 hover:text-cyan-500 transition-colors">{it}</li>)}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
