import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
        <main className="max-w-6xl mx-auto">
          { children }
        </main>
      <Footer />
    </div>
  )
}

export default Layout