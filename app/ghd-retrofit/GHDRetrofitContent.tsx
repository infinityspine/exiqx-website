// app/ghd-retrofit/GHDRetrofitContent.tsx
'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import GHDHero from '@/components/sections/GHDHero'
import GHDKeyPoints from '@/components/sections/GHDKeyPoints'
import GHDFeatureDetail from '@/components/sections/GHDFeatureDetail'
import BiomechanicsSection from '@/components/sections/BiomechanicsSection'
import GHDSpecs from '@/components/sections/GHDSpecs'
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

export default function GHDRetrofitContent() {
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
        {/* Hero Section - No animation wrapper to preserve GHDHero's internal animations */}
        <GHDHero
          eyebrow="GHD-MOUNTED FOOTPLATE SYSTEM"
          headline="RETROFIT YOUR GHD"
          subheadline="Transform your glute-ham developer into a precision posterior-chain loading station."
          primaryCTA={{
            text: 'Join Waitlist',
            href: '#waitlist',
          }}
          secondaryCTA={{
            text: 'Explore Specs',
            href: '#specs',
          }}
          microTagline="Patent-pending design. Engineered in Arizona."
          backgroundImage="/ghd-mounted-hero.jpg"
          showShimmer={true}
        />

        {/* Subtle gradient separator for visual depth */}
        <div className="h-32 bg-gradient-to-b from-black via-zinc-950 to-black" aria-hidden="true" />

        {/* Key Benefits Grid */}
        <motion.section
          id="key-points"
          className="scroll-mt-24 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          aria-labelledby="key-points-title"
        >
          <div className="py-24 lg:py-32">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <GHDKeyPoints
              sectionTitle="MAXIMIZE YOUR GHD INVESTMENT"
              sectionSubtitle="Four pillars of athlete-focused innovation"
              keyPoints={[
                {
                  icon: 'ruler',
                  headline: 'GHD-Optimized Mounting',
                  description: 'Retrofits directly to your existing GHD footplate attachment point. Quick-connect design for seamless integration with Rogue, Sorinex, and other commercial GHDs.',
                },
                {
                  icon: 'zap',
                  headline: 'Athlete-Ready Flexibility',
                  description: 'Perfect for facilities with multiple GHD users. Swap between traditional GHD work and ExIQx loading in seconds without tools.',
                },
                {
                  icon: 'award',
                  headline: 'Biomechanical Alignment',
                  description: 'Engineered around ~38° plantarflexion alignment, mirroring natural closed-chain vector of sprinting and athletic acceleration.',
                },
                {
                  icon: 'shield',
                  headline: 'Dual-Purpose Design',
                  description: '11-gauge steel construction. Maintains full GHD functionality while adding precision posterior-chain loading capability.',
                },
              ]}
            />
          </div>
        </motion.section>

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
            <GHDFeatureDetail
              title="Seamless GHD Integration"
              description="The GHD-mounted footplate retrofits directly to your existing glute-ham developer, transforming it into a dual-purpose training station for both traditional GHD work and precision posterior-chain loading."
              features={[
                'Compatible with Rogue, Sorinex, and most commercial GHD models',
                'Quick-connect attachment system for rapid switching',
                'Tool-free adjustment between 10°–70° plantarflexion',
                'Maintains full GHD functionality when not in use',
              ]}
              imageSrc="/ghd-mounted-side.jpg"
              imageAlt="GHD-Mounted Footplate Side View"
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
            <BiomechanicsSection
              title="Aligned with Human Biomechanics"
              description="The GHD-mounted system is engineered around a ~38° plantarflexion alignment, mirroring the natural closed-chain vector of sprinting and athletic acceleration. This geometry targets the soleus, gastrocnemius, and hamstrings through their full length-tension curve — enabling concentric, eccentric, and isometric loading without posterior ankle restraint."
            />
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
            <GHDSpecs
              title="Technical Specifications"
              specs={[
                { label: 'Footplate Width', value: '20–24" (optional lateral stabilizers)' },
                { label: 'Adjustment Plate Radius', value: '~4" with 15° hole spacing' },
                { label: 'Angle Range', value: '10°–70° plantarflexion' },
                { label: 'Material', value: '11-gauge steel with powder-coated finish' },
                { label: 'Weight', value: '~28 lbs assembled' },
                { label: 'Mount Type', value: 'GHD retrofit bracket with quick-connect system' },
                { label: 'Adjustability', value: 'Tool-free (hitch pin, detent, twist-lock)' },
              ]}
              imageSrc="/ghd-mounted-detail.jpg"
              imageAlt="GHD-Mounted Footplate Detail"
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
          <CTASection
            headline="Unlock Your GHD's Full Potential"
            description="Join the waitlist to be first in line when we launch."
            ctaText="Join Waitlist"
            ctaHref="/#waitlist"
          />
        </motion.section>
      </main>
    </>
  )
}
