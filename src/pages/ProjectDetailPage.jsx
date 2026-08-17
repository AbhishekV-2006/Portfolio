import { Link, useParams } from 'react-router-dom';
import { getProjectById } from '../data/projects';

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const project = getProjectById(projectId);

  if (!project) {
    return (
      <section className="section">
        <div className="container detail-card">
          <p className="section-tag">Projects</p>
          <h2>Project not found</h2>
          <p>The project identifier in the URL does not match any project in the data file.</p>
          <Link className="button button-primary" to="/projects">
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container detail-card">
        <p className="section-tag">Project Detail</p>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <p>{project.details}</p>
        <ul className="project-tags" aria-label="Project technologies">
          {project.techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-links">
          <Link className="project-link" to="/projects">
            Back to Projects
          </Link>
          <a className="project-link" href={project.link}>
            Live
          </a>
        </div>
      </div>
    </section>
  );
}