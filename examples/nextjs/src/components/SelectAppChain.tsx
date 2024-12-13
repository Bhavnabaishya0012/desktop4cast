'use client';
import { useEffect } from 'react';
import { useChain } from '@azuro-org/sdk';
import { polygon } from 'viem/chains';

export function SelectAppChain() {
  const { setAppChainId } = useChain();

  // On component mount, permanently set the chain to Polygon
  useEffect(() => {
    setAppChainId(polygon.id); // Set the chain to Polygon
    localStorage.setItem('selectedChainId', polygon.id.toString()); // Save it to localStorage (optional)
  }, [setAppChainId]);

  return (
    <div className="mr-4 py-1 mt-1">
      <div
        className="rounded-full border border-gray-600 px-4 py-2 text-sm font-medium text-white bg-neutral-800 hover:bg-neutral-600 transition-all"
        style={{
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Adds subtle depth
        }}
      >
        {polygon.name}
      </div>
    </div>
  );
}
