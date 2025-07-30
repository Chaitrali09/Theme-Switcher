import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Theme } from '../types/theme';
import { ThemeType, themes } from '../themes';

interface ThemeContextType {
  currentTheme: Theme;
  themeType: ThemeType;
  setTheme: (themeType: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeType, setThemeType] = useState<ThemeType>('theme1');

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem('theme') as ThemeType;
    if (savedTheme && themes[savedTheme]) {
      setThemeType(savedTheme);
    }
  }, []);

  const setTheme = (newThemeType: ThemeType) => {
    setThemeType(newThemeType);
    localStorage.setItem('theme', newThemeType);
  };

  const currentTheme = themes[themeType];

  const value: ThemeContextType = {
    currentTheme,
    themeType,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 