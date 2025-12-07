import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Link from 'next/link';

const Work = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A modern e-commerce solution with real-time inventory and AI-powered recommendations.',
      tags: ['Next.js', 'Stripe', 'PostgreSQL'],
      stats: { users: '50K+', revenue: '$2M+' },
      featured: true,
    },
    {
      title: 'Fitness App',
      category: 'Mobile Development',
      description: 'Cross-platform fitness tracking app with social features.',
      tags: ['React Native', 'Firebase'],
      stats: { downloads: '100K+', rating: '4.8★' },
    },
    {
      title: 'AI Analytics Dashboard',
      category: 'AI Solutions',
      description: 'Business intelligence platform with predictive analytics.',
      tags: ['Python', 'TensorFlow', 'React'],
      stats: { clients: '25+', accuracy: '94%' },
    },
  ];
  
  return (
    <Section id="work">
      <Container>
        <Header>
          <Heading
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Projects that make an <GradientText>impact</GradientText>
          </Heading>
        </Header>
        
        <ProjectsGrid>
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              $featured={project.featured}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              whileTap={{ y: -3, scale: 0.98 }}
            >
              <ProjectVisual>
                <ProjectBadge>{project.category}</ProjectBadge>
              </ProjectVisual>
              
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                
                <TagList>
                  {project.tags.map((tag, j) => (
                    <Tag key={j}>{tag}</Tag>
                  ))}
                </TagList>
                
                <ProjectStats>
                  {Object.entries(project.stats).map(([key, value], j) => (
                    <Stat key={j}>
                      <StatValue>{value}</StatValue>
                      <StatLabel>{key}</StatLabel>
                    </Stat>
                  ))}
                </ProjectStats>
                
                <ProjectLink href="#work">
                  View Case Study →
                </ProjectLink>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(24px, 4vw, 32px);
  
  > div:first-child {
    grid-column: 1 / -1;
  }
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 24px;
    
    > div:first-child {
      grid-column: 1;
    }
  }
  
  @media (max-width: 480px) {
    gap: 20px;
  }
`;

const ProjectCard = styled(motion.div)`
  position: relative;
  background: ${({ theme }) => theme.surface.default};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 24px;
  overflow: hidden;
  transition: border-color 0.3s ease;
  
  &:hover {
    border-color: ${({ theme }) => theme.borderAccent};
  }
`;

const ProjectVisual = styled.div`
  position: relative;
  height: ${({ $featured }) => ($featured ? '400px' : '300px')};
  background: ${({ theme }) => theme.gradient.meshViolet};
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 600px) {
    height: 250px;
  }
`;

const ProjectBadge = styled.div`
  position: absolute;
  top: 24px;
  left: 24px;
  padding: 8px 16px;
  background: ${({ theme }) => theme.glass.background};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.glass.border};
  border-radius: 100px;
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text.primary};
`;

const ProjectContent = styled.div`
  padding: clamp(24px, 4vw, 32px);
  
  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 12px;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text.secondary};
  margin-bottom: 20px;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

const Tag = styled.span`
  padding: 6px 12px;
  background: ${({ theme }) => theme.backgroundElevated};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 100px;
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.text.tertiary};
`;

const ProjectStats = styled.div`
  display: flex;
  gap: 32px;
  padding: 20px 0;
  border-top: 1px solid ${({ theme }) => theme.border};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  margin-bottom: 24px;
`;

const Stat = styled.div``;

const StatValue = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 4px;
`;

const StatLabel = styled.div`
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.text.tertiary};
  text-transform: capitalize;
`;

const ProjectLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  font-size: 0.9375rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  transition: gap 0.3s ease;
  
  &:hover {
    gap: 8px;
  }
`;

export default Work;

