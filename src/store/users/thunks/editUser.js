import { createAsyncThunk } from "@reduxjs/toolkit"
import { setUsers } from "../usersSlice"
import { setUser } from "@/store/auth/authSlice"

const editUser = createAsyncThunk("users/editUser", async (user, thunkAPI) => {
    const { dispatch, getState } = thunkAPI
    const { auth: {
        user: currentUser
    }, users: { users } } = getState()
    const currentUserClone = structuredClone(currentUser)
    const usersClone = structuredClone(users)
    const userIndex = usersClone.findIndex(u => u.email === user.email)
    if (userIndex !== -1) {
        usersClone[userIndex] = { ...usersClone[userIndex], ...user }
        dispatch(setUsers(usersClone))
        if (currentUserClone.email === user.email) {
            dispatch(setUser(usersClone[userIndex]))
        }
    }
})
export default editUser
