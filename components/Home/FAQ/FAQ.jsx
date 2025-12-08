import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import styled from 'styled-components';

const FAQ = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState(0);
  const [openQuestion, setOpenQuestion] = useState(null);

  const categories = [
    { id: 0, label: 'General', icon: '💡' },
    { id: 1, label: 'Pricing', icon: '💰' },
    { id: 2, label: 'Technical', icon: '⚙️' },
    { id: 3, label: 'Working Together', icon: '🤝' },
  ];

  const faqs = {
    0: [ // General
      {
        q: 'What services do you offer?',
        a: 'We specialize in web development, mobile app development, AI solutions, and data scraping services. We build custom software solutions tailored to your business needs using modern technologies and best practices.',
      },
      {
        q: 'How long does a typical project take?',
        a: 'Project timelines vary based on scope and complexity. A simple website might take 2-4 weeks, while a full-stack application could take 8-12 weeks. We provide detailed timelines during our initial consultation.',
      },
      {
        q: 'Do you work with startups?',
        a: 'Absolutely! We love working with startups and offer flexible engagement models. We can help you build MVPs, scale your product, or provide ongoing technical support as you grow.',
      },
      {
        q: 'What makes your approach different?',
        a: 'We focus on understanding your business goals first, then craft technical solutions that drive real results. Our team combines technical expertise with strategic thinking to deliver products that users love and businesses rely on.',
      },
    ],
    1: [ // Pricing
      {
        q: 'How do you price your projects?',
        a: 'We offer both fixed-price and time-and-materials pricing models. Fixed-price works best for well-defined projects, while time-and-materials provides flexibility for evolving requirements. We provide detailed quotes after understanding your needs.',
      },
      {
        q: 'Do you offer payment plans?',
        a: 'Yes! We typically structure payments across project milestones. Common structures include 30% upfront, 40% at midpoint, and 30% upon completion. We\'re flexible and can work with your budget.',
      },
      {
        q: 'What\'s included in your pricing?',
        a: 'Our pricing includes design, development, testing, deployment, and initial support. We also provide documentation, source code, and knowledge transfer sessions. Additional services like ongoing maintenance can be discussed separately.',
      },
      {
        q: 'Do you offer discounts for long-term projects?',
        a: 'Yes, we offer competitive rates for long-term partnerships and retainer agreements. We value long-term relationships and provide better pricing for committed partnerships.',
      },
    ],
    2: [ // Technical
      {
        q: 'What technologies do you use?',
        a: 'We work with modern, proven technologies including React, Next.js, Node.js, Python, React Native, and cloud platforms like AWS, Vercel, and Firebase. We choose the best stack for each project\'s specific requirements.',
      },
      {
        q: 'Do you provide hosting and deployment?',
        a: 'Yes! We can handle deployment and hosting setup. We work with platforms like Vercel, Netlify, AWS, and others. We can also set up CI/CD pipelines and monitoring for your applications.',
      },
      {
        q: 'How do you ensure code quality?',
        a: 'We follow industry best practices including code reviews, automated testing, linting, and documentation. We write maintainable, scalable code and use version control (Git) throughout the development process.',
      },
      {
        q: 'Can you work with our existing codebase?',
        a: 'Absolutely! We can integrate with existing systems, refactor legacy code, or build new features on top of your current infrastructure. We\'re experienced in working with various codebases and technologies.',
      },
      {
        q: 'Do you provide API documentation?',
        a: 'Yes, we provide comprehensive API documentation including endpoints, request/response examples, authentication methods, and error handling. We use tools like Swagger/OpenAPI for clear documentation.',
      },
    ],
    3: [ // Working Together
      {
        q: 'How do we get started?',
        a: 'Start by reaching out through our contact form or email. We\'ll schedule a free consultation to discuss your project, understand your goals, and provide initial recommendations. From there, we\'ll create a detailed proposal.',
      },
      {
        q: 'What\'s your communication process?',
        a: 'We maintain regular communication through your preferred channels (email, Slack, or project management tools). We provide weekly updates, hold regular check-ins, and are always available for urgent matters.',
      },
      {
        q: 'Do you work remotely?',
        a: 'Yes, we work with clients worldwide remotely. We use modern collaboration tools and maintain clear communication channels. We can also accommodate different time zones.',
      },
      {
        q: 'Can we see progress during development?',
        a: 'Absolutely! We provide access to staging environments where you can see progress in real-time. We also share regular updates, demos, and welcome your feedback throughout the development process.',
      },
      {
        q: 'What happens after project completion?',
        a: 'After launch, we provide a handover period with documentation and training. We offer ongoing maintenance and support packages, and we\'re always available for future enhancements or new features.',
      },
    ],
  };

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <FAQSection id="faq" ref={sectionRef}>
      <Container>
        <Header
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>FAQ</SectionLabel>
          <Heading>
            Frequently Asked <GradientText>Questions</GradientText>
          </Heading>
          <Subheading>
            Everything you need to know about working with us
          </Subheading>
        </Header>

        <CategoriesWrapper>
          <Categories>
            {categories.map((category) => (
              <CategoryButton
                key={category.id}
                $isActive={activeCategory === category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setOpenQuestion(null);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CategoryIcon>{category.icon}</CategoryIcon>
                <CategoryLabel>{category.label}</CategoryLabel>
              </CategoryButton>
            ))}
          </Categories>
        </CategoriesWrapper>

        <QuestionsWrapper>
          <AnimatePresence mode="wait">
            <QuestionsList
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {faqs[activeCategory].map((faq, index) => (
                <QuestionItem
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <QuestionButton
                    onClick={() => toggleQuestion(index)}
                    $isOpen={openQuestion === index}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <QuestionText>{faq.q}</QuestionText>
                    <IconWrapper $isOpen={openQuestion === index}>
                      <IconLine $isOpen={openQuestion === index} />
                      <IconLine $isOpen={openQuestion === index} $rotate />
                    </IconWrapper>
                  </QuestionButton>
                  <AnimatePresence>
                    {openQuestion === index && (
                      <AnswerWrapper
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <Answer>{faq.a}</Answer>
                      </AnswerWrapper>
                    )}
                  </AnimatePresence>
                </QuestionItem>
              ))}
            </QuestionsList>
          </AnimatePresence>
        </QuestionsWrapper>
      </Container>
    </FAQSection>
  );
};

const FAQSection = styled.section`
  position: relative;
  padding: clamp(80px, 12vw, 160px) 0;
  background: ${({ theme }) => theme.background};
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(24px, 5vw, 64px);
`;

const Header = styled(motion.div)`
  text-align: center;
  margin-bottom: clamp(48px, 8vw, 80px);
`;

const SectionLabel = styled.div`
  display: inline-block;
  padding: clamp(6px, 1vw, 8px) clamp(12px, 2vw, 16px);
  background: ${({ theme }) => theme.surface.default};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 100px;
  font-size: clamp(0.75rem, 1.5vw, 0.875rem);
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  margin-bottom: clamp(16px, 3vw, 24px);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Heading = styled.h2`
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: clamp(16px, 3vw, 24px);
`;

const GradientText = styled.span`
  background: ${({ theme }) => theme.gradient.textAccent};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subheading = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: ${({ theme }) => theme.text.secondary};
  max-width: 600px;
  margin: 0 auto;
`;

const CategoriesWrapper = styled.div`
  margin-bottom: clamp(40px, 6vw, 64px);
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Categories = styled.div`
  display: flex;
  gap: clamp(12px, 2vw, 16px);
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 8px;
`;

const CategoryButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: clamp(8px, 1.5vw, 12px);
  padding: clamp(12px, 2vw, 16px) clamp(20px, 3vw, 28px);
  background: ${({ $isActive, theme }) =>
    $isActive ? theme.surface.elevated : theme.surface.default};
  border: 1px solid
    ${({ $isActive, theme }) =>
      $isActive ? theme.primary : theme.border};
  border-radius: 100px;
  font-size: clamp(0.875rem, 1.8vw, 1rem);
  font-weight: 600;
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.primary : theme.text.secondary};
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: ${({ theme }) => theme.surface.elevated};
    border-color: ${({ theme }) => theme.primary};
  }
`;

const CategoryIcon = styled.span`
  font-size: clamp(1rem, 2vw, 1.25rem);
`;

const CategoryLabel = styled.span``;

const QuestionsWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const QuestionsList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: clamp(12px, 2vw, 16px);
`;

const QuestionItem = styled(motion.div)`
  background: ${({ theme }) => theme.surface.default};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: clamp(12px, 2vw, 16px);
  overflow: hidden;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.borderAccent};
  }
`;

const QuestionButton = styled(motion.button)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(16px, 3vw, 24px);
  padding: clamp(20px, 3vw, 28px);
  text-align: left;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text.primary};
`;

const QuestionText = styled.h3`
  font-size: clamp(1rem, 2vw, 1.125rem);
  font-weight: 600;
  line-height: 1.4;
  flex: 1;
  color: ${({ theme }) => theme.text.primary};
`;

const IconWrapper = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(45deg)' : 'rotate(0deg)')};
`;

const IconLine = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.primary};
  border-radius: 2px;
  transition: all 0.3s ease;

  &:first-child {
    width: 2px;
    height: 16px;
    top: 4px;
    left: 11px;
    opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
  }

  &:last-child {
    width: 16px;
    height: 2px;
    top: 11px;
    left: 4px;
  }
`;

const AnswerWrapper = styled(motion.div)`
  overflow: hidden;
`;

const Answer = styled.p`
  padding: 0 clamp(20px, 3vw, 28px) clamp(20px, 3vw, 28px);
  font-size: clamp(0.9375rem, 1.8vw, 1rem);
  line-height: 1.7;
  color: ${({ theme }) => theme.text.secondary};
`;

export default FAQ;
