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
        loading: false,
        error: null,
    },
    user: { id: null, email: null, firstName: null, lastName: null },
};
