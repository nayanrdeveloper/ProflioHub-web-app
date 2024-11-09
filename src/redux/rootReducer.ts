import { combineReducers } from '@reduxjs/toolkit';
import educationReducer from './educations/educationSlice';

const rootReducer = combineReducers({
    education: educationReducer,
});

export default rootReducer;
