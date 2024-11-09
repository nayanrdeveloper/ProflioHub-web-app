import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authInitialState } from './initialState';
import { AuthResponsePayload, UpdateFieldPayload } from './authType';

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        updateLoginField: (
            state,
            action: PayloadAction<UpdateFieldPayload>
        ) => {
            state.login[action.payload.field as 'email' | 'password'] =
                action.payload.value;
        },
        updateRegistrationField: (
            state,
            action: PayloadAction<UpdateFieldPayload>
        ) => {
            state.registration[
                action.payload.field as
                    | 'email'
                    | 'password'
                    | 'firstName'
                    | 'lastName'
            ] = action.payload.value;
        },
        // Login actions
        loginStart: (state) => {
            state.login.loading = true;
            state.login.error = null;
        },
        loginSuccess: (state, action: PayloadAction<AuthResponsePayload>) => {
            state.login.loading = false;
            state.user = action.payload;
        },
        loginFailure: (state, action: PayloadAction<string>) => {
            state.login.loading = false;
            state.login.error = action.payload;
        },

        // Registration actions
        registerStart: (state) => {
            state.registration.loading = true;
            state.registration.error = null;
        },
        registerSuccess: (
            state,
            action: PayloadAction<AuthResponsePayload>
        ) => {
            state.registration.loading = false;
            state.user = action.payload;
        },
        registerFailure: (state, action: PayloadAction<string>) => {
            state.registration.loading = false;
            state.registration.error = action.payload;
        },
    },
});

export const {
    updateLoginField,
    updateRegistrationField,
    loginStart,
    loginSuccess,
    loginFailure,
    registerStart,
    registerSuccess,
    registerFailure,
} = authSlice.actions;

export default authSlice.reducer;
