import { useState, useEffect } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  ChevronUp,
} from "lucide-react";

const PortfolioWebsite = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const skills = [
    "React",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Python",
    "CSS/Sass",
    "Tailwind",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "Docker",
    "AWS",
    "Figma",
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      tech: "React • Next.js • Stripe",
      description: "Full-stack e-commerce solution with payment integration",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop",
      link: "#",
    },
    {
      title: "Task Management App",
      tech: "React • Firebase • Material-UI",
      description: "Collaborative project management tool",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop",
      link: "#",
    },
    {
      title: "Data Visualization Dashboard",
      tech: "React • D3.js • Python",
      description: "Interactive analytics dashboard for business metrics",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
      link: "#",
    },
  ];

  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      date: "Mar 15, 2024",
      excerpt: "Best practices for structuring large React codebases",
    },
    {
      title: "The Future of Web Development",
      date: "Mar 8, 2024",
      excerpt: "Exploring emerging trends and technologies",
    },
    {
      title: "Performance Optimization Techniques",
      date: "Feb 28, 2024",
      excerpt: "Tips to make your web apps lightning fast",
    },
  ];

  const styles = `
    * {
      box-sizing: border-box;
    }
    
    body {
      margin: 0;
      font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: #FFFFFF;
      color: #0b1220;
      line-height: 1.5;
      font-size: 16px;
    }
    
    img {
      max-width: 100%;
      display: block;
      height: auto;
    }
    
    .app-wrapper {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    
    .site-header {
      position: sticky;
      top: 0;
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 32px;
      backdrop-filter: blur(6px);
      background-color: rgba(255,255,255,0.6);
      border-bottom: 1px solid rgba(15,20,30,0.04);
    }
    
    .brand {
      font-weight: 700;
      font-size: 18px;
      letter-spacing: 0.01em;
    }
    
    .site-nav {
      display: flex;
      gap: 20px;
      align-items: center;
    }
    
    .nav-link {
      text-decoration: none;
      color: inherit;
      font-weight: 500;
      font-size: 14px;
      padding: 8px;
      transition: color 0.16s ease;
    }
    
    .nav-link:hover {
      color: #0f62fe;
    }
    
    .nav-link.active {
      color: #0f62fe;
    }
    
    .cta-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 14px;
      border-radius: 10px;
      background-color: #0f62fe;
      color: #ffffff;
      font-weight: 600;
      text-decoration: none;
      box-shadow: 0 6px 18px rgba(15,98,254,0.12);
      transition: transform .16s ease, box-shadow .16s ease;
      border: none;
      cursor: pointer;
    }
    
    .cta-btn:hover {
      transform: translateY(-2px);
    }
    
    .hero {
      display: grid;
      grid-template-columns: 1fr 420px;
      gap: 48px;
      align-items: center;
      padding: 96px 32px;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .intro {
      max-width: 720px;
    }
    
    .eyebrow {
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 0.18em;
      color: #6b7280;
      margin-bottom: 12px;
    }
    
    .hero-title {
      font-size: clamp(36px, 6.2vw, 56px);
      line-height: 1.02;
      margin: 0 0 18px 0;
      font-weight: 800;
      color: #091024;
    }
    
    .lead {
      font-size: 18px;
      color: #334155;
      margin-bottom: 22px;
    }
    
    .actions {
      display: flex;
      gap: 12px;
      align-items: center;
    }
    
    .profile-card {
      width: 100%;
      max-width: 420px;
      padding: 26px;
      border-radius: 16px;
      background: linear-gradient(180deg, #fff, #f8fafc);
      box-shadow: 0 10px 30px rgba(2,6,23,0.06);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }
    
    .profile-avatar {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      overflow: hidden;
      border: 6px solid rgba(15,98,254,0.08);
    }
    
    .profile-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .section {
      padding: 80px 32px;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .section-title {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 32px;
      color: #091024;
    }
    
    .about {
      display: grid;
      grid-template-columns: 1fr 320px;
      gap: 32px;
      align-items: start;
    }
    
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      gap: 12px;
      margin-top: 20px;
    }
    
    .skill-chip {
      padding: 10px 12px;
      border-radius: 999px;
      background: rgba(15,98,254,0.08);
      display: inline-block;
      font-size: 14px;
      font-weight: 600;
      color: #0f62fe;
      text-align: center;
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 22px;
    }
    
    .project-card {
      border-radius: 12px;
      overflow: hidden;
      background: #fff;
      box-shadow: 0 8px 24px rgba(2,6,23,0.06);
      display: flex;
      flex-direction: column;
      transition: transform 0.16s ease;
    }
    
    .project-card:hover {
      transform: translateY(-4px);
    }
    
    .project-thumb {
      height: 160px;
      background-size: cover;
      background-position: center;
    }
    
    .project-meta {
      padding: 14px 16px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    
    .project-kicker {
      font-size: 12px;
      text-transform: uppercase;
      color: #64748b;
      letter-spacing: 0.14em;
    }
    
    .project-title {
      margin: 0;
      font-size: 18px;
      font-weight: 700;
      color: #091024;
    }
    
    .blog-list {
      display: grid;
      gap: 14px;
      grid-template-columns: 1fr;
    }
    
    .blog-item {
      padding: 16px;
      border-radius: 10px;
      border: 1px solid rgba(15,20,30,0.04);
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: border-color 0.16s ease;
    }
    
    .blog-item:hover {
      border-color: rgba(15,98,254,0.2);
    }
    
    .blog-content {
      flex: 1;
    }
    
    .blog-title {
      font-weight: 600;
      margin: 0 0 4px 0;
      color: #091024;
    }
    
    .blog-excerpt {
      color: #64748b;
      font-size: 14px;
      margin: 0;
    }
    
    .blog-date {
      color: #9ca3af;
      font-size: 12px;
      white-space: nowrap;
      margin-left: 16px;
    }
    
    .contact {
      text-align: center;
    }
    
    .contact-content {
      max-width: 600px;
      margin: 0 auto;
    }
    
    .site-footer {
      padding: 36px 32px;
      border-top: 1px solid rgba(15,20,30,0.04);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .socials {
      display: flex;
      gap: 12px;
      align-items: center;
    }
    
    .social-link {
      display: flex;
      align-items: center;
      gap: 4px;
      text-decoration: none;
      color: #64748b;
      font-size: 14px;
      transition: color 0.16s ease;
    }
    
    .social-link:hover {
      color: #0f62fe;
    }
    
    .scroll-top {
      position: fixed;
      bottom: 24px;
      right: 24px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: #0f62fe;
      color: white;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 8px 24px rgba(15,98,254,0.24);
      transition: all 0.16s ease;
      opacity: ${showScrollTop ? "1" : "0"};
      transform: ${showScrollTop ? "translateY(0)" : "translateY(20px)"};
      pointer-events: ${showScrollTop ? "auto" : "none"};
    }
    
    .scroll-top:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 32px rgba(15,98,254,0.32);
    }
    
    @media (max-width: 980px) {
      .hero {
        grid-template-columns: 1fr;
        padding: 56px 20px;
      }
      
      .about {
        grid-template-columns: 1fr;
      }
      
      .site-header {
        padding: 16px 20px;
      }
      
      .site-nav {
        gap: 12px;
      }
      
      .section {
        padding: 48px 20px;
      }
    }
    
    @media (max-width: 640px) {
      .actions {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
      }
      
      .site-nav {
        flex-wrap: wrap;
      }
      
      .site-footer {
        flex-direction: column;
        text-align: center;
      }
    }
    
    :focus-visible {
      outline: 3px solid rgba(15,98,254,0.18);
      outline-offset: 3px;
    }
    
    @media (prefers-reduced-motion: reduce) {
      * {
        transition: none !important;
        animation: none !important;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="app-wrapper">
        <header className="site-header">
          <div className="brand">Alex Rivera</div>
          <nav className="site-nav">
            <a
              href="#about"
              className={`nav-link ${
                activeSection === "about" ? "active" : ""
              }`}
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
                design with robust functionality. I specialize in React
                ecosystem and modern web technologies.
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
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-chip">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section" id="projects">
            <h2 className="section-title">Selected Projects</h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
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
              {blogPosts.map((post, index) => (
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

        <button className="scroll-top" onClick={scrollToTop}>
          <ChevronUp size={20} />
        </button>
      </div>
    </>
  );
};

export default PortfolioWebsite;
