'use client'

import { memo, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { z } from 'zod'

// ============================================================================
// SCHEMAS & TYPES
// ============================================================================

const NavItemSchema = z.object({
  label: z.string().min(1),
  href: z.string().regex(/^#[a-z-]+$/),
  id: z.string().min(1)
})

interface NavBarProps {
  brandText?: string
  navItems?: z.infer<typeof NavItemSchema>[]
  className?: string
}

// ============================================================================
// CONSTANTS
// ============================================================================

const DEFAULT_BRAND_TEXT = 'EXIQX PERFORMANCE'

const DEFAULT_NAV_ITEMS = [
  { label: 'Footplate', href: '#footplate', id: 'footplate' },
  { label: 'Technology', href: '#technology', id: 'technology' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Contact', href: '#contact', id: 'contact' }
]

const SCROLL_THRESHOLD = 100
const INTERSECTION_THRESHOLD = 0.5

// ============================================================================
// COMPONENT
// ============================================================================

const NavBar = memo(function NavBar({
  brandText = DEFAULT_BRAND_TEXT,
  navItems = DEFAULT_NAV_ITEMS,
  className = ''
}: NavBarProps) {
  // State
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Validate props
  const validatedItems = z.array(NavItemSchema).parse(navItems)

  // ============================================================================
  // SCROLL DETECTION
  // ============================================================================

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ============================================================================
  // INTERSECTION OBSERVER FOR ACTIVE SECTIONS
  // ============================================================================

  useEffect(() => {
    const observerOptions = {
      rootMargin: '-20% 0px -70% 0px',
      threshold: INTERSECTION_THRESHOLD
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    validatedItems.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [validatedItems])

  // ============================================================================
  // HANDLERS
  // ============================================================================

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  const handleLinkClick = useCallback(
    (href: string) => {
      closeMobileMenu()
      // Smooth scroll to section
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    },
    [closeMobileMenu]
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, href: string) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        handleLinkClick(href)
      }
    },
    [handleLinkClick]
  )

  // Close mobile menu on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMobileMenuOpen, closeMobileMenu])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  // ============================================================================
  // RENDER
  // ============================================================================

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 ${className}`}>
        {/* Skip Navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-red-600 focus:text-white focus:px-4 focus:py-2 focus:rounded focus:font-medium focus:tracking-wide"
        >
          Skip to main content
        </a>

        {/* Glassmorphic Background with Scroll Darkening */}
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-b transition-all duration-500 ${
            isScrolled
              ? 'from-black/80 via-black/60 to-black/20 backdrop-blur-lg'
              : 'from-black/40 via-black/10 to-transparent backdrop-blur-md'
          }`}
        />

        <nav
          className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
          aria-label="Main navigation"
        >
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
              closeMobileMenu()
            }}
            className="relative flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
          >
            <Image
              src="/exiqx-logo.png"
              alt="ExIQx Performance"
              width={140}
              height={40}
              priority
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden gap-8 text-[11px] font-medium uppercase tracking-[0.18em] md:flex">
            {validatedItems.map(({ label, href, id }) => (
              <a
                key={id}
                href={href}
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick(href)
                }}
                onKeyDown={(e) => handleKeyDown(e, href)}
                aria-current={activeSection === id ? 'page' : undefined}
                className={`relative px-2 py-1 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded ${
                  activeSection === id ? 'text-white' : 'text-white/60 hover:text-white/90'
                }`}
              >
                {label}
                {/* Active indicator */}
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
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded text-white/90 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-black md:hidden"
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              {/* Top line */}
              <motion.span
                className="block h-[2px] w-full bg-current origin-center"
                animate={
                  isMobileMenuOpen
                    ? { rotate: 45, y: 9 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
              {/* Middle line */}
              <motion.span
                className="block h-[2px] w-full bg-current"
                animate={
                  isMobileMenuOpen
                    ? { opacity: 0, x: -20 }
                    : { opacity: 1, x: 0 }
                }
                transition={{ duration: 0.2 }}
              />
              {/* Bottom line */}
              <motion.span
                className="block h-[2px] w-full bg-current origin-center"
                animate={
                  isMobileMenuOpen
                    ? { rotate: -45, y: -9 }
                    : { rotate: 0, y: 0 }
                }
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
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md md:hidden"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />

            {/* Menu Panel */}
            <motion.nav
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 z-40 h-full w-[280px] bg-black/95 backdrop-blur-xl border-l border-white/10 md:hidden"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col h-full pt-24 px-6">
                {/* Mobile Links */}
                <div className="flex flex-col gap-6">
                  {validatedItems.map(({ label, href, id }, index) => (
                    <motion.a
                      key={id}
                      href={href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleLinkClick(href)
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
                      {/* Active indicator for mobile */}
                      {activeSection === id && (
                        <motion.div
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-red-600 rounded-r"
                          layoutId="mobileActiveIndicator"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.a>
                  ))}
                </div>

                {/* Mobile Menu Footer */}
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