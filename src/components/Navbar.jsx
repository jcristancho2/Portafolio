
import { useTranslation } from "react-i18next"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
  const { t, i18n } = useTranslation()

  const changeLang = (lng) => i18n.changeLanguage(lng)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-black/80 backdrop-blur-md border-b border-orange-500/20">
      <div className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
        Jcristancho.dev
      </div>

      <ul className="flex gap-8">
        <li>
          <a href="#home" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 relative group">
            {t("INICIO")}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="text-gray-300 hover:text-orange-400 transition-colors duration-300 relative group"
          >
            {t("SOBRE MI")}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="text-gray-300 hover:text-orange-400 transition-colors duration-300 relative group"
          >
            {t("PROJECTOS")}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-gray-300 hover:text-orange-400 transition-colors duration-300 relative group"
          >
            {t("CONTACTO")}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
      </ul>

      <div className="flex gap-3 items-center">
        <button
          onClick={() => changeLang("es")}
          className="px-3 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-orange-500/30 rounded-lg transition-all duration-300 hover:border-orange-400/50 backdrop-blur-sm"
        >
          <span className="text-orange-400">🇪🇸</span>
        </button>
        <button
          onClick={() => changeLang("en")}
          className="px-3 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-orange-500/30 rounded-lg transition-all duration-300 hover:border-orange-400/50 backdrop-blur-sm"
        >
          <span className="text-orange-400">🇺🇸</span>
        </button>
        <ThemeToggle />
      </div>
    </nav>
  )
}
