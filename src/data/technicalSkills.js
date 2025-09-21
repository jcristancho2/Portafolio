// Aquí centralizamos todos los skills
const technicalSkills = [
  // 🌐 Languages
  {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML Icon" widt2h={60} height={60} />,
    name: "HTML5",
    description: "Estructuración semántica de contenido web",
    details: ["Etiquetas semánticas", "Accesibilidad", "SEO básico"],
    color: "from-orange-200 to-red-800",
  },
  {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS Icon" width={60} height={60} />,
    name: "CSS3",
    description: "Estilización avanzada y responsive design",
    details: ["Flexbox", "Grid", "Animaciones"],
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript Icon" width={60} height={60} />,
    name: "JavaScript",
    description: "Lenguaje para aplicaciones dinámicas en la web",
    details: ["ES6+", "DOM", "Asincronía"],
    color: "from-yellow-200 to-yellow-900",
  },
  {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python Icon" width={60} height={60} />,
    name: "Python",
    description: "Lenguaje versátil para backend, IA y análisis de datos",
    details: ["FastAPI / Flask", "Automatización", "Data Science"],
    color: "from-yellow-200 to-green-500",
  },
  {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" alt="C# Icon" width={60} height={60} />,
    name: "C#",
    description: "Lenguaje moderno para aplicaciones .NET",
    details: ["POO", "LINQ", "Aplicaciones multiplataforma"],
    color: "from-purple-200 to-pink-500",
  },

  // ⚛ Frameworks
  {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap Icon" width={60} height={60} />,
    name: "Bootstrap",
    description: "Framework CSS para prototipado rápido y responsive",
    details: ["Grid System", "Componentes UI", "Tematización"],
    color: "from-purple-200 to-pink-400",
  },
  {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"  alt="Tailwind Icon" width={60} height={60} />,
    name: "TailwindCSS",
    description: "Framework utilitario de CSS altamente personalizable",
    details: ["Responsive design", "Dark mode", "Plugins"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" alt="Vite Icon" width={60} height={60} />,
    name: "Vite",
    description: "Herramienta de build rápida para frontend moderno",
    details: ["HMR", "Optimización de bundles", "Plugins"],
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React Icon" width={60} height={60} />,
    name: "React",
    description: "Desarrollo de aplicaciones web modernas y escalables",
    details: ["Hooks avanzados", "Server Components", "Optimización de rendimiento"],
    color: "from-blue-500 to-cyan-500",
  },

  // 🗄 Backend & DB
  {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" alt=".NET Icon" width={60} height={60} />,
    name: ".NET",
    description: "Framework para aplicaciones empresariales robustas",
    details: ["Entity Framework", "ASP.NET Core", "APIs REST"],
    color: "from-purple-600 to-blue-700",
  },
  {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL Icon" width={60} height={60} />,
    name: "MySQL",
    description: "Sistema de base de datos relacional",
    details: ["Consultas complejas", "Procedimientos almacenados", "Optimización de índices"],
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL Icon" width={60} height={60} />,
    name: "PostgreSQL",
    description: "Base de datos relacional potente y escalable",
    details: ["Funciones", "Triggers", "Escalabilidad"],
    color: "from-sky-500 to-blue-800",
  },

  // 🛠 Tools

  {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git Icon" width={60} height={60} />,
    name: "Git",
    description: "Control de versiones distribuido",
    details: ["Branching", "GitHub/GitLab", "CI/CD"],
    color: "from-orange-100 to-red-600",
  },
  {
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker Icon" width={60} height={60} />,
    name: "Docker",
    description: "Contenedores para despliegue y portabilidad",
    details: ["Docker Compose", "Microservicios", "CI/CD"],
    color: "from-blue-500 to-cyan-500",
  },


];

export default technicalSkills;
