/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',  // 👈 یہ ضروری ہے
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color, #2563EB)',
        'primary-hover': 'var(--primary-color-hover, #1D4ED8)',
        dark: '#0b1c30',
        'dark-light': '#1e293b',
        slate: '#334155',
        'slate-light': '#475569',
        'slate-lighter': '#94a3b8',
        'bg-light': '#f8fafc',
        'bg-dark': '#0f172a',
        border: '#e2e8f0',
        'border-dark': '#334155',
        success: '#10B981',
        white: '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}