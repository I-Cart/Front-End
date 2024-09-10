import { combineReducers, configureStore } from "@reduxjs/toolkit"
import cart from "./cart/cartSlice"
import products from "./products/productsSlice"
import categories from "./categories/categoriesSlice"
import { persistReducer, persistStore, FLUSH, REGISTER, PURGE, PERSIST, PAUSE, REHYDRATE } from "redux-persist"
import storage from "redux-persist/lib/storage"
const rootPersistConfig = {
    key: "root",
    storage
}
const combinedReducers = combineReducers({
    cart,
    products,
    categories
})
const persistedReducer = persistReducer(rootPersistConfig, combinedReducers)

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
})

const persistor = persistStore(store)
export { store, persistor }
