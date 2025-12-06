import colors from '../colors';

const darkTheme = {
  // Backgrounds
  background: colors.obsidian.deep,
  backgroundSecondary: colors.obsidian.base,
  backgroundElevated: colors.obsidian.elevated,
  
  // Surfaces
  surface: {
    default: colors.obsidian.base,
    hover: colors.obsidian.elevated,
    active: colors.obsidian.subtle,
  },
  
  // Primary colors
  primary: colors.aurora.violet,
  primaryMuted: 'rgba(139, 92, 246, 0.2)',
  secondary: colors.aurora.indigo,
  tertiary: colors.aurora.cyan,
  
  // Aurora colors (for direct access)
  aurora: colors.aurora,
  
  // Text
  text: colors.text,
  
  // Borders
  border: colors.border.default,
  borderSubtle: colors.border.subtle,
  borderStrong: colors.border.strong,
  borderAccent: colors.border.accent,
  
  // Shadows
  shadow: colors.shadow,
  
  // Gradients
  gradient: colors.gradient,
  
  // Glass
  glass: colors.glass,
  
  // State
  state: colors.state,
};

export default darkTheme;

