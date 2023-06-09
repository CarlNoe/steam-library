import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './common/Header/Header';
import Navbar from './common/Navbar/Navbar';
import Favorite from './features/Favorite/Favorite';
import SignUp from './features/SignUp/signUpForm';
import SignIn from './features/SignIn/signInForm';

import Library from './features/Library/Library';
import GameDetails from './features/GameDetails/GameDetails';

function App() {
	const routes = [
		{
			path: '/',
			element: <Library />,
		},
		{
			path: '/SignUp',
			element: <SignUp />,
		},
		{
			path: '/SignIn',
			element: <SignIn />,
		},
		{
			path: '/favorites',
			element: <Favorite />,
		},
		{
			path: '/games/:id',
			element: <GameDetails />,
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
