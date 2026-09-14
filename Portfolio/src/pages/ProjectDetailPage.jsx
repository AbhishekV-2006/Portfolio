import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchApi } from '../api';

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loadedProjectId, setLoadedProjectId] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchApi(`/api/projects/${projectId}`)
      .then((data) => {
        setProject(data);
        setLoadedProjectId(projectId);
        setError('');
      })
      .catch((requestError) => {
        setLoadedProjectId(projectId);
        setError(requestError.message);
      });
  }, [projectId]);

  if (loadedProjectId !== projectId && !error) {
    return <section className="section"><div className="container detail-card"><p role="status">Loading project...</p></div></section>;
  }

  if (error) {
    return (
      <section className="section">
        <div className="container detail-card">
          <p className="section-tag">Projects</p>
          <h2>Project not found</h2>
          <p>{error === 'Project not found' ? error : `Unable to load project: ${error}`}</p>
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