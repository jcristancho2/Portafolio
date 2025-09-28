import { useState } from "react"
import { useTranslation } from "react-i18next"
import { SquareMenu, SquareX } from "lucide-react"
import ThemeToggle from "./ThemeToggle"
import IconButton from "../components/ui/IconButton"


export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false)

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-orange-500/20">
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
          Jcristancho
        </div>

        {/* Menú desktop */}
        <div className="hidden md:flex justify-center">
          <ul className="flex gap-8">
            <li>
              <a href="#home" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 relative group">
                {t("INICIO")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 relative group">
                {t("SOBRE MI")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#projects" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 relative group">
                {t("PROYECTOS")}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 relative group">
                {t("CONTACTO")}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </div>

        {/* Botón hamburguesa (solo móvil) */}
        <button
          className="md:hidden justify-center text-orange-700 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          {isOpen ? <SquareX size={35} /> : <SquareMenu size={40} />}
        </button>

        {/* Idioma + Tema */}
        <div className="flex gap-2 items-center">
          <IconButton onClick={toggleLang} ariaLabel="Cambiar idioma">
            {i18n.language === "es" ? "ES" : "EN"}
          </IconButton>
          <ThemeToggle asIconButton />
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <div className="md:hidden bg-transparent border-t border-orange-500/20">
          <ul className="flex flex-col items-center gap-2 py-2">
            <li>
              <a href="#home" className="text-gray-300 hover:text-orange-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>
                {t("INICIO")}
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-300 hover:text-orange-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>
                {t("SOBRE MI")}
              </a>
            </li>
            <li>
              <a href="#projects" className="text-gray-300 hover:text-orange-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>
                {t("PROYECTOS")}
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-300 hover:text-orange-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>
                {t("CONTACTO")}
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
