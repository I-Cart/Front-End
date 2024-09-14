import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import login from "./thunks/login";
import { resetCart } from "../cart/cartSlice";
import { resetOrders } from "../orders/ordersSlice";
const initialState = {
    user: null,
    loading: "idle",
    error: null
};
const logout = createAsyncThunk('auth/logout', (_, { dispatch }) => {
    dispatch(resetCart())
    dispatch(resetOrders())
    return
})
const usersSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clearFeedback: (state) => {
            state.error = null
            state.loading = "idle";
        },

        updateUserCart(state, { payload }) {
            state.user.cart = payload
        },
        updateUserOrders(state, { payload }) {
            state.user.orders.push(payload);
        }
    },
    extraReducers(builder) {
        builder.addCase(login.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        }).addCase(login.fulfilled, (state, { payload }) => {
            state.loading = "succeeded"
            state.user = payload;
        }).addCase(login.rejected, (state, action) => {
            state.loading = "failed";
            state.error = action.payload
        }).addCase(logout.fulfilled, (state) => {
            state.error = null;
            state.loading = "idle";
            state.user = null
        })
    },
});
export { login, logout }
export const { clearFeedback, updateUserCart, updateUserOrders } = usersSlice.actions
export default usersSlice.reducer;
