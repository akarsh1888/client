import rootReducer from "./root.reducer";

import thunk from "redux-thunk";
//import ReduxPromise from 'redux-promise';

import { createStore, applyMiddleware, compose } from "redux";

// in future we can expand the array & put any other middleware library/functionality
const middlewares = [thunk];

// redux browser extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
