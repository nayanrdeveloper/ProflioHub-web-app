import React from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import InputWithLabel from '../common/InputWithLabel';
import { updateLoginField } from '@/redux/auth/authSlice';
import { Button } from '../ui/button';

const LoginForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const { email, password, loading } = useAppSelector(
        (state) => state.auth.login
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        dispatch(
            updateLoginField({ field: name as 'email' | 'password', value })
        );
    };

    return (
        <form className="w-full max-w-md space-y-4">
            <InputWithLabel
                label="Email"
                value={email}
                name="email"
                placeholder="Email"
                onChange={handleInputChange}
            />
            <InputWithLabel
                label="Password"
                value={password}
                name="password"
                placeholder="Password"
                onChange={handleInputChange}
            />
            <Button
                type="submit"
                className="btn-primary w-full"
                disabled={loading}
            >
                {loading ? 'Loading...' : 'Login'}
            </Button>
        </form>
    );
};

export default LoginForm;
