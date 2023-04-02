import windows from '../../../assets/images/windows.png';
import mac from '../../../assets/images/mac.png';
import linux from '../../../assets/images/linux.png';

interface GameTileProps {
	title: string;
	imageUrl: string;
	price: number;
	releaseDate: string;
	rating: number;
	platforms: string;
}

function GameTile(props: GameTileProps) {
	const { title, imageUrl, price, releaseDate, rating, platforms } = props;

	return (
		<div className="mb-2 flex h-20 bg-steam-dark bg-opacity-40 p-2">
			<div className="flex flex-shrink-0 flex-col justify-around">
				<img src={imageUrl} alt={title} className="h-10 w-[108px]" />
				<div className="flex items-center justify-between font-motiva text-[11px]">
					<span className="opacity-[85%]">{releaseDate}</span>
					<span className="text-steam-lightBlue">{rating}%</span>
				</div>
			</div>
			<div className="ml-2 flex w-full flex-col justify-between">
				<h3 className="font-motiva">{title}</h3>
				<div className="flex opacity-50">
					{platforms.includes('windows') && <img src={windows} alt="Windows" />}
					{platforms.includes('mac') && <img src={mac} alt="Mac" />}
					{platforms.includes('linux') && <img src={linux} alt="Linux" />}
				</div>
				<span className="self-end text-xs font-bold">{price}€</span>
			</div>
		</div>
	);
}

export default GameTile;
