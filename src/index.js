import React from 'react';
import ReactDOM from 'react-dom';
import logger from "redux-logger";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";

import './index.css';
import App from './components/App/App';
// import registerServiceWorker from './registerServiceWorker';

const reducerInitialState = {
  feeling: "",
  understanding: "",
  support: "",
  comments: ""
}

const feelingResponse = (state = reducerInitialState, action) => {
    if (action.type === "ADD_FEELING_RESPONSE") {
        console.log("Info:", action.payload);
        state = {
          feeling: action.payload
        };
      console.log('this is the state:', state);
    }
    return state;
};

const understandingResponse = (state = reducerInitialState, action) => {
  if (action.type === "ADD_UNDERSTANDING_RESPONSE") {
    console.log("Info:", action.payload);
    state = {
      ...state.feeling,
      understanding: action.payload
    };
    console.log('this is the state:', state);
  }
  return state;
};

const supportResponse = (state = reducerInitialState, action) => {
  if (action.type === "ADD_SUPPORT_RESPONSE") {
    console.log("Info:", action.payload);
    state = {
      ...state.feeling,
      ...state.understanding,
      support: action.payload
    };
    console.log('this is the state:', state);
  }
  return state;
};

const commentsResponse = (state = reducerInitialState, action) => {
  if (action.type === "ADD_COMMENTS_RESPONSE") {
    console.log("Info:", action.payload);
    state = {
      ...state.feeling,
      ...state.understanding,
      ...state.support,
      comments: action.payload
    };
    console.log('this is the state:', state);
  }
  return state;
};

// const responseList = (state = [], action) => {
//   if (action.type === "SET_ALL_RESPONSES") {
//     return action.payload;
//   }
//   return state;
// };

const storeInstance = createStore(
  combineReducers({
    feelingResponse,
    understandingResponse,
    supportResponse,
    commentsResponse
    // responseList,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}><App /></Provider>,document.getElementById("root")
);
