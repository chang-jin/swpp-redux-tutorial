import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createStore, combineReducers } from "redux";
import todoReducer from "./store/reducers/todo";

const history = createBrowserHistory();

const rootReducer = combineReducers({
  td: todoReducer,
  router: connectRouter(history),
});
const store = createStore(
  rootReducer,
  applyMiddleware(thunk, routerMiddleware())
);

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
