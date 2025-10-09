import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div>© 2025 Gastón Herrlein</div>
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
        <a
          href="https://twitter.com"
          className="social-link"
          style={{ display: "none" }}
        >
          <Twitter size={16} /> Twitter
        </a>
      </div>
    </footer>
  );
};

export default Footer;
