// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Kumbh Sans', sans-serif;
    font-size: 12px;
  }
`;

export default GlobalStyle;
