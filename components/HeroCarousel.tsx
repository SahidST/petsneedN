'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    alt: 'Happy golden retriever playing in park',
    src: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1920&q=80',
    gradient: 'from-yellow-500/30 to-orange-500/30'
  },
  {
    id: 2,
    alt: 'Professional pet grooming session',
    src: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1920&q=80',
    gradient: 'from-purple-500/30 to-pink-500/30'
  },
  {
    id: 3,
    alt: 'Veterinarian examining cute puppy',
    src: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=1920&q=80',
    gradient: 'from-blue-500/30 to-cyan-500/30'
  },
  {
    id: 4,
    alt: 'Pet products and accessories in store',
    src: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=1920&q=80',
    gradient: 'from-green-500/30 to-emerald-500/30'
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
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={slides[currentSlide].src}
            alt={slides[currentSlide].alt}
            fill
            sizes="100vw"
            className="object-cover"
            priority={currentSlide === 0}
            quality={85}
          />
          {/* Gradient overlay for better text readability */}
          <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient}`} />
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
