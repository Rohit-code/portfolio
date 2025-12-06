import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'hello@studio.com', href: 'mailto:hello@studio.com' },
    { icon: '📞', label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  ];
  
  const socials = [
    { name: 'Twitter', url: '#', icon: '𝕏' },
    { name: 'LinkedIn', url: '#', icon: 'in' },
    { name: 'GitHub', url: '#', icon: '⌨' },
    { name: 'Dribbble', url: '#', icon: '◉' },
  ];
  
  return (
    <Section id="contact">
      <Container>
        <Grid>
          <Info>
            <Heading
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Let's build something <GradientText>amazing together</GradientText>
            </Heading>
            
            <ContactCards>
              {contactInfo.map((info, i) => (
                <ContactCard
                  key={i}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ y: -4, borderColor: 'rgba(139, 92, 246, 0.6)' }}
                >
                  <CardIcon>{info.icon}</CardIcon>
                  <CardContent>
                    <CardLabel>{info.label}</CardLabel>
                    <CardValue>{info.value}</CardValue>
                  </CardContent>
                </ContactCard>
              ))}
            </ContactCards>
            
            <SocialLinks>
              {socials.map((social, i) => (
                <SocialLink
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.05 }}
                >
                  {social.icon}
                </SocialLink>
              ))}
            </SocialLinks>
          </Info>
          
          <FormWrapper
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="service">Service</Label>
                <Select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile Development</option>
                  <option value="ai">AI Solutions</option>
                  <option value="consulting">Consulting</option>
                </Select>
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="message">Message</Label>
                <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows="5"
                  required
                />
              </FormGroup>
              
              <SubmitButton
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Send Message</span>
                <span>→</span>
              </SubmitButton>
            </Form>
          </FormWrapper>
        </Grid>
      </Container>
      
      <Glow />
    </Section>
  );
};

const Section = styled.section`
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

const Info = styled.div``;

const Heading = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 40px;
`;

const GradientText = styled.span`
  background: ${({ theme }) => theme.gradient.textAccent};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ContactCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
`;

const ContactCard = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: ${({ theme }) => theme.surface.default};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px;
  text-decoration: none;
  transition: border-color 0.3s ease;
`;

const CardIcon = styled.div`
  font-size: 1.5rem;
`;

const CardContent = styled.div``;

const CardLabel = styled.div`
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.text.tertiary};
  margin-bottom: 4px;
`;

const CardValue = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text.primary};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 12px;
`;

const SocialLink = styled(motion.a)`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.surface.default};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  font-size: 1rem;
  color: ${({ theme }) => theme.text.secondary};
  text-decoration: none;
  transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.surface.hover};
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.borderAccent};
  }
`;

const FormWrapper = styled(motion.div)``;

const Form = styled.form`
  padding: 40px;
  background: ${({ theme }) => theme.glass.background};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.glass.border};
  border-radius: 24px;
  
  @media (max-width: 600px) {
    padding: 28px 20px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 24px;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text.secondary};
  margin-bottom: 8px;
`;

const inputStyles = `
  width: 100%;
  padding: 14px 16px;
  background: ${({ theme }) => theme.surface.default};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  font-family: inherit;
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.text.primary};
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  
  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primaryMuted};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.text.muted};
  }
`;

const Input = styled.input`
  ${inputStyles}
`;

const Select = styled.select`
  ${inputStyles}
`;

const TextArea = styled.textarea`
  ${inputStyles}
  resize: vertical;
  min-height: 120px;
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 32px;
  background: ${({ theme }) => theme.gradient.buttonPrimary};
  border: none;
  border-radius: 12px;
  font-size: 0.9375rem;
  font-weight: 600;
  color: white;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.glow};
  }
`;

const Glow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 800px;
  background: ${({ theme }) => theme.gradient.meshViolet};
  filter: blur(150px);
  opacity: 0.2;
  pointer-events: none;
`;

export default Contact;

