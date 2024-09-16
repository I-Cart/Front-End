import { setUser } from "@/store/auth/authSlice";
import { setCart } from "@/store/cart/cartSlice";
import { setUsers } from "@/store/users/usersSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

const updateProduct = createAsyncThunk("products/updateProduct", (product, thunkAPI) => {
    const { dispatch, getState } = thunkAPI
    const { cart: { cart }, users: { users }, auth: { user } } = getState()
    const indexInCart = cart.findIndex(p => p.id === product.id)
    if (indexInCart !== -1) {
        const newCart = structuredClone(cart)
        newCart[indexInCart] = { ...newCart[indexInCart], ...product }
        dispatch(setCart(newCart))
        const newUser = structuredClone(user)
        newUser.cart[indexInCart] = { ...newUser.cart[indexInCart], ...product }
        dispatch(setUser(newUser))
    }
    let changed = false
    const newUsers = structuredClone(users)

    newUsers.forEach(u => {
        const indexInUserCart = user.cart.findIndex(p => p.id === product.id)
        if (indexInUserCart !== -1) {
            u.cart[indexInUserCart] = { ...u.cart[indexInUserCart], ...product }

            changed = true
        }
    });
    if (changed) {
        dispatch(setUsers(newUsers))
    }
    return product
})
export default updateProduct
