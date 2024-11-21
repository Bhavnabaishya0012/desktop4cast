'use client';

import React, { useState } from 'react';

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const events = [
    { id: 1, name: 'Football Match: Team A vs Team B' },
    { id: 2, name: 'MMA Fight: Fighter X vs Fighter Y' },
    { id: 3, name: 'Tennis Match: Player 1 vs Player 2' },
  ];

  // Filter the events based on the searchQuery
  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container pt-8 pb-10 bg-black text-gray-100">
      <h1 className="text-white mb-4">Events</h1>
      <div className="bg-black text-gray-100 p-4 rounded-lg">
        {/* Search Input */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search events..."
          className="w-full p-2 rounded-lg bg-neutral-700 text-white mb-4"
        />
        {/* Show dropdown suggestions when user types */}
        {searchQuery && (
          <ul className="bg-neutral-700 p-2 rounded-lg text-white">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <li key={event.id} className="py-2 px-4 hover:bg-neutral-600">
                  {event.name}
                </li>
              ))
            ) : (
              <li className="py-2 px-4 text-gray-400">No matching events found</li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
