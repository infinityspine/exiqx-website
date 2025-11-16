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
          eyebrow="COMMERCIAL-GRADE FREESTANDING SYSTEM"
          headline="FREESTANDING FOOTPLATE"
          subheadline="Commercial-grade posterior-chain loading without the rack. Ideal for PT clinics, performance centers, and facilities requiring portable precision training equipment."
          primaryCTA={{
            text: 'Request Demo',
            href: '/request-demo',
          }}
          secondaryCTA={{
            text: 'Contact Sales',
            href: '/contact',
          }}
          microTagline="Patent-pending technology. Commercial-grade construction. Engineered in Arizona."
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
              body: 'No rack required. Stabilized base design allows for setup in any professional space — PT clinics, performance centers, or facilities without dedicated rack systems.',
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
              description="The freestanding configuration delivers the same precision biomechanics as the rack-mounted system, with a stabilized base design that requires only standard weight plates — perfect for professional facilities requiring portable commercial-grade equipment."
              features={[
                'No rack infrastructure required — deploy in any professional space',
                'Weight-plate stabilization system for rigid base',
                'Tool-free adjustment between 10°–70° plantarflexion',
                'Compact footprint for PT clinics and performance centers',
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

        {/* Professional Applications */}
        <motion.section
          id="applications"
          className="scroll-mt-24 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          style={{ transform: 'translateZ(0)' }}
          aria-labelledby="applications-title"
        >
          {/* Animated gradient orbs */}
          <AnimatedGradientOrb 
            className="top-0 right-1/3 w-80 h-80" 
            delay={0.5}
            shouldReduceMotion={!!shouldReduceMotion}
          />
          <AnimatedGradientOrb 
            className="bottom-0 left-1/3 w-80 h-80 bg-blue-500/10" 
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
                <motion.h2
                  id="applications-title"
                  variants={fadeUp}
                  className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-[0.05em] text-white mb-12 text-center"
                >
                  Professional Applications
                </motion.h2>
                <motion.div
                  variants={fadeUp}
                  className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
                >
                  {[
                    {
                      title: 'NCAA Division I',
                      description: 'Strength & conditioning programs for elite collegiate athletics'
                    },
                    {
                      title: 'Physical Therapy',
                      description: 'Sports medicine clinics and rehabilitation centers'
                    },
                    {
                      title: 'Professional Teams',
                      description: 'NFL, NBA, MLB training facilities and performance centers'
                    },
                    {
                      title: 'High-Performance Centers',
                      description: 'Elite training facilities and sports performance institutes'
                    }
                  ].map((app, index) => (
                    <motion.div
                      key={index}
                      variants={fadeUp}
                      className="group relative bg-zinc-950/40 backdrop-blur-sm border border-zinc-800/60 rounded-xl p-6 hover:border-red-900/50 transition-all duration-300 overflow-hidden will-change-transform"
                      style={{ transform: 'translateZ(0)' }}
                      whileHover={shouldReduceMotion ? {} : { 
                        y: -8,
                        scale: 1.03,
                        transition: { type: "spring", stiffness: 160, damping: 20 }
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:via-red-500/0 group-hover:to-transparent rounded-xl transition-all duration-500 pointer-events-none" />
                      <h3 className="relative text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                        {app.title}
                      </h3>
                      <p className="relative text-white/70 leading-relaxed text-sm">
                        {app.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
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
            headline="Commercial-Grade Portable Training"
            description="Request a demonstration for your facility or contact our sales team for pricing and availability."
            ctaText="Request Demo"
            ctaHref="/request-demo"
            secondaryCtaText="Contact Sales"
            secondaryCtaHref="/contact"
          />
          {/* Tertiary CTA - Request Early Access */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mt-8"
          >
            <motion.a
              href="/early-access"
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              className="inline-block text-sm px-6 py-3 rounded-xl border border-white/20 bg-transparent text-white/70 hover:text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Request Early Access →
            </motion.a>
          </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  )
}
