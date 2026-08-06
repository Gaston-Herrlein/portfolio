import { useState } from "react";
import { Mail, Check } from "lucide-react";

const EMAIL = "herrleingaston@gmail.com";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section className="section contact" id="contact">
      <div className="contact-content">
        <h2 className="section-title">Trabajemos juntos</h2>
        <p className="contact-text">
          Siempre estoy interesado en escuchar sobre nuevas oportunidades y
          proyectos emocionantes.
        </p>
        <div className="contact-actions">
          <button
            className="cta-btn contact-email-btn"
            onClick={handleCopyEmail}
          >
            {copied ? (
              <>
                <Check size={20} />
                ¡Copiado!
              </>
            ) : (
              <>
                <Mail size={20} />
                Enviar email
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
