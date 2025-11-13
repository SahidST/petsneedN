'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    id: 1,
    alt: 'Happy white dog running in sunny park',
    placeholder: 'bg-gradient-to-br from-yellow-200 via-orange-200 to-pink-200',
    emoji: '🐕'
  },
  {
    id: 2,
    alt: 'Groomer gently brushing Persian cat',
    placeholder: 'bg-gradient-to-br from-purple-200 via-pink-200 to-red-200',
    emoji: '🐱'
  },
  {
    id: 3,
    alt: 'Veterinarian examining playful puppy',
    placeholder: 'bg-gradient-to-br from-blue-200 via-cyan-200 to-teal-200',
    emoji: '🩺'
  },
  {
    id: 4,
    alt: 'Pet owner shopping with dog in colorful store',
    placeholder: 'bg-gradient-to-br from-green-200 via-emerald-200 to-teal-200',
    emoji: '🛒'
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <div
      className="relative w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden rounded-3xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Image carousel"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className={`absolute inset-0 ${slides[currentSlide].placeholder} flex items-center justify-center`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Placeholder emoji */}
          <span className="text-9xl" role="img" aria-label={slides[currentSlide].alt}>
            {slides[currentSlide].emoji}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus-visible-ring ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide}
          />
        ))}
      </div>
    </div>
  )
}
