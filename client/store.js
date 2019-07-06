/**
 * ************************************
 *
 * @module  store.js
 * @author Dillon & Kajol
 *
 * ************************************
 */

import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';

const store = createStore(
  reducers,
);

// TBD with what our actions/reducers/stateful components will be called
store.dispatch(loadMarkets());

export default store;