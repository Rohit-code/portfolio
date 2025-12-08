import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  /* CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    scroll-behavior: smooth;
    
    /* Prevent text size adjustment on orientation change */
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.6;
    color: ${({ theme }) => theme.text.primary};
    background: ${({ theme }) => theme.background};
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    
    // REMOVED the transition property - let ripple handle the visual effect
    
    -webkit-overflow-scrolling: touch;
    
    @media (min-width: 480px) {
      font-size: 15px;
    }
    
    @media (min-width: 768px) {
      font-size: 16px;
    }
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
    display: block;
  }
  
  /* Make sure canvas elements don't overflow */
  canvas {
    max-width: 100%;
  }

  /* Typography - Mobile First */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Satoshi', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.text.primary};
    /* Prevent long words from breaking layout on mobile */
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
  }

  h1 { 
    font-size: 2rem; 
    font-weight: 700;
    
    @media (min-width: 480px) { font-size: 2.5rem; }
    @media (min-width: 768px) { font-size: 3rem; }
    @media (min-width: 1024px) { font-size: 3.5rem; }
    @media (min-width: 1280px) { font-size: 4rem; }
  }
  
  h2 { 
    font-size: 1.5rem;
    
    @media (min-width: 480px) { font-size: 1.75rem; }
    @media (min-width: 768px) { font-size: 2rem; }
    @media (min-width: 1024px) { font-size: 2.5rem; }
    @media (min-width: 1280px) { font-size: 3rem; }
  }
  
  h3 { 
    font-size: 1.25rem;
    
    @media (min-width: 480px) { font-size: 1.375rem; }
    @media (min-width: 768px) { font-size: 1.5rem; }
    @media (min-width: 1024px) { font-size: 1.75rem; }
    @media (min-width: 1280px) { font-size: 2rem; }
  }
  
  h4 { 
    font-size: 1.125rem;
    @media (min-width: 768px) { font-size: 1.25rem; }
  }
  
  h5 { 
    font-size: 1rem;
    @media (min-width: 768px) { font-size: 1.125rem; }
  }
  
  h6 { 
    font-size: 0.9375rem;
    @media (min-width: 768px) { font-size: 1rem; }
  }

  p {
    color: ${({ theme }) => theme.text.secondary};
    line-height: 1.7;
    font-size: 0.9375rem;
    
    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;
    /* Better tap targets on mobile */
    -webkit-tap-highlight-color: transparent;
  }

  button {
    font-family: inherit;
    border: none;
    background: none;
    cursor: pointer;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    /* Minimum touch target size */
    min-height: 44px;
    min-width: 44px;
    
    @media (min-width: 768px) {
      min-height: unset;
      min-width: unset;
    }
  }

  ul, ol {
    list-style: none;
  }
  
  /* Better input styling */
  input, textarea, select {
    font-family: inherit;
    font-size: 16px; /* Prevents zoom on iOS */
    -webkit-appearance: none;
    appearance: none;
    
    @media (min-width: 768px) {
      font-size: inherit;
    }
  }

  /* Focus Styles - visible and accessible */
  *:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 2px;
    border-radius: 4px;
  }
  
  /* Remove focus outline on touch devices when not using keyboard */
  *:focus:not(:focus-visible) {
    outline: none;
  }

  /* Selection */
  ::selection {
    background: ${({ theme }) => theme.primaryMuted};
    color: ${({ theme }) => theme.text.primary};
  }

  /* Scrollbar - hide on mobile, show on desktop */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    
    @media (max-width: 767px) {
      width: 4px;
      height: 4px;
    }
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.backgroundSecondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.border};
    border-radius: 4px;
    border: 2px solid ${({ theme }) => theme.backgroundSecondary};
    
    @media (max-width: 767px) {
      border-width: 1px;
    }
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.borderStrong};
  }

  /* Custom cursor - only for non-touch devices */
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
  }

  /* Custom Properties for animations */
  :root {
    --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
    --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
    --ease-in-out-quart: cubic-bezier(0.76, 0, 0.24, 1);
    --spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    
    /* Safe area insets for notched devices */
    --safe-area-inset-top: env(safe-area-inset-top, 0px);
    --safe-area-inset-right: env(safe-area-inset-right, 0px);
    --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
    --safe-area-inset-left: env(safe-area-inset-left, 0px);
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
  
  /* Hide on specific breakpoints */
  .hide-mobile {
    @media (max-width: 767px) {
      display: none !important;
    }
  }
  
  .hide-tablet {
    @media (min-width: 768px) and (max-width: 1023px) {
      display: none !important;
    }
  }
  
  .hide-desktop {
    @media (min-width: 1024px) {
      display: none !important;
    }
  }
  
  .show-mobile-only {
    @media (min-width: 768px) {
      display: none !important;
    }
  }
  
  .show-desktop-only {
    @media (max-width: 1023px) {
      display: none !important;
    }
  }
`;