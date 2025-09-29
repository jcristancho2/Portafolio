import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";

export default function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    setTimeout(() => setIsAnimating(false), 500) // duración de animación
  }, [isAnimating, items.length]);

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const getCardStyle = (index) => {
    const diff = index - currentIndex;
    const absIndex = Math.abs(diff);

    if (absIndex === 0) {
      return {
        transform: "translateX(0%) scale(1.2) rotateY(0deg)",
        zIndex: 10,
        opacity: 1,
      };
    } else if (absIndex === 1) {
      const direction = diff > 0 ? 1 : -1;
      return {
        transform: `translateX(${direction * 70}%) scale(1) rotateY(${-direction * 25}deg)`,
        zIndex: 5,
        opacity: 0.8,
      };
    } else if (absIndex === 2) {
      const direction = diff > 0 ? 1 : -1;
      return {
        transform: `translateX(${direction * 120}%) scale(0.85) rotateY(${-direction * 45}deg)`,
        zIndex: 2,
        opacity: 0.5,
      };
    } else {
      return { transform: "translateX(150%) scale(0.7)", zIndex: 1, opacity: 0 };
    }
  };

  return (
    <div className="relative w-full h-[500px] sm:h-[550px] mt-12 flex flex-col items-center">
  {/* Contenedor principal */}
      <div className="relative w-full h-full flex justify-center items-center perspective-1000">
        {items.map((item, index) => (
          <div
            key={index}
            className="absolute w-72 h-[320px] sm:w-80 sm:h-[350px] md:w-96 md:h-[400px] cursor-pointer transition-all duration-500 ease-out preserve-3d"
            style={getCardStyle(index)}
            onClick={() => goToSlide(index)}
          >
            {/* Tarjeta */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-900 dark:to-black border border-gray-300 dark:border-transparent shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 group">
              {/* Imagen */}
              <div className="relative w-full h-full md:h-full overflow-hidden">
                <img
                  src={item.img || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                {index === currentIndex && (
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.liveUrl && (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-orange-500/20 backdrop-blur-sm rounded-full hover:bg-orange-500/40 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4 text-orange-400" />
                      </a>
                    )}
                    {item.githubUrl && (
                      <a
                        href={item.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-orange-500/20 backdrop-blur-sm rounded-full hover:bg-orange-500/40 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4 text-orange-400" />
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl p-4 bg-white/10 dark:bg-transparent backdrop-blur-md shadow-lg border border-gray-300/20 dark:border-white/10">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-orange-400 transition-colors">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-gray-700 dark:text-gray-300 text-xs mb-2 line-clamp-2">
                    {item.description}
                  </p>
                )}
                {Array.isArray(item.technologies) && item.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {item.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[10px] bg-orange-500/20 text-orange-600 dark:text-orange-300 rounded-full border border-orange-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

  {/* Botones */}
  <button
    onClick={prevSlide}
    disabled={isAnimating}
    className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 p-3 bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-full border border-orange-500/30 hover:bg-orange-500/20 hover:border-orange-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-20"
  >
    <ChevronLeft className="w-6 h-6 text-orange-400" />
  </button>
  <button
    onClick={nextSlide}
    disabled={isAnimating}
    className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 p-3 bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-full border border-orange-500/30 hover:bg-orange-500/20 hover:border-orange-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-20"
  >
    <ChevronRight className="w-6 h-6 text-orange-400" />
  </button>

  {/* Puntos */}
  <div className="flex justify-center mt-6 gap-2">
    {items.map((_, index) => (
      <button
        key={index}
        onClick={() => goToSlide(index)}
        disabled={isAnimating}
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          index === currentIndex
            ? "bg-orange-500 shadow-lg shadow-orange-500/50"
            : "bg-gray-400 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-500"
        }`}
      />
    ))}
  </div>
</div>
  );
}
