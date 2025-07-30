import { Theme } from '../types/theme';

export const theme3: Theme = {
  name: 'Colorful Playful',
  colors: {
    primary: '#ff6b9d',
    secondary: '#4ecdc4',
    background: '#f7f7f7',
    surface: '#ffffff',
    text: '#2d3436',
    textSecondary: '#636e72',
    accent: '#ffa726',
    border: '#e0e0e0',
  },
  fonts: {
    primary: "'Pacifico', cursive",
    secondary: "'Comic Neue', cursive",
    sizes: {
      small: '1rem',
      medium: '1.2rem',
      large: '1.6rem',
      xlarge: '2rem',
    },
  },
  spacing: {
    xs: '0.75rem',
    sm: '1.25rem',
    md: '2rem',
    lg: '3rem',
    xl: '4rem',
  },
  layout: {
    maxWidth: '1600px',
    borderRadius: '20px',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
  },
  animation: {
    transition: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
}; 