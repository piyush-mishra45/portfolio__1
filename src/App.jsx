import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import Background from './components/Background'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import CodingProfiles from './components/CodingProfiles'
import Contact from './components/Contact'
import Footer from './components/Footer'

function initialTheme() {
  try { return localStorage.getItem('theme') || 'dark' } catch { return 'dark' }
}

export default function App() {
  const [theme, setTheme] = useState(initialTheme)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    try { localStorage.setItem('theme', theme) } catch { /* storage unavailable */ }
  }, [theme])

  useEffect(() => {
    const id = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(id)
  }, [])

  const toggleTheme = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), [])

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>
      <Background />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <CodingProfiles />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
