/**
 * FootplateFeatures Component - ELITE VERSION
 * 
 * Purpose: Showcase technical specifications and key features
 * of the rack-mounted footplate product.
 * 
 * Features:
 * - Elite glassmorphic card design
 * - Sophisticated hover animations with glow effects
 * - Enhanced icon treatment with gradient backgrounds
 * - Premium typography hierarchy
 * - Dramatic depth and shadows
 * - Optimized performance with reduced motion support
 */

'use client'

import { memo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, staggerChildren } from '@/lib/motionPresets'
import { Shield, Ruler, Zap } from 'lucide-react'

interface FootplateFeaturesProps {
  scrollYProgress?: any
  shouldReduceMotion?: boolean
}

const FootplateFeatures = memo(function FootplateFeatures({
  scrollYProgress,
  shouldReduceMotion: propShouldReduceMotion
}: FootplateFeaturesProps) {
  const hookShouldReduceMotion = useReducedMotion()
  const shouldReduceMotion = propShouldReduceMotion ?? hookShouldReduceMotion

  const features = [
    {
      icon: Shield,
      title: 'PLANTAR SURFACE LOADING',
      description: 'Routes force through the ball of the foot—not the posterior ankle of traditional Nordics. Trains authentic athletic force transmission.'
    },
    {
      icon: Ruler,
      title: 'PRECISION CONSTRUCTION',
      description: 'CNC-machined aluminum and steel. Engineered and manufactured in Arizona to commercial facility standards.'
    },
    {
      icon: Zap,
      title: 'ADJUSTABLE ROM (10°–70°)',
      description: 'Progressive plantarflexion angles from assisted beginner progressions to advanced unassisted variations.'
    }
  ]

  return (
    <section
      id="technical-specifications"
      className="relative bg-[#0A0A0A] border-t border-red-500/20 py-[clamp(4rem,10vw,7rem)]"
      aria-labelledby="technical-specifications-heading"
    >
      {/* Ambient gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-red-600/8 via-red-900/4 to-transparent blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div 
          className="mb-[clamp(2rem,5vw,4rem)] text-center flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
        >
          <motion.h2
            id="technical-specifications-heading"
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-[0.05em] text-white text-center"
            style={{
              transform: 'translateZ(0)'
            }}
          >
            TECHNICAL SPECIFICATIONS
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed max-w-prose mx-auto text-center"
            style={{
              transform: 'translateZ(0)'
            }}
          >
            Plantar surface loading system for elite athletes, training facilities, and rehabilitation programs.
          </motion.p>
        </motion.div>

        {/* Feature Grid - Elite Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full items-stretch max-w-7xl mx-auto gap-6 lg:gap-8"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon

            return (
              <motion.div
                key={index}
                variants={fadeUp}
                className="group flex"
              >
                <motion.div
                  whileHover={shouldReduceMotion ? {} : {
                    y: -12,
                    borderColor: 'rgba(220, 38, 38, 0.4)',
                    boxShadow: '0 20px 60px rgba(220, 38, 38, 0.15), 0 0 40px rgba(220, 38, 38, 0.1)',
                    transition: {
                      duration: 0.3,
                      ease: [0.77, 0, 0.175, 1]
                    }
                  }}
                  className="bg-[#0F0F0F] border border-red-500/20 rounded-2xl transition-all duration-300 flex flex-col justify-between w-full relative overflow-hidden"
                  style={{
                    padding: 'clamp(2rem, 3.5vw, 2.75rem)',
                    minHeight: 'clamp(320px, 35vh, 380px)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                  }}
                >
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="text-left flex-1 flex flex-col relative z-10">
                    {/* Icon Container - Elite Treatment */}
                    <div className="relative">
                      <motion.div
                        whileHover={shouldReduceMotion ? {} : {
                          scale: 1.15,
                          rotate: 8,
                          transition: {
                            duration: 0.3,
                            ease: [0.77, 0, 0.175, 1]
                          }
                        }}
                        className="bg-gradient-to-br from-red-600/20 to-red-600/10 backdrop-blur-sm rounded-xl flex items-center justify-center relative"
                        style={{
                          width: 'clamp(3.5rem, 6vw, 4rem)',
                          height: 'clamp(3.5rem, 6vw, 4rem)',
                          marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
                          boxShadow: '0 0 20px rgba(220, 38, 38, 0.2)',
                        }}
                        aria-hidden="true"
                      >
                        {/* Glow effect behind icon */}
                        <motion.div
                          initial={{ opacity: 0.3, scale: 1 }}
                          whileHover={shouldReduceMotion ? {} : {
                            opacity: 0.7,
                            scale: 1.2,
                            transition: { duration: 0.3 }
                          }}
                          className="absolute inset-0 bg-red-600/40 rounded-xl blur-xl"
                        />
                        
                        <IconComponent
                          className="text-red-500 relative z-10"
                          style={{
                            width: 'clamp(1.75rem, 3vw, 2rem)',
                            height: 'clamp(1.75rem, 3vw, 2rem)',
                          }}
                        />
                      </motion.div>
                    </div>

                    {/* Title - Enhanced */}
                    <h3
                      className="font-bold text-white font-montserrat uppercase"
                      style={{
                        fontSize: 'clamp(1.15rem, 2.2vw, 1.35rem)',
                        lineHeight: '1.25',
                        letterSpacing: '-0.01em',
                        marginBottom: 'clamp(0.9rem, 1.8vw, 1.2rem)',
                      }}
                    >
                      {feature.title}
                    </h3>

                    {/* Description - Enhanced */}
                    <p
                      className="text-gray-400 font-inter flex-1"
                      style={{
                        fontSize: 'clamp(0.9rem, 1.6vw, 1rem)',
                        lineHeight: '1.75',
                        letterSpacing: '0.01em',
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative Line - Enhanced */}
                  {!shouldReduceMotion && (
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileInView={{ opacity: 1, scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                      className="bg-gradient-to-r from-red-600 via-red-600/60 to-transparent origin-left relative"
                      style={{
                        marginTop: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                        height: '2px',
                        boxShadow: '0 0 10px rgba(220,38,38,0.4)',
                      }}
                    />
                  )}
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Link - Elite Styling */}
        <motion.div 
          className="flex justify-center"
          style={{
            marginTop: 'clamp(3rem, 6vw, 5rem)',
          }}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.a
            href="/specifications"
            whileHover={{
              scale: shouldReduceMotion ? 1 : 1.02,
              x: shouldReduceMotion ? 0 : 4,
            }}
            whileTap={{ scale: shouldReduceMotion ? 1 : 0.98 }}
            className="group inline-flex items-center gap-3 text-white font-semibold uppercase tracking-[0.2em] transition-all duration-300"
            style={{
              fontSize: 'clamp(0.7rem, 1.2vw, 0.8rem)',
            }}
          >
            <span className="relative">
              View Full Specifications
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-600 to-red-600/40 transform origin-left transition-transform duration-300 group-hover:scale-x-110" />
            </span>
            <motion.span
              animate={{
                x: shouldReduceMotion ? 0 : [0, 4, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-red-500"
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
})

export default FootplateFeatures