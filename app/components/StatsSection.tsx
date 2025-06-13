'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const stats = [
  { number: 150, label: 'Projects Completed', suffix: '+' },
  { number: 98, label: 'Client Satisfaction', suffix: '%' },
  { number: 10, label: 'Years Experience', suffix: '+' },
  { number: 24, label: 'Expert Team Members', suffix: '+' },
]

const testimonials = [
  {
    quote: "Abuntra Innovations transformed our business with their cutting-edge solutions. Their team's expertise and dedication are unmatched.",
    author: "Sarah Johnson",
    position: "CEO, TechCorp",
  },
  {
    quote: "Working with Abuntra has been a game-changer for our digital transformation journey. Their innovative approach sets them apart.",
    author: "Michael Chen",
    position: "CTO, InnovateX",
  },
]

export default function StatsSection() {
  const [counters, setCounters] = useState(stats.map(() => 0))

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prevCounters =>
        prevCounters.map((counter, index) => {
          const target = stats[index].number
          const increment = Math.ceil(target / 50)
          return counter < target ? Math.min(counter + increment, target) : target
        })
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600">
            Numbers that speak for our commitment to excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {counters[index]}{stat.suffix}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <div className="text-2xl text-gray-600 mb-6">"{testimonial.quote}"</div>
              <div className="font-semibold text-lg">{testimonial.author}</div>
              <div className="text-primary">{testimonial.position}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 