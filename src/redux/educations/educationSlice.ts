import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { educationsInitialState } from './initialState';
import { Education } from './educationTypes';

const educationSlice = createSlice({
    name: 'educations',
    initialState: educationsInitialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setEducations: (state, action: PayloadAction<Education[]>) => {
            state.educations = action.payload;
            state.loading = false;
            state.error = null;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const { setLoading, setEducations, setError } = educationSlice.actions;
export default educationSlice.reducer;
