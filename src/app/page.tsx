'use client';

import { apiCall } from '@/utils/apiCall';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await apiCall({ url: 'todos/1' });
                console.log('API Response:', data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1 className="text-4xl font-bold">Welcome to your Next.js app!</h1>
            <Image
                src="/nextjs-logo.png"
                alt="Next.js Logo"
                width={200}
                height={200}
            />
            <p className="text-lg text-center">
                Get started by editing <code>pages/index.tsx</code>
            </p>
        </div>
    );
}
