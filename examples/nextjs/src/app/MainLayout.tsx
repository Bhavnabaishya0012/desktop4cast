// MainLayout.tsx
import React from 'react';
import { Providers, Header, Betslip, BetsSummary } from '@/components';
import TopNav from '@/components/TopNav';
import Footer from '@/components/Footer';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex bg-black h-screen overflow-hidden">
            {/* Sidebar */}
            <aside className="w-1/4 md:w-1/5 bg-neutral-800 p-4 h-full fixed border-r border-gray-700">
                <Header />
                <BetsSummary />
            </aside>

            {/* Main content */}
            <main className="flex-1 overflow-y-auto ml-[20%] flex flex-col">
                <TopNav onSearch={function (query: string): void {
                    throw new Error('Function not implemented.');
                } } />
                <div className="bg-black p-4 rounded-lg text-gray-100 flex-grow">
                    {children}
                </div>
                <Betslip />
                <Footer />
            </main>
        </div>
    );
}
