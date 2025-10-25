import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Award, Users, Info } from 'lucide-react'

const ScholarshipCard = ({ scholarship }) => {
  const getTypeColor = (type) => {
    const colors = {
      national: 'bg-blue-100 text-blue-800',
      international: 'bg-green-100 text-green-800'
    }
    return colors[type] || 'bg-gray-100 text-gray-800'
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(scholarship.type)}`}>
                {scholarship.type.charAt(0).toUpperCase() + scholarship.type.slice(1)}
              </span>
              <div className="flex items-center space-x-1">
                <Award className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-semibold text-gray-700">
                  ${scholarship.awardAmount.toLocaleString()}
                </span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{scholarship.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{scholarship.description}</p>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">
              Deadline: <span className="font-semibold">{formatDate(scholarship.deadline)}</span>
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">
              Eligibility: <span className="font-semibold">{scholarship.eligibility}</span>
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Info className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">
              Field: <span className="font-semibold">{scholarship.field}</span>
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            {scholarship.applications} applications submitted
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300"
          >
            Apply Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default ScholarshipCard