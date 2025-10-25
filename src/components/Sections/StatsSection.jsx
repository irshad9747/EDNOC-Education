import React from 'react'
import { motion } from 'framer-motion'
import { Users, Globe, Award, TrendingUp } from 'lucide-react'

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: '10,000+',
      label: 'Students Guided',
      color: 'text-primary-600'
    },
    {
      icon: Globe,
      number: '50+',
      label: 'Countries',
      color: 'text-secondary-600'
    },
    {
      icon: Award,
      number: '95%',
      label: 'Success Rate',
      color: 'text-green-600'
    },
    {
      icon: TrendingUp,
      number: '500+',
      label: 'Partner Universities',
      color: 'text-purple-600'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.color} bg-opacity-10 rounded-2xl mb-4`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection