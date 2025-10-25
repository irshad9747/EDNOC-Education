import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, BookOpen, Stethoscope, PawPrint, Heart, Flask, Cog, Palette, Atom, Brain, Cpu, Users } from 'lucide-react'

const Programs = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const programCategories = [
    {
      id: 'medicine',
      title: 'Medicine (MBBS & BDS)',
      icon: Stethoscope,
      description: 'Comprehensive medical programs including MBBS and dental surgery',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      programs: 25,
      universities: 15,
      duration: '5-6 years'
    },
    {
      id: 'other-medicine',
      title: 'Other Medicine',
      icon: Heart,
      description: 'Pharmacy, physiotherapy, and allied health sciences',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
      programs: 18,
      universities: 12,
      duration: '3-4 years'
    },
    {
      id: 'veterinary',
      title: 'Animal and Veterinary Science',
      icon: PawPrint,
      description: 'Veterinary medicine and animal science programs',
      image: 'https://images.unsplash.com/photo-1442291923880-43d323e178ad?w=400&h=300&fit=crop',
      programs: 12,
      universities: 8,
      duration: '4-5 years'
    },
    {
      id: 'nursing',
      title: 'Nursing',
      icon: Heart,
      description: 'Professional nursing and healthcare programs',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      programs: 20,
      universities: 14,
      duration: '3-4 years'
    },
    {
      id: 'health-science',
      title: 'Health Science',
      icon: Flask,
      description: 'Public health, nutrition, and health management',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
      programs: 15,
      universities: 10,
      duration: '3-4 years'
    },
    {
      id: 'engineering',
      title: 'Engineering',
      icon: Cog,
      description: 'Civil, mechanical, electrical, and software engineering',
      image: 'https://images.unsplash.com/photo-1581092921356-143de2397a69?w=400&h=300&fit=crop',
      programs: 35,
      universities: 22,
      duration: '4 years'
    },
    {
      id: 'commerce',
      title: 'Commerce & Management',
      icon: BookOpen,
      description: 'Business administration, finance, and management',
      image: 'https://images.unsplash.com/photo-1553877522-6494745c1044?w=400&h=300&fit=crop',
      programs: 28,
      universities: 18,
      duration: '3-4 years'
    },
    {
      id: 'design',
      title: 'Design',
      icon: Palette,
      description: 'Graphic design, fashion, and creative arts',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
      programs: 16,
      universities: 12,
      duration: '3-4 years'
    },
    {
      id: 'science',
      title: 'Science',
      icon: Atom,
      description: 'Physics, chemistry, biology, and mathematics',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop',
      programs: 22,
      universities: 16,
      duration: '3-4 years'
    },
    {
      id: 'social-science',
      title: 'Social Science',
      icon: Users,
      description: 'Psychology, sociology, and political science',
      image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&h=300&fit=crop',
      programs: 18,
      universities: 14,
      duration: '3-4 years'
    },
    {
      id: 'education',
      title: 'Education & Teaching',
      icon: BookOpen,
      description: 'Teacher training and educational management',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop',
      programs: 14,
      universities: 10,
      duration: '3-4 years'
    },
    {
      id: 'ai-ml',
      title: 'AI / ML / Robotics',
      icon: Cpu,
      description: 'Artificial intelligence, machine learning, and robotics',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop',
      programs: 10,
      universities: 8,
      duration: '4 years'
    }
  ]

  const filteredPrograms = programCategories.filter(category => {
    const matchesSearch = category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         category.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || category.id === selectedCategory
    return matchesSearch && matchesCategory
  })

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
              Our <span className="gradient-text">Programs</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover comprehensive educational programs designed to shape your future. 
              From medicine to engineering, we offer pathways to success in every field.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search programs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary-500"
              >
                <option value="all">All Categories</option>
                {programCategories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPrograms.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">No programs found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPrograms.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
                >
                  <div className="relative h-48">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <category.icon className="w-6 h-6 text-white" />
                        <h3 className="text-xl font-bold text-white">{category.title}</h3>
                      </div>
                      <p className="text-white/90 text-sm">{category.description}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-600">{category.programs}</div>
                        <div className="text-sm text-gray-600">Programs</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-secondary-600">{category.universities}</div>
                        <div className="text-sm text-gray-600">Universities</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <BookOpen className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">Duration: {category.duration}</span>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Explore Programs
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
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
              Not Sure Which Program is Right for You?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Take our aptitude test to discover programs that match your interests and career goals
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300"
            >
              Take Aptitude Test
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Programs