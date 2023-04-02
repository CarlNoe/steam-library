import { useState } from 'react';
import Library from './features/Library/Library';

function App() {
	const [count] = useState(0);

	return (
		<div className="min-h-screen">
			<Library />
			{count}
		</div>
	);
}

export default App;
