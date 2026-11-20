import { ArrowUp, Code2, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'

export default function Footer() {
  const socials = [
    { Icon: Linkedin, label: 'LinkedIn', href: profile.links.linkedin },
    { Icon: Github, label: 'GitHub', href: profile.links.github },
    { Icon: Code2, label: 'LeetCode', href: profile.links.leetcode },
    { Icon: Mail, label: 'Email', href: `mailto:${profile.email}` },
  ]
  return (
    <footer className="border-t border-line/60 px-4 sm:px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 text-center">
        <p className="text-lg font-bold grad-text">{profile.name}</p>
        <p className="text-sm text-muted">Turning Data Into Insights, Ideas Into Innovation.</p>
        <div className="flex gap-3">
          {socials.map(({ Icon, label, href }) => (
            <a key={label} href={href} aria-label={label} title={label} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="rounded-xl border border-line p-2.5 text-muted transition hover:border-cyan-400 hover:text-cyan-500"><Icon size={18} /></a>
          ))}
        </div>
        <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <a href="#home" className="btn-ghost !py-2 !text-xs"><ArrowUp size={14} /> Back to top</a>
        </div>
      </div>
    </footer>
  )
}
