import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   outline: none;
 }

 body {
  background: #010014;
   text-rendering: optimizeLegibility !important;
 }
`;

export default GlobalStyle;