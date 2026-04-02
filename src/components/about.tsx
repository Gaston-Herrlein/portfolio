import styles from "./about.module.css";
import { useScrollReveal } from "../hooks/useScrollReveal";

type ParagraphProps = {
  children: React.ReactNode;
};

const Paragraph = ({ children }: ParagraphProps) => {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <p
      ref={ref}
      className={`${styles.aboutText} ${isRevealed ? styles.revealed : ""}`}
    >
      {children}
    </p>
  );
};

const About = () => {
  return (
    <section className="section" id="about">
      <h2 className="section-title">Sobre mí</h2>
      <div className={styles.aboutContent}>
        <Paragraph>
          Tras seis años estudiando Ingeniería Electrónica en la Universidad
          Tecnológica Nacional, descubrí mi verdadera pasión: crear software que
          resuelva problemas reales. Este punto de inflexión me llevó a
          profundizar mis habilidades mediante el aprendizaje autodirigido y un
          intensivo bootcamp de Full Stack en KeepCoding, donde consolidé una
          sólida base en todo el stack de desarrollo.
        </Paragraph>
        <Paragraph>
          Actualmente me especializo en desarrollo backend con Java, Spring Boot
          y Node.js, con un fuerte enfoque en la arquitectura de microservicios,
          sistemas escalables e implementaciones en la nube en AWS y Azure. En el
          frontend, trabajo con React y Next.js para entregar aplicaciones
          completas y listas para producción.
        </Paragraph>
        <Paragraph>
          He aplicado estas habilidades en diversos proyectos, desde una
          plataforma de comercio electrónico full-stack hasta un blog de
          psicología optimizado para SEO, y actualmente una plataforma de
          apuestas deportivas construida sobre una arquitectura de microservicios
          con Kubernetes. Aporto tanto la mentalidad analítica de un ingeniero
          como el pragmatismo de un desarrollador que ha aprendido construyendo.
        </Paragraph>
      </div>
    </section>
  );
};

export default About;