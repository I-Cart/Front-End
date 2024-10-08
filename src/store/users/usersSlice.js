import { createSlice } from "@reduxjs/toolkit";
import createUser from "./thunks/createUser";

const initialState = {
  users: [{
    name: "Admin",
    email: "admin@icart.co",
    password: "Aa123456$",
    phone: "01019497970",
    role: "admin",
    cart: [],
    orders: []
  }],
  loading: "idle",
  errors: null
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearFeedback: (state) => {
      state.errors = null
      state.loading = "idle";
    },
    updateSpecificUserCart: (state, { payload }) => {
      state.users.find(user => user.email === payload.user.email).cart = payload.cart
    },
    updateSpecificUserOrders: (state, { payload }) => {
      state.users.find(user => user.email === payload.user.email).orders.push(payload.order);
    },
    setUsers: (state, { payload }) => {
      state.users = payload
    }
  }

  ,
  extraReducers(builder) {
    builder.addCase(createUser.pending, (state) => {
      state.loading = "pending";
      state.errors = null;
    }).addCase(createUser.fulfilled, (state, action) => {
      state.users.push({ ...action.payload, cart: [], orders: [] });
      state.loading = "succeeded"
    }).addCase(createUser.rejected, (state, action) => {
      state.errors = action.payload;
      state.loading = "failed";
    })
  },
});
export const { clearFeedback, updateSpecificUserCart, updateSpecificUserOrders, setUsers } = usersSlice.actions
export { default as editUser } from "./thunks/editUser"
export { default as deleteUser } from "./thunks/deleteUser"
export { createUser }
export default usersSlice.reducer;
