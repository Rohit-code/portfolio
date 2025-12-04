import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }
  body {
    line-height: 1.7;
    font-size: 17px;
    font-size: 1.0625rem;
    font-weight: 300;
    overscroll-behavior: none;
    height: auto;
    overflow-y: visible;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background 0.5s cubic-bezier(0.4, 0, 0.2, 1), 
                color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  /* http://www.paulirish.com/2012/box-sizing-border-box-ftw/ (2015/04/28)*/
  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
    cursor: none;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  address {
    font-style: normal;
  }

  h1 {
    margin: 0;
    font-size: 7.5rem;
    line-height: 0.9;
    font-weight: 800;
    letter-spacing: -0.02em;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  }

  h2 {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.01em;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  }

  h3 {
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -0.01em;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: -0.01em;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  }

  h5 {
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  }

  h6 {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  }

  p {
    line-height: 1.6;
    letter-spacing: 0;
    font-weight: 400;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  }

  a {
    display: inline-block;
    color: inherit;
    text-decoration: none;
    cursor: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  button {
    appearance: none;
    padding: 0;
    background: 0 0;
    border: none;
    color: inherit;
    outline: 0;
    cursor: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Professional focus indicators for accessibility */
  *:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.emerald};
    outline-offset: 4px;
    border-radius: 4px;
  }

  a:focus-visible,
  button:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.emerald};
    outline-offset: 4px;
  }

  /* Only hide cursor for mouse users */
  @media (pointer: fine) {
    html {
      cursor: none;
    }
    a, button {
      cursor: none;
    }
  }

  @media (pointer: coarse) {
    html {
      cursor: auto;
    }
    a {
      cursor: pointer;
    }
    button {
      cursor: pointer;
    }
  }

  /* Respect user motion preferences */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Professional selection styles */
  ::selection {
    background: ${({ theme }) => theme.colors.emerald};
    color: ${({ theme }) => theme.white};
    text-shadow: none;
  }

  ::-moz-selection {
    background: ${({ theme }) => theme.colors.emerald};
    color: ${({ theme }) => theme.white};
    text-shadow: none;
  }
  
  /* Premium shimmer animation */
  @keyframes shimmer {
    0% {
      background-position: 0% center;
    }
    100% {
      background-position: 200% center;
    }
  }

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  ${({ theme }) => theme.breakpoints.small`
    a {
      cursor:pointer;
    }

    button {
      cursor:pointer;
    }
  `};
`;
