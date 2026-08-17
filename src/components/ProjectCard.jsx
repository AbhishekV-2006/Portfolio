export default function ProjectCard({ title, description, techStack, image, link, github, details }) {
  return (
    <article className="project-card content-card">
      <div className="project-card-media">
        <img className="project-card-image" src={image} alt={title} />
      </div>

      <div className="project-card-body">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <p className="project-card-details">{details}</p>
        </div>

        <div className="project-card-footer">
          <ul className="tech-stack" aria-label={`${title} tech stack`}>
            {techStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>

          <div className="project-card-links">
            <a href={link} target="_blank" rel="noreferrer">
              Live Demo
            </a>
            <a href={github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}