import { Link } from 'react-router-dom';
import React from 'react';
import windows from '../../assets/images/windows.png';
import mac from '../../assets/images/mac.png';
import linux from '../../assets/images/linux.png';

interface GameTileProps {
	link: string;
	name: string;
	headerImage: string;
	price: string;
	releaseDate: string;
	positiveRatings: string;
	negativeRatings: string;
	platforms: string;
}

const GameTile = React.memo((props: GameTileProps) => {
	const {
		link,
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
		<Link to={link}>
			<div className="mb-2 flex h-20 bg-steam-dark bg-opacity-40 p-2">
				<div className="flex flex-shrink-0 flex-col justify-between">
					<img
						src={
							headerImage ||
							'https://fakeimg.pl/350x200/?text=NoImage&font=lobster'
						}
						alt={name}
						className="h-12"
					/>
					<div className="flex items-center justify-between font-motiva text-[11px]">
						<span className="opacity-[50%]">{releaseDate || 'TBA'}</span>
						<span className="text-steam-lightBlue">
							{Number(positiveRatings) > 0 && Number(negativeRatings) > 0
								? `${averageRating}%`
								: ''}
						</span>
					</div>
				</div>
				<div className="ml-2 flex w-full flex-col justify-between">
					<h3 className="font-motiva">{name}</h3>
					<div className="flex opacity-50">
						{typeof platforms === 'string' && platforms.includes('windows') && (
							<img src={windows} alt="Windows" />
						)}
						{typeof platforms === 'string' && platforms.includes('mac') && (
							<img src={mac} alt="Mac" />
						)}
						{typeof platforms === 'string' && platforms.includes('linux') && (
							<img src={linux} alt="Linux" />
						)}
					</div>
					<span className="self-end text-xs font-bold">
						{Number(price) > 0 ? `${price}€` : 'Free-to-play'}
					</span>
				</div>
			</div>
		</Link>
	);
});

export default GameTile;
