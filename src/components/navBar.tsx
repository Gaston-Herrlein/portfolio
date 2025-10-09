const NavBar = ({ activeSection }: { activeSection: string }) => {
  return (
    <nav className="site-nav">
      <a
        href="#about"
        className={`nav-link ${activeSection === "about" ? "active" : ""}`}
      >
        Sobre mí
      </a>
      <a
        href="#about"
        className={`nav-link ${activeSection === "about" ? "active" : ""}`}
      >
        Habilidades
      </a>
      <a
        href="#projects"
        className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
      >
        Projectos
      </a>
      <a
        href="#blog"
        className={`nav-link ${activeSection === "blog" ? "active" : ""}`}
        style={{ display: "none" }}
      >
        Blog
      </a>
      <a className="cta-btn" href="#contact">
        Contáctame
      </a>
    </nav>
  );
};

export default NavBar;
