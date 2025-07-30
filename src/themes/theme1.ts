import { Theme } from '../types/theme';

export const theme1: Theme = {
  name: 'Minimalist',
  colors: {
    primary: '#2c3e50',
    secondary: '#34495e',
    background: '#ffffff',
    surface: '#f8f9fa',
    text: '#2c3e50',
    textSecondary: '#7f8c8d',
    accent: '#3498db',
    border: '#e9ecef',
  },
  fonts: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    secondary: "'Inter', sans-serif",
    sizes: {
      small: '0.875rem',
      medium: '1rem',
      large: '1.25rem',
      xlarge: '1.5rem',
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  layout: {
    maxWidth: '1200px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  animation: {
    transition: 'all 0.3s ease',
  },
}; 