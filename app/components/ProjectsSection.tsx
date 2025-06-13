'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with real-time inventory management',
    image: '/project1.jpg',
    tech: ['Next.js', 'Node.js', 'MongoDB'],
  },
  {
    title: 'AI-Powered Analytics',
    description: 'Advanced analytics platform with machine learning capabilities',
    image: '/project2.jpg',
    tech: ['Python', 'TensorFlow', 'React'],
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud infrastructure for enterprise applications',
    image: '/project3.jpg',
    tech: ['AWS', 'Docker', 'Kubernetes'],
  },
]

export default function ProjectsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Projects</h2>
          <p className="text-xl text-gray-600">
            Discover our innovative solutions and successful implementations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-xl"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 