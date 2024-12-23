import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import img from './assets/8976.jpg';

// Set background image using JavaScript
// document.body.style.backgroundImage = `url(${img})`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
