import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import styled from 'styled-components';
import { useCursorContext } from '../../context/cursor';

const Cursor = () => {
  const { isHovering, cursorType } = useCursorContext();
  const cursorRef = useRef(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);
  
  const ringX = useSpring(mouseX, { damping: 20, stiffness: 300 });
  const ringY = useSpring(mouseY, { damping: 20, stiffness: 300 });
  
  useEffect(() => {
    const updateMousePosition = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      // Show cursor when mouse moves
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '1';
      }
    };
    
    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '1';
      }
    };
    
    const handleMouseLeave = () => {
      // Only hide when mouse actually leaves the viewport
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0';
      }
    };
    
    // Only show cursor on non-touch devices
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      // Show cursor immediately
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '1';
      }
      
      window.addEventListener('mousemove', updateMousePosition);
      document.addEventListener('mouseenter', handleMouseEnter, true);
      document.addEventListener('mouseleave', handleMouseLeave, true);
      
      return () => {
        window.removeEventListener('mousemove', updateMousePosition);
        document.removeEventListener('mouseenter', handleMouseEnter, true);
        document.removeEventListener('mouseleave', handleMouseLeave, true);
      };
    }
  }, [mouseX, mouseY]);
  
  return (
    <CursorContainer ref={cursorRef}>
      {/* Outer ring with glow */}
      <CursorRing
        style={{
          x: ringX,
          y: ringY,
          scale: isHovering ? 1.5 : 1,
        }}
        $isHovering={isHovering}
      />
      
      {/* Inner dot */}
      <CursorDot
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 0.5 : 1,
        }}
        $isHovering={isHovering}
      />
      
      {/* Glow effect */}
      <CursorGlow
        style={{
          x: ringX,
          y: ringY,
        }}
        $isHovering={isHovering}
      />
    </CursorContainer>
  );
};

const CursorContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
  opacity: 1;
  transition: opacity 0.2s ease;
  
  @media (hover: none) and (pointer: coarse) {
    display: none;
  }
`;

const CursorRing = styled(motion.div)`
  position: absolute;
  width: 40px;
  height: 40px;
  border: 1.5px solid ${({ theme }) => theme.primary};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: border-color 0.3s ease;
  ${({ $isHovering, theme }) =>
    $isHovering &&
    `
    border-color: ${theme.primary};
    box-shadow: 0 0 20px ${theme.primary}40;
  `}
`;

const CursorDot = styled(motion.div)`
  position: absolute;
  width: 6px;
  height: 6px;
  background: ${({ theme }) => theme.primary};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: background 0.3s ease;
`;

const CursorGlow = styled(motion.div)`
  position: absolute;
  width: 60px;
  height: 60px;
  background: radial-gradient(circle, ${({ theme }) => theme.primary}30 0%, transparent 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  filter: blur(8px);
  opacity: ${({ $isHovering }) => ($isHovering ? 0.6 : 0.3)};
  transition: opacity 0.3s ease;
`;

export default Cursor;

