import { getSkillProjects } from "../const/skillProjects";
import Popover from "./ui/popover";

type Props = {
  skill: string;
};

const SkillChip = ({ skill }: Props) => {
  const projects = getSkillProjects(skill);
  const hasProjects = projects.length > 0;

  const popoverContent = hasProjects ? (
    <ul className="skill-popover-list">
      {projects.map((project) => (
        <li key={project} className="skill-popover-item">
          {project}
        </li>
      ))}
    </ul>
  ) : (
    <span className="skill-popover-empty">Sin proyectos asociados</span>
  );

  return (
    <Popover
      trigger={
        <div className="skill-chip">
          <span className="skill-chip-text">{skill}</span>
        </div>
      }
      content={popoverContent}
    />
  );
};

export default SkillChip;