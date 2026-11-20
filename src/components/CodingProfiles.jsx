import { motion } from 'framer-motion'
import { Code2, Github } from 'lucide-react'
import Section from './Section'
import { Icon } from './icons'
import { profile } from '../data/profile'

export default function CodingProfiles() {
  return (
    <Section id="coding" title="Coding Profiles" subtitle="Problem-solving and open-source work">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {profile.coding.map((c, i) => (
            <motion.div key={c.text} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="glass flex items-center gap-4 p-5">
              <div className="shrink-0 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 p-2.5 text-white"><Icon name={c.icon} size={20} /></div>
              <p className="font-medium">{c.text}</p>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-4">
          <a href={profile.links.leetcode} target="_blank" rel="noopener noreferrer" className="glass group flex items-center gap-4 p-5 transition hover:-translate-y-1 hover:border-cyan-400">
            <Code2 size={28} className="text-amber-500 shrink-0" />
            <div className="min-w-0"><p className="font-semibold">LeetCode</p><p className="text-sm text-muted">View my problem-solving profile</p></div>
          </a>
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="glass group flex items-center gap-4 p-5 transition hover:-translate-y-1 hover:border-cyan-400">
            <Github size={28} className="shrink-0" />
            <div className="min-w-0"><p className="font-semibold">GitHub</p><p className="text-sm text-muted">Browse my repositories</p></div>
          </a>
        </div>
      </div>
    </Section>
  )
}
