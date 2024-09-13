import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { updateSpecificUserCart } from "../users/usersSlice";
import { updateUserCart } from "../auth/authSlice";

const initialState = {
  cart: [],
};
export const addProduct = createAsyncThunk('cart/addProduct', async (payload, { dispatch, getState }) => {
  const product = { ...payload, quantity: 1 };
  const { auth, cart } = getState();
  const newCart = [...cart.cart, product]
  if (auth.user) {
    dispatch(updateSpecificUserCart({ user: auth.user, cart: newCart }))
    dispatch(updateUserCart(newCart))
  }
  return product
})
export const removeProduct = createAsyncThunk('cart/removeProduct', (id, { dispatch, getState }) => {
  const { cart: { cart }, auth: { user } } = getState()
  const newCart = cart.filter((product) => product.id != id)
  if (user) {
    dispatch(updateSpecificUserCart({ user, cart: newCart }))
    dispatch(updateUserCart(newCart))
  }
  return newCart
})
export const updateProductQuantity = createAsyncThunk('cart/updateProductQuantity', async ({ id, quantity }, { dispatch, getState }) => {
  const { cart: { cart }, auth: { user } } = getState()
  const newCart = cart.map(p => p.id === id ? { ...p, quantity } : p)
  if (user) {
    dispatch(updateSpecificUserCart({ user, cart: newCart }))
    dispatch(updateUserCart(newCart))
  }
  return newCart
})
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCart(state) {
      state.cart = []
    },
    setCart(state, { payload }) {
      state.cart = payload
    }
  },
  extraReducers(builder) {
    builder.addCase(addProduct.fulfilled, (state, action) => {
      console.log(action)
      state.cart.push(action.payload);
    }).addCase(removeProduct.fulfilled, (state, { payload }) => {
      state.cart = payload
    }).addCase(updateProductQuantity.fulfilled, (state, { payload }) => {
      state.cart = payload
    })
  }
});
export const { resetCart, setCart } = cartSlice.actions;
export default cartSlice.reducer;
