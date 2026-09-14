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
    return (
      <section className="section project-detail-section">
        <div className="container detail-card project-detail-status">
          <p className="section-tag">Project detail</p>
          <p role="status">Loading project...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section project-detail-section">
        <div className="container detail-card project-detail-status">
          <p className="section-tag">Projects</p>
          <h1>Project not found</h1>
          <p>{error === 'Project not found' ? error : `Unable to load project: ${error}`}</p>
          <Link className="button button-primary" to="/projects">
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section project-detail-section">
      <div className="container">
        <Link className="detail-back-link" to="/projects">
          <span aria-hidden="true">←</span> Back to projects
        </Link>

        <article className="project-detail-card content-card">
          <div className="project-detail-visual">
            <img src={project.image} alt={`${project.title} project preview`} />
            <span className="project-detail-index">Case study / {project.id}</span>
          </div>

          <div className="project-detail-content">
            <div className="project-detail-heading">
              <p className="section-tag">Selected work</p>
              <h1>{project.title}</h1>
              <p className="project-detail-description">{project.description}</p>
            </div>

            <div className="project-detail-copy">
              <p className="project-detail-label">Overview</p>
              <p>{project.details}</p>
            </div>

            <div className="project-detail-meta">
              <div>
                <p className="project-detail-label">Built with</p>
                <ul className="project-tags" aria-label={`${project.title} technologies`}>
                  {project.techStack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="project-detail-actions">
                <a className="button button-primary" href={project.link} target="_blank" rel="noreferrer">
                  View live project <span aria-hidden="true">↗</span>
                </a>
                <a className="button button-secondary" href={project.github} target="_blank" rel="noreferrer">
                  View source <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}