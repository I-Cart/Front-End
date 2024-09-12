import { createSlice } from "@reduxjs/toolkit";
import login from "./thunks/login";
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
        })
    },
});
export { login }
export const { clearFeedback } = usersSlice.actions
export default usersSlice.reducer;
