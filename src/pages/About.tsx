import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const AboutContainer = styled.div<{ theme: any }>`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  padding-top: 90px;
  transition: ${({ theme }) => theme.animation.transition};
`;

const ContentWrapper = styled.div<{ theme: any }>`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const PageTitle = styled.h1<{ theme: any }>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.xlarge};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-weight: bold;
`;

const AboutSection = styled.section<{ theme: any }>`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.layout.boxShadow};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const SectionTitle = styled.h2<{ theme: any }>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.large};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: bold;
`;

const SectionText = styled.p<{ theme: any }>`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FeatureList = styled.ul<{ theme: any }>`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  padding-left: ${({ theme }) => theme.spacing.lg};
`;

const FeatureItem = styled.li<{ theme: any }>`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const HighlightText = styled.span<{ theme: any }>`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: bold;
`;

const About: React.FC = () => {
  const { currentTheme } = useTheme();

  return (
    <AboutContainer theme={currentTheme}>
      <ContentWrapper theme={currentTheme}>
        <PageTitle theme={currentTheme}>
          About Our Theme Switcher
        </PageTitle>
        
        <AboutSection theme={currentTheme}>
          <SectionTitle theme={currentTheme}>
            What We Do
          </SectionTitle>
          <SectionText theme={currentTheme}>
            Our Multi-Theme Switcher App demonstrates the power of dynamic theming in modern web applications. 
            We've created three distinct themes that showcase different design philosophies and user experiences.
          </SectionText>
        </AboutSection>

        <AboutSection theme={currentTheme}>
          <SectionTitle theme={currentTheme}>
            Our Themes
          </SectionTitle>
          <SectionText theme={currentTheme}>
            Each theme offers a unique experience:
          </SectionText>
          <FeatureList theme={currentTheme}>
            <FeatureItem theme={currentTheme}>
              <HighlightText theme={currentTheme}>Theme 1 - Minimalist:</HighlightText> Clean, simple design with light colors and sans-serif fonts
            </FeatureItem>
            <FeatureItem theme={currentTheme}>
              <HighlightText theme={currentTheme}>Theme 2 - Dark Serif:</HighlightText> Elegant dark mode with sophisticated serif typography
            </FeatureItem>
            <FeatureItem theme={currentTheme}>
              <HighlightText theme={currentTheme}>Theme 3 - Colorful Playful:</HighlightText> Vibrant colors with playful fonts and dynamic layouts
            </FeatureItem>
          </FeatureList>
        </AboutSection>

        <AboutSection theme={currentTheme}>
          <SectionTitle theme={currentTheme}>
            Technology Stack
          </SectionTitle>
          <SectionText theme={currentTheme}>
            Built with modern web technologies including React, TypeScript, Styled Components, and React Router. 
            The app features responsive design, theme persistence, and smooth animations.
          </SectionText>
        </AboutSection>

        <AboutSection theme={currentTheme}>
          <SectionTitle theme={currentTheme}>
            Features
          </SectionTitle>
          <FeatureList theme={currentTheme}>
            <FeatureItem theme={currentTheme}>🎨 Three distinct themes with different layouts and typography</FeatureItem>
            <FeatureItem theme={currentTheme}>💾 Theme persistence across page reloads</FeatureItem>
            <FeatureItem theme={currentTheme}>📱 Fully responsive design for all devices</FeatureItem>
            <FeatureItem theme={currentTheme}>⚡ Smooth animations and transitions</FeatureItem>
            <FeatureItem theme={currentTheme}>🛒 Product data from external API</FeatureItem>
            <FeatureItem theme={currentTheme}>🔒 Secure implementation with TypeScript</FeatureItem>
          </FeatureList>
        </AboutSection>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default About; 