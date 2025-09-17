import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import technicalSkills from "../data/technicalSkills";
import softSkills from "../data/softSkills";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="min-h-screen bg-transparent relative overflow-hidden py-20 px-8">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-20">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M0 50h20v-20h20v40h20v-20h20v20h20"
                stroke="rgba(6, 182, 212, 0.1)"
                strokeWidth="1"
                fill="none"
              />
              <circle cx="20" cy="30" r="2" fill="rgba(6, 64, 212, 0.2)" />
              <circle cx="60" cy="50" r="2" fill="rgba(66, 251, 60, 0.2)" />
              <circle cx="80" cy="30" r="2" fill="rgba(247, 85, 109, 0.2)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Habilidades Técnicas */}
        <section className="py-12 px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">Habilidades Técnicas</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              buscar una descripcion
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className={`bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl shadow-lg text-white hover:scale-105 transform transition`}
              >
                <div className="flex items-center gap-4 mb-4">
                  {skill.icon}
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                
                
              </div>
            ))}
          </div>
        </section>

        {/* Habilidades Blandas */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Habilidades Blandas
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              buscar una descripcion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

                <div className="relative z-10">
                  <div
                    className={`w-15 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-3xl mb-4 shadow-lg`}
                  >
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{skill.description}</p>

                  <ul className="space-y-1 mb-6">
                    {skill.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-500 text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                    className="w-full py-2 px-4 rounded-lg text-sm font-medium border border-gray-700 
                               bg-gradient-to-r from-gray-700 to-gray-900 
                               hover:from-cyan-500 hover:to-blue-600 
                               hover:border-cyan-400 text-white shadow-md transition-all duration-300"
                  >
                    🚀 ¿Colaboramos?
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
