import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#060a18]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      role="status"
      aria-label="Loading"
    >
      <motion.div
        className="h-16 w-16 rounded-full border-4 border-violet-500/30 border-t-cyan-400"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 0.9, ease: 'linear' }}
      />
      <p className="mt-5 text-sm tracking-widest text-slate-400">PIYUSH KUMAR MISHRA</p>
    </motion.div>
  )
}
