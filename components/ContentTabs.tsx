'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface TabContent {
  id: string
  label: string
  content: React.ReactNode
}

interface ContentTabsProps {
  tabs: TabContent[]
}

export default function ContentTabs({ tabs }: ContentTabsProps) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 rounded-lg font-poppins font-semibold transition-all duration-300 focus-visible-ring ${
              activeTab === index
                ? 'bg-primary text-white shadow-md'
                : 'bg-white text-text-dark hover:bg-background border border-gray-200'
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
        className="bg-white p-8 rounded-2xl shadow-md"
      >
        {tabs[activeTab].content}
      </motion.div>
    </div>
  )
}
