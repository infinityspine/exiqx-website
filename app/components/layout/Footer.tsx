'use client'

import { memo, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Footer = memo(function Footer() {
  const currentYear = new Date().getFullYear()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const glowIntensity = Math.min(0.45, 0.15 + scrollY * 0.0005)

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative overflow-hidden px-6 py-16 lg:py-20"
      aria-labelledby="footer-heading"
    >
      {/* 🔥 Animated neon top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px]">
        <motion.div
          className="h-full w-full"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            background:
              'linear-gradient(90deg, rgba(255,255,255,0.6), rgba(220,38,38,0.8), rgba(255,255,255,0.6))',
            backgroundSize: '200% 200%',
          }}
        />
      </div>

      {/* Living gradient background */}
      <motion.div
        style={{
          background: `radial-gradient(circle at 50% 25%, rgba(220,38,38,${glowIntensity}), transparent 70%)`,
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
        className="absolute inset-0 z-0 opacity-80 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-black/95 backdrop-blur-[2px] z-0" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Main Footer Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <motion.div
              className="mb-6 flex items-center justify-start"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
            >
              <Image
                src="/exiqx-logo.png"
                alt="ExIQx Performance"
                width={340}
                height={110}
                className="h-20 w-auto max-w-[340px] sm:h-24 transition-all duration-300"
                priority
              />
            </motion.div>

            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Biomechanical athletic equipment engineered for elite performance 
              and injury prevention.
            </p>

            {/* Social Media */}
            <div className="mt-6 flex gap-4">
              <motion.a
                whileHover={{
                  scale: [1, 1.1, 1],
                  boxShadow: '0 0 22px rgba(220,38,38,0.45)',
                  transition: { duration: 0.9, ease: 'easeInOut', repeat: Infinity },
                }}
                href="https://www.instagram.com/exiqxperformance"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:border-red-600 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                aria-label="Follow ExIQx Performance on Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07..." />
                </svg>
              </motion.a>

              <motion.a
                whileHover={{
                  scale: [1, 1.1, 1],
                  boxShadow: '0 0 22px rgba(220,38,38,0.45)',
                  transition: { duration: 0.9, ease: 'easeInOut', repeat: Infinity },
                }}
                href="https://www.youtube.com/@exiqxperformance"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:border-red-600 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                aria-label="Subscribe to ExIQx Performance on YouTube"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0..." />
                </svg>
              </motion.a>
            </div>
          </div>

          <FooterLinks />
        </div>

        <div className="my-12 h-px bg-white/10" role="separator" />

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

        <div className="mt-8 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-white/30">
            Engineered in Arizona • Made in the USA
          </p>
        </div>
      </div>
    </motion.footer>
  )
})

function FooterLinks() {
  return (
    <>
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-white">
          Products
        </h3>
        <ul className="space-y-3" role="list">
          <li><a href="#footplate" className="text-sm text-white/60 hover:text-white">Rack-Mounted Footplate</a></li>
          <li><a href="#ghd" className="text-sm text-white/60 hover:text-white">GHD Retrofit System</a></li>
          <li><a href="#accessories" className="text-sm text-white/60 hover:text-white">Accessories</a></li>
        </ul>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-white">
          Company
        </h3>
        <ul className="space-y-3" role="list">
          <li><a href="#about" className="text-sm text-white/60 hover:text-white">About Us</a></li>
          <li><a href="#technology" className="text-sm text-white/60 hover:text-white">Technology</a></li>
          <li><a href="#contact" className="text-sm text-white/60 hover:text-white">Contact</a></li>
        </ul>
      </div>

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
    </>
  )
}

export default Footer