// src/components/Loader.jsx
import { useEffect, useState } from "react"

export default function Loader({ onFinish }) {
  const [animateOut, setAnimateOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateOut(true) // activa animación de salida
      setTimeout(onFinish, 800) // espera que termine la animación
    }, 2500)

    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-black z-50 transition-opacity duration-700 ${
        animateOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Loader animado */}
      <div className={`flex space-x-3 mb-6 ${animateOut ? "scale-0" : "scale-100"} transition-transform duration-700`}>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-6 h-6 bg-orange-500 dark:bg-orange-400 rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.2}s` }}
          ></div>
        ))}
      </div>

      <p className="text-gray-900 dark:text-white text-lg animate-pulse transition-colors duration-300">
        Cargando...
      </p>
    </div>
  )
}
