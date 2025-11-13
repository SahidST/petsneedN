'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface Product {
  name: string
  description: string
  icon: string
  brands?: string
}

interface TabData {
  id: string
  label: string
  products: Product[]
}

interface ProductTabsProps {
  tabs: TabData[]
}

export default function ProductTabs({ tabs }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex gap-2 mb-12 overflow-x-auto pb-2 scrollbar-hide">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 rounded-lg font-poppins font-semibold whitespace-nowrap transition-all duration-300 focus-visible-ring ${
              activeTab === index
                ? 'bg-primary text-white'
                : 'bg-white text-text-dark hover:bg-background'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tabs[activeTab].products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              {/* Icon Container */}
              <div className="relative h-64 bg-gradient-to-br from-background to-accent flex items-center justify-center">
                <span className="text-8xl" role="img" aria-label={product.name}>
                  {product.icon}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-fredoka text-xl font-semibold mb-2 text-text-dark">
                  {product.name}
                </h3>
                <p className="text-text-medium mb-3 leading-relaxed">
                  {product.description}
                </p>
                {product.brands && (
                  <p className="text-sm text-text-light">
                    <strong>Brands:</strong> {product.brands}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
