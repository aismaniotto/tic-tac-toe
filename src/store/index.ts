import { createStore, Store } from "redux";
import { GameState } from "./types";
import reducer from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store: Store<GameState> = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
