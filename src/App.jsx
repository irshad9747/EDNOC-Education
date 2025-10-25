import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import ProgramsSimple from './pages/ProgramsSimple'
import EducationSupport from './pages/EducationSupport'
import OnlineEducation from './pages/OnlineEducation'
import Services from './pages/Services'
import AptitudeTest from './pages/AptitudeTest'
import Scholarships from './pages/ImprovedScholarships'
import CountryPageSimple from './pages/CountryPageSimple'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<ProgramsSimple />} />
        <Route path="/education-support" element={<EducationSupport />} />
        <Route path="/online-education" element={<OnlineEducation />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aptitude-test" element={<AptitudeTest />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/country/:countryName" element={<CountryPageSimple />} />
      </Routes>
    </Layout>
  )
}

export default App