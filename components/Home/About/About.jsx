import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const About = () => {
  const features = [
    { icon: '⚡', title: 'Lightning Fast', description: 'Optimized for peak performance' },
    { icon: '🎨', title: 'Beautiful Design', description: 'Pixel-perfect interfaces' },
    { icon: '🔒', title: 'Secure', description: 'Enterprise-grade security' },
    { icon: '📱', title: 'Responsive', description: 'Works on all devices' },
  ];
  
  return (
    <Section id="about">
      <Container>
        <Grid>
          <Visual>
            <GlowCard
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <IconBadge>⭐</IconBadge>
              <CardText>Building the future, one pixel at a time.</CardText>
            </GlowCard>
          </Visual>
          
          <Content>
            <Heading
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              We turn ambitious ideas into <GradientText>exceptional products</GradientText>
            </Heading>
            
            <FeatureGrid>
              {features.map((feature, i) => (
                <FeatureCard
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ y: -4, borderColor: 'rgba(139, 92, 246, 0.6)' }}
                  whileTap={{ y: -2, scale: 0.98 }}
                >
                  <FeatureIcon>{feature.icon}</FeatureIcon>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureCard>
              ))}
            </FeatureGrid>
          </Content>
        </Grid>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  position: relative;
  padding: clamp(80px, 12vw, 160px) 0;
  background: ${({ theme }) => theme.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(24px, 5vw, 64px);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(32px, 8vw, 80px);
  align-items: center;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  
  @media (max-width: 480px) {
    gap: 32px;
  }
`;

const Visual = styled.div``;

const GlowCard = styled(motion.div)`
  position: relative;
  padding: clamp(40px, 7vw, 60px) clamp(24px, 5vw, 40px);
  background: ${({ theme }) => theme.surface.default};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 24px;
  text-align: center;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.gradient.cardGlow};
    opacity: 0.5;
  }
  
  @media (max-width: 480px) {
    padding: 32px 20px;
  }
`;

const IconBadge = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  margin-bottom: 24px;
  background: ${({ theme }) => theme.gradient.buttonPrimary};
  border-radius: 20px;
  font-size: 2rem;
`;

const CardText = styled.p`
  position: relative;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.text.primary};
  line-height: 1.6;
`;

const Content = styled.div``;

const Heading = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 48px;
`;

const GradientText = styled.span`
  background: ${({ theme }) => theme.gradient.textAccent};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(16px, 3vw, 20px);
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  @media (max-width: 400px) {
    gap: 12px;
  }
`;

const FeatureCard = styled(motion.div)`
  padding: 24px;
  background: ${({ theme }) => theme.surface.default};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px;
  transition: border-color 0.3s ease;
`;

const FeatureIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 12px;
`;

const FeatureTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 6px;
`;

const FeatureDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.text.tertiary};
`;

export default About;

