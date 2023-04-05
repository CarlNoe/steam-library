import { splitBySemicolon } from '../../../utils/utils';

interface GameTagsProps {
	genres: string;
}

function GameTags(props: GameTagsProps) {
	const { genres } = props;
	return (
		<div className="mb-4">
			<h2 className="mb-1 text-base opacity-60">TAGS</h2>
			<div className="flex flex-wrap">
				{splitBySemicolon(genres).map((genre) => (
					<span
						key={genre}
						className="mb-2 mr-2 w-fit whitespace-nowrap rounded-md bg-steam-medBlue bg-opacity-50 px-3 py-[6px] text-xs text-steam-lightBlue"
					>
						{genre}
					</span>
				))}
			</div>
		</div>
	);
}

export default GameTags;
