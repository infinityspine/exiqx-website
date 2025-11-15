// app/freestanding/FreestandingContent.tsx
'use client'

import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'
import { fadeUp, staggerChildren } from '@/lib/motionPresets'
import SectionDivider from '@/components/ui/SectionDivider'
import FreestandingHero from '@/components/sections/FreestandingHero'
import EngineeredForExcellenceSection from '@/components/sections/EngineeredForExcellence'
import FreestandingFeatureDetail from '@/components/sections/FreestandingFeatureDetail'
import BiomechanicsSection from '@/components/sections/BiomechanicsSection'
import FreestandingSpecs from '@/components/sections/FreestandingSpecs'
import CTASection from '@/components/sections/CTASection'
import Testimonials from '@/components/sections/Testimonials'


// Animated gradient orb component - optimized for performance
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
    return <div className={`absolute ${className} bg-red-500/10 rounded-full blur-3xl opacity-30`} style={{ transform: 'translateZ(0)' }} aria-hidden="true" />
  }
  
  return (
    <motion.div
      className={`absolute ${className} bg-red-500/10 rounded-full blur-3xl will-change-[opacity]`}
      style={{ transform: 'translateZ(0)' }}
      animate={{ 
        opacity: [0.3, 0.5, 0.3] 
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: delay || 0
      }}
      aria-hidden="true"
    />
  )
}

export default function FreestandingContent() {
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
        {/* Hero Section - No animation wrapper to preserve FreestandingHero's internal animations */}
        <FreestandingHero
          eyebrow="FREESTANDING FOOTPLATE SYSTEM"
          headline="TRAIN ANYWHERE"
          subheadline="Elite posterior-chain loading without the rack. Perfect for home gyms, garage setups, and facilities with limited space."
          primaryCTA={{
            text: 'Join Waitlist',
            href: '/join-waitlist',
          }}
          secondaryCTA={{
            text: 'Explore Specs',
            href: '#specs',
          }}
          microTagline="Patent-pending design. Engineered in Arizona."
          backgroundImage="/freestanding-hero.jpg"
          showShimmer={true}
        />

        <SectionDivider />

        {/* Key Benefits Grid */}
        <EngineeredForExcellenceSection
          sectionTitle="PORTABLE PRECISION TRAINING"
          sectionSubtitle="Four pillars of freestanding performance"
          features={[
            {
              icon: 'ruler',
              title: 'Ultimate Portability',
              body: 'No rack required. Stabilized base design allows for setup in any space — home gyms, garage training areas, or facilities without dedicated rack systems.',
            },
            {
              icon: 'zap',
              title: 'Space-Efficient Design',
              body: 'Compact footprint with integrated weight-plate stabilization. Move and store with ease while maintaining commercial-grade stability under load.',
            },
            {
              icon: 'award',
              title: 'Biomechanical Alignment',
              body: 'Engineered around ~38° plantarflexion alignment, mirroring natural closed-chain vector of sprinting — no compromise on precision.',
            },
            {
              icon: 'shield',
              title: 'Robust Construction',
              body: '11-gauge steel with powder-coated finish. Stabilized with standard weight plates. Built for serious training without the infrastructure.',
            },
          ]}
        />

        <SectionDivider />

        {/* Feature Detail */}
        <motion.section
          id="features"
          className="scroll-mt-24 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          style={{ transform: 'translateZ(0)' }}
          aria-labelledby="features-title"
        >
          {/* Animated gradient orbs */}
          <AnimatedGradientOrb 
            className="top-1/4 left-0 w-72 h-72" 
            delay={1}
            shouldReduceMotion={!!shouldReduceMotion}
          />
          <AnimatedGradientOrb 
            className="bottom-1/4 right-0 w-96 h-96 bg-blue-500/10" 
            delay={3}
            shouldReduceMotion={!!shouldReduceMotion}
          />
          <div className="py-24 md:py-32">
            <FreestandingFeatureDetail
              title="Rack-Free Performance"
              description="The freestanding configuration delivers the same precision biomechanics as the rack-mounted system, with a stabilized base design that requires only standard weight plates — perfect for home gyms and portable training setups."
              features={[
                'No rack infrastructure required — train anywhere',
                'Weight-plate stabilization system for rigid base',
                'Tool-free adjustment between 10°–70° plantarflexion',
                'Compact footprint for garages and home training spaces',
              ]}
              imageSrc="/freestanding-side.jpg"
              imageAlt="Freestanding Footplate Side View"
              imagePosition="left"
            />
          </div>
        </motion.section>

        <SectionDivider />

        {/* Biomechanics */}
        <motion.section
          id="biomechanics"
          className="scroll-mt-24 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          style={{ transform: 'translateZ(0)' }}
          aria-labelledby="biomechanics-title"
        >
          {/* Animated gradient orbs */}
          <AnimatedGradientOrb 
            className="top-0 left-1/3 w-80 h-80" 
            delay={0.5}
            shouldReduceMotion={!!shouldReduceMotion}
          />
          <AnimatedGradientOrb 
            className="bottom-0 right-1/3 w-80 h-80 bg-blue-500/10" 
            delay={2.5}
            shouldReduceMotion={!!shouldReduceMotion}
          />
          <div className="py-24 md:py-32">
            <div className="max-w-5xl mx-auto px-6 md:px-8">
              <motion.div
                variants={staggerChildren}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <BiomechanicsSection
                  title="Aligned with Human Biomechanics"
                  description="The freestanding system is engineered around a ~38° plantarflexion alignment, mirroring the natural closed-chain vector of sprinting and athletic performance. This geometry targets the soleus, gastrocnemius, and hamstrings through their full length-tension curve — enabling concentric, eccentric, and isometric loading without posterior ankle restraint."
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        <SectionDivider />

        {/* Technical Specs */}
        <motion.section
          id="specs"
          className="scroll-mt-24 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          style={{ transform: 'translateZ(0)' }}
          aria-labelledby="specs-title"
        >
          {/* Animated gradient orbs */}
          <AnimatedGradientOrb 
            className="top-1/2 left-1/4 w-96 h-96" 
            delay={1.5}
            shouldReduceMotion={!!shouldReduceMotion}
          />
          <AnimatedGradientOrb 
            className="top-0 right-1/2 w-72 h-72 bg-blue-500/10" 
            delay={3.5}
            shouldReduceMotion={!!shouldReduceMotion}
          />
          <div className="py-24 md:py-32">
            <FreestandingSpecs />
          </div>
        </motion.section>

        <SectionDivider />

        {/* Testimonials Section */}
        <motion.section
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          style={{ transform: 'translateZ(0)' }}
          aria-labelledby="testimonials-title"
        >
          {/* Animated gradient orbs */}
          <AnimatedGradientOrb 
            className="top-0 left-1/4 w-80 h-80" 
            delay={1}
            shouldReduceMotion={!!shouldReduceMotion}
          />
          <AnimatedGradientOrb 
            className="bottom-0 right-1/4 w-96 h-96 bg-blue-500/10" 
            delay={2.5}
            shouldReduceMotion={!!shouldReduceMotion}
          />
          <div className="py-24 md:py-32">
            <Testimonials />
          </div>
        </motion.section>

        <SectionDivider />

        {/* Call to Action */}
        <motion.section
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          style={{ transform: 'translateZ(0)' }}
        >
          {/* Animated gradient orbs */}
          <AnimatedGradientOrb 
            className="top-1/2 left-1/4 w-96 h-96" 
            delay={1.5}
            shouldReduceMotion={!!shouldReduceMotion}
          />
          <AnimatedGradientOrb 
            className="top-0 right-1/2 w-72 h-72 bg-blue-500/10" 
            delay={3.5}
            shouldReduceMotion={!!shouldReduceMotion}
          />
          <div className="max-w-5xl mx-auto px-6 md:px-8 py-24 md:py-32">
            <CTASection
            headline="Elite Training Without the Infrastructure"
            description="Join the waitlist to be first in line when we launch."
            ctaText="Join Waitlist"
            ctaHref="/join-waitlist"
          />
          </div>
        </motion.section>
      </main>
    </>
  )
}
