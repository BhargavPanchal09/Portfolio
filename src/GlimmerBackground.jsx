import { useEffect, useState } from 'react'
import './GlimmerBackground.css'

function GlimmerBackground() {
  const [glimmers, setGlimmers] = useState([])

  useEffect(() => {
    const particles = Array.from({ length: 70 }, (_, index) => ({
      id: index,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 8,
      duration: Math.random() * 5 + 6,
    }))

    setGlimmers(particles)
  }, [])

  return (
    <div className="glimmer-background" aria-hidden="true">
      {glimmers.map((glimmer) => (
        <span
          key={glimmer.id}
          className="glimmer"
          style={{
            left: `${glimmer.left}%`,
            top: `${glimmer.top}%`,
            width: `${glimmer.size}px`,
            height: `${glimmer.size}px`,
            animationDelay: `${glimmer.delay}s`,
            animationDuration: `${glimmer.duration}s`,
          }}
        />
      ))}
    </div>
  )
}

export default GlimmerBackground