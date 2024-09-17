import { createSlice } from "@reduxjs/toolkit";

const messagesSlice = createSlice({
    initialState: {
        messages: []
    },
    name: "messages",
    reducers: {
        sendMessage: (state, action) => {
            const newMessage = {
                ...action.payload,
                date: new Date().toISOString(),
                status: "unread",
                id: Math.random()
            };
            state.messages.push(newMessage);
        },
        deleteMessage: (state, action) => {
            const id = action.payload;
            state.messages = state.messages.filter(message => message.id != id);
        },
        markAsRead: (state, action) => {
            const id = action.payload;
            const message = state.messages.find(message => message.id == id);
            if (message) {
                message.status = "read";
            }
        }
    }
})

export const { sendMessage, deleteMessage, markAsRead } = messagesSlice.actions;

export default messagesSlice.reducer;
