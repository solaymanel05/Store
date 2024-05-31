import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
  },

  reducers: {
    addToCart(state, action) {
      const productId = action.payload;
      console.log("action product", productId);
      try {
        const exist = state.cart.find(
          (product) =>
            product.id === productId.id &&
            product.size === productId.size &&
            product.color === productId.color
        );
        if (exist) {
          exist.amount++;
          exist.totalPrice += productId.price;
          state.totalAmount++;
          state.totalPrice += productId.price;
        } else
          state.cart.push({
            name: productId.name,
            image: productId.image,
            type: productId.type,
            id: productId.id,
            price: productId.price,
            size: productId.size,
            color: productId.color,
            title: productId.title,
            amount: 1,
            totalPrice: productId.price,
          });
        state.totalAmount++;
        state.totalPrice += productId.price;
      } catch (err) {
        return err;
      }
    },
    removeFromCart(state, action) {
      const productRemo = action.payload;
      console.log("removepro", productRemo);
      try {
        const exist = state.cart.find(
          (product) =>
            product.id === productRemo.id &&
            product.size === productRemo.size &&
            product.color === productRemo.color
        );
        if (exist.amount === 1) {
          state.cart = state.cart.filter(
            (product) =>
              product.id !== productRemo.id ||
              product.size !== productRemo.size ||
              product.color !== productRemo.color
          );
          state.totalAmount--;
          state.totalPrice -= productRemo.price;
        } else {
          exist.amount--;
          exist.totalPrice -= productRemo.price;
          state.totalAmount--;
          state.totalPrice -= productRemo.price;
        }
      } catch (err) {
        return err
      }
    },
  },
  
})
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
