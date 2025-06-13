'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ServiceCardProps {
  title: string
  description: string
  icon: ReactNode
  index: number
}

export default function ServiceCard({ title, description, icon, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
      className="group relative p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="w-16 h-16 mb-6 text-primary group-hover:text-secondary transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
} 