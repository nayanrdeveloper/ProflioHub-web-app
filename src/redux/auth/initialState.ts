import { AuthState } from './authType';

export const authInitialState: AuthState = {
    login: {
        email: '',
        password: '',
        loading: false,
        error: null,
    },
    registration: {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        confirmPassword: '',
        loading: false,
        error: null,
    },
    user: {
        id: null,
        name: null,
        email: null,
    },
};
