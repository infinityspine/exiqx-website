import NavBar from './components/layout/NavBar'
import HeroSection from "./components/layout/HeroSection"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Elite Navigation */}
      <NavBar />

      {/* Elite Hero Section - Fully accessible, optimized, reusable */}
      <HeroSection />

      {/* Future Sections */}
      <section 
        id="specs" 
        className="min-h-screen bg-[#050505] px-6 py-20"
      >
        {/* TODO: Add elite specs grid */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold uppercase tracking-[0.05em] font-display">
            Technical Specifications
          </h2>
        </div>
      </section>

      <section 
        id="technology" 
        className="min-h-screen bg-black px-6 py-20"
      >
        {/* TODO: Add technology showcase */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold uppercase tracking-[0.05em] font-display">
            Biomechanical Technology
          </h2>
        </div>
      </section>

      <section 
        id="about" 
        className="min-h-screen bg-[#050505] px-6 py-20"
      >
        {/* TODO: Add brand story */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold uppercase tracking-[0.05em] font-display">
            Our Story
          </h2>
        </div>
      </section>

      <section 
        id="contact" 
        className="min-h-[60vh] bg-black px-6 py-20"
      >
        {/* TODO: Add contact form / footer */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold uppercase tracking-[0.05em] font-display">
            Get in Touch
          </h2>
        </div>
      </section>
    </main>
  )
}