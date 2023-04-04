function GameFiltering() {
	return (
		<div className="mb-2 flex h-20 bg-steam-dark p-2 font-arial">
			<form className="flex w-full flex-col justify-between">
				<div className="flex h-1/2 items-center">
					<label
						htmlFor="filter"
						className="mr-2 font-extralight opacity-90"
						aria-label="Filter by"
					>
						Filter by:
					</label>
					<select
						name="filter"
						id="filter"
						className="rounded-xs border-2 border-none bg-steam-medBlue py-1 text-xs font-thin text-steam-lightBlue opacity-90"
					>
						<option value="default">Default</option>
						<option value="name">Name</option>
						<option value="releaseDate">Release Date</option>
						<option value="price">Price</option>
						<option value="positiveRatings">Positive Ratings</option>
						<option value="negativeRatings">Negative Ratings</option>
					</select>
				</div>
				<div className="flex h-1/2 items-center">
					<input
						type="text"
						className="rounded-xs mr-2 w-full border-2 border-none bg-steam-medBlue px-2 py-1 text-xs font-thin opacity-90"
						placeholder="Game to research..."
					/>
					<button
						type="submit"
						className="rounded-xs border-2 border-none bg-steam-medBlue px-2 py-1 text-xs font-thin text-steam-lightBlue opacity-90"
					>
						Research
					</button>
				</div>
			</form>
		</div>
	);
}

export default GameFiltering;
