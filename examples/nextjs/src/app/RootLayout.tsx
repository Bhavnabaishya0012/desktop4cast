'use client';
import { useState } from 'react';
import { Header, Betslip, BetsSummary } from '@/components';
import '@rainbow-me/rainbowkit/styles.css';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <html lang="en">
        <body className="bg-black text-gray-100">
            <div className="relative">
            {/* Sidebar for Mobile */}
            <aside
                className={`${
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } md:hidden fixed inset-y-0 left-0 w-2/3 max-w-xs bg-neutral-800 text-gray-200 z-50 transform transition-transform duration-300 ease-in-out`}
            >
                {/* Sidebar content */}
                <Header />
                <BetsSummary />
            </aside>

            {/* Sidebar Toggle Button */}
            <button
                className="sidebar-toggle md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-indigo-500 text-white"
                onClick={() => setSidebarOpen(!isSidebarOpen)}
            >
                ☰
            </button>

            {/* Main Content */}
            <main className={`${isSidebarOpen ? 'content-shifted' : ''} ml-[20%] flex flex-col`}>
                <TopNav onSearch={() => {}} />
                <div className="bg-black p-4 rounded-lg text-gray-100 flex-grow">{children}</div>
                <Betslip />
                <Footer />
            </main>
            </div>
        </body>
        </html>
    );
}
