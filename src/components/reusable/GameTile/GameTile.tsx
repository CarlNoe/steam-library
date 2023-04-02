interface GameTileProps {
	title: string;
	imageUrl: string;
	price: number;
	releaseDate: string;
	rating: number;
}

function GameTile(props: GameTileProps) {
	const { title, imageUrl, price, releaseDate, rating } = props;

	return (
		<div className="mb-2 flex h-20 bg-steam-dark bg-opacity-40 p-2">
			<div className="flex flex-shrink-0 flex-col justify-around">
				<img src={imageUrl} alt={title} className="h-10 w-[108px]" />
				<div className="flex items-center justify-between text-[11px]">
					<span>{releaseDate}</span>
					<span className="text-steam-lightBlue">{rating}%</span>
				</div>
			</div>
			<div className="ml-2 flex w-full flex-col justify-between">
				<h3 className="font-motiva">{title}</h3>

				<span className="self-end text-xs font-bold">{price}€</span>
			</div>
		</div>
	);
}

export default GameTile;
