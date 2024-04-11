import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.jsx';
import './styles/global.css';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
