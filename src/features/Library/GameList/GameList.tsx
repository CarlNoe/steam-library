import { useEffect, useState, useRef, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';

import GameTile from '../../../components/common/GameTile/GameTile';
import GameFiltering from '../GameFiltering/GameFiltering';
import { GameDataForTiles } from '../../../types/gameTypes';
import loadGames from './loadGames';

function GameList() {
	const [games, setGames] = useState<GameDataForTiles[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [page, setPage] = useState<number>(0);
	const observer = useRef<IntersectionObserver | null>(null);
	const isMounted = useRef(false);

	const currentFilter = useSelector(
		(state: RootState) => state.library.currentFilter
	);

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
		const loadGamesWrapper = async (page: number) => {
			try {
				setLoading(true);
				const response = await loadGames(page, currentFilter);
				setGames((prevGames) => [...prevGames, ...response]);
			} catch (error) {
				throw new Error(String(error));
			} finally {
				setLoading(false);
			}
		};

		if (!isMounted.current) {
			isMounted.current = true;
		} else {
			loadGamesWrapper(page);
		}
	}, [page, currentFilter]);

	useEffect(() => {
		setGames([]);
		setPage(0);
	}, [currentFilter]);

	return (
		<main className="p-2">
			<GameFiltering />
			{games.map((game: GameDataForTiles, index: number) => (
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
			{loading && <div>Loading...</div>}
		</main>
	);
}

export default GameList;
