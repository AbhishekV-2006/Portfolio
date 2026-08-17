import React from 'react'
import Navbar from './NavBar'
import Footer from './Footer'

function Layout({ children, toggleTheme, theme }) {
  return (
    <div className="app-shell">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main id="content" className="app-main">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout