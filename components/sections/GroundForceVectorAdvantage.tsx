'use client'

import { memo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, staggerChildren } from '@/lib/motionPresets'

interface GroundForceVectorAdvantageProps {
  scrollYProgress?: any
  shouldReduceMotion?: boolean
}

const GroundForceVectorAdvantage = memo(function GroundForceVectorAdvantage({
  scrollYProgress,
  shouldReduceMotion: propShouldReduceMotion
}: GroundForceVectorAdvantageProps) {
  const hookShouldReduceMotion = useReducedMotion()
  const shouldReduceMotion = propShouldReduceMotion ?? hookShouldReduceMotion

  return (
    <section
      id="ground-force-vector-advantage"
      className="relative bg-black border-t border-white/10"
      style={{ 
        paddingTop: 'clamp(5rem, 10vw, 8rem)',
        paddingBottom: 'clamp(5rem, 10vw, 8rem)'
      }}
      aria-labelledby="ground-force-vector-heading"
    >
      <div className="mx-auto max-w-4xl px-6 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
        >
          {/* Centered Heading */}
          <motion.h2
            id="ground-force-vector-heading"
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-[0.05em] text-white text-center"
            style={{ 
              marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
              transform: 'translateZ(0)'
            }}
          >
            GROUND-FORCE VECTOR ADVANTAGE
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-white/70 text-center font-light leading-relaxed"
            style={{ 
              marginBottom: 'clamp(3rem, 6vw, 5rem)'
            }}
          >
            Why forefoot loading creates true closed-chain athletic force production.
          </motion.p>

          {/* SVG Diagram with subtle red glow behind */}
          <motion.div
            variants={fadeUp}
            className="w-full mb-8 relative"
            style={{ marginBottom: 'clamp(3rem, 6vw, 4rem)' }}
          >
            {/* Subtle red radial glow behind SVG */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div 
                className="w-[700px] h-[500px] bg-gradient-radial from-red-600/25 via-red-900/15 to-transparent blur-3xl"
              />
            </div>

            <svg
              viewBox="0 0 900 600"
              preserveAspectRatio="xMidYMid meet"
              className="w-full h-auto relative z-10"
              style={{ maxHeight: '600px' }}
            >
              {/* Background */}
              <rect width="900" height="600" fill="transparent" />

              {/* Angled Footplate */}
              <g id="footplate">
                <rect
                  x="120"
                  y="480"
                  width="220"
                  height="8"
                  fill="#2a2a2a"
                  rx="4"
                />
                <rect
                  x="120"
                  y="480"
                  width="220"
                  height="8"
                  fill="#1a1a1a"
                  rx="4"
                  transform="rotate(-25 230 484)"
                />
              </g>

              {/* Foot pressing forward into angled footplate */}
              <g id="foot">
                {/* Foot outline with white stroke */}
                <path
                  d="M 160 440 Q 190 420 210 430 Q 230 435 250 440 Q 260 445 270 450 L 280 460 L 270 470 Q 260 465 250 460 Q 230 455 210 450 Q 190 445 160 460 Z"
                  fill="#3a3a3a"
                  stroke="#fff"
                  strokeWidth="3"
                />
                {/* Metatarsal heads highlight */}
                <ellipse
                  cx="250"
                  cy="450"
                  rx="28"
                  ry="16"
                  fill="#dc2626"
                  fillOpacity="0.3"
                />
                {/* Back of ankle (for short lever arm) */}
                <circle
                  cx="170"
                  cy="450"
                  r="8"
                  fill="#666"
                  fillOpacity="0.5"
                />
              </g>

              {/* Force arrow starting at metatarsal heads, angled upward */}
              <g id="force-vector">
                <line
                  x1="250"
                  y1="450"
                  x2="280"
                  y2="380"
                  stroke="#dc2626"
                  strokeWidth="4"
                  markerEnd="url(#arrowhead-red)"
                />
                <text
                  x="290"
                  y="400"
                  fill="#dc2626"
                  fontSize="15"
                  fontWeight="600"
                  fontFamily="system-ui, sans-serif"
                >
                  Ground-Force Vector
                </text>
              </g>

              {/* Knee Joint - Axis of Rotation */}
              <g id="knee-joint">
                <circle
                  cx="220"
                  cy="280"
                  r="12"
                  fill="#dc2626"
                  stroke="#fff"
                  strokeWidth="2"
                />
                <circle
                  cx="220"
                  cy="280"
                  r="6"
                  fill="#fff"
                />
                <text
                  x="220"
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

              {/* Long Lever Arm (solid red) from forefoot to knee */}
              <g id="long-lever-arm">
                <line
                  x1="250"
                  y1="450"
                  x2="220"
                  y2="280"
                  stroke="#dc2626"
                  strokeWidth="3"
                />
                <text
                  x="235"
                  y="360"
                  fill="#dc2626"
                  fontSize="14"
                  fontWeight="600"
                  fontFamily="system-ui, sans-serif"
                  transform="rotate(-35 235 360)"
                >
                  Long Lever Arm (d)
                </text>
              </g>

              {/* Short Lever Arm (gray dotted) from back of ankle to knee */}
              <g id="short-lever-arm">
                <line
                  x1="170"
                  y1="450"
                  x2="220"
                  y2="280"
                  stroke="#666"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                  opacity="0.6"
                />
                <text
                  x="195"
                  y="365"
                  fill="#666"
                  fontSize="13"
                  fontFamily="system-ui, sans-serif"
                  transform="rotate(-40 195 365)"
                  opacity="0.7"
                >
                  Short Lever Arm
                </text>
              </g>

              {/* Torque equation T = F × d */}
              <g id="torque-equation">
                <text
                  x="500"
                  y="350"
                  fill="#dc2626"
                  fontSize="20"
                  fontWeight="600"
                  fontFamily="system-ui, sans-serif"
                >
                  T = F × d
                </text>
              </g>

              {/* Arrow marker definition */}
              <defs>
                <marker
                  id="arrowhead-red"
                  markerWidth="12"
                  markerHeight="12"
                  refX="6"
                  refY="6"
                  orient="auto"
                >
                  <polygon
                    points="0,0 12,6 0,12"
                    fill="#dc2626"
                  />
                </marker>
              </defs>
            </svg>
          </motion.div>

          {/* Left-Aligned Body Text */}
          <motion.div
            variants={fadeUp}
            className="text-base sm:text-lg text-white/70 font-light leading-relaxed text-left space-y-6"
          >
            <p>
              Routing force through the metatarsal heads creates an authentic athletic ground-force vector. This mimics the exact force direction seen in sprinting, jumping, and cutting.
            </p>

            <p>
              With forefoot loading, the lever arm from the point of force application to the knee joint dramatically increases—producing more torque and greater muscular demand along the entire posterior chain.
            </p>

            <p>
              This restores true closed-chain mechanics from foot to hip, allowing athletes to train the same force lines required for acceleration, maximal velocity, change of direction, and explosive takeoff.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
})

export default GroundForceVectorAdvantage

