import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../context/theme';

const RippleEffect = () => {
  const { isRippling, rippleColor, ripplePosition, rippleRadius } = useTheme();
  
  if (!isRippling || rippleRadius <= 0) return null;
  
  return (
    <RippleContainer>
      {/* Main wave ring - just a border, no fill */}
      <WaveRing
        $x={ripplePosition.x}
        $y={ripplePosition.y}
        $radius={rippleRadius}
        $color={rippleColor}
      />
      
      {/* Outer glow ring */}
      <GlowRing
        $x={ripplePosition.x}
        $y={ripplePosition.y}
        $radius={rippleRadius}
        $color={rippleColor}
      />
      
      {/* Inner subtle ring */}
      <InnerRing
        $x={ripplePosition.x}
        $y={ripplePosition.y}
        $radius={rippleRadius}
        $color={rippleColor}
      />
    </RippleContainer>
  );
};

const RippleContainer = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9998;
  overflow: hidden;
`;

// Main visible wave - just a ring, transparent inside
const WaveRing = styled.div.attrs(props => ({
  style: {
    left: `${props.$x}px`,
    top: `${props.$y}px`,
    width: `${props.$radius * 2}px`,
    height: `${props.$radius * 2}px`,
    borderColor: props.$color,
    boxShadow: `
      0 0 30px 5px ${props.$color}50,
      0 0 60px 10px ${props.$color}30,
      0 0 100px 20px ${props.$color}15
    `,
  },
}))`
  position: absolute;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  border: 4px solid;
  background: transparent;
  will-change: width, height;
`;

// Outer soft glow
const GlowRing = styled.div.attrs(props => ({
  style: {
    left: `${props.$x}px`,
    top: `${props.$y}px`,
    width: `${props.$radius * 2 + 60}px`,
    height: `${props.$radius * 2 + 60}px`,
    borderColor: `${props.$color}20`,
  },
}))`
  position: absolute;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  border: 30px solid;
  background: transparent;
  filter: blur(20px);
  will-change: width, height;
`;

// Inner ring for depth
const InnerRing = styled.div.attrs(props => ({
  style: {
    left: `${props.$x}px`,
    top: `${props.$y}px`,
    width: `${Math.max(0, props.$radius * 2 - 20)}px`,
    height: `${Math.max(0, props.$radius * 2 - 20)}px`,
    borderColor: `${props.$color}40`,
  },
}))`
  position: absolute;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid;
  background: transparent;
  will-change: width, height;
`;

export default RippleEffect;