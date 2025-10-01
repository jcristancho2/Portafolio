/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      keyframes: {
    slideDownFade: {
      '0%': { opacity: '0', transform: 'translateY(-20px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' },
    },
  },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
        slideDownFade: 'slideDownFade 0.4s ease-out',
      },
    },
  },
  plugins: [],
};
