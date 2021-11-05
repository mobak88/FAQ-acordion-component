import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    text: {
      veryDarkDesaturatedBlue: 'hsl(238, 29%, 16%)',
      softRed: 'hsl(14, 88%, 65%)',
      veryDarkGrayishBlue: 'hsl(237, 12%, 33%)',
      darkGrayishBlue: 'hsl(240, 6%, 50%)',
    },

    styledBackground: {
      softViolet: 'hsl(273, 75%, 66%)',
      softBlue: 'hsl(240, 73%, 65%)',
    },

    divider: {
      lightGrayishBlue: 'hsl(240, 5%, 91%)',
    },
  },
};

const {
  colors: {
    text: {
      veryDarkDesaturatedBlue,
      softRed,
      veryDarkGrayishBlue,
      darkGrayishBlue,
    },

    styledBackground: { softViolet, softBlue },
  },
} = theme;

const Theme = ({ children }) => (
  <ThemeProvider
    theme={{
      veryDarkDesaturatedBlue,
      softRed,
      veryDarkGrayishBlue,
      darkGrayishBlue,
      softViolet,
      softBlue,
    }}
  >
    {children}
  </ThemeProvider>
);

export default Theme;
