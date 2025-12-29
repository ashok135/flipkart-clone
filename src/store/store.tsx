 
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
 

 
import productsReducer from '../slice/porductsSlice'
import searchRuducer from '../slice/searchSlice'
import cartReducer from '../slice/cartSlice'
const persistConfig = {
  key: "root", // key for storage
  storage,     // use localStorage
};
const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
    reducer:{
        products : productsReducer,
        search: searchRuducer,
        cart:persistedReducer

    }
})
export const persistor = persistStore(store);
 

 export type RootState = ReturnType <typeof store.getState>
 export type AppDispatch = typeof store.dispatch