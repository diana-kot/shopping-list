import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { listReducer } from "@store/List/reducers";
import { tasksReducer } from "@store/Tasks/reducers";
import { filterReducer } from "./Filter/reducers";

const rootReducer = combineReducers({
  lists: listReducer,
  tasks: tasksReducer,
  filter: filterReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "shoppingList",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
