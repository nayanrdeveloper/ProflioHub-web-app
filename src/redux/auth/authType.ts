export interface User {
    id: string | null;
    name: string | null;
    email: string | null;
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
        confirmPassword: string;
        loading: boolean;
        error: string | null;
    };
    user: User;
}

export interface AuthResponsePayload {
    id: string;
    name: string;
    email: string;
}

type LoginField = 'email' | 'password';
type RegistrationField = 'email' | 'password' | 'confirmPassword';

// Payload for field update actions
export interface UpdateFieldPayload<T extends LoginField | RegistrationField> {
    field: string;
    value: string;
}
