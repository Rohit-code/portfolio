import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { useTheme } from '../../context/theme';

const RippleEffect = () => {
  const { isRippling, rippleColor, ripplePosition } = useTheme();
  const [ripples, setRipples] = useState([]);
  const rippleIdRef = useRef(0);

  useEffect(() => {
    if (isRippling && rippleColor) {
      const newRipple = {
        id: rippleIdRef.current++,
        x: ripplePosition.x,
        y: ripplePosition.y,
        color: rippleColor,
      };
      
      setRipples((prev) => [...prev, newRipple]);

      // Remove ripple after animation completes
      const timer = setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 5500);

      return () => clearTimeout(timer);
    }
  }, [isRippling, rippleColor, ripplePosition]);

  return (
    <RippleContainer>
      {ripples.map((ripple) => (
        <RippleCircle
          key={ripple.id}
          $x={ripple.x}
          $y={ripple.y}
          $color={ripple.color}
        />
      ))}
    </RippleContainer>
  );
};

const RippleContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 9998;
  overflow: hidden;
`;

const rippleExpand = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0.6;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
  }
`;

const RippleCircle = styled.div`
  position: absolute;
  left: ${props => props.$x}px;
  top: ${props => props.$y}px;
  width: 300vmax;
  height: 300vmax;
  border-radius: 50%;
  pointer-events: none;
  
  /* GPU acceleration */
  will-change: transform, opacity;
  transform: translate(-50%, -50%) scale(0);
  
  /* Simple radial gradient - NO blur filter */
  background: radial-gradient(
    circle,
    ${props => props.$color} 0%,
    ${props => props.$color}90 20%,
    ${props => props.$color}50 40%,
    ${props => props.$color}20 60%,
    transparent 70%
  );
  
  /* Pure CSS animation - 5 seconds, optimized */
  animation: ${rippleExpand} 5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
`;

export default RippleEffect;