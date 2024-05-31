import {configureStore} from '@reduxjs/toolkit'
import productSlice from '../features/Products/productSlice'
import cartSlice from '../features/Cart/cartSlice'
import loginSlice from '../features/Login/LoginSlice'
import bannerSlice from '../features/Banner/bannerSlice'
export const store = configureStore({
  reducer:{
    products:productSlice,
    cart:cartSlice,
    login:loginSlice,
    banner:bannerSlice,
    
  },
})