import { useEffect, useState, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app/store';
import { resetFilter } from '../librarySlice';

import GameTile from '../../../components/common/GameTile/GameTile';
import GameFiltering from '../GameFiltering/GameFiltering';
import { GameDataForTiles } from '../../../types/gameTypes';
import loadGames from './loadGames';

function GameList() {
	const dispatch = useDispatch();

	const [games, setGames] = useState<GameDataForTiles[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [page, setPage] = useState<number>(0);
	const observer = useRef<IntersectionObserver | null>(null);
	const isMounted = useRef(false);
	const loadMoreTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

	const currentFilter = useSelector(
		(state: RootState) => state.library.currentFilter
	);

	const search = useSelector((state: RootState) => state.library.search);

	const lastGameElementRef = useCallback(
		(node: HTMLDivElement | null) => {
			if (loading) return;

			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting) {
					if (loadMoreTimeout.current) {
						clearTimeout(loadMoreTimeout.current);
					}
					loadMoreTimeout.current = setTimeout(() => {
						setPage((prevPage) => prevPage + 1);
					}, 50);
				}
			});

			if (node) observer.current.observe(node);
		},
		[loading]
	);

	useEffect(() => {
		if (isMounted.current) {
			setGames([]);
			setPage(0);
		} else {
			isMounted.current = true;
		}
	}, [currentFilter, search]);

	useEffect(() => {
		const loadGamesWrapper = async (page: number) => {
			setLoading(true);
			const response = await loadGames(page, currentFilter, search);
			setLoading(false);

			if (page === 0) {
				setGames(response);
			} else {
				setGames((prevGames) => [...prevGames, ...response]);
			}
		};

		loadGamesWrapper(page);
	}, [page, currentFilter, search]);

	// Reset the filter when a search is performed
	useEffect(() => {
		if (search !== '') {
			dispatch(resetFilter());
		}
	}, [search, dispatch]);

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
