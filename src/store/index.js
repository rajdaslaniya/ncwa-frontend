// src/store/index.js

import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import { reducers } from "./reducers/combined.reducers";

const persistConfig = {
  key: "root", // Key in local storage
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { store, persistor };
