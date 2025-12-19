import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import api from "../api/api";
import { useState } from "react";
import type { Product } from "../types";

 
 interface Products {
    products:Product[]
    loading: boolean
  error: string | null |undefined
 }

 const initialState:Products = {
      products:[],
      loading:false,
      error:""
      
      

 }

 async function fetchApiData(){
      const response =  await api.get('/products')
      console.log(response.data)
       return response.data


 }
 


 export const fetchProducts = createAsyncThunk('products/fetchProducts',fetchApiData)


const poroductsSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
     

     },   
 extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.pending,(state) =>{ 
        state.loading=true
        state.error=null
    })
  
    .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.products= action.payload.products
     
    })
    .addCase(fetchProducts.rejected,(state,action)=> {
        state.loading = false,
        state.error = action.error.message || "failded to fetch prodects"

    })
    
  },


        
 

})
export default poroductsSlice.reducer
 