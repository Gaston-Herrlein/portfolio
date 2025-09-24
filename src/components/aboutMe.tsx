import skillsData from "../const/skill.json";

const AboutMe = () => {
  return (
    <section className="section about" id="about">
      <div>
        <h2 className="section-title">About me</h2>
        <p style={{ marginBottom: "20px", color: "#334155" }}>
          I'm a full-stack web developer focused primarily on the back-end. My
          journey into programming began after six years of studying Electronic
          Engineering, where I discovered my passion for solving problems
          through technology. Since then, I've dedicated my time to constant
          training, first self-taught and then in an intensive bootcamp at
          KeepCoding, which solidified my decision to grow in this world.
        </p>
        <p style={{ marginBottom: "20px", color: "#334155" }}>
          For the past two years, I've worked on personal projects and as a
          freelancer, which allowed me to gain practical experience and develop
          a true commitment to software quality. I'm motivated by the idea of
          building technological solutions that not only work, but also add
          value and improve people's lives.
        </p>
        <p style={{ color: "#334155" }}>
          I'm curious, persevering, and constantly learning. I'm currently
          interested in delving deeper into modern architectures such as
          microservices and technologies that allow for robust project scaling.
          For me, web development isn't just a job; it's a path of personal and
          professional growth where I strive to improve every day.
        </p>
      </div>
      <div>
        <h3
          style={{
            fontSize: "20px",
            fontWeight: "600",
            marginBottom: "16px",
          }}
        >
          Skills & Technologies
        </h3>
        {Object.entries(skillsData).map(([category, skillList]) => (
          <div key={category} style={{ marginBottom: "20px" }}>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "8px",
                textTransform: "capitalize",
                color: "#475569",
              }}
            >
              {category}
            </h4>
            <div className="skills-grid">
              {skillList.map((skill, index) => (
                <div key={index} className="skill-chip">
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

export default AboutMe;
