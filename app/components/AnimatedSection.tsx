'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  initial?: object
  animate?: object
  whileInView?: object
  transition?: object
}

export default function AnimatedSection({
  children,
  className = '',
  initial,
  animate,
  whileInView,
  transition,
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      transition={transition}
    >
      {children}
    </motion.div>
  )
} 