import NavBar from '@/components/layout/NavBar'
import HeroSection from '@/components/sections/HeroSection'
import FootplateFeatures from '@/components/sections/FootplateFeatures'
import UseCases from '@/components/sections/UseCases'
import Testimonials from '@/components/sections/Testimonials'
import HomePageCTA from '@/components/sections/HomePageCTA'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <NavBar />
      <HeroSection />
      <FootplateFeatures />
      <UseCases />
      <Testimonials />
      <HomePageCTA />
      <Footer />
    </main>
  )
}