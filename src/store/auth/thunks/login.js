import { sleep } from "@/lib/utils";
import { setCart } from "@/store/cart/cartSlice";
import { setOrders } from "@/store/orders/ordersSlice";
import { updateSpecificUserCart } from "@/store/users/usersSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
const login = createAsyncThunk("auth/login", async (payload, thunkAPI) => {
    const { rejectWithValue, getState, dispatch } = thunkAPI
    const { users: { users }, cart: { cart } } = getState()
    const user = users.find(user => user.email === payload.email)
    await sleep()
    if (!user || user.password !== payload.password) {
        return rejectWithValue({ message: "Invalid email or password" })
    }
    if (cart.length > 0) {
        const combinedCart = Object.groupBy([...cart, ...user.cart], ({ id }) => id)
        const newCart = Object.values(combinedCart).map((arr) => arr.reduce((acc, el) => ({ ...acc, quantity: acc.quantity + el.quantity })))
        dispatch(updateSpecificUserCart({ cart: newCart, user }))
        dispatch(setCart(newCart))

    } else dispatch(setCart(user.cart))
    dispatch(setOrders(user.orders))
    return user
})
export default login;