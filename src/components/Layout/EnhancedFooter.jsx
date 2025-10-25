import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook, 
  Youtube, 
  Linkedin,
  Send,
  Heart
} from 'lucide-react'
import ContactForm from '../UI/ContactForm'

const EnhancedFooter = () => {
  const [activeSection, setActiveSection] = useState(null)

  const quickLinks = [
    { name: 'Aptitude Test', path: '/aptitude-test' },
    { name: 'Programs', path: '/programs' },
    { name: 'Education Support', path: '/education-support' },
    { name: 'Online Education', path: '/online-education' },
    { name: 'Services', path: '/services' },
    { name: 'Scholarships', path: '/scholarships' },
    { name: 'About', path: '/about' }
  ]

  const studyDestinations = [
    { name: 'Malaysia', path: '/country/malaysia' },
    { name: 'UAE', path: '/country/uae' },
    { name: 'Saudi Arabia', path: '/country/saudi-arabia' },
    { name: 'Turkey', path: '/country/turkey' },
    { name: 'Germany', path: '/country/germany' },
    { name: 'UK', path: '/country/uk' },
    { name: 'Canada', path: '/country/canada' },
    { name: 'Australia', path: '/country/australia' }
  ]

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: '#' },
    { name: 'Facebook', icon: Facebook, url: '#' },
    { name: 'YouTube', icon: Youtube, url: '#' },
    { name: 'LinkedIn', icon: Linkedin, url: '#' }
  ]

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Contact Form Section */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold mb-4"
            >
              Ready to Start Your Journey?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/90"
            >
              Get in touch with our education experts and take the first step towards your dreams
            </motion.p>
          </div>
          <ContactForm />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">EDNOC Education</h3>
                <p className="text-sm text-gray-400">Your Career Journey Starts Here</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering learners worldwide with quality education from SSLC to PhD. 
              Your dreams, our guidance - together we build futures.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-primary-500 transition-colors"></span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Study Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Study Destinations</h4>
            <ul className="space-y-2">
              {studyDestinations.map((destination) => (
                <li key={destination.path}>
                  <Link
                    to={destination.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-primary-500 transition-colors"></span>
                    <span>{destination.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">
                    123 Education Street<br />
                    Knowledge District, Learning City 12345
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-sm text-gray-400 hover:text-white transition-colors">
                  +1 (234) 567-8900
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <a href="mailto:info@ednoc.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                  info@ednoc.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">
                    Mon - Fri: 9:00 AM - 6:00 PM<br />
                    Sat: 10:00 AM - 4:00 PM<br />
                    Sun: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © 2024 EDNOC Education. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default EnhancedFooter