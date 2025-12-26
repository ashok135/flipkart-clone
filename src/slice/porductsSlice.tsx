import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import api from "../api/api";
import { useState } from "react";
import type { Product } from "../types";
 export interface BrandProps{
   name:string
   id:boolean
   
}
 
 export interface Products {
    products:Product[]
    loading: boolean
    category:string[]
    brand:BrandProps[]
  error: string | null |undefined
 }

 export const initialState:Products = {
      products:[],
      category:[],
      brand:[],
      
      loading:false,
      error:""
      
      

 }

 export async function fetchApiData(){
      const response =  await api.get('/products?limit=0')
      console.log(response.data)
       return response.data


 }
  
 const fetchCategoryListFn = async()=>{
    const response =await api.get('/products/category-list')
    console.log(response.data)
    return response.data

 }


 export const fetchProducts = createAsyncThunk('products/fetchProducts',fetchApiData)
 export  const fetchCategoryList= createAsyncThunk('category-list/fetchCategoryList',fetchCategoryListFn)



const poroductsSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
      setCategory:(state,action)=>{
         state.category=action.payload
      },
      setBrand:(state,action)=>{
         state.brand=action.payload
      }
     

     },   
 extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.pending,(state) =>{ 
        state.loading=true
        state.error=null
    })
  
    .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.products=action.payload.products
     
    })
    .addCase(fetchProducts.rejected,(state,action)=> {
        state.loading = false,
        state.error = action.error.message || "failded to fetch prodects"

    })

     .addCase(fetchCategoryList.pending,(state,action)=>{
        state.loading = true
     })
     .addCase(fetchCategoryList.fulfilled,(state,action)=>{
        state.category = action.payload
        state.loading = false
     })
     .addCase(fetchCategoryList.rejected,(state,action)=>{
        state.loading =false
        state.error = action.error.message || "failded to fetch category"
     })
    
    
  },


        
 

})
export default poroductsSlice.reducer
export const {setCategory,setBrand}=poroductsSlice.actions
 