
import { useState, useEffect } from "react"

export default function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % items.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  const getCardStyle = (index) => {
    const diff = index - currentIndex
    const absIndex = Math.abs(diff)

    if (absIndex === 0) {
      return { transform: "translateX(0%) scale(1) rotateY(0deg)", zIndex: 10, opacity: 1 }
    } else if (absIndex === 1) {
      const direction = diff > 0 ? 1 : -1
      return { transform: `translateX(${direction * 60}%) scale(0.85) rotateY(${-direction * 25}deg)`, zIndex: 5, opacity: 0.7 }
    } else if (absIndex === 2) {
      const direction = diff > 0 ? 1 : -1
      return { transform: `translateX(${direction * 100}%) scale(0.7) rotateY(${-direction * 45}deg)`, zIndex: 2, opacity: 0.4 }
    } else {
      return { transform: "translateX(200%) scale(0.5)", zIndex: 1, opacity: 0 }
    }
  }

  // Simple inline SVGs para flechas
  const LeftArrow = () => (
    <svg className="w-6 h-6 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
    </svg>
  )

  const RightArrow = () => (
    <svg className="w-6 h-6 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
  )

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      <div className="relative h-96 flex items-center justify-center perspective-1000">
        {items.map((item, index) => (
          <div
            key={index}
            className="absolute w-80 h-80 cursor-pointer transition-all duration-500 ease-out preserve-3d"
            style={getCardStyle(index)}
            onClick={() => goToSlide(index)}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-orange-500/20 shadow-2xl hover:shadow-orange-500/20 transition-all duration-300">
              <div className="relative w-full h-2/3 overflow-hidden">
                <img
                  src={item.img || "/arenacombat.png"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/90 to-transparent">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                {item.description && <p className="text-gray-300 text-sm mb-3 line-clamp-2">{item.description}</p>}
                {item.technologies && (
                  <div className="flex flex-wrap gap-1">
                    {item.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-orange-500/20 text-orange-300 rounded-full border border-orange-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {item.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-gray-500/20 text-gray-300 rounded-full border border-gray-500/30">
                        +{item.technologies.length - 3}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Flechas de navegación */}
      <button
        onClick={prevSlide}
        disabled={isAnimating}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm rounded-full border border-orange-500/30 hover:bg-orange-500/20 hover:border-orange-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-20"
      >
        <LeftArrow />
      </button>

      <button
        onClick={nextSlide}
        disabled={isAnimating}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm rounded-full border border-orange-500/30 hover:bg-orange-500/20 hover:border-orange-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-20"
      >
        <RightArrow />
      </button>

      {/* Dots indicator */}
      <div className="flex justify-center mt-8 gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-orange-500 shadow-lg shadow-orange-500/50" : "bg-gray-600 hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
