interface GameAddToCartProps {
	price: string;
	name: string;
}

function GameAddToCart(props: GameAddToCartProps) {
	const { price, name } = props;

	return (
		<div className="mb-4 flex h-20 items-center justify-between rounded-md bg-gradient-to-br from-gray-700 to-gray-500 px-6 py-4">
			<span>Play to {name}</span>
			<button
				type="button"
				className="ml-8 flex h-8 items-center justify-center rounded-sm bg-black px-2 text-white"
			>
				{Number(price) > 0 ? `${price}€` : 'Free-to-play'}
			</button>
		</div>
	);
}

export default GameAddToCart;
