import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducer';
import ResetStyle from './assets/components/ResetStyle';
import GlobalStyle from './assets/components/GlobalStyle';
import ViewLayer from './views/ViewLayer';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {

  return (
    <Provider store={store}>
      <ResetStyle />
      <GlobalStyle />
      <Router>
        <ViewLayer />
      </Router>
    </Provider>
  );
}

export default App;