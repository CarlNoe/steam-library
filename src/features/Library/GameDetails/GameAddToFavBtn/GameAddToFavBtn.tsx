import { addGameToFavorites } from '../../../../api/favoritesAPI';

interface GameAddToFavBtnProps {
	gameId: string;
}

function GameAddToFavBtn(props: GameAddToFavBtnProps) {
	const { gameId } = props;
	return (
		<button
			className="mb-4 rounded-sm bg-steam-darkBlue px-4 py-2 font-bold text-steam-lightBlue"
			onClick={() => addGameToFavorites(gameId)}
			type="button"
		>
			Add to Favorites
		</button>
	);
}

export default GameAddToFavBtn;
