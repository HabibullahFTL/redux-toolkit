import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store/index.js';
import { productsAPI } from './store/slices/apiSlice.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={productsAPI}>
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>
);
