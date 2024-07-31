// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';  // Importing BrowserRouter
import './index.css'; // Global styles
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App  />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
