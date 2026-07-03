function ProjectCard({ project }) {
  return (
    <article className="card project-card reveal" aria-label={project.title}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="tech-stack" aria-label="Tech stack">
        {project.techStack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <a href={project.link} target="_blank" rel="noreferrer">
        View Project
      </a>
    </article>
  );
}

export default ProjectCard;
