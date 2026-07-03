import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function PortfolioSection() {
  return (
    <section id="portfolio" className="section container">
      <SectionTitle
        label="Portfolio"
        title="Selected Projects"
        description="A few projects that show my approach to problem solving, design, and implementation."
      />
      <div className="grid projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default PortfolioSection;
