'use client'

import { memo, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { z } from 'zod'

const NavItemSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1), // allow both '#' and '/' links
  id: z.string().min(1),
})

interface NavBarProps {
  brandText?: string
  navItems?: z.infer<typeof NavItemSchema>[]
  className?: string
}

const DEFAULT_BRAND_TEXT = 'EXIQX PERFORMANCE'
const DEFAULT_NAV_ITEMS = [
  { label: 'Footplate', href: '/rack-mounted', id: 'footplate' },
  { label: 'Technology', href: '#technology', id: 'technology' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

const SCROLL_THRESHOLD = 100
const INTERSECTION_THRESHOLD = 0.5

const NavBar = memo(function NavBar({
  brandText = DEFAULT_BRAND_TEXT,
  navItems = DEFAULT_NAV_ITEMS,
  className = '',
}: NavBarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const controls = useAnimation()
  const router = useRouter()

  const validatedItems = z.array(NavItemSchema).parse(navItems)

  // Scroll-based logo scaling
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > SCROLL_THRESHOLD
      setIsScrolled(scrolled)
      controls.start({
        scale: scrolled ? 0.85 : 1,
        opacity: scrolled ? 0.9 : 1,
        transition: { duration: 0.4, ease: 'easeOut' },
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [controls])

  // Active section tracking for hash-based scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: INTERSECTION_THRESHOLD }
    )

    validatedItems.forEach(({ id, href }) => {
      if (href.startsWith('#')) {
        const el = document.getElementById(id)
        if (el) observer.observe(el)
      }
    })
    return () => observer.disconnect()
  }, [validatedItems])

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), [])

  // 🧭 Smart navigation handler (works for both '#' and '/')
  const handleNavigation = useCallback(
    (href: string) => {
      closeMobileMenu()
      if (href.startsWith('#')) {
        // Smooth scroll for in-page links
        const element = document.querySelector(href)
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        // Navigate to another page
        router.push(href)
      }
    },
    [closeMobileMenu, router]
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, href: string) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        handleNavigation(href)
      }
    },
    [handleNavigation]
  )

  // Escape key closes menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) closeMobileMenu()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMobileMenuOpen, closeMobileMenu])

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* STATIC BLACK HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-50 bg-black shadow-lg ${className}`}>
        <nav
          className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <motion.a
            href="/"
            onClick={(e) => {
              e.preventDefault()
              router.push('/')
              closeMobileMenu()
            }}
            animate={controls}
            className="relative flex items-center rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <Image
              src="/exiqx-logo.png"
              alt="ExIQx Performance"
              width={260}
              height={80}
              priority
              className="h-14 sm:h-16 w-auto transition-all duration-500"
            />
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden gap-8 text-[11px] font-medium uppercase tracking-[0.18em] md:flex">
            {validatedItems.map(({ label, href, id }) => (
              <a
                key={id}
                href={href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation(href)
                }}
                onKeyDown={(e) => handleKeyDown(e, href)}
                aria-current={activeSection === id ? 'page' : undefined}
                className={`relative px-2 py-1 transition-colors duration-300 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                  activeSection === id
                    ? 'text-white'
                    : 'text-white/60 hover:text-white/90'
                }`}
              >
                {label}
                {activeSection === id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-red-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded text-white/90 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-black md:hidden"
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <motion.span
                className="block h-[2px] w-full bg-current origin-center"
                animate={isMobileMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
              <motion.span
                className="block h-[2px] w-full bg-current"
                animate={isMobileMenuOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-[2px] w-full bg-current origin-center"
                animate={isMobileMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md md:hidden"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />

            <motion.nav
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 z-40 h-full w-[280px] bg-black backdrop-blur-xl border-l border-white/10 md:hidden"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col h-full pt-24 px-6">
                <div className="flex flex-col gap-6">
                  {validatedItems.map(({ label, href, id }, index) => (
                    <motion.a
                      key={id}
                      href={href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavigation(href)
                      }}
                      onKeyDown={(e) => handleKeyDown(e, href)}
                      aria-current={activeSection === id ? 'page' : undefined}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      className={`relative text-lg uppercase tracking-[0.16em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:rounded px-2 py-1 -ml-2 ${
                        activeSection === id
                          ? 'text-white font-medium'
                          : 'text-white/70 hover:text-white'
                      }`}
                    >
                      {label}
                    </motion.a>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-auto pb-8 text-[10px] uppercase tracking-[0.18em] text-white/40"
                >
                  {brandText}
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
})

export default NavBar