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
      className="relative bg-black text-white pt-24 pb-20 px-6 md:px-12 border-t border-white/5"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* Tesla-style glow bar */}
      <FooterGlowBar />

      <div className="mx-auto max-w-7xl">
        {/* Main Footer Content - minimal elite layout */}
        <div className="grid sm:grid-cols-2 items-start" style={{ gap: 'clamp(3rem, 6vw, 5rem)' }}>
          {/* Left: Brand */}
          <div>
            <div style={{ marginBottom: 'clamp(1.5rem, 3vw, 2rem)' }} className="flex items-center">
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

            <p
              className="text-white/60 font-inter"
              style={{
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                lineHeight: '1.7',
                marginTop: 'clamp(1rem, 2vw, 1.5rem)'
              }}
            >
              Patent-pending plantar surface loading system for elite athletes and training facilities.
            </p>
          </div>

          {/* Right: Links */}
          <nav className="sm:justify-self-end" aria-label="Footer">
            <ul
              role="list"
              className="flex flex-col"
              style={{ gap: 'clamp(0.875rem, 1.5vw, 1.125rem)' }}
            >
              <li>
                <Link
                  href="/order"
                  className="text-white/60 hover:text-red-500 font-inter transition-colors"
                  style={{ fontSize: 'clamp(0.95rem, 1.7vw, 1.05rem)', lineHeight: '1.6' }}
                >
                  Order
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/60 hover:text-red-500 font-inter transition-colors"
                  style={{ fontSize: 'clamp(0.95rem, 1.7vw, 1.05rem)', lineHeight: '1.6' }}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-white/60 hover:text-red-500 font-inter transition-colors"
                  style={{ fontSize: 'clamp(0.95rem, 1.7vw, 1.05rem)', lineHeight: '1.6' }}
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Separator */}
        <div 
          className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" 
          style={{ marginTop: 'clamp(3rem, 6vw, 5rem)' }}
          role="separator" 
        />

        {/* Bottom Bar - centered */}
        <div
          className="text-center text-white/50"
          style={{
            paddingTop: 'clamp(2.5rem, 5vw, 3rem)',
            paddingBottom: 'clamp(4rem, 8vw, 5rem)'
          }}
        >
          <p style={{ fontSize: 'clamp(0.8125rem, 1.6vw, 0.9375rem)' }}>
            © 2025 ExIQx Performance LLC
          </p>
          <p
            className="uppercase tracking-[0.2em] font-inter"
            style={{
              marginTop: 'clamp(0.75rem, 1.5vw, 1rem)',
              fontSize: 'clamp(0.625rem, 1.6vw, 0.9375rem)'
            }}
          >
            Patent-Pending • Engineered in Arizona • Made in USA
          </p>
        </div>
      </div>
    </footer>
  )
})

export default Footer