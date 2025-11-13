'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  review: string
  rating?: number
  delay?: number
}

export default function TestimonialCard({
  name,
  review,
  rating = 5,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Star Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-text-dark leading-relaxed mb-6 text-base">
        "{review}"
      </p>

      {/* Name */}
      <p className="font-semibold text-text-dark">
        {name}
      </p>
    </motion.div>
  )
}
