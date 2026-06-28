'use client';

import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

const colors = [
  { name: 'Blue', value: '#2563EB' },
  { name: 'Purple', value: '#7C3AED' },
  { name: 'Red', value: '#DC2626' },
  { name: 'Green', value: '#059669' },
  { name: 'Amber', value: '#F59E0B' },
];

export default function ThemeCustomizer() {
  const { theme, toggleTheme, primaryColor, setPrimaryColor, fontSize, setFontSize } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-primary text-white p-3 rounded-full shadow-lg hover:scale-105 transition-transform"
        aria-label="Theme Customizer"
      >
        <span className="text-2xl">🎨</span>
      </button>

      {/* Customizer Panel */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 bg-white dark:bg-dark-light border border-border dark:border-border-dark rounded-xl shadow-2xl p-6 w-72 max-h-[80vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-dark dark:text-white">Theme Customizer</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-lighter hover:text-dark dark:hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Dark/Light Mode */}
          <div className="mb-4">
            <p className="text-sm font-semibold text-dark dark:text-white mb-2">Mode</p>
            <button
              onClick={toggleTheme}
              className="w-full py-2 px-4 bg-bg-light dark:bg-bg-dark border border-border dark:border-border-dark rounded-lg flex items-center justify-between hover:bg-bg-light/80 transition"
            >
              <span className="text-dark dark:text-white">
                {theme === 'light' ? '☀️ Light' : '🌙 Dark'}
              </span>
              <span className="text-sm text-slate-lighter">
                {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
              </span>
            </button>
          </div>

          {/* Primary Color */}
          <div className="mb-4">
            <p className="text-sm font-semibold text-dark dark:text-white mb-2">Primary Color</p>
            <div className="flex gap-2 flex-wrap">
              {colors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setPrimaryColor(color.value as any)}
                  className={`w-8 h-8 rounded-full border-2 transition ${
                    primaryColor === color.value
                      ? 'border-dark dark:border-white scale-110'
                      : 'border-transparent'
                  }`}
                  style={{ backgroundColor: color.value }}
                  aria-label={`Set ${color.name} theme`}
                />
              ))}
            </div>
          </div>

          {/* Font Size */}
          <div>
            <p className="text-sm font-semibold text-dark dark:text-white mb-2">Font Size</p>
            <div className="flex gap-2">
              {['small', 'medium', 'large'].map((size) => (
                <button
                  key={size}
                  onClick={() => setFontSize(size as any)}
                  className={`flex-1 py-1.5 px-3 rounded-lg border text-sm transition ${
                    fontSize === size
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border dark:border-border-dark text-slate-lighter hover:border-primary'
                  }`}
                >
                  {size.charAt(0).toUpperCase() + size.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}