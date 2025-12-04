import styled from 'styled-components';
import { motion } from 'framer-motion';
import containerStyles from '../../../styles/shared/container';

export const ContentSection = styled(motion.section)`
  ${containerStyles};
  margin-bottom: 128px; /* 16-unit spacing */

  ${({ theme }) => theme.breakpoints.tablet`
    margin-bottom: 96px;
  `};
`;

export const TextWrapper = styled.div`
  margin-left: 0;
  width: 100%;
  max-width: 1400px;

  ${({ theme }) => theme.breakpoints.small`
    width: 100%;
    margin-left: 0;
  `};
`;

export const Text = styled.h2`
  margin: 0;
  font-size: 2.5rem;
  line-height: 1.4;
  font-weight: 400;
  max-width: 900px;
  color: ${({ theme }) => theme.text};
  letter-spacing: -0.01em;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  
  & strong {
    color: ${({ theme }) => theme.colors.emerald};
    font-weight: 700;
  }

  ${({ theme }) => theme.breakpoints.tablet`
    font-size: 1.75rem;
    line-height: 1.4;

    & br {
      display: none;
    }
  `};
`;
