import { useTranslation } from 'react-i18next';
import Carousel from '../components/carousel';

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      img: "/projects/arenacombat.webp",
      title: t("projects.arenacombat.title"),
      description: t("projects.arenacombat.description"),
      technologies: ["Vanilla", "JsonServer", "Tailwind"]
    },
    {
      img: "/projects/hamburgesaartesanal.webp",
      title: t("projects.hamburgesaartesanal.title"),
      description: t("projects.hamburgesaartesanal.description"),
      technologies: ["JavaScript", "CSS3", "HTML5"]
    },
    {
      img: "/projects/villanshub.webp",
      title: t("projects.villanshub.title"),
      description: t("projects.villanshub.description"),
      technologies: ["Vanilla", "JsonServer", "Tailwind"]
    },
  ];

  return (
    <section id="projects" className="py-12 mt-16 sm:py-16 lg:py-20 bg-transparent text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      <div className="text-center mt-12">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-cyan-400 dark:from-white dark:to-cyan-400 bg-clip-text text-transparent">
          {t("projects.title")}
        </h2>
      </div>
      <Carousel items={projects} />
    </section>
  );
}