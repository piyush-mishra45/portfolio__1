import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, Download, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import useTyping from '../hooks/useTyping'

const socials = [
  { href: profile.links.github, label: 'GitHub', Icon: Github },
  { href: profile.links.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: profile.links.leetcode, label: 'LeetCode', Icon: Code2 },
  { href: `mailto:${profile.email}`, label: 'Email', Icon: Mail },
]

export default function Hero() {
  const typed = useTyping(profile.typing)
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <section id="home" className="relative flex min-h-screen items-center px-4 sm:px-6 pt-24 pb-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="order-2 lg:order-1 text-center lg:text-left min-w-0">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-500">Welcome to my portfolio</p>
          <h1 className="mt-3 text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight">
            Hi, I’m <span className="grad-text">{profile.name}</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl font-semibold">{profile.tagline}</p>
          <p className="mt-3 h-8 text-lg text-muted" aria-live="off">
            <span className="text-ink font-medium">{typed}</span><span className="ml-0.5 inline-block w-0.5 h-5 align-middle bg-cyan-400 animate-pulse" />
          </p>
          <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-muted leading-relaxed">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
            <a href="/resume.pdf" download="Piyush_Kumar_Mishra_Resume.pdf" className="btn-primary"><Download size={16} /> Download Resume</a>
            <a href="#projects" className="btn-ghost">View Projects</a>
            <a href="#contact" className="btn-ghost">Contact Me</a>
          </div>

          <div className="mt-8 flex justify-center lg:justify-start gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a key={label} href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                aria-label={label} title={label}
                className="glass !rounded-xl p-3 text-muted transition hover:-translate-y-1 hover:text-cyan-500"><Icon size={20} /></a>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="order-1 lg:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-400 opacity-70 blur-xl" aria-hidden="true" />
            <div className="relative h-72 w-60 sm:h-96 sm:w-80 overflow-hidden rounded-[1.75rem] border-2 border-white/20 bg-surface">
              {imgFailed ? (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-violet-700 to-cyan-600 text-6xl font-extrabold text-white" role="img" aria-label="Profile placeholder">PM</div>
              ) : (
                <img src="/profile.png" alt={`Portrait of ${profile.name}`} width="320" height="384" fetchpriority="high"
                  onError={() => setImgFailed(true)} className="h-full w-full object-cover object-top" />
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
