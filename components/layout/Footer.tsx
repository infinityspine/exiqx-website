'use client'

import { memo } from 'react'
import Image from 'next/image'

const Footer = memo(function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="relative bg-black px-6 py-16 lg:py-20"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo with pulse only */}
            <div className="mb-6 flex items-center">
              <Image
                src="/exiqx-logo.png"
                alt="ExIQx Performance"
                width={320}
                height={100}
                className="h-20 w-auto max-w-[320px] sm:h-24 transition-transform duration-300 hover:scale-[1.02]"
                priority
              />
            </div>

            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Precision-engineered biomechanics for authentic ground-force performance.
            </p>

            {/* Social Media */}
            <div className="mt-6 flex gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/exiqxperformance"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-transparent text-white/85 transition-all duration-300 hover:border-red-600 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                aria-label="Follow ExIQx Performance on Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-[18px] w-[18px]"
                >
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm10.5 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@exiqxperformance"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-transparent text-white/85 transition-all duration-300 hover:border-red-600 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                aria-label="Subscribe to ExIQx Performance on YouTube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-[18px] w-[18px]"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Products
            </h3>
            <ul className="space-y-3" role="list">
              <li><a href="/rack-mounted" className="text-sm text-white/60 hover:text-white">Rack-Mounted Footplate</a></li>
              <li><a href="/ghd-retrofit" className="text-sm text-white/60 hover:text-white">GHD Retrofit Footplate</a></li>
              <li><a href="/freestanding" className="text-sm text-white/60 hover:text-white">Freestanding Footplate</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Company
            </h3>
            <ul className="space-y-3" role="list">
              <li><a href="/about" className="text-sm text-white/60 hover:text-white">About Us</a></li>
              <li><a href="/technology" className="text-sm text-white/60 hover:text-white">Technology</a></li>
              <li><a href="/contact" className="text-sm text-white/60 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Support
            </h3>
            <ul className="space-y-3" role="list">
              <li><a href="#faq" className="text-sm text-white/60 hover:text-white">FAQ</a></li>
              <li><a href="#shipping" className="text-sm text-white/60 hover:text-white">Shipping & Returns</a></li>
              <li><a href="#warranty" className="text-sm text-white/60 hover:text-white">Warranty</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-white/10" role="separator" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-white/40">
            © {currentYear} ExIQx Performance. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="/privacy" className="text-sm text-white/40 hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm text-white/40 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Made in USA Badge */}
        <div className="mt-8 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-white/30">
            Engineered in Arizona • Made in the USA
          </p>
        </div>
      </div>
    </footer>
  )
})

export default Footer