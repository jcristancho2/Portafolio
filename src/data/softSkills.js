'use client';

import { useTranslation } from 'react-i18next';

const softSkills = [
  { key: 'softSkills.liderazgo', icon: '🎯', color: 'from-green-500 to-emerald-500' },
  { key: 'softSkills.analitico', icon: '🧠', color: 'from-blue-500 to-cyan-500' },
  { key: 'softSkills.negociacion', icon: '🤝', color: 'from-orange-500 to-yellow-500' },
  { key: 'softSkills.comunicacion', icon: '💬', color: 'from-purple-500 to-pink-500' },
  { key: 'softSkills.curiosidad', icon: '🔍', color: 'from-red-500 to-pink-500' },
  { key: 'softSkills.responsabilidad', icon: '✅', color: 'from-green-500 to-teal-500' },
  { key: 'softSkills.resiliencia', icon: '💪', color: 'from-blue-500 to-indigo-500' },
  { key: 'softSkills.resultados', icon: '🚀', color: 'from-emerald-500 to-green-500' },
];


export default function useSoftSkills() {
  const { t } = useTranslation();

  return softSkills.map(skill => ({
    icon: skill.icon,
    color: skill.color,
    name: t(`${skill.key}.name`),
    description: t(`${skill.key}.description`),
    details: t(`${skill.key}.details`, { returnObjects: true }),
  }));
}