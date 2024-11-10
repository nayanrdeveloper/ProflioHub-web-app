import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authInitialState } from './initialState';
import { AuthResponsePayload, UpdateFieldPayload } from './authType';

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        updateLoginField: (
            state,
            action: PayloadAction<{
                field: 'email' | 'password';
                value: string;
            }>
        ) => {
            state.login[action.payload.field] = action.payload.value;
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
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.login.loading = action.payload;
        },
        setUser: (
            state,
            action: PayloadAction<{
                id: string;
                email: string;
                firstName: string;
                lastName: string;
            }>
        ) => {
            state.user = action.payload;
        },

        logout: (state) => {
            state.user = {
                id: null,
                email: null,
                firstName: null,
                lastName: null,
            };
            localStorage.removeItem('token');
            document.cookie =
                'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
        },
        setError: (state, action: PayloadAction<string | null>) => {
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
    setLoading,
    setError,
    setUser,
    logout,
    registerStart,
    registerSuccess,
    registerFailure,
} = authSlice.actions;

export default authSlice.reducer;
