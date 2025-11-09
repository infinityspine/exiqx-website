import type { Metadata } from 'next'
import RackHero from '@/components/sections/RackHero'

export const metadata: Metadata = {
  title: 'GHD Retrofit Kit | ExIQx Performance',
  description: 'Transform your existing GHD into an elite posterior-chain training station with our retrofit footplate system.',
}

export default function GHDRetrofitPage() {
  return (
    <main className="min-h-screen bg-black">
      <RackHero
        headline="GHD RETROFIT KIT"
        subheadline="Upgrade your existing glute-ham developer with precision-engineered footplate integration."
        eyebrow="THE RETROFIT SOLUTION"
        microTagline="Patent-Pending Design • Engineered in Arizona"
        primaryCTA={{
          text: 'Join Waitlist',
          href: '#waitlist',
        }}
        secondaryCTA={{
          text: 'Explore Specs',
          href: '#specs',
        }}
        backgroundImage="/ghd-retrofit-hero.jpg"
        showShimmer={false}
      />

      {/* Add more sections here as needed */}
      <section className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center px-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 font-display uppercase tracking-wide">
            Maximize Your GHD
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Our retrofit kit seamlessly integrates with most commercial GHD units, adding elite-level 
            posterior-chain loading capabilities to your existing equipment. No need to replace your entire setup.
          </p>
        </div>
      </section>
    </main>
  )
}