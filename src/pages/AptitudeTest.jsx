import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain, Clock, Target, Award, Play, RotateCcw } from 'lucide-react'

const AptitudeTest = () => {
  const [testStarted, setTestStarted] = useState(false)
  const [testCompleted, setTestCompleted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleStartTest = () => {
    setLoading(true)
    setTimeout(() => {
      setTestStarted(true)
      setLoading(false)
    }, 2000)
  }

  const handleCompleteTest = () => {
    setTestCompleted(true)
  }

  const handleRetakeTest = () => {
    setTestStarted(false)
    setTestCompleted(false)
  }

  if (testCompleted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-12">
            <Award className="w-24 h-24 text-yellow-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Test Completed!</h2>
            <p className="text-xl text-gray-600 mb-8">
              Based on your responses, here are our recommendations:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-800 mb-3">Recommended Fields</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>• Engineering & Technology</li>
                  <li>• Business & Management</li>
                  <li>• Computer Science</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-800 mb-3">Suitable Programs</h3>
                <ul className="space-y-2 text-green-700">
                  <li>• B.Tech in Computer Science</li>
                  <li>• MBA in Technology Management</li>
                  <li>• B.Sc in Data Science</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRetakeTest}
                className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center space-x-2"
              >
                <RotateCcw className="w-5 h-5" />
                <span>Retake Test</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Explore Programs
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  if (testStarted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-12">
            <div className="text-center mb-8">
              <Brain className="w-16 h-16 text-primary-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Career Aptitude Assessment</h2>
              <p className="text-gray-600">Answer the following questions to discover your ideal career path</p>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Question 1 of 10: What type of activities do you enjoy most?
                </h3>
                <div className="space-y-3">
                  {[
                    'Solving complex problems and puzzles',
                    'Working with people and helping others',
                    'Creating art, designs, or media content',
                    'Organizing and managing projects'
                  ].map((option, index) => (
                    <label key={index} className="flex items-center space-x-3 cursor-pointer">
                      <input type="radio" name="q1" className="w-4 h-4 text-primary-600" />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Question 2 of 10: Which work environment appeals to you?
                </h3>
                <div className="space-y-3">
                  {[
                    'Fast-paced corporate setting',
                    'Laboratory or research facility',
                    'Creative studio or workshop',
                    'Outdoor or field work'
                  ].map((option, index) => (
                    <label key={index} className="flex items-center space-x-3 cursor-pointer">
                      <input type="radio" name="q2" className="w-4 h-4 text-primary-600" />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCompleteTest}
                className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Complete Test
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="bg-white rounded-2xl shadow-2xl p-12">
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Brain className="w-24 h-24 text-primary-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Aptitude Assessment</h2>
            <p className="text-xl text-gray-600 mb-8">
              Discover your ideal career path with our comprehensive aptitude test
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-blue-50 rounded-xl p-6"
            >
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-blue-800 mb-2">30 Minutes</h3>
              <p className="text-blue-600 text-sm">Quick and comprehensive</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-green-50 rounded-xl p-6"
            >
              <Target className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-green-800 mb-2">Detailed Results</h3>
              <p className="text-green-600 text-sm">Personalized recommendations</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-yellow-50 rounded-xl p-6"
            >
              <Award className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-yellow-800 mb-2">Career Guidance</h3>
              <p className="text-yellow-600 text-sm">Expert recommendations</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button
              onClick={handleStartTest}
              disabled={loading}
              className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 mx-auto"
            >
              {loading ? (
                <>
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Loading...</span>
                </>
              ) : (
                <>
                  <Play className="w-6 h-6" />
                  <span>Start Test</span>
                </>
              )}
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default AptitudeTest