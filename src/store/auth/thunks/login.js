import { sleep } from "@/lib/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";
const login = createAsyncThunk("auth/login", async (payload, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI
    const { users: { users } } = getState()
    const user = users.find(user => user.email === payload.email)
    await sleep()
    if (!user || !user.password === payload.password) {
        return rejectWithValue({ message: "Invalid email or password" })
    }
    return user
})
export default login;