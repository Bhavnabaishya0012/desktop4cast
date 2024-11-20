'use client';

import React, { useState } from 'react';

export default function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); // Call the search handler function from props
    };

    return (
    <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search..."
        className="border rounded-md p-2 text-black search-input"
    />
    );
}
