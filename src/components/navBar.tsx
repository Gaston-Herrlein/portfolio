const NavBar = ({ activeSection }: { activeSection: string }) => {
  return (
    <nav className="site-nav">
      <a
        href="#about"
        className={`nav-link ${activeSection === "about" ? "active" : ""}`}
      >
        About
      </a>
      <a
        href="#projects"
        className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
      >
        Projects
      </a>
      <a
        href="#blog"
        className={`nav-link ${activeSection === "blog" ? "active" : ""}`}
      >
        Blog
      </a>
      <a className="cta-btn" href="#contact">
        Contact
      </a>
    </nav>
  );
};

export default NavBar;
