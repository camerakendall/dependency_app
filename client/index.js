/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description entry point for application.  Hangs React app off of #contents in index.html
 *
 * ************************************
 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
// import styles from './scss/application.scss'; need to create CSS file

render(
  <Provider store={store}>
      {/* need to create App */}
    <App />
  </Provider>,
  document.getElementById('root'),
);