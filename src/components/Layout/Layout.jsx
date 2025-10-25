import React from 'react'
import EnhancedHeader from './EnhancedHeader'
import EnhancedFooter from './EnhancedFooter'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <EnhancedHeader />
      <main className="flex-grow">
        {children}
      </main>
      <EnhancedFooter />
    </div>
  )
}

export default Layout