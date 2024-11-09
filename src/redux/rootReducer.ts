import { combineReducers } from '@reduxjs/toolkit';
import educationReducer from './educations/educationSlice';
import authReducer from './auth/authSlice';

const rootReducer = combineReducers({
    education: educationReducer,
    auth: authReducer,
});

export default rootReducer;
