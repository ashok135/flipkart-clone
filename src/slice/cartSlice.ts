import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
import type { Product } from "../types";

interface CartItem extends Product {
    qty: number;
}

interface CartProps {
    items: CartItem[];
    totalQuantity: number;
}

const initialState: CartProps = {
    items:[],
    totalQuantity:0
}
 


const cartSlice= createSlice({
    name:'cart',
    initialState,
    reducers:{
         addToCart(state,action){
            const product =  action.payload
            const existing =  state.items.find((item)=>item?.id===product.id)
            if(existing){
                existing.qty +=1
            }
            else{
                state.items.push({...product,qty:1})
            }
          state.totalQuantity=state.items.reduce((sum,item)=>sum+item.qty,0)

         },
         removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalQuantity = state.items.reduce((sum, item) => sum + item.qty, 0);
    },

    }
})  


export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

 