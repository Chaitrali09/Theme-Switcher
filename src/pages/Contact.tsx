import React, { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const ContactContainer = styled.div<{ theme: any }>`
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

const ContactForm = styled.form<{ theme: any }>`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.layout.boxShadow};
  border: 1px solid ${({ theme }) => theme.colors.border};
  max-width: 600px;
  margin: 0 auto;
`;

const FormGroup = styled.div<{ theme: any }>`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Label = styled.label<{ theme: any }>`
  display: block;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-weight: bold;
`;

const Input = styled.input<{ theme: any }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  transition: ${({ theme }) => theme.animation.transition};
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.accent}20;
  }
`;

const TextArea = styled.textarea<{ theme: any }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  transition: ${({ theme }) => theme.animation.transition};
  outline: none;
  resize: vertical;
  min-height: 120px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.accent}20;
  }
`;

const SubmitButton = styled.button<{ theme: any }>`
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.surface};
  border: none;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  font-weight: bold;
  cursor: pointer;
  transition: ${({ theme }) => theme.animation.transition};
  width: 100%;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled.div<{ theme: any }>`
  background: #4caf50;
  color: white;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ContactInfo = styled.div<{ theme: any }>`
  margin-top: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Contact: React.FC = () => {
  const { currentTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <ContactContainer theme={currentTheme}>
      <ContentWrapper theme={currentTheme}>
        <PageTitle theme={currentTheme}>
          Contact Us
        </PageTitle>
        
        <ContactForm theme={currentTheme} onSubmit={handleSubmit}>
          {submitted && (
            <SuccessMessage theme={currentTheme}>
              Thank you for your message! We'll get back to you soon.
            </SuccessMessage>
          )}
          
          <FormGroup theme={currentTheme}>
            <Label theme={currentTheme} htmlFor="name">Name</Label>
            <Input
              theme={currentTheme}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup theme={currentTheme}>
            <Label theme={currentTheme} htmlFor="email">Email</Label>
            <Input
              theme={currentTheme}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup theme={currentTheme}>
            <Label theme={currentTheme} htmlFor="subject">Subject</Label>
            <Input
              theme={currentTheme}
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup theme={currentTheme}>
            <Label theme={currentTheme} htmlFor="message">Message</Label>
            <TextArea
              theme={currentTheme}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <SubmitButton 
            theme={currentTheme} 
            type="submit"
            disabled={submitted}
          >
            {submitted ? 'Message Sent!' : 'Send Message'}
          </SubmitButton>
        </ContactForm>

        <ContactInfo theme={currentTheme}>
          <p>📧 Email: contact@themeswitcher.com</p>
          <p>📞 Phone: +1 (555) 123-4567</p>
          <p>📍 Address: 123 Theme Street, Design City, DC 12345</p>
        </ContactInfo>
      </ContentWrapper>
    </ContactContainer>
  );
};

export default Contact; 