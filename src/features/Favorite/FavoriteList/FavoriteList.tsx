import { useEffect, useState } from 'react';
import { GameDataForTiles } from '../../../types/gameTypes';
import GameTile from '../../../components/common/GameTile/GameTile';
import getFavoriteGames from '../../../api/favoritesAPI';

function FavoriteList() {
	const [favorites, setFavorites] = useState<GameDataForTiles[]>([]);

	useEffect(() => {
		const fetchFavorites = async () => {
			try {
				const response = await getFavoriteGames();
				setFavorites(response);
			} catch (error) {
				throw new Error(String(error));
			}
		};
		fetchFavorites();
	});

	return (
		<main className="p-2">
			{favorites.map((favorite: GameDataForTiles) => (
				<div key={favorite.docId}>
					<GameTile
						name={favorite.name}
						headerImage={favorite.headerImage}
						price={favorite.price}
						releaseDate={favorite.releaseDate}
						positiveRatings={favorite.positiveRatings}
						negativeRatings={favorite.negativeRatings}
						platforms={favorite.platforms}
					/>
				</div>
			))}
		</main>
	);
}
export default FavoriteList;
