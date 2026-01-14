import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="contact-content">
        <h2 className="section-title">Trabajemos juntos</h2>
        <p className="contact-text">
          Siempre estoy interesado en escuchar sobre nuevas oportunidades y
          proyectos emocionantes.
        </p>
        <div className="actions" style={{ justifyContent: "center" }}>
          <a className="cta-btn" href="mailto:example@mail.com">
            <Mail size={16} />
            Enviar email
          </a>
          <a className="nav-link" href="tel:+34123456789">
            +34 123 456 789
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
