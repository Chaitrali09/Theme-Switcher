import { Theme } from '../types/theme';

export const theme2: Theme = {
  name: 'Dark Serif',
  colors: {
    primary: '#1a1a1a',
    secondary: '#2d2d2d',
    background: '#0f0f0f',
    surface: '#1a1a1a',
    text: '#ffffff',
    textSecondary: '#b0b0b0',
    accent: '#ff6b6b',
    border: '#333333',
  },
  fonts: {
    primary: "'Playfair Display', Georgia, serif",
    secondary: "'Merriweather', Georgia, serif",
    sizes: {
      small: '0.9rem',
      medium: '1.1rem',
      large: '1.4rem',
      xlarge: '1.8rem',
    },
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
  },
  layout: {
    maxWidth: '1400px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  },
  animation: {
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  },
}; 