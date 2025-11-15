'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motionPresets'

interface SectionDividerProps {
  align?: 'center' | 'left' | 'right'
  label?: string
}

export default function SectionDivider({ align = 'center', label }: SectionDividerProps) {
  const alignMap = {
    center: 'mx-auto',
    left: 'mr-auto',
    right: 'ml-auto',
  }

  return (
    <motion.div
      className={`relative h-px max-w-7xl ${alignMap[align]} my-16 lg:my-24`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp}
      style={{ transform: 'translateZ(0)' }}
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0"
        style={{
          boxShadow: '0 0 20px rgba(229, 9, 20, 0.14)',
        }}
      />
      {label && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-black">
          <span className="text-xs uppercase tracking-[0.2em] text-red-500/60 font-semibold">
            {label}
          </span>
        </div>
      )}
    </motion.div>
  )
}

