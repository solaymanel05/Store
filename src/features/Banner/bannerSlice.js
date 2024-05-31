import { createSlice } from "@reduxjs/toolkit";
const bannerSlice = createSlice({
  name:"banner",
  initialState:{
    flow:false,

  },
  reducers:{
    bannerReducer(state,action){
      const banFlow = action.payload
      console.log("action banner:", banFlow)
      state.flow = banFlow
      if(banFlow === true){
        state.flow =true
      }else{
        state.flow = false
      }
    }
  }
})
export const {bannerReducer} = bannerSlice.actions
export default bannerSlice.reducer