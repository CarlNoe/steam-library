import GameList from './GameList/GameList';
import Banner from './Banner/Banner';

function Library() {
	return (
		<div>
			<Banner title="All steam games" subtitle="Browse our library" />
			<GameList />
		</div>
	);
}

export default Library;
