'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import technicalSkills from '../data/technicalSkills';
import softSkills from '../data/softSkills';

// 👉 Organizar habilidades técnicas por categorías
const organizeSkillsByCategory = () => {
  const categories = {
    Languages: [],
    Frameworks: [],
    'Backend & DB': [],
    Tools: [],
    //'Hardware & Others': [],//
  };

  technicalSkills.forEach(skill => {
    if (['HTML5', 'CSS3', 'JavaScript', 'Python', 'C#'].includes(skill.name)) {
      categories['Languages'].push(skill);
    } else if (['Bootstrap', 'TailwindCSS', 'Vite', 'React'].includes(skill.name)) {
      categories['Frameworks'].push(skill);
    } else if (['.NET', 'MySQL', 'PostgreSQL'].includes(skill.name)) {
      categories['Backend & DB'].push(skill);
    } else if (['Visual Studio Code', 'Git', 'Docker'].includes(skill.name)) {
      categories['Tools'].push(skill);
    } else {
      categories['Hardware & Others'].push(skill);
    }
  });

  return categories;
};

// ================== COMPONENTE PRINCIPAL ==================
export default function Skills() {
  const skillsData = organizeSkillsByCategory();

  return (
    <div id="skills" className="py-12 sm:py-16 md:py-24 bg-transparent from-slate-900 via-slate-800 to-slate-900">
      {/* ================== HABILIDADES TÉCNICAS ================== */}
      <section className="py-20 px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-4">
              Habilidades Técnicas
            </h1>
            <p className="text-slate-300 text-xl max-w-2xl mx-auto">
              Una visión integral de mi experiencia técnica en diferentes dominios
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
              >
                <h2 className="text-xl font-bold text-white mb-4 text-center">
                  {category}
                </h2>

                <div
                  className={`${
                    skills.length % 2 === 1
                      ? 'flex flex-wrap justify-center gap-4'
                      : 'flex flex-wrap grid-cols-2 justify-center gap-4'
                  }`}
                >
                  {skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`bg-gradient-to-br ${skill.color} rounded-xl p-4 flex flex-col items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden ${
                        skills.length % 2 === 1 ? 'w-[calc(30%-0.5rem)]' : 'w-[calc(30%-0.5rem)]'
                      }`}
                    >
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200 flex items-center justify-center">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium text-center">
                        {skill.name}
                      </span>

                      {/* Overlay al hacer hover */}
                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex flex-col items-center justify-center p-2 text-xs">
                        
                        <div className="flex flex-wrap gap-1 justify-center">
                            <a
                              href={skill.docLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-2 px-3 py-1 text-xs font-semibold text-white rounded-lg bg-transparent hover:bg-white/30 transition-all duration-300"
                            >
                            </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================== HABILIDADES BLANDAS ================== */}
      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Encabezado */}
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Habilidades Blandas
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Competencias interpersonales y de gestión que refuerzan mi perfil técnico,
              ayudándome a trabajar mejor en equipo y a liderar proyectos con impacto real.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {softSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ================== COMPONENTE TARJETA SOFT SKILL ==================
function SkillCard({ skill, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: open ? 1 : 1.05 }}
      onClick={() => setOpen(!open)}
      role="button"
      aria-expanded={open}
      className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 overflow-hidden cursor-pointer"
    >
      {/* Glow efecto hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

      {/* Icono + Nombre */}
      <div className="relative z-10 flex items-center gap-4 mb-4">
        <div
          className={`w-16 h-16 flex-shrink-0 rounded-2xl flex items-center justify-center text-4xl 
                      bg-gradient-to-br ${skill.color} shadow-lg 
                      dark:shadow-cyan-500/30 shadow-slate-500/30 
                      transition-transform duration-300 group-hover:scale-110`}
        >
          {skill.icon}
        </div>
        <h3 className="text-xl font-semibold text-white leading-snug">
          {skill.name}
        </h3>
      </div>

      {/* Contenido expandible */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              {skill.description}
            </p>

            <ul className="space-y-1 mb-6">
              {skill.details.map((detail, idx) => (
                <li
                  key={idx}
                  className="text-gray-500 text-sm flex items-center"
                >
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
