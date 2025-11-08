/**
 * ExIQx Performance - Elite Production Homepage
 * 
 * Component Architecture:
 * - All layout components imported from /app/components/layout/
 * - Full homepage rendering pipeline
 * - Dark, minimalist ExIQx design system
 * - WCAG AAA accessible
 * - Production-grade code quality
 */

import NavBar from './components/layout/NavBar'
import HeroSection from './components/layout/HeroSection'
import FootplateFeatures from './components/layout/FootplateFeatures'
import UseCases from './components/layout/UseCases'
import Testimonials from './components/layout/Testimonials'
import CTASection from './components/layout/CTASection'
import Footer from './components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Elite Navigation - Fixed header with scroll darkening */}
      <NavBar />

      {/* Hero Section - Full-screen hero with optimized imagery */}
      <HeroSection />

      {/* Product Features - Technical specifications and benefits */}
      <FootplateFeatures />

      {/* Use Cases - Real-world applications and training scenarios */}
      <UseCases />

      {/* Social Proof - Testimonials from athletes and trainers */}
      <Testimonials />

      {/* Final CTA - Conversion-focused call-to-action */}
      <CTASection />

      {/* Footer - Brand info, links, and legal */}
      <Footer />
    </main>
  )
}