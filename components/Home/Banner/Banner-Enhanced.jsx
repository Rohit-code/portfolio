import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

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
        <ContentInner>
          <Overline
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <OverlineDot />
            <OverlineText>Software Development Studio</OverlineText>
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
        </ContentInner>
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
          $top="25%"
          $right="8%"
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <BadgeIcon>⚡</BadgeIcon>
          <span>Fast Delivery</span>
        </FloatingBadge>
        
        <FloatingBadge
          $bottom="30%"
          $left="5%"
          animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
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
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-height: 100dvh;
  pointer-events: none;
  
  a, button {
    pointer-events: auto;
  }
  
  @media (min-width: 768px) {
    padding: 0 48px;
  }
  
  @media (min-width: 1024px) {
    padding: 0 64px;
  }
`;

/* New wrapper to handle spacing properly */
const ContentInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  padding-top: 100px; /* Space for fixed navbar */
  padding-bottom: 60px;
  
  @media (min-width: 768px) {
    padding-top: 120px;
    padding-bottom: 80px;
  }
`;

const Overline = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px 8px 12px;
  background: ${({ theme }) => theme.surface.default};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 100px;
  margin-bottom: 24px;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  
  @media (min-width: 480px) {
    flex-wrap: nowrap;
    margin-bottom: 32px;
  }
`;

const OverlineDot = styled.span`
  width: 8px;
  height: 8px;
  min-width: 8px;
  background: ${({ theme }) => theme.aurora.emerald};
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
  
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.2); }
  }
`;

const OverlineText = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text.secondary};
  white-space: nowrap;
  
  @media (min-width: 480px) {
    font-size: 0.8125rem;
  }
`;

const OverlineBadge = styled.span`
  padding: 4px 10px;
  background: ${({ theme }) => theme.primaryMuted};
  border-radius: 100px;
  font-size: 0.625rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
  
  @media (min-width: 480px) {
    font-size: 0.6875rem;
  }
`;

const HeroTitle = styled.h1`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0 12px;
  font-family: 'Satoshi', sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 20px;
  perspective: 1000px;
  
  @media (min-width: 480px) {
    font-size: 3.5rem;
    gap: 0 16px;
    margin-bottom: 24px;
  }
  
  @media (min-width: 768px) {
    font-size: 5rem;
    gap: 0 20px;
    margin-bottom: 32px;
  }
  
  @media (min-width: 1024px) {
    font-size: 6rem;
    gap: 0 24px;
  }
  
  @media (min-width: 1280px) {
    font-size: 7rem;
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
  font-size: 0.9375rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.text.secondary};
  max-width: 650px;
  margin-bottom: 32px;
  padding: 0 8px;
  
  @media (min-width: 480px) {
    font-size: 1rem;
    margin-bottom: 40px;
  }
  
  @media (min-width: 768px) {
    font-size: 1.125rem;
    margin-bottom: 48px;
    padding: 0;
  }
  
  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
`;

const HighlightText = styled.span`
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
`;

const HeroCTA = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 48px;
  width: 100%;
  max-width: 400px;
  
  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: center;
    gap: 16px;
    max-width: none;
    width: auto;
  }
  
  @media (min-width: 768px) {
    margin-bottom: 64px;
  }
`;

const PrimaryButton = styled(motion.a)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  background: ${({ theme }) => theme.gradient.buttonPrimary};
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  box-shadow: 0 8px 32px rgba(139, 92, 246, 0.3);
  width: 100%;
  
  @media (min-width: 480px) {
    width: auto;
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
  justify-content: center;
  gap: 10px;
  padding: 16px 32px;
  background: ${({ theme }) => theme.surface.default};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text.primary};
  text-decoration: none;
  transition: all 0.3s ease;
  width: 100%;
  
  &:hover {
    background: ${({ theme }) => theme.surface.hover};
    border-color: ${({ theme }) => theme.borderStrong};
  }
  
  @media (min-width: 480px) {
    width: auto;
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
  gap: 24px;
  margin-bottom: 32px;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (min-width: 480px) {
    gap: 32px;
    margin-bottom: 40px;
  }
  
  @media (min-width: 768px) {
    gap: 48px;
    margin-bottom: 48px;
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
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text.primary};
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const StatLabel = styled.div`
  font-size: 0.6875rem;
  color: ${({ theme }) => theme.text.tertiary};
  
  @media (min-width: 768px) {
    font-size: 0.75rem;
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
  gap: 20px;
  opacity: 0.5;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (min-width: 768px) {
    gap: 32px;
  }
`;

const TrustedLogo = styled.span`
  font-family: 'Satoshi', sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text.tertiary};
  letter-spacing: -0.02em;
  
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  z-index: 10;
  
  @media (min-width: 768px) {
    bottom: 40px;
  }
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
  z-index: 5;
`;

const FloatingBadge = styled(motion.div)`
  position: absolute;
  top: ${({ $top }) => $top || 'auto'};
  right: ${({ $right }) => $right || 'auto'};
  bottom: ${({ $bottom }) => $bottom || 'auto'};
  left: ${({ $left }) => $left || 'auto'};
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 18px;
  background: ${({ theme }) => theme.glass.background};
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  border: 1px solid ${({ theme }) => theme.glass.border};
  border-radius: 100px;
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text.secondary};
  
  @media (max-width: 768px) {
    padding: 10px 14px;
    font-size: 0.75rem;
    gap: 6px;
  }
  
  @media (max-width: 480px) {
    display: none;
  }
`;

const BadgeIcon = styled.span`
  font-size: 1rem;
`;

export default Banner;