import parse from 'html-react-parser';

interface GameDetailedDescProps {
	detailedDesc: string;
}

function GameDetailedDesc(props: GameDetailedDescProps) {
	const { detailedDesc } = props;
	return (
		<div>
			<h2 className="mb-4 text-base opacity-60">ABOUT THIS GAME</h2>
			<div>{parse(detailedDesc)}</div>
		</div>
	);
}

export default GameDetailedDesc;
