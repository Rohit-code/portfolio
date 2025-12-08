import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import styled from 'styled-components';
import { useMenuContext } from '../../context/menu';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuState, dispatch] = useMenuContext();
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const router = useRouter();
  
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
  
  const handleMenuClick = () => {
    dispatch({ type: 'TOGGLE_MENU' });
  };
  
  const handleNavClick = (e, href) => {
    dispatch({ type: 'CLOSE_MENU' });
    
    // If it's an anchor link and we're not on the homepage, navigate to homepage first
    if (href?.startsWith('#')) {
      if (pathname !== '/') {
        e.preventDefault();
        // Navigate to homepage with hash, then scroll will happen via SmoothScroll
        router.push(`/${href}`);
        return;
      }
    }
  };
  
  return (
    <>
      <NavContainer
        $scrolled={scrolled}
        initial={{ y: -100 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <NavInner>
          <LogoWrapper href="/" onClick={handleNavClick}>
            <LogoIcon
              viewBox="0 0 40 40"
              whileHover={{ rotate: 90 }}
              whileTap={{ rotate: 45, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <circle cx="20" cy="20" r="18" strokeWidth="1.5" fill="none" />
              <path d="M12 20h16M20 12v16" strokeWidth="1.5" strokeLinecap="round" />
            </LogoIcon>
            <LogoText>Studio</LogoText>
          </LogoWrapper>
          
          <NavLinks>
            {navItems.map((item, i) => (
              <NavLink 
                key={i} 
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                <span>{item.label}</span>
                <NavLinkLine />
              </NavLink>
            ))}
          </NavLinks>
          
          <NavActions>
            <NavCTA 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              <span>Start Project</span>
              <NavCTAGlow />
            </NavCTA>
            
            <MenuToggle 
              onClick={handleMenuClick}
              $isOpen={menuState.isOpen}
              aria-label="Toggle menu"
            >
              <MenuLine className="top" $isOpen={menuState.isOpen} />
              <MenuLine className="middle" $isOpen={menuState.isOpen} />
              <MenuLine className="bottom" $isOpen={menuState.isOpen} />
            </MenuToggle>
          </NavActions>
        </NavInner>
      </NavContainer>
      
      <MobileMenu $isOpen={menuState.isOpen}>
        <MobileMenuOverlay 
          onClick={handleMenuClick}
          style={{ opacity: menuState.isOpen ? 1 : 0 }}
        />
        <MobileMenuContent
          initial={false}
          animate={{ x: menuState.isOpen ? 0 : '100%' }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <MobileMenuHeader>
            <MobileMenuTitle>Menu</MobileMenuTitle>
            <MobileMenuClose onClick={handleMenuClick}>✕</MobileMenuClose>
          </MobileMenuHeader>
          <MobileNavList>
            {navItems.map((item, i) => (
              <MobileNavItem key={i}>
                <MobileNavLink 
                  href={item.href} 
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </MobileNavLink>
              </MobileNavItem>
            ))}
          </MobileNavList>
          <MobileMenuCTA 
            href="#contact" 
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Start Project
          </MobileMenuCTA>
        </MobileMenuContent>
      </MobileMenu>
    </>
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
  padding: 0 clamp(16px, 4vw, 48px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 400px) {
    padding: 0 12px;
  }
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
  padding: clamp(8px, 1.5vw, 10px) clamp(16px, 3vw, 24px);
  font-size: clamp(0.8125rem, 1.5vw, 0.875rem);
  font-weight: 500;
  color: ${({ theme }) => theme.text.inverse};
  background: ${({ theme }) => theme.gradient.buttonPrimary};
  border-radius: 100px;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  white-space: nowrap;
  
  span {
    position: relative;
    z-index: 1;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadow.glow};
  }
  
  @media (max-width: 480px) {
    padding: 8px 14px;
    font-size: 0.75rem;
  }
  
  @media (max-width: 400px) {
    padding: 6px 12px;
    font-size: 0.6875rem;
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
  gap: 5px;
  background: ${({ theme }) => theme.surface.default};
  border-radius: 10px;
  transition: background 0.25s ease;
  border: none;
  cursor: pointer;
  position: relative;
  z-index: 1001;
  
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
  background: ${({ theme, $isOpen }) => $isOpen ? theme.text.primary : theme.text.primary};
  border-radius: 2px;
  transition: all 0.3s ease;
  position: relative;
  
  ${MenuToggle} & {
    &.top {
      transform: ${({ $isOpen }) => $isOpen ? 'rotate(45deg) translateY(7px)' : 'none'};
    }
    &.middle {
      opacity: ${({ $isOpen }) => $isOpen ? 0 : 1};
      transform: ${({ $isOpen }) => $isOpen ? 'translateX(-10px)' : 'none'};
    }
    &.bottom {
      transform: ${({ $isOpen }) => $isOpen ? 'rotate(-45deg) translateY(-7px)' : 'none'};
    }
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  pointer-events: ${({ $isOpen }) => $isOpen ? 'auto' : 'none'};
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileMenuOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  transition: opacity 0.3s ease;
`;

const MobileMenuContent = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 280px;
  max-width: 85vw;
  background: ${({ theme }) => theme.background};
  border-left: 1px solid ${({ theme }) => theme.border};
  padding: 24px;
  display: flex;
  flex-direction: column;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.3);
`;

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const MobileMenuTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text.primary};
`;

const MobileMenuClose = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.surface.default};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.text.primary};
  cursor: pointer;
  transition: background 0.2s ease;
  
  &:hover {
    background: ${({ theme }) => theme.surface.hover};
  }
`;

const MobileNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

const MobileNavItem = styled.li``;

const MobileNavLink = styled(Link)`
  display: block;
  padding: 16px;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text.secondary};
  border-radius: 12px;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${({ theme }) => theme.surface.default};
    color: ${({ theme }) => theme.text.primary};
  }
`;

const MobileMenuCTA = styled(Link)`
  display: block;
  padding: 16px 24px;
  margin-top: auto;
  text-align: center;
  background: ${({ theme }) => theme.gradient.buttonPrimary};
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:active {
    transform: scale(0.98);
  }
`;

export default Navigation;

