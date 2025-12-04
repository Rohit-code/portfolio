import styled from 'styled-components';
import { secondaryFontStyle } from '../../styles/shared/text';

export const Button = styled.button`
  position: relative;
  display: block;
  text-align: left;
  width: 75px;
  height: 63px;
  padding: 20px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 12px;
  
  &:hover {
    background: ${({ theme }) => theme.surface};
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 20px;
    width: 35px;
    height: 7px;
    display: block;
    transform: translateY(-50%);
    background: ${({ theme }) => theme.colors.emerald};
    border-radius: 4px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &::before {
    margin-top: -8px;
  }

  &::after {
    margin-top: 8px;
  }

  &:hover::before {
    width: 40px;
  }

  &:hover::after {
    width: 30px;
  }

  & span {
    position: absolute;
    top: 50%;
    right: 80px;
    transform: translateY(-50%);
    opacity: 0;
    transition: opacity 0.3s ease;
    will-change: opacity;
    pointer-events: none;
    color: ${({ theme }) => theme.colors.emerald};
    font-weight: 600;
    letter-spacing: 0.02em;
    font-size: 0.875rem;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    text-transform: uppercase;
  }

  &:hover span {
    opacity: 1;
  }

  ${({ theme }) => theme.breakpoints.small`
    & span {
      display: none;
    }
  `};

  ${({ theme }) => theme.breakpoints.tablet`
    width: 66px;

    &::before,
    &::after {
      width: 26px;
      height: 5px;
    }

    &::before {
      margin-top: -6px;
    }

    &::after {
      margin-top: 6px;
    }
  `};
`;
