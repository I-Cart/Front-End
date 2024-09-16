import { createSlice } from "@reduxjs/toolkit";

import addProduct from "./thunks/addProduct";
import removeProduct from "./thunks/removeProduct";
import updateProductQuantity from "./thunks/updateProductQuantity";

const initialState = {
  cart: [],
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCart(state) {
      state.cart = []
    },
    setCart(state, { payload }) {
      state.cart = payload
    },

  },
  extraReducers(builder) {
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.cart.push(action.payload);
    }).addCase(removeProduct.fulfilled, (state, { payload }) => {
      state.cart = payload
    }).addCase(updateProductQuantity.fulfilled, (state, { payload }) => {
      state.cart = payload
    })
  }
});
export { addProduct, removeProduct, updateProductQuantity }
export const { resetCart, setCart } = cartSlice.actions;
export default cartSlice.reducer;
