import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterView from './router';
import { default as routerConfig } from './router/config';
import { default as cssConfig } from './assets/config';
import ResetStyle from './assets/components/ResetStyle';
import GlobalStyle from './assets/components/GlobalStyle';
import DotBackground from './components/DotBackground';

function App() {
  const { routes } = routerConfig;
  const { colors } = cssConfig;
  const backgroundStyle = 'padding: 3%; min-width: 300px;';
  return (
    <Router>
      <ResetStyle />
      <GlobalStyle />
      <DotBackground fullVersion color={colors.main} styles={backgroundStyle}>
        <RouterView routes={routes} />
      </DotBackground>
    </Router>
  );
}

export default App;
