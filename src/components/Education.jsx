import { motion } from 'framer-motion'
import { Calendar, GraduationCap, MapPin } from 'lucide-react'
import Section from './Section'
import { profile } from '../data/profile'

export default function Education() {
  const e = profile.education
  return (
    <Section id="education" title="Education" subtitle="My academic journey">
      <div className="relative mx-auto max-w-3xl pl-8 sm:pl-10">
        <div className="absolute left-3 sm:left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-violet-500 to-cyan-400" aria-hidden="true" />
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative">
          <span className="absolute -left-[1.85rem] sm:-left-[2.1rem] top-6 grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 ring-4 ring-bg" aria-hidden="true" />
          <article className="glass p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 p-3 text-white shrink-0"><GraduationCap size={24} /></div>
              <div className="min-w-0">
                <h3 className="text-xl font-bold">{e.degree}</h3>
                <p className="text-cyan-500 font-medium">{e.branch}</p>
                <p className="mt-2 flex items-start gap-2 text-muted"><MapPin size={16} className="mt-1 shrink-0" />{e.university}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="chip gap-1.5"><Calendar size={12} />{e.duration}</span>
                  <span className="chip">{e.status}</span>
                </div>
              </div>
            </div>
          </article>
        </motion.div>
      </div>
    </Section>
  )
}
