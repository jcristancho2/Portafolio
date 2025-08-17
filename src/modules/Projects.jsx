import { useTranslation } from "react-i18next";
import Carousel from "../components/carousel";

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    { img: "/assets/proj1.png", title: "E-commerce" },
    { img: "/assets/proj2.png", title: "Dashboard" },
    { img: "/assets/proj3.png", title: "Portfolio" },
  ];

  return (
    <section id="projects" className="p-8">
      <h2 className="text-2xl font-semibold text-center mb-4">{t("projects.title")}</h2>
      <Carousel items={projects} />
    </section>
  );
}
