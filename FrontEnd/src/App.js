import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import SecretApp from './container/SecretApp';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <div>
        <SecretApp />
      </div>
    </Provider>
  );
}

export default App;
