import React, { useState } from "react"
import { useTranslation } from "react-i18next"

export default function Contact() {
  const { t } = useTranslation()
  const [selectedProject] = useState("")
  const [selectedContact, setSelectedContact] = useState("Email")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const contactMethods = ["Email", "WhatsApp", "Linkedin"]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", { ...formData, selectedProject, selectedContact })
  }

  return (
    <section id="contact" className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background circuit pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="10" cy="10" r="2" fill="currentColor" />
              <circle cx="90" cy="90" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            CONTACTO
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Suelo responder en menos de 24 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12 max-w-xl mx-auto">
          {/* Left side - Project selection */}
          

          {/* Right side - Contact form */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Nombre</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Tu nombre"
                  className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-gray-500"
                  required
                />
              </div>

              {/* Email field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="tucorreo@ejemplo.com"
                  className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-gray-500"
                  required
                />
              </div>



              {/* Contact preference */}
              <div>
                <label className="flex text-sm font-medium text-gray-300 mb-2 justify-center ">Prefiero que me contactes por</label>
                <div className="flex gap-2 justify-center">
                  {contactMethods.map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setSelectedContact(method)}
                      className={`px-4 py-2 rounded-lg border transition-all duration-300 text-sm font-medium ${
                        selectedContact === method
                          ? "border-cyan-400 bg-cyan-400 text-black"
                          : "border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white"
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Mensaje</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Cuéntame en pocas líneas qué necesitas. Si ya elegiste un tipo de proyecto arriba, mejor 😊"
                  rows={4}
                  className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-gray-500 resize-none"
                  required
                />
              </div>

              {/* Privacy checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-1 w-4 h-4 text-cyan-400 bg-gray-800 border-gray-600 rounded focus:ring-cyan-400"
                  required
                />
                <label htmlFor="privacy" className="text-sm text-gray-400">
                  Acepto que uses mis datos únicamente para responder este mensaje. No enviarás spam.
                </label>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
