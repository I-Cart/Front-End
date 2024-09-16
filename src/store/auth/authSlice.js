import { createSlice } from "@reduxjs/toolkit";
import login from "./thunks/login";
import logout from "./thunks/logout";
const initialState = {
    user: null,
    loading: "idle",
    error: null
};

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
        },
        setUser(state, { payload }) {
            state.user = payload
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
export const { clearFeedback, updateUserCart, updateUserOrders, setUser } = usersSlice.actions
export default usersSlice.reducer;
