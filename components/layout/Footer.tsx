'use client'

import { memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Tesla-style glowing border bar above footer
function FooterGlowBar() {
  return (
    <div
      className="
        absolute left-0 top-0
        h-[2px]
        w-full
        rounded-full
        bg-gradient-to-r
        from-red-500/15 via-red-500/20 to-red-500/15
        shadow-[0_0_18px_4px_rgba(229,9,20,0.12)]
        blur-[2px]
        animate-footerGlowStrong
        pointer-events-none
      "
    />
  );
}

const Footer = memo(function Footer() {
  return (
    <footer
      className="relative bg-black text-white py-12 md:py-16 px-6 md:px-12 border-t border-white/5"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* Tesla-style glow bar */}
      <FooterGlowBar />

      <div className="mx-auto max-w-7xl px-0 lg:px-0">
        {/* Main Content - Centered Single Column */}
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <Image
              src="/exiqx-logo.png"
              alt="ExIQx Performance"
              width={320}
              height={100}
              quality={85}
              className="w-auto transition-transform duration-300 hover:scale-[1.02]"
              style={{ height: 'clamp(5rem, 8vw, 6.5rem)', maxWidth: '320px' }}
              priority
            />
          </div>

          {/* Tagline */}
          <p className="text-white/60 font-inter text-sm md:text-base leading-relaxed max-w-2xl">
            Patent-pending plantar surface loading system for elite athletes and training facilities.
          </p>

          {/* Links - Horizontal Row */}
          <nav className="flex items-center gap-6 md:gap-8" aria-label="Footer">
            <Link href="/order" className="text-white hover:text-red-500 transition-colors">
              Order
            </Link>
            <span className="text-white/40" aria-hidden="true">•</span>
            <Link href="/contact" className="text-white hover:text-red-500 transition-colors">
              Contact
            </Link>
            <span className="text-white/40" aria-hidden="true">•</span>
            <Link href="/faq" className="text-white hover:text-red-500 transition-colors">
              FAQ
            </Link>
          </nav>
        </div>

        {/* Bottom Bar - Centered */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">
            © 2025 ExIQx Performance LLC
          </p>
          <p className="text-white/40 text-xs uppercase tracking-wider mt-2">
            Patent-Pending • Engineered in Arizona • Made in USA
          </p>
        </div>
      </div>
    </footer>
  )
})

export default Footer