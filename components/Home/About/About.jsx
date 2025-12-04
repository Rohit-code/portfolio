import React from 'react';
import items from '../../../utils/constants/services-items';
import useCursorStyle from '../../../hooks/useCursorStyle';
import AnimateOnScreen from '../../AnimateOnScreen';
import {
  ContentSection,
  TextWrapper,
  ServicesWrapper,
  ServicesGrid,
  ServiceCard,
  ServiceIconWrapper,
  ServiceIconSvg,
  ServiceHeader,
  ServiceTitle,
  ServiceDescription,
  ServiceList,
  ServiceListItem,
  TeamWrapper,
  TeamGrid,
  TeamMember,
} from './styles';

const About = () => {
  const [selectedItem, setSelectedItem] = React.useState(0);
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  React.useEffect(() => {
    console.log('📚 About: Component mounted');
    console.log('📚 About: Services loaded', items);
    return () => console.log('📚 About: Component unmounted');
  }, []);

  React.useEffect(() => {
    console.log('📚 About: Selected service changed', { 
      index: selectedItem, 
      service: items[selectedItem]?.[0] 
    });
  }, [selectedItem]);

  const handleMouseEnter = React.useCallback(
    curr => {
      console.log('👆 About: Mouse entered accordion', { index: curr, isSelected: curr === selectedItem });
      if (curr === selectedItem) return;

      addCursorBorder();
    },
    [selectedItem, addCursorBorder],
  );

  const handleMouseLeave = React.useCallback(
    curr => {
      console.log('👆 About: Mouse left accordion', { index: curr });
      if (curr === selectedItem) return;

      removeCursorBorder();
    },
    [selectedItem, removeCursorBorder],
  );

  const handleAccordionClick = React.useCallback((index) => {
    console.log('🔘 About: Accordion clicked', { index, serviceName: items[index]?.[0] });
    setSelectedItem(index);
  }, []);

  return (
    <AnimateOnScreen>
      <ContentSection>
        <TextWrapper>
          <h2>
            We turn your vision into reality with powerful, scalable software
            that drives real business results.
          </h2>
          <p>
            Partner with a team that delivers excellence. From startups to
            enterprises, we&apos;ve helped businesses scale with custom web applications,
            intelligent mobile apps, and cutting-edge AI solutions. Our proven process
            ensures your project launches on time, within budget, and exceeds expectations.
          </p>
          <p style={{ marginTop: '20px', fontWeight: '600', color: 'inherit', opacity: '1' }}>
            Ready to accelerate your digital transformation? Let&apos;s build something
            extraordinary together.
          </p>
          <TeamWrapper>
            <h3>Team</h3>
            <TeamGrid>
            <TeamMember>
              <h4>Sahil Singaraju</h4>
              <p>CEO - Chief Executive Officer</p>
            </TeamMember>
            <TeamMember>
              <h4>Rohit Boni</h4>
              <p>CTO - Chief Technology Officer</p>
            </TeamMember>
            </TeamGrid>
          </TeamWrapper>
        </TextWrapper>
        <ServicesWrapper>
          <h3>Our Services</h3>
          <p>
            Enterprise-grade solutions engineered for growth, scalability, and lasting impact.
          </p>
          <ServicesGrid>
            <ServiceCard
              role="article"
              aria-labelledby="service-web-title"
              onMouseEnter={() => {
                console.log('🖱️ About: Service card hovered - Web Development');
                addCursorBorder();
              }}
              onMouseLeave={() => {
                console.log('🖱️ About: Service card left');
                removeCursorBorder();
              }}
            >
              <ServiceIconWrapper>
                <ServiceIconSvg>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </ServiceIconSvg>
              </ServiceIconWrapper>
              <ServiceHeader>
                <ServiceTitle id="service-web-title">Web Development</ServiceTitle>
                <ServiceDescription>
                  Custom web solutions from responsive websites to complex web applications.
                </ServiceDescription>
              </ServiceHeader>
              <ServiceList>
                <ServiceListItem>Custom Website Development</ServiceListItem>
                <ServiceListItem>Web Application Platforms</ServiceListItem>
                <ServiceListItem>Frontend & Backend Development</ServiceListItem>
                <ServiceListItem>API Development & Integration</ServiceListItem>
                <ServiceListItem>Maintenance & Support</ServiceListItem>
              </ServiceList>
            </ServiceCard>

            <ServiceCard
              role="article"
              aria-labelledby="service-app-title"
              onMouseEnter={() => {
                console.log('🖱️ About: Service card hovered - App Development');
                addCursorBorder();
              }}
              onMouseLeave={() => {
                console.log('🖱️ About: Service card left');
                removeCursorBorder();
              }}
            >
              <ServiceIconWrapper>
                <ServiceIconSvg>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="5" y="2" width="14" height="20" rx="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                </ServiceIconSvg>
              </ServiceIconWrapper>
              <ServiceHeader>
                <ServiceTitle id="service-app-title">App Development</ServiceTitle>
                <ServiceDescription>
                  Native and cross-platform mobile applications with seamless user experiences.
                </ServiceDescription>
              </ServiceHeader>
              <ServiceList>
                <ServiceListItem>Native iOS & Android Apps</ServiceListItem>
                <ServiceListItem>Cross-platform Development</ServiceListItem>
                <ServiceListItem>Backend & Cloud Integration</ServiceListItem>
                <ServiceListItem>App Store Optimization</ServiceListItem>
                <ServiceListItem>Performance Monitoring</ServiceListItem>
              </ServiceList>
            </ServiceCard>

            <ServiceCard
              role="article"
              aria-labelledby="service-ai-title"
              onMouseEnter={() => {
                console.log('🖱️ About: Service card hovered - AI Services');
                addCursorBorder();
              }}
              onMouseLeave={() => {
                console.log('🖱️ About: Service card left');
                removeCursorBorder();
              }}
            >
              <ServiceIconWrapper>
                <ServiceIconSvg>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </ServiceIconSvg>
              </ServiceIconWrapper>
              <ServiceHeader>
                <ServiceTitle id="service-ai-title">AI Services</ServiceTitle>
                <ServiceDescription>
                  Intelligent solutions powered by machine learning and advanced AI technologies.
                </ServiceDescription>
              </ServiceHeader>
              <ServiceList>
                <ServiceListItem>Machine Learning Solutions</ServiceListItem>
                <ServiceListItem>Natural Language Processing</ServiceListItem>
                <ServiceListItem>Computer Vision Systems</ServiceListItem>
                <ServiceListItem>Predictive Analytics</ServiceListItem>
                <ServiceListItem>AI Chatbots & Assistants</ServiceListItem>
              </ServiceList>
            </ServiceCard>
          </ServicesGrid>
        </ServicesWrapper>
      </ContentSection>
    </AnimateOnScreen>
  );
};

export default React.memo(About);
