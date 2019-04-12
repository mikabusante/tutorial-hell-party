import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Calculator from './components/calculator/Calculator';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'PT Mono';
    padding: 7vh 5vw;
    font-size: 2em;
  }
`;

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Calculator />
    </div>
  );
};

export default App;
