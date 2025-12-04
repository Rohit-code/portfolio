import styled from 'styled-components';
import { motion } from 'framer-motion';
import containerStyles from '../../../styles/shared/container';
import { secondaryFontStyle } from '../../../styles/shared/text';
import DefaultMenuButton from '../../MenuButton';

export const ContentSection = styled(motion.section)`
  ${containerStyles};
  position: relative;
  margin-bottom: 128px; /* 16-unit spacing */

  ${({ theme }) => theme.breakpoints.tablet`
    margin-bottom: 96px;
  `};
`;

export const ProjectAnchor = styled(motion.a)`
  display: block;
  width: 100%;
  height: 600px;
  margin: 0 0 128px;
  border-radius: 20px;
  overflow: visible;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.4) 100%);
    pointer-events: none;
    border-radius: 20px;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadowLg};
  }

  ${({ theme }) => theme.breakpoints.tablet`
    height: 400px;
    margin-bottom: 96px;
  `};
`;

export const ProjectInfo = styled(motion.div)`
  margin-left: 8.333%;
  width: 83.333%;
  position: relative;

  & h3,
  & .project-info {
    position: absolute;
    top: 80px;
    z-index: 1;
  }

  & h3 {
    color: ${({ theme }) => theme.colors.emeraldLight};
    text-shadow: 0 2px 12px rgba(0, 0, 0, 0.6);
    font-size: 1rem;
    letter-spacing: 0.05em;
    font-weight: 600;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    text-transform: uppercase;
  }

  & .project-info {
    right: 0;

    & h4 {
      display: inline-block;
      font-size: 0.875rem;
      line-height: 1.5;
      margin-left: 32px;
      color: ${({ theme }) => theme.colors.platinum};
      text-shadow: 0 2px 12px rgba(0, 0, 0, 0.6);
      font-weight: 500;
      letter-spacing: 0;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

      &:first-child {
        margin-left: 0;
      }
    }
  }

  ${({ theme }) => theme.breakpoints.small`
    margin-left: 0;
    width: 83.333%;

    & .project-info {
      display: none;
    }
  `};

  ${({ theme }) => theme.breakpoints.tablet`
    & h3 {
      font-size: 1.125rem;
      line-height: 1.2777777778;
      top: 17px;
    }
  `};
`;

export const ProjectTitle = styled(motion.h1)`
  position: absolute;
  top: 300px;
  left: -3px;
  z-index: 1;
  color: ${({ theme }) => theme.white};
  letter-spacing: -0.02em;
  filter: drop-shadow(0 4px 16px rgba(0, 0, 0, 0.6));
  font-size: 5.5rem;
  line-height: 0.9;
  max-width: 90%;
  font-weight: 800;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  & .arrow {
    display: block;
    overflow: visible;
    margin: 20px 0 0 3px;
    height: 57px;
    width: 101px;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    filter: drop-shadow(0 0 10px rgba(16, 185, 129, 0.5));

    & svg path {
      fill: ${({ theme }) => theme.colors.emerald};
    }
  }

  ${({ theme }) => theme.breakpoints.small`
    font-size: 4.5rem;
    top: 260px;
  `};

  ${({ theme }) => theme.breakpoints.tablet`
    top: 220px;
    left: 0;
    font-size: 3.25rem;
    line-height: 0.9;

    & .arrow {
      margin: 10px 0 0 2px;
      width: 76px;
      height: 43px;
    }
  `};
`;

export const VideoPreview = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;
  height: 600px;
  margin: 0;
  border-radius: 20px;

  & video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${({ theme }) => theme.breakpoints.small`
    width: calc(100% + 64px);
    margin-left: -32px;
  `};

  ${({ theme }) => theme.breakpoints.tablet`
    height: 400px;
  `};
`;

export const MenuContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  ${({ theme }) => theme.breakpoints.tablet`
    justify-content: flex-start;
  `};
`;

export const MenuButton = styled(DefaultMenuButton)`
  width: calc(25% - 30px);
  background: ${({ theme }) => theme.colors.emerald};
  box-shadow: 0 8px 30px rgba(16, 185, 129, 0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.colors.emerald};
  position: relative;
  overflow: visible;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 32px;
  
  &:hover {
    transform: translateY(-4px);
    background: ${({ theme }) => theme.colors.emeraldDark};
    border-color: ${({ theme }) => theme.colors.emeraldDark};
    box-shadow: 0 12px 40px rgba(16, 185, 129, 0.5);
  }

  &::before,
  &::after {
    display: none !important;
  }

  & span {
    position: static !important;
    opacity: 1 !important;
    transform: none !important;
    color: #FFFFFF !important;
    font-weight: 700;
    z-index: 1;
    font-size: 1.125rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    display: block !important;
  }

  ${({ theme }) => theme.breakpoints.medium`
    width: calc(33.333% - 30px);
  `};

  ${({ theme }) => theme.breakpoints.small`
    width: 100%;
    max-width: 235px;

    & span {
      display: inline;
    }
  `};

  ${({ theme }) => theme.breakpoints.tablet`
    height: 47px;
    max-width: 215px;
    padding: 12px 20px;

    & span {
      font-size: 1.125rem;
      line-height: 1.2777777778;
    }
  `};
`;
