import * as L from 'lucide-react'

// Resolve a lucide icon by name so data files stay plain JS.
export function Icon({ name, ...props }) {
  const C = L[name] || L.Circle
  return <C aria-hidden="true" {...props} />
}
