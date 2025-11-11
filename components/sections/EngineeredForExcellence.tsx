'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Ruler, Zap, Award, Shield } from 'lucide-react'

// ============================================================================
// Types & Data
// ============================================================================

interface Feature {
  title: string
  body: string
  icon: 'ruler' | 'zap' | 'award' | 'shield'
}

interface EngineeredForExcellenceSectionProps {
  sectionTitle?: string
  sectionSubtitle?: string
  features: Feature[]
}

const iconMap = {
  ruler: Ruler,
  zap: Zap,
  award: Award,
  shield: Shield,
}

// ============================================================================
// Animation Variants
// ============================================================================

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * i,
      duration: 0.35,
      ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number],
    },
  }),
}

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number],
    },
  },
}

// ============================================================================
// Component
// ============================================================================

export function EngineeredForExcellenceSection({
  sectionTitle = 'Engineered for Excellence',
  sectionSubtitle = 'Four pillars of biomechanical superiority',
  features,
}: EngineeredForExcellenceSectionProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative w-full bg-black py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-10">
        {/* Section header */}
        <motion.div
          className="w-full flex flex-col items-center text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={headerVariants}
        >
          <p className="text-sm font-semibold tracking-[0.25em] text-red-500 mb-3 uppercase">
            {sectionTitle}
          </p>
          <h2 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl font-montserrat">
            {sectionSubtitle}
          </h2>
        </motion.div>

        {/* Feature cards */}
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4 items-stretch">
          {features.map((feature, i) => {
            const IconComponent = iconMap[feature.icon]

            return (
              <motion.article
                key={feature.title}
                className="group flex h-full flex-col justify-between rounded-3xl border border-red-900/40 bg-gradient-to-b from-zinc-950/98 via-zinc-950/96 to-black/98 px-7 py-8 text-left shadow-[0_18px_45px_rgba(0,0,0,0.6)] transition-shadow duration-300 cursor-default"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
                variants={cardVariants}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -6,
                        scale: 1.02,
                        boxShadow: '0 20px 50px rgba(220, 38, 38, 0.25)',
                        transition: {
                          duration: 0.35,
                          ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number],
                        },
                      }
                }
                whileTap={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: 0.98,
                        transition: {
                          duration: 0.15,
                          ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number],
                        },
                      }
                }
              >
                <div>
                  {/* Icon */}
                  <motion.span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-red-900/30 transition-colors duration-300 group-hover:bg-red-900/50"
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : {
                            scale: 1.1,
                            rotate: 5,
                            transition: {
                              duration: 0.3,
                              ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number],
                            },
                          }
                    }
                  >
                    <IconComponent className="h-5 w-5 text-red-500 group-hover:text-red-400 transition-colors duration-300" />
                  </motion.span>

                  {/* Title */}
                  <h3 className="mt-6 text-xl font-extrabold leading-snug text-white tracking-tight uppercase font-montserrat">
                    {feature.title}
                  </h3>

                  {/* Body */}
                  <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed font-inter">
                    {feature.body}
                  </p>
                </div>

                {/* Decorative line */}
                <div className="mt-6 h-[3px] w-16 rounded-full bg-red-700/70 group-hover:w-24 group-hover:bg-red-400 transition-all duration-300 ease-out" />
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default EngineeredForExcellenceSection
