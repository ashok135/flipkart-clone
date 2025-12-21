import { createSlice, type PayloadAction  } from "@reduxjs/toolkit";

 

const initialState= {
    search:""
}

 const serachSlice = createSlice(
    {
        name:'search',
        initialState,
        reducers:{
            setSearch:(state,action:PayloadAction<string>)=> {
                state.search=action.payload
            }

        },
         
  
     }
 )

 export default serachSlice.reducer
 export const {setSearch} =serachSlice.actions



