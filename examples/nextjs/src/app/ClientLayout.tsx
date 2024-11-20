'use client'; // Mark this as a client component

import React, { useState } from 'react';
import '@rainbow-me/rainbowkit/styles.css';
import './globals.css';
import { Providers, Header, Betslip, BetsSummary } from '@/components';

export default function ClientLayout({
    children,
    initialChainId,
    initialLiveState,
}: {
    children: React.ReactNode;
    initialChainId: string | undefined;
    initialLiveState: boolean;
}) {
    const [searchQuery, setSearchQuery] = useState('');

    // Define the onSearch (handleSearch) function
    const handleSearch = (query: string) => {
        setSearchQuery(query); // Update the search query state
    };

    return (
        <div className="md:max-w-[1040px] mx-auto bg-black">
            <Providers initialChainId={initialChainId} initialLiveState={initialLiveState}>
                {/* Pass handleSearch as the onSearch prop to Header */}
                <Header onSearch={handleSearch} />
                <main className="pt-5 pb-10">
                    <BetsSummary />
                    <div className="bg-black p-4 rounded-lg text-gray-100">
                        {React.Children.map(children, (child) =>
                            React.cloneElement(child as React.ReactElement, { searchQuery })
                        )}
                    </div>
                    <Betslip />
                </main>
            </Providers>
        </div>
    );
}
