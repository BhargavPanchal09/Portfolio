import { useEffect, useRef } from 'react'
import './ScrollReveal.css'

// Repeat reveals in both scroll directions, independently of hover transforms.
export default function useScrollReveal() {
  const rootRef = useRef(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const elements = [...root.querySelectorAll('[data-reveal]')]
    let frame = 0
    const update = () => {
      frame = 0
      const height = window.innerHeight
      // Batch geometry reads before style writes to avoid layout thrashing.
      const positions = elements.map(element => element.getBoundingClientRect())
      elements.forEach((element, index) => {
        const { top, bottom } = positions[index]
        if (preference.matches) {
          element.dataset.scrollState = 'visible'
        } else if (bottom <= 0 || top >= height) {
          // Reset only once fully outside the viewport, preventing visible exits.
          element.style.setProperty('--reveal-offset', bottom <= 0 ? '-36px' : '36px')
          element.dataset.scrollState = 'pending'
        } else if (top < height * 0.9 && bottom > height * 0.1) {
          element.dataset.scrollState = 'visible'
        }
      })
    }
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }
    elements.forEach(element => {
      element.style.setProperty('--reveal-delay', `${Number(element.dataset.revealDelay || 0)}ms`)
    })
    update()
    root.dataset.scrollReady = 'true'
    const revealFocused = event => {
      const element = event.target.closest('[data-reveal]')
      if (element) element.dataset.scrollState = 'visible'
    }
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    preference.addEventListener('change', schedule)
    root.addEventListener('focusin', revealFocused)
    const resizeObserver = new ResizeObserver(schedule)
    resizeObserver.observe(root)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      preference.removeEventListener('change', schedule)
      root.removeEventListener('focusin', revealFocused)
      resizeObserver.disconnect()
      delete root.dataset.scrollReady
      elements.forEach(element => {
        delete element.dataset.scrollState
        element.style.removeProperty('--reveal-offset')
        element.style.removeProperty('--reveal-delay')
      })
    }
  }, [])

  return rootRef
}
