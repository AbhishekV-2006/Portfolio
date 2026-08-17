import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function ProjectsPage() {
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

        <div className="project-grid">
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
        </div>
      </div>
    </section>
  );
}