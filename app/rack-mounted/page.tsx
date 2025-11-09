// app/rack-mounted/page.tsx
import type { Metadata } from 'next'
import RackHero from '@/components/sections/RackHero'
import RackKeyPoints from '@/components/sections/RackKeyPoints'
import RackFeatureDetail from '@/components/sections/RackFeatureDetail'
import RackSpecs from '@/components/sections/RackSpecs'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Rack-Mounted Footplates | ExIQx Performance',
  description: 'Precision-mounted to your squat rack uprights for elite posterior chain loading through the plantar surface.',
  openGraph: {
    title: 'Rack-Mounted Footplates | ExIQx Performance',
    description: 'Elite biomechanical equipment for peak athletic performance.',
    images: ['/rack-mounted-hero.jpg'],
  },
}

export default function RackMountedPage() {
  return (
    <main className="bg-[#0A0A0A]">
      {/* Elite Hero with Parallax + Breathing Animation */}
      <RackHero
        headline="RACK-MOUNTED FOOTPLATE"
        subheadline="Precision-mounted to your squat rack uprights for elite posterior chain loading through the plantar surface."
        tagline="THE FLAGSHIP EXIQX CONFIGURATION"
        primaryCTA={{
          text: 'Join Waitlist',
          href: '/#waitlist',
        }}
        secondaryCTA={{
          text: 'Learn More',
          href: '#key-points',
        }}
        backgroundImage="/rack-mounted-hero.jpg"
        showShimmer={true}
      />

      {/* Product Benefits Grid - Elite Component */}
      <section id="key-points" className="scroll-mt-20">
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
      </section>

      {/* Feature Detail Section */}
      <section id="features" className="scroll-mt-20">
        <RackFeatureDetail
          title="Precision-Mounted Stability"
          description="The rack-mounted footplate anchors securely to 3"×3" uprights using dual hitch-pin brackets, ensuring a rigid, stable interface for high-force posterior chain loading."
          features={[
            'Fits all standard 43" rack widths (Rogue, Sorinex, Titan)',
            'Dual peg + U-collar attachment for rapid setup',
            'Tool-free locking system with hitch pin or detent',
            '10°–70° plantarflexion adjustment arc',
          ]}
          imageSrc="/rack-mounted-side.jpg"
          imageAlt="Rack-Mounted Footplate Side View"
        />
      </section>

      {/* Biomechanics Section */}
      <section id="biomechanics" className="scroll-mt-20 py-24 lg:py-32 bg-[#0A0A0A] border-t border-red-600/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-montserrat">
            Aligned with Human Biomechanics
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed font-inter">
            The rack-mounted system is engineered around a ~38° plantarflexion alignment, 
            mirroring the natural closed-chain vector of sprinting and acceleration. 
            This geometry targets the soleus, gastrocnemius, and hamstrings through 
            their full length-tension curve — enabling concentric, eccentric, and 
            isometric loading without posterior ankle restraint.
          </p>
        </div>
      </section>

      {/* Technical Specs */}
      <section id="specs" className="scroll-mt-20">
        <RackSpecs
          title="Technical Specifications"
          specs={[
            { label: 'Footplate Width', value: '20–24" (optional lateral stabilizers)' },
            { label: 'Adjustment Plate Radius', value: '~4" with 15° hole spacing' },
            { label: 'Angle Range', value: '10°–70° plantarflexion' },
            { label: 'Material', value: '11-gauge steel with powder-coated finish' },
            { label: 'Weight', value: '~30 lbs assembled' },
            { label: 'Mount Type', value: 'Dual-bracket rack interface' },
            { label: 'Adjustability', value: 'Tool-free (hitch pin, detent, twist-lock)' },
          ]}
          imageSrc="/rack-mounted-detail.jpg"
          imageAlt="Rack-Mounted Footplate Detail"
        />
      </section>

      {/* Call to Action */}
      <CTASection
        headline="The Foundation of the ExIQx System"
        description="Join the waitlist to be first in line when we launch."
        ctaText="Join Waitlist"
        ctaHref="/#waitlist"
      />
    </main>
  )
}