import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../slice/porductsSlice'

export const store = configureStore({
    reducer:{
        products : productsReducer

    }
})
 

 export type RootState = ReturnType <typeof store.getState>
 export type AppDispatch = typeof store.dispatch