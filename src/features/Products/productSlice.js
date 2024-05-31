import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";
export const productSlice = createSlice({
  name: "products",
  initialState: {
    filterProducts:
      JSON.parse(sessionStorage.getItem("filterdData")) || storeData,
    singleProducts:
      JSON.parse(sessionStorage.getItem("oneProducts")) || storeData,
    filterGender:
      JSON.parse(sessionStorage.getItem("filterGender")) || storeData,
    filterType:
     JSON.parse(sessionStorage.getItem("filterdType")) || storeData,
    CounterProducts: 0,

    error: false,
  },
  reducers: {
    filterProducts(state, action) {
      try {
        const filter = storeData.filter(
          (product) => product.type === action.payload
        );
        console.log("action pyload", action.payload);
        state.filterProducts = filter;
        console.log("product", filter);
        const savedState = JSON.stringify(filter);
        sessionStorage.setItem("filterdData", savedState);
      } catch (err) {
        return err;
      }
    },
    singleProducts(state, action) {
      try {
        const oneProducts = storeData.filter(
          (one) => one.id === action.payload
        );
        state.singleProducts = oneProducts;
        console.log("single", oneProducts);
        const saveData = JSON.stringify(oneProducts);
        sessionStorage.setItem("oneProducts", saveData);
      } catch (err) {
        return err;
      }
    },
    filterGender(state, action) {
      try {
        const gendre = storeData
          .map((product) => product)
          .filter((product) => product.gendre === action.payload);
        console.log("GenderAction:", action.payload);
        console.log("gender:", gendre);
        state.error = false;
        state.filterGender = gendre;
        const oneGenderType = gendre.length > 0;
        if (oneGenderType) {
          state.error = false;
          const saveState = JSON.stringify(gendre);
          sessionStorage.setItem("filterGender", saveState);
        } else {
          state.error = true;
          state.filterGender = [];
        }
      } catch (err) {
        return err;
      }
      console.log("errooor:", state.error);
    },
    filterType(state, action) {
      const dataType = action.payload;
      console.log("filterType::", dataType);
      try {
        const result = storeData
          .map((product) => product)
          .filter((product) => product.type === dataType);
        state.filterType = result;
        console.log("resuuult:", state.filterType);
        const savedState = JSON.stringify(result);
        sessionStorage.setItem("filterdType", savedState);
      } catch (err) {
        return err;
      }
    },

    CounterProducts(state,action){
      state.CounterProducts = action.payload;
      console.log("calcul",state.CounterProducts)
      // const savedState = JSON.stringify(datacount);
      // sessionStorage.setItem("dataCount", savedState);

    }

  },
});
export const { filterProducts, singleProducts, filterGender, filterType,CounterProducts } =
  productSlice.actions;
export default productSlice.reducer;
