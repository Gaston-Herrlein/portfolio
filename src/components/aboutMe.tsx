import skillsData from "../const/skill.json";

const AboutMe = () => {
  return (
    <section className="section about" id="about">
      <div>
        <h2 className="section-title">Sobre mí</h2>
        <p style={{ marginBottom: "20px", color: "#334155" }}>
          Soy un desarrollador web full-stack, con un enfoque principal en el
          back-end. Mi camino en la programación comenzó después de seis años
          estudiando Ingeniería Electrónica, etapa en la que descubrí mi
          verdadera pasión: resolver problemas a través de la tecnología. Desde
          entonces, he dedicado mi tiempo a formarme de manera constante
          —primero de forma autodidacta y luego en un bootcamp intensivo en
          KeepCoding—, experiencia que consolidó mi decisión de crecer
          profesionalmente en este mundo.
        </p>
        <p style={{ marginBottom: "20px", color: "#334155" }}>
          Durante los últimos dos años, he trabajado en proyectos personales y
          como freelance, lo que me ha permitido adquirir experiencia práctica y
          desarrollar un fuerte compromiso con la calidad del software. Me
          motiva la idea de construir soluciones tecnológicas que no solo
          funcionen, sino que también aporten valor y mejoren la vida de las
          personas.
        </p>
        <p style={{ color: "#334155" }}>
          Soy una persona curiosa, perseverante y en aprendizaje continuo.
          Actualmente, me interesa profundizar en arquitecturas modernas como
          los microservicios y en tecnologías que permitan escalar proyectos de
          forma sólida. Para mí, el desarrollo web no es solo un trabajo, sino
          un camino de crecimiento personal y profesional en el que busco
          superarme cada día.
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
          Habilidades y tecnología
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
