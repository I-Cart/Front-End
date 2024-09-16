import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateSpecificUserCart } from "../../users/usersSlice";
import { updateUserCart } from "../../auth/authSlice";

const addProduct = createAsyncThunk('cart/addProduct', async (payload, { dispatch, getState }) => {
    const product = { ...payload, quantity: 1 };
    const { auth, cart } = getState();
    const newCart = [...cart.cart, product]
    if (auth.user) {
        dispatch(updateSpecificUserCart({ user: auth.user, cart: newCart }))
        dispatch(updateUserCart(newCart))
    }
    return product
})
export default addProduct
