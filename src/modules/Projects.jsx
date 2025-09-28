import { useTranslation } from "react-i18next";
import Carousel from "../components/carousel";

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    { img: "arenacombat.png", 
      title: "Arena mortal combat", 
      description:"sdfasdfasdf", 
      technologies: ["React", "Node.js", "Tailwind"] },
    { img: "hamburgesaartesanal.png", title: "page",
      description:"sdfasdfasdf", 
      technologies: ["React", "Node.js", "Tailwind"] },
    { img: "villanshub.png", title: "villanshub", 
      description:"sdfasdfasdf", 
      technologies: ["React", "Node.js", "Tailwind"] },
  ];

  return (
    <section id="projects" className="
    py-12 mt-16 sm:py-16 lg:py-20
    bg-transparent text-white
    gap-6 relative overflow-hidden
  ">
      <div className="text-center mt-12">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
          {t("projectos")}
        </h2>
      </div>
      <Carousel items={projects}  />
    </section>
  );
}
