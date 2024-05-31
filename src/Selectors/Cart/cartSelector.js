export const cartSelector = (state) => state.cart.cart


export const totalAmountSelector = (state) => state.cart.totalAmount


const totalPriceSelector = (state) => state.cart.totalPrice
export default totalPriceSelector
