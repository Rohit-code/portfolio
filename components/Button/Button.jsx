import React from 'react';
import { StyledButton } from './styles';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  as = 'button',
  href,
  ...props 
}) => {
  return (
    <StyledButton 
      as={as}
      href={href}
      $variant={variant}
      $size={size}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

