// OBSIDIAN LUXE - Ultra Premium Color System
// Inspired by: Apple, Linear, Vercel, Stripe

const colors = {
  // Core Palette
  white: '#FFFFFF',
  black: '#000000',
  
  // Obsidian Backgrounds (Deep, Rich, Layered)
  obsidian: {
    void: '#030303',      // Deepest black
    deep: '#080808',      // Primary background
    base: '#0C0C0C',      // Card backgrounds
    elevated: '#121212',  // Elevated surfaces
    subtle: '#1A1A1A',    // Subtle highlights
    muted: '#252525',     // Borders, dividers
  },
  
  // Aurora Accents (Ethereal, Premium)
  aurora: {
    violet: '#8B5CF6',      // Primary accent
    indigo: '#6366F1',      // Secondary
    cyan: '#06B6D4',        // Tertiary
    emerald: '#10B981',     // Success
    rose: '#F43F5E',        // Attention
    amber: '#F59E0B',       // Warning
    pearl: '#E2E8F0',       // Light accent
  },
  
  // Gradient Presets (Cinematic)
  gradient: {
    // Hero gradients
    heroMesh: `
      radial-gradient(at 40% 20%, rgba(139, 92, 246, 0.15) 0px, transparent 50%),
      radial-gradient(at 80% 0%, rgba(99, 102, 241, 0.1) 0px, transparent 50%),
      radial-gradient(at 0% 50%, rgba(6, 182, 212, 0.08) 0px, transparent 50%),
      radial-gradient(at 80% 50%, rgba(16, 185, 129, 0.05) 0px, transparent 50%),
      radial-gradient(at 0% 100%, rgba(139, 92, 246, 0.1) 0px, transparent 50%)
    `,
    // Text gradients
    textPrimary: 'linear-gradient(135deg, #FFFFFF 0%, #A1A1AA 100%)',
    textAccent: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 50%, #10B981 100%)',
    textGlow: 'linear-gradient(135deg, #E2E8F0 0%, #8B5CF6 50%, #06B6D4 100%)',
    // Button gradients
    buttonPrimary: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
    buttonHover: 'linear-gradient(135deg, #9D7AFA 0%, #818CF8 100%)',
    buttonGlow: 'linear-gradient(135deg, rgba(139, 92, 246, 0.4) 0%, rgba(99, 102, 241, 0.4) 100%)',
    // Card gradients
    cardBorder: 'linear-gradient(135deg, rgba(139, 92, 246, 0.5) 0%, rgba(6, 182, 212, 0.3) 50%, rgba(16, 185, 129, 0.2) 100%)',
    cardGlow: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
    // Mesh gradients for sections
    meshViolet: `
      radial-gradient(at 0% 0%, rgba(139, 92, 246, 0.2) 0px, transparent 50%),
      radial-gradient(at 100% 100%, rgba(99, 102, 241, 0.15) 0px, transparent 50%)
    `,
    meshCyan: `
      radial-gradient(at 100% 0%, rgba(6, 182, 212, 0.15) 0px, transparent 50%),
      radial-gradient(at 0% 100%, rgba(16, 185, 129, 0.1) 0px, transparent 50%)
    `,
  },
  
  // Text Colors (Precise Hierarchy)
  text: {
    primary: '#FAFAFA',     // Headlines, important
    secondary: '#A1A1AA',   // Body text
    tertiary: '#71717A',    // Captions, labels
    muted: '#52525B',       // Disabled, hints
    inverse: '#0C0C0C',     // On light backgrounds
  },
  
  // Border & Divider System
  border: {
    subtle: 'rgba(255, 255, 255, 0.06)',
    default: 'rgba(255, 255, 255, 0.1)',
    strong: 'rgba(255, 255, 255, 0.15)',
    accent: 'rgba(139, 92, 246, 0.4)',
    glow: 'rgba(139, 92, 246, 0.6)',
  },
  
  // Shadow System (Depth & Dimension)
  shadow: {
    sm: '0 2px 8px rgba(0, 0, 0, 0.3)',
    md: '0 4px 16px rgba(0, 0, 0, 0.4)',
    lg: '0 8px 32px rgba(0, 0, 0, 0.5)',
    xl: '0 16px 64px rgba(0, 0, 0, 0.6)',
    glow: '0 0 40px rgba(139, 92, 246, 0.3)',
    glowStrong: '0 0 80px rgba(139, 92, 246, 0.4)',
    glowCyan: '0 0 60px rgba(6, 182, 212, 0.25)',
    inner: 'inset 0 1px 0 rgba(255, 255, 255, 0.05)',
  },
  
  // Glass Effects
  glass: {
    background: 'rgba(12, 12, 12, 0.8)',
    bgStrong: 'rgba(12, 12, 12, 0.95)',
    border: 'rgba(255, 255, 255, 0.08)',
    blur: '20px',
  },
  
  // State Colors
  state: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },
  
  // Legacy support
  neonCyan: '#06B6D4',
  neonMagenta: '#EC4899',
  electricBlue: '#3B82F6',
  emerald: '#10B981',
  red: '#EF4444',
};

export default colors;

