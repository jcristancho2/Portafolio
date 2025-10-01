"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { SquareMenu, SquareX, Github } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import ThemeToggle from "./ThemeToggle"
import IconButton from "../components/ui/IconButton"

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // 🔹 Detectar scroll para aplicar efecto shrink
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es")
  }

  const sections = [
    { key: "home", href: "#home" },
    { key: "about", href: "#about" },
    { key: "skills", href: "#skills" },
    { key: "projects", href: "#projects" },
    { key: "contact", href: "#contact" },
  ]

  return (
    <motion.nav
      role="navigation"
      initial={false}
      animate={{
        paddingTop: scrolled ? "0.3rem" : "0.8rem",
        paddingBottom: scrolled ? "0.3rem" : "0.8rem",
        backgroundColor: scrolled
          ? "rgba(255, 255, 255, 0.15)"
          : "rgba(255, 255, 255, 0.08)",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 
        dark:from-black/10 dark:to-black/5 
        backdrop-blur-3xl 
        border-b border-white/5 dark:border-white/5 
        shadow-lg`}
    >
      <div className="flex justify-between items-center px-4">
        {/* Logo con enlace a GitHub */}
        <div className="flex items-center gap-2">
          <Github size={30}  className="text-orange-400 dark:text-orange-500" />
          <motion.a
            href="https://github.com/jcristancho2"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 
                        bg-clip-text text-transparent cursor-pointer transition-all
                        hover:drop-shadow-[0_0_10px_rgba(255,100,0,0.6)]
                        ${scrolled ? "text-lg" : "text-xl"}`}
          >
          Jcristancho2
          </motion.a>
        </div>
        {/* Menú desktop */}
        <div className="hidden md:flex justify-center">
          <ul className="flex gap-8">
            {sections.map(({ key, href }) => (
              <li key={key}>
                <a
                  href={href}
                  className="relative text-bold text-gray-700 dark:text-gray-300 hover:text-orange-400 transition-colors duration-300 group"
                >
                  {t(`navbar.${key}`)}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-orange-400 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Controles desktop */}
        <div className="hidden md:flex gap-2 items-center">
          <IconButton onClick={toggleLang} ariaLabel="Cambiar idioma">
            {i18n.language === "es" ? "ES" : "EN"}
          </IconButton>
          <ThemeToggle asIconButton />
        </div>

        {/* Botón hamburguesa móvil */}
        <button
          className="md:hidden text-orange-700 dark:text-orange-400 transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <SquareX size={30} /> : <SquareMenu size={35} />}
        </button>
      </div>

      {/* Menú móvil animado */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <div
              className="bg-gradient-to-b from-white/10 to-white/5 dark:from-black/10 dark:to-black/5
                backdrop-blur-3xl border-t border-white/5 dark:border-white/5 shadow-lg"
            >
              <ul className="flex flex-col items-center gap-4 py-6">
                {sections.map(({ key, href }) => (
                  <motion.li
                    key={key}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <a
                      href={href}
                      className="text-gray-700 dark:text-gray-300 hover:text-orange-400 transition-colors duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {t(`navbar.${key}`)}
                    </a>
                  </motion.li>
                ))}

                {/* Idioma + Tema móvil */}
                <motion.div
                  className="flex gap-4 mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <IconButton onClick={toggleLang} ariaLabel="Cambiar idioma">
                    {i18n.language === "es" ? "ES" : "EN"}
                  </IconButton>
                  <ThemeToggle asIconButton />
                </motion.div>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
