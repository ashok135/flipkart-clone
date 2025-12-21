import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../slice/porductsSlice'
import searchRuducer from '../slice/searchSlice'

export const store = configureStore({
    reducer:{
        products : productsReducer,
        search: searchRuducer

    }
})
 

 export type RootState = ReturnType <typeof store.getState>
 export type AppDispatch = typeof store.dispatch