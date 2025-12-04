import styled, { css, keyframes } from 'styled-components';

const pulseGlow = keyframes`
  0%, 100% {
    opacity: 0.7;
    transform: scale(1);
  }
  50% {
    opacity: 0.9;
    transform: scale(1.1);
  }
`;

export const StyledCursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  margin: -16px 0 0 -16px;
  border-radius: 100%;
  transform: translate3d(-100%, -100%, 0);
  transition: width 0.2s ease,
              height 0.2s ease;
  will-change: transform;
  pointer-events: none;
  z-index: ${({ theme }) => theme.zIndex.cursor};
  background: ${({ theme }) => theme.colors.emerald};
  mix-blend-mode: screen;
  
  &::before {
    content: '';
    position: absolute;
    inset: -8px;
    background: radial-gradient(circle, rgba(16, 185, 129, 0.4), transparent 70%);
    filter: blur(12px);
    animation: ${pulseGlow} 3s ease-in-out infinite;
  }
  
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    &::before {
      animation: none;
    }
  }

  ${({ color }) => {
    // overrides default theme color
    return (
      color &&
      css`
        background: ${color};
        box-shadow: 
          0 0 20px ${color}80,
          0 0 40px ${color}50,
          0 0 60px ${color}30;
      `
    );
  }};

  ${({ $bordered, color, theme }) => {
    // create a bordered style when hovering elements
    return (
      $bordered &&
      css`
        width: 56px;
        height: 56px;
        margin: -28px 0 0 -28px;
        background: transparent;
        border: 2px solid ${color || theme.colors.emerald};
        
        &::before {
          inset: -16px;
          background: radial-gradient(circle, ${color || theme.colors.emerald}40, transparent 70%);
          filter: blur(16px);
        }
      `
    );
  }};

  @media (hover: none) and (pointer: coarse) {
    display: none;
  }
`;
