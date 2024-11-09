import React from 'react';
import InputWithLabel from '../common/InputWithLabel';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { updateRegistrationField } from '@/redux/auth/authSlice';
import { Button } from '../ui/button';

const RegisterForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const { email, firstName, lastName, password, loading } = useAppSelector(
        (state) => state.auth.registration
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        dispatch(updateRegistrationField({ field: name, value }));
    };

    return (
        <form className="w-full max-w-md space-y-4">
            <div className="">
                <div className="flex space-x-4">
                    <InputWithLabel
                        label="First Name"
                        name="firstName"
                        value={firstName}
                        onChange={handleInputChange}
                    />
                    <InputWithLabel
                        label="Last Name"
                        name="lastName"
                        value={lastName}
                        onChange={handleInputChange}
                    />
                </div>
                <InputWithLabel
                    label="Email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                />
                <InputWithLabel
                    label="Password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>
            <Button className="btn-primary w-full" disabled={loading}>
                {loading ? 'Loading...' : 'Register'}
            </Button>
        </form>
    );
};

export default RegisterForm;
