export interface User {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
}

export interface AuthState {
    login: {
        email: string;
        password: string;
        loading: boolean;
        error: string | null;
    };
    registration: {
        email: string;
        firstName: string;
        lastName: string;
        password: string;
        loading: boolean;
        error: string | null;
    };
    user: User;
}

export interface AuthResponsePayload {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

type LoginField = 'email' | 'password';
type RegistrationField = 'email' | 'password' | 'firstName' | 'lastName';

// Payload for field update actions
export interface UpdateFieldPayload {
    field: LoginField | RegistrationField;
    value: string;
}
