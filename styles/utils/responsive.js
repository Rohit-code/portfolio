// Paste the responsive.js utility code from code.txt here (lines 2006-2195)

// Responsive Breakpoints & Utilities
// Following mobile-first approach

export const breakpoints = {
    xs: 480,   // Small phones
    sm: 640,   // Large phones
    md: 768,   // Tablets
    lg: 1024,  // Small laptops
    xl: 1280,  // Desktops
    xxl: 1536, // Large desktops
  };
  
  // Media query helpers
  export const media = {
    xs: `@media (min-width: ${breakpoints.xs}px)`,
    sm: `@media (min-width: ${breakpoints.sm}px)`,
    md: `@media (min-width: ${breakpoints.md}px)`,
    lg: `@media (min-width: ${breakpoints.lg}px)`,
    xl: `@media (min-width: ${breakpoints.xl}px)`,
    xxl: `@media (min-width: ${breakpoints.xxl}px)`,
    
    // Max-width variants (for mobile-first exceptions)
    maxXs: `@media (max-width: ${breakpoints.xs - 1}px)`,
    maxSm: `@media (max-width: ${breakpoints.sm - 1}px)`,
    maxMd: `@media (max-width: ${breakpoints.md - 1}px)`,
    maxLg: `@media (max-width: ${breakpoints.lg - 1}px)`,
    maxXl: `@media (max-width: ${breakpoints.xl - 1}px)`,
    
    // Special queries
    touch: '@media (hover: none) and (pointer: coarse)',
    hover: '@media (hover: hover) and (pointer: fine)',
    reducedMotion: '@media (prefers-reduced-motion: reduce)',
    dark: '@media (prefers-color-scheme: dark)',
    light: '@media (prefers-color-scheme: light)',
    portrait: '@media (orientation: portrait)',
    landscape: '@media (orientation: landscape)',
    retina: '@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)',
  };
  
  // Fluid typography scale (min, preferred, max)
  export const fluidType = {
    xs: 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
    sm: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
    base: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
    lg: 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
    xl: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
    '2xl': 'clamp(1.5rem, 1.25rem + 1.25vw, 2rem)',
    '3xl': 'clamp(2rem, 1.5rem + 2.5vw, 3rem)',
    '4xl': 'clamp(2.5rem, 2rem + 2.5vw, 4rem)',
    '5xl': 'clamp(3rem, 2rem + 5vw, 5rem)',
    '6xl': 'clamp(3.5rem, 2.5rem + 5vw, 6rem)',
    hero: 'clamp(3rem, 2rem + 8vw, 7rem)',
    display: 'clamp(4rem, 2rem + 12vw, 10rem)',
  };
  
  // Fluid spacing scale
  export const fluidSpace = {
    xs: 'clamp(4px, 0.25rem + 0.5vw, 8px)',
    sm: 'clamp(8px, 0.5rem + 0.5vw, 12px)',
    md: 'clamp(12px, 0.75rem + 0.75vw, 16px)',
    lg: 'clamp(16px, 1rem + 1vw, 24px)',
    xl: 'clamp(24px, 1.5rem + 1.5vw, 32px)',
    '2xl': 'clamp(32px, 2rem + 2vw, 48px)',
    '3xl': 'clamp(48px, 3rem + 3vw, 64px)',
    '4xl': 'clamp(64px, 4rem + 4vw, 96px)',
    '5xl': 'clamp(80px, 5rem + 5vw, 128px)',
    section: 'clamp(80px, 5rem + 8vw, 160px)',
  };
  
  // Container widths
  export const container = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
    xxl: '1400px',
    full: '100%',
  };
  
  // Grid system helpers
  export const grid = {
    gap: {
      sm: 'clamp(12px, 1rem, 16px)',
      md: 'clamp(16px, 1.5rem, 24px)',
      lg: 'clamp(24px, 2rem, 32px)',
      xl: 'clamp(32px, 2.5rem, 48px)',
    },
    columns: {
      1: 'repeat(1, 1fr)',
      2: 'repeat(2, 1fr)',
      3: 'repeat(3, 1fr)',
      4: 'repeat(4, 1fr)',
      6: 'repeat(6, 1fr)',
      12: 'repeat(12, 1fr)',
      auto: 'repeat(auto-fit, minmax(280px, 1fr))',
      autoSm: 'repeat(auto-fit, minmax(200px, 1fr))',
      autoLg: 'repeat(auto-fit, minmax(350px, 1fr))',
    },
  };
  
  // Aspect ratios
  export const aspectRatio = {
    square: '1 / 1',
    video: '16 / 9',
    portrait: '3 / 4',
    landscape: '4 / 3',
    wide: '21 / 9',
    golden: '1.618 / 1',
  };
  
  // Z-index scale
  export const zIndex = {
    hide: -1,
    base: 0,
    raised: 10,
    dropdown: 100,
    sticky: 200,
    overlay: 300,
    modal: 400,
    popover: 500,
    tooltip: 600,
    cursor: 900,
    max: 9999,
  };
  
  // Animation durations (respects reduced motion)
  export const duration = {
    instant: '0ms',
    fast: '150ms',
    normal: '250ms',
    slow: '400ms',
    slower: '600ms',
    slowest: '1000ms',
  };
  
  // Easing functions
  export const easing = {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOutExpo: 'cubic-bezier(0.16, 1, 0.3, 1)',
    easeOutQuart: 'cubic-bezier(0.25, 1, 0.5, 1)',
    easeInOutQuart: 'cubic-bezier(0.76, 0, 0.24, 1)',
    spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  };
  
  // Responsive visibility helpers (CSS strings)
  export const visibility = {
    hideOnMobile: `
      @media (max-width: ${breakpoints.md - 1}px) {
        display: none !important;
      }
    `,
    hideOnDesktop: `
      @media (min-width: ${breakpoints.md}px) {
        display: none !important;
      }
    `,
    showOnMobile: `
      display: none !important;
      @media (max-width: ${breakpoints.md - 1}px) {
        display: block !important;
      }
    `,
    showOnDesktop: `
      display: none !important;
      @media (min-width: ${breakpoints.md}px) {
        display: block !important;
      }
    `,
  };
  
  // Export all utilities
  export default {
    breakpoints,
    media,
    fluidType,
    fluidSpace,
    container,
    grid,
    aspectRatio,
    zIndex,
    duration,
    easing,
    visibility,
  };