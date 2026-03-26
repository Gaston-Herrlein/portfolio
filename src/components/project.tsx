import projectsData from "../const/projects.json";

import ProjectCard from "./projectCard";

type ProjectItem = {
  title: string;
  year?: string;
  role?: string;
  tech: string;
  description: string;
  image: string;
  link: string;
  category: string;
  longDescription?: string;
};

const Project = () => {
  const personalProjects = projectsData.personal;
  const freelanceProjects = projectsData.freelance;

  return (
    <section className="section" id="projects">
      <h2 className="section-title">Proyectos</h2>

      <div className="projects-group">
        <h3 className="projects-group-title">Proyectos Personales</h3>
        <div className="projects-grid">
          {personalProjects.map((project: ProjectItem) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>

      <div className="projects-group">
        <h3 className="projects-group-title">Freelance</h3>
        <div className="projects-grid">
          {freelanceProjects.map((project: ProjectItem) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
