import colors from '../colors';
import base from './base';

const darkTheme = {
  ...base,
  // Clear, visible text colors
  text: '#FFFFFF', // Pure white for maximum readability
  textSecondary: '#E8E8E8', // Platinum for secondary text
  
  // Professional dark backgrounds
  background: '#0F1A33', // Rich navy - professional and deep
  backgroundSecondary: '#1B2B4E', // Navy blue
  backgroundTertiary: '#2D4373', // Lighter navy
  
  // Premium surface colors
  surface: 'rgba(255, 255, 255, 0.05)', // Subtle white tint
  surfaceHover: 'rgba(255, 255, 255, 0.08)',
  
  // Sophisticated border colors
  border: 'rgba(232, 232, 232, 0.15)', // Platinum borders
  borderHover: 'rgba(16, 185, 129, 0.4)', // Emerald on hover
  
  // Professional shadows
  shadow: '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 30px rgba(16, 185, 129, 0.05)',
  shadowLg: '0 30px 80px rgba(0, 0, 0, 0.5), 0 0 50px rgba(16, 185, 129, 0.08)',
  shadowAccent: '0 10px 40px rgba(16, 185, 129, 0.25)',
  
  // Premium glassmorphism
  glass: 'rgba(27, 43, 78, 0.6)',
  glassBlur: 'blur(24px) saturate(150%)',
  
  // Luxury shimmer effect
  shimmer: 'linear-gradient(90deg, transparent 0%, rgba(16, 185, 129, 0.2) 50%, transparent 100%)',
};

export default darkTheme;
