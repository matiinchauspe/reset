import { extendTheme } from 'native-base';

export const theme = extendTheme({
  fontConfig: {
    'open-sans': {
      300: { normal: 'font-open-sans-light' },
      400: { normal: 'font-open-sans' },
      500: { normal: 'font-open-sans' },
      600: { normal: 'font-open-sans-bold' },
      700: { normal: 'font-open-sans-bold' },
      800: { normal: 'font-open-sans-extra-bold' },
      900: { normal: 'font-open-sans-extra-bold' },
    },
  },
  fonts: {
    heading: 'open-sans',
    body: 'open-sans',
    mono: 'open-sans',
  },
});
