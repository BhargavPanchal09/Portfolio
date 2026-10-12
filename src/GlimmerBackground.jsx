import { useEffect, useState } from 'react'
import './GlimmerBackground.css'

const initialGlimmers = Array.from({ length: 180 }, (_, index) => ({
  id: index,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: Math.random() * 3 + 1,
  delay: Math.random() * 8,
  duration: Math.random() * 5 + 6,
}))

function GlimmerBackground() {
  const [cursor, setCursor] = useState({ x: -1000, y: -1000 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="glimmer-background" aria-hidden="true">
      <div
        className="cursor-glow"
        style={{
          left: `${cursor.x}px`,
          top: `${cursor.y}px`,
        }}
      />

      {initialGlimmers.map((glimmer) => (
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
