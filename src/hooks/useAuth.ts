'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';

interface TokenPayload {
    exp: number;
}

export const useAuth = () => {
    const router = useRouter();
    const token =
        typeof window !== 'undefined' ? localStorage.getItem('token') : null;

    useEffect(() => {
        if (!token) {
            router.push('/auth');
            return;
        }

        try {
            // Decode the token to check expiration
            const { exp } = jwtDecode<TokenPayload>(token);

            // If token is expired, remove it and redirect to login
            if (Date.now() >= exp * 1000) {
                localStorage.removeItem('token');
                router.push('/auth');
            }
        } catch {
            // If decoding fails (invalid token), redirect to login
            localStorage.removeItem('token');
            router.push('/auth');
        }
    }, [token, router]);

    return token;
};
