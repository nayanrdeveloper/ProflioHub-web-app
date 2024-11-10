'use client';
import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { useAppDispatch } from '@/redux/hooks';
import { logout } from '@/redux/auth/authSlice';

const Dashboard: React.FC = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    useAuth(); // Now useAuth will work here

    const handleLogout = () => {
        dispatch(logout()); // Clear Redux state and remove token from localStorage
        router.push('/auth'); // Redirect to login page
    };

    return (
        <div>
            <h1>Welcome to the Dashboard</h1>
            <Button onClick={handleLogout}>LogOut</Button>
        </div>
    );
};

export default Dashboard;
