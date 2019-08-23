import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store/store';
import Routes from './components/routes';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
