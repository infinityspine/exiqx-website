import NavBar from '@/components/layout/NavBar'
import HeroSection from '@/components/sections/HeroSection'
import FootplateFeatures from '@/components/sections/FootplateFeatures'
import UseCases from '@/components/sections/UseCases'
import Testimonials from '@/components/sections/Testimonials'
import HomePageCTA from '@/components/sections/HomePageCTA'  // ← FIXED
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <NavBar />
      <HeroSection />
      <FootplateFeatures />
      <UseCases />
      <Testimonials />
      <HomePageCTA />  {/* ← FIXED */}
      <Footer />
    </main>
  )
}
```

---

## ✅ After Fixing

Save the file and the page should automatically reload. You should see your homepage working!

---

## 🎯 Then Navigate to Rack-Mounted Page

Once the homepage loads, navigate to:
```
http://localhost:3000/rack-mounted