import { useTranslation } from "react-i18next";
import Carousel from "../components/carousel";

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    { img: "arenacombat.png", title: "Arena mortal combat" },
    { img: "hamburgesaartesanal.png", title: "page" },
    { img: "villanshub.png", title: "villanshub" },
  ];

  return (
    <section id="projects" className="py-12  bg-transparent text-white py-4 sm:py-6 lg:py-20 gap-10 relative overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
          {t("projectos")}
        </h2>
      </div>
      <Carousel items={projects}  />
    </section>
  );
}
