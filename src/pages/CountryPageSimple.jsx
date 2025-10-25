import React from 'react'
import { useParams } from 'react-router-dom'

const CountryPageSimple = () => {
  const { countryName } = useParams()
  
  return (
    <div className="min-h-screen pt-20 bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Study in {countryName?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover educational opportunities in {countryName?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
        </p>
        <div className="mt-8">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Educational Programs Available
            </h2>
            <p className="text-gray-600 mb-6">
              Explore various degree programs, universities, and scholarship opportunities in this country.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800">Universities</h3>
                <p className="text-blue-600">20+ Partner Universities</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800">Programs</h3>
                <p className="text-green-600">50+ Degree Programs</p>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Explore Programs
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryPageSimple
