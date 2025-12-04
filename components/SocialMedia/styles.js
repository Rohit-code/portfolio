import styled from 'styled-components';
import { secondaryFontStyle } from '../../styles/shared/text';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: -10px;

  ${({ theme }) => theme.breakpoints.small`
    margin-left: -10px;
  `};
`;

export const Link = styled.a`
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  color: ${({ theme }) => theme.colors.emerald};
  margin-bottom: 12px;
  border-radius: 10px;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${({ theme }) => theme.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.border};

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.emerald};
    border-color: ${({ theme }) => theme.colors.emerald};
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(16, 185, 129, 0.3);
    
    svg path,
    svg g {
      fill: ${({ theme }) => theme.white};
    }
  }
  
  &:active {
    transform: translateY(0);
    transition: transform 0.1s ease;
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`;
