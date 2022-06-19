import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

import { listReducer } from "@store/List/reducers";
import { tasksReducer } from "@store/Tasks/reducers";


const rootReducer = combineReducers({
  lists: listReducer,
  tasks: tasksReducer,
 
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "gbMessenger",
  storage,
  blacklist: [""],
  whitelist: [""],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export const persistor = persistStore(store);
