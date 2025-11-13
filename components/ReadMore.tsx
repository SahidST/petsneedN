'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface ReadMoreProps {
  children: React.ReactNode
  maxLength?: number
  showButton?: boolean
}

export default function ReadMore({ children, maxLength = 300, showButton = true }: ReadMoreProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const text = typeof children === 'string' ? children : ''
  const shouldTruncate = text.length > maxLength && showButton

  if (!shouldTruncate) {
    return <div>{children}</div>
  }

  return (
    <div>
      <AnimatePresence mode="wait">
        {!isExpanded ? (
          <motion.div
            key="truncated"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {text.slice(0, maxLength)}...
          </motion.div>
        ) : (
          <motion.div
            key="full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 inline-flex items-center gap-2 text-primary hover:text-primary-hover font-poppins font-semibold transition-colors focus-visible-ring rounded-lg px-4 py-2"
      >
        {isExpanded ? (
          <>
            Read Less <ChevronUp className="w-4 h-4" />
          </>
        ) : (
          <>
            Read More <ChevronDown className="w-4 h-4" />
          </>
        )}
      </button>
    </div>
  )
}
