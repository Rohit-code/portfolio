import React, { createContext, useContext, useState, useCallback, useRef } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import darkTheme from '../styles/themes/dark';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

// Helper function to adjust brightness
const adjustBrightness = (hex, percent) => {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = Math.max(0, Math.min(255, (num >> 16) + percent));
  const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + percent));
  const b = Math.max(0, Math.min(255, (num & 0x0000FF) + percent));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
};

// Helper to parse hex to RGB
const hexToRgb = (hex) => {
  const cleanHex = hex.replace('#', '');
  return {
    r: parseInt(cleanHex.substring(0, 2), 16),
    g: parseInt(cleanHex.substring(2, 4), 16),
    b: parseInt(cleanHex.substring(4, 6), 16),
  };
};

// Check if color is light (for determining if we need light or dark theme)
const isLightColor = (hex) => {
  const { r, g, b } = hexToRgb(hex);
  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.6;
};

// Helper to darken color for dark theme background
const darkenForBackground = (hex, amount = 0.12) => {
  const { r, g, b } = hexToRgb(hex);
  const newR = Math.max(0, Math.floor(r * amount));
  const newG = Math.max(0, Math.floor(g * amount));
  const newB = Math.max(0, Math.floor(b * amount));
  return `#${[newR, newG, newB].map(x => x.toString(16).padStart(2, '0')).join('')}`;
};

// Helper to lighten color for light theme background
const lightenForBackground = (hex, amount = 0.95) => {
  const { r, g, b } = hexToRgb(hex);
  const newR = Math.min(255, Math.floor(r + (255 - r) * amount));
  const newG = Math.min(255, Math.floor(g + (255 - g) * amount));
  const newB = Math.min(255, Math.floor(b + (255 - b) * amount));
  return `#${[newR, newG, newB].map(x => x.toString(16).padStart(2, '0')).join('')}`;
};

// Create dark theme variant with specific color
const createDarkThemedVariant = (baseTheme, color) => {
  const { r, g, b } = hexToRgb(color);
  const background = darkenForBackground(color, 0.12);
  
  return {
    ...baseTheme,
    mode: 'dark',
    background,
    backgroundSecondary: darkenForBackground(color, 0.15),
    backgroundElevated: darkenForBackground(color, 0.18),
    primary: color,
    primaryMuted: `rgba(${r}, ${g}, ${b}, 0.2)`,
    borderAccent: `rgba(${r}, ${g}, ${b}, 0.4)`,
    border: `rgba(255, 255, 255, 0.1)`,
    borderSubtle: `rgba(255, 255, 255, 0.06)`,
    borderStrong: `rgba(255, 255, 255, 0.15)`,
    text: {
      primary: '#FAFAFA',
      secondary: '#A1A1AA',
      tertiary: '#71717A',
      muted: '#52525B',
      inverse: '#0C0C0C',
    },
    surface: {
      default: darkenForBackground(color, 0.15),
      hover: darkenForBackground(color, 0.2),
      active: darkenForBackground(color, 0.25),
    },
    gradient: {
      ...baseTheme.gradient,
      buttonPrimary: `linear-gradient(135deg, ${color} 0%, ${adjustBrightness(color, -20)} 100%)`,
      buttonHover: `linear-gradient(135deg, ${adjustBrightness(color, 10)} 0%, ${adjustBrightness(color, -10)} 100%)`,
      textAccent: `linear-gradient(135deg, ${color} 0%, ${adjustBrightness(color, -30)} 50%, ${adjustBrightness(color, -50)} 100%)`,
      heroMesh: `
        radial-gradient(at 40% 20%, rgba(${r}, ${g}, ${b}, 0.15) 0px, transparent 50%),
        radial-gradient(at 80% 0%, rgba(${r}, ${g}, ${b}, 0.1) 0px, transparent 50%),
        radial-gradient(at 0% 50%, rgba(${r}, ${g}, ${b}, 0.08) 0px, transparent 50%),
        radial-gradient(at 80% 50%, rgba(${r}, ${g}, ${b}, 0.05) 0px, transparent 50%),
        radial-gradient(at 0% 100%, rgba(${r}, ${g}, ${b}, 0.1) 0px, transparent 50%)
      `,
      cardGlow: `radial-gradient(ellipse at center, rgba(${r}, ${g}, ${b}, 0.15) 0%, transparent 70%)`,
      meshViolet: `
        radial-gradient(at 0% 0%, rgba(${r}, ${g}, ${b}, 0.2) 0px, transparent 50%),
        radial-gradient(at 100% 100%, rgba(${r}, ${g}, ${b}, 0.15) 0px, transparent 50%)
      `,
    },
    shadow: {
      ...baseTheme.shadow,
      glow: `0 0 40px rgba(${r}, ${g}, ${b}, 0.3)`,
      glowStrong: `0 0 80px rgba(${r}, ${g}, ${b}, 0.4)`,
    },
    glass: {
      background: 'rgba(12, 12, 12, 0.8)',
      bgStrong: 'rgba(12, 12, 12, 0.95)',
      border: 'rgba(255, 255, 255, 0.08)',
      blur: '20px',
    },
  };
};

// Create light theme variant with specific color
const createLightThemedVariant = (baseTheme, color) => {
  const { r, g, b } = hexToRgb(color);
  const background = lightenForBackground(color, 0.92);
  const darkerAccent = adjustBrightness(color, -60);
  const { r: dr, g: dg, b: db } = hexToRgb(darkerAccent);
  
  return {
    ...baseTheme,
    mode: 'light',
    background,
    backgroundSecondary: lightenForBackground(color, 0.88),
    backgroundElevated: '#FFFFFF',
    primary: adjustBrightness(color, -40), // Darker primary for contrast
    primaryMuted: `rgba(${r}, ${g}, ${b}, 0.15)`,
    borderAccent: `rgba(${dr}, ${dg}, ${db}, 0.3)`,
    border: `rgba(0, 0, 0, 0.08)`,
    borderSubtle: `rgba(0, 0, 0, 0.04)`,
    borderStrong: `rgba(0, 0, 0, 0.12)`,
    text: {
      primary: '#1A1A1A',
      secondary: '#4A4A4A',
      tertiary: '#6B6B6B',
      muted: '#9A9A9A',
      inverse: '#FAFAFA',
    },
    surface: {
      default: '#FFFFFF',
      hover: lightenForBackground(color, 0.85),
      active: lightenForBackground(color, 0.8),
    },
    gradient: {
      ...baseTheme.gradient,
      buttonPrimary: `linear-gradient(135deg, ${adjustBrightness(color, -30)} 0%, ${adjustBrightness(color, -50)} 100%)`,
      buttonHover: `linear-gradient(135deg, ${adjustBrightness(color, -20)} 0%, ${adjustBrightness(color, -40)} 100%)`,
      textAccent: `linear-gradient(135deg, ${adjustBrightness(color, -40)} 0%, ${adjustBrightness(color, -60)} 50%, ${adjustBrightness(color, -80)} 100%)`,
      heroMesh: `
        radial-gradient(at 40% 20%, rgba(${r}, ${g}, ${b}, 0.2) 0px, transparent 50%),
        radial-gradient(at 80% 0%, rgba(${r}, ${g}, ${b}, 0.15) 0px, transparent 50%),
        radial-gradient(at 0% 50%, rgba(${r}, ${g}, ${b}, 0.1) 0px, transparent 50%),
        radial-gradient(at 80% 50%, rgba(${r}, ${g}, ${b}, 0.08) 0px, transparent 50%),
        radial-gradient(at 0% 100%, rgba(${r}, ${g}, ${b}, 0.12) 0px, transparent 50%)
      `,
      cardGlow: `radial-gradient(ellipse at center, rgba(${r}, ${g}, ${b}, 0.1) 0%, transparent 70%)`,
      meshViolet: `
        radial-gradient(at 0% 0%, rgba(${r}, ${g}, ${b}, 0.15) 0px, transparent 50%),
        radial-gradient(at 100% 100%, rgba(${r}, ${g}, ${b}, 0.1) 0px, transparent 50%)
      `,
    },
    shadow: {
      sm: '0 2px 8px rgba(0, 0, 0, 0.08)',
      md: '0 4px 16px rgba(0, 0, 0, 0.1)',
      lg: '0 8px 32px rgba(0, 0, 0, 0.12)',
      xl: '0 16px 64px rgba(0, 0, 0, 0.14)',
      glow: `0 0 40px rgba(${r}, ${g}, ${b}, 0.2)`,
      glowStrong: `0 0 80px rgba(${r}, ${g}, ${b}, 0.3)`,
    },
    glass: {
      background: 'rgba(255, 255, 255, 0.8)',
      bgStrong: 'rgba(255, 255, 255, 0.95)',
      border: 'rgba(0, 0, 0, 0.06)',
      blur: '20px',
    },
  };
};

// Create theme based on color (auto-detect light/dark)
const createThemedVariant = (baseTheme, color) => {
  if (isLightColor(color)) {
    return createLightThemedVariant(baseTheme, color);
  }
  return createDarkThemedVariant(baseTheme, color);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(darkTheme);
  const [rippleColor, setRippleColor] = useState(null);
  const [ripplePosition, setRipplePosition] = useState({ x: 0, y: 0 });
  const [isRippling, setIsRippling] = useState(false);
  
  const themeChangedRef = useRef(false);

  const changeThemeColor = useCallback((color, mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2) => {
    console.log('Theme: changeThemeColor called', { color, mouseX, mouseY, isLight: isLightColor(color) });
    if (!color) {
      console.warn('Theme: No color provided');
      return;
    }
    
    themeChangedRef.current = true;
    
    // Trigger ripple effect immediately
    setRippleColor(color);
    setRipplePosition({ x: mouseX, y: mouseY });
    setIsRippling(true);
    
    // Apply theme change after a small delay to sync with ripple start
    setTimeout(() => {
      const newTheme = createThemedVariant(darkTheme, color);
      setTheme(newTheme);
      console.log('Theme: New theme applied', { primaryColor: color, mode: newTheme.mode });
    }, 300);
    
    // Reset rippling state after animation completes
    setTimeout(() => {
      setIsRippling(false);
      console.log('Theme: Ripple animation complete');
    }, 7000);
    
  }, []);

  const resetTheme = useCallback(() => {
    console.log('Theme: resetTheme called - keeping current theme');
  }, []);
  
  const forceResetTheme = useCallback(() => {
    setTheme(darkTheme);
    themeChangedRef.current = false;
    setIsRippling(false);
    console.log('Theme: Force reset to default');
  }, []);

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      setTheme, 
      changeThemeColor, 
      resetTheme,
      forceResetTheme,
      rippleColor,
      ripplePosition,
      isRippling,
    }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};