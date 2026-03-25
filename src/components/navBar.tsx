const NavBar = ({
  activeSection,
  onLinkClick,
}: {
  activeSection: string;
  onLinkClick?: () => void;
}) => {
  return (
    <nav className="site-nav">
            <a
        href="#projects"
        className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
        onClick={onLinkClick}
      >
        Projectos
      </a>
      <a
        href="#skills"
        className={`nav-link ${activeSection === "skills" ? "active" : ""}`}
        onClick={onLinkClick}
      >
        Habilidades
      </a>
      <a
        href="#about"
        className={`nav-link ${activeSection === "about" ? "active" : ""}`}
        onClick={onLinkClick}
      >
        Sobre mí
      </a>
      <a
        href="#blog"
        className={`nav-link hidden ${activeSection === "blog" ? "active" : ""}`}
        onClick={onLinkClick}
      >
        Blog
      </a>
      <a className="cta-btn" href="#contact" onClick={onLinkClick}>
        Contactame
      </a>
    </nav>
  );
};

export default NavBar;
