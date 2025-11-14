'use client'

import { memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = memo(function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="relative bg-black px-6 sm:px-8"
      style={{ paddingTop: 'clamp(5rem, 10vw, 8rem)', paddingBottom: 'clamp(4rem, 8vw, 6rem)' }}
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 'clamp(3rem, 6vw, 5rem)' }}>
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo with pulse only */}
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

            <p className="text-white/60 font-inter" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)', lineHeight: '1.7', marginTop: 'clamp(1rem, 2vw, 1.5rem)' }}>
              Precision-engineered biomechanics for authentic ground-force performance.
            </p>

            {/* Social Media */}
            <div className="flex" style={{ marginTop: 'clamp(1.5rem, 3vw, 2rem)', gap: 'clamp(1rem, 2vw, 1.25rem)' }}>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/exiqxperformance"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center rounded-full border border-white/20 bg-transparent text-white/85 transition-all duration-300 hover:border-red-600 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                style={{ width: 'clamp(2.5rem, 4vw, 3rem)', height: 'clamp(2.5rem, 4vw, 3rem)' }}
                aria-label="Follow ExIQx Performance on Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ width: 'clamp(1.125rem, 2vw, 1.375rem)', height: 'clamp(1.125rem, 2vw, 1.375rem)' }}
                >
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm10.5 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@exiqxperformance"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center rounded-full border border-white/20 bg-transparent text-white/85 transition-all duration-300 hover:border-red-600 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                style={{ width: 'clamp(2.5rem, 4vw, 3rem)', height: 'clamp(2.5rem, 4vw, 3rem)' }}
                aria-label="Subscribe to ExIQx Performance on YouTube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ width: 'clamp(1.125rem, 2vw, 1.375rem)', height: 'clamp(1.125rem, 2vw, 1.375rem)' }}
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="font-semibold uppercase tracking-[0.15em] text-white font-inter" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)', marginBottom: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
              Products
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.875rem, 1.5vw, 1.125rem)' }} role="list">
              <li><Link href="/rack-mounted" className="text-white/60 hover:text-white font-inter transition-colors" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)', lineHeight: '1.6' }}>Rack-Mounted Footplate</Link></li>
              <li><Link href="/ghd-retrofit" className="text-white/60 hover:text-white font-inter transition-colors" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)', lineHeight: '1.6' }}>GHD Retrofit Footplate</Link></li>
              <li><Link href="/freestanding" className="text-white/60 hover:text-white font-inter transition-colors" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)', lineHeight: '1.6' }}>Freestanding Footplate</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold uppercase tracking-[0.15em] text-white font-inter" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)', marginBottom: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
              Company
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.875rem, 1.5vw, 1.125rem)' }} role="list">
              <li><Link href="/about" className="text-white/60 hover:text-white font-inter transition-colors" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)', lineHeight: '1.6' }}>About Us</Link></li>
              <li><Link href="/technology" className="text-white/60 hover:text-white font-inter transition-colors" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)', lineHeight: '1.6' }}>Technology</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-white font-inter transition-colors" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)', lineHeight: '1.6' }}>Contact</Link></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white font-inter">
              Support
            </h3>
            <ul className="flex flex-col space-y-3" role="list">
              <li><Link href="/faq" className="text-sm opacity-70 hover:opacity-100 transition-opacity font-inter">FAQ</Link></li>
              <li><Link href="/shipping-and-returns" className="text-sm opacity-70 hover:opacity-100 transition-opacity font-inter">Shipping & Returns</Link></li>
              <li><Link href="/warranty" className="text-sm opacity-70 hover:opacity-100 transition-opacity font-inter">Warranty</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10" style={{ marginTop: 'clamp(3rem, 6vw, 5rem)', marginBottom: 'clamp(3rem, 6vw, 5rem)' }} role="separator" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between sm:flex-row" style={{ gap: 'clamp(1.5rem, 3vw, 2rem)' }}>
          <p className="text-white/40 font-inter" style={{ fontSize: 'clamp(0.8125rem, 1.5vw, 0.875rem)' }}>
            © {currentYear} ExIQx Performance. All rights reserved.
          </p>

          <div className="flex" style={{ gap: 'clamp(1.5rem, 3vw, 2rem)' }}>
            <Link href="/privacy" className="text-white/40 hover:text-white font-inter transition-colors" style={{ fontSize: 'clamp(0.8125rem, 1.5vw, 0.875rem)' }}>
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/40 hover:text-white font-inter transition-colors" style={{ fontSize: 'clamp(0.8125rem, 1.5vw, 0.875rem)' }}>
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Made in USA Badge */}
        <div className="text-center" style={{ marginTop: 'clamp(2rem, 4vw, 3rem)' }}>
          <p className="uppercase tracking-[0.2em] text-white/30 font-inter" style={{ fontSize: 'clamp(0.6875rem, 1.25vw, 0.75rem)' }}>
            Engineered in Arizona • Made in the USA
          </p>
        </div>
      </div>
    </footer>
  )
})

export default Footer