import steamWhite from '../../../assets/images/steamWhite.svg';

function Header() {
	return (
		<header className="bg-steam-dark p-3">
			<img src={steamWhite} alt="Steam Logo" className="mx-auto" />
		</header>
	);
}

export default Header;
