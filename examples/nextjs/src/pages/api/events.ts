import { useGames } from '@azuro-org/sdk'; 
import { GameQuery } from '@azuro-org/toolkit';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { search } = req.query;
        if (!search) {
            return res.status(400).json({ message: 'Invalid search query' });
        }

        const searchQuery = (search as string).toLowerCase();

        // Example categories and subcategories including Sports, Politics, Esports, Leagues, Tournaments
        const categories = [
            { name: 'Sports', subcategories: ['Football', 'Basketball', 'Tennis', 'Cricket', 'Rugby Union', 'Ice Hockey'] },
            { name: 'Politics', subcategories: ['Elections', 'Debates', 'Referendums', 'Political Events'] },
            { name: 'Esports', subcategories: ['Dota 2', 'Counter-Strike', 'League of Legends', 'CS:GO'] },
            { name: 'Leagues', subcategories: ['Premier League', 'La Liga', 'Serie A', 'NBA', 'NFL', 'UEFA Champions League', 'UEFA Conference League'] },
            { name: 'Tournaments', subcategories: ['World Cup', 'Olympics', 'Asian Games'] },
            { name: 'Teams', subcategories: ['FC Copenhagen', 'Chelsea', 'Barcelona', 'Real Madrid'] },
            { name: 'Countries', subcategories: ['Brazil', 'Germany', 'Thailand', 'Maldives'] }, // Add more countries as teams or venues
        ];

        // Fetch games from Azuro SDK
        const games = await useGames(); 

        // Check if there are games
        if (!games || !games.games || games.games.length === 0) {
            return res.status(404).json({ message: 'No games found' });
        }

        // Filter games based on the search query (for sports, leagues, participants, teams, categories including Politics)
        const filteredGames = games.games.filter((game: GameQuery['games'][0]) => {
            // Check if the search matches any of the following:
            const matchesGameData = game.sport.name.toLowerCase().includes(searchQuery) || 
                game.league.name.toLowerCase().includes(searchQuery) || 
                game.participants.some(participant => participant.name.toLowerCase().includes(searchQuery));

            // Check for team names or matchups
            const matchesTeams = game.participants.some(team => team.name.toLowerCase().includes(searchQuery));

            // Check for countries as teams or venues
            const matchesCountries = game.participants.some(participant =>
                participant.name.toLowerCase().includes(searchQuery ?? '')
            );                      

            // Check if the search matches categories or subcategories including Politics
            const matchesCategory = categories.some(category =>
                category.name.toLowerCase().includes(searchQuery) || 
                category.subcategories.some(subcategory => subcategory.toLowerCase().includes(searchQuery))
            );

            // Return true if any condition matches the search query
            return matchesGameData || matchesTeams || matchesCountries || matchesCategory;
        });

        if (filteredGames.length > 0) {
            // Return the filtered games
            return res.status(200).json(filteredGames);
        } else {
            return res.status(404).json({ message: 'No events found for this search' });
        }
    } catch (error) {
        console.error('Error fetching games:', error);
        return res.status(500).json({ message: 'Error fetching events' });
    }
}
