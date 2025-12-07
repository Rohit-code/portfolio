import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    company: {
      title: 'Company',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Blog', href: '/blog' },
        { label: 'Press', href: '/press' },
      ],
    },
    services: {
      title: 'Services',
      links: [
        { label: 'Web Development', href: '#services' },
        { label: 'Mobile Apps', href: '#services' },
        { label: 'AI Solutions', href: '#services' },
        { label: 'Consulting', href: '#services' },
      ],
    },
    resources: {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '/docs' },
        { label: 'Case Studies', href: '#work' },
        { label: 'FAQs', href: '/faq' },
        { label: 'Support', href: '/support' },
      ],
    },
  };
  
  const socials = [
    { name: 'Twitter', url: '#', icon: '𝕏' },
    { name: 'LinkedIn', url: '#', icon: 'in' },
    { name: 'GitHub', url: '#', icon: '⌨' },
    { name: 'Dribbble', url: '#', icon: '◉' },
  ];
  
  return (
    <FooterSection>
      <Container>
        <FooterTop>
          <BrandColumn>
            <LogoWrapper>
              <LogoIcon viewBox="0 0 40 40">
                <circle cx="20" cy="20" r="18" strokeWidth="1.5" fill="none" />
                <path d="M12 20h16M20 12v16" strokeWidth="1.5" strokeLinecap="round" />
              </LogoIcon>
              <LogoText>Studio</LogoText>
            </LogoWrapper>
            
            <BrandTagline>
              We build digital products that make a difference.
            </BrandTagline>
            
            <SocialLinks>
              {socials.map((social, i) => (
                <SocialLink
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, borderColor: 'rgba(139, 92, 246, 0.6)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </SocialLink>
              ))}
            </SocialLinks>
          </BrandColumn>
          
          <LinksColumns>
            {Object.entries(footerLinks).map(([key, section]) => (
              <LinkColumn key={key}>
                <ColumnTitle>{section.title}</ColumnTitle>
                <LinkList>
                  {section.links.map((link, i) => (
                    <LinkItem key={i}>
                      <FooterLink href={link.href}>
                        {link.label}
                      </FooterLink>
                    </LinkItem>
                  ))}
                </LinkList>
              </LinkColumn>
            ))}
          </LinksColumns>
        </FooterTop>
        
        <Divider />
        
        <FooterBottom>
          <Copyright>
            © {currentYear} Studio. All rights reserved.
          </Copyright>
          
          <LegalLinks>
            <LegalLink href="/privacy">Privacy Policy</LegalLink>
            <LegalLink href="/terms">Terms of Service</LegalLink>
          </LegalLinks>
          
          <Location>
            <LocationIcon>📍</LocationIcon>
            Visakhapatnam, India
          </Location>
        </FooterBottom>
      </Container>
      
      <FooterGlow />
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  position: relative;
  padding: clamp(60px, 8vw, 100px) 0 clamp(24px, 4vw, 40px);
  background: ${({ theme }) => theme.background};
  border-top: 1px solid ${({ theme }) => theme.border};
  overflow: hidden;
`;

const Container = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(24px, 5vw, 64px);
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 2fr;
  gap: 80px;
  margin-bottom: 60px;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

const BrandColumn = styled.div``;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`;

const LogoIcon = styled.svg`
  width: 36px;
  height: 36px;
  stroke: ${({ theme }) => theme.primary};
  fill: none;
`;

const LogoText = styled.span`
  font-family: 'Satoshi', sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.text.primary};
`;

const BrandTagline = styled.p`
  font-size: 0.9375rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text.secondary};
  max-width: 280px;
  margin-bottom: 28px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 12px;
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.text.secondary};
  text-decoration: none;
  transition: background 0.3s ease, color 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.surface.hover};
    color: ${({ theme }) => theme.primary};
  }
`;

const LinksColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(24px, 5vw, 48px);
  
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
  
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const LinkColumn = styled.div``;

const ColumnTitle = styled.h4`
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 20px;
`;

const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const LinkItem = styled.li``;

const FooterLink = styled(Link)`
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.text.secondary};
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.border};
  margin-bottom: 32px;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  
  @media (max-width: 700px) {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
  
  @media (max-width: 400px) {
    gap: 8px;
  }
`;

const Copyright = styled.p`
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.text.tertiary};
`;

const LegalLinks = styled.div`
  display: flex;
  gap: clamp(12px, 3vw, 24px);
  flex-wrap: wrap;
  justify-content: center;
  
  @media (max-width: 400px) {
    gap: 12px;
  }
`;

const LegalLink = styled(Link)`
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.text.tertiary};
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.text.tertiary};
`;

const LocationIcon = styled.span`
  font-size: 0.875rem;
`;

const FooterGlow = styled.div`
  position: absolute;
  bottom: -200px;
  left: 50%;
  transform: translateX(-50%);
  width: clamp(300px, 60vw, 600px);
  height: clamp(200px, 40vw, 400px);
  background: ${({ theme }) => theme.gradient.meshViolet};
  filter: blur(120px);
  opacity: 0.3;
  pointer-events: none;
  
  @media (max-width: 600px) {
    filter: blur(80px);
  }
`;

export default Footer;

