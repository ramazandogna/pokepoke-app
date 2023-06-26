import './App.css';
import './assets/styles/global.css';

import { persistor, store } from './redux/store';

import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <Provider store={store}>
      <PersistGate
         loading={null}
         persistor={persistor}
      >
         <Router>
            <App />
         </Router>
      </PersistGate>
   </Provider>
);
