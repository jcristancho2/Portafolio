"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import Card from "../components/ui/Card"
import TypingEffect from "../components/TypingEffect"
import { ChevronDown, Github, Linkedin, Mail, FileText } from "lucide-react"
import Loader from "../components/Loader"

export default function Home() {
  useTranslation()
  const [isVisible, setIsVisible] = useState(false)
  const [, setCurrentRole] = useState(0)

  // 👇 loader state
  const [loading, setLoading] = useState(true)
  const [, setLoaded] = useState(false)

  const roles = ["SOFTWARE DEVELOPER", "ELECTRONIC ENGINEER"]
  const homedescription = ["Beta", "Improving", "Learning", "Creating", "Innovating"]

  useEffect(() => {
    setIsVisible(true)

    // ciclo de roles
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)

    // simular tiempo de carga
    const timer = setTimeout(() => {
      setLoading(false)
      setLoaded(true)
    }, 1500)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [])

  const scrollToNext = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
  }

  // 👇 mientras carga mostramos Loader
  if (loading) {
    return <Loader />
  }

  return (
    <section
      id="home"
      className="min-h-screen bg-transparent text-white relative overflow-hidden flex flex-col"
    >
  
      {/* Hero Section */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 lg:px-16 text-center lg:text-left">
        
        {/* Imagen perfil (funko) */}
        <div className="relative flex justify-center lg:justify-end w-full lg:w-1/2">
          <img
            src="/funko.png"
            alt="Profile"
            className={`
              transition-all duration-1000 delay-300 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }
              max-w-xs lg:max-w-sm
              max-h-[500px] w-auto object-contain lg:max-h-[700px]
            `}
          />

          {/* Card de información sobrepuesta */}
          <Card className="absolute z-50 left-70 bottom-0 lg:left-60 p-4 bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg max-w-xl">
            <h2 className="text-xl font-bold text-white mb-2">
              Jorge Andres Cristancho Olarte
            </h2>
            <p className="text-ml text-gray-200">
              Electronic Engineer & Software Developer
            </p>
          </Card>


        </div>

        {/* Texto e info */}
        <div
          className={`mt-8 lg:mt-0 w-full lg:w-1/2 space-y-8 transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              ALWAYS
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 animate-gradient">
                <TypingEffect
                  texts={homedescription}
                  speed={80}
                  deleteSpeed={50}
                  pause={1500}
                  loop
                  className="inline"
                />
              </span>
            </h1>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4">
            {[
              { icon: Github, href: "https://github.com/jcristancho2 ", color: "hover:text-white-400" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/jcristanchool", color: "hover:text-blue-400" },
              { icon: Mail, href: "mailto:jocristanchool@gmail.com", color: "hover:text-orange-400" },
              { icon: FileText, href: "https://drive.google.com/file/d/1DW2FGUqbqrcTxOp2QORjWc1YzB1jCFcj/view?usp=sharing", color: "hover:text-green-400" }, // 👈 Nuevo ítem para CV
            ].map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-500 ${social.color} transform hover:scale-110 transition-all duration-300`}
                >
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
                </a>
              )
            })}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={scrollToNext}
          className="text-gray-400 hover:text-white transition-colors duration-300 animate-bounce"
        >
          <ChevronDown className="w-10 h-10 sm:w-12 sm:h-12" />
        </button>
      </div>
    </section>
  )
}
