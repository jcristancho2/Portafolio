// Aquí centralizamos todos los skills
const technicalSkills = [
  {
    icon: (
      <img
        src="https://techstack-generator.vercel.app/react-icon.svg"
        alt="React Icon"
        width={60}
        height={60}
      />
    ),
    name: "React",
    description: "Desarrollo de aplicaciones web modernas y escalables",
    details: ["Hooks avanzados", "Server Components", "Optimización de rendimiento"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: (
      <img
        src="https://techstack-generator.vercel.app/python-icon.svg"
        alt="Python Icon"
        width={60}
        height={60}
      />
    ),
    name: "Python",
    description: "Lenguaje versátil para backend, IA y análisis de datos",
    details: ["FastAPI / Flask", "Automatización", "Data Science"],
    color: "from-yellow-400 to-green-500",
  },
  {
    icon: (
      <img
        src="https://techstack-generator.vercel.app/aws-icon.svg"
        alt="AWS Icon"
        width={60}
        height={60}
      />
    ),
    name: "AWS",
    description: "Servicios en la nube para despliegue y escalabilidad",
    details: ["EC2", "S3", "RDS", "Lambda"],
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: (
      <img
        src="https://techstack-generator.vercel.app/entity-framework-icon.svg"
        alt="Entity Framework Icon"
        width={60}
        height={60}
      />
    ),
    name: "Entity Framework",
    description: "ORM para aplicaciones .NET con acceso a bases de datos",
    details: ["LINQ", "Migraciones", "Consultas optimizadas"],
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: (
      <img
        src="https://techstack-generator.vercel.app/postgresql-icon.svg"
        alt="PostgreSQL Icon"
        width={60}
        height={60}
      />
    ),
    name: "PostgreSQL",
    description: "Base de datos relacional potente y escalable",
    details: ["Consultas avanzadas", "Procedimientos almacenados", "Optimización de índices"],
    color: "from-sky-500 to-blue-800",
  },
];

export default technicalSkills;
