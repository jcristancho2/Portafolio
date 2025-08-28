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
    <section id="projects" className="p-8">
      <h2 className="text-2xl font-semibold text-center mb-4">{t("projects.title")}</h2>
      <Carousel items={projects} />
    </section>
  );
}
