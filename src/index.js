import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*create element  (type, eventListener, property)*/
  // React.createElement('button', {
  //   onClick: () => console.log('CLICK')
  // }, 'Click me'),  
  <App />

);

