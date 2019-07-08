/**
 * ************************************
 *
 * @module  store.js
 * @author Dillon & Kajol
 *
 * ************************************
 */
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';
import { fetchData } from './actions/actions.js';

const store = createStore(
  reducers,
  applyMiddleware(thunk),
);

// TBD with what our actions/reducers/stateful components will be called
// store.dispatch(fetchData())

export default store;