import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import { AuthContextProvider } from './store/auth-context';
import Context from './store/cart-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <Context>
      <Provider store={store}>
          <App />
      </Provider>
    </Context>
  </AuthContextProvider>
);