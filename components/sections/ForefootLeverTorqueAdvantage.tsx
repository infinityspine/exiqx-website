'use client'

import { memo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, staggerChildren } from '@/lib/motionPresets'

interface ForefootLeverTorqueAdvantageProps {
  scrollYProgress?: any
  shouldReduceMotion?: boolean
}

const ForefootLeverTorqueAdvantage = memo(function ForefootLeverTorqueAdvantage({
  scrollYProgress,
  shouldReduceMotion: propShouldReduceMotion
}: ForefootLeverTorqueAdvantageProps) {
  const hookShouldReduceMotion = useReducedMotion()
  const shouldReduceMotion = propShouldReduceMotion ?? hookShouldReduceMotion

  return (
    <section
      id="forefoot-lever-torque-advantage"
      className="relative bg-black border-t border-white/10"
      style={{ 
        paddingTop: 'clamp(5rem, 10vw, 8rem)',
        paddingBottom: 'clamp(5rem, 10vw, 8rem)'
      }}
      aria-labelledby="forefoot-lever-torque-heading"
    >
      {/* Subtle red glow background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-red-600/8 via-red-900/4 to-transparent blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-4xl px-6 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
        >
          {/* Centered Uppercase Title */}
          <motion.h2
            id="forefoot-lever-torque-heading"
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-[0.05em] text-white text-center"
            style={{ 
              marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
              transform: 'translateZ(0)'
            }}
          >
            THE FOREFOOT LEVER–TORQUE ADVANTAGE
          </motion.h2>

          {/* Left-Aligned Body Text - Paragraph 1 */}
          <motion.div
            variants={fadeUp}
            className="text-base sm:text-lg text-white/70 font-light leading-relaxed text-left"
          >
            <p style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
              Traditional Nordic benches route force through the back of the ankle. This shortens the lever arm between force application and the knee joint, reducing torque and reducing total muscular demand.
            </p>

            {/* SVG Diagram */}
            <div className="relative my-8" style={{ marginTop: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
              {/* Subtle red radial glow behind diagram */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div 
                  className="w-[600px] h-[400px] bg-gradient-radial from-red-600/10 via-red-900/5 to-transparent blur-3xl"
                />
              </div>

              <svg
                viewBox="0 0 700 500"
                preserveAspectRatio="xMidYMid meet"
                className="w-full h-auto relative z-10"
                style={{ maxHeight: '500px' }}
              >
                {/* Background */}
                <rect width="700" height="500" fill="transparent" />

                {/* Angled Footplate */}
                <g id="footplate">
                  <rect
                    x="80"
                    y="380"
                    width="180"
                    height="6"
                    fill="#2a2a2a"
                    rx="3"
                  />
                  <rect
                    x="80"
                    y="380"
                    width="180"
                    height="6"
                    fill="#1a1a1a"
                    rx="3"
                    transform="rotate(-25 170 383)"
                  />
                </g>

                {/* Foot pressing on angled footplate */}
                <g id="foot">
                  <path
                    d="M 120 350 Q 150 330 170 340 Q 190 345 210 350 Q 220 355 230 360 L 240 370 L 230 380 Q 220 375 210 370 Q 190 365 170 360 Q 150 355 120 370 Z"
                    fill="#3a3a3a"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  {/* Forefoot highlight */}
                  <ellipse
                    cx="210"
                    cy="360"
                    rx="22"
                    ry="12"
                    fill="#dc2626"
                    fillOpacity="0.3"
                  />
                  {/* Back of ankle (for short lever arm) */}
                  <circle
                    cx="150"
                    cy="360"
                    r="6"
                    fill="#666"
                    fillOpacity="0.5"
                  />
                </g>

                {/* Force vector at forefoot labeled "F" */}
                <g id="force-vector">
                  <line
                    x1="210"
                    y1="360"
                    x2="210"
                    y2="320"
                    stroke="#dc2626"
                    strokeWidth="3"
                    markerEnd="url(#arrowhead-red)"
                  />
                  <text
                    x="220"
                    y="335"
                    fill="#dc2626"
                    fontSize="16"
                    fontWeight="600"
                    fontFamily="system-ui, sans-serif"
                  >
                    F
                  </text>
                </g>

                {/* Knee axis labeled */}
                <g id="knee-joint">
                  <circle
                    cx="180"
                    cy="240"
                    r="10"
                    fill="#dc2626"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <circle
                    cx="180"
                    cy="240"
                    r="5"
                    fill="#fff"
                  />
                  <text
                    x="180"
                    y="220"
                    fill="#dc2626"
                    fontSize="12"
                    fontWeight="600"
                    textAnchor="middle"
                    fontFamily="system-ui, sans-serif"
                  >
                    Knee Axis
                  </text>
                </g>

                {/* Long lever arm (solid red line) labeled "Lever Arm (d)" */}
                <g id="long-lever-arm">
                  <line
                    x1="210"
                    y1="360"
                    x2="180"
                    y2="240"
                    stroke="#dc2626"
                    strokeWidth="3"
                  />
                  <text
                    x="195"
                    y="300"
                    fill="#dc2626"
                    fontSize="13"
                    fontWeight="600"
                    fontFamily="system-ui, sans-serif"
                    transform="rotate(-35 195 300)"
                  >
                    Lever Arm (d)
                  </text>
                </g>

                {/* Short lever arm (dotted gray) labeled "Traditional" */}
                <g id="short-lever-arm">
                  <line
                    x1="150"
                    y1="360"
                    x2="180"
                    y2="240"
                    stroke="#666"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    opacity="0.6"
                  />
                  <text
                    x="165"
                    y="300"
                    fill="#666"
                    fontSize="12"
                    fontFamily="system-ui, sans-serif"
                    transform="rotate(-40 165 300)"
                    opacity="0.7"
                  >
                    Traditional
                  </text>
                </g>

                {/* Torque formula "T = F × d" small under diagram */}
                <g id="torque-formula">
                  <text
                    x="450"
                    y="350"
                    fill="#dc2626"
                    fontSize="18"
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
            </div>

            {/* Paragraph 2 */}
            <p style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
              The ExIQx Footplate applies force through the metatarsal heads—the true ground-contact point in sprinting, cutting, and jumping. This longer moment arm increases torque at the knee joint (T = F × d), increasing loading through the calves, hamstrings, and glutes.
            </p>

            {/* Paragraph 3 */}
            <p>
              This forefoot-driven kinetic chain produces higher eccentric demand, greater posterior-chain integration, and superior transfer to real sprint-speed mechanics.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
})

export default ForefootLeverTorqueAdvantage

