import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterView from './router';
import config from './router/config';
import { ResetStyle, GlobalStyle } from './assets/globalStyle';

function App() {
  const { routes } = config;
  return (
    <Router>
      <ResetStyle />
      <GlobalStyle />
      <RouterView routes={routes}/>
    </Router>
  );
}

export default App;
