import { useEffect, useRef } from 'react'
import './ScrollTools.css'

export default function ScrollTools({ onSectionChange }) {
  const toolsRef = useRef(null)

  useEffect(() => {
    let frame = 0
    const hero = document.querySelector('.hero-stage')
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => {
      frame = 0
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0
      toolsRef.current?.style.setProperty('--scroll-progress', progress)
      if (hero) {
        const bounds = hero.getBoundingClientRect()
        const travelled = Math.max(0, -bounds.top) / Math.max(1, bounds.height)
        // Keep the artwork visible through most of the hero. Fade only near its
        // final edge so a hidden statue does not leave a large empty viewport.
        const fade = Math.min(1, Math.max(0, (travelled - 0.7) / 0.2))
        const smoothFade = fade * fade * (3 - 2 * fade)
        hero.style.setProperty('--statue-opacity', motionPreference.matches ? '1' : String(1 - smoothFade))
      }
      const sections = ['home', 'work', 'about', 'contact']
      let active = 0
      sections.forEach((id, index) => {
        if (document.getElementById(id)?.getBoundingClientRect().top <= 180) active = index
      })
      if (scrollable > 0 && window.scrollY >= scrollable - 4) active = 3
      onSectionChange(active)
    }
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    motionPreference.addEventListener('change', schedule)
    const resizeObserver = new ResizeObserver(schedule)
    resizeObserver.observe(document.body)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      motionPreference.removeEventListener('change', schedule)
      hero?.style.removeProperty('--statue-opacity')
      resizeObserver.disconnect()
    }
  }, [onSectionChange])

  return (
    <div className="scroll-tools" ref={toolsRef}>
      <div className="scroll-progress" aria-hidden="true" />
    </div>
  )
}
