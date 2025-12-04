import styled, { css } from 'styled-components';

const sizeStyles = {
  sm: css`
    padding: 10px 20px;
    font-size: 0.875rem;
  `,
  md: css`
    padding: 14px 28px;
    font-size: 1rem;
  `,
  lg: css`
    padding: 18px 36px;
    font-size: 1.125rem;
  `,
};

const variantStyles = {
  primary: css`
    background: ${({ theme }) => theme.colors.emerald};
    color: ${({ theme }) => theme.white};
    border: 2px solid ${({ theme }) => theme.colors.emerald};
    
    &:hover {
      background: ${({ theme }) => theme.colors.emeraldDark};
      border-color: ${({ theme }) => theme.colors.emeraldDark};
      box-shadow: 0 12px 40px rgba(16, 185, 129, 0.3);
    }
  `,
  secondary: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.emerald};
    border: 2px solid ${({ theme }) => theme.colors.emerald};
    
    &:hover {
      background: ${({ theme }) => theme.colors.emerald}10;
      border-color: ${({ theme }) => theme.colors.emeraldLight};
    }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.text};
    border: 2px solid ${({ theme }) => theme.border};
    
    &:hover {
      border-color: ${({ theme }) => theme.colors.emerald};
      background: ${({ theme }) => theme.surface};
    }
  `,
};

export const StyledButton = styled.button`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  letter-spacing: 0.01em;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  white-space: nowrap;
  
  ${({ $size }) => sizeStyles[$size] || sizeStyles.md};
  ${({ $variant }) => variantStyles[$variant] || variantStyles.primary};
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.emerald};
    outline-offset: 4px;
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

