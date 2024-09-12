import { sleep } from "@/lib/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";

const createUser = createAsyncThunk("users/createUser", async (user, thunkAPI) => {
    const { getState, rejectWithValue } = thunkAPI
    const { users: { users } } = getState()
    const isExistingUserEmail = users.find(u => u.email === user.email)
    const isExistingUserPhone = users.find(u => u.phone === user.phone)
    await sleep()
    delete user.passwordConfirm
    const errors = []
    if (isExistingUserEmail) {
        errors.push({ message: "This email already exists.", type: "validation", field: "email" })
    }
    if (isExistingUserPhone) {
        errors.push({ message: "This phone number is already in use. Try another one!", type: "validation", field: "phone" })
    }
    if (errors.length > 0) {
        return rejectWithValue(errors)
    }
    return user

})
export default createUser;