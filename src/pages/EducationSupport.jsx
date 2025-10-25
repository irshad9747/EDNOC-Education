import React from 'react'
import { motion } from 'framer-motion'
import { Users, BookOpen, Award, Plane, MessageCircle, Target } from 'lucide-react'

const EducationSupport = () => {
  const supportServices = [
    {
      icon: Target,
      title: 'Academic Guidance',
      description: 'Personalized counseling to help you choose the right program and university based on your interests, goals, and academic background.',
      features: ['Career assessment tests', 'Program selection guidance', 'University shortlisting', 'Application strategy planning']
    },
    {
      icon: Users,
      title: 'Mentorship Program',
      description: 'Connect with experienced professionals and alumni who provide valuable insights and guidance throughout your educational journey.',
      features: ['Industry expert mentors', 'Alumni networking', 'Career advice sessions', 'Professional development']
    },
    {
      icon: Award,
      title: 'Scholarship Support',
      description: 'Comprehensive assistance in finding and applying for scholarships, grants, and financial aid opportunities.',
      features: ['Scholarship discovery', 'Application assistance', 'Essay writing help', 'Financial planning']
    },
    {
      icon: Plane,
      title: 'Study Abroad Assistance',
      description: 'End-to-end support for international students including visa guidance, accommodation help, and cultural orientation.',
      features: ['Visa application support', 'Accommodation assistance', 'Pre-departure briefing', 'Cultural orientation']
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
              Education <span className="gradient-text">Support</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support services to guide you through every step of your educational journey, 
              from program selection to career placement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {supportServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600">Comprehensive support service</p>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">{service.description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">What we offer:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary-600 rounded-full" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Support Process</span>
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to ensure your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Initial Consultation', description: 'Understand your goals and assess your profile' },
              { step: 2, title: 'Personalized Planning', description: 'Create a customized education plan' },
              { step: 3, title: 'Application Support', description: 'Guide through applications and documentation' },
              { step: 4, title: 'Ongoing Mentorship', description: 'Provide continuous support and guidance' }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get personalized guidance from our education experts and take the first step towards your dreams
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300"
            >
              Schedule a Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default EducationSupport