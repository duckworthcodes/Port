import Image from 'next/image'
import { ArrowRightIcon, CodeBracketIcon, CloudIcon, CpuChipIcon } from '@heroicons/react/24/outline'
import AnimatedSection from './components/AnimatedSection'
import ContactForm from './components/ContactForm'
import ParticleBackground from './components/ParticleBackground'
import ServiceCard from './components/ServiceCard'
import StatsSection from './components/StatsSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
        <ParticleBackground />
        <div className="container text-center relative z-10">
          <AnimatedSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
              Abuntra Innovations
            </h1>
            <p className="text-2xl md:text-3xl mb-12 text-gray-100">
              Transforming Ideas into Digital Reality
            </p>
            <div className="flex gap-4 justify-center">
              <button className="btn bg-white text-primary hover:bg-gray-100 transform hover:scale-105 transition-transform">
                Get Started
              </button>
              <button className="btn bg-transparent border-2 border-white hover:bg-white/10 transform hover:scale-105 transition-transform">
                Learn More
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading">Our Services</h2>
            <p className="subheading">
              Comprehensive technology solutions for your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Software Development"
              description="Custom software solutions tailored to your business needs, built with cutting-edge technologies."
              icon={<CodeBracketIcon />}
              index={0}
            />
            <ServiceCard
              title="Cloud Solutions"
              description="Scalable cloud infrastructure and services to power your digital transformation."
              icon={<CloudIcon />}
              index={1}
            />
            <ServiceCard
              title="AI & Machine Learning"
              description="Intelligent solutions that leverage the power of artificial intelligence and machine learning."
              icon={<CpuChipIcon />}
              index={2}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading">About Us</h2>
              <p className="subheading">
                We are a team of passionate technologists dedicated to delivering
                innovative solutions that drive business growth and success.
              </p>
              <ul className="mt-6 space-y-4">
                {aboutPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRightIcon className="h-6 w-6 text-primary mr-2" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/developers-coding.jpg"
                alt="Coding and Development"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Contact Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading">Get in Touch</h2>
            <p className="subheading">
              Let's discuss how we can help transform your business
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

const aboutPoints = [
  'Experienced team of developers and consultants',
  'Proven track record of successful projects',
  'Customer-focused approach to problem-solving',
  'Commitment to quality and innovation',
] 