import React from 'react';
import styled from 'styled-components';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface CardProps {
  product: Product;
  theme: any;
}

const CardContainer = styled.div<{ theme: any }>`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.layout.boxShadow};
  transition: ${({ theme }) => theme.animation.transition};
  cursor: pointer;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const ProductImage = styled.img<{ theme: any }>`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ProductTitle = styled.h3<{ theme: any }>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.large};
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
  font-weight: bold;
`;

const ProductPrice = styled.div<{ theme: any }>`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  color: ${({ theme }) => theme.colors.accent};
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ProductCategory = styled.span<{ theme: any }>`
  display: inline-block;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ProductDescription = styled.p<{ theme: any }>`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.5;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Card: React.FC<CardProps> = ({ product, theme }) => {
  return (
    <CardContainer theme={theme}>
      <ProductImage src={product.image} alt={product.title} theme={theme} />
      <ProductCategory theme={theme}>{product.category}</ProductCategory>
      <ProductTitle theme={theme}>{product.title}</ProductTitle>
      <ProductPrice theme={theme}>${product.price}</ProductPrice>
      <ProductDescription theme={theme}>{product.description}</ProductDescription>
    </CardContainer>
  );
};

export default Card; 