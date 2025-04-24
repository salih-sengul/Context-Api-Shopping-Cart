import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter
  basename={"/Context-Api-Shopping-Cart"}
>
  <App />
</HashRouter>
);
