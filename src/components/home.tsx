import { useState, useEffect } from "react";
import { Mail, Github, Linkedin, Twitter, ExternalLink } from "lucide-react";
import { styles } from "../style/module";
import skillsData from "../const/skill.json";
import projectsData from "../const/projects.json";
import blogPostsData from "../const/blogPosts.json";

const PortfolioWebsite = () => {
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const handleScroll = () => {
      // Update active section based on scroll position
      const sections = ["home", "about", "projects", "blog", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{styles}</style>
      <header className="site-header">
        <div className="brand">Alex Rivera</div>
        <nav className="site-nav">
          <a
            href="#about"
            className={`nav-link ${activeSection === "about" ? "active" : ""}`}
          >
            About
          </a>
          <a
            href="#projects"
            className={`nav-link ${
              activeSection === "projects" ? "active" : ""
            }`}
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
      </header>

      <main>
        <section className="hero" id="home">
          <div className="intro">
            <div className="eyebrow">Hi, I'm</div>
            <h1 className="hero-title">Alex Rivera</h1>
            <p className="lead">
              Frontend engineer focused on building accessible, performant web
              applications with modern technologies.
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
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=280&h=280&fit=crop&crop=face"
                alt="Profile"
              />
            </div>
            <div style={{ fontWeight: "600", fontSize: "16px" }}>
              Frontend Engineer
            </div>
            <div style={{ color: "#64748b", fontSize: "14px" }}>
              Madrid • España
            </div>
          </aside>
        </section>

        <section className="section about" id="about">
          <div>
            <h2 className="section-title">About me</h2>
            <p style={{ marginBottom: "20px", color: "#334155" }}>
              I'm a passionate frontend developer with over 5 years of
              experience creating digital solutions that combine beautiful
              design with robust functionality. I specialize in React ecosystem
              and modern web technologies.
            </p>
            <p style={{ color: "#334155" }}>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open source projects, or sharing my knowledge
              through technical writing and mentoring.
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

        <section className="section" id="projects">
          <h2 className="section-title">Selected Projects</h2>
          <div className="projects-grid">
            {projectsData.featured.map((project, index) => (
              <div key={index} className="project-card">
                <div
                  className="project-thumb"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="project-meta">
                  <div className="project-kicker">{project.tech}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p
                    style={{
                      margin: "8px 0 12px 0",
                      color: "#64748b",
                      fontSize: "14px",
                    }}
                  >
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    className="nav-link"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    View project <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="blog">
          <h2 className="section-title">Latest Posts</h2>
          <div className="blog-list">
            {blogPostsData.map((post, index) => (
              <div key={index} className="blog-item">
                <div className="blog-content">
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                </div>
                <div className="blog-date">{post.date}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-content">
            <h2 className="section-title">Let's work together</h2>
            <p
              style={{
                fontSize: "18px",
                color: "#334155",
                marginBottom: "32px",
              }}
            >
              I'm always interested in hearing about new opportunities and
              exciting projects.
            </p>
            <div
              style={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a className="cta-btn" href="mailto:alex@example.com">
                <Mail size={16} />
                Send Email
              </a>
              <a className="nav-link" href="tel:+34123456789">
                +34 123 456 789
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>© 2024 Alex Rivera</div>
        <div className="socials">
          <a href="https://twitter.com" className="social-link">
            <Twitter size={16} /> Twitter
          </a>
          <a href="https://github.com" className="social-link">
            <Github size={16} /> GitHub
          </a>
          <a href="https://linkedin.com" className="social-link">
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </footer>
    </>
  );
};

export default PortfolioWebsite;
