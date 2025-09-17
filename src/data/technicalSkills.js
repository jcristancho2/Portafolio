// Aquí centralizamos todos los skills
const technicalSkills = [
  // 🌐 Languages
  {
    icon: <img src="https://techstack-generator.vercel.app/html-icon.svg" alt="HTML Icon" width={60} height={60} />,
    name: "HTML5",
    description: "Estructuración semántica de contenido web",
    details: ["Etiquetas semánticas", "Accesibilidad", "SEO básico"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: <img src="https://techstack-generator.vercel.app/css-icon.svg" alt="CSS Icon" width={60} height={60} />,
    name: "CSS3",
    description: "Estilización avanzada y responsive design",
    details: ["Flexbox", "Grid", "Animaciones"],
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: <img src="https://techstack-generator.vercel.app/js-icon.svg" alt="JavaScript Icon" width={60} height={60} />,
    name: "JavaScript",
    description: "Lenguaje para aplicaciones dinámicas en la web",
    details: ["ES6+", "DOM", "Asincronía"],
    color: "from-yellow-400 to-yellow-600",
  },
  {
    icon: <img src="https://techstack-generator.vercel.app/python-icon.svg" alt="Python Icon" width={60} height={60} />,
    name: "Python",
    description: "Lenguaje versátil para backend, IA y análisis de datos",
    details: ["FastAPI / Flask", "Automatización", "Data Science"],
    color: "from-yellow-400 to-green-500",
  },
  {
    icon: <img src="https://techstack-generator.vercel.app/csharp-icon.svg" alt="C# Icon" width={60} height={60} />,
    name: "C#",
    description: "Lenguaje moderno para aplicaciones .NET",
    details: ["POO", "LINQ", "Aplicaciones multiplataforma"],
    color: "from-purple-500 to-pink-500",
  },

  // ⚛ Frameworks
  {
    icon: <img src="https://techstack-generator.vercel.app/bootstrap-icon.svg" alt="Bootstrap Icon" width={60} height={60} />,
    name: "Bootstrap",
    description: "Framework CSS para prototipado rápido y responsive",
    details: ["Grid System", "Componentes UI", "Tematización"],
    color: "from-purple-500 to-pink-400",
  },
  {
    icon: <img src="https://techstack-generator.vercel.app/tailwind-icon.svg" alt="Tailwind Icon" width={60} height={60} />,
    name: "TailwindCSS",
    description: "Framework utilitario de CSS altamente personalizable",
    details: ["Responsive design", "Dark mode", "Plugins"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: <img src="https://techstack-generator.vercel.app/vite-icon.svg" alt="Vite Icon" width={60} height={60} />,
    name: "Vite",
    description: "Herramienta de build rápida para frontend moderno",
    details: ["HMR", "Optimización de bundles", "Plugins"],
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: <img src="https://techstack-generator.vercel.app/react-icon.svg" alt="React Icon" width={60} height={60} />,
    name: "React",
    description: "Desarrollo de aplicaciones web modernas y escalables",
    details: ["Hooks avanzados", "Server Components", "Optimización de rendimiento"],
    color: "from-blue-500 to-cyan-500",
  },

  // 🗄 Backend & DB
  {
    icon: <img src="https://techstack-generator.vercel.app/dotnet-icon.svg" alt=".NET Icon" width={60} height={60} />,
    name: ".NET",
    description: "Framework para aplicaciones empresariales robustas",
    details: ["Entity Framework", "ASP.NET Core", "APIs REST"],
    color: "from-purple-600 to-blue-700",
  },
  {
    icon: <img src="https://techstack-generator.vercel.app/mysql-icon.svg" alt="MySQL Icon" width={60} height={60} />,
    name: "MySQL",
    description: "Sistema de base de datos relacional",
    details: ["Consultas complejas", "Procedimientos almacenados", "Optimización de índices"],
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: <img src="https://techstack-generator.vercel.app/postgresql-icon.svg" alt="PostgreSQL Icon" width={60} height={60} />,
    name: "PostgreSQL",
    description: "Base de datos relacional potente y escalable",
    details: ["Funciones", "Triggers", "Escalabilidad"],
    color: "from-sky-500 to-blue-800",
  },

  // 🛠 Tools
  {
    icon: <img src="https://techstack-generator.vercel.app/vscode-icon.svg" alt="VSCode Icon" width={60} height={60} />,
    name: "Visual Studio Code",
    description: "Editor ligero y extensible",
    details: ["Extensiones", "Integración con Git", "Depuración"],
    color: "from-blue-600 to-indigo-600",
  },
  {
    icon: <img src="https://techstack-generator.vercel.app/git-icon.svg" alt="Git Icon" width={60} height={60} />,
    name: "Git",
    description: "Control de versiones distribuido",
    details: ["Branching", "GitHub/GitLab", "CI/CD"],
    color: "from-orange-600 to-red-600",
  },
  {
    icon: <img src="https://techstack-generator.vercel.app/docker-icon.svg" alt="Docker Icon" width={60} height={60} />,
    name: "Docker",
    description: "Contenedores para despliegue y portabilidad",
    details: ["Docker Compose", "Microservicios", "CI/CD"],
    color: "from-blue-500 to-cyan-500",
  },

  // ⚡ Hardware & Others
  {
    icon: <img src="https://techstack-generator.vercel.app/arduino-icon.svg" alt="Arduino Icon" width={60} height={60} />,
    name: "Arduino",
    description: "Plataforma para prototipado electrónico",
    details: ["Sensores", "Actuadores", "IoT"],
    color: "from-green-500 to-teal-500",
  },
  {
    icon: <img src="https://techstack-generator.vercel.app/matlab-icon.svg" alt="MATLAB Icon" width={60} height={60} />,
    name: "MATLAB",
    description: "Lenguaje especializado en cálculo numérico",
    details: ["Simulaciones", "Gráficas avanzadas", "Procesamiento de señales"],
    color: "from-orange-500 to-yellow-400",
  },
  {
    icon: <img src="https://techstack-generator.vercel.app/figma-icon.svg" alt="Figma Icon" width={60} height={60} />,
    name: "Figma",
    description: "Diseño colaborativo de interfaces",
    details: ["Wireframes", "Prototipos", "Colaboración en tiempo real"],
    color: "from-pink-500 to-purple-500",
  },
  {
    icon: <img src="https://techstack-generator.vercel.app/graphql-icon.svg" alt="GraphQL Icon" width={60} height={60} />,
    name: "dbdiagram.io",
    description: "Lenguaje de consulta para APIs flexibles",
    details: ["Queries", "Mutations", "Subscriptions"],
    color: "from-pink-500 to-purple-600",
  },
];

export default technicalSkills;
