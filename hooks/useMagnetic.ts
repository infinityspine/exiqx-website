import { useRef, useEffect } from "react"

export function useMagnetic<T extends HTMLElement = HTMLElement>(strength: number = 0.15) {
  const ref = useRef<T | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleMove = (e: MouseEvent) => {
      if (!el) return

      const rect = el.getBoundingClientRect()
      const x = e.clientX - (rect.left + rect.width / 2)
      const y = e.clientY - (rect.top + rect.height / 2)

      if (rafRef.current) cancelAnimationFrame(rafRef.current)

      rafRef.current = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`
      })
    }

    const reset = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (el) el.style.transform = "translate3d(0,0,0)"
    }

    el.addEventListener("mousemove", handleMove)
    el.addEventListener("mouseleave", reset)

    return () => {
      el.removeEventListener("mousemove", handleMove)
      el.removeEventListener("mouseleave", reset)
    }
  }, [strength])

  return ref
}

