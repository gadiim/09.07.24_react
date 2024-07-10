import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App1 from './App1';
import App2 from './App2';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App1 />
    <App2 />
  </React.StrictMode>
);
reportWebVitals();
