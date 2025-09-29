import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function ThemeToggle({ asIconButton = false }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  if (asIconButton) {
    return (
      <button
        onClick={toggleTheme}
        className="px-2 py-2 bg-gray-800/50 hover:bg-gray-700/50 dark:bg-gray-200/50 dark:hover:bg-gray-300/50 border border-orange-500/30 dark:border-orange-400/30 rounded-lg transition-all duration-300 hover:border-orange-400/50 dark:hover:border-orange-500/50 backdrop-blur-sm"
        aria-label={
          theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'
        }
      >
        <span className="text-orange-400 dark:text-orange-500">
          {theme === 'dark' ? '☀️' : '🌙'}
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 dark:bg-gray-200/50 dark:hover:bg-gray-300/50 border border-orange-500/30 dark:border-orange-400/30 rounded-lg transition-all duration-300 hover:border-orange-400/50 dark:hover:border-orange-500/50 backdrop-blur-sm"
      aria-label={
        theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'
      }
    >
      <span className="text-orange-400 dark:text-orange-500">
        {theme === 'dark' ? '☀️' : '🌙'}
      </span>
    </button>
  );
}
