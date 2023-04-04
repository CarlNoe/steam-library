import { useEffect, useState, useRef, useCallback } from 'react';
import { getGamesByPaginationForTiles } from '../../../api/gamesAPI';
import GameTile from '../../../components/common/GameTile/GameTile';
import { GameDataForTiles } from '../../../types/gameTypes';

function GameList() {
	const [games, setGames] = useState<GameDataForTiles[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [page, setPage] = useState<number>(0);
	const observer = useRef<IntersectionObserver | null>(null);
	// isMounted is used since useEffect is called twice during the initial render because of React.StrictMode
	const isMounted = useRef(false);

	const lastGameElementRef = useCallback(
		(node: HTMLDivElement | null) => {
			if (loading) return;

			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting) {
					setPage((prevPage) => prevPage + 1);
				}
			});

			if (node) observer.current.observe(node);
		},
		[loading]
	);

	useEffect(() => {
		const fetchGames = async (page: number) => {
			try {
				const response = await getGamesByPaginationForTiles(page, 30);
				setGames((prevGames) => [...prevGames, ...response]);
			} catch (error) {
				throw new Error(String(error));
			} finally {
				setLoading(false);
			}
		};

		// This condition is used to check if the component is mounted because
		// of React.StrictMode which called useEffect twice during the initial render
		if (!isMounted.current) {
			isMounted.current = true;
		} else {
			fetchGames(page);
		}
	}, [page]);

	return (
		<main className="p-2">
			{!loading &&
				games.map((game: GameDataForTiles, index: number) => (
					<div
						ref={index === games.length - 1 ? lastGameElementRef : null}
						key={game.docId}
					>
						<GameTile
							name={game.name}
							headerImage={game.headerImage}
							price={game.price}
							releaseDate={game.releaseDate}
							positiveRatings={game.positiveRatings}
							negativeRatings={game.negativeRatings}
							platforms={game.platforms}
						/>
					</div>
				))}
		</main>
	);
}

export default GameList;
