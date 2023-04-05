import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGameDetailsById } from '../../../api/gamesAPI';
import { RawGameData } from '../../../types/gameTypes';

import GameMainInfos from './GameMainInfos/GameMainInfos';
import GameRating from './GameRating/GameRating';
import GameTags from './GameTags/GameTags';
import GameAddToCart from './GameAddToCart/GameAddToCart';
import GameDetailedDesc from './GameDetailedDesc/GameDetailedDesc';

function GameDetails() {
	const { id } = useParams<{ id: string | undefined }>();
	const [gameDetails, setGameDetails] = useState<RawGameData>();

	useEffect(() => {
		if (id) {
			getGameDetailsById(id).then((data) => setGameDetails(data));
		}
	}, [id]);

	if (!id) return <div>Game not found</div>;
	if (!gameDetails) return <div>Loading...</div>;

	const {
		name,
		release_date: releaseDate,
		developer,
		publisher,
		// platforms,
		genres,
		positive_ratings: positiveRatings,
		negative_ratings: negativeRatings,
		price,
		// pc_requirements: pcRequirements,
		// mac_requirements: macRequirements,
		// linux_requirements: linuxRequirements,
		// minimum,
		// recommended,
		header_image: headerImage,
		// screenshots,
		// background,
		// movies,
		detailed_description: detailedDescription,
		short_description: shortDescription,
	} = gameDetails;

	return (
		<main className="bg-steam-dark font-motiva">
			<img src={headerImage} alt={name} className="w-full" />
			<div className="px-2 py-4">
				<GameMainInfos
					name={name}
					releaseDate={releaseDate}
					developer={developer}
					publisher={publisher}
				/>

				<p className="mb-4">{shortDescription}</p>

				<GameTags genres={genres} />
				<GameRating
					positiveRatings={positiveRatings}
					negativeRatings={negativeRatings}
				/>
				{/* todo: metter carroussel */}
				<button
					type="button"
					className="mb-4 rounded-sm bg-steam-darkBlue px-4 py-2 font-bold text-steam-lightBlue"
				>
					Add to Favorites
				</button>
				{/* todo: add an indicator if already favorited */}
				<GameAddToCart price={price} name={name} />
				<GameDetailedDesc detailedDesc={detailedDescription} />
			</div>
		</main>
	);
}

export default GameDetails;
