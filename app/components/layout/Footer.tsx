'use client'

import { memo } from 'react'

const Footer = memo(function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-black px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-display text-xl font-bold uppercase tracking-[0.05em] text-white">
              ExIQx Performance
            </h3>
            <p className="mt-4 text-sm text-white/60">
              Biomechanical athletic equipment engineered for elite performance.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Products
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#footplate" className="text-sm text-white/60 hover:text-white">
                  Rack-Mounted Footplate
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-sm text-white/60 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-white/60 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#faq" className="text-sm text-white/60 hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-white/40">
            © {currentYear} ExIQx Performance. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-sm text-white/40 hover:text-white">
              Privacy
            </a>
            <a href="/terms" className="text-sm text-white/40 hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
})

export default Footer