import { useState, useEffect } from "react";
import { Mail, ExternalLink } from "lucide-react";

import { styles } from "../src/style/module";
import projectsData from "./const/projects.json";
import blogPostsData from "./const/blogPosts.json";

import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
import AboutMe from "./components/aboutMe";

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
      <Header activeSection={activeSection} />

      <main>
        <Hero />
        <AboutMe />

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

      <Footer />
    </>
  );
};

export default PortfolioWebsite;
