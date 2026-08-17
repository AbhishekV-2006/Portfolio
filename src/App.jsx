import { useState, useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'

function AppRoutes({ toggleTheme, theme }) {
  return (
    <Layout toggleTheme={toggleTheme} theme={theme}>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Layout>
  )
}

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }

  return <AppRoutes toggleTheme={toggleTheme} theme={theme} />
}

export default App
