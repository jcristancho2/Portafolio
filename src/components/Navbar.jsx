import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Menu, X } from "lucide-react" // iconos
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const changeLang = (lng) => i18n.changeLanguage(lng)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-orange-500/20">
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
          Ing.Jcristancho.dev
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
              <a href="#skills" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 relative group">
                {t("SOBRE MI")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#projects" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 relative group">
                {t("PROYECTOS")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 relative group">
                {t("CONTACTO")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </div>

        {/* Botones idioma + tema (desktop) */}
        <div className="hidden md:flex gap-3 items-center">
          <button
            onClick={() => changeLang("es")}
            aria-label="Cambiar idioma a español"
            className="px-3 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-orange-500/30 rounded-lg transition-all duration-300 hover:border-orange-400/50 backdrop-blur-sm"
          >
            <span className="text-orange-400">ES</span>
          </button>
          <button
            onClick={() => changeLang("en")}
            aria-label="Change language to English"
            className="px-3 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-orange-500/30 rounded-lg transition-all duration-300 hover:border-orange-400/50 backdrop-blur-sm"
          >
            <span className="text-orange-400">EN</span>
          </button>
          <ThemeToggle />
        </div>

        {/* Botón hamburguesa (solo móvil) */}
        <button
          className="md:hidden text-orange-400"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-orange-500/20">
          <ul className="flex flex-col items-center gap-6 py-6">
            <li>
              <a
                href="#home"
                className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {t("INICIO")}
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {t("SOBRE MI")}
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {t("PROYECTOS")}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {t("CONTACTO")}
              </a>
            </li>
            {/* Idioma + Tema en móvil */}
            <div className="flex gap-3 items-center">
              <button
                onClick={() => { changeLang("es"); setIsOpen(false) }}
                className="px-3 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-orange-500/30 rounded-lg transition-all duration-300"
              >
                <span className="text-orange-400">ES</span>
              </button>
              <button
                onClick={() => { changeLang("en"); setIsOpen(false) }}
                className="px-3 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-orange-500/30 rounded-lg transition-all duration-300"
              >
                <span className="text-orange-400">EN</span>
              </button>
              <ThemeToggle />
            </div>
          </ul>
        </div>
      )}
    </nav>
  )
}
