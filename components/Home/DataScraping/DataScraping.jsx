// Paste the DataScraping.jsx code from code.txt here (lines 403-1098)

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const DataScraping = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [extractedData, setExtractedData] = useState([]);
  
  const demos = [
    {
      title: 'E-Commerce Scraping',
      description: 'Extract product data, prices, reviews, and inventory levels from any e-commerce platform.',
      icon: '🛒',
      color: '#8B5CF6',
      mockData: [
        { field: 'Product Name', value: 'MacBook Pro 16"' },
        { field: 'Price', value: '$2,499.00' },
        { field: 'Rating', value: '4.8 ★ (2,340 reviews)' },
        { field: 'Stock Status', value: 'In Stock' },
        { field: 'Seller', value: 'Apple Official Store' },
      ],
    },
    {
      title: 'Social Media Analytics',
      description: 'Gather engagement metrics, follower data, and content performance across platforms.',
      icon: '📱',
      color: '#06B6D4',
      mockData: [
        { field: 'Followers', value: '1.2M' },
        { field: 'Engagement Rate', value: '4.7%' },
        { field: 'Avg. Likes', value: '45,230' },
        { field: 'Post Frequency', value: '2.3/day' },
        { field: 'Top Hashtags', value: '#tech, #innovation' },
      ],
    },
    {
      title: 'Real Estate Data',
      description: 'Collect property listings, prices, amenities, and market trends automatically.',
      icon: '🏠',
      color: '#10B981',
      mockData: [
        { field: 'Property Type', value: '3BR Apartment' },
        { field: 'Price', value: '$450,000' },
        { field: 'Location', value: 'San Francisco, CA' },
        { field: 'Sq. Footage', value: '1,850 sq ft' },
        { field: 'Listed', value: '3 days ago' },
      ],
    },
    {
      title: 'Job Market Intelligence',
      description: 'Monitor job postings, salary ranges, and hiring trends across industries.',
      icon: '💼',
      color: '#F59E0B',
      mockData: [
        { field: 'Position', value: 'Senior Developer' },
        { field: 'Salary Range', value: '$150K - $200K' },
        { field: 'Company', value: 'Tech Startup Inc.' },
        { field: 'Remote', value: 'Hybrid Available' },
        { field: 'Posted', value: '2 hours ago' },
      ],
    },
  ];
  
  const features = [
    { icon: '⚡', title: 'Real-Time Extraction', desc: 'Live data updates every minute' },
    { icon: '🔄', title: 'Auto-Scheduling', desc: 'Automated recurring scrapes' },
    { icon: '🛡️', title: 'Anti-Detection', desc: 'Rotating proxies & fingerprints' },
    { icon: '📊', title: 'Data Cleaning', desc: 'Automatic formatting & validation' },
    { icon: '🔌', title: 'API Integration', desc: 'RESTful API & webhooks' },
    { icon: '☁️', title: 'Cloud Storage', desc: 'Automatic cloud backup' },
  ];
  
  const runDemoAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setExtractedData([]);
    
    const currentData = demos[activeDemo].mockData;
    
    currentData.forEach((item, i) => {
      setTimeout(() => {
        setExtractedData(prev => [...prev, item]);
        if (i === currentData.length - 1) {
          setTimeout(() => setIsAnimating(false), 500);
        }
      }, 400 * (i + 1));
    });
  };
  
  useEffect(() => {
    setExtractedData([]);
  }, [activeDemo]);
  
  return (
    <ScrapingSection id="data-scraping" ref={sectionRef}>
      <BackgroundGrid />
      
      <Container>
        <SectionHeader>
          <Badge
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <BadgeIcon>🔮</BadgeIcon>
            <span>New Service</span>
          </Badge>
          
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Intelligent <GradientText>Data Scraping</GradientText>
          </SectionTitle>
          
          <SectionDesc
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Extract valuable data from any website at scale. Our enterprise-grade 
            scraping infrastructure handles millions of requests with 99.9% uptime.
          </SectionDesc>
        </SectionHeader>
        
        <DemoSection>
          <DemoTabs
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {demos.map((demo, i) => (
              <DemoTab
                key={i}
                $active={activeDemo === i}
                $color={demo.color}
                onClick={() => setActiveDemo(i)}
                whileHover={{ x: 4 }}
              >
                <DemoTabIcon>{demo.icon}</DemoTabIcon>
                <DemoTabContent>
                  <DemoTabTitle>{demo.title}</DemoTabTitle>
                  <DemoTabDesc>{demo.description}</DemoTabDesc>
                </DemoTabContent>
              </DemoTab>
            ))}
          </DemoTabs>
          
          <DemoVisual
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <TerminalWindow>
              <TerminalHeader>
                <TerminalDots>
                  <Dot $color="#FF5F56" />
                  <Dot $color="#FFBD2E" />
                  <Dot $color="#27CA40" />
                </TerminalDots>
                <TerminalTitle>data-extractor.js</TerminalTitle>
              </TerminalHeader>
              
              <TerminalBody>
                <CodeLine>
                  <LineNumber>1</LineNumber>
                  <Code><Keyword>const</Keyword> scraper = <Function>initScraper</Function>({`{`}</Code>
                </CodeLine>
                <CodeLine>
                  <LineNumber>2</LineNumber>
                  <Code>  target: <String>'{demos[activeDemo].title.toLowerCase().replace(' ', '-')}'</String>,</Code>
                </CodeLine>
                <CodeLine>
                  <LineNumber>3</LineNumber>
                  <Code>  mode: <String>'intelligent'</String>,</Code>
                </CodeLine>
                <CodeLine>
                  <LineNumber>4</LineNumber>
                  <Code>  proxy: <Keyword>true</Keyword></Code>
                </CodeLine>
                <CodeLine>
                  <LineNumber>5</LineNumber>
                  <Code>{`}`});</Code>
                </CodeLine>
                <CodeLine>
                  <LineNumber>6</LineNumber>
                  <Code></Code>
                </CodeLine>
                <CodeLine>
                  <LineNumber>7</LineNumber>
                  <Code><Keyword>await</Keyword> scraper.<Function>extract</Function>();</Code>
                </CodeLine>
                
                <OutputSection>
                  <OutputHeader>
                    <span>📤 Extracted Data</span>
                    <RunButton
                      onClick={runDemoAnimation}
                      disabled={isAnimating}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isAnimating ? 'Extracting...' : 'Run Demo'}
                    </RunButton>
                  </OutputHeader>
                  
                  <DataOutput>
                    <AnimatePresence mode="popLayout">
                      {extractedData.map((item, i) => (
                        <DataRow
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          $color={demos[activeDemo].color}
                        >
                          <DataField>{item.field}:</DataField>
                          <DataValue>{item.value}</DataValue>
                        </DataRow>
                      ))}
                    </AnimatePresence>
                    
                    {extractedData.length === 0 && !isAnimating && (
                      <EmptyState>Click "Run Demo" to see data extraction</EmptyState>
                    )}
                    
                    {isAnimating && (
                      <LoadingIndicator>
                        <LoadingDot style={{ animationDelay: '0ms' }} />
                        <LoadingDot style={{ animationDelay: '150ms' }} />
                        <LoadingDot style={{ animationDelay: '300ms' }} />
                      </LoadingIndicator>
                    )}
                  </DataOutput>
                </OutputSection>
              </TerminalBody>
            </TerminalWindow>
          </DemoVisual>
        </DemoSection>
        
        <FeaturesGrid>
          {features.map((feature, i) => (
            <FeatureCard
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              whileHover={{ y: -4, borderColor: 'rgba(139, 92, 246, 0.4)' }}
            >
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDesc>{feature.desc}</FeatureDesc>
            </FeatureCard>
          ))}
        </FeaturesGrid>
        
        <CTARow
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <CTACard>
            <CTAContent>
              <CTATitle>Ready to unlock your data?</CTATitle>
              <CTADesc>
                Get started with our scraping API. First 10,000 requests free.
              </CTADesc>
            </CTAContent>
            <CTAButtons>
              <PrimaryCTA
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get API Access
              </PrimaryCTA>
              <SecondaryCTA
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Documentation
              </SecondaryCTA>
            </CTAButtons>
          </CTACard>
        </CTARow>
      </Container>
    </ScrapingSection>
  );
};

const ScrapingSection = styled.section`
  position: relative;
  padding: clamp(80px, 12vw, 160px) 0;
  background: ${({ theme }) => theme.backgroundSecondary};
  overflow: hidden;
`;

const BackgroundGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
`;

const Container = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(24px, 5vw, 64px);
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 64px;
`;

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: ${({ theme }) => theme.primaryMuted};
  border: 1px solid ${({ theme }) => theme.borderAccent};
  border-radius: 100px;
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 20px;
`;

const BadgeIcon = styled.span`
  font-size: 1rem;
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'Satoshi', sans-serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
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
  max-width: 600px;
  margin: 0 auto;
`;

const DemoSection = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 32px;
  margin-bottom: 64px;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const DemoTabs = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  
  @media (max-width: 900px) {
    flex-direction: row;
    overflow-x: auto;
    padding-bottom: 8px;
    &::-webkit-scrollbar { display: none; }
  }
`;

const DemoTab = styled(motion.button)`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 20px;
  background: ${({ $active, theme }) => 
    $active ? theme.background : 'transparent'};
  border: 1px solid ${({ $active, $color, theme }) => 
    $active ? $color + '40' : theme.border};
  border-radius: 16px;
  text-align: left;
  transition: all 0.3s ease;
  
  ${({ $active, $color }) => $active && `
    box-shadow: 0 0 30px ${$color}20;
  `}
  
  @media (max-width: 900px) {
    flex-shrink: 0;
    min-width: 280px;
  }
`;

const DemoTabIcon = styled.span`
  font-size: 1.5rem;
  line-height: 1;
`;

const DemoTabContent = styled.div``;

const DemoTabTitle = styled.h4`
  font-size: 0.9375rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 4px;
`;

const DemoTabDesc = styled.p`
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.text.tertiary};
  line-height: 1.4;
`;

const DemoVisual = styled(motion.div)``;

const TerminalWindow = styled.div`
  background: #0D0D0D;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.4);
`;

const TerminalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0.03);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`;

const TerminalDots = styled.div`
  display: flex;
  gap: 8px;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  background: ${({ $color }) => $color};
  border-radius: 50%;
`;

const TerminalTitle = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.5);
`;

const TerminalBody = styled.div`
  padding: 24px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  line-height: 1.8;
`;

const CodeLine = styled.div`
  display: flex;
  gap: 16px;
`;

const LineNumber = styled.span`
  color: rgba(255, 255, 255, 0.2);
  user-select: none;
  min-width: 20px;
  text-align: right;
`;

const Code = styled.span`
  color: rgba(255, 255, 255, 0.8);
`;

const Keyword = styled.span`color: #C678DD;`;
const Function = styled.span`color: #61AFEF;`;
const String = styled.span`color: #98C379;`;

const OutputSection = styled.div`
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px dashed rgba(255, 255, 255, 0.1);
`;

const OutputHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.5);
`;

const RunButton = styled(motion.button)`
  padding: 8px 16px;
  background: linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%);
  border: none;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 0.8125rem;
  font-weight: 500;
  color: white;
  
  &:disabled {
    opacity: 0.7;
  }
`;

const DataOutput = styled.div`
  min-height: 180px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  padding: 16px;
`;

const DataRow = styled(motion.div)`
  display: flex;
  gap: 12px;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.03);
  border-left: 3px solid ${({ $color }) => $color};
  border-radius: 6px;
  margin-bottom: 8px;
  
  &:last-child { margin-bottom: 0; }
`;

const DataField = styled.span`
  color: rgba(255, 255, 255, 0.5);
  min-width: 120px;
`;

const DataValue = styled.span`
  color: #98C379;
  font-weight: 500;
`;

const EmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.875rem;
`;

const LoadingIndicator = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 20px;
`;

const LoadingDot = styled.div`
  width: 8px;
  height: 8px;
  background: #8B5CF6;
  border-radius: 50%;
  animation: bounce 0.6s infinite alternate;
  
  @keyframes bounce {
    from { transform: translateY(0); }
    to { transform: translateY(-8px); }
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  margin-bottom: 64px;
  
  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FeatureCard = styled(motion.div)`
  padding: 24px;
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s ease;
`;

const FeatureIcon = styled.div`
  font-size: 1.75rem;
  margin-bottom: 12px;
`;

const FeatureTitle = styled.h4`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 6px;
`;

const FeatureDesc = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.text.tertiary};
`;

const CTARow = styled(motion.div)``;

const CTACard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 40px;
  background: ${({ theme }) => theme.gradient.meshViolet},
              ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.borderAccent};
  border-radius: 24px;
  
  @media (max-width: 800px) {
    flex-direction: column;
    text-align: center;
  }
`;

const CTAContent = styled.div``;

const CTATitle = styled.h3`
  font-family: 'Satoshi', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 8px;
`;

const CTADesc = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text.secondary};
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 12px;
  
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const PrimaryCTA = styled(motion.a)`
  padding: 16px 32px;
  background: ${({ theme }) => theme.gradient.buttonPrimary};
  border-radius: 12px;
  font-size: 0.9375rem;
  font-weight: 600;
  color: white;
  text-decoration: none;
  white-space: nowrap;
`;

const SecondaryCTA = styled(motion.a)`
  padding: 16px 32px;
  background: ${({ theme }) => theme.surface.default};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  font-size: 0.9375rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text.primary};
  text-decoration: none;
  white-space: nowrap;
`;

export default DataScraping;