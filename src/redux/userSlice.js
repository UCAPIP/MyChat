import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        chatId: 0,
        userId: 0,
        name: "IVAN NIKO",
        login: "IVAN NIKO",
        password: "qwerty123"
    },
    {
        chatId: 1,
        userId: 1,
        name: "Its Me",
        login: "Its Me",
        password: "qwerty123"
    },
    {
        chatId: 2,
        userId: 2,
        name: "ChikiPiki",
        login: "ChikiPiki",
        password: "qwerty123"
    }
];

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setNewUser(state, action){
            state = [...state, action.payload];
            return state;
        }
    }
})

export const { setNewUser } = userSlice.actions;
export default userSlice.reducer;