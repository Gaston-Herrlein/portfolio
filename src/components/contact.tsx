import { useState, useEffect, type FormEvent, type ChangeEvent } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

import styles from "./contact.module.css";

type FormStatus = "idle" | "loading" | "success" | "error";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT || "/api/contact";
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || "";

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY || window.grecaptcha) return;

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector(
        `script[src^="https://www.google.com/recaptcha/api.js"]`
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Formato de email inválido";
    }
    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getRecaptchaToken = async (): Promise<string | null> => {
    if (!RECAPTCHA_SITE_KEY || !window.grecaptcha) {
      return null;
    }

    try {
      return await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
        action: "contact",
      });
    } catch {
      return null;
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("loading");

    try {
      const recaptchaToken = await getRecaptchaToken();

      const payload = {
        ...formData,
        recaptchaToken,
      };

      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="section" id="contact">
      <div className={styles.contactWrapper}>
        <div className={styles.contactContent}>
          <h2 className="section-title">Trabajemos juntos</h2>
          <p className="contact-text">
            ¿Tienes un proyecto en mente? Escríbeme y hablemos sobre cómo
            puedo ayudarte.
          </p>

          {status === "success" ? (
            <div
              className={`${styles.statusMessage} ${styles.success}`}
              role="alert"
            >
              <CheckCircle size={20} />
              <span>¡Mensaje enviado! Te responderé pronto.</span>
            </div>
          ) : (
            <form
              className={styles.contactForm}
              onSubmit={handleSubmit}
              noValidate
            >
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={`${styles.input} ${errors.name ? styles.error : ""}`}
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <span id="name-error" className={styles.errorMessage}>
                    {errors.name}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`${styles.input} ${errors.email ? styles.error : ""}`}
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <span id="email-error" className={styles.errorMessage}>
                    {errors.email}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={`${styles.textarea} ${
                    errors.message ? styles.error : ""
                  }`}
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                />
                {errors.message && (
                  <span id="message-error" className={styles.errorMessage}>
                    {errors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <span className={styles.spinner} />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Enviar mensaje</span>
                  </>
                )}
              </button>

              {status === "error" && (
                <div
                  className={`${styles.statusMessage} ${styles.error}`}
                  role="alert"
                >
                  <AlertCircle size={20} />
                  <span>
                    Error al enviar el mensaje. Intenta de nuevo o contáctame
                    directamente por email.
                  </span>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;