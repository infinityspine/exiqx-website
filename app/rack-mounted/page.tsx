// app/rack-mounted/page.tsx
import type { Metadata } from 'next'
import RackHero from '@/components/sections/RackHero'
import RackKeyPoints from '@/components/sections/RackKeyPoints'
import RackFeatureDetail from '@/components/sections/RackFeatureDetail'
import BiomechanicsSection from '@/components/sections/BiomechanicsSection'
import RackSpecs from '@/components/sections/RackSpecs'
import CTASection from '@/components/sections/HomePageCTA'

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
      {/* ================= ELITE HERO WITH PARALLAX ================= */}
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

      {/* ================= KEY BENEFITS GRID ================= */}
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

      {/* ================= FEATURE DETAIL ================= */}
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
          imagePosition="left"
        />
      </section>

      {/* ================= BIOMECHANICS ================= */}
      <section id="biomechanics" className="scroll-mt-20">
        <BiomechanicsSection
          title="Aligned with Human Biomechanics"
          description="The rack-mounted system is engineered around a ~38° plantarflexion alignment, mirroring the natural closed-chain vector of sprinting and acceleration. This geometry targets the soleus, gastrocnemius, and hamstrings through their full length-tension curve — enabling concentric, eccentric, and isometric loading without posterior ankle restraint."
        />
      </section>

      {/* ================= TECHNICAL SPECS ================= */}
      <section id="specs" className="scroll-mt-20">
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
      </section>

      {/* ================= FINAL CTA ================= */}
      <CTASection
        headline="The Foundation of the ExIQx System"
        description="Join the waitlist to be first in line when we launch."
        ctaText="Join Waitlist"
        ctaHref="/#waitlist"
      />
    </main>
  )
}