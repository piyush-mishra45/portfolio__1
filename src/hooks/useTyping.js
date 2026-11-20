import { useEffect, useState } from 'react'

export default function useTyping(words, speed = 80, pause = 1400) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[i % words.length]
    const done = !deleting && text === word
    const empty = deleting && text === ''
    const delay = done ? pause : deleting ? speed / 2 : speed
    const id = setTimeout(() => {
      if (done) setDeleting(true)
      else if (empty) { setDeleting(false); setI((n) => n + 1) }
      else setText(word.slice(0, text.length + (deleting ? -1 : 1)))
    }, delay)
    return () => clearTimeout(id)
  }, [text, deleting, i, words, speed, pause])

  return text
}
