import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('on')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    document.querySelectorAll('.jad-reveal').forEach((el) => revealObserver.observe(el))

    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          countObserver.unobserve(entry.target)
          const el = entry.target
          const target = parseInt(el.dataset.count, 10)
          const suffix = el.dataset.suffix || ''
          const start = performance.now()
          const duration = 1400
          const step = (now) => {
            const progress = Math.min(1, (now - start) / duration)
            el.textContent = Math.round(target * (1 - Math.pow(1 - progress, 3))) + suffix
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        })
      },
      { threshold: 0.5 },
    )
    document.querySelectorAll('[data-count]').forEach((el) => countObserver.observe(el))

    return () => {
      revealObserver.disconnect()
      countObserver.disconnect()
    }
  }, [])
}
