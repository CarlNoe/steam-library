import Library from './features/Library/Library';
import Header from './components/common/Header/Header';
import Navbar from './components/common/Navbar/Navbar';

function App() {
	return (
		<div className="min-h-screen">
			<Navbar />
			<Header />
			<Library />
		</div>
	);
}

export default App;
