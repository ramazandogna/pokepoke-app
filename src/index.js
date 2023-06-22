import './App.css';
import './assets/styles/global.css';

import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
      <Router>
         <App />
      </Router>
   </Provider>
);
