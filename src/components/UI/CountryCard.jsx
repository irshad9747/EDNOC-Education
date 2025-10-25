import React from 'react'
import { motion } from 'framer-motion'
import { Star, Users, BookOpen, DollarSign, MapPin } from 'lucide-react'

const CountryCard = ({ country }) => {
  const getCostLevel = (level) => {
    const colors = {
      low: 'text-green-600',
      medium: 'text-yellow-600',
      high: 'text-red-600'
    }
    return colors[level] || 'text-gray-600'
  }

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
    >
      <div className="relative h-48">
        <img
          src={country.flag}
          alt={`${country.name} flag`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white mb-1">{country.name}</h3>
          <p className="text-white/90 text-sm">{country.description}</p>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-primary-600" />
            <span className="text-sm text-gray-600">
              {country.studentCount} Students
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <BookOpen className="w-4 h-4 text-primary-600" />
            <span className="text-sm text-gray-600">
              {country.universities} Universities
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-sm text-gray-600">
              {country.rating}/5 Rating
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <DollarSign className={`w-4 h-4 ${getCostLevel(country.costLevel)}`} />
            <span className={`text-sm capitalize ${getCostLevel(country.costLevel)}`}>
              {country.costLevel} Cost
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-500">{country.continent}</span>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300"
          >
            Explore Programs
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default CountryCard