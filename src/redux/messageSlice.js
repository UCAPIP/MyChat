import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

const initialState = [
    {
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
    },
    {
        chatId: 1,
        messagesText: [
        {
          sender: "user",
          text: "hello OLA OLA OAL",
          date: moment().format('MMMM Do YYYY, h:mm:ss a')
        }, 
        {
          sender: "user",
          text: "bla bla bla",
          date: moment().format('MMMM Do YYYY, h:mm:ss a')
        }]
    },
    {
        chatId: 2,
        messagesText: [
        {
            sender: "me",
            text: "hello OLA OLA OAL",
            date: moment().format('MMMM Do YYYY, h:mm:ss a')
        }, 
        {
            sender: "me",
            text: "bla bla bla",
            date: moment().format('MMMM Do YYYY, h:mm:ss a')
        }]
    }
];

const messageSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        setNewMessage(state, action){

            const chatIndex = state.findIndex(chat => chat.chatId === action.payload.chatId);

            if(chatIndex !== -1){
                const updateChat = {
                    ...state[chatIndex],
                    messagesText: [
                        ...state[chatIndex].messagesText,
                        action.payload.newMessage
                    ]
                }

                const newState = [...state];
                newState[chatIndex] = updateChat;

                return newState;
            }else{
                return state;
            }
        },
        setNewChat(state, action){
            const newState = [...state, action.payload];
            return newState;
        }
    },
})

export const { setNewMessage, setNewChat } = messageSlice.actions;
export default messageSlice.reducer;