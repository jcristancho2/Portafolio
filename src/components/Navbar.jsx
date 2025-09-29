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

  // 👉 Secciones con clave i18n y target
  const sections = [
    { key: "home", href: "#home" },
    { key: "about", href: "#about" },
    { key: "skills", href: "#skills" },
    { key: "projects", href: "#projects" },
    { key: "contact", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-orange-500/20 dark:border-orange-400/20 transition-colors duration-300">
      <div className="flex justify-between items-center p-2">
        {/* Logo */}
        <div className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
          Jcristancho
        </div>

        {/* Menú desktop */}
        <div className="hidden md:flex justify-center">
          <ul className="flex gap-8">
            {sections.map(({ key, href }) => (
              <li key={key}>
                <a
                  href={href}
                  className="text-gray-700 dark:text-gray-300 hover:text-orange-400 transition-colors duration-300 relative group"
                >
                  {t(`navbar.${key}`)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Botón hamburguesa (solo móvil) */}
        <button
          className="md:hidden justify-center text-orange-700 dark:text-orange-400 cursor-pointer transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          {isOpen ? <SquareX size={30} /> : <SquareMenu size={35} />}
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
        <div className="md:hidden bg-white/90 dark:bg-black/90 backdrop-blur-sm border-t border-orange-500/20 dark:border-orange-400/20 transition-colors duration-300">
          <ul className="flex flex-col items-center gap-2 py-2">
            {sections.map(({ key, href }) => (
              <li key={key}>
                <a
                  href={href}
                  className="text-gray-700 dark:text-gray-300 hover:text-orange-400 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {t(`navbar.${key}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
