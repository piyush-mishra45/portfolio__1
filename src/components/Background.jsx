import { motion } from 'framer-motion'

const blobs = [
  { c: 'bg-violet-600/25', s: 'h-80 w-80 sm:h-[28rem] sm:w-[28rem]', p: 'top-10 -left-24', a: { x: [0, 60, 0], y: [0, 40, 0] }, d: 18 },
  { c: 'bg-cyan-500/20', s: 'h-72 w-72 sm:h-96 sm:w-96', p: 'top-1/3 -right-24', a: { x: [0, -50, 0], y: [0, 60, 0] }, d: 22 },
  { c: 'bg-fuchsia-600/15', s: 'h-72 w-72 sm:h-96 sm:w-96', p: 'bottom-10 left-1/4', a: { x: [0, 40, 0], y: [0, -50, 0] }, d: 26 },
]

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-bg" />
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(rgb(var(--ink)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--ink)) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      {blobs.map((b, i) => (
        <motion.div key={i} className={`absolute rounded-full blur-3xl ${b.c} ${b.s} ${b.p}`} animate={b.a} transition={{ duration: b.d, repeat: Infinity, ease: 'easeInOut' }} />
      ))}
    </div>
  )
}
