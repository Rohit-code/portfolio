import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BannerSection = styled.section`
  position: relative;
  height: 100vh;
  height: 100dvh; /* Dynamic viewport height for mobile */
  width: 100%;
  margin-bottom: 128px; /* Consistent 16-unit spacing */
  background: ${({ theme }) => theme.background};

  & canvas {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 10;
    cursor: none;
  }

  ${({ theme }) => theme.breakpoints.tablet`
    margin-bottom: 96px;
  `};
`;

export const VideoContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 1;

  & video {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const BannerTitle = styled(motion.h1)`
  position: absolute;
  bottom: -60px;
  left: -20px;
  font-size: 10rem;
  pointer-events: none;
  line-height: 0.9;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: ${({ theme }) => theme.colors.emeraldLight};
  letter-spacing: -0.02em;
  font-weight: 900;
  filter: drop-shadow(0 4px 16px rgba(0, 0, 0, 0.6));
  z-index: 20;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  animation: floatWater 12s ease-in-out infinite;
  
  @keyframes floatWater {
    0%, 100% {
      transform: translate3d(0, 0, 0) rotate(0deg);
    }
    25% {
      transform: translate3d(15px, -25px, 0) rotate(0.5deg);
    }
    50% {
      transform: translate3d(-10px, -15px, 0) rotate(-0.3deg);
    }
    75% {
      transform: translate3d(20px, -30px, 0) rotate(0.4deg);
    }
  }

  & span {
    display: block;
    will-change: transform;
    
    &:nth-child(1) {
      animation: floatSpan1 10s ease-in-out infinite;
    }
    
    &:nth-child(2) {
      animation: floatSpan2 11s ease-in-out infinite;
      animation-delay: 0.5s;
    }
  }
  
  @keyframes floatSpan1 {
    0%, 100% {
      transform: translate3d(0, 0, 0);
    }
    50% {
      transform: translate3d(-8px, -12px, 0);
    }
  }
  
  @keyframes floatSpan2 {
    0%, 100% {
      transform: translate3d(0, 0, 0);
    }
    50% {
      transform: translate3d(10px, -18px, 0);
    }
  }
  
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    
    & span {
      animation: none;
    }
  }

  ${({ theme }) => theme.breakpoints.small`
    left: -10px;
    bottom: -50px;
    font-size: 7rem;
    line-height: 0.9;
  `};

  ${({ theme }) => theme.breakpoints.tablet`
    left: -6px;
    bottom: -30px;
    max-width: calc(100% + 6px);
    font-size: 5rem;
    line-height: 0.9;
    overflow: hidden;
  `};
`;
