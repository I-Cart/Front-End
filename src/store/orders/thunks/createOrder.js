import { updateUserOrders } from "@/store/auth/authSlice";
import { resetCart } from "@/store/cart/cartSlice";
import { updateSpecificUserOrders } from "@/store/users/usersSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

const createOrder = createAsyncThunk('orders/createOrder', async (payload, { dispatch, getState }) => {
    const { auth, } = getState();
    const order = payload
    if (auth.user) {
        dispatch(updateSpecificUserOrders({ user: auth.user, order }))
        dispatch(updateUserOrders(order))
        dispatch(resetCart())
    }
    return order
})
export default createOrder
