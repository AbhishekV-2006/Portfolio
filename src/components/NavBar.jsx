import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function NavBar({ theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/home" className="brand" aria-label="Portfolio">
          <span className="brand-mark">A</span>
          <span>Abhishek</span>
        </Link>

        <div className="header-actions">
          <nav className="site-nav" aria-label="Primary navigation">
            <ul>
              <li><NavLink to="/home">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/projects">Projects</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav>

          <button
            onClick={onToggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
            aria-pressed={theme === 'dark'}
          >
            {theme === 'light' ? 'Dark' : 'Light'}
          </button>
        </div>
      </div>
    </header>
  )
}

export default NavBar