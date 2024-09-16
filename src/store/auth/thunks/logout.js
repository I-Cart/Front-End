import { createAsyncThunk } from "@reduxjs/toolkit";
import { resetCart } from "../../cart/cartSlice";
import { resetOrders } from "../../orders/ordersSlice";

const logout = createAsyncThunk('auth/logout', (_, { dispatch }) => {
    dispatch(resetCart())
    dispatch(resetOrders())
    return
})

export default logout;