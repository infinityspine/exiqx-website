'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface HeroMediaProps {
  src: string
  alt: string
  priority?: boolean
  className?: string
  aspect?: '16:9' | '4:3' | 'square' | 'cinematic'
  rounded?: boolean
  shadow?: boolean
}

const aspectRatioMap = {
  '16:9': 'aspect-video',
  '4:3': 'aspect-[4/3]',
  square: 'aspect-square',
  cinematic: 'aspect-[21/9]',
}

export default function HeroMedia({
  src,
  alt,
  priority = false,
  className = '',
  aspect = 'cinematic',
  rounded = true,
  shadow = true,
}: HeroMediaProps) {
  return (
    <motion.div
      className={`
        relative
        ${aspectRatioMap[aspect]}
        overflow-hidden
        bg-zinc-950
        border border-white/5
        ${rounded ? 'rounded-3xl' : ''}
        ${shadow ? 'shadow-2xl' : ''}
        will-change-transform
        ${className}
      `}
      style={{ transform: 'translateZ(0)' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={85}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 1200px"
        loading={priority ? undefined : 'lazy'}
        className="object-cover"
      />
    </motion.div>
  )
}

