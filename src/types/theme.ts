export interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    accent: string;
    border: string;
  };
  fonts: {
    primary: string;
    secondary: string;
    sizes: {
      small: string;
      medium: string;
      large: string;
      xlarge: string;
    };
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  layout: {
    maxWidth: string;
    borderRadius: string;
    boxShadow: string;
  };
  animation: {
    transition: string;
  };
}

export type ThemeType = 'theme1' | 'theme2' | 'theme3'; 