// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // createRoot 추가
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

// const store = createStore(userReducer, applyMiddleware(thunk));

const root = createRoot(document.getElementById('root')); // createRoot로 초기화

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
