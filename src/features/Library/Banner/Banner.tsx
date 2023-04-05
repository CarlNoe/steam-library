interface BannerProps {
	title: string;
	subtitle: string;
}

function Banner(props: BannerProps) {
	const { title, subtitle } = props;
	return (
		<div className="flex h-36 w-full flex-col justify-center bg-gradient-to-br from-steam-medBlue to-blue-900 p-2 font-motiva">
			<h1 className="mb-4 text-3xl font-medium">{title.toUpperCase()}</h1>
			<h2 className="text-lg font-thin">{subtitle}</h2>
		</div>
	);
}

export default Banner;
