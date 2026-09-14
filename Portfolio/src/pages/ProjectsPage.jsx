import { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { fetchApi } from '../api';

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchApi('/api/projects')
      .then(setProjects)
      .catch((requestError) => setError(requestError.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="section-tag">Personal Projects</p>
            <h2>Selected work</h2>
          </div>
          <p className="section-summary">
            Full-stack and database projects built with modern tools and practical system design.
          </p>
        </div>

        {isLoading && <p role="status">Loading projects...</p>}
        {error && <p role="alert">Unable to load projects: {error}</p>}
        {!isLoading && !error && <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              image={project.image}
              link={project.link}
              github={project.github}
              details={project.details}
            />
          ))}
        </div>}
      </div>
    </section>
  );
}