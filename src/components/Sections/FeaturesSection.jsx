import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Users, Globe, Award, Clock, Heart } from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Quality Education',
      description: 'Access world-class curriculum and experienced faculty from renowned institutions worldwide.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Personalized Guidance',
      description: 'Get one-on-one mentorship and career counseling tailored to your goals and aspirations.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Globe,
      title: 'Global Recognition',
      description: 'Earn internationally recognized degrees that open doors to opportunities worldwide.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Award,
      title: 'Scholarship Support',
      description: 'Access various scholarship opportunities and financial aid programs to fund your education.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Clock,
      title: 'Flexible Learning',
      description: 'Study at your own pace with 24/7 access to course materials and online resources.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Heart,
      title: 'Student Care',
      description: 'Comprehensive support system including visa assistance, accommodation, and career services.',
      color: 'from-pink-500 to-pink-600'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">EDNOC</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive educational solutions that empower students to achieve their dreams 
            through quality education, personalized support, and global opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection