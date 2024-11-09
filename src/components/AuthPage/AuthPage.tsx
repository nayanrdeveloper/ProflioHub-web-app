'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState<boolean>(true);

    const toggleAuthMode = () => setIsLogin(!isLogin);

    return (
        <div className="flex min-h-screen">
            {/* Left Screen */}
            <div className="hidden lg:flex w-1/2 bg-gray-100 justify-center items-center">
                <div className="flex justify-center items-center h-full">
                    <Image
                        src="/online-learning-concept.png"
                        alt="Auth Illustration"
                        width={400}
                        height={400}
                    />
                </div>
            </div>
            {/* Right Screen */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8">
                <h2 className="text-2xl font-bold mb-4">
                    {isLogin ? 'Login to Your Account' : 'Create a New Account'}
                </h2>

                {isLogin ? <LoginForm /> : <RegisterForm />}

                <div className="mt-6 text-sm text-gray-600">
                    {isLogin ? (
                        <>
                            Don't have an account?{' '}
                            <button
                                onClick={toggleAuthMode}
                                className="text-primary font-semibold hover:underline"
                            >
                                Sign up
                            </button>
                        </>
                    ) : (
                        <>
                            Already have an account?{' '}
                            <button
                                onClick={toggleAuthMode}
                                className="text-primary font-semibold hover:underline"
                            >
                                Log in
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
