'use client'

import { useReducedMotion } from 'framer-motion'

interface ExIQxAtmosphereProps {
  intensity?: 'subtle' | 'medium' | 'strong'
}

export default function ExIQxAtmosphere({ intensity = 'subtle' }: ExIQxAtmosphereProps) {
  const shouldReduceMotion = !!useReducedMotion()

  if (shouldReduceMotion) {
    return (
      <div
        className="fixed inset-0 pointer-events-none -z-10"
        style={{
          background: `
            radial-gradient(ellipse at bottom, rgba(229, 9, 20, 0.08) 0%, transparent 60%),
            linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.3) 100%)
          `,
        }}
        aria-hidden="true"
      />
    )
  }

  const intensityMap = {
    subtle: {
      gradient: 'rgba(229, 9, 20, 0.06)',
      vignette: 'rgba(0, 0, 0, 0.2)',
      pattern: 'rgba(229, 9, 20, 0.01)',
    },
    medium: {
      gradient: 'rgba(229, 9, 20, 0.12)',
      vignette: 'rgba(0, 0, 0, 0.4)',
      pattern: 'rgba(229, 9, 20, 0.02)',
    },
    strong: {
      gradient: 'rgba(229, 9, 20, 0.18)',
      vignette: 'rgba(0, 0, 0, 0.6)',
      pattern: 'rgba(229, 9, 20, 0.03)',
    },
  }

  const colors = intensityMap[intensity]

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 will-change-[opacity]"
      style={{
        transform: 'translateZ(0)',
        background: `
          radial-gradient(ellipse at bottom, ${colors.gradient} 0%, transparent 60%),
          linear-gradient(180deg, transparent 0%, ${colors.vignette} 100%),
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            ${colors.pattern} 2px,
            ${colors.pattern} 4px
          )
        `,
        opacity: 1,
      }}
      aria-hidden="true"
    />
  )
}

