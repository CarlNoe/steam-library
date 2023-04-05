import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { toggleNav } from '../commonSlice';
import avatar from '../../assets/images/avatar.gif';
import NavbarLink from './NavbarLink/NavbarLink';

const Links = [
	{
		url: '/',
		name: 'Library',
	},
	...(localStorage.getItem('userData')
		? [{ url: '/favorites', name: 'Favorites' }]
		: [{ url: '/SignIn', name: 'Sign In' }]),
];

function SignOut() {
	localStorage.clear();
	window.location.href = '/';
}

function Navbar() {
	const dispatch = useDispatch();
	const isNavOpen = useSelector((state: RootState) => state.common.isNavOpen);

	const handleClick = () => {
		dispatch(toggleNav());
	};

	const getUsername = () =>
		JSON.parse(localStorage.getItem('userData') || '{}').username ||
		'Not connected';

	const lateralNavClassNames = `fixed left-0 top-0 z-50 h-screen w-[280px] bg-steam-dark py-6 font-motiva shadow-2xl ${
		isNavOpen ? ' translate-x-0 transform' : ' -translate-x-full transform'
	}`;

	const bgBlurClassNames = `z-1 left-0 top-0 h-screen w-screen bg-black bg-opacity-50 cursor-default ${
		isNavOpen ? 'fixed transition-all duration-500' : 'hidden'
	}`;

	return (
		<>
			<aside
				className={lateralNavClassNames}
				style={{ transition: 'transform 0.3s ease-in-out' }}
			>
				<div className="flex flex-col border-b-2 border-gray-900 px-6 pb-6 shadow-inner">
					<div className="flex items-center pb-6">
						<img
							src={avatar}
							alt="Avatar"
							className="mr-4 h-10 w-10 rounded-full"
						/>
						<span className="text-xl opacity-80">{getUsername()}</span>
					</div>
					<span className="opacity-80">Cart (0)</span>
					<span className="opacity-80">Wallet (0.00€)</span>
				</div>
				<div className="flex flex-col">
					{Links.map((link) => (
						<NavbarLink key={link.url} name={link.name} url={link.url} />
					))}
				</div>
				{localStorage.getItem('userData') && (
					<div className="flex justify-center">
						<button
							type="button"
							className="absolute bottom-4 left-4 opacity-75 hover:opacity-100"
							onClick={SignOut}
						>
							Sign Out
						</button>
					</div>
				)}
			</aside>
			<button
				type="button"
				className={bgBlurClassNames}
				onClick={handleClick}
				tabIndex={0}
				aria-label="Close navigation menu"
			/>
		</>
	);
}

export default Navbar;
