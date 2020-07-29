import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducer';
import ResetStyle from './assets/components/ResetStyle';
import GlobalStyle from './assets/components/GlobalStyle';
import RouterLayer from './views/RouterLayer';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {

  return (
    <Provider store={store}>
      <ResetStyle />
      <GlobalStyle />
      <RouterLayer />
    </Provider>
  );
}

export default App;