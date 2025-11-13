// app/rack-mounted/RackMountedContent.tsx
'use client'

import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'
import RackHero from '@/components/sections/RackHero'
import EngineeredForExcellenceSection from '@/components/sections/EngineeredForExcellence'
import RackFeatureDetail from '@/components/sections/RackFeatureDetail'
import BiomechanicsSection from '@/components/sections/BiomechanicsSection'
import RackSpecs from '@/components/sections/RackSpecs'
import CTASection from '@/components/sections/CTASection'
import Testimonials from '@/components/sections/Testimonials'

// Animation variants for smooth section reveals with Apple-style easing
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number], // Apple's signature cubic-bezier easing
    },
  },
}

// Premium separator component
const PremiumSeparator = () => (
  <div className="relative h-px max-w-7xl mx-auto" aria-hidden="true">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent blur-sm" />
  </div>
)

// Animated gradient orb component
const AnimatedGradientOrb = ({ 
  className = '', 
  delay = 0,
  shouldReduceMotion = false 
}: { 
  className?: string
  delay?: number
  shouldReduceMotion?: boolean 
}) => {
  if (shouldReduceMotion) {
    return <div className={`absolute ${className} bg-red-500/10 rounded-full blur-3xl`} aria-hidden="true" />
  }
  
  return (
    <motion.div
      className={`absolute ${className} bg-red-500/10 rounded-full blur-3xl`}
      animate={{ 
        scale: [1, 1.2, 1], 
        opacity: [0.3, 0.5, 0.3] 
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay 
      }}
      aria-hidden="true"
    />
  )
}

export default function RackMountedContent() {
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      {/* Elite scroll progress indicator with glow */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-50"
        style={{ scaleX }}
        aria-hidden="true"
      >
        <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 blur-sm opacity-50" />
      </motion.div>

      <main className="relative bg-black overflow-hidden">
        {/* Hero Section - No animation wrapper to preserve RackHero's internal animations */}
        <RackHero
          eyebrow="THE FLAGSHIP EXIQX CONFIGURATION"
          headline="RACK-MOUNTED FOOTPLATE"
          subheadline="Engineered for elite posterior-chain loading through the plantar surface."
          primaryCTA={{
            text: 'Join Waitlist',
            href: '#waitlist',
          }}
          secondaryCTA={{
            text: 'Explore Specs',
            href: '#specs',
          }}
          microTagline="Patent-pending design. Engineered in Arizona."
          backgroundImage="/rack-mounted-hero.jpg"
          showShimmer={true}
        />

        {/* Premium separator with glow */}
        <PremiumSeparator />

        {/* Key Benefits Grid */}
        <motion.section
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          {/* Animated gradient orbs */}
          <AnimatedGradientOrb 
            className="top-0 right-1/4 w-96 h-96" 
            delay={0}
            shouldReduceMotion={shouldReduceMotion}
          />
          <AnimatedGradientOrb 
            className="bottom-0 left-1/4 w-80 h-80 bg-blue-500/10" 
            delay={2}
            shouldReduceMotion={shouldReduceMotion}
          />
          <EngineeredForExcellenceSection
          sectionTitle="ENGINEERED FOR EXCELLENCE"
          sectionSubtitle="Four pillars of biomechanical superiority"
          features={[
            {
              icon: 'ruler',
              title: 'Precision-Mounted Stability',
              body: 'Anchors securely to 3"×3" uprights using dual hitch-pin brackets. No wobble, no flex — just pure force transfer.',
            },
            {
              icon: 'zap',
              title: 'Universal Compatibility',
              body: 'Fits all standard 43" rack widths (Rogue, Sorinex, Titan). Tool-free locking system with hitch pin or detent.',
            },
            {
              icon: 'award',
              title: 'Biomechanical Alignment',
              body: 'Engineered around ~38° plantarflexion alignment, mirroring the natural closed-chain vector of sprinting.',
            },
            {
              icon: 'shield',
              title: 'Built to Last',
              body: '11-gauge steel with powder-coated finish. 30 lbs assembled. Designed for heavy commercial gym abuse.',
            },
          ]}
          />
        </motion.section>

        {/* Premium separator with glow */}
        <PremiumSeparator />

        {/* Feature Detail */}
        <motion.section
          id="features"
          className="scroll-mt-24 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          aria-labelledby="features-title"
        >
          {/* Animated gradient orbs */}
          <AnimatedGradientOrb 
            className="top-1/4 left-0 w-72 h-72" 
            delay={1}
            shouldReduceMotion={shouldReduceMotion}
          />
          <AnimatedGradientOrb 
            className="bottom-1/4 right-0 w-96 h-96 bg-blue-500/10" 
            delay={3}
            shouldReduceMotion={shouldReduceMotion}
          />
          <div className="py-24 lg:py-32">
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

        {/* Premium separator with glow */}
        <PremiumSeparator />

        {/* Biomechanics */}
        <motion.section
          id="biomechanics"
          className="scroll-mt-24 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          aria-labelledby="biomechanics-title"
        >
          {/* Animated gradient orbs */}
          <AnimatedGradientOrb 
            className="top-0 left-1/3 w-80 h-80" 
            delay={0.5}
            shouldReduceMotion={shouldReduceMotion}
          />
          <AnimatedGradientOrb 
            className="bottom-0 right-1/3 w-80 h-80 bg-blue-500/10" 
            delay={2.5}
            shouldReduceMotion={shouldReduceMotion}
          />
          <div className="py-24 lg:py-32">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <BiomechanicsSection
              title="Aligned with Human Biomechanics"
              description="The rack-mounted system is engineered around a ~38° plantarflexion alignment, mirroring the natural closed-chain vector of sprinting and acceleration. This geometry targets the soleus, gastrocnemius, and hamstrings through their full length-tension curve — enabling concentric, eccentric, and isometric loading without posterior ankle restraint."
            />
            </div>
          </div>
        </motion.section>

        {/* Premium separator with glow */}
        <PremiumSeparator />

        {/* Technical Specs */}
        <motion.section
          id="specs"
          className="scroll-mt-24 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          aria-labelledby="specs-title"
        >
          {/* Animated gradient orbs */}
          <AnimatedGradientOrb 
            className="top-1/2 left-1/4 w-96 h-96" 
            delay={1.5}
            shouldReduceMotion={shouldReduceMotion}
          />
          <AnimatedGradientOrb 
            className="top-0 right-1/2 w-72 h-72 bg-blue-500/10" 
            delay={3.5}
            shouldReduceMotion={shouldReduceMotion}
          />
          <div className="py-24 lg:py-32">
            <RackSpecs />
          </div>
        </motion.section>

        {/* Premium separator with glow */}
        <PremiumSeparator />

        {/* Testimonials Section */}
        <motion.section
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          aria-labelledby="testimonials-title"
        >
          {/* Animated gradient orbs */}
          <AnimatedGradientOrb 
            className="top-0 left-1/4 w-80 h-80" 
            delay={1}
            shouldReduceMotion={shouldReduceMotion}
          />
          <AnimatedGradientOrb 
            className="bottom-0 right-1/4 w-96 h-96 bg-blue-500/10" 
            delay={2.5}
            shouldReduceMotion={shouldReduceMotion}
          />
          <div className="py-24 lg:py-32">
            <Testimonials />
          </div>
        </motion.section>

        {/* Premium separator with glow */}
        <PremiumSeparator />

        {/* Call to Action */}
        <motion.section
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          {/* Animated gradient orbs */}
          <AnimatedGradientOrb 
            className="top-1/2 left-1/4 w-96 h-96" 
            delay={1.5}
            shouldReduceMotion={shouldReduceMotion}
          />
          <AnimatedGradientOrb 
            className="top-0 right-1/2 w-72 h-72 bg-blue-500/10" 
            delay={3.5}
            shouldReduceMotion={shouldReduceMotion}
          />
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <CTASection
            headline="The Foundation of the ExIQx System"
            description="Join the waitlist to be first in line when we launch."
            ctaText="Join Waitlist"
            ctaHref="/#waitlist"
          />
          </div>
        </motion.section>
      </main>
    </>
  )
}
