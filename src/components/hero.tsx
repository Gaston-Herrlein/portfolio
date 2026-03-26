import { Mail } from "lucide-react";

import ProfileCard from "./profileCard";
import JavaIcon from "../assets/java-svgrepo.svg";
import SpringIcon from "../assets/spring-svgrepo.svg";
import NodeIcon from "../assets/node-svgrepo.svg";
import DockerIcon from "../assets/docker-svgrepo.svg";
import PostgresIcon from "../assets/pgsql-svgrepo.svg";
import TypescriptIcon from "../assets/typeScript-svgrepo.svg";
import ReactIcon from "../assets/react-svgrepo.svg"
import AwsIcon from "../assets/aws-svgrepo-com.svg"

const TECH_STACK = [
  { icon: JavaIcon, name: "Java", alt: "Java" },
  { icon: SpringIcon, name: "Spring Boot", alt: "Spring Boot" },
  { icon: TypescriptIcon, name: "TypeScript", alt: "TypeScript" },
  { icon: ReactIcon, name: "React", alt: "React" },
  { icon: NodeIcon, name: "Node.js", alt: "Node.js" },
  { icon: DockerIcon, name: "Docker", alt: "Docker" },
  { icon: AwsIcon, name: "AWS", alt: "AWS"},
  { icon: PostgresIcon, name: "PostgreSQL", alt: "PostgreSQL" },
];

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="intro">
        <div className="eyebrow">Hola, yo soy</div>
        <h1 className="hero-title">Gastón Herrlein</h1>
        <p className="lead">
          Soy un desarrollador web full-stack back-end con pasión por la
          tecnología y la innovación, enfocado en diseñar y construir soluciones
          modernas, escalables y eficientes que aporten valor real y respondan a
          los desafíos del entorno digital actual.
        </p>
        <div className="tech-summary">
          {TECH_STACK.map((tech) => (
            <div key={tech.name} className="tech-item">
              <img src={tech.icon} alt={tech.alt} className="tech-icon" />
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
        <div className="actions">
          <a className="cta-btn cta-primary" href="#contact">
            <Mail size={16} />
            Contáctame
          </a>
          <a href="#projects" className="cta-btn cta-secondary">
            Ver trabajos
          </a>
        </div>
      </div>
      <ProfileCard imageSrc="./profile.jpg" altText="Foto de perfil de Gastón Herrlein" />
    </section>
  );
};

export default Hero;
