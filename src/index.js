import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Header from './Header';
// switch in the other App import to test class components
// import App from './AppClass'
import App from './AppFunction';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
);
