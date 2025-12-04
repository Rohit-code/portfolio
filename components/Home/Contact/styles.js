import styled from 'styled-components';
import { motion } from 'framer-motion';
import containerStyles from '../../../styles/shared/container';
import { secondaryFontStyle } from '../../../styles/shared/text';

export const ContactSection = styled(motion.section)`
  ${containerStyles};
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 64px;
  padding: 96px 0 160px;
  border-radius: 0;
  background: transparent;
  transform: translate3d(0, 0, 0);
  position: relative;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: ${({ theme }) => theme.border};
    opacity: 0.3;
  }

  & .column {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  & .contact-text {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    line-height: 1.6;
    display: block;
    margin-bottom: 16px;
    font-size: 0.9375rem;
    font-weight: 400;
    letter-spacing: 0;
    color: ${({ theme }) => theme.textSecondary};
    transition: all 0.3s ease;

    &:last-child {
      margin-bottom: 0;
    }
    }

    & a {
      position: relative;
    color: ${({ theme }) => theme.colors.emerald};
    font-weight: 500;
    font-size: 1rem;
    letter-spacing: 0;
    transition: all 0.3s ease;
    display: inline-block;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      
      &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
      background: ${({ theme }) => theme.colors.emerald};
      transition: width 0.3s ease;
      }
      
      &:hover {
      color: ${({ theme }) => theme.colors.emeraldLight};
        
        &::after {
          width: 100%;
        }
    }
  }

  & address {
    padding: 0;
    line-height: 1.8;
    font-style: normal;
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.textSecondary};
    font-size: 0.9375rem;
    font-weight: 400;
    letter-spacing: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  }

  ${({ theme }) => theme.breakpoints.medium`
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    
    & .column:last-child {
      grid-column: 1 / -1;
      margin-top: 16px;
    }
  `};

  ${({ theme }) => theme.breakpoints.small`
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 80px 0 128px;

    & .column::after {
      display: none;
    }
  `};

  ${({ theme }) => theme.breakpoints.tablet`
    padding: 64px 0 96px;
    gap: 32px;

    & .contact-text {
      font-size: 0.875rem;
      margin-bottom: 12px;
    }
    
    & a {
      font-size: 0.9375rem;
    }
  `};
`;

export const ContactHeading = styled.h3`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 48px;
  color: ${({ theme }) => theme.text};
  letter-spacing: -0.01em;
  line-height: 1.2;
  
  ${({ theme }) => theme.breakpoints.tablet`
    font-size: 1.75rem;
    margin-bottom: 32px;
  `};
`;

export const ContactLabel = styled.span`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.emerald};
  margin-bottom: 20px;
  display: block;
  
  ${({ theme }) => theme.breakpoints.tablet`
    font-size: 0.6875rem;
    margin-bottom: 16px;
  `};
`;
