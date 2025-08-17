import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import "src/i18n.js"; // 👈 Importa la config antes de <App />
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
