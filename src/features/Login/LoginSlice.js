import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name:"login",
  initialState:{
    user: JSON.parse(sessionStorage.getItem("loginUser")) || {
      name:"",
      password:"",
      image:"",
      loginUser:false,
    }
    
  },
  
  reducers:{
    loginReducer(state,action){
      const userId = action.payload
      console.log("action",userId)
      
      // const userValidation = /^[A-Za-z]{4,10}$ /i.test(userId.name);
      // const isValidPassword = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{8,20}$/.test(userId.password);
      const userValidation = userId.name;
      const isValidPassword = userId.password;
      state.user = userId
      if(userValidation.length < 0 || isValidPassword.length < 0 ){
        state.user.loginUser = false
        
      }
      else{
        state.user.loginUser = true
        const saveState = JSON.stringify(userId)
        sessionStorage.setItem("loginUser",saveState)
      }
      
      
    },
    loginOutReducer(state){
     state.user ={
      name:"",
      password:"",
      image:"",
      loginUser:false,
     }
     sessionStorage.clear()
    },

  }
})
export const {loginReducer,loginOutReducer} = loginSlice.actions
export default loginSlice.reducer