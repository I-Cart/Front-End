import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateSpecificUserCart } from "../../users/usersSlice";
import { updateUserCart } from "../../auth/authSlice";

const updateProductQuantity = createAsyncThunk('cart/updateProductQuantity', async ({ id, quantity }, { dispatch, getState }) => {
    const { cart: { cart }, auth: { user } } = getState()
    const newCart = cart.map(p => p.id === id ? { ...p, quantity } : p)
    if (user) {
        dispatch(updateSpecificUserCart({ user, cart: newCart }))
        dispatch(updateUserCart(newCart))
    }
    return newCart
})

export default updateProductQuantity;
