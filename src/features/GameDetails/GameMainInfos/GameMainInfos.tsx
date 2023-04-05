interface GameMainInfosProps {
	name: string;
	developer: string;
	publisher: string;
	releaseDate: string;
}

function GameMainInfos(props: GameMainInfosProps) {
	const { name, developer, publisher, releaseDate } = props;
	return (
		<div className="mb-4 text-base font-light">
			<h1 className="mb-2 text-xl font-bold text-white">{name}</h1>
			<div className="mb-2 flex items-center">
				<p className="mr-8 opacity-60">Developers</p>
				<p className="text-steam-lightBlue">{developer}</p>
			</div>
			<div className="mb-2 flex items-center">
				<p className="mr-8 opacity-60">Publishers</p>
				<p className="text-steam-lightBlue">{publisher}</p>
			</div>
			<div className="mb-2 flex items-center">
				<p className="mr-8 opacity-60">Release Date</p>
				<p>{releaseDate}</p>
			</div>
		</div>
	);
}

export default GameMainInfos;
