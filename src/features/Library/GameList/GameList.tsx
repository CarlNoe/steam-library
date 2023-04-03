import { useEffect, useState } from 'react';
import { getGamesByPaginationForTiles } from '../../../api/gamesAPI';
import GameTile from '../../../components/common/GameTile/GameTile';
import { GameDataForTiles } from '../../../types/gameTypes';

function GameList() {
	const [games, setGames] = useState<GameDataForTiles[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchGames = async () => {
			try {
				const response = await getGamesByPaginationForTiles(0, 100);
				setGames(response);
			} catch (error) {
				throw new Error(String(error));
			} finally {
				setLoading(false);
			}
		};

		fetchGames();
	}, []);

	return (
		<main className="p-2">
			{!loading &&
				games.map((game: GameDataForTiles) => (
					<GameTile
						key={game.docId}
						name={game.name}
						headerImage={game.headerImage}
						price={game.price}
						releaseDate={game.releaseDate}
						positiveRatings={game.positiveRatings}
						negativeRatings={game.negativeRatings}
						platforms={game.platforms}
					/>
				))}
		</main>
	);
}

export default GameList;
