import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateSpecificUserCart } from "../../users/usersSlice";
import { updateUserCart } from "../../auth/authSlice";

const removeProduct = createAsyncThunk('cart/removeProduct', (id, { dispatch, getState }) => {
    const { cart: { cart }, auth: { user } } = getState()
    const newCart = cart.filter((product) => product.id != id)
    if (user) {
        dispatch(updateSpecificUserCart({ user, cart: newCart }))
        dispatch(updateUserCart(newCart))
    }
    return newCart
})
export default removeProduct
