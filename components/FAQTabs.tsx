'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import FAQAccordion, { FAQItem } from './FAQAccordion'

interface FAQCategory {
  id: string
  label: string
  faqs: FAQItem[]
}

interface FAQTabsProps {
  categories: FAQCategory[]
}

export default function FAQTabs({ categories }: FAQTabsProps) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {categories.map((category, index) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 rounded-lg font-poppins font-semibold transition-all duration-300 focus-visible-ring ${
              activeTab === index
                ? 'bg-primary text-white shadow-md'
                : 'bg-white text-text-dark hover:bg-background border border-gray-200'
            }`}
          >
            {category.label}
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
        <FAQAccordion items={categories[activeTab].faqs} />
      </motion.div>
    </div>
  )
}
