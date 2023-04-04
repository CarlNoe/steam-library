interface NavbarLinkProps {
	name: string;
}

function NavbarLink(props: NavbarLinkProps) {
	const { name } = props;

	return (
		<div className="flex h-12 items-center border-t-[1px] border-black px-4 shadow-[0px_0px_1px_0px_rgba(255,255,255,0.5)_inset]">
			<span className="text-2xl font-extralight">{name}</span>
		</div>
	);
}

export default NavbarLink;
