import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import CountryCard from '../UI/CountryCard'

const ImprovedCountriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef(null)
  const cardRef = useRef(null)

  const countries = [
    {
      name: 'Malaysia',
      description: 'Modern education hub with affordable tuition and diverse culture',
      flag: 'https://flagcdn.com/w320/my.png',
      studentCount: '15,000+',
      universities: 25,
      rating: 4.8,
      costLevel: 'low',
      continent: 'Asia'
    },
    {
      name: 'UAE',
      description: 'Rapidly growing education destination with world-class facilities',
      flag: 'https://flagcdn.com/w320/ae.png',
      studentCount: '12,000+',
      universities: 18,
      rating: 4.7,
      costLevel: 'medium',
      continent: 'Middle East'
    },
    {
      name: 'Saudi Arabia',
      description: 'Traditional values meet modern education in the heart of Arabia',
      flag: 'https://flagcdn.com/w320/sa.png',
      studentCount: '8,000+',
      universities: 15,
      rating: 4.6,
      costLevel: 'medium',
      continent: 'Middle East'
    },
    {
      name: 'Turkey',
      description: 'Bridge between East and West offering quality education',
      flag: 'https://flagcdn.com/w320/tr.png',
      studentCount: '20,000+',
      universities: 30,
      rating: 4.5,
      costLevel: 'low',
      continent: 'Europe/Asia'
    },
    {
      name: 'Germany',
      description: 'Engineering excellence and tuition-free public universities',
      flag: 'https://flagcdn.com/w320/de.png',
      studentCount: '35,000+',
      universities: 45,
      rating: 4.9,
      costLevel: 'low',
      continent: 'Europe'
    },
    {
      name: 'UK',
      description: 'World-renowned universities with rich academic heritage',
      flag: 'https://flagcdn.com/w320/gb.png',
      studentCount: '50,000+',
      universities: 60,
      rating: 4.8,
      costLevel: 'high',
      continent: 'Europe'
    }
  ]

  const scrollToIndex = (index) => {
    if (containerRef.current && cardRef.current) {
      const cardWidth = cardRef.current.offsetWidth + 32 // Include gap
      containerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      })
    }
  }

  const handlePrevious = () => {
    const newIndex = Math.max(0, currentIndex - 1)
    setCurrentIndex(newIndex)
    scrollToIndex(newIndex)
  }

  const handleNext = () => {
    const newIndex = Math.min(countries.length - 1, currentIndex + 1)
    setCurrentIndex(newIndex)
    scrollToIndex(newIndex)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && cardRef.current) {
        const cardWidth = cardRef.current.offsetWidth + 32
        const scrollPosition = containerRef.current.scrollLeft
        const newIndex = Math.round(scrollPosition / cardWidth)
        setCurrentIndex(Math.min(countries.length - 1, newIndex))
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [countries.length])

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Study <span className="gradient-text">Destinations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore world-class education opportunities across 6 continents. 
            From bustling metropolises to serene academic towns, find your perfect study destination.
          </p>
        </motion.div>

        {/* Countries Carousel */}
        <div className="relative">
          <div
            ref={containerRef}
            className="flex space-x-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {countries.map((country, index) => (
              <div
                key={country.name}
                ref={index === 0 ? cardRef : null}
                className="flex-shrink-0 w-full md:w-96 snap-center"
              >
                <CountryCard country={country} />
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </motion.button>

            {/* Progress Dots */}
            <div className="flex space-x-2">
              {countries.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    scrollToIndex(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-primary-600'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              disabled={currentIndex === countries.length - 1}
              className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </motion.button>
          </div>
        </div>

        {/* View All Countries CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Explore all 20+ study destinations
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            View All Countries
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default ImprovedCountriesSection