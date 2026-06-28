'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';
type PrimaryColor = '#2563EB' | '#7C3AED' | '#DC2626' | '#059669' | '#F59E0B';
type FontSize = 'small' | 'medium' | 'large';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  primaryColor: PrimaryColor;
  setPrimaryColor: (color: PrimaryColor) => void;
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Load from localStorage
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme') as Theme;
    return saved || 'light';
  });
  const [primaryColor, setPrimaryColor] = useState<PrimaryColor>(() => {
    const saved = localStorage.getItem('primaryColor') as PrimaryColor;
    return saved || '#2563EB';
  });
  const [fontSize, setFontSize] = useState<FontSize>(() => {
    const saved = localStorage.getItem('fontSize') as FontSize;
    return saved || 'medium';
  });

  // Apply dark mode
  useEffect(() => {
    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Apply primary color
  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', primaryColor);
    // Hover variant
    const hoverColor = darkenColor(primaryColor, 20);
    document.documentElement.style.setProperty('--primary-color-hover', hoverColor);
    localStorage.setItem('primaryColor', primaryColor);
  }, [primaryColor]);

  // Apply font size
  useEffect(() => {
    const sizeMap = {
      small: '14px',
      medium: '16px',
      large: '18px',
    };
    document.documentElement.style.fontSize = sizeMap[fontSize];
    localStorage.setItem('fontSize', fontSize);
  }, [fontSize]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  function darkenColor(hex: string, percent: number): string {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    r = Math.max(0, r - percent);
    g = Math.max(0, g - percent);
    b = Math.max(0, b - percent);
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        primaryColor,
        setPrimaryColor,
        fontSize,
        setFontSize,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}