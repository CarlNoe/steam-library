import { ChangeEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../app/store';
import { setSearch, setCurrentFilter } from '../../librarySlice';

function GameFiltering() {
	const dispatch = useDispatch();

	const [searchValue, setSearchValue] = useState('');

	const { currentFilter } = useSelector((state: RootState) => state.library);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		dispatch(setCurrentFilter(e.target.value));
	};

	const handleButtonClick = () => {
		dispatch(setSearch(searchValue));
	};

	const filterOptions = [
		{ value: 'default', name: 'Default' },
		{ value: 'name', name: 'Name' },
		{ value: 'releaseDate', name: 'Release Date' },
		{ value: 'price', name: 'Price' },
		{ value: 'positiveRatings', name: 'Positive Ratings' },
		{ value: 'negativeRatings', name: 'Negative Ratings' },
	];

	return (
		<div className="mb-2 flex h-20 bg-steam-dark p-2 font-arial">
			<form className="flex w-full flex-col justify-between">
				<div className="flex items-center">
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
						value={currentFilter}
						onChange={handleSelectChange}
					>
						{filterOptions.map((option) => (
							<option key={option.value} value={option.value}>
								{option.name}
							</option>
						))}
					</select>
				</div>
				<div className="flex items-center">
					<input
						type="text"
						className="rounded-xs mr-2 w-full border-2 border-none bg-steam-medBlue p-2 text-xs font-thin opacity-90"
						placeholder="Game to research..."
						value={searchValue}
						onChange={handleInputChange}
					/>
					<button
						type="button"
						className="rounded-xs border-2 border-none bg-steam-medBlue p-2 text-xs font-thin text-steam-lightBlue opacity-90"
						onClick={handleButtonClick}
					>
						Research
					</button>
				</div>
			</form>
		</div>
	);
}

export default GameFiltering;
