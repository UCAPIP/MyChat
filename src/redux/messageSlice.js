import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

const initialState = [
    {
        chatId: 0,
        messagesText: [
        {
            sender: true,
            text: "bla bla bla",
            date: moment().format('D.M.YYYY h:mm a')
        }, 
        {
            sender: false,
            text: "bla bla bla",
            date: moment().format('D.M.YYYY h:mm a')
        }]     
    },
    {
        chatId: 1,
        messagesText: [
        {
          sender: true,
          text: "hello OLA OLA OAL",
          date: moment().format('D.M.YYYY h:mm a')
        }, 
        {
          sender: true,
          text: "bla bla bla",
          date: moment().format('D.M.YYYY h:mm a')
        }]
    },
    {
        chatId: 2,
        messagesText: [
        {
            sender: false,
            text: "hello OLA OLA OAL",
            date: moment().format('D.M.YYYY h:mm a')
        }, 
        {
            sender: false,
            text: "bla bla bla",
            date: moment().format('D.M.YYYY h:mm a')
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