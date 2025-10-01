// src/modules/About.jsx
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Card from "../components/ui/Card";
import TypingEffect from "../components/TypingEffect";

export default function About() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about" aria-labelledby="about-title" className="min-h-[70vh] md:min-h-screen 
    bg-transparent text-gray-900 dark:text-white 
    pt-16 sm:pt-16 md:pt-24 
    px-4 sm:px-6 md:px-12 lg:px-20 
    flex justify-center items-start transition-colors duration-300
  ">
      {/* Tarjeta principal con efecto cristal */}
        <Card className="relative z-10 w-full max-w-4xl p-5 sm:p-7 md:p-10 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm shadow-lg border border-gray-300/50 dark:border-gray-800/50 rounded-xl transition-colors duration-300">
          
          {/* Título */}
          <h2
            id="about-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 text-center lg:text-left"
          >
            {t("About")}
          </h2>

          {/* Contenido */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8 lg:gap-16 mt-6">
            
            {/* Foto de perfil */}
            <div
              className={`mx-auto lg:mx-0 transition-all duration-700 ease-out ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
              }`}
            >
              <img
                src="/cardpass.png"
                alt="Foto de Jorge Cristancho"
                className="w-[140px] sm:w-[200px] md:w-[260px] lg:w-[320px] xl:w-[380px] object-contain rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </div>

            {/* Descripción */}
            <div
              className={`space-y-2 sm:space-y-4 transition-all duration-700 ease-out ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
              }`}
            >
            {/* H4 con TypingEffect */}
              <div className="h-auto lg:h-[100px] overflow-hidden">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-0 text-center lg:text-left bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-md">
                  <TypingEffect
                    texts={[t("about.info")]}
                    speed={80}
                    deleteSpeed={80}
                    pause={1000}
                    loop
                    className="inline"
                  />
                </h3>
              </div>

              {/* Descripciones */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed sm:mx-6 lg:mx-0">
                {t("about.description1")}
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed sm:mx-6 lg:mx-0">
                {t("about.description2")}
              </p>
            </div>
          </div>
        </Card>
      </section>

  );
}
