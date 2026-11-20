import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { profile } from '../data/profile'

const links = ['Home', 'About', 'Education', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact']

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    links.forEach((l) => { const el = document.getElementById(l.toLowerCase()); if (el) obs.observe(el) })
    return () => { window.removeEventListener('scroll', onScroll); obs.disconnect() }
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled || open ? 'glass !rounded-none border-x-0 border-t-0' : ''}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6" aria-label="Primary">
        <a href="#home" className="text-lg font-extrabold tracking-tight" aria-label={`${profile.name} – home`}>
          <span className="grad-text">PM</span><span className="text-ink">.</span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const id = l.toLowerCase()
            return (
              <li key={l}>
                <a href={`#${id}`} aria-current={active === id ? 'page' : undefined}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-cyan-500 ${active === id ? 'text-cyan-500' : 'text-muted'}`}>
                  {l}
                  {active === id && <motion.span layoutId="nav-pill" className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded bg-gradient-to-r from-violet-500 to-cyan-400" />}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} className="rounded-lg border border-line p-2 text-muted hover:text-cyan-500" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setOpen((o) => !o)} className="lg:hidden rounded-lg border border-line p-2 text-muted" aria-label="Toggle menu" aria-expanded={open} aria-controls="mobile-menu">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul id="mobile-menu" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden px-4 pb-4">
            {links.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-3 text-sm font-medium ${active === l.toLowerCase() ? 'bg-violet-500/10 text-cyan-500' : 'text-muted'}`}>{l}</a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
