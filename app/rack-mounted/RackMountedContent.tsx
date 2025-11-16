// app/rack-mounted/RackMountedContent.tsx
'use client'

import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'
import { fadeUp, staggerChildren } from '@/lib/motionPresets'
import SectionDivider from '@/components/ui/SectionDivider'
import RackHero from '@/components/sections/RackHero'
import EngineeredForExcellenceSection from '@/components/sections/EngineeredForExcellence'
import RackFeatureDetail from '@/components/sections/RackFeatureDetail'
import BiomechanicsSection from '@/components/sections/BiomechanicsSection'
import RackSpecs from '@/components/sections/RackSpecs'
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
          eyebrow="COMMERCIAL-GRADE PROFESSIONAL EQUIPMENT"
          headline="RACK-MOUNTED FOOTPLATE"
          subheadline="Commercial-grade biomechanical equipment engineered for D1 programs, PT clinics, and professional training facilities."
          primaryCTA={{
            text: 'Request Demo',
            href: '/request-demo',
          }}
          secondaryCTA={{
            text: 'Contact Sales',
            href: '/contact',
          }}
          microTagline="Patent-pending technology. Commercial-grade construction. Engineered in Arizona."
          backgroundImage="/rack-mounted-hero.jpg"
          showShimmer={true}
        />

        <SectionDivider />

        {/* Key Benefits Grid */}
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
                  description="The rack-mounted system is engineered around a ~38° plantarflexion alignment, mirroring the natural closed-chain vector of sprinting and acceleration. This geometry targets the soleus, gastrocnemius, and hamstrings through their full length-tension curve — enabling concentric, eccentric, and isometric loading without posterior ankle restraint."
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
            <RackSpecs />
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
            headline="Commercial-Grade Professional Equipment"
            description="Request a demonstration for your facility or contact our sales team for pricing and availability."
            ctaText="Request Demo"
            ctaHref="/request-demo"
          />
          </div>
        </motion.section>
      </main>
    </>
  )
}
