import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

const HeroScene = dynamic(() => import('../../WebGL/AdvancedHeroScene'), { ssr: false });

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
      <HeroScene />
      
      <HeroContent style={{ y, opacity, scale }}>
        <Overline
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <OverlineDot />
          <span>Software Development Studio</span>
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
          We build premium web applications, mobile apps, and AI solutions
          that transform businesses and delight users.
        </HeroDescription>
        
        <HeroCTA
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <PrimaryButton
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ButtonContent>
              <span>Start a Project</span>
              <ButtonArrow>→</ButtonArrow>
            </ButtonContent>
            <ButtonGlow />
          </PrimaryButton>
          
          <SecondaryButton
            href="#work"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>View Our Work</span>
          </SecondaryButton>
        </HeroCTA>
        
        <HeroStats
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {[
            { value: '100+', label: 'Projects' },
            { value: '50+', label: 'Clients' },
            { value: '5+', label: 'Years' },
          ].map((stat, i) => (
            <StatItem key={i}>
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{stat.label}</StatLabel>
            </StatItem>
          ))}
        </HeroStats>
      </HeroContent>
      
      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <ScrollLine
          animate={{ scaleY: [0, 1, 0], y: [0, 0, 20] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <ScrollText>Scroll</ScrollText>
      </ScrollIndicator>
    </HeroSection>
  );
};

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
  }
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 10;
  max-width: 1200px;
  width: 100%;
  padding: 0 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 768px) {
    padding: 0 48px;
  }
  
  @media (min-width: 1024px) {
    padding: 0 64px;
  }
`;

const Overline = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: ${({ theme }) => theme.surface.default};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text.secondary};
  margin-bottom: 24px;
  
  @media (min-width: 480px) {
    padding: 8px 16px;
    font-size: 0.8125rem;
    gap: 10px;
    margin-bottom: 32px;
  }
`;

const OverlineDot = styled.span`
  width: 6px;
  height: 6px;
  background: ${({ theme }) => theme.primary};
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
  
  @media (min-width: 480px) {
    width: 8px;
    height: 8px;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.2); }
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
  line-height: 1.1;
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
  line-height: 1.6;
  color: ${({ theme }) => theme.text.secondary};
  max-width: 500px;
  margin-bottom: 32px;
  padding: 0 8px;
  
  @media (min-width: 480px) {
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 40px;
  }
  
  @media (min-width: 768px) {
    font-size: 1.125rem;
    max-width: 600px;
    margin-bottom: 48px;
    padding: 0;
  }
`;

const HeroCTA = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 48px;
  width: 100%;
  max-width: 320px;
  
  @media (min-width: 480px) {
    flex-direction: row;
    gap: 16px;
    max-width: none;
    width: auto;
    margin-bottom: 64px;
  }
  
  @media (min-width: 768px) {
    margin-bottom: 80px;
  }
`;

const PrimaryButton = styled(motion.a)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  background: ${({ theme }) => theme.gradient.buttonPrimary};
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  width: 100%;
  
  @media (min-width: 480px) {
    width: auto;
    padding: 16px 32px;
    border-radius: 14px;
  }
`;

const ButtonContent = styled.span`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  
  @media (min-width: 480px) {
    font-size: 0.9375rem;
  }
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

const SecondaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  background: ${({ theme }) => theme.surface.default};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text.primary};
  text-decoration: none;
  transition: background 0.3s ease, border-color 0.3s ease;
  width: 100%;
  
  &:hover {
    background: ${({ theme }) => theme.surface.hover};
    border-color: ${({ theme }) => theme.borderStrong};
  }
  
  @media (min-width: 480px) {
    width: auto;
    padding: 16px 32px;
    border-radius: 14px;
    font-size: 0.9375rem;
  }
`;

const HeroStats = styled(motion.div)`
  display: flex;
  gap: 32px;
  
  @media (min-width: 480px) {
    gap: 48px;
  }
  
  @media (min-width: 768px) {
    gap: 64px;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  font-family: 'Satoshi', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 4px;
  
  @media (min-width: 480px) {
    font-size: 1.75rem;
  }
  
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const StatLabel = styled.div`
  font-size: 0.6875rem;
  color: ${({ theme }) => theme.text.tertiary};
  
  @media (min-width: 480px) {
    font-size: 0.75rem;
  }
  
  @media (min-width: 768px) {
    font-size: 0.8125rem;
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
  gap: 8px;
  
  @media (min-width: 768px) {
    bottom: 48px;
    gap: 12px;
  }
`;

const ScrollLine = styled(motion.div)`
  width: 1px;
  height: 32px;
  background: ${({ theme }) => theme.primary};
  transform-origin: top;
  
  @media (min-width: 768px) {
    height: 40px;
  }
`;

const ScrollText = styled.span`
  font-size: 0.625rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text.tertiary};
  
  @media (min-width: 768px) {
    font-size: 0.6875rem;
  }
`;

export default Banner;