import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import { BrowserRouter } from 'react-router-dom'
import './index.css';

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);

