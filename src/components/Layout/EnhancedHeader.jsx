import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, BookOpen, Brain, Users, Globe, Award, Briefcase, Heart, MapPin, Info } from 'lucide-react'

const EnhancedHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  const countries = [
    { name: 'Malaysia', path: '/country/malaysia' },
    { name: 'UAE', path: '/country/uae' },
    { name: 'Saudi Arabia', path: '/country/saudi-arabia' },
    { name: 'Turkey', path: '/country/turkey' },
    { name: 'Germany', path: '/country/germany' },
    { name: 'UK', path: '/country/uk' },
    { name: 'Canada', path: '/country/canada' },
    { name: 'Australia', path: '/country/australia' },
    { name: 'USA', path: '/country/usa' },
    { name: 'France', path: '/country/france' },
    { name: 'Italy', path: '/country/italy' },
    { name: 'Spain', path: '/country/spain' },
    { name: 'Netherlands', path: '/country/netherlands' },
    { name: 'Sweden', path: '/country/sweden' },
    { name: 'Norway', path: '/country/norway' },
    { name: 'Denmark', path: '/country/denmark' },
    { name: 'Finland', path: '/country/finland' },
    { name: 'Switzerland', path: '/country/switzerland' },
    { name: 'Austria', path: '/country/austria' },
    { name: 'Belgium', path: '/country/belgium' }
  ]

  const navigationItems = [
    { name: 'Aptitude Test', path: '/aptitude-test', icon: Brain },
    { name: 'Programs', path: '/programs', icon: BookOpen },
    { name: 'Education Support', path: '/education-support', icon: Users },
    { name: 'Online Education', path: '/online-education', icon: Globe },
    { name: 'Services', path: '/services', icon: Briefcase },
    { name: 'Scholarships', path: '/scholarships', icon: Award },
    { name: 'Destinations', path: '#', icon: MapPin, isDropdown: true },
    { name: 'About', path: '/about', icon: Info }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => {
    if (path === '#') return false
    return location.pathname === path || location.pathname.startsWith(path + '/')
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center"
            >
              <BookOpen className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h1 className="text-xl font-bold gradient-text">EDNOC Education</h1>
              <p className="text-xs text-gray-600">Your Career Journey Starts Here</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.isDropdown ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        activeDropdown === item.name
                          ? 'bg-primary-100 text-primary-700'
                          : 'text-gray-700 hover:text-primary-600 hover:bg-gray-100'
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                        >
                          <div className="max-h-96 overflow-y-auto">
                            {countries.map((country) => (
                              <Link
                                key={country.path}
                                to={country.path}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {country.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? 'bg-primary-100 text-primary-700'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.isDropdown ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(
                          activeDropdown === item.name ? null : item.name
                        )}
                        className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
                      >
                        <div className="flex items-center space-x-2">
                          <item.icon className="w-4 h-4" />
                          <span>{item.name}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-8 mt-2 space-y-1"
                          >
                            {countries.map((country) => (
                              <Link
                                key={country.path}
                                to={country.path}
                                className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-600"
                                onClick={() => {
                                  setIsMobileMenuOpen(false)
                                  setActiveDropdown(null)
                                }}
                              >
                                {country.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 ${
                        isActive(item.path) ? 'bg-primary-50 text-primary-700' : ''
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default EnhancedHeader