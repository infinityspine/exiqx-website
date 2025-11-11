// app/freestanding/FreestandingContent.tsx
'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import FreestandingHero from '@/components/sections/FreestandingHero'
import EngineeredForExcellenceSection from '@/components/sections/EngineeredForExcellence'
import FreestandingFeatureDetail from '@/components/sections/FreestandingFeatureDetail'
import BiomechanicsSection from '@/components/sections/BiomechanicsSection'
import FreestandingSpecs from '@/components/sections/FreestandingSpecs'
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

export default function FreestandingContent() {
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
        aria-hidden="true"
      />

      <main className="relative bg-black overflow-hidden">
        {/* Hero Section - No animation wrapper to preserve FreestandingHero's internal animations */}
        <FreestandingHero
          eyebrow="FREESTANDING FOOTPLATE SYSTEM"
          headline="TRAIN ANYWHERE"
          subheadline="Elite posterior-chain loading without the rack. Perfect for home gyms, garage setups, and facilities with limited space."
          primaryCTA={{
            text: 'Join Waitlist',
            href: '#waitlist',
          }}
          secondaryCTA={{
            text: 'Explore Specs',
            href: '#specs',
          }}
          microTagline="Patent-pending design. Engineered in Arizona."
          backgroundImage="/freestanding-hero.jpg"
          showShimmer={true}
        />

        {/* Subtle gradient separator for visual depth */}
        <div className="h-32 bg-gradient-to-b from-black via-zinc-950 to-black" aria-hidden="true" />

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

        {/* Visual spacer with subtle line */}
        <div className="relative h-px max-w-7xl mx-auto" aria-hidden="true">
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
          aria-labelledby="features-title"
        >
          <div className="py-24 lg:py-32">
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

        {/* Gradient transition for depth */}
        <div className="h-24 bg-gradient-to-b from-black via-zinc-950/50 to-black" aria-hidden="true" />

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
          <div className="py-24 lg:py-32">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <BiomechanicsSection
              title="Aligned with Human Biomechanics"
              description="The freestanding system is engineered around a ~38° plantarflexion alignment, mirroring the natural closed-chain vector of sprinting and athletic performance. This geometry targets the soleus, gastrocnemius, and hamstrings through their full length-tension curve — enabling concentric, eccentric, and isometric loading without posterior ankle restraint."
            />
            </div>
          </div>
        </motion.section>

        {/* Visual spacer with subtle line */}
        <div className="relative h-px max-w-7xl mx-auto" aria-hidden="true">
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
          aria-labelledby="specs-title"
        >
          <div className="py-24 lg:py-32">
            <FreestandingSpecs />
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          aria-labelledby="testimonials-title"
        >
          <div className="py-24 lg:py-32">
            <Testimonials />
          </div>
        </motion.section>

        {/* Gradient transition to CTA */}
        <div className="h-32 bg-gradient-to-b from-black via-zinc-950 to-black" aria-hidden="true" />

        {/* Call to Action */}
        <motion.section
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <CTASection
            headline="Elite Training Without the Infrastructure"
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
