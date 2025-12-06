import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';
import { useMenuContext } from '../../context/menu';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [, dispatch] = useMenuContext();
  const lastScrollY = useRef(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      setHidden(currentScrollY > lastScrollY.current && currentScrollY > 400);
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#work', label: 'Work' },
    { href: '#contact', label: 'Contact' },
  ];
  
  return (
    <NavContainer
      $scrolled={scrolled}
      initial={{ y: -100 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <NavInner>
        <LogoWrapper href="/">
          <LogoIcon
            viewBox="0 0 40 40"
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <circle cx="20" cy="20" r="18" strokeWidth="1.5" fill="none" />
            <path d="M12 20h16M20 12v16" strokeWidth="1.5" strokeLinecap="round" />
          </LogoIcon>
          <LogoText>Studio</LogoText>
        </LogoWrapper>
        
        <NavLinks>
          {navItems.map((item, i) => (
            <NavLink key={i} href={item.href}>
              <span>{item.label}</span>
              <NavLinkLine />
            </NavLink>
          ))}
        </NavLinks>
        
        <NavActions>
          <NavCTA href="#contact">
            <span>Start Project</span>
            <NavCTAGlow />
          </NavCTA>
          
          <MenuToggle onClick={() => dispatch({ type: 'TOGGLE_MENU' })}>
            <MenuLine className="top" />
            <MenuLine className="bottom" />
          </MenuToggle>
        </NavActions>
      </NavInner>
    </NavContainer>
  );
};

const NavContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  z-index: 1000;
  background: ${({ $scrolled, theme }) => 
    $scrolled ? theme.glass.background : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => $scrolled ? 'blur(24px)' : 'none'};
  border-bottom: 1px solid ${({ $scrolled, theme }) => 
    $scrolled ? theme.glass.border : 'transparent'};
  transition: background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease;
  
  @media (max-width: 768px) {
    height: 64px;
  }
`;

const NavInner = styled.div`
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  padding: 0 clamp(20px, 4vw, 48px);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
`;

const LogoIcon = styled(motion.svg)`
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
  
  @media (max-width: 480px) {
    display: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  position: relative;
  padding: 8px 16px;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text.secondary};
  transition: color 0.25s ease;
  
  &:hover {
    color: ${({ theme }) => theme.text.primary};
  }
  
  span {
    position: relative;
    z-index: 1;
  }
`;

const NavLinkLine = styled.div`
  position: absolute;
  bottom: 4px;
  left: 16px;
  right: 16px;
  height: 1px;
  background: ${({ theme }) => theme.primary};
  opacity: 0;
  transform: scaleX(0);
  transition: opacity 0.25s ease, transform 0.25s ease;
  
  ${NavLink}:hover & {
    opacity: 1;
    transform: scaleX(1);
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const NavCTA = styled(Link)`
  position: relative;
  padding: 10px 24px;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text.inverse};
  background: ${({ theme }) => theme.gradient.buttonPrimary};
  border-radius: 100px;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  
  span {
    position: relative;
    z-index: 1;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadow.glow};
  }
  
  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 0.8125rem;
  }
`;

const NavCTAGlow = styled.div`
  position: absolute;
  inset: 0;
  background: ${({ theme }) => theme.gradient.buttonHover};
  opacity: 0;
  transition: opacity 0.25s ease;
  
  ${NavCTA}:hover & {
    opacity: 1;
  }
`;

const MenuToggle = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  gap: 6px;
  background: ${({ theme }) => theme.surface.default};
  border-radius: 10px;
  transition: background 0.25s ease;
  
  &:hover {
    background: ${({ theme }) => theme.surface.hover};
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const MenuLine = styled.span`
  width: 18px;
  height: 2px;
  background: ${({ theme }) => theme.text.primary};
  border-radius: 2px;
  transition: transform 0.25s ease;
  
  ${MenuToggle}:hover &.top {
    transform: translateY(-1px);
  }
  
  ${MenuToggle}:hover &.bottom {
    transform: translateY(1px);
  }
`;

export default Navigation;

