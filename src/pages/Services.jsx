import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Users, Plane, Award, BookOpen, Clock } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: 'Documentation Support',
      description: 'Complete assistance with academic document preparation, translation, and verification.',
      features: ['Transcript preparation', 'Document translation', 'Certificate verification', 'Application forms']
    },
    {
      icon: Users,
      title: 'Admission Counseling',
      description: 'Expert guidance in university selection and application process management.',
      features: ['University selection', 'Application review', 'Essay assistance', 'Interview preparation']
    },
    {
      icon: Plane,
      title: 'Visa Assistance',
      description: 'End-to-end visa application support including documentation and interview preparation.',
      features: ['Visa documentation', 'Application filing', 'Interview coaching', 'Status tracking']
    },
    {
      icon: Award,
      title: 'Scholarship Guidance',
      description: 'Help in finding and applying for scholarships and financial aid opportunities.',
      features: ['Scholarship search', 'Application assistance', 'Essay writing', 'Deadline tracking']
    },
    {
      icon: BookOpen,
      title: 'Test Preparation',
      description: 'Comprehensive coaching for IELTS, TOEFL, GRE, GMAT, and other standardized tests.',
      features: ['Mock tests', 'Study materials', 'Expert coaching', 'Performance tracking']
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for all your queries and concerns.',
      features: ['Live chat support', 'Email assistance', 'Phone consultation', 'Emergency help']
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
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support services to ensure your success at every step of your educational journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-600 rounded-full" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
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
              Need Help with Your Application?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our team of experts is ready to assist you with all your educational needs
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services