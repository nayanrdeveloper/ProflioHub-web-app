import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import Navbar from '../layout/Navbar';
import { AppSidebar } from '../layout/AppSideBar';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <SidebarProvider>
            <div className="flex h-screen">
                <AppSidebar />
                <div className="flex flex-col flex-1">
                    {/* Navbar spans full width of the main content area */}
                    <Navbar />
                    <main className="flex-1 overflow-auto p-4">{children}</main>
                </div>
            </div>
        </SidebarProvider>
    );
};

export default DashboardLayout;
