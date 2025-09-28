// src/components/ui/IconButton.jsx
import React from "react"

export default function IconButton({ onClick, children, ariaLabel }) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className="inline-flex items-center justify-center w-12 h-10
                 bg-gray-800/50 hover:bg-gray-700/50 border border-orange-500/30
                 rounded-lg transition-colors duration-200 hover:border-orange-400/50
                 focus:outline-none focus:ring-2 focus:ring-orange-400
                 select-none"
    >
      <span className="text-orange-400 text-lg font-bold leading-none">
        {children}
      </span>
    </button>
  )
}
