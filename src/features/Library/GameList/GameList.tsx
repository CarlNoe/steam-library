import games from '../../../api/gamesAPI';
import GameTile from '../../../components/reusable/GameTile/GameTile';

function GameList() {
	return (
		<main className="p-2">
			{games.map((game) => (
				<GameTile
					key={game.id}
					title={game.name}
					imageUrl={game.image}
					price={game.price}
					releaseDate={game.releaseDate}
					rating={game.rating}
					platforms={game.platforms}
				/>
			))}
		</main>
	);
}

export default GameList;
