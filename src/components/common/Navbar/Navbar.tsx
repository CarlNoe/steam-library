import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app/store';
import { toggleNav } from '../../commonSlice';
import avatar from '../../../assets/images/avatar.gif';
import NavbarLink from './NavbarLink/NavbarLink';

const names = ['Account', 'Favorites', 'Library'];

function Navbar() {
	const dispatch = useDispatch();
	const isNavOpen = useSelector((state: RootState) => state.common.isNavOpen);

	const handleClick = () => {
		dispatch(toggleNav());
	};

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
						<span className="text-xl opacity-80">Username</span>
					</div>
					<span className="opacity-80">Cart (0)</span>
					<span className="opacity-80">Wallet (2,67€)</span>
				</div>
				<div className="flex flex-col">
					{names.map((name) => (
						<NavbarLink key={name} name={name} />
					))}
				</div>
			</aside>
			{/* Background blur: */}
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
