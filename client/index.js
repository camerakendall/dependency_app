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
import App from './App.jsx';
import store from './store';
import styled, { createGlobalStyle } from 'styled-components'

const Reset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    background-color: lightcyan;
  }
  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
`
render(
  <Provider store={store}>
    <Reset/>
      <App />
  </Provider>,
  document.getElementById('root'),
);