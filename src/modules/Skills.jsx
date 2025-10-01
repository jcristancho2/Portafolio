'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import technicalSkills from '../data/technicalSkills';
import useSoftSkills from '../data/softSkills'; // <-- Ahora es un hook

// ================== FUNCIÓN PARA ORGANIZAR HABILIDADES ==================
const organizeSkillsByCategory = (t) => {
  const categories = {
    [t("skills.categories.Languages")]: [],
    [t("skills.categories.Frameworks")]: [],
    [t("skills.categories.Backend & DB")]: [],
    [t("skills.categories.Tools")]: [],
    //[t("skills.categories.Hardware & Others")]: [],
  };

  technicalSkills.forEach(skill => {
    if (['HTML5', 'CSS3', 'JavaScript', 'Python', 'C#'].includes(skill.name)) {
      categories[t("skills.categories.Languages")].push(skill);
    } else if (['Bootstrap', 'TailwindCSS', 'Vite', 'React'].includes(skill.name)) {
      categories[t("skills.categories.Frameworks")].push(skill);
    } else if (['.NET', 'MySQL', 'PostgreSQL'].includes(skill.name)) {
      categories[t("skills.categories.Backend & DB")].push(skill);
    } else if (['Visual Studio Code', 'Git', 'Docker'].includes(skill.name)) {
      categories[t("skills.categories.Tools")].push(skill);
    }
  });

  return categories;
};

// ================== COMPONENTE PRINCIPAL ==================
export default function Skills() {
  const { t } = useTranslation();
  const softSkills = useSoftSkills(); // <-- Hook devuelve soft skills traducidas
  const skillsData = organizeSkillsByCategory(t);

  return (
    <div id="skills" className="py-6 sm:py-16 md:py-16 bg-transparent from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden transition-colors duration-300">
      {/* HABILIDADES TÉCNICAS */}
      <section className="py-20 px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
              {t('skills.technical.title')}
            </h1>
            <p className="text-gray-700 dark:text-slate-300 text-xl max-w-2xl mx-auto transition-colors duration-300">
              {t('skills.technical.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-300/50 dark:border-slate-700/50 hover:border-gray-400/50 dark:hover:border-slate-600/50 transition-all duration-300"
              >
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center transition-colors duration-300">
                  {category}
                </h2>

                <div className="flex flex-wrap justify-center gap-4">
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
                      className={`bg-gradient-to-br ${skill.color} rounded-xl p-4 flex flex-col items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden w-[calc(30%-0.5rem)]`}
                    >
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200 flex items-center justify-center">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium text-center text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HABILIDADES BLANDAS */}
      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto text-center mb-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            {t('skills.soft.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto transition-colors duration-300">
            {t('skills.soft.subtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mt-6">
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
      className="group relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-300/50 dark:border-gray-800 rounded-2xl p-6 overflow-hidden cursor-pointer transition-colors duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

      <div className="relative z-10 flex items-center gap-4 mb-4">
        <div
          className={`w-16 h-16 flex-shrink-0 rounded-2xl flex items-center justify-center text-4xl 
                      bg-gradient-to-br ${skill.color} shadow-lg 
                      transition-transform duration-300 group-hover:scale-110`}
        >
          {skill.icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white leading-snug transition-colors duration-300">
          {skill.name}
        </h3>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed transition-colors duration-300">
              {skill.description}
            </p>
            <ul className="space-y-1 mb-6">
              {skill.details.map((detail, idx) => (
                <li key={idx} className="text-gray-700 dark:text-gray-500 text-sm flex items-center transition-colors duration-300">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
