import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  /* CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    /* Theme CSS Variables - these transition smoothly */
    --theme-primary: ${({ theme }) => theme.primary};
    --theme-background: ${({ theme }) => theme.background};
    --theme-transition-duration: 0.8s;
    --theme-transition-easing: cubic-bezier(0.22, 1, 0.36, 1);
    
    /* Animation timing */
    --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
    --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
    --ease-in-out-quart: cubic-bezier(0.76, 0, 0.24, 1);
    --spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: clamp(14px, 2vw, 16px);
    font-weight: 400;
    line-height: 1.6;
    color: ${({ theme }) => theme.text.primary};
    background: ${({ theme }) => theme.background};
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    
    /* Smooth background transition */
    transition: background-color var(--theme-transition-duration) var(--theme-transition-easing);
  }
  
  /* Prevent horizontal scroll on all devices */
  html, body {
    max-width: 100%;
    overflow-x: hidden;
  }
  
  /* Ensure images and media are responsive */
  img, video, iframe, embed, object {
    max-width: 100%;
    height: auto;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Satoshi', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.text.primary};
  }

  h1 { font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 700; }
  h2 { font-size: clamp(2rem, 4vw, 3rem); }
  h3 { font-size: clamp(1.5rem, 3vw, 2rem); }
  h4 { font-size: 1.25rem; }
  h5 { font-size: 1.125rem; }
  h6 { font-size: 1rem; }

  p {
    color: ${({ theme }) => theme.text.secondary};
    line-height: 1.7;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  button {
    font-family: inherit;
    border: none;
    background: none;
    cursor: pointer;
    outline: none;
  }

  img, video {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ul, ol {
    list-style: none;
  }

  /* Focus Styles */
  *:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 2px;
    border-radius: 4px;
  }

  /* Selection */
  ::selection {
    background: ${({ theme }) => theme.primaryMuted};
    color: ${({ theme }) => theme.text.primary};
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.backgroundSecondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.border};
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.backgroundSecondary};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.borderStrong};
  }

  /* Cursor - only for non-touch devices */
  @media (hover: hover) and (pointer: fine) {
    * {
      cursor: none !important;
    }
  }

  /* Reduced Motion */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
    
    :root {
      --theme-transition-duration: 0ms;
    }
  }

  /* Utility Classes */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .gradient-text {
    background: ${({ theme }) => theme.gradient.textAccent};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .glass {
    background: ${({ theme }) => theme.glass.background};
    backdrop-filter: blur(${({ theme }) => theme.glass.blur});
    -webkit-backdrop-filter: blur(${({ theme }) => theme.glass.blur});
    border: 1px solid ${({ theme }) => theme.glass.border};
  }
  
  /* Theme transition classes for components that need smooth color changes */
  .theme-transition {
    transition: 
      background-color var(--theme-transition-duration) var(--theme-transition-easing),
      border-color var(--theme-transition-duration) var(--theme-transition-easing),
      box-shadow var(--theme-transition-duration) var(--theme-transition-easing);
  }
  
  .theme-transition-fast {
    transition: 
      background-color 0.4s var(--theme-transition-easing),
      border-color 0.4s var(--theme-transition-easing),
      box-shadow 0.4s var(--theme-transition-easing);
  }
`;