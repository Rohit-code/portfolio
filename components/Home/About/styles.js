import styled from 'styled-components';
import { motion } from 'framer-motion';
import containerStyles from '../../../styles/shared/container';
import { secondaryFontStyle } from '../../../styles/shared/text';

export const ContentSection = styled(motion.section)`
  ${containerStyles};
  display: flex;
    flex-direction: column;
  align-items: center;
  margin-bottom: 128px; /* 16-unit spacing */
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;

  ${({ theme }) => theme.breakpoints.tablet`
    margin-bottom: 96px;
  `};
`;

export const TextWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 80px;

  & h2 {
    margin: 0 auto 32px;
    max-width: 900px;
    font-size: 2.5rem;
    line-height: 1.3;
    font-weight: 700;
    color: ${({ theme }) => theme.text};
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    letter-spacing: -0.02em;
  }

  & p {
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 16px;
    line-height: 1.6;
    font-size: 1.125rem;
    color: ${({ theme }) => theme.textSecondary};
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  }

  ${({ theme }) => theme.breakpoints.tablet`
    margin-bottom: 64px;
    
    & h2 {
      font-size: 2rem;
      margin-bottom: 24px;
    }
    
    & p {
      font-size: 1rem;
    }
  `};
`;

export const ServicesWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 96px 0 80px;
  margin: 0 auto;

  & > h3 {
    font-size: 3rem;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.text};
    text-align: center;
    letter-spacing: -0.02em;
    font-weight: 700;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  }
  
  & > p {
    text-align: center;
    font-size: 1.125rem;
    color: ${({ theme }) => theme.textSecondary};
    max-width: 720px;
    margin: 0 auto 64px;
    line-height: 1.6;
    font-weight: 400;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  }

  ${({ theme }) => theme.breakpoints.tablet`
    padding: 80px 0 64px;
    
    & > h3 {
      font-size: 2.25rem;
      margin-bottom: 12px;
    }
    
    & > p {
      font-size: 1rem;
      margin-bottom: 48px;
    }
  `};
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 0;

  ${({ theme }) => theme.breakpoints.medium`
    grid-template-columns: 1fr;
    gap: 20px;
  `};
`;

export const ServiceCard = styled.div`
  position: relative;
  background: ${({ theme }) => theme.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px;
  padding: 40px 32px;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: visible;
  height: 100%;
  display: flex;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ theme }) => theme.colors.emerald};
    border-radius: 16px 16px 0 0;
    opacity: 0;
    transition: opacity 0.25s ease;
  }
  
  &:hover {
    transform: translateY(-6px);
    border-color: ${({ theme }) => theme.colors.emerald}60;
    box-shadow: 
      0 16px 48px rgba(0, 0, 0, 0.16),
      0 0 0 1px ${({ theme }) => theme.colors.emerald}30;
    background: ${({ theme }) => theme.backgroundTertiary};
    
    &::before {
      opacity: 1;
    }
  }
  
  &:active {
    transform: translateY(-4px);
    transition: transform 0.1s ease;
  }
  
  ${({ theme }) => theme.breakpoints.tablet`
    padding: 32px 24px;
  `};
`;

export const ServiceIconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.emerald}10;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 14px;
    padding: 2px;
    background: ${({ theme }) => theme.colors.gradient.emerald};
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.3;
  }
`;

export const ServiceIconSvg = styled.div`
  width: 28px;
  height: 28px;
  color: ${({ theme }) => theme.colors.emerald};
  
  svg {
    width: 100%;
    height: 100%;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

export const ServiceHeader = styled.div`
  margin-bottom: 24px;
`;

export const ServiceTitle = styled.h4`
  font-size: 1.375rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin: 0 0 12px 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  letter-spacing: -0.01em;
  line-height: 1.3;
  
  ${({ theme }) => theme.breakpoints.tablet`
    font-size: 1.25rem;
  `};
`;

export const ServiceDescription = styled.p`
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;
  margin: 0;
  font-weight: 400;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
`;

export const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 24px 0 0 0;
  border-top: 1px solid ${({ theme }) => theme.border};
  padding-top: 20px;
`;

export const ServiceListItem = styled.li`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  transition: all 0.2s ease;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 7px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.emerald};
    box-shadow: 0 0 6px ${({ theme }) => theme.colors.emerald}60;
    transition: transform 0.2s ease;
  }
  
  &:hover {
    color: ${({ theme }) => theme.text};
    padding-left: 24px;

    &::before {
      transform: scale(1.2);
    }
    }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const AccordionToggle = styled.button`
  display: none;
`;

export const ServiceCount = styled.span`
  display: none;
`;

export const AccordionContent = styled.div`
  display: none;
`;

export const TeamWrapper = styled.div`
  margin-top: 96px;
  width: 100%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;

  & h3 {
    margin-bottom: 48px;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    color: ${({ theme }) => theme.text};
    letter-spacing: -0.02em;
  }

  ${({ theme }) => theme.breakpoints.tablet`
    margin-top: 64px;
    
    & h3 {
      font-size: 1.75rem;
      margin-bottom: 32px;
    }
  `};
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;

  ${({ theme }) => theme.breakpoints.tablet`
    grid-template-columns: 1fr;
    gap: 30px;
  `};
`;

export const TeamMember = styled.div`
  margin-bottom: 0;
  padding: 32px;
  border-radius: 16px;
  background: ${({ theme }) => theme.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.border};
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  
  &:hover {
    background: ${({ theme }) => theme.backgroundTertiary};
    border-color: ${({ theme }) => theme.colors.emerald}60;
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.16);
  }
  
  &:active {
    transform: translateY(-2px);
    transition: transform 0.1s ease;
  }

  & h4 {
    margin: 0;
    margin-bottom: 8px;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.3;
    color: ${({ theme }) => theme.text};
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    letter-spacing: -0.01em;
  }

  & p {
    margin: 0;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.emerald};
    line-height: 1.5;
    font-weight: 500;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    letter-spacing: 0;
  }

  ${({ theme }) => theme.breakpoints.tablet`
    margin-bottom: 32px;
    padding: 20px;
    
    & h4 {
      font-size: 1.5rem;
    }
    
    & p {
      font-size: 1rem;
    }
  `};
`;

