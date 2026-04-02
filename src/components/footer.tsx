import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-text">© {new Date().getFullYear()} Gastón Herrlein</div>
        <div className="footer-legal">
          Este sitio está protegido por reCAPTCHA y se aplican la{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            Política de Privacidad
          </a>{" "}
          y los{" "}
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
            Términos de Servicio
          </a>{" "}
          de Google.
        </div>
      </div>
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
