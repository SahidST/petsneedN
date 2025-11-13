'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TestimonialCard from './TestimonialCard'

interface Testimonial {
  name: string
  review: string
}

interface RotatingTestimonialsProps {
  testimonials: Testimonial[]
  itemsPerPage?: number
  interval?: number
}

export default function RotatingTestimonials({
  testimonials,
  itemsPerPage = 3,
  interval = 6000
}: RotatingTestimonialsProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const totalPages = Math.ceil(testimonials.length / itemsPerPage)

  useEffect(() => {
    if (isPaused || totalPages <= 1) return

    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages)
    }, interval)

    return () => clearInterval(timer)
  }, [isPaused, totalPages, interval])

  const currentTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${currentPage}-${index}`}
              name={testimonial.name}
              review={testimonial.review}
              delay={index * 0.15}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination Dots */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-3 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus-visible-ring ${
                index === currentPage
                  ? 'bg-primary w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial page ${index + 1}`}
              aria-current={index === currentPage}
            />
          ))}
        </div>
      )}

      {/* Pause indicator */}
      {isPaused && totalPages > 1 && (
        <div className="text-center mt-4 text-sm text-text-medium">
          Paused - Hover away to resume auto-rotation
        </div>
      )}
    </div>
  )
}
