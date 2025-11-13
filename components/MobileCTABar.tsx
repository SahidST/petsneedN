'use client'

import { useState, useEffect } from 'react'
import { Phone, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MobileCTABar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isFooterVisible, setIsFooterVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 400px
      setIsVisible(window.scrollY > 400)

      // Hide when footer is visible
      const footer = document.querySelector('footer')
      if (footer) {
        const footerRect = footer.getBoundingClientRect()
        const isFooterInView = footerRect.top < window.innerHeight
        setIsFooterVisible(isFooterInView)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && !isFooterVisible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white shadow-lg border-t border-gray-200"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        >
          <div className="flex gap-3 p-3">
            <a
              href="tel:7411576879"
              className="flex-1 bg-primary hover:bg-primary-hover text-white py-4 rounded-lg font-poppins font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 focus-visible-ring"
              aria-label="Call Pet's Need"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="https://wa.me/917411576879"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 bg-secondary hover:bg-secondary-hover text-text-dark py-4 rounded-lg transition-all duration-300 flex items-center justify-center focus-visible-ring"
              aria-label="WhatsApp Pet's Need"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
