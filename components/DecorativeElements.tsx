'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function FloatingBubbles() {
  const [windowHeight, setWindowHeight] = useState(800) // Default height for SSR

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowHeight(window.innerHeight)
    }
  }, [])

  const bubbles = [
    { size: 60, left: '10%', delay: 0, duration: 4 },
    { size: 40, left: '25%', delay: 1, duration: 5 },
    { size: 80, left: '60%', delay: 0.5, duration: 4.5 },
    { size: 50, left: '80%', delay: 1.5, duration: 5.5 },
    { size: 70, left: '45%', delay: 2, duration: 4.8 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {bubbles.map((bubble, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-xl"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.left,
            bottom: -bubble.size,
          }}
          animate={{
            y: [-bubble.size, -windowHeight - bubble.size],
            x: [0, Math.random() * 50 - 25, 0],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export function PawPrintPattern() {
  const paws = Array.from({ length: 12 }, (_, i) => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    rotation: Math.random() * 360,
    scale: 0.5 + Math.random() * 0.5,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
      {paws.map((paw, index) => (
        <div
          key={index}
          className="absolute text-6xl"
          style={{
            top: paw.top,
            left: paw.left,
            transform: `rotate(${paw.rotation}deg) scale(${paw.scale})`,
          }}
        >
          🐾
        </div>
      ))}
    </div>
  )
}

export function FloatingPaw({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="text-4xl opacity-20"
      animate={{
        y: [0, -20, 0],
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      🐾
    </motion.div>
  )
}
