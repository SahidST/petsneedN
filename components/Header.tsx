'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/grooming', label: 'Grooming' },
  { href: '/clinic', label: 'Clinic' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-md h-16'
            : 'bg-white/80 backdrop-blur-md h-20'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-5 md:px-8 lg:px-12 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 focus-visible-ring rounded-lg">
            <span className="text-2xl">🐾</span>
            <span className="font-fredoka text-xl md:text-2xl text-text-dark font-semibold">
              Pet's Need
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-quicksand text-base text-text-dark hover:text-primary transition-colors focus-visible-ring rounded-lg px-2 py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:7411576879"
              className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-poppins font-semibold text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-hover focus-visible-ring flex items-center gap-2"
              aria-label="Call Pet's Need at 7411576879"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href="https://wa.me/917411576879"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary hover:bg-secondary-hover text-text-dark p-3 rounded-full transition-all duration-300 hover:scale-110 focus-visible-ring"
              aria-label="Contact Pet's Need on WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 text-text-dark hover:text-primary transition-colors focus-visible-ring rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white z-50 lg:hidden shadow-2xl overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🐾</span>
                    <span className="font-fredoka text-xl text-text-dark font-semibold">
                      Pet's Need
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-text-dark hover:text-primary transition-colors focus-visible-ring rounded-lg"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="flex flex-col gap-2" role="navigation" aria-label="Mobile navigation">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className="block py-3 px-4 text-lg font-quicksand text-text-dark hover:bg-background hover:text-primary transition-colors rounded-lg focus-visible-ring"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-8 pt-8 border-t border-gray-200 space-y-4">
                  <a
                    href="tel:7411576879"
                    className="block w-full bg-primary hover:bg-primary-hover text-white px-6 py-4 rounded-lg font-poppins font-semibold text-base transition-all duration-300 text-center focus-visible-ring"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Phone className="w-4 h-4 inline-block mr-2" />
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/917411576879"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-secondary hover:bg-secondary-hover text-text-dark px-6 py-4 rounded-lg font-poppins font-semibold text-base transition-all duration-300 text-center focus-visible-ring"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <MessageCircle className="w-4 h-4 inline-block mr-2" />
                    WhatsApp Us
                  </a>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-text-medium">
                  <p className="mb-2">📍 10/1D, Diamond Harbour Rd</p>
                  <p className="mb-2">Alipore, Kolkata 700027</p>
                  <p className="font-semibold text-primary">Open Daily: 10 AM - 10 PM</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from going under fixed header */}
      <div className={isScrolled ? 'h-16' : 'h-20'} />
    </>
  )
}
