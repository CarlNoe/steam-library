interface GameRatingProps {
	positiveRatings: string;
	negativeRatings: string;
}

function GameRating(props: GameRatingProps) {
	const { positiveRatings, negativeRatings } = props;

	const positiveRatingsPercentage = Math.round(
		(Number(positiveRatings) /
			(Number(positiveRatings) + Number(negativeRatings))) *
			100
	);

	const positiveRatingsPercentageText = (pourcent: number) => {
		if (pourcent > 75) {
			return 'Very Positive';
		}
		if (pourcent > 50) {
			return 'Mostly Positive';
		}
		if (pourcent > 25) {
			return 'Mixed';
		}
		if (pourcent > 0) {
			return 'Mostly Negative';
		}
		return 'No Ratings Yet';
	};

	return (
		<div className="mb-4">
			<h2 className="mb-1 text-base opacity-60">RATINGS</h2>
			<div className="flex h-12 items-center rounded-md bg-steam-medBlue bg-opacity-50 px-3 py-1">
				<span className="text-steam-lightBlue">
					{Number(positiveRatings) + Number(negativeRatings) > 0 ? (
						<>
							{positiveRatingsPercentageText(positiveRatingsPercentage)}
							<span className="text-xs  text-gray-400">
								{' '}
								({positiveRatingsPercentage}%) of positive ratings on{' '}
								{Number(positiveRatings) + Number(negativeRatings)} rates
							</span>
						</>
					) : (
						'No Ratings Yet'
					)}
				</span>
			</div>
		</div>
	);
}

export default GameRating;
