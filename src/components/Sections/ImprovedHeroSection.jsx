import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Users, Globe, Award } from 'lucide-react'

const ImprovedHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary-600 rounded-full filter blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-secondary-600 rounded-full filter blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">Destination of Dreams</span>
                <br />
                <span className="text-gray-800">Charting Your Career Journey</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Education Without Boundaries — from SSLC to PhD, empowering learners with flexible, 
                high-quality online and distance programs recognized worldwide.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 py-4">
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold text-gray-800">4.9/5 Rating</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-primary-600" />
                  <span className="font-semibold text-gray-800">10,000+ Students</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-primary-600" />
                  <span className="font-semibold text-gray-800">50+ Countries</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/aptitude-test"
                    className="btn-primary inline-flex items-center space-x-2"
                  >
                    <span>Start Your Journey</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/programs"
                    className="btn-secondary"
                  >
                    Explore Programs
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Hero Image/Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                alt="Students celebrating graduation"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              
              {/* Floating Achievement Cards */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4"
              >
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-primary-600" />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">95% Success Rate</p>
                    <p className="text-xs text-gray-600">Career Placement</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4"
              >
                <div className="flex items-center space-x-2">
                  <Globe className="w-6 h-6 text-secondary-600" />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Global Recognition</p>
                    <p className="text-xs text-gray-600">Worldwide Degrees</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2 text-gray-400">
          <span className="text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ImprovedHeroSection