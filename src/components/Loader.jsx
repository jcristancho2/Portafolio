// src/components/Loader.jsx
import { useEffect, useState } from "react"

export default function Loader({ onFinish }) {
  const [animateOut, setAnimateOut] = useState(false)

  useEffect(() => {
    // Simula carga de 2.5 segundos
    const timer = setTimeout(() => {
      setAnimateOut(true) // activa animación de salida
      setTimeout(onFinish, 800) // espera que termine el zoom-out
    }, 2500)

    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-black z-50 transition-opacity duration-700 ${
        animateOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Funko con animación */}
      <img
        src="/funko.png"
        alt="Loading Funko"
        className={`w-48 h-48 animate-spin-slow transition-transform duration-700 ${
          animateOut ? "scale-0" : "scale-100"
        }`}
      />

      <p className="text-gray-900 dark:text-white mt-6 text-lg animate-pulse transition-colors duration-300">Cargando...</p>
    </div>
  )
}
