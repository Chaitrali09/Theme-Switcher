import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { ThemeType } from '../types/theme';

const HeaderContainer = styled.header<{ theme: any }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: ${({ theme }) => theme.animation.transition};
`;

const NavContainer = styled.nav<{ theme: any }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const NavLink = styled(Link)<{ theme: any; $active?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  color: ${({ theme, $active }) => $active ? theme.colors.accent : theme.colors.text};
  text-decoration: none;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  transition: ${({ theme }) => theme.animation.transition};
  font-weight: ${({ $active }) => $active ? 'bold' : 'normal'};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.background};
  }
`;

const Logo = styled.div<{ theme: any }>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.large};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: ${({ theme }) => theme.animation.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const ThemeDropdown = styled.select<{ theme: any }>`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.animation.transition};
  outline: none;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.accent}20;
  }
`;

const Header: React.FC = () => {
  const { currentTheme, themeType, setTheme } = useTheme();
  const location = useLocation();

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value as ThemeType);
  };

  return (
    <HeaderContainer theme={currentTheme}>
      <Logo theme={currentTheme}>
        🎨 Theme Switcher
      </Logo>
      <NavContainer theme={currentTheme}>
        <NavLink 
          to="/" 
          theme={currentTheme} 
          $active={location.pathname === '/'}
        >
          Home
        </NavLink>
        <NavLink 
          to="/about" 
          theme={currentTheme} 
          $active={location.pathname === '/about'}
        >
          About
        </NavLink>
        <NavLink 
          to="/contact" 
          theme={currentTheme} 
          $active={location.pathname === '/contact'}
        >
          Contact
        </NavLink>
        <ThemeDropdown 
          theme={currentTheme} 
          value={themeType} 
          onChange={handleThemeChange}
        >
          <option value="theme1">Theme 1 - Minimalist</option>
          <option value="theme2">Theme 2 - Dark Serif</option>
          <option value="theme3">Theme 3 - Colorful Playful</option>
        </ThemeDropdown>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header; 