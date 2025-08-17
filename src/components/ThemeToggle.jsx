import React from "react"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    dark ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-3 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-orange-500/30 rounded-lg transition-all duration-300 hover:border-orange-400/50 backdrop-blur-sm"
    >
      <span className="text-orange-400">{dark ? "🌙" : "☀️"}</span>
    </button>
  )
}
