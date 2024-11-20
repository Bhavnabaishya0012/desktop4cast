'use client'; // Mark this component as a client component

import '@rainbow-me/rainbowkit/styles.css';
import './globals.css';
import { Providers, Header, Betslip, BetsSummary } from '@/components';
import TopNav from '@/components/TopNav'; // Adjust the import path if necessary
import Footer from '@/components/Footer'; // Import the Footer component
import { useState } from 'react';

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  // State to handle search results
  const [searchResults, setSearchResults] = useState<any[]>([]);

  // Search handler function
  const handleSearch = (query: string) => {
    // Mock search results; replace with actual search logic
    const mockEvents = [
      { id: 1, name: 'Football Match', category: 'Sports', time: '10:00 AM' },
      { id: 2, name: 'Basketball Match', category: 'Sports', time: '12:00 PM' },
      { id: 3, name: 'Political Debate', category: 'Politics', time: '4:00 PM' }
    ];

    const filteredEvents = mockEvents.filter(event =>
      event.name.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filteredEvents); // Set the filtered results in state
  };

  return (
    <html lang="en">
      <body className="bg-black text-gray-100">
        <Providers>
          <div className="flex bg-black h-screen overflow-hidden">
            {/* Sidebar */}
            <aside className="w-1/4 md:w-1/5 bg-neutral-800 p-4 h-full fixed border-r border-gray-700">
              <Header />
              <BetsSummary />
            </aside>

            {/* Main content */}
            <main className="flex-1 overflow-y-auto ml-[20%] flex flex-col">
              {/* Pass the handleSearch function to TopNav */}
              <TopNav onSearch={handleSearch} />
              
              {/* Display the search results if available */}
              <div className="bg-black p-4 rounded-lg text-gray-100 flex-grow">
                {searchResults.length > 0 ? (
                  <div className="bg-neutral-800 p-4 rounded-lg text-gray-100">
                    <h2 className="text-2xl mb-4">Search Results</h2>
                    <ul>
                      {searchResults.map(result => (
                        <li key={result.id} className="mb-2">
                          <span className="font-bold">{result.name}</span> - {result.category} - {result.time}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  children // Render the regular page content when no search is performed
                )}
              </div>
              <Betslip  />
              <Footer />
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
