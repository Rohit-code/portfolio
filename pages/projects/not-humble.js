import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AppBar from '../../components/AppBar';
import Footer from '../../components/Home/Footer';
import containerStyles from '../../styles/shared/container';

const GetStartedPage = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });

  React.useEffect(() => {
    console.log('🚀 Get Started Page: Component mounted');
    return () => console.log('🚀 Get Started Page: Component unmounted');
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log('📝 Form field updated:', name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('📧 Form submitted:', formData);
    
    // Create mailto link with form data
    const subject = `New Project Inquiry from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Service Needed: ${formData.service}
Budget Range: ${formData.budget}

Message:
${formData.message}
    `;
    
    window.location.href = `mailto:bonirohit@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <AppBar />
      <MainContainer>
        <HeroSection
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <HeroContent
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <HeroTitle>Let&apos;s Build Your Vision</HeroTitle>
            <HeroSubtitle>
              Transform your business with cutting-edge technology. From concept to launch, we deliver excellence.
            </HeroSubtitle>
          </HeroContent>
        </HeroSection>

        <ContentWrapper>
          <FormSection
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FormTitle>Start Your Project</FormTitle>
            <FormSubtitle>Fill out the form and we&apos;ll get back to you within 24 hours</FormSubtitle>
            
            <Form onSubmit={handleSubmit} aria-label="Project inquiry form">
              <FormGroup>
                <Label htmlFor="name">Your Name *</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                  aria-required="true"
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@company.com"
                  required
                  aria-required="true"
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="company">Company Name</Label>
                <Input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your Company Inc."
                  aria-label="Company name (optional)"
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="service">What Service Do You Need? *</Label>
                <Select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  aria-required="true"
                >
                  <option value="">Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="app-development">Mobile App Development</option>
                  <option value="ai-services">AI & Machine Learning</option>
                  <option value="full-stack">Full Stack Solution</option>
                  <option value="consulting">Technical Consulting</option>
                  <option value="other">Other / Not Sure</option>
                </Select>
              </FormGroup>

              <FormGroup>
                <Label htmlFor="budget">Project Budget Range *</Label>
                <Select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  required
                  aria-required="true"
                >
                  <option value="">Select budget range</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k+">$100,000+</option>
                  <option value="flexible">Flexible / Need Quote</option>
                </Select>
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">Tell Us About Your Project *</Label>
                <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your project goals, timeline, and any specific requirements..."
                  rows="6"
                  required
                  aria-required="true"
                />
              </FormGroup>

              <SubmitButton
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Submit project inquiry"
              >
                Send Project Inquiry
              </SubmitButton>
            </Form>
          </FormSection>

          <BenefitsSection
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <BenefitsTitle>Why Choose Us?</BenefitsTitle>
            
            <BenefitsList>
              <BenefitCard
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <BenefitIcon>⚡</BenefitIcon>
                <BenefitCardTitle>Lightning Fast Delivery</BenefitCardTitle>
                <BenefitCardText>
                  We deliver MVP in weeks, not months. Agile methodology ensures rapid iteration.
                </BenefitCardText>
              </BenefitCard>

              <BenefitCard
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <BenefitIcon>🎯</BenefitIcon>
                <BenefitCardTitle>Results-Driven Approach</BenefitCardTitle>
                <BenefitCardText>
                  We focus on ROI and business outcomes, not just pretty designs.
                </BenefitCardText>
              </BenefitCard>

              <BenefitCard
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <BenefitIcon>🛡️</BenefitIcon>
                <BenefitCardTitle>Enterprise-Grade Quality</BenefitCardTitle>
                <BenefitCardText>
                  Secure, scalable, and maintainable code that grows with your business.
                </BenefitCardText>
              </BenefitCard>

              <BenefitCard
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <BenefitIcon>🤝</BenefitIcon>
                <BenefitCardTitle>Dedicated Support</BenefitCardTitle>
                <BenefitCardText>
                  Direct communication with your development team. No middlemen.
                </BenefitCardText>
              </BenefitCard>

              <BenefitCard
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <BenefitIcon>🚀</BenefitIcon>
                <BenefitCardTitle>Latest Technology</BenefitCardTitle>
                <BenefitCardText>
                  React, Next.js, AI/ML, Cloud - we use cutting-edge tech stacks.
                </BenefitCardText>
              </BenefitCard>

              <BenefitCard
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <BenefitIcon>💎</BenefitIcon>
                <BenefitCardTitle>Transparent Pricing</BenefitCardTitle>
                <BenefitCardText>
                  No hidden fees. Clear milestones. You know exactly what you&apos;re paying for.
                </BenefitCardText>
              </BenefitCard>
            </BenefitsList>

            <StatsGrid>
              <StatBox>
                <StatNumber>100+</StatNumber>
                <StatLabel>Projects Delivered</StatLabel>
              </StatBox>
              <StatBox>
                <StatNumber>95%</StatNumber>
                <StatLabel>Client Satisfaction</StatLabel>
              </StatBox>
              <StatBox>
                <StatNumber>24/7</StatNumber>
                <StatLabel>Support Available</StatLabel>
              </StatBox>
            </StatsGrid>

            <ContactInfo>
              <ContactTitle>Prefer to Talk?</ContactTitle>
              <ContactLink href="mailto:bonirohit@gmail.com">
                📧 bonirohit@gmail.com
              </ContactLink>
              <ContactLink href="tel:+1234567890">
                📞 Schedule a Call
              </ContactLink>
            </ContactInfo>
          </BenefitsSection>
        </ContentWrapper>

        <TrustSection
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <TrustTitle>Trusted by Businesses Worldwide</TrustTitle>
          <TrustText>
            We&apos;ve helped startups raise millions, enterprises cut costs by 40%, and scale products to millions of users.
          </TrustText>
          <TrustBadges>
            <Badge>✓ 5-Star Reviews</Badge>
            <Badge>✓ 100% Success Rate</Badge>
            <Badge>✓ On-Time Delivery</Badge>
            <Badge>✓ Money-Back Guarantee</Badge>
          </TrustBadges>
        </TrustSection>
      </MainContainer>
      <Footer />
    </>
  );
};

// Styled Components
const MainContainer = styled.main`
  ${containerStyles};
  padding-top: 120px;
  min-height: 100vh;
`;

const HeroSection = styled(motion.section)`
  text-align: center;
  padding: 100px 0 80px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, ${({ theme }) => theme.colors.gold}15 0%, transparent 70%);
    pointer-events: none;
  }
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.text};
  line-height: 1.1;
  letter-spacing: -0.02em;

  ${({ theme }) => theme.breakpoints.tablet`
    font-size: 3rem;
  `};

  ${({ theme }) => theme.breakpoints.small`
    font-size: 2.25rem;
  `};
`;

const HeroSubtitle = styled.p`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.textSecondary};
  font-weight: 400;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;

  ${({ theme }) => theme.breakpoints.tablet`
    font-size: 1.125rem;
  `};
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  padding: 60px 0 100px;

  ${({ theme }) => theme.breakpoints.tablet`
    grid-template-columns: 1fr;
    gap: 60px;
  `};
`;

const FormSection = styled(motion.div)`
  position: relative;
`;

const FormTitle = styled.h2`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.text};
  letter-spacing: -0.01em;
`;

const FormSubtitle = styled.p`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 40px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
  letter-spacing: 0.02em;
`;

const Input = styled.input`
  padding: 14px 18px;
  font-size: 1rem;
  background: ${({ theme }) => theme.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  color: ${({ theme }) => theme.text};
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.emerald};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.emerald}20;
  }

  &::placeholder {
    color: ${({ theme }) => theme.textSecondary};
    opacity: 0.5;
  }
`;

const Select = styled.select`
  padding: 14px 18px;
  font-size: 1rem;
  background: ${({ theme }) => theme.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  color: ${({ theme }) => theme.text};
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  transition: all 0.2s ease;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.emerald};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.emerald}20;
  }

  option {
    background: ${({ theme }) => theme.backgroundSecondary};
    color: ${({ theme }) => theme.text};
  }
`;

const TextArea = styled.textarea`
  padding: 14px 18px;
  font-size: 1rem;
  background: ${({ theme }) => theme.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  color: ${({ theme }) => theme.text};
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  resize: vertical;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.emerald};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.emerald}20;
  }

  &::placeholder {
    color: ${({ theme }) => theme.textSecondary};
    opacity: 0.5;
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 16px 32px;
  font-size: 1rem;
  font-weight: 600;
  background: ${({ theme }) => theme.colors.emerald};
  color: ${({ theme }) => theme.white};
  border: 2px solid ${({ theme }) => theme.colors.emerald};
  border-radius: 10px;
  cursor: pointer;
  letter-spacing: 0.01em;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.3);
  transition: all 0.25s ease;
  margin-top: 12px;

  &:hover {
    background: ${({ theme }) => theme.colors.emeraldDark};
    border-color: ${({ theme }) => theme.colors.emeraldDark};
    box-shadow: 0 12px 32px rgba(16, 185, 129, 0.4);
  }
`;

const BenefitsSection = styled(motion.div)``;

const BenefitsTitle = styled.h2`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.text};
  letter-spacing: -0.01em;
`;

const BenefitsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 50px;
`;

const BenefitCard = styled(motion.div)`
  padding: 24px;
  background: ${({ theme }) => theme.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  transition: all 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.emerald}60;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    background: ${({ theme }) => theme.backgroundTertiary};
  }
`;

const BenefitIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 16px;
  line-height: 1;
`;

const BenefitCardTitle = styled.h3`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.text};
  letter-spacing: -0.01em;
`;

const BenefitCardText = styled.p`
  font-size: 0.9375rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.textSecondary};
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 50px;

  ${({ theme }) => theme.breakpoints.small`
    grid-template-columns: 1fr;
  `};
`;

const StatBox = styled.div`
  text-align: center;
  padding: 32px 24px;
  background: ${({ theme }) => theme.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
`;

const StatNumber = styled.div`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.emerald};
  margin-bottom: 8px;
  letter-spacing: -0.02em;
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.textSecondary};
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
`;

const ContactInfo = styled.div`
  padding: 32px;
  background: ${({ theme }) => theme.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.colors.emerald}40;
  border-radius: 12px;
  text-align: center;
`;

const ContactTitle = styled.h3`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text};
  letter-spacing: -0.01em;
`;

const ContactLink = styled.a`
  display: block;
  padding: 12px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.emerald};
  text-decoration: none;
  transition: all 0.25s ease;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

  &:hover {
    color: ${({ theme }) => theme.colors.emeraldLight};
  }
`;

const TrustSection = styled(motion.section)`
  text-align: center;
  padding: 80px 40px;
  background: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.border};
  margin-bottom: 96px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ theme }) => theme.colors.emerald};
    opacity: 0.6;
    border-radius: 16px 16px 0 0;
  }
`;

const TrustTitle = styled.h2`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text};
  letter-spacing: -0.02em;
`;

const TrustText = styled.p`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 40px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const TrustBadges = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
`;

const Badge = styled.div`
  padding: 10px 20px;
  background: ${({ theme }) => theme.backgroundTertiary};
  border: 1px solid ${({ theme }) => theme.colors.emerald};
  border-radius: 100px;
  color: ${({ theme }) => theme.colors.emerald};
  font-weight: 600;
  font-size: 0.875rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
`;

export default GetStartedPage;
