import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";


import { sideBarReducer } from "./Sidebar/reducers";



const rootReducer = combineReducers({

  lists: sideBarReducer
  
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
export default store;
