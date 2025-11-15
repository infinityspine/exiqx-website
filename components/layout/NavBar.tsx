'use client'

import { memo, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { z } from 'zod'

const NavItemSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  id: z.string().min(1),
})

interface NavBarProps {
  brandText?: string
  navItems?: z.infer<typeof NavItemSchema>[]
  className?: string
}

const DEFAULT_BRAND_TEXT = 'EXIQX PERFORMANCE'
const DEFAULT_NAV_ITEMS = [
  { label: 'Rack-Mounted', href: '/rack-mounted', id: 'rack-mounted' },
  { label: 'GHD Retrofit', href: '/ghd-retrofit', id: 'ghd-retrofit' },
  { label: 'Freestanding', href: '/freestanding', id: 'freestanding' },
  { label: 'Technology', href: '/technology', id: 'technology' },
  { label: 'About', href: '/about', id: 'about' },
  { label: 'Contact', href: '/contact', id: 'contact' },
]

const SCROLL_THRESHOLD_RATIO = 0.95 // 95% of viewport height
const SCROLL_THRESHOLD_FALLBACK = 800 // SSR fallback
const INTERSECTION_THRESHOLD = 0.5
const MENU_CLOSE_DELAY = 300

const NavBar = memo(function NavBar({
  brandText = DEFAULT_BRAND_TEXT,
  navItems = DEFAULT_NAV_ITEMS,
  className = '',
}: NavBarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const controls = useAnimation()
  const router = useRouter()
  const pathname = usePathname()

  const validatedItems = z.array(NavItemSchema).parse(navItems)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      const threshold = typeof window !== 'undefined' ? window.innerHeight * SCROLL_THRESHOLD_RATIO : SCROLL_THRESHOLD_FALLBACK
      const scrolled = currentScrollY > threshold
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

  const handleNavigation = useCallback(
    (href: string) => {
      if (href.startsWith('#')) {
        closeMobileMenu()
        setTimeout(() => {
          const element = document.querySelector(href)
          if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, MENU_CLOSE_DELAY)
      } else {
        closeMobileMenu()
        setTimeout(() => {
          router.push(href)
        }, MENU_CLOSE_DELAY)
      }
    },
    [closeMobileMenu, router]
  )

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) closeMobileMenu()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMobileMenuOpen, closeMobileMenu])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  // Old behavior for all pages except waitlist
  const defaultScrolled = scrollY > 20

  // New instant behavior for waitlist page
  const waitlistScrolled = scrollY > 2

  // If on waitlist page, use the tighter threshold
  const scrolled = pathname === '/join-waitlist'
    ? waitlistScrolled
    : defaultScrolled

  const isWaitlistPage = pathname === '/join-waitlist'

  const navBackground = isWaitlistPage
    ? (scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent')
    : (scrolled ? 'bg-black/60 backdrop-blur-md border-b border-white/10' : 'bg-transparent')

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${navBackground}
          ${className}
        `}
      >
        <nav
          className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
          aria-label="Main navigation"
        >
          <motion.a
            href="/"
            onClick={(e) => {
              e.preventDefault()
              if (pathname !== '/') {
                router.push('/')
              }
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
              quality={85}
              className="h-14 sm:h-16 w-auto transition-all duration-500"
            />
          </motion.a>

          <div className="hidden gap-8 text-[11px] font-medium uppercase tracking-[0.18em] md:flex">
            {validatedItems.map((item) => {
              // Check if this is a page route or section anchor
              const isPageRoute = !item.href.startsWith('#')
              const isActive = isPageRoute
                ? pathname === item.href
                : activeSection === item.id

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation(item.href)
                  }}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative px-2 py-1 transition-colors duration-300 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                    isActive ? 'text-white' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-red-500/20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </a>
              )
            })}
          </div>

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
                  {validatedItems.map((item, index) => {
                    // Check if this is a page route or section anchor
                    const isPageRoute = !item.href.startsWith('#')
                    const isActive = isPageRoute
                      ? pathname === item.href
                      : activeSection === item.id

                    return (
                      <motion.a
                        key={item.id}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault()
                          handleNavigation(item.href)
                        }}
                        aria-current={isActive ? 'page' : undefined}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        className={`relative text-lg uppercase tracking-[0.16em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:rounded px-2 py-1 -ml-2 ${
                          isActive ? 'text-white font-medium' : 'text-white/70 hover:text-white'
                        }`}
                      >
                        {item.label}
                        {isActive && (
                          <motion.div
                            className="absolute -bottom-1 left-2 right-2 h-[2px] bg-red-500/20"
                            layoutId="mobileActiveIndicator"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </motion.a>
                    )
                  })}
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