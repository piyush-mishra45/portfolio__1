import { motion } from 'framer-motion'
import Section from './Section'
import { Icon } from './icons'
import { profile } from '../data/profile'

export default function About() {
  return (
    <Section id="about" title="About Me" subtitle="Who I am and where I’m heading">
      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass p-6 sm:p-8 space-y-4 text-muted leading-relaxed">
          {profile.about.map((p, i) => <p key={i}>{p}</p>)}
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2">
          {profile.aboutCards.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }} className="glass p-5">
              <div className="mb-3 inline-flex rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 p-2.5 text-white"><Icon name={c.icon} size={20} /></div>
              <h3 className="font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-muted">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
