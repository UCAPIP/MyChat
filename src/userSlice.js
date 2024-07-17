import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

const initialState = {
    chatId: 0,
    messagesText: [
    {
        sender: "user",
        text: "bla bla bla",
        date: moment().format('MMMM Do YYYY, h:mm:ss a')
    }, 
    {
        sender: "me",
        text: "bla bla bla",
        date: moment().format('MMMM Do YYYY, h:mm:ss a')
    }]     
};

const userSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        setNewMessage(state, action){
            state.messagesText.push(action.payload);
        }
    }
})

export const { setNewMessage } = userSlice.actions;
export default userSlice.reducer;