import windows from '../../../assets/images/windows.png';
import mac from '../../../assets/images/mac.png';
import linux from '../../../assets/images/linux.png';

interface GameTileProps {
	name: string;
	headerImage: string;
	price: string;
	releaseDate: string;
	positiveRatings: string;
	negativeRatings: string;
	platforms: string;
}

function GameTile(props: GameTileProps) {
	const {
		name,
		headerImage,
		price,
		releaseDate,
		positiveRatings,
		negativeRatings,
		platforms,
	} = props;

	const averageRating = Math.round(
		(Number(positiveRatings) /
			(Number(positiveRatings) + Number(negativeRatings))) *
			100
	);

	return (
		<div className="mb-2 flex h-20 bg-steam-dark bg-opacity-40 p-2">
			<div className="flex flex-shrink-0 flex-col justify-around">
				<img src={headerImage} alt={name} className="h-10 w-[108px]" />
				<div className="flex items-center justify-between font-motiva text-[11px]">
					<span className="opacity-[50%]">{releaseDate}</span>
					<span className="text-steam-lightBlue">{averageRating}%</span>
				</div>
			</div>
			<div className="ml-2 flex w-full flex-col justify-between">
				<h3 className="font-motiva">{name}</h3>
				<div className="flex opacity-50">
					{platforms.includes('windows') && <img src={windows} alt="Windows" />}
					{platforms.includes('mac') && <img src={mac} alt="Mac" />}
					{platforms.includes('linux') && <img src={linux} alt="Linux" />}
				</div>
				<span className="self-end text-xs font-bold">
					{Number(price) > 0 ? `${price}€` : 'Free-to-play'}
				</span>
			</div>
		</div>
	);
}

export default GameTile;
