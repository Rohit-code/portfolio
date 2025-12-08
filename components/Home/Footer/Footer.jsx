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
            <LegalLink href="/privacy">Privacy</LegalLink>
            <LegalLink href="/terms">Terms</LegalLink>
          </LegalLinks>
          
          <Location>
            <LocationIcon>📍</LocationIcon>
            <span>Visakhapatnam, India</span>
          </Location>
        </FooterBottom>
      </Container>
      
      <FooterGlow />
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  position: relative;
  padding: 48px 0 24px;
  background: ${({ theme }) => theme.background};
  border-top: 1px solid ${({ theme }) => theme.border};
  overflow: hidden;
  
  @media (min-width: 768px) {
    padding: 80px 0 32px;
  }
  
  @media (min-width: 1024px) {
    padding: 100px 0 40px;
  }
`;

const Container = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (min-width: 480px) {
    padding: 0 24px;
  }
  
  @media (min-width: 768px) {
    padding: 0 32px;
  }
  
  @media (min-width: 1024px) {
    padding: 0 64px;
  }
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 40px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 48px;
    margin-bottom: 60px;
  }
  
  @media (min-width: 1024px) {
    gap: 80px;
  }
`;

const BrandColumn = styled.div`
  @media (min-width: 768px) {
    flex: 0 0 auto;
    max-width: 280px;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  
  @media (min-width: 768px) {
    gap: 12px;
    margin-bottom: 20px;
  }
`;

const LogoIcon = styled.svg`
  width: 32px;
  height: 32px;
  stroke: ${({ theme }) => theme.primary};
  fill: none;
  
  @media (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

const LogoText = styled.span`
  font-family: 'Satoshi', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.text.primary};
  
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const BrandTagline = styled.p`
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text.secondary};
  margin-bottom: 20px;
  
  @media (min-width: 768px) {
    font-size: 0.9375rem;
    margin-bottom: 28px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
  
  @media (min-width: 768px) {
    gap: 12px;
  }
`;

const SocialLink = styled(motion.a)`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.text.secondary};
  text-decoration: none;
  transition: background 0.3s ease, color 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.surface.hover};
    color: ${({ theme }) => theme.primary};
  }
  
  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    font-size: 0.875rem;
  }
`;

const LinksColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px 24px;
  
  @media (min-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
  
  @media (min-width: 768px) {
    flex: 1;
    gap: 48px;
  }
`;

const LinkColumn = styled.div``;

const ColumnTitle = styled.h4`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 16px;
  
  @media (min-width: 768px) {
    font-size: 0.8125rem;
    margin-bottom: 20px;
  }
`;

const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  @media (min-width: 768px) {
    gap: 12px;
  }
`;

const LinkItem = styled.li``;

const FooterLink = styled(Link)`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.text.secondary};
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  
  @media (min-width: 768px) {
    font-size: 0.9375rem;
  }
`;

const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.border};
  margin-bottom: 24px;
  
  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
    gap: 24px;
  }
`;

const Copyright = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.text.tertiary};
  order: 2;
  
  @media (min-width: 768px) {
    font-size: 0.8125rem;
    order: 0;
  }
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 20px;
  order: 1;
  
  @media (min-width: 768px) {
    gap: 24px;
    order: 0;
  }
`;

const LegalLink = styled(Link)`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.text.tertiary};
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.text.secondary};
  }
  
  @media (min-width: 768px) {
    font-size: 0.8125rem;
  }
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.text.tertiary};
  order: 0;
  
  @media (min-width: 768px) {
    font-size: 0.8125rem;
    order: 0;
  }
`;

const LocationIcon = styled.span`
  font-size: 0.875rem;
`;

const FooterGlow = styled.div`
  position: absolute;
  bottom: -150px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 200px;
  background: ${({ theme }) => theme.gradient.meshViolet};
  filter: blur(80px);
  opacity: 0.3;
  pointer-events: none;
  
  @media (min-width: 768px) {
    width: 500px;
    height: 300px;
    bottom: -200px;
    filter: blur(120px);
  }
`;

export default Footer;