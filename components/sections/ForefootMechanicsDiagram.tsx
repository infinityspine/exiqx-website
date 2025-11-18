'use client'

import { memo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, staggerChildren } from '@/lib/motionPresets'

interface ForefootMechanicsDiagramProps {
  scrollYProgress?: any
  shouldReduceMotion?: boolean
}

const ForefootMechanicsDiagram = memo(function ForefootMechanicsDiagram({
  scrollYProgress,
  shouldReduceMotion: propShouldReduceMotion
}: ForefootMechanicsDiagramProps) {
  const hookShouldReduceMotion = useReducedMotion()
  const shouldReduceMotion = propShouldReduceMotion ?? hookShouldReduceMotion

  return (
    <section
      id="forefoot-mechanics-diagram"
      className="relative bg-black border-t border-white/10"
      style={{ 
        paddingTop: 'clamp(5rem, 10vw, 8rem)',
        paddingBottom: 'clamp(5rem, 10vw, 8rem)'
      }}
      aria-labelledby="forefoot-mechanics-heading"
    >
      {/* Subtle red glow background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-red-600/8 via-red-900/4 to-transparent blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
        >
          {/* Centered Heading */}
          <motion.h2
            id="forefoot-mechanics-heading"
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-[0.05em] text-white text-center"
            style={{ 
              marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
              transform: 'translateZ(0)'
            }}
          >
            THE FOREFOOT MECHANICS ADVANTAGE
          </motion.h2>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-white/70 text-center font-light leading-relaxed"
            style={{ 
              marginBottom: 'clamp(3rem, 6vw, 5rem)'
            }}
          >
            Why routing force through the metatarsals increases torque and performance.
          </motion.p>

          {/* Biomechanical Diagram */}
          <motion.div
            variants={fadeUp}
            className="w-full mb-8"
            style={{ marginBottom: 'clamp(3rem, 6vw, 4rem)' }}
          >
            <svg
              viewBox="0 0 800 600"
              preserveAspectRatio="xMidYMid meet"
              className="w-full h-auto"
              style={{ maxHeight: '600px' }}
            >
              {/* Background */}
              <rect width="800" height="600" fill="transparent" />

              {/* Angled Footplate */}
              <g id="footplate">
                {/* Footplate base */}
                <rect
                  x="100"
                  y="450"
                  width="200"
                  height="8"
                  fill="#2a2a2a"
                  rx="4"
                />
                {/* Angled surface */}
                <rect
                  x="100"
                  y="450"
                  width="200"
                  height="8"
                  fill="#1a1a1a"
                  rx="4"
                  transform="rotate(-25 200 454)"
                />
                {/* Footplate label */}
                <text
                  x="200"
                  y="480"
                  fill="#666"
                  fontSize="14"
                  textAnchor="middle"
                  fontFamily="system-ui, sans-serif"
                >
                  Angled Footplate
                </text>
              </g>

              {/* Foot pressing into footplate */}
              <g id="foot">
                {/* Foot outline */}
                <path
                  d="M 150 420 Q 180 400 200 410 Q 220 415 240 420 Q 250 425 260 430 L 270 440 L 260 450 Q 250 445 240 440 Q 220 435 200 430 Q 180 425 150 440 Z"
                  fill="#3a3a3a"
                  stroke="#555"
                  strokeWidth="2"
                />
                {/* Forefoot highlight */}
                <ellipse
                  cx="240"
                  cy="430"
                  rx="25"
                  ry="15"
                  fill="#dc2626"
                  fillOpacity="0.3"
                />
                {/* Force vector arrow at forefoot */}
                <g id="force-vector">
                  <line
                    x1="240"
                    y1="430"
                    x2="240"
                    y2="380"
                    stroke="#dc2626"
                    strokeWidth="3"
                    markerEnd="url(#arrowhead-red)"
                  />
                  <text
                    x="250"
                    y="400"
                    fill="#dc2626"
                    fontSize="14"
                    fontWeight="600"
                    fontFamily="system-ui, sans-serif"
                  >
                    F
                  </text>
                </g>
              </g>

              {/* Knee Joint - Axis of Rotation */}
              <g id="knee-joint">
                <circle
                  cx="200"
                  cy="280"
                  r="12"
                  fill="#dc2626"
                  stroke="#fff"
                  strokeWidth="2"
                />
                <circle
                  cx="200"
                  cy="280"
                  r="6"
                  fill="#fff"
                />
                <text
                  x="200"
                  y="260"
                  fill="#dc2626"
                  fontSize="13"
                  fontWeight="600"
                  textAnchor="middle"
                  fontFamily="system-ui, sans-serif"
                >
                  Knee Joint – Axis of Rotation
                </text>
              </g>

              {/* Increased Lever Arm (ExIQx - solid line) */}
              <g id="increased-lever-arm">
                <line
                  x1="240"
                  y1="430"
                  x2="200"
                  y2="280"
                  stroke="#dc2626"
                  strokeWidth="3"
                  strokeDasharray="none"
                />
                <text
                  x="220"
                  y="350"
                  fill="#dc2626"
                  fontSize="14"
                  fontWeight="600"
                  fontFamily="system-ui, sans-serif"
                  transform="rotate(-35 220 350)"
                >
                  Increased Lever Arm (d)
                </text>
              </g>

              {/* Traditional Lever Arm (dotted line) */}
              <g id="traditional-lever-arm">
                <line
                  x1="180"
                  y1="440"
                  x2="200"
                  y2="280"
                  stroke="#666"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.6"
                />
                <text
                  x="190"
                  y="360"
                  fill="#666"
                  fontSize="13"
                  fontFamily="system-ui, sans-serif"
                  transform="rotate(-40 190 360)"
                  opacity="0.7"
                >
                  Traditional Lever Arm
                </text>
              </g>

              {/* Torque Equation */}
              <g id="torque-equation">
                <text
                  x="400"
                  y="350"
                  fill="#dc2626"
                  fontSize="20"
                  fontWeight="600"
                  fontFamily="system-ui, sans-serif"
                >
                  T = F × d
                </text>
                <text
                  x="400"
                  y="375"
                  fill="#888"
                  fontSize="14"
                  fontFamily="system-ui, sans-serif"
                >
                  Torque = Force × Lever Arm
                </text>
              </g>

              {/* Arrow marker definition */}
              <defs>
                <marker
                  id="arrowhead-red"
                  markerWidth="10"
                  markerHeight="10"
                  refX="5"
                  refY="5"
                  orient="auto"
                >
                  <polygon
                    points="0,0 10,5 0,10"
                    fill="#dc2626"
                  />
                </marker>
              </defs>
            </svg>
          </motion.div>

          {/* Explanation Paragraph */}
          <motion.div
            variants={fadeUp}
            className="text-base sm:text-lg text-white/70 font-light leading-relaxed text-left max-w-4xl mx-auto"
          >
            <p>
              Shifting the force application point to the forefoot increases the moment arm relative to the knee, resulting in significantly higher eccentric torque demand. This produces greater hamstring, glute, and calf loading while preserving a natural ground-force pathway.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
})

export default ForefootMechanicsDiagram

