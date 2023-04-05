import parse from 'html-react-parser';

interface GameDetailedDescProps {
	detailedDesc: string;
}

function GameDetailedDesc(props: GameDetailedDescProps) {
	const { detailedDesc } = props;
	return (
		<div>
			{' '}
			<div>{parse(detailedDesc)}</div>
		</div>
	);
}

export default GameDetailedDesc;
