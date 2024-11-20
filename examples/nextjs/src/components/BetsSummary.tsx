// BetsSummary.tsx
'use client'
import React, { useState } from 'react';
import { useBetsSummary, useChain } from "@azuro-org/sdk";
import { useAccount } from "wagmi";

function Content() {
  const { address } = useAccount();
  const { betToken } = useChain();
  const { 
    toPayout, inBets, totalPayout, totalProfit, 
    betsCount, wonBetsCount, lostBetsCount, loading 
  } = useBetsSummary({ account: address! });

  if (!address || loading) {
    return null;
  }

  return (
    <div className="bg-zinc-100 p-4 rounded-md border border-solid max-w-sm">
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold">To Payout:</span>
        {toPayout} {betToken.symbol}
      </div>
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold">In Bets:</span>
        {inBets} {betToken.symbol}
      </div>
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold">Total Payout:</span>
        {totalPayout} {betToken.symbol}
      </div>
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold">Total Profit:</span>
        {totalProfit} {betToken.symbol}
      </div>
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold">Bets Count:</span>
        {betsCount}
      </div>
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold">Won Bets:</span>
        {wonBetsCount}
      </div>
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold">Lost Bets:</span>
        {lostBetsCount}
      </div>
    </div>
  );
}

export function BetsSummary() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      {isOpen && <Content />}
    </div>
  );
}
