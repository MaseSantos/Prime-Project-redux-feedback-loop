import React from 'react';
import ReactDOM from 'react-dom';
import logger from "redux-logger";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";

import './index.css';
import App from './components/App/App';
// import registerServiceWorker from './registerServiceWorker';

const responseList = (state = [], action) => {
  if (action.type === "SET_ALL_RESPONSES") {
    return action.payload;
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    responseList,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}><App /></Provider>,document.getElementById("root")
);
