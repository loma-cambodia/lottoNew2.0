import { createStore, applyMiddleware,compose  } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from './reducers';
import logger from 'redux-logger';


// initial states here
//const initalState = {user:{name:'abc', age:35, address:'Ression fedration'}, auth:{email:'abc@gmail.com', age:24,apiCall:true}};

const initalState = {};

// middleware
const middleware = [thunk,logger];

const composeEnhancers = typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// creating store
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
//composeWithDevTools(applyMiddleware(...middleware))
//  composeEnhancers(applyMiddleware(...middleware))
// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);