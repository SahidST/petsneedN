'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
  imagePlaceholder?: string
  delay?: number
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
  imagePlaceholder = 'bg-gradient-to-br from-accent to-secondary',
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      <Link href={href}>
        <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-hover transition-all duration-400 hover:-translate-y-2 focus-visible-ring">
          {/* Image Placeholder */}
          <div className={`relative h-64 ${imagePlaceholder} overflow-hidden`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl opacity-50">🐾</span>
            </div>
            {/* Icon Overlay */}
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:rotate-[10deg] group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="font-fredoka text-2xl font-semibold text-text-dark mb-3">
              {title}
            </h3>
            <p className="text-text-medium leading-relaxed mb-4">
              {description}
            </p>
            <div className="flex items-center gap-2 text-primary font-poppins font-semibold group-hover:gap-3 transition-all">
              Learn More & Book
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
