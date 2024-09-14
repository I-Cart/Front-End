import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { updateSpecificUserOrders } from "../users/usersSlice";
import { updateUserOrders } from "../auth/authSlice";
import { resetCart } from "../cart/cartSlice";

const initialState = {
    orders: [],
};
export const createOrder = createAsyncThunk('orders/createOrder', async (payload, { dispatch, getState }) => {
    const { auth, } = getState();
    const order = payload
    if (auth.user) {
        dispatch(updateSpecificUserOrders({ user: auth.user, order }))
        dispatch(updateUserOrders(order))
        dispatch(resetCart())
    }
    return order
})


const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        resetOrders(state) {
            state.orders = []
        },
        setOrders(state, { payload }) {
            state.orders = payload
        }
    },
    extraReducers(builder) {
        builder.addCase(createOrder.fulfilled, (state, action) => {
            state.orders.push(action.payload);
        })
    }
});
export const { resetOrders, setOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
