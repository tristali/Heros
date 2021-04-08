import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './store/reducer';
import ResetStyle from './assets/components/ResetStyle';
import GlobalStyle from './assets/components/GlobalStyle';
import ViewLayer from './views/ViewLayer';

const store = createStore(reducer, composeWithDevTools());

function App() {

  return (
    <Provider store={store}>
      <ResetStyle />
      <GlobalStyle />
      <Router basename="/">
        <ViewLayer />
      </Router>
    </Provider>
  );
}

export default App;

/** 'npm run deploy' to deploy gh-pages */