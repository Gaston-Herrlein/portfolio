import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="contact-content">
        <h2 className="section-title">Trabajemos juntos</h2>
        <p className="contact-text">
          Siempre estoy interesado en escuchar sobre nuevas oportunidades y
          proyectos emocionantes.
        </p>
        <div className="contact-actions">
          <a
            className="cta-btn contact-email-btn"
            href="mailto:g.herrlein@example.com"
          >
            <Mail size={20} />
            Enviar email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
