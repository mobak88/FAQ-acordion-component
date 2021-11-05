import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    veryDarkDesaturatedBlue: 'hsl(238, 29%, 16%)',
    softRed: 'hsl(14, 88%, 65%)',
    veryDarkGrayishBlue: 'hsl(237, 12%, 33%)',
    darkGrayishBlue: 'hsl(240, 6%, 50%)',
    lightGrayishBlue: 'hsl(240, 5%, 91%)',
    softViolet: 'hsl(273, 75%, 66%)',
    softBlue: 'hsl(240, 73%, 65%)',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
