import { createAsyncThunk } from "@reduxjs/toolkit"
import { setUsers } from "../usersSlice"

export const deleteUser = createAsyncThunk("users/deleteUser", async (user, thunkAPI) => {
    const { dispatch, getState } = thunkAPI
    const { auth: { user: currentUser }, users: { users } } = getState()
    if (currentUser.email !== user.email) {
        const usersClone = structuredClone(users)
        const userIndex = usersClone.findIndex(u => u.email === user.email)
        if (userIndex !== -1) {
            usersClone.splice(userIndex, 1)
            dispatch(setUsers(usersClone))
        }
    }
})
export default deleteUser
