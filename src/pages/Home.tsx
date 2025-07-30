import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import Card from '../components/Card';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const HomeContainer = styled.div<{ theme: any }>`
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

const PageDescription = styled.p<{ theme: any }>`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ProductGrid = styled.div<{ theme: any }>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const LoadingSpinner = styled.div<{ theme: any }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.large};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ErrorMessage = styled.div<{ theme: any }>`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  color: ${({ theme }) => theme.colors.accent};
`;

const Home: React.FC = () => {
  const { currentTheme } = useTheme();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <HomeContainer theme={currentTheme}>
        <ContentWrapper theme={currentTheme}>
          <LoadingSpinner theme={currentTheme}>
            Loading products...
          </LoadingSpinner>
        </ContentWrapper>
      </HomeContainer>
    );
  }

  if (error) {
    return (
      <HomeContainer theme={currentTheme}>
        <ContentWrapper theme={currentTheme}>
          <ErrorMessage theme={currentTheme}>
            Error: {error}
          </ErrorMessage>
        </ContentWrapper>
      </HomeContainer>
    );
  }

  return (
    <HomeContainer theme={currentTheme}>
      <ContentWrapper theme={currentTheme}>
        <PageTitle theme={currentTheme}>
          Welcome to Our Store
        </PageTitle>
        <PageDescription theme={currentTheme}>
          Discover amazing products with our beautiful theme switcher. 
          Each theme offers a unique experience with different colors, fonts, and layouts.
        </PageDescription>
        <ProductGrid theme={currentTheme}>
          {products.map((product) => (
            <Card key={product.id} product={product} theme={currentTheme} />
          ))}
        </ProductGrid>
      </ContentWrapper>
    </HomeContainer>
  );
};

export default Home; 