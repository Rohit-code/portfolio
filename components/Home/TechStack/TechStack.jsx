// Paste the TechStack.jsx code from code.txt here (lines 1100-1397)

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styled from 'styled-components';

const TechStack = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  
  const categories = [
    {
      title: 'Frontend',
      color: '#8B5CF6',
      techs: [
        { name: 'React', icon: '⚛️' },
        { name: 'Next.js', icon: '▲' },
        { name: 'Vue', icon: '💚' },
        { name: 'TypeScript', icon: '📘' },
        { name: 'Tailwind', icon: '🎨' },
        { name: 'Framer Motion', icon: '🎬' },
      ],
    },
    {
      title: 'Backend',
      color: '#06B6D4',
      techs: [
        { name: 'Node.js', icon: '💚' },
        { name: 'Python', icon: '🐍' },
        { name: 'Go', icon: '🔵' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'Redis', icon: '🔴' },
      ],
    },
    {
      title: 'Mobile',
      color: '#10B981',
      techs: [
        { name: 'React Native', icon: '📱' },
        { name: 'Flutter', icon: '🦋' },
        { name: 'Swift', icon: '🍎' },
        { name: 'Kotlin', icon: '🤖' },
        { name: 'Expo', icon: '📲' },
        { name: 'Firebase', icon: '🔥' },
      ],
    },
    {
      title: 'AI & Cloud',
      color: '#F59E0B',
      techs: [
        { name: 'OpenAI', icon: '🧠' },
        { name: 'TensorFlow', icon: '📊' },
        { name: 'AWS', icon: '☁️' },
        { name: 'Vercel', icon: '▲' },
        { name: 'Docker', icon: '🐳' },
        { name: 'Kubernetes', icon: '☸️' },
      ],
    },
  ];
  
  return (
    <TechSection ref={sectionRef}>
      <Container>
        <SectionHeader>
          <Overline
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Technology Stack
          </Overline>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Built with <GradientText>modern tech</GradientText>
          </SectionTitle>
          <SectionDesc
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We use cutting-edge technologies to build scalable, performant solutions
          </SectionDesc>
        </SectionHeader>
        
        <TechGrid>
          {categories.map((category, i) => (
            <CategoryCard
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              $color={category.color}
            >
              <CategoryHeader>
                <CategoryDot style={{ background: category.color }} />
                <CategoryTitle>{category.title}</CategoryTitle>
              </CategoryHeader>
              
              <TechList>
                {category.techs.map((tech, j) => (
                  <TechItem
                    key={j}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95, y: -1 }}
                  >
                    <TechIcon>{tech.icon}</TechIcon>
                    <TechName>{tech.name}</TechName>
                  </TechItem>
                ))}
              </TechList>
            </CategoryCard>
          ))}
        </TechGrid>
        
        <BottomCTA
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <CTAText>
            Don't see your tech? We're always learning and adapting to new technologies.
          </CTAText>
          <CTALink href="#contact">
            Let's discuss your stack →
          </CTALink>
        </BottomCTA>
      </Container>
    </TechSection>
  );
};

const TechSection = styled.section`
  position: relative;
  padding: clamp(80px, 12vw, 160px) 0;
  background: ${({ theme }) => theme.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(24px, 5vw, 64px);
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 64px;
`;

const Overline = styled(motion.span)`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 16px;
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'Satoshi', sans-serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 16px;
`;

const GradientText = styled.span`
  background: ${({ theme }) => theme.gradient.textAccent};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionDesc = styled(motion.p)`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.text.secondary};
  max-width: 500px;
  margin: 0 auto;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: clamp(16px, 3vw, 24px);
  
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  @media (max-width: 400px) {
    gap: 12px;
  }
`;

const CategoryCard = styled(motion.div)`
  padding: clamp(20px, 3.5vw, 28px);
  background: ${({ theme }) => theme.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 20px;
  transition: all 0.4s ease;
  
  &:hover {
    border-color: ${({ $color }) => $color}40;
    box-shadow: 0 0 40px ${({ $color }) => $color}15;
  }
  
  @media (max-width: 400px) {
    padding: 18px;
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const CategoryDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;

const CategoryTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text.primary};
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const TechItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background: ${({ theme }) => theme.surface.default};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${({ theme }) => theme.surface.hover};
    border-color: ${({ theme }) => theme.borderStrong};
  }
`;

const TechIcon = styled.span`
  font-size: 1rem;
`;

const TechName = styled.span`
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text.secondary};
`;

const BottomCTA = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(12px, 2vw, 16px);
  margin-top: clamp(32px, 6vw, 48px);
  padding: clamp(20px, 3vw, 24px);
  background: ${({ theme }) => theme.surface.default};
  border-radius: 16px;
  flex-wrap: wrap;
  
  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
  
  @media (max-width: 400px) {
    padding: 16px;
  }
`;

const CTAText = styled.p`
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.text.secondary};
`;

const CTALink = styled.a`
  font-size: 0.9375rem;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  white-space: nowrap;
  
  &:hover {
    text-decoration: underline;
  }
`;

export default TechStack;