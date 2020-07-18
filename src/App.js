import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main/Main.js';
import { GlobalStyle } from './Components/Globals/style';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  )
}

export default App;
