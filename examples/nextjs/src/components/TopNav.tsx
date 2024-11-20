'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Use next/navigation for the app directory router
import { ActiveLink, SelectAppChain, LiveSwitcher } from '@/components';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useGames, useChain } from '@azuro-org/sdk'; // Fetch the games data

export type TopNavProps = {
    onSearch: (query: string) => void;
};

export default function TopNav({ onSearch }: TopNavProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [isMounted, setIsMounted] = useState(false); // Track if component is mounted
    const router = useRouter();
    const { appChain } = useChain(); // Get the current chain

    // Fetch games using the useGames hook
    const games = useGames(); // Moved useGames into the functional component

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null; // Prevent using router before component is mounted

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        if (e.target.value.trim() !== '') {
            fetchSearchResults(e.target.value); // Fetch results dynamically
        } else {
            setSearchResults([]); // Clear search results if empty
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && searchQuery.trim() !== '') {
            router.push(`/events/${searchQuery.toLowerCase()}?chain=${appChain.id}`); // Pass chain ID in the URL
        }
    };

    // Fetch search results dynamically from the games data
    const fetchSearchResults = async (query: string) => {
        try {
            if (games && games.games) {
                // Filter the games based on the query
                const filteredGames = games.games.filter((game: any) =>
                    game.sport.name.toLowerCase().includes(query.toLowerCase()) ||
                    game.league.name.toLowerCase().includes(query.toLowerCase()) ||
                    game.participants.some((participant: any) =>
                        participant.name.toLowerCase().includes(query.toLowerCase()))
                );
    
                // Create a set of unique results based on sport or league name
                const uniqueResults = filteredGames.reduce((acc: any[], currentGame: any) => {
                    const found = acc.find((game) => game.sport.name === currentGame.sport.name && game.league.name === currentGame.league.name);
                    if (!found) acc.push(currentGame);
                    return acc;
                }, []);
    
                if (uniqueResults.length > 0) {
                    setSearchResults(uniqueResults); // Set the filtered games with unique results
                } else {
                    setSearchResults([]); // Clear if no matches
                }
            }
        } catch (error) {
            console.error('Error fetching search results', error);
            setSearchResults([]);
        }
    };

    return (
        <nav className="flex items-center justify-between p-1 bg-neutral-800 border-b border-gray-700">
            <div className="flex">
                <ActiveLink className="text-gray-200 hover:text-white px-4" activeClassName="font-bold text-white" href="/events/top">
                    Events
                </ActiveLink>
                <ActiveLink className="text-gray-200 hover:text-white px-4" activeClassName="font-bold text-white" href="/bets">
                    Bets
                </ActiveLink>
                <ActiveLink className="text-gray-200 hover:text-white px-4" activeClassName="font-bold text-white" href="/wave">
                    Azuro Wave
                </ActiveLink>
            </div>

            <div className="flex items-center relative">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Search..."
                    className="border rounded-md p-2 text-black w-32 md:w-64 mr-4"
                />
                
                {searchResults.length > 0 && (
                    <div className="absolute top-full left-0 w-full bg-black text-white shadow-lg max-h-64 overflow-y-auto z-10">
                        {searchResults.map((result: any) => (
                            <div
                                key={result.id}
                                className="p-2 hover:bg-gray-700 cursor-pointer"
                            >
                                {/* Render sport/league/tournament */}
                                <a href={`/events/${result.sport.name.toLowerCase()}?chain=${appChain.id}`}>
                                    {result.sport.name} - {result.league.name}
                                </a>

                                {/* Render only participants if searched */}
                                {result.participants.some((p: any) =>
                                    p.name.toLowerCase().includes(searchQuery.toLowerCase())
                                ) && (
                                    <a href={`/event/${result.id.split('_').pop()}?chain=${appChain.id}`}>
                                        ({result.participants.map((p: any) => p.name).join(' vs ')})
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                <LiveSwitcher />
                <SelectAppChain />
                <ConnectButton chainStatus="none" />
            </div>
        </nav>
    );
}
