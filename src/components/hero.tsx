import { Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="intro">
        <div className="eyebrow">Hi, I'm</div>
        <h1 className="hero-title">Gastón Herrlein</h1>
        <p className="lead">
          Full-stack web developer with a back-end specialization, focused on
          designing and building modern, scalable, and efficient solutions that
          respond to the challenges of the digital environment.
        </p>
        <div className="actions">
          <a className="cta-btn" href="#contact">
            <Mail size={16} />
            Hire me
          </a>
          <a href="#projects" className="nav-link">
            See work
          </a>
        </div>
      </div>
      <aside className="profile-card">
        <div className="profile-avatar">
          <img src="/profile.jpg" alt="Profile" />
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
