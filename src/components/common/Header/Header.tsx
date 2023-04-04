import { useDispatch } from 'react-redux';
import { toggleNav } from '../commonSlice';
import steamWhite from '../../../assets/images/steamWhite.svg';
import burger from '../../../assets/images/burger.png';

function Header() {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(toggleNav());
	};

	return (
		<header className="relative flex items-center bg-steam-dark px-2 py-4">
			<button type="button" onClick={handleClick}>
				<img src={burger} alt="Burger Icon" className="h-8" />
			</button>
			<img
				src={steamWhite}
				alt="Steam Logo"
				className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
			/>
		</header>
	);
}

export default Header;
