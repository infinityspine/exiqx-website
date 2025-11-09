import type { Metadata } from 'next'
import RackHero from '@/components/sections/RackHero'

export const metadata: Metadata = {
  title: 'Freestanding Footplate | ExIQx Performance',
  description: 'Versatile freestanding footplate solution for elite posterior-chain training. No rack required.',
}

export default function FreestandingPage() {
  return (
    <main className="min-h-screen bg-black">
      <RackHero
        headline="FREESTANDING FOOTPLATE"
        subheadline="Elite posterior-chain training with complete portability and versatility."
        eyebrow="THE INDEPENDENT CONFIGURATION"
        microTagline="Patent-Pending Design • Engineered in Arizona"
        primaryCTA={{
          text: 'Join Waitlist',
          href: '#waitlist',
        }}
        secondaryCTA={{
          text: 'Explore Specs',
          href: '#specs',
        }}
        backgroundImage="/rack-mounted-hero.jpg"
        showShimmer={false}
      />

      {/* Add more sections here as needed */}
      <section className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center px-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 font-display uppercase tracking-wide">
            Train Anywhere
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            The freestanding configuration delivers the same elite posterior-chain loading without requiring a power rack. 
            Perfect for home gyms, garage setups, or facilities with limited rack access.
          </p>
        </div>
      </section>
    </main>
  )
}