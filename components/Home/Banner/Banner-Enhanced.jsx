// Paste the enhanced Banner.jsx code from code.txt here (lines 1454-2004)
// This is the enhanced version with all the new features
// Once pasted, you can replace the current Banner.jsx with this

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

// Dynamic import for Advanced WebGL scene
const AdvancedHeroScene = dynamic(() => import('../../WebGL/AdvancedHeroScene'), { 
  ssr: false,
  loading: () => <SceneLoader />
});

const SceneLoader = () => (
  <LoaderContainer>
    <LoaderOrb />
  </LoaderContainer>
);

const Banner = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  
  const titleWords = ['We', 'craft', 'digital', 'experiences'];
  
  return (
    <HeroSection ref={sectionRef}>
      <AdvancedHeroScene />
      
      <HeroContent style={{ y, opacity, scale }}>
        <Overline
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <OverlineDot />
          <span>Software Development Studio</span>
          <OverlineBadge>Available for Projects</OverlineBadge>
        </Overline>
        
        <HeroTitle>
          {titleWords.map((word, i) => (
            <TitleWord
              key={i}
              initial={{ opacity: 0, y: 60, rotateX: -40 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word === 'digital' ? <GradientWord>{word}</GradientWord> : word}
            </TitleWord>
          ))}
        </HeroTitle>
        
        <HeroDescription
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          We build premium web applications, mobile apps, AI solutions, and 
          <HighlightText> data scraping systems</HighlightText> that transform 
          businesses and delight users worldwide.
        </HeroDescription>
        
        <HeroCTA
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <PrimaryButton
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
          >
            <ButtonContent>
              <span>Start a Project</span>
              <ButtonArrow>→</ButtonArrow>
            </ButtonContent>
            <ButtonGlow />
            <ButtonShine />
          </PrimaryButton>
          
          <SecondaryButton
            href="#work"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
          >
            <span>View Our Work</span>
            <PlayIcon>▶</PlayIcon>
          </SecondaryButton>
        </HeroCTA>
        
        <HeroStats
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {[
            { value: '150+', label: 'Projects', icon: '🚀' },
            { value: '50+', label: 'Clients', icon: '🤝' },
            { value: '98%', label: 'Satisfaction', icon: '⭐' },
            { value: '24/7', label: 'Support', icon: '💬' },
          ].map((stat, i) => (
            <StatItem key={i}>
              <StatIcon>{stat.icon}</StatIcon>
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{stat.label}</StatLabel>
            </StatItem>
          ))}
        </HeroStats>
        
        <TrustedBy
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <TrustedLabel>Trusted by teams at</TrustedLabel>
          <TrustedLogos>
            {['TechFlow', 'StartupHub', 'DataInsights', 'ServicePro'].map((name, i) => (
              <TrustedLogo key={i}>{name}</TrustedLogo>
            ))}
          </TrustedLogos>
        </TrustedBy>
      </HeroContent>
      
      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <ScrollMouse>
          <ScrollWheel
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </ScrollMouse>
        <ScrollText>Scroll to explore</ScrollText>
      </ScrollIndicator>
      
      <FloatingElements>
        <FloatingBadge
          style={{ top: '20%', right: '10%' }}
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          whileTap={{ scale: 0.95 }}
        >
          <BadgeIcon>⚡</BadgeIcon>
          <span>Fast Delivery</span>
        </FloatingBadge>
        
        <FloatingBadge
          style={{ bottom: '30%', left: '5%' }}
          animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          whileTap={{ scale: 0.95 }}
        >
          <BadgeIcon>🔒</BadgeIcon>
          <span>Secure</span>
        </FloatingBadge>
      </FloatingElements>
    </HeroSection>
  );
};

const LoaderContainer = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.background};
`;

const LoaderOrb = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${({ theme }) => theme.gradient.buttonPrimary};
  animation: pulse 1.5s ease-in-out infinite;
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.8; }
    50% { transform: scale(1.1); opacity: 1; }
  }
`;

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${({ theme }) => theme.background};
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.gradient.heroMesh};
    pointer-events: none;
    z-index: 1;
  }
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 10;
  max-width: 1200px;
  width: 100%;
  padding: 0 clamp(16px, 5vw, 64px);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 72px);
  pointer-events: none; /* Allow clicks to pass through to WebGL scene */
  
  /* Re-enable pointer events for interactive children */
  a, button {
    pointer-events: auto;
  }
  
  @media (max-width: 768px) {
    min-height: calc(100vh - 64px);
  }
  
  @media (max-width: 375px) {
    padding: 0 16px;
    min-height: calc(100vh - 64px);
  }
`;

const Overline = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: clamp(6px, 1.5vw, 10px);
  padding: clamp(6px, 1vw, 8px) clamp(12px, 2vw, 16px) clamp(6px, 1vw, 8px) clamp(10px, 1.5vw, 12px);
  background: ${({ theme }) => theme.surface.default};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 100px;
  font-size: clamp(0.75rem, 1.5vw, 0.8125rem);
  font-weight: 500;
  color: ${({ theme }) => theme.text.secondary};
  margin-bottom: clamp(20px, 4vw, 32px);
  flex-wrap: wrap;
  justify-content: center;
  
  @media (max-width: 375px) {
    font-size: 0.6875rem;
    padding: 6px 10px 6px 8px;
    margin-bottom: 20px;
  }
`;

const OverlineDot = styled.span`
  width: 8px;
  height: 8px;
  background: ${({ theme }) => theme.aurora.emerald};
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
  
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.2); }
  }
`;

const OverlineBadge = styled.span`
  padding: 4px 10px;
  background: ${({ theme }) => theme.primaryMuted};
  border-radius: 100px;
  font-size: 0.6875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const HeroTitle = styled.h1`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0 clamp(8px, 3vw, 24px);
  font-family: 'Satoshi', sans-serif;
  font-size: clamp(2rem, 8vw, 7rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: clamp(20px, 4vw, 32px);
  perspective: 1000px;
  
  @media (max-width: 375px) {
    font-size: clamp(1.75rem, 7vw, 2.5rem);
    gap: 0 8px;
    margin-bottom: 20px;
  }
`;

const TitleWord = styled(motion.span)`
  display: inline-block;
  transform-style: preserve-3d;
`;

const GradientWord = styled.span`
  background: ${({ theme }) => theme.gradient.textAccent};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const HeroDescription = styled(motion.p)`
  font-size: clamp(0.875rem, 2vw, 1.25rem);
  line-height: 1.7;
  color: ${({ theme }) => theme.text.secondary};
  max-width: 650px;
  margin-bottom: clamp(32px, 6vw, 48px);
  padding: 0 clamp(8px, 2vw, 0);
  
  @media (max-width: 375px) {
    font-size: 0.875rem;
    line-height: 1.6;
    margin-bottom: 32px;
  }
`;

const HighlightText = styled.span`
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
`;

const HeroCTA = styled(motion.div)`
  display: flex;
  gap: clamp(12px, 2vw, 16px);
  margin-bottom: clamp(40px, 8vw, 64px);
  width: 100%;
  max-width: 500px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    max-width: 100%;
    gap: 12px;
  }
  
  @media (max-width: 375px) {
    margin-bottom: 40px;
  }
`;

const PrimaryButton = styled(motion.a)`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: clamp(14px, 2.5vw, 18px) clamp(28px, 4.5vw, 36px);
  background: ${({ theme }) => theme.gradient.buttonPrimary};
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  box-shadow: 0 8px 32px rgba(139, 92, 246, 0.3);
  font-size: clamp(0.875rem, 1.8vw, 1rem);
  
  @media (max-width: 400px) {
    width: 100%;
    justify-content: center;
  }
`;

const ButtonContent = styled.span`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
`;

const ButtonArrow = styled.span`
  display: inline-block;
  transition: transform 0.3s ease;
  
  ${PrimaryButton}:hover & {
    transform: translateX(4px);
  }
`;

const ButtonGlow = styled.div`
  position: absolute;
  inset: 0;
  background: ${({ theme }) => theme.gradient.buttonHover};
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${PrimaryButton}:hover & {
    opacity: 1;
  }
`;

const ButtonShine = styled.div`
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s ease;
  
  ${PrimaryButton}:hover & {
    left: 100%;
  }
`;

const SecondaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: clamp(8px, 1.5vw, 10px);
  padding: clamp(14px, 2.5vw, 18px) clamp(28px, 4.5vw, 36px);
  background: ${({ theme }) => theme.surface.default};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px;
  font-size: clamp(0.875rem, 1.8vw, 1rem);
  font-weight: 600;
  color: ${({ theme }) => theme.text.primary};
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.surface.hover};
    border-color: ${({ theme }) => theme.borderStrong};
  }
  
  @media (max-width: 400px) {
    width: 100%;
    justify-content: center;
  }
`;

const PlayIcon = styled.span`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.primaryMuted};
  border-radius: 50%;
  font-size: 0.625rem;
  color: ${({ theme }) => theme.primary};
`;

const HeroStats = styled(motion.div)`
  display: flex;
  gap: clamp(16px, 4vw, 48px);
  margin-bottom: clamp(24px, 5vw, 48px);
  flex-wrap: wrap;
  justify-content: center;
  
  @media (max-width: 700px) {
    gap: 20px;
  }
  
  @media (max-width: 375px) {
    gap: 12px;
    margin-bottom: 24px;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatIcon = styled.div`
  font-size: 1.25rem;
  margin-bottom: 4px;
`;

const StatValue = styled.div`
  font-family: 'Satoshi', sans-serif;
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  font-weight: 700;
  color: ${({ theme }) => theme.text.primary};
  
  @media (max-width: 375px) {
    font-size: 1rem;
  }
`;

const StatLabel = styled.div`
  font-size: clamp(0.625rem, 1.2vw, 0.75rem);
  color: ${({ theme }) => theme.text.tertiary};
  
  @media (max-width: 375px) {
    font-size: 0.625rem;
  }
`;

const TrustedBy = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const TrustedLabel = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text.muted};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const TrustedLogos = styled.div`
  display: flex;
  gap: clamp(16px, 4vw, 32px);
  opacity: 0.5;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (max-width: 600px) {
    gap: 20px;
  }
  
  @media (max-width: 400px) {
    gap: 16px;
  }
`;

const TrustedLogo = styled.span`
  font-family: 'Satoshi', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text.tertiary};
  letter-spacing: -0.02em;
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const ScrollMouse = styled.div`
  width: 26px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 13px;
  display: flex;
  justify-content: center;
  padding-top: 8px;
`;

const ScrollWheel = styled(motion.div)`
  width: 4px;
  height: 8px;
  background: ${({ theme }) => theme.primary};
  border-radius: 2px;
`;

const ScrollText = styled.span`
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text.tertiary};
`;

const FloatingElements = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
`;

const FloatingBadge = styled(motion.div)`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 18px;
  background: ${({ theme }) => theme.glass.background};
  backdrop-filter: blur(12px);
  border: 1px solid ${({ theme }) => theme.glass.border};
  border-radius: 100px;
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text.secondary};
  
  @media (max-width: 600px) {
    padding: 10px 14px;
    font-size: 0.75rem;
    gap: 6px;
    
    &:first-child {
      top: 15% !important;
      right: 5% !important;
    }
    
    &:last-child {
      bottom: 25% !important;
      left: 5% !important;
    }
  }
`;

const BadgeIcon = styled.span`
  font-size: 1rem;
`;

export default Banner;