# Portfolio Website
A modern, responsive portfolio website showcasing full-stack projects and development experience. Built with React, Vite, and React Router.

Features

Multi-page Navigation: Home, About, Projects, and Contact pages with React Router
Project Showcase: Display detailed project cards with tech stack, descriptions, and links
Theme Support: Light and dark mode toggle for better user experience
Responsive Design: Mobile-friendly layout using CSS
Dynamic Content: Projects data stored in a centralized data file for easy updates
ESLint Configuration: Code quality and consistency checks


## Available Routes

 `/` → Redirects to `/home`
 `/home` → Home page
 `/about` → About page-
 `/projects` → Projects listing page
 `/contact` → Contact page
 `*` → Not found (redirects to home)

Features Explained

Components

Layout: Wrapper component that includes NavBar and Footer
NavBar: Navigation menu with theme toggle
Footer: Footer information
ProjectCard: Reusable component for displaying project information

Pages

HomePage: Landing page with featured content
AboutPage: Personal or professional information
ProjectsPage: Gallery of all projects
ProjectDetailPage: Detailed view of individual projects
ContactPage: Contact form or information
NotFoundPage: 404 error page

Project Card type
{
  id: 'project-id',
  title: 'Project Title',
  description: 'Short description',
  techStack: ['React', 'Node.js'],
  image: imageImport,
  link: 'project-url',
  github: 'github-url',
  details: 'Detailed description'
}
