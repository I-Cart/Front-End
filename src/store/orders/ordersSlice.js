import { createSlice } from "@reduxjs/toolkit";

import createOrder from "./thunks/createOrder";

const initialState = {
    orders: [],
};


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
export { createOrder }
export const { resetOrders, setOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
