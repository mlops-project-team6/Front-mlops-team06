// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // createRoot 추가
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

// const store = createStore(userReducer, applyMiddleware(thunk));

const root = createRoot(document.getElementById('root')); // createRoot로 초기화

root.render(
    <App />
);