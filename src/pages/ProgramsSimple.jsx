import React from 'react'

const ProgramsSimple = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Programs</h1>
        <p className="text-xl text-gray-600">This is a simplified version of the Programs page</p>
        <div className="mt-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Available Programs</h2>
            <p className="text-gray-600 mb-6">Medicine, Engineering, Business, and more...</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Explore Programs
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgramsSimple
