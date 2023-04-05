import { useParams } from 'react-router-dom';

function GameDetails() {
	const { id: docId } = useParams<string>();

	return <div>GameDetails id: {docId}</div>;
}

export default GameDetails;
