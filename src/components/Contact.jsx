import { useState } from 'react'
import { Code2, Github, Linkedin, Mail, MapPin, Phone, Send, User } from 'lucide-react'
import Section from './Section'
import { profile } from '../data/profile'

const env = import.meta.env
const configured = env.VITE_EMAILJS_SERVICE_ID && env.VITE_EMAILJS_TEMPLATE_ID && env.VITE_EMAILJS_PUBLIC_KEY
const input = 'w-full rounded-xl border border-line bg-bg/60 px-4 py-3 text-sm outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState({ type: 'idle', msg: '' })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ type: 'loading', msg: '' })
    try {
      if (configured) {
        const { default: emailjs } = await import('@emailjs/browser')
        await emailjs.send(
          env.VITE_EMAILJS_SERVICE_ID,
          env.VITE_EMAILJS_TEMPLATE_ID,
          { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message, to_email: profile.email },
          { publicKey: env.VITE_EMAILJS_PUBLIC_KEY },
        )
        setStatus({ type: 'success', msg: 'Thank you! Your message has been sent.' })
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        const body = `${form.message}\n\n— ${form.name} (${form.email})`
        window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`
        setStatus({ type: 'success', msg: 'Opening your email app to send the message.' })
      }
    } catch {
      setStatus({ type: 'error', msg: `Could not send the message. Please email me directly at ${profile.email}.` })
    }
  }

  const info = [
    { Icon: User, label: 'Name', value: profile.name },
    { Icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { Icon: Phone, label: 'Phone', value: profile.phone, href: profile.phoneHref },
    { Icon: MapPin, label: 'Location', value: profile.location },
  ]
  const socials = [
    { Icon: Linkedin, label: 'LinkedIn', href: profile.links.linkedin },
    { Icon: Github, label: 'GitHub', href: profile.links.github },
    { Icon: Code2, label: 'LeetCode', href: profile.links.leetcode },
    { Icon: Mail, label: 'Email', href: `mailto:${profile.email}` },
    { Icon: Phone, label: 'Phone', href: profile.phoneHref },
  ]

  return (
    <Section id="contact" title="Let’s Connect and Build Something Great!" subtitle="Open to data analytics, Python and machine learning opportunities">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="glass p-6 sm:p-8 min-w-0">
          <ul className="space-y-5">
            {info.map(({ Icon, label, value, href }) => (
              <li key={label} className="flex items-start gap-4">
                <div className="shrink-0 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 p-2.5 text-white"><Icon size={18} /></div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-muted">{label}</p>
                  {href ? <a href={href} className="font-medium hover:text-cyan-500">{value}</a> : <p className="font-medium">{value}</p>}
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            {socials.map(({ Icon, label, href }) => (
              <a key={label} href={href} aria-label={label} title={label} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="rounded-xl border border-line p-3 text-muted transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-500"><Icon size={20} /></a>
            ))}
          </div>
        </div>

        <form onSubmit={submit} className="glass p-6 sm:p-8 space-y-4 min-w-0">
          <div><label htmlFor="name" className="mb-1.5 block text-sm font-medium">Full Name</label><input id="name" required autoComplete="name" value={form.name} onChange={set('name')} className={input} /></div>
          <div><label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email Address</label><input id="email" type="email" required autoComplete="email" value={form.email} onChange={set('email')} className={input} /></div>
          <div><label htmlFor="subject" className="mb-1.5 block text-sm font-medium">Subject</label><input id="subject" required value={form.subject} onChange={set('subject')} className={input} /></div>
          <div><label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message</label><textarea id="message" required rows={5} value={form.message} onChange={set('message')} className={`${input} resize-y`} /></div>
          <button type="submit" disabled={status.type === 'loading'} className="btn-primary w-full disabled:opacity-60"><Send size={16} />{status.type === 'loading' ? 'Sending…' : 'Send Message'}</button>
          <p role="status" aria-live="polite" className={`text-sm ${status.type === 'error' ? 'text-red-500' : 'text-emerald-500'}`}>{status.msg}</p>
        </form>
      </div>
    </Section>
  )
}
