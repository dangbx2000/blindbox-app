import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // File CSS mặc định của React
import App from './App';  // Import component App chính

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Render vào phần tử có id là "root"
);
