import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cart from "./cart/cartSlice";
import products from "./products/productsSlice";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REGISTER,
  PURGE,
  PERSIST,
  PAUSE,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import users from "./users/usersSlice";
import authSlice from "./auth/authSlice";
const rootPersistConfig = {
  key: "root",
  storage,
  blacklist: ["users"],
};
const combinedReducers = combineReducers({
  cart: persistReducer(
    {
      key: "cart",
      storage,
    },
    cart
  ),
  products,
  users: persistReducer(
    {
      key: "users",
      storage,
      whitelist: ["users"],
    },
    users
  ),
  auth: persistReducer(
    {
      key: "auth",
      storage,
      whitelist: ["user"],
    },
    authSlice
  ),
});
const persistedReducer = persistReducer(rootPersistConfig, combinedReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);
export { store, persistor };
