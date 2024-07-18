import { combineReducers } from '@reduxjs/toolkit';
import messageReducer from './messageSlice';
import userReducer from './userSlice';

export default combineReducers({
  messages: messageReducer,
  users: userReducer
});
