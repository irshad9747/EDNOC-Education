import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, X, Calendar, Award, Users, Info } from 'lucide-react'
import ScholarshipCard from '../components/UI/ScholarshipCard'

const ImprovedScholarships = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('all')
  const [sortBy, setSortBy] = useState('deadline')
  const [activeFilters, setActiveFilters] = useState([])

  const scholarshipsData = [
    {
      id: 1,
      type: 'international',
      title: 'Global Excellence Scholarship',
      description: 'Full tuition coverage for outstanding international students pursuing undergraduate or postgraduate studies in any field.',
      awardAmount: 50000,
      eligibility: 'Minimum 3.5 GPA, leadership experience',
      deadline: '2024-12-15',
      field: 'All Fields',
      applications: 1250
    },
    {
      id: 2,
      type: 'national',
      title: 'Future Leaders Grant',
      description: 'Merit-based scholarship for domestic students demonstrating exceptional academic achievement and community involvement.',
      awardAmount: 25000,
      eligibility: 'Top 10% of class, community service',
      deadline: '2024-11-30',
      field: 'Business & Management',
      applications: 890
    },
    {
      id: 3,
      type: 'international',
      title: 'STEM Innovation Scholarship',
      description: 'Supporting international students in science, technology, engineering, and mathematics fields.',
      awardAmount: 35000,
      eligibility: 'STEM background, research experience',
      deadline: '2024-12-31',
      field: 'Engineering & Technology',
      applications: 675
    },
    {
      id: 4,
      type: 'national',
      title: 'Healthcare Heroes Scholarship',
      description: 'Dedicated to students pursuing careers in healthcare and medical fields.',
      awardAmount: 30000,
      eligibility: 'Healthcare major, volunteer experience',
      deadline: '2025-01-15',
      field: 'Medicine & Health Sciences',
      applications: 420
    },
    {
      id: 5,
      type: 'international',
      title: 'Arts & Culture Fellowship',
      description: 'Supporting talented international students in creative arts, design, and cultural studies.',
      awardAmount: 20000,
      eligibility: 'Portfolio required, arts background',
      deadline: '2024-12-20',
      field: 'Arts & Design',
      applications: 315
    },
    {
      id: 6,
      type: 'national',
      title: 'Rural Education Grant',
      description: 'Helping students from rural communities access higher education opportunities.',
      awardAmount: 15000,
      eligibility: 'Rural background, financial need',
      deadline: '2025-02-28',
      field: 'Education & Teaching',
      applications: 580
    },
    {
      id: 7,
      type: 'international',
      title: 'Women in Tech Scholarship',
      description: 'Empowering women to pursue careers in technology and computer science.',
      awardAmount: 40000,
      eligibility: 'Female students, tech background',
      deadline: '2024-11-25',
      field: 'Computer Science',
      applications: 720
    },
    {
      id: 8,
      type: 'national',
      title: 'Sustainability Research Grant',
      description: 'Supporting research in environmental science and sustainable development.',
      awardAmount: 28000,
      eligibility: 'Environmental studies, research proposal',
      deadline: '2025-03-15',
      field: 'Environmental Science',
      applications: 285
    },
    {
      id: 9,
      type: 'international',
      title: 'MBA Excellence Award',
      description: 'Full scholarship for exceptional MBA candidates with leadership potential.',
      awardAmount: 60000,
      eligibility: 'GMAT 700+, work experience',
      deadline: '2024-12-10',
      field: 'Business Administration',
      applications: 450
    },
    {
      id: 10,
      type: 'national',
      title: 'First Generation Scholar',
      description: 'Supporting first-generation college students in their academic journey.',
      awardAmount: 22000,
      eligibility: 'First in family to attend college',
      deadline: '2025-01-31',
      field: 'All Fields',
      applications: 680
    },
    {
      id: 11,
      type: 'international',
      title: 'Engineering Innovation Grant',
      description: 'For students pursuing innovative engineering projects and research.',
      awardAmount: 32000,
      eligibility: 'Engineering major, project proposal',
      deadline: '2024-12-25',
      field: 'Engineering',
      applications: 395
    },
    {
      id: 12,
      type: 'national',
      title: 'Community Impact Scholarship',
      description: 'Recognizing students who have made significant contributions to their communities.',
      awardAmount: 18000,
      eligibility: 'Community service, leadership',
      deadline: '2025-02-15',
      field: 'Social Sciences',
      applications: 520
    }
  ]

  const filteredAndSortedScholarships = useMemo(() => {
    let filtered = scholarshipsData.filter(scholarship => {
      const matchesSearch = scholarship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          scholarship.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          scholarship.field.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesType = selectedType === 'all' || scholarship.type === selectedType
      return matchesSearch && matchesType
    })

    // Sort scholarships
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'deadline':
          return new Date(a.deadline) - new Date(b.deadline)
        case 'amount':
          return b.awardAmount - a.awardAmount
        case 'title':
          return a.title.localeCompare(b.title)
        default:
          return 0
      }
    })

    return filtered
  }, [searchTerm, selectedType, sortBy])

  const clearFilter = (filterType) => {
    if (filterType === 'search') {
      setSearchTerm('')
    } else if (filterType === 'type') {
      setSelectedType('all')
    }
  }

  const clearAllFilters = () => {
    setSearchTerm('')
    setSelectedType('all')
    setSortBy('deadline')
  }

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
              <span className="gradient-text">Scholarships</span> & Grants
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover funding opportunities to support your educational journey. 
              From merit-based awards to need-based grants, find the perfect scholarship for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search scholarships..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
              />
            </div>

            {/* Filter Controls */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary-500"
                >
                  <option value="all">All Types</option>
                  <option value="national">National</option>
                  <option value="international">International</option>
                </select>
              </div>

              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-gray-600" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary-500"
                >
                  <option value="deadline">Sort by Deadline</option>
                  <option value="amount">Sort by Amount</option>
                  <option value="title">Sort by Title</option>
                </select>
              </div>

              {(searchTerm || selectedType !== 'all') && (
                <button
                  onClick={clearAllFilters}
                  className="flex items-center space-x-1 text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                  <span className="text-sm">Clear All</span>
                </button>
              )}
            </div>
          </div>

          {/* Active Filters Display */}
          {(searchTerm || selectedType !== 'all') && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-sm text-gray-600">Active filters:</span>
              {searchTerm && (
                <span className="inline-flex items-center space-x-1 bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">
                  <span>Search: "{searchTerm}"</span>
                  <button onClick={() => clearFilter('search')} className="hover:text-primary-600">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedType !== 'all' && (
                <span className="inline-flex items-center space-x-1 bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm">
                  <span>Type: {selectedType}</span>
                  <button onClick={() => clearFilter('type')} className="hover:text-secondary-600">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Results Count */}
      <section className="py-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredAndSortedScholarships.length}</span> of{' '}
            <span className="font-semibold">{scholarshipsData.length}</span> scholarships
          </p>
        </div>
      </section>

      {/* Scholarships Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredAndSortedScholarships.length === 0 ? (
            <div className="text-center py-16">
              <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No scholarships found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredAndSortedScholarships.map((scholarship, index) => (
                  <motion.div
                    key={scholarship.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <ScholarshipCard scholarship={scholarship} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* Application Tips */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Scholarship <span className="gradient-text">Application Tips</span>
            </h2>
            <p className="text-xl text-gray-600">
              Increase your chances of success with these expert recommendations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-primary-800 mb-3">Application Best Practices</h3>
              <ul className="space-y-2 text-primary-700">
                <li className="flex items-start space-x-2">
                  <span className="text-primary-600">•</span>
                  <span>Start your application early to avoid last-minute rush</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-600">•</span>
                  <span>Tailor your essays to each scholarship's specific requirements</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-600">•</span>
                  <span>Highlight your achievements and community involvement</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-600">•</span>
                  <span>Get strong letters of recommendation from relevant sources</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-secondary-800 mb-3">Important Deadlines</h3>
              <ul className="space-y-2 text-secondary-700">
                <li className="flex items-start space-x-2">
                  <span className="text-secondary-600">•</span>
                  <span>Most scholarships have deadlines 6-12 months before program start</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-secondary-600">•</span>
                  <span>Apply for multiple scholarships to increase your chances</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-secondary-600">•</span>
                  <span>Keep track of all required documents and submission dates</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-secondary-600">•</span>
                  <span>Follow up on your applications after submission</span>
                </li>
              </ul>
            </div>
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
              Need Help with Your Application?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our expert counselors can guide you through the scholarship application process
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300"
            >
              Get Expert Guidance
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ImprovedScholarships