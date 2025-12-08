import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { useTheme } from '../../context/theme';

const RippleEffect = () => {
  const { isRippling, rippleColor, ripplePosition } = useTheme();
  const [ripples, setRipples] = useState([]);
  const rippleIdRef = useRef(0);

  useEffect(() => {
    console.log('RippleEffect: Effect triggered', { isRippling, rippleColor, ripplePosition });
    if (isRippling && rippleColor) {
      console.log('RippleEffect: Creating new ripple', { x: ripplePosition.x, y: ripplePosition.y, color: rippleColor });
      const newRipple = {
        id: rippleIdRef.current++,
        x: ripplePosition.x,
        y: ripplePosition.y,
        color: rippleColor,
      };
      
      setRipples((prev) => {
        console.log('RippleEffect: Adding ripple, total ripples:', prev.length + 1);
        return [...prev, newRipple];
      });

      // Remove ripple after animation completes (7 seconds + buffer)
      const timer = setTimeout(() => {
        setRipples((prev) => {
          const filtered = prev.filter((r) => r.id !== newRipple.id);
          console.log('RippleEffect: Removing ripple, remaining:', filtered.length);
          return filtered;
        });
      }, 7500);

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

// Pure CSS keyframes animation - no JS updates during animation
const rippleExpand = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0.8;
  }
  10% {
    opacity: 0.9;
  }
  30% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.5;
  }
  70% {
    opacity: 0.3;
  }
  85% {
    opacity: 0.15;
  }
  100% {
    transform: translate(-50%, -50%) scale(20);
    opacity: 0;
  }
`;

const RippleCircle = styled.div`
  position: absolute;
  left: ${props => props.$x}px;
  top: ${props => props.$y}px;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  pointer-events: none;
  
  /* GPU acceleration hints */
  will-change: transform, opacity;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translate(-50%, -50%) scale(0);
  
  /* Radial gradient for smooth color spread */
  background: radial-gradient(
    circle,
    ${props => props.$color}80 0%,
    ${props => props.$color}60 15%,
    ${props => props.$color}40 30%,
    ${props => props.$color}25 50%,
    ${props => props.$color}15 70%,
    transparent 85%
  );
  
  /* Reduced blur for better performance while still looking smooth */
  filter: blur(60px);
  
  /* Blend mode for nice color mixing */
  mix-blend-mode: screen;
  
  /* Pure CSS animation - 7 seconds, smooth easing */
  animation: ${rippleExpand} 7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
`;

export default RippleEffect;