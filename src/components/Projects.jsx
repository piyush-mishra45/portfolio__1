import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, ExternalLink, Github, X } from 'lucide-react'
import Section from './Section'
import { Icon } from './icons'
import { projects } from '../data/projects'

function Modal({ p, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [onClose])

  return (
    <motion.div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/70 p-0 sm:p-6 backdrop-blur-sm"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div role="dialog" aria-modal="true" aria-labelledby="modal-title"
        initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 60, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl sm:rounded-3xl border border-line bg-surface p-6 sm:p-8 shadow-2xl">
        <button onClick={onClose} className="absolute right-4 top-4 rounded-lg border border-line p-2 text-muted hover:text-cyan-500" aria-label="Close details"><X size={18} /></button>
        <div className={`mb-5 flex h-28 items-center justify-center rounded-2xl bg-gradient-to-br ${p.gradient} text-white`}><Icon name={p.icon} size={48} /></div>
        <h3 id="modal-title" className="pr-10 text-2xl font-bold">{p.title}</h3>
        <p className="mt-3 text-muted leading-relaxed">{p.description}</p>
        <h4 className="mt-6 mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-500">Key Features</h4>
        <ul className="grid gap-2 sm:grid-cols-2">
          {p.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-muted"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-cyan-500" />{f}</li>
          ))}
        </ul>
        <h4 className="mt-6 mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-500">Technologies</h4>
        <ul className="flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="chip">{t}</li>)}</ul>
        <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 w-full sm:w-auto"><Github size={16} /> View on GitHub <ExternalLink size={14} /></a>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)
  return (
    <Section id="projects" title="Featured Projects" subtitle="Hands-on analytics and machine learning work">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article key={p.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }} className="glass group flex flex-col overflow-hidden">
            <div className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${p.gradient} text-white overflow-hidden`}>
              <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/10" aria-hidden="true" />
              <div className="absolute -left-8 -bottom-8 h-32 w-32 rounded-full bg-black/10" aria-hidden="true" />
              <Icon name={p.icon} size={56} className="relative transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-bold leading-snug">{p.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{p.description}</p>
              <ul className="mt-3 space-y-1">
                {p.features.slice(0, 3).map((f) => <li key={f} className="flex gap-2 text-xs text-muted"><CheckCircle2 size={14} className="mt-0.5 shrink-0 text-cyan-500" />{f}</li>)}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.slice(0, 5).map((t) => <li key={t} className="chip !text-[11px] !px-2.5 !py-0.5">{t}</li>)}
                {p.tech.length > 5 && <li className="chip !text-[11px] !px-2.5 !py-0.5">+{p.tech.length - 5}</li>}
              </ul>
              <div className="mt-auto flex flex-wrap gap-2 pt-5">
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-ghost !px-4 !py-2 flex-1"><Github size={15} /> GitHub</a>
                <button onClick={() => setSelected(p)} className="btn-primary !px-4 !py-2 flex-1">View Details</button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      <AnimatePresence>{selected && <Modal p={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </Section>
  )
}
