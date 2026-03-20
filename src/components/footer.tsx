import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-text">© 2025 Gastón Herrlein</div>
      <div className="socials">
        <a
          href="https://linkedin.com/in/gaston-herrlein"
          className="social-link"
        >
          <Linkedin size={16} /> LinkedIn
        </a>
        <a href="https://github.com/Gaston-Herrlein" className="social-link">
          <Github size={16} /> GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
