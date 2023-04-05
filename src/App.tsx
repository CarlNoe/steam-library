import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Library from './features/Library/Library';
import Header from './components/common/Header/Header';
import Navbar from './components/common/Navbar/Navbar';
import Favorite from './features/Favorite/Favorite';

function App() {
	const routes = [
		{
			path: '/',
			element: <Library />,
		},
		{
			path: '/auth',
			element: <div>Put login page in App.tsx</div>,
		},
		{
			path: '/favorites',
			element: <Favorite />,
		},
	];

	return (
		<BrowserRouter>
			<div className="min-h-screen">
				<Navbar />
				<Header />
				<Routes>
					{routes.map((route) => (
						<Route key={route.path} path={route.path} element={route.element} />
					))}
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
