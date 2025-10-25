import React from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Users, BookOpen, DollarSign, Language, Clock } from 'lucide-react'

const CountryPage = () => {
  const { countryName } = useParams()

  // Mock data for demonstration - in a real app, this would come from an API
  const countryData = {
    malaysia: {
      name: 'Malaysia',
      flag: 'https://flagcdn.com/w320/my.png',
      description: 'Malaysia has emerged as a leading education hub in Southeast Asia, offering world-class universities at affordable costs. With its multicultural environment and modern infrastructure, it provides an ideal setting for international students.',
      universities: 25,
      internationalStudents: '150,000+',
      averageCost: '$3,000 - $8,000',
      language: 'English, Malay',
      visaProcessing: '2-4 weeks',
      highlights: [
        'Affordable tuition fees compared to Western countries',
        'High-quality education with international recognition',
        'Multicultural society with English widely spoken',
        'Modern infrastructure and facilities',
        'Strategic location in Southeast Asia'
      ]
    },
    uae: {
      name: 'UAE',
      flag: 'https://flagcdn.com/w320/ae.png',
      description: 'The UAE offers a unique blend of traditional values and modern education. With its rapidly growing economy and world-class institutions, it has become a sought-after destination for students seeking quality education in the Middle East.',
      universities: 18,
      internationalStudents: '120,000+',
      averageCost: '$8,000 - $15,000',
      language: 'English, Arabic',
      visaProcessing: '3-6 weeks',
      highlights: [
        'Tax-free income for future employment',
        'Modern campuses with state-of-the-art facilities',
        'Strategic location connecting East and West',
        'Safe and secure environment',
        'Growing job market opportunities'
      ]
    },
    'saudi-arabia': {
      name: 'Saudi Arabia',
      flag: 'https://flagcdn.com/w320/sa.png',
      description: 'Saudi Arabia is investing heavily in education as part of its Vision 2030 initiative. The country offers excellent opportunities for students interested in Islamic studies, engineering, and business.',
      universities: 15,
      internationalStudents: '80,000+',
      averageCost: '$5,000 - $12,000',
      language: 'English, Arabic',
      visaProcessing: '4-8 weeks',
      highlights: [
        'Strong focus on research and innovation',
        'Scholarship opportunities available',
        'Rich cultural heritage and history',
        'Growing higher education sector',
        'Economic diversification creating new opportunities'
      ]
    },
    turkey: {
      name: 'Turkey',
      flag: 'https://flagcdn.com/w320/tr.png',
      description: 'Turkey bridges Europe and Asia, offering a unique cultural experience along with quality education. Its universities are gaining international recognition for academic excellence.',
      universities: 30,
      internationalStudents: '200,000+',
      averageCost: '$3,000 - $7,000',
      language: 'English, Turkish',
      visaProcessing: '2-6 weeks',
      highlights: [
        'Affordable cost of living and tuition',
        'Rich historical and cultural heritage',
        'Strategic geographical location',
        'Growing international student community',
        'Quality education at reasonable costs'
      ]
    },
    germany: {
      name: 'Germany',
      flag: 'https://flagcdn.com/w320/de.png',
      description: 'Germany is renowned for its engineering excellence and tuition-free public universities. It offers world-class education with strong industry connections and research opportunities.',
      universities: 45,
      internationalStudents: '350,000+',
      averageCost: '$500 - $3,000',
      language: 'English, German',
      visaProcessing: '4-12 weeks',
      highlights: [
        'Tuition-free education at public universities',
        'World-class engineering and technical programs',
        'Strong economy and job opportunities',
        'High standard of living',
        'Excellent research facilities'
      ]
    },
    uk: {
      name: 'UK',
      flag: 'https://flagcdn.com/w320/gb.png',
      description: 'The UK boasts some of the world\'s oldest and most prestigious universities. With a rich academic tradition and diverse culture, it remains a top choice for international students.',
      universities: 60,
      internationalStudents: '500,000+',
      averageCost: '$15,000 - $35,000',
      language: 'English',
      visaProcessing: '3-8 weeks',
      highlights: [
        'World-renowned universities and colleges',
        'Shorter degree programs (3 years for bachelor\'s)',
        'Global recognition of UK degrees',
        'Multicultural environment',
        'Strong alumni networks worldwide'
      ]
    }
  }

  const country = countryData[countryName] || countryData.malaysia

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center gap-12"
          >
            <div className="flex-shrink-0">
              <img
                src={country.flag}
                alt={`${country.name} flag`}
                className="w-32 h-24 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Study in <span className="gradient-text">{country.name}</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {country.description}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Country Information Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Universities</h3>
              </div>
              <p className="text-3xl font-bold text-blue-600 mb-2">{country.universities}</p>
              <p className="text-gray-600">Partner institutions</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">International Students</h3>
              </div>
              <p className="text-3xl font-bold text-green-600 mb-2">{country.internationalStudents}</p>
              <p className="text-gray-600">Currently studying</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <DollarSign className="w-8 h-8 text-yellow-600" />
                <h3 className="text-xl font-bold text-gray-900">Average Cost</h3>
              </div>
              <p className="text-2xl font-bold text-yellow-600 mb-2">{country.averageCost}</p>
              <p className="text-gray-600">Per year</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Language className="w-8 h-8 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-900">Languages</h3>
              </div>
              <p className="text-lg font-bold text-purple-600 mb-2">{country.language}</p>
              <p className="text-gray-600">Medium of instruction</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-8 h-8 text-red-600" />
                <h3 className="text-xl font-bold text-gray-900">Visa Processing</h3>
              </div>
              <p className="text-lg font-bold text-red-600 mb-2">{country.visaProcessing}</p>
              <p className="text-gray-600">Average processing time</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="w-8 h-8 text-indigo-600" />
                <h3 className="text-xl font-bold text-gray-900">Location</h3>
              </div>
              <p className="text-lg font-bold text-indigo-600 mb-2">Global</p>
              <p className="text-gray-600">Strategic location</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Study in <span className="gradient-text">{country.name}</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the unique advantages of pursuing your education in {country.name}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {country.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-primary-600 rounded-full" />
                </div>
                <p className="text-gray-700 leading-relaxed">{highlight}</p>
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
              Ready to Study in {country.name}?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let us help you find the perfect program and guide you through the application process
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                Explore Programs
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                Get Guidance
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CountryPage