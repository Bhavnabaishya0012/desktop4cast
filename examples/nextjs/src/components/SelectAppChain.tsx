'use client'
import { useEffect } from 'react';
import { useChain } from '@azuro-org/sdk';
import { type ChainId } from '@azuro-org/toolkit';
import { polygonAmoy, gnosis, polygon, chiliz, spicy } from 'viem/chains';

export function SelectAppChain() {
  const { appChain, setAppChainId } = useChain();

  // On component mount, check if a chain is already saved in localStorage
  useEffect(() => {
    const savedChainId = localStorage.getItem('selectedChainId');
    if (savedChainId) {
      setAppChainId(+savedChainId as ChainId); // Set the chain based on saved value
    }
  }, [setAppChainId]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const chainId = +event.target.value as ChainId;
    setAppChainId(chainId);
    localStorage.setItem('selectedChainId', event.target.value); // Save the selected chain in localStorage
  };

  return (
    <select
      className="mr-4 cursor-pointer py-1 mt-1"
      value={appChain.id}
      onChange={handleChange}
    >
      <option value={polygonAmoy.id}>{polygonAmoy.name}</option>
      <option value={gnosis.id}>{gnosis.name}</option>
      <option value={polygon.id}>{polygon.name}</option>
      <option value={chiliz.id}>{chiliz.name}</option>
      <option value={spicy.id}>{spicy.name}</option>
    </select>
  );
}
