import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { combineReducers } from "redux";

import { listReducer } from "@store/List/reducers";
import { tasksReducer } from "@store/Tasks/reducers";


const rootReducer = combineReducers({
  lists: listReducer,
  tasks: tasksReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
export default store;