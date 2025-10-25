import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Clock, Award, Users, Play, Download } from 'lucide-react'

const OnlineEducation = () => {
  const features = [
    {
      icon: Play,
      title: 'Interactive Learning',
      description: 'Engage with video lectures, live discussions, and interactive assignments that make learning dynamic and effective.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Access course materials 24/7 and learn at your own pace with self-paced modules designed for busy lifestyles.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Award,
      title: 'Global Recognition',
      description: 'Earn internationally recognized degrees and certifications that are valued by employers worldwide.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals and renowned professors with real-world experience and academic excellence.',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Online <span className="gradient-text">Education</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn anytime, anywhere with our comprehensive online programs. 
              Access world-class education from the comfort of your home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Learning Online?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of students already benefiting from flexible online education
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300"
            >
              Explore Online Programs
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default OnlineEducation