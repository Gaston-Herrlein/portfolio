import skillsData from "../const/skill.json";

import SkillChip from "./skillChip";

const Skills = () => {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">Habilidades y tecnología</h2>
      <div className="skills-container">
        {Object.entries(skillsData).map(([category, skillList]) => (
          <div key={category} className="skill-category">
            <h3 className="skill-category-title">{category}</h3>
            <div className="skill-category-grid">
              {skillList.map((skill) => (
                <SkillChip key={skill} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
