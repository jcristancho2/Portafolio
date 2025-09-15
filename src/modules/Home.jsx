"use client"

// src/modules/Home.jsx
import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import Card from "../components/ui/Card"
import { ChevronDown, Github, Linkedin, Mail, Code, Zap, Rocket } from "lucide-react"

export default function Home() {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)

  const roles = ["SOFTWARE DEVELOPER", "ELECTRONIC ENGINEER"]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToNext = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
  }

  const stats = [
    { icon: Code, label: "Projects", value: "50+", color: "from-blue-500 to-cyan-500" },
    { icon: Zap, label: "Experience", value: "5+", color: "from-orange-500 to-red-500" },
    { icon: Rocket, label: "Technologies", value: "20+", color: "from-purple-500 to-pink-500" },
  ]

  return (
    <section id="home" className="min-h-screen bg-transparent text-white relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 lg:px-8">
        <div className="max-w-7xl w-full">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Stats Panel */}
            <div
              className={`lg:col-span-3 space-y-6 transition-all duration-1000 delay-300 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
              }`}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <Card
                    key={stat.label}
                    className={`bg-gray-900/50 border-gray-700 p-4 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 hover:border-gray-600 delay-${index * 100}`}
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                        <div className="text-2xl font-bold">{stat.value}</div>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>

            {/* Center - Main Hero */}
            <div
              className={`lg:col-span-6 text-center space-y-8 transition-all duration-1000 delay-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  FUTURE
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 animate-gradient">
                    DEVELOPMENT.
                  </span>
                  <br />
                  <span className="text-2xl lg:text-4xl text-gray-300">REDEFINED.</span>
                </h1>

                {/* Animated Role */}
                <div className="h-12 flex items-center justify-center">
                  <div className="text-lg lg:text-xl text-gray-300 font-mono">
                    <span className="text-orange-500">|</span> {roles[currentRole]}
                    <span className="animate-blink">|</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center space-x-6 pt-4">
                {[
                  { icon: Github, href: "#", color: "hover:text-white-400" },
                  { icon: Linkedin, href: "#", color: "hover:text-blue-400" },
                  { icon: Mail, href: "#", color: "hover:text-orange-400" },
                ].map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`text-gray-500 ${social.color} transform hover:scale-110 transition-all duration-300`}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Right Info Panel */}
            <div
              className={`lg:col-span-3 space-y-6 transition-all duration-1000 delay-700 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
              }`}
            >
              <img src="/unnamed-removebg-preview.png" alt="Profile" className="mx-auto h-full w-auto object-contain" />
              
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={scrollToNext}
          className="text-gray-400 hover:text-white transition-colors duration-300 animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  )
}
