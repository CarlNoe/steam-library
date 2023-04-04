import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleNav } from '../../commonSlice';

interface NavbarLinkProps {
	url: string;
	name: string;
}

function NavbarLink(props: NavbarLinkProps) {
	const dispatch = useDispatch();

	const { name, url } = props;

	const handleClick = () => {
		dispatch(toggleNav());
	};

	return (
		<Link to={url}>
			<button
				className="flex h-12 w-full items-center border-t-[1px] border-black px-4 shadow-[0px_0px_1px_0px_rgba(255,255,255,0.5)_inset]"
				type="button"
				onClick={handleClick}
			>
				<span className="text-2xl font-extralight">{name}</span>
			</button>
		</Link>
	);
}

export default NavbarLink;
