type SkillProjects = Record<string, string[]>;

const skillProjects: SkillProjects = {
  "Java": ["Prodemaster"],
  "Spring": ["Prodemaster"],
  "Node.js": ["WallaClone", "AB-Rosana"],
  "TypeScript": ["WallaClone", "AB-Rosana"],
  "React": ["WallaClone"],
  "Next.js": ["AB-Rosana"],
  "Tailwind": ["WallaClone", "AB-Rosana"],
  "PostgreSQL": ["Prodemaster", "AB-Rosana"],
  "MongoDB": ["WallaClone"],
  "ValkeyDB": ["Prodemaster"],
  "Redis": ["WallaClone"],
  "Docker": ["Prodemaster"],
  "Kubernetes": ["Prodemaster"],
  "AWS": ["WallaClone"],
  "Azure": ["Prodemaster"],
  "RabbitMQ": ["WallaClone"],
  "Kafka": ["Prodemaster"],
  "Zipkin": ["Prodemaster"],
  "Git": ["Prodemaster", "AB-Rosana", "WallaClone"],
  "JUnit": ["Prodemaster"],
  "Maven": ["Prodemaster"],
  "Jest": ["WallaClone"],
  "Express": ["WallaClone"],
  "Python": [],
  "JavaScript": ["WallaClone", "AB-Rosana"],
  "CSS/Sass": ["WallaClone", "AB-Rosana"],
  "Postman": ["Prodemaster", "WallaClone", "AB-Rosana"],
};

export const getSkillProjects = (skill: string): string[] => {
  return skillProjects[skill] ?? [];
};

export default skillProjects;