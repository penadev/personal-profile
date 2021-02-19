import { typographyVariants } from './typographyVariants';

export const colors = {
  background: {
    light: {
      color: '#FFFFFF',
    },
    main: {
      color: '#000000',
    },
  },
  borders: {
    main: {
      color: '#F1F1F1',
    },
  },
  button: {
    primary: {
      bgcolor: '#81C784',
      contrastText: '#000',
    },
    secondary: {
      bgcolor: '#5A8B5C',
      contrastText: '#D6D6D6',
    },
  },
  primary: {
    main: {
      color: '#303030',
      contrastText: '#C4C4C4',
    },
  },
  secondary: {
    main: {
      color: '#FB7B6B',
      contrastText: '#6FCF97',
    },
  },
  tertiary: {
    main: {
      color: '#070C0E',
      contrastText: '#fff',
    },
    light: {
      color: '#88989E',
      contrastText: '#fff',
    },
  },
  modes: {
    dark: {},
  },
};

export const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
};

export default {
  colors,
  typographyVariants,
  breakpoints,
  borderRadius: '8px',
  fontFamily: '\'Lato\', sans-serif',
  fontFamilyButton: '\'Roboto\', sans-serif',
  fontFamilyLogo: '\'Fugaz One\', sans-serif',
  fontFamilyFooter: '\'Libre Barcode 39 Text\', sans-serif',
  transition: '200ms ease-in-out',
};