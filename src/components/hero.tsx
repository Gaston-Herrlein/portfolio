import { Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="intro">
        <div className="eyebrow">Hola, yo soy</div>
        <h1 className="hero-title">Gastón Herrlein</h1>
        <p className="lead">
          Soy un desarrollador web full-stack back-end con pasión por la
          tecnología y la innovación, enfocado en diseñar y construir soluciones
          modernas, escalables y eficientes que aporten valor real y respondan a
          los desafíos del entorno digital actual.
        </p>
        <div className="actions">
          <a className="cta-btn" href="#contact">
            <Mail size={16} />
            Contáctame
          </a>
          <a
            href="#projects"
            className="nav-link"
            style={{ marginLeft: "0.5rem" }}
          >
            Ver trabajos
          </a>
        </div>
      </div>
      <aside className="profile-card">
        <div className="profile-avatar">
          <img src="./profile.jpg" alt="Profile" />
        </div>
        <div style={{ fontWeight: "600", fontSize: "16px" }}>
          Full Stack Developer
        </div>
        <div style={{ color: "#64748b", fontSize: "14px" }}>
          Coruña • España
        </div>
      </aside>
    </section>
  );
};

export default Hero;
