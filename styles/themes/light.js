import colors from '../colors';
import base from './base';

const lightTheme = {
  ...base,
  // Clear, visible text colors
  text: '#0A0A0A', // Rich black for maximum readability
  textSecondary: '#2D3748', // Charcoal for secondary text
  
  // Professional light backgrounds
  background: '#FFFFFF', // Pure white - clean and professional
  backgroundSecondary: '#FAFAF9', // Warm cream
  backgroundTertiary: '#F5F6F7', // Light gray
  
  // Premium surface colors
  surface: 'rgba(27, 43, 78, 0.03)', // Subtle navy tint
  surfaceHover: 'rgba(27, 43, 78, 0.05)',
  
  // Sophisticated border colors
  border: 'rgba(45, 55, 72, 0.12)', // Charcoal borders
  borderHover: 'rgba(16, 185, 129, 0.3)', // Emerald on hover
  
  // Professional shadows
  shadow: '0 20px 60px rgba(0, 0, 0, 0.08), 0 0 20px rgba(27, 43, 78, 0.04)',
  shadowLg: '0 30px 80px rgba(0, 0, 0, 0.12), 0 0 40px rgba(27, 43, 78, 0.06)',
  shadowAccent: '0 10px 40px rgba(16, 185, 129, 0.2)',
  
  // Premium glassmorphism
  glass: 'rgba(255, 255, 255, 0.85)',
  glassBlur: 'blur(24px) saturate(150%)',
  
  // Luxury shimmer effect
  shimmer: 'linear-gradient(90deg, transparent 0%, rgba(16, 185, 129, 0.15) 50%, transparent 100%)',
};

export default lightTheme;
