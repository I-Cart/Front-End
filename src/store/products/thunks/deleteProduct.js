import { setUser } from "@/store/auth/authSlice";
import { setCart } from "@/store/cart/cartSlice";
import { setUsers } from "@/store/users/usersSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

const deleteProduct = createAsyncThunk("products/deleteProduct", (id, thunkAPI) => {
    const { dispatch, getState } = thunkAPI
    const { cart: { cart }, users: { users }, auth: { user } } = getState()
    const indexInCart = cart.findIndex(p => p.id === id)
    if (indexInCart !== -1) {
        const newCart = structuredClone(cart)
        newCart.splice(indexInCart, 1)
        dispatch(setCart(newCart))
        const newUser = structuredClone(user)
        newUser.cart.splice(indexInCart, 1)
        dispatch(setUser(newUser))
    }
    let changed = false
    const newUsers = structuredClone(users)
    newUsers.forEach(u => {
        const indexInUserCart = user.cart.findIndex(p => p.id === id)
        if (indexInUserCart !== -1) {
            u.cart.splice(indexInUserCart, 1)
            changed = true
        }
    })
    if (changed) {
        dispatch(setUsers(newUsers))
    }
    return id
})
export default deleteProduct
