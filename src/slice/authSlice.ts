import { createSlice } from "@reduxjs/toolkit";
 
 interface UserDataProps{
  image:string
  firstName:string
  gender:string

 }
interface AuthState {
  user:string |null
  token: string | null;
  userData:UserDataProps | null
  isLoggedIn:boolean
}

const initialState: AuthState = {
  user: null,
  token: null,
  userData:null,
   isLoggedIn: false,
};
const authSlice=createSlice({
    name:'token',
    initialState,
    reducers:{
       loginSuccess: (state, action) => {
        console.log(action.payload)
      state.user = action.payload.username;
      state.token = action.payload.accessToken;
      state.userData={image:action.payload.image,firstName:action.payload.firstName,gender:action.payload.gender} 
      
      state.isLoggedIn = true;
    },
     logout: (state) => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
    },

    }
})

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;