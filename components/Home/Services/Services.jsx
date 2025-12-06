import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  
  const services = [
    {
      number: '01',
      title: 'Web Development',
      subtitle: 'Full-stack solutions',
      description: 'We build scalable, performant web applications using modern frameworks and best practices.',
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL'],
    },
    {
      number: '02',
      title: 'Mobile Development',
      subtitle: 'iOS & Android apps',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    },
    {
      number: '03',
      title: 'AI Solutions',
      subtitle: 'Intelligent automation',
      description: 'Custom AI and machine learning solutions to automate and optimize your business processes.',
      technologies: ['Python', 'TensorFlow', 'OpenAI', 'LangChain', 'Vector DBs'],
    },
  ];
  
  return (
    <Section id="services">
      <Container>
        <Header>
          <Heading
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Expertise that drives <GradientText>real results</GradientText>
          </Heading>
        </Header>
        
        <Grid>
          <ServicesList>
            {services.map((service, i) => (
              <ServiceItem
                key={i}
                $active={activeService === i}
                onClick={() => setActiveService(i)}
                whileHover={{ x: 4 }}
              >
                <ServiceNumber>{service.number}</ServiceNumber>
                <ServiceInfo>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceSubtitle>{service.subtitle}</ServiceSubtitle>
                </ServiceInfo>
                <ProgressBar>
                  {activeService === i && (
                    <ProgressFill
                      layoutId="activeProgress"
                      transition={{ duration: 0.4 }}
                    />
                  )}
                </ProgressBar>
              </ServiceItem>
            ))}
          </ServicesList>
          
          <ServiceDetail>
            <AnimatePresence mode="wait">
              <DetailCard
                key={activeService}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <DetailIcon>{services[activeService].number}</DetailIcon>
                <DetailTitle>{services[activeService].title}</DetailTitle>
                <DetailDescription>{services[activeService].description}</DetailDescription>
                <TechStack>
                  {services[activeService].technologies.map((tech, i) => (
                    <TechTag key={i}>{tech}</TechTag>
                  ))}
                </TechStack>
                <DetailCTA href="#contact">
                  <span>Get Started</span>
                  <span>→</span>
                </DetailCTA>
              </DetailCard>
            </AnimatePresence>
          </ServiceDetail>
        </Grid>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  position: relative;
  padding: clamp(80px, 12vw, 160px) 0;
  background: ${({ theme }) => theme.backgroundSecondary};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(24px, 5vw, 64px);
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const Heading = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.text.primary};
`;

const GradientText = styled.span`
  background: ${({ theme }) => theme.gradient.textAccent};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 60px;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ServicesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ServiceItem = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px;
  background: ${({ $active, theme }) => 
    $active ? theme.surface.default : 'transparent'};
  border: 1px solid ${({ $active, theme }) => 
    $active ? theme.borderAccent : 'transparent'};
  border-radius: 16px;
  cursor: pointer;
  transition: background 0.3s ease, border-color 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.surface.default};
  }
`;

const ServiceNumber = styled.div`
  font-family: 'Satoshi', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text.tertiary};
`;

const ServiceInfo = styled.div`
  flex: 1;
`;

const ServiceTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 4px;
`;

const ServiceSubtitle = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.text.tertiary};
`;

const ProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: ${({ theme }) => theme.border};
`;

const ProgressFill = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.primary};
`;

const ServiceDetail = styled.div`
  position: relative;
`;

const DetailCard = styled(motion.div)`
  padding: 48px;
  background: ${({ theme }) => theme.surface.default};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 24px;
  
  @media (max-width: 600px) {
    padding: 32px 24px;
  }
`;

const DetailIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  margin-bottom: 24px;
  background: ${({ theme }) => theme.gradient.buttonPrimary};
  border-radius: 14px;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
`;

const DetailTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 16px;
`;

const DetailDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.text.secondary};
  margin-bottom: 32px;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 32px;
`;

const TechTag = styled.span`
  padding: 8px 16px;
  background: ${({ theme }) => theme.backgroundElevated};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text.secondary};
`;

const DetailCTA = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: ${({ theme }) => theme.gradient.buttonPrimary};
  border-radius: 12px;
  font-size: 0.9375rem;
  font-weight: 600;
  color: white;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadow.glow};
  }
`;

export default Services;

