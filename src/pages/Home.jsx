import React from 'react'
import { motion } from 'framer-motion'
import ImprovedHeroSection from '../components/Sections/ImprovedHeroSection'
import ImprovedCountriesSection from '../components/Sections/ImprovedCountriesSection'
import StatsSection from '../components/Sections/StatsSection'
import FeaturesSection from '../components/Sections/FeaturesSection'
import TestimonialsSection from '../components/Sections/TestimonialsSection'

const Home = () => {
  return (
    <div className="min-h-screen">
      <ImprovedHeroSection />
      <StatsSection />
      <ImprovedCountriesSection />
      <FeaturesSection />
      <TestimonialsSection />
    </div>
  )
}

export default Home