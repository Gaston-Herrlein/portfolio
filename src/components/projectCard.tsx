import { ExternalLink } from "lucide-react";

import Popover from "./ui/popover";

import AwsIcon from "../assets/aws-svgrepo-com.svg";
import AzureIcon from "../assets/azure-svgrepo-com.svg";
import DockerIcon from "../assets/docker-svgrepo.svg";
import DropboxIcon from "../assets/dropbox-svgrepo.svg";
import JavaIcon from "../assets/java-svgrepo.svg";
import JwtIcon from "../assets/jwt-dashboardIcon.svg";
import KafkaIcon from "../assets/kafka-svgrepo.svg";
import KubernetesIcon from "../assets/kubernetes-svgrepo.svg";
import MongoIcon from "../assets/mongo-svgrepo.svg";
import NextIcon from "../assets/next-js-svgrepo.svg";
import NodeIcon from "../assets/node-svgrepo.svg";
import NodemailerIcon from "../assets/nodemailer.svg";
import PostgresIcon from "../assets/pgsql-svgrepo.svg";
import PrismaIcon from "../assets/prisma-svgrepo.svg";
import RabbitmqIcon from "../assets/rabbitmq-dashboardIcon.svg";
import ReactIcon from "../assets/react-svgrepo.svg";
import ReduxIcon from "../assets/redux-svgrepo.svg";
import ResendIcon from "../assets/resend-icon.svg";
import SpringIcon from "../assets/spring-svgrepo.svg";
import TailwindIcon from "../assets/tailwind-svgrepo.svg";
import TypescriptIcon from "../assets/typeScript-svgrepo.svg";
import ValkeyIcon from "../assets/valkey-dashboardIcon.svg";
import VercelIcon from "../assets/vercel-svgrepo.svg";
import ZipkinIcon from "../assets/zipkin.svg";


type ProjectItem = {
  title: string;
  year?: string;
  role?: string;
  tech: string;
  description: string;
  image: string;
  link: string;
  category: string;
  longDescription?: string;
};

type Props = {
  project: ProjectItem;
};

const TECH_ICONS: Record<string, { icon: string; name: string }> = {
  "aws ec2": { icon: AwsIcon, name: "AWS EC2" },
  "aws s3": { icon: AwsIcon, name: "AWS S3" },
  azure: { icon: AzureIcon, name: "Azure" },
  docker: { icon: DockerIcon, name: "Docker" },
  dropbox: { icon: DropboxIcon, name: "Dropbox" },
  java: { icon: JavaIcon, name: "Java" },
  "java 17": { icon: JavaIcon, name: "Java 17" },
  jwt: { icon: JwtIcon, name: "JWT" },
  kafka: { icon: KafkaIcon, name: "Kafka" },
  kubernetes: { icon: KubernetesIcon, name: "Kubernetes" },
  mongodb: { icon: MongoIcon, name: "MongoDB" },
  "next.js": { icon: NextIcon, name: "Next.js" },
  node: { icon: NodeIcon, name: "Node.js" },
  "node.js": { icon: NodeIcon, name: "Node.js" },
  nodemailer: { icon: NodemailerIcon, name: "Nodemailer" },
  postgresql: { icon: PostgresIcon, name: "PostgreSQL" },
  postgres: { icon: PostgresIcon, name: "PostgreSQL" },
  pgsql: { icon: PostgresIcon, name: "PostgreSQL" },
  prisma: { icon: PrismaIcon, name: "Prisma" },
  rabbitmq: { icon: RabbitmqIcon, name: "RabbitMQ" },
  react: { icon: ReactIcon, name: "React" },
  redux: { icon: ReduxIcon, name: "Redux" },
  resend: { icon: ResendIcon, name: "Resend" },
  spring: { icon: SpringIcon, name: "Spring Boot" },
  "spring boot": { icon: SpringIcon, name: "Spring Boot" },
  "spring cloud": { icon: SpringIcon, name: "Spring Cloud" },
  "spring security": { icon: SpringIcon, name: "Spring Security" },
  tailwindcss: { icon: TailwindIcon, name: "TailwindCSS" },
  typescript: { icon: TypescriptIcon, name: "TypeScript" },
  valkeydb: { icon: ValkeyIcon, name: "ValkeyDB" },
  vercel: { icon: VercelIcon, name: "Vercel" },
  zipkin: { icon: ZipkinIcon, name: "Zipkin" },
};

const MAX_VISIBLE_TECHS = 4;

const ProjectCard = ({ project }: Props) => {
  const techList = project.tech.split(" • ");
  const visibleTechs = techList.slice(0, MAX_VISIBLE_TECHS);
  const hiddenTechs = techList.slice(MAX_VISIBLE_TECHS);
  const remainingCount = hiddenTechs.length;

  const popoverDetail =
    project.longDescription ?? `${project.description} · Tech: ${project.tech}`;

  const getTechDisplay = (techName: string) => {
    const normalizedTech = techName.toLowerCase().trim();
    const iconData = TECH_ICONS[normalizedTech];

    if (iconData) {
      return (
        <div className="project-tech-tag">
          <img src={iconData.icon} alt={iconData.name} className="project-tech-tag-icon" />
          <span className="project-tech-tag-text">{iconData.name}</span>
        </div>
      );
    }

    return (
      <div className="project-tech-tag">
        <span className="project-tech-tag-text">{techName}</span>
      </div>
    );
  };

  return (
    <article className="project-card">
      <div className="project-thumb">
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className="project-thumb-overlay">
          <a
            href={project.link}
            className="project-thumb-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View project <ExternalLink size={16} />
          </a>
        </div>
      </div>
      <div className="project-meta">
        <div className="project-tech-tags">
          {visibleTechs.map((tech, i) => (
            <span key={i}>{getTechDisplay(tech)}</span>
          ))}
          {remainingCount > 0 && (
            <Popover
              trigger={
                <span className="project-tech-tag project-tech-tag-more">
                  +{remainingCount} más
                </span>
              }
              content={
                <div className="project-tech-tags" style={{ margin: 0 }}>
                  {hiddenTechs.map((tech, i) => (
                    <span key={i}>{getTechDisplay(tech)}</span>
                  ))}
                </div>
              }
            />
          )}
        </div>
        {(project.year || project.role) && (
          <div className="project-year-role">
            {project.year && <span>{project.year}</span>}
            {project.role && <span>· {project.role}</span>}
          </div>
        )}
        <Popover
          trigger={
            <h3 className="project-title" style={{ margin: 0 }}>
              {project.title}
            </h3>
          }
          content={popoverDetail}
        />
        <p className="project-description">{project.description}</p>
      </div>
    </article>
  );
};

export default ProjectCard;
