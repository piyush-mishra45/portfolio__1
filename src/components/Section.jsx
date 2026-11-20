import { motion } from 'framer-motion'

export default function Section({ id, title, subtitle, children, className = '' }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`relative px-4 sm:px-6 py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-14 text-center"
        >
          <h2 id={`${id}-title`} className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            <span className="grad-text">{title}</span>
          </h2>
          {subtitle && <p className="mt-3 text-muted max-w-2xl mx-auto">{subtitle}</p>}
          <div className="mt-4 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
        </motion.div>
        {children}
      </div>
    </section>
  )
}
