import { css } from 'styled-components';

export default css`
  max-width: 1600px;
  padding: 0 80px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    padding: 0 40px;
  }
  
  @media (max-width: 768px) {
    padding: 0 32px;
  }
  
  @media (max-width: 480px) {
    padding: 0 20px;
  }
`;
