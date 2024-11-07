'use client'; // Ensure that AppProvider is treated as a Client Component

import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/redux/store';
// Add other providers here as needed (e.g., React Query, Theme Provider)

interface AppProviderProps {
    children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    return (
        <ReduxProvider store={store}>
            {/* Add other providers here, e.g., <QueryClientProvider> for React Query */}
            {children}
        </ReduxProvider>
    );
};

export default AppProvider;
