// Header.tsx
'use client';

import React, { useState } from 'react';
import { ActiveLink } from '@/components';
import Image from 'next/image';

interface HeaderProps {
  onSearch?: (query: string) => void;
}

export function Header({ onSearch }: HeaderProps) {
  const [isBetSummaryOpen, setBetSummaryOpen] = useState(false);

  const toggleBetSummary = () => {
    setBetSummaryOpen(!isBetSummaryOpen);
  };

  return (
    <nav className="flex flex-col p-4 bg-neutral-900 h-full min-h-screen flex-grow relative">
      {/* Logo and 4Cast Market */}
      <div className="flex items-center mb-4">
        <img src="/logo1.png" alt="Logo" className="w-20 h-20 mr-3" /> {/* Adjusted size */}
        <div className="text-3xl font-bold text-gray-250" style={{ fontFamily: 'Aclonica' }}> {/* Custom font */}
          4Cast Market
        </div>
      </div>
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
            className="category-button bg-indigo-500 hover:bg-indigo-600 text-white mt-7 mb-10"
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
    </nav>
  );
}
