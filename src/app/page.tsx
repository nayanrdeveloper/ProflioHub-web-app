'use client';

import { fetchEducations } from '@/redux/educations/educationAction';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Image from 'next/image';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Home() {
    const { educations } = useAppSelector((state) => state.education);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchEducations());
    }, [dispatch]);

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1 className="text-4xl font-bold">Welcome to your Next.js app!</h1>
            <Image
                src="/nextjs-logo.png"
                alt="Next.js Logo"
                width={200}
                height={200}
            />
            {educations.map((education) => (
                <div
                    key={education.id}
                    className="bg-gray-100 p-4 rounded-lg shadow-md"
                >
                    <h2 className="text-xl font-bold">{education.name}</h2>
                    <p className="text-lg">{education.degree}</p>
                </div>
            ))}
            <p className="text-lg text-center">
                Get started by editing <code>pages/index.tsx</code>
            </p>
            <div>
                <Button>Click me</Button>
            </div>
        </div>
    );
}
