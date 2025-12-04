import colors from '../colors';
import media, { breakpoints } from '../media';
import zIndex from '../zIndex';

const baseTheme = {
  cursor: colors.primary,
  colors,
  zIndex,
  breakpoints: { sizes: breakpoints, ...media },
};

export default baseTheme;
