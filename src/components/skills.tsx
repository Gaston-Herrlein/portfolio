import skillsData from "../const/skill.json";

const Skills = () => {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">Habilidades y tecnología</h2>
      <div className="skills-container">
        {Object.entries(skillsData).map(([category, skillList]) => (
          <div key={category} className="skill-category">
            <h3 className="skill-category-title">{category}</h3>
            <div className="skills-grid">
              {skillList.map((skill) => (
                <div key={skill} className="skill-chip">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
