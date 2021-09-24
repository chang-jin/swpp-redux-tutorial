import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import todoReducer from './store/reducers/todo';

// const reducer = (state = {}, action) => state;

const history = createBrowserHistory();
const rootReducer = combineReducers({
  td: todoReducer,
  router: connectRouter(history),
});

const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)))
);

ReactDOM.render(
  <Provider store={store}><App history={history} /></Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
