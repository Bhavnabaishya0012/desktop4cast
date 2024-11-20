// Header.tsx
'use client';

import React, { useState } from 'react';
import { ActiveLink, SelectAppChain, LiveSwitcher } from '@/components';
import { ConnectButton } from '@rainbow-me/rainbowkit';

interface HeaderProps {
    onSearch?: (query: string) => void;
}

export function Header({ onSearch }: HeaderProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [isBetSummaryOpen, setBetSummaryOpen] = useState(false);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
        onSearch && onSearch(query);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSearch && onSearch(searchQuery);
        }
    };

    const toggleBetSummary = () => {
        setBetSummaryOpen(!isBetSummaryOpen);
    };

    return (
        <nav className="flex flex-col p-4 bg-neutral-900 h-full relative">
            <div className="text-2xl font-semibold mb-4 text-gray-200">Azuro Betting</div>
            <ul className="space-y-2">
                <li>
                    <ActiveLink
                        className="category-button"
                        activeClassName="category-button active"
                        href="/events/top"
                    >
                        Top
                    </ActiveLink>
                </li>
                <li>
                    <ActiveLink
                        className="category-button"
                        activeClassName="category-button active"
                        href="/events/football"
                    >
                        Football
                    </ActiveLink>
                </li>
                <li>
                    <ActiveLink
                        className="category-button"
                        activeClassName="category-button active"
                        href="/events/american-football"
                    >
                        American Football
                    </ActiveLink>
                </li>
                <li>
                    <ActiveLink
                        className="category-button"
                        activeClassName="category-button active"
                        href="/events/tennis"
                    >
                        Tennis
                    </ActiveLink>
                </li>
                <li>
                    <ActiveLink
                        className="category-button"
                        activeClassName="category-button active"
                        href="/events/rugby-union"
                    >
                        Rugby Union
                    </ActiveLink>
                </li>
                <li>
                    <ActiveLink
                        className="category-button"
                        activeClassName="category-button active"
                        href="/events/ice-hockey"
                    >
                        Ice Hockey
                    </ActiveLink>
                </li>
                <li>
                    <ActiveLink
                        className="category-button"
                        activeClassName="category-button active"
                        href="/events/politics"
                    >
                        Politics
                    </ActiveLink>
                </li>
                <li>
                    <ActiveLink
                        className="category-button"
                        activeClassName="category-button active"
                        href="/events/mma"
                    >
                        MMA
                    </ActiveLink>
                </li>
                <li>
                    <ActiveLink
                        className="category-button"
                        activeClassName="category-button active"
                        href="/events/basketball"
                    >
                        Basketball
                    </ActiveLink>
                </li>
                <li>
                    <ActiveLink
                        className="category-button"
                        activeClassName="category-button active"
                        href="/events/baseball"
                    >
                        Baseball
                    </ActiveLink>
                </li>
                <li>
                    <ActiveLink
                        className="category-button"
                        activeClassName="category-button active"
                        href="/events/lol"
                    >
                        League of Legends
                    </ActiveLink>
                </li>
                <li>
                    <ActiveLink
                        className="category-button"
                        activeClassName="category-button active"
                        href="/events/boxing"
                    >
                        Boxing
                    </ActiveLink>
                </li>
                <li>
                    <ActiveLink
                        className="category-button"
                        activeClassName="category-button active"
                        href="/events/cs2"
                    >
                        Counter-strike 2
                    </ActiveLink>
                </li>
                <li>
                    <ActiveLink
                        className="category-button"
                        activeClassName="category-button active"
                        href="/events/dota-2"
                    >
                        Dota 2
                    </ActiveLink>
                </li>
                <li>
                    <ActiveLink
                        className="category-button"
                        activeClassName="category-button active"
                        href="/events/csgo"
                    >
                        CS:GO
                    </ActiveLink>
                </li>
                <li>
                    <ActiveLink
                        className="category-button"
                        activeClassName="category-button active"
                        href="/events/cricket"
                    >
                        Cricket
                    </ActiveLink>
                </li>
                <li>
                    <ActiveLink
                        className="category-button"
                        activeClassName="category-button active"
                        href="/events/rugby-league"
                    >
                        Rugby League
                    </ActiveLink>
                </li>
                {/* Betting Summary button */}
                <li className="relative">
                    <button
                        onClick={toggleBetSummary}
                        className="category-button bg-indigo-500 hover:bg-indigo-600 text-white mt-2"
                    >
                        Betting Summary
                    </button>
                    {/* Render the Betting Summary pop-up if open */}
                    {isBetSummaryOpen && (
                        <div className="absolute bottom-12 left-0 w-64 bg-zinc-100 p-4 rounded-md border border-solid max-w-sm shadow-lg">
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-bold">To Payout:</span> 0 USDT
                            </div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-bold">In Bets:</span> 0 USDT
                            </div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-bold">Total Payout:</span> 0 USDT
                            </div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-bold">Total Profit:</span> 0 USDT
                            </div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-bold">Bets Count:</span> 0
                            </div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-bold">Won Bets:</span> 0
                            </div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-bold">Lost Bets:</span> 0
                            </div>
                        </div>
                    )}
                </li>
            </ul>

            <div className="mt-auto">
                <div className="mt-4">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        onKeyDown={handleKeyDown}
                        placeholder="Search..."
                        className="border rounded-md p-2 text-black w-full"
                    />
                </div>
                <LiveSwitcher />
                <SelectAppChain />
                <ConnectButton chainStatus="none" />
            </div>
        </nav>
    );
}
