// app/rack-mounted/page.tsx
'use client'

import type { Metadata } from 'next'
import { motion, useScroll, useSpring } from 'framer-motion'
import RackHero from '@/components/sections/RackHero'
import RackKeyPoints from '@/components/sections/RackKeyPoints'
import RackFeatureDetail from '@/components/sections/RackFeatureDetail'
import BiomechanicsSection from '@/components/sections/BiomechanicsSection'
import RackSpecs from '@/components/sections/RackSpecs'
import CTASection from '@/components/sections/CTASection'
import Testimonials from '@/components/sections/Testimonials'

// Animation variants for smooth section reveals
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // Apple-style easing curve
    },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

export default function RackMountedPage() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      {/* Elite scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 origin-left z-50"
        style={{ scaleX }}
      />

      <main className="relative bg-black overflow-hidden">
        {/* Hero Section - No animation wrapper to avoid conflicts with RackHero's own animations */}
        <RackHero
          headline="RACK-MOUNTED FOOTPLATE"
          subheadline="Precision-mounted to your squat rack uprights for elite posterior chain loading through the plantar surface."
          tagline="THE FLAGSHIP EXIQX CONFIGURATION"
          primaryCTA={{
            text: 'Join Waitlist',
            href: '/#waitlist',
          }}
          secondaryCTA={{
            text: 'Explore Features',
            href: '#key-points',
          }}
          backgroundImage="/rack-mounted-hero.jpg"
          showShimmer={true}
        />

        {/* Subtle gradient separator for visual depth */}
        <div className="h-32 bg-gradient-to-b from-black via-zinc-950 to-black" />

        {/* Key Benefits Grid */}
        <motion.section
          id="key-points"
          className="scroll-mt-24 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="py-20 md:py-32">
            <RackKeyPoints
              sectionTitle="ENGINEERED FOR EXCELLENCE"
              sectionSubtitle="Four pillars of biomechanical superiority"
              keyPoints={[
                {
                  icon: 'ruler',
                  headline: 'Precision-Mounted Stability',
                  description: 'Anchors securely to 3"×3" uprights using dual hitch-pin brackets. No wobble, no flex — just pure force transfer.',
                },
                {
                  icon: 'zap',
                  headline: 'Universal Compatibility',
                  description: 'Fits all standard 43" rack widths (Rogue, Sorinex, Titan). Tool-free locking system with hitch pin or detent.',
                },
                {
                  icon: 'award',
                  headline: 'Biomechanical Alignment',
                  description: 'Engineered around ~38° plantarflexion alignment, mirroring natural closed-chain vector of sprinting.',
                },
                {
                  icon: 'shield',
                  headline: 'Built to Last',
                  description: '11-gauge steel with powder-coated finish. 30 lbs assembled. Designed for commercial gym durability.',
                },
              ]}
            />
          </div>
        </motion.section>

        {/* Visual spacer with subtle line */}
        <div className="relative h-px max-w-7xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        </div>

        {/* Feature Detail */}
        <motion.section
          id="features"
          className="scroll-mt-24 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="py-20 md:py-32">
            <RackFeatureDetail
              title="Precision-Mounted Stability"
              description="The rack-mounted footplate anchors securely to 3×3 uprights using dual hitch-pin brackets, ensuring a rigid, stable interface for high-force posterior chain loading."
              features={[
                'Fits all standard 43" rack widths (Rogue, Sorinex, Titan)',
                'Dual peg + U-collar attachment for rapid setup',
                'Tool-free locking system with hitch pin or detent',
                '10°–70° plantarflexion adjustment arc',
              ]}
              imageSrc="/rack-mounted-side.jpg"
              imageAlt="Rack-Mounted Footplate Side View"
              imagePosition="left"
            />
          </div>
        </motion.section>

        {/* Gradient transition for depth */}
        <div className="h-24 bg-gradient-to-b from-black via-zinc-950/50 to-black" />

        {/* Biomechanics */}
        <motion.section
          id="biomechanics"
          className="scroll-mt-24 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="py-20 md:py-32">
            <BiomechanicsSection
              title="Aligned with Human Biomechanics"
              description="The rack-mounted system is engineered around a ~38° plantarflexion alignment, mirroring the natural closed-chain vector of sprinting and acceleration. This geometry targets the soleus, gastrocnemius, and hamstrings through their full length-tension curve — enabling concentric, eccentric, and isometric loading without posterior ankle restraint."
            />
          </div>
        </motion.section>

        {/* Visual spacer with subtle line */}
        <div className="relative h-px max-w-7xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        </div>

        {/* Technical Specs */}
        <motion.section
          id="specs"
          className="scroll-mt-24 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="py-20 md:py-32">
            <RackSpecs
              title="Technical Specifications"
              specs={[
                { label: 'Footplate Width', value: '20–24" (optional lateral stabilizers)' },
                { label: 'Adjustment Plate Radius', value: '~4" with 15° hole spacing' },
                { label: 'Angle Range', value: '10°–70° plantarflexion' },
                { label: 'Material', value: '11-gauge steel with powder-coated finish' },
                { label: 'Weight', value: '~30 lbs assembled' },
                { label: 'Mount Type', value: 'Dual-bracket rack interface (peg + collar)' },
                { label: 'Adjustability', value: 'Tool-free (hitch pin, detent, twist-lock)' },
              ]}
              imageSrc="/rack-mounted-detail.jpg"
              imageAlt="Rack-Mounted Footplate Detail"
              imagePosition="right"
            />
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="py-20 md:py-32">
            <Testimonials />
          </div>
        </motion.section>

        {/* Gradient transition to CTA */}
        <div className="h-32 bg-gradient-to-b from-black via-zinc-950 to-black" />

        {/* Call to Action */}
        <motion.section
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <CTASection
            headline="The Foundation of the ExIQx System"
            description="Join the waitlist to be first in line when we launch."
            ctaText="Join Waitlist"
            ctaHref="/#waitlist"
          />
        </motion.section>
      </main>
    </>
  )
}