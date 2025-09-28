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
    <section
      id="about"
      aria-labelledby="about-title"
      className="min-h-screen bg-transparent text-white py-16 px-4 lg:px-6 flex justify-center items-start"
    >
      {/* Tarjeta principal con efecto cristal */}
      <Card className="relative z-10 w-full max-w-5xl p-8 sm:p-10 m-5 bg-gray-900/50 backdrop-blur-sm shadow-lg border border-gray-800/50 rounded-xl transition-all duration-500 ease-in-out hover:scale-105">
        
        {/* Título */}
        <h2
          id="about-title"
          className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-8 text-center lg:text-left"
        >
          {t("About")}
        </h2>

        {/* Contenido */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-6 lg:gap-10">
          
          {/* Foto de perfil */}
          <div
            className={`mx-auto lg:mx-0 transition-all duration-700 ease-out ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
            }`}
          >
            <img
              src="/cardpass.png"
              alt="Foto de Jorge Cristancho"
              className="w-full sm:w-80 lg:w-[400px] h-auto object-contain rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>

          {/* Descripción */}
          <div
            className={`space-y-4 sm:space-y-6 transition-all duration-700 ease-out ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            }`}
          >
            {/* Subtítulo */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-2 sm:mb-4 text-center lg:text-left bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-md">
              {t("about.info")}
            </h3>

            {/* H4 con TypingEffect */}
            <div className="h-auto lg:h-[150px] overflow-hidden">
              <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 sm:mb-4 text-center lg:text-left bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-md">
                <TypingEffect
                  texts={[t("about.whoAmI")]}
                  speed={80}
                  deleteSpeed={80}
                  pause={1000}
                  loop
                  className="inline"
                />
              </h4>
            </div>

            {/* Descripciones */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mb-2">
              {t("about.description1")}
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
              {t("about.description2")}
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
}
