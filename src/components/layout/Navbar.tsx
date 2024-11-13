'use client';
import React, { useState } from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';

import Link from 'next/link';
import { Home, BarChart, Users, Settings, LogOut, Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from '../ui/dropdown-menu';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full flex items-center justify-between bg-gray-900 p-4 text-white shadow-md z-50">
            {/* Left Side - Sidebar Toggle + Brand Logo */}
            <div className="flex items-center space-x-4">
                <SidebarTrigger />
                <Link
                    href="/dashboard"
                    className="text-lg font-semibold hover:text-gray-300"
                >
                    MyDashboard
                </Link>
            </div>

            {/* Center - Navigation Links */}
            <div className="hidden md:flex space-x-6">
                <Link
                    href="/dashboard/analytics"
                    className="flex items-center space-x-1 hover:text-gray-300"
                >
                    <BarChart className="w-5 h-5" /> <span>Analytics</span>
                </Link>
                <Link
                    href="/dashboard/projects"
                    className="flex items-center space-x-1 hover:text-gray-300"
                >
                    <Home className="w-5 h-5" /> <span>Projects</span>
                </Link>
                <Link
                    href="/dashboard/team"
                    className="flex items-center space-x-1 hover:text-gray-300"
                >
                    <Users className="w-5 h-5" /> <span>Team</span>
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <Button
                    variant="ghost"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <Menu className="w-6 h-6" />
                </Button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-gray-900 text-white shadow-md z-50 md:hidden">
                    <Link
                        href="/dashboard/analytics"
                        className="block px-4 py-2 hover:bg-gray-800"
                    >
                        Analytics
                    </Link>
                    <Link
                        href="/dashboard/projects"
                        className="block px-4 py-2 hover:bg-gray-800"
                    >
                        Projects
                    </Link>
                    <Link
                        href="/dashboard/team"
                        className="block px-4 py-2 hover:bg-gray-800"
                    >
                        Team
                    </Link>
                </div>
            )}

            {/* Right Side - Profile Dropdown */}
            <div className="relative">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            className="relative focus:outline-none"
                        >
                            <Avatar className="w-8 h-8">
                                <AvatarImage
                                    src="/path/to/avatar.jpg"
                                    alt="User Avatar"
                                />
                                <AvatarFallback>U</AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        align="end"
                        className="bg-white text-gray-800 rounded-md shadow-lg py-2 z-10"
                    >
                        <DropdownMenuItem asChild>
                            <Link
                                href="/dashboard/profile"
                                className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100"
                            >
                                <Settings className="w-5 h-5 text-gray-600" />
                                <span>Profile</span>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link
                                href="/dashboard/settings"
                                className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100"
                            >
                                <Settings className="w-5 h-5 text-gray-600" />
                                <span>Settings</span>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <button
                                onClick={() => alert('Logged out')}
                                className="flex items-center w-full text-left space-x-2 px-4 py-2 hover:bg-gray-100"
                            >
                                <LogOut className="w-5 h-5 text-gray-600" />
                                <span>Logout</span>
                            </button>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
};

export default Navbar;
