import { useTranslation } from "react-i18next"

export default function Skills() {
  const { t } = useTranslation()

  const technicalSkills = [
    {
      icon: "⚛️",
      name: "React & Next.js",
      description: "Desarrollo de aplicaciones web modernas y escalables",
      details: ["Hooks avanzados", "Server Components", "Optimización de rendimiento"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "🌐",
      name: "Node.js & APIs",
      description: "Backend robusto y APIs RESTful eficientes",
      details: ["Express.js", "Microservicios", "Integración de terceros"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "📦",
      name: "Bases de Datos",
      description: "Diseño y optimización de sistemas de datos",
      details: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: "🎨",
      name: "UI/UX Design",
      description: "Interfaces intuitivas y experiencias memorables",
      details: ["Tailwind CSS", "Figma", "Design Systems"],
      color: "from-purple-500 to-pink-500",
    },
  ]

  const softSkills = [
    {
      icon: "🎯",
      name: "Liderazgo situacional",
      description: "Ajusta el estilo según equipo y contexto para lograr foco y ritmo.",
      details: ["Saber delegar", "Dar objetivos claros", "Guiar el equipo"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "🧠",
      name: "Pensamiento analítico",
      description: "Ve interdependencias y diseña flujos que escalan con menos fricción.",
      details: ["Ver el panorama completo", "Identificar riesgos", "Escuchar retroalimentación"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "🤝",
      name: "Negociación",
      description: "Equilibra alcance, tiempo y calidad sin perder relaciones.",
      details: ["Definir prioridades", "Acordar expectativas", "Buscar soluciones justas"],
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: "💬",
      name: "Comunicación visual",
      description: "Hace comprensibles ideas complejas con historias y datos.",
      details: ["Contar historias", "Hacer gráficos claros", "Escribir documentos simples"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "🔍",
      name: "Curiosidad técnica",
      description: "Explora patrones y herramientas sin perder pragmatismo.",
      details: ["Probar ideas rápido", "Aprender siempre", "Comparar resultados"],
      color: "from-red-500 to-pink-500",
    },
    {
      icon: "✅",
      name: "Responsabilidad extrema",
      description: "Se hace cargo del resultado y del contexto que lo rodea.",
      details: ["Asumir responsabilidades", "Buscar soluciones", "Avisar a tiempo"],
      color: "from-green-500 to-teal-500",
    },
    {
      icon: "💪",
      name: "Resiliencia",
      description: "Recupera tracción ante bloqueos y cambios bruscos.",
      details: ["Aprender de errores", "Tener planes alternos", "Seguir adelante"],
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: "🎯",
      name: "Orientación a resultados",
      description: "Entrega valor medible con foco en impacto.",
      details: ["Medir progreso", "Entregar rápido", "Validar ideas"],
      color: "from-emerald-500 to-green-500",
    },
  ]

  return (
    <section id="skills" className="min-h-screen bg-black relative overflow-hidden py-20 px-8">
      {/* Fondo de circuitos electrónicos */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 border border-cyan-500/30 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-orange-500/30 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-purple-500/30 rounded-full"></div>
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M0 50h20v-20h20v40h20v-20h20v20h20"
                stroke="rgba(6, 182, 212, 0.1)"
                strokeWidth="1"
                fill="none"
              />
              <circle cx="20" cy="30" r="2" fill="rgba(6, 182, 212, 0.2)" />
              <circle cx="60" cy="50" r="2" fill="rgba(251, 146, 60, 0.2)" />
              <circle cx="80" cy="30" r="2" fill="rgba(168, 85, 247, 0.2)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Habilidades Técnicas */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              {t("skills.technical.title") || "Habilidades Técnicas"}
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Tecnologías y herramientas que domino para crear soluciones digitales robustas y escalables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-2xl mb-4`}
                  >
                    {skill.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{skill.description}</p>

                  <ul className="space-y-1 mb-6">
                    {skill.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-500 text-sm flex items-center">
                        <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full py-2 px-4 bg-gray-800 hover:bg-cyan-600 text-white text-sm rounded-lg transition-colors duration-200 border border-gray-700 hover:border-cyan-500">
                    Ver proyectos
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Habilidades Blandas */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Habilidades blandas
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Cómo convierto objetivos en resultados: claridad, foco y sistemas que perduran.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-2xl mb-4`}
                  >
                    {skill.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{skill.description}</p>

                  <ul className="space-y-1 mb-6">
                    {skill.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-500 text-sm flex items-center">
                        <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full py-2 px-4 bg-gray-800 hover:bg-cyan-600 text-white text-sm rounded-lg transition-colors duration-200 border border-gray-700 hover:border-cyan-500">
                    ¿Colaboramos?
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
